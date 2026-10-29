package com.plato.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class AlarmReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context c, Intent i) {
        String t = i.getStringExtra("t");
        String id = i.getStringExtra("id");
        if (t != null && id != null) {
            String a = i.getStringExtra("a");
            // no recordar el agua si ya se cumplió la meta del día
            boolean saltar = false;
            if (id.startsWith("w_")) {
                try {
                    android.content.SharedPreferences sp = c.getSharedPreferences("plato", Context.MODE_PRIVATE);
                    if (Scheduler.hoy().equals(sp.getString("widget_dia", ""))) {
                        org.json.JSONObject w = new org.json.JSONObject(sp.getString("widget", "{}"));
                        saltar = w.optInt("agua", 0) >= w.optInt("maMeta", 99999);
                    }
                } catch (Exception ignored) {}
            }
            if (!saltar) Scheduler.notificar(c, id.hashCode(), t, i.getStringExtra("x"), a);
        }
        WidgetProvider.actualizar(c);
        Scheduler.programarTodo(c); // programa la siguiente ocurrencia
    }
}
