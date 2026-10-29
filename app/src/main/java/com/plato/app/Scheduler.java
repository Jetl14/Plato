package com.plato.app;

import android.app.AlarmManager;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

import org.json.JSONArray;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;

/** Programa los recordatorios que envía la web: diarios (hora y minuto, opcionalmente un día de la semana) y únicos (fin del ayuno). */
public class Scheduler {
    static final String CANAL = "recordatorios";

    static String hoy() { return new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(Calendar.getInstance().getTime()); }

    static void programarTodo(Context c) {
        try {
            SharedPreferences sp = c.getSharedPreferences("plato", Context.MODE_PRIVATE);
            AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
            if (am == null) return;
            // cancelar los anteriores
            Set<String> antes = sp.getStringSet("ids", new HashSet<>());
            for (String id : antes) am.cancel(pi(c, id, null, null, null));
            Set<String> ahora = new HashSet<>();
            String j = sp.getString("recordatorios", null);
            if (j == null) { sp.edit().putStringSet("ids", ahora).apply(); return; }
            JSONObject o = new JSONObject(j);
            JSONArray d = o.optJSONArray("diarios");
            long now = System.currentTimeMillis();
            if (d != null) for (int i = 0; i < d.length(); i++) {
                JSONObject r = d.getJSONObject(i);
                Calendar cal = Calendar.getInstance();
                cal.set(Calendar.HOUR_OF_DAY, r.getInt("h"));
                cal.set(Calendar.MINUTE, r.getInt("m"));
                cal.set(Calendar.SECOND, 0);
                cal.set(Calendar.MILLISECOND, 0);
                if (r.has("dow")) { // 1 = lunes (formato de la web)
                    int objetivo = r.getInt("dow") % 7 + 1; // Calendar: domingo=1, lunes=2
                    while (cal.get(Calendar.DAY_OF_WEEK) != objetivo || cal.getTimeInMillis() <= now) cal.add(Calendar.DAY_OF_MONTH, 1);
                } else if (cal.getTimeInMillis() <= now) cal.add(Calendar.DAY_OF_MONTH, 1);
                String id = r.getString("id");
                poner(am, cal.getTimeInMillis(), pi(c, id, r.optString("t"), r.optString("x"), r.optString("a")));
                ahora.add(id);
            }
            JSONArray u = o.optJSONArray("unicos");
            if (u != null) for (int i = 0; i < u.length(); i++) {
                JSONObject r = u.getJSONObject(i);
                long at = r.getLong("at");
                if (at <= now) continue;
                String id = r.getString("id");
                poner(am, at, pi(c, id, r.optString("t"), r.optString("x"), r.optString("a")));
                ahora.add(id);
            }
            // revisión del widget a medianoche
            Calendar mn = Calendar.getInstance();
            mn.add(Calendar.DAY_OF_MONTH, 1);
            mn.set(Calendar.HOUR_OF_DAY, 0); mn.set(Calendar.MINUTE, 1); mn.set(Calendar.SECOND, 0);
            poner(am, mn.getTimeInMillis(), pi(c, "medianoche", null, null, null));
            ahora.add("medianoche");
            sp.edit().putStringSet("ids", ahora).apply();
        } catch (Exception ignored) {}
    }

    static void poner(AlarmManager am, long at, PendingIntent p) {
        try {
            if (Build.VERSION.SDK_INT >= 31 && !am.canScheduleExactAlarms()) am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, at, p);
            else am.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, at, p);
        } catch (SecurityException e) {
            am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, at, p);
        }
    }

    static PendingIntent pi(Context c, String id, String t, String x, String a) {
        Intent i = new Intent(c, AlarmReceiver.class).setAction("plato." + id);
        if (t != null) i.putExtra("t", t).putExtra("x", x).putExtra("a", a).putExtra("id", id);
        return PendingIntent.getBroadcast(c, id.hashCode(), i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    static void notificar(Context c, int nid, String titulo, String texto, String accion) {
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;
        if (nm.getNotificationChannel(CANAL) == null) {
            NotificationChannel ch = new NotificationChannel(CANAL, "Recordatorios", NotificationManager.IMPORTANCE_HIGH);
            ch.setDescription("Comidas, agua, peso y ayuno");
            nm.createNotificationChannel(ch);
        }
        Intent abrir = new Intent(c, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        if (accion != null) abrir.putExtra("accion", accion);
        PendingIntent p = PendingIntent.getActivity(c, nid, abrir, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        android.app.Notification n = new android.app.Notification.Builder(c, CANAL)
                .setSmallIcon(R.drawable.ic_notif)
                .setColor(0xFF2F7A57)
                .setContentTitle(titulo)
                .setContentText(texto)
                .setStyle(new android.app.Notification.BigTextStyle().bigText(texto))
                .setAutoCancel(true)
                .setContentIntent(p)
                .build();
        try { nm.notify(nid, n); } catch (SecurityException ignored) {}
    }
}
