package com.plato.app;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.widget.RemoteViews;

import org.json.JSONObject;

import java.text.NumberFormat;
import java.util.Calendar;
import java.util.Locale;

/** Widget de pantalla de inicio: calorías que quedan, barra de progreso, macros y accesos rápidos. */
public class WidgetProvider extends AppWidgetProvider {
    @Override
    public void onUpdate(Context c, AppWidgetManager m, int[] ids) { dibujar(c, m, ids); }

    static void actualizar(Context c) {
        AppWidgetManager m = AppWidgetManager.getInstance(c);
        int[] ids = m.getAppWidgetIds(new ComponentName(c, WidgetProvider.class));
        if (ids.length > 0) dibujar(c, m, ids);
    }

    static String comida() {
        int h = Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
        return h < 10 ? "desayuno" : h < 12 ? "media" : h < 15 ? "almuerzo" : h < 18 ? "onces" : "cena";
    }

    static void dibujar(Context c, AppWidgetManager m, int[] ids) {
        SharedPreferences sp = c.getSharedPreferences("plato", Context.MODE_PRIVATE);
        RemoteViews v = new RemoteViews(c.getPackageName(), R.layout.widget);
        NumberFormat nf = NumberFormat.getIntegerInstance(new Locale("es", "CO"));
        try {
            JSONObject w = new JSONObject(sp.getString("widget", "{}"));
            boolean esHoy = Scheduler.hoy().equals(sp.getString("widget_dia", ""));
            int meta = w.optInt("meta", 0);
            int comido = esHoy ? w.optInt("comido", 0) : 0;
            if (meta > 0) {
                int quedan = meta - comido;
                v.setTextViewText(R.id.etiqueta, quedan >= 0 ? "Te quedan" : "Te pasaste");
                v.setTextViewText(R.id.quedan, nf.format(Math.abs(quedan)) + " kcal");
                v.setTextViewText(R.id.detalle, nf.format(comido) + " de " + nf.format(meta) + " kcal");
                v.setProgressBar(R.id.barra, 100, Math.min(100, meta > 0 ? comido * 100 / meta : 0), false);
                if (esHoy) {
                    v.setTextViewText(R.id.macros, "Proteína " + w.optInt("p") + "/" + w.optInt("mp") + " g   ·   Carbos " + w.optInt("c") + "/" + w.optInt("mc") + " g   ·   Grasa " + w.optInt("g") + "/" + w.optInt("mg") + " g   ·   Agua " + nf.format(w.optInt("agua")) + " ml");
                } else {
                    v.setTextViewText(R.id.macros, "Aún no registras nada hoy");
                }
            }
        } catch (Exception ignored) {}
        v.setOnClickPendingIntent(R.id.raiz, abrir(c, 1, null));
        v.setOnClickPendingIntent(R.id.btn_mas, abrir(c, 2, "add:" + comida()));
        v.setOnClickPendingIntent(R.id.btn_foto, abrir(c, 3, "foto"));
        for (int id : ids) m.updateAppWidget(id, v);
    }

    static PendingIntent abrir(Context c, int rc, String accion) {
        Intent i = new Intent(c, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        if (accion != null) i.putExtra("accion", accion);
        return PendingIntent.getActivity(c, 100 + rc, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }
}
