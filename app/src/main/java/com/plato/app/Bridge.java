package com.plato.app;

import android.Manifest;
import android.app.AlarmManager;
import android.app.NotificationManager;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.PowerManager;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.provider.MediaStore;
import android.provider.Settings;
import android.util.Base64;
import android.webkit.JavascriptInterface;

import com.google.mlkit.vision.barcode.BarcodeScanner;
import com.google.mlkit.vision.barcode.BarcodeScannerOptions;
import com.google.mlkit.vision.barcode.BarcodeScanning;
import com.google.mlkit.vision.barcode.common.Barcode;
import com.google.mlkit.vision.common.InputImage;

import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

/** Funciones que la interfaz web puede pedir con window.Android.* */
public class Bridge {
    final MainActivity act;
    BarcodeScanner scanner;

    Bridge(MainActivity a) { act = a; }

    @JavascriptInterface
    public String version() { return BuildConfig.VERSION_NAME; }

    /** Copia de seguridad del estado en files/estado.json (por si se borra localStorage). */
    @JavascriptInterface
    public void saveState(String json) {
        try {
            File tmp = new File(act.getFilesDir(), "estado.tmp");
            try (FileOutputStream o = new FileOutputStream(tmp)) { o.write(json.getBytes(StandardCharsets.UTF_8)); }
            tmp.renameTo(new File(act.getFilesDir(), "estado.json"));
        } catch (Exception ignored) {}
    }

    @JavascriptInterface
    public String loadState() {
        try {
            File f = new File(act.getFilesDir(), "estado.json");
            if (!f.exists()) return null;
            byte[] b = new byte[(int) f.length()];
            try (FileInputStream i = new FileInputStream(f)) { int n = 0; while (n < b.length) { int r = i.read(b, n, b.length - n); if (r < 0) break; n += r; } }
            return new String(b, StandardCharsets.UTF_8);
        } catch (Exception e) { return null; }
    }

    @JavascriptInterface
    public void setWidget(String json) {
        act.getSharedPreferences("plato", Context.MODE_PRIVATE).edit().putString("widget", json).putString("widget_dia", Scheduler.hoy()).apply();
        WidgetProvider.actualizar(act);
    }

    @JavascriptInterface
    public void setReminders(String json) {
        act.getSharedPreferences("plato", Context.MODE_PRIVATE).edit().putString("recordatorios", json).apply();
        Scheduler.programarTodo(act);
    }

    @JavascriptInterface
    public void setTheme(String t) { act.runOnUiThread(() -> act.pintarBarras(t)); }

    @JavascriptInterface
    public void vibrate(int ms) {
        try {
            Vibrator v = (Vibrator) act.getSystemService(Context.VIBRATOR_SERVICE);
            if (v != null) v.vibrate(VibrationEffect.createOneShot(Math.max(5, ms), VibrationEffect.DEFAULT_AMPLITUDE));
        } catch (Exception ignored) {}
    }

    @JavascriptInterface
    public void openUrl(String u) {
        try { act.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(u)).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); } catch (Exception ignored) {}
    }

    @JavascriptInterface
    public void shareText(String t) {
        Intent i = new Intent(Intent.ACTION_SEND).setType("text/plain").putExtra(Intent.EXTRA_TEXT, t);
        act.startActivity(Intent.createChooser(i, "Compartir"));
    }

    /** Guarda un texto (copia de seguridad) en Descargas; en Android 8–9 lo comparte. */
    @JavascriptInterface
    public void saveText(String nombre, String contenido) {
        try {
            if (Build.VERSION.SDK_INT >= 29) {
                ContentValues cv = new ContentValues();
                cv.put(MediaStore.Downloads.DISPLAY_NAME, nombre);
                cv.put(MediaStore.Downloads.MIME_TYPE, "application/json");
                Uri u = act.getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, cv);
                if (u == null) throw new Exception("sin uri");
                try (OutputStream o = act.getContentResolver().openOutputStream(u)) { o.write(contenido.getBytes(StandardCharsets.UTF_8)); }
            } else {
                Intent i = new Intent(Intent.ACTION_SEND).setType("application/json").putExtra(Intent.EXTRA_TEXT, contenido).putExtra(Intent.EXTRA_SUBJECT, nombre);
                act.startActivity(Intent.createChooser(i, "Guardar copia"));
            }
        } catch (Exception e) {
            shareText(contenido);
        }
    }

    @JavascriptInterface
    public String status() {
        try {
            JSONObject o = new JSONObject();
            NotificationManager nm = (NotificationManager) act.getSystemService(Context.NOTIFICATION_SERVICE);
            o.put("notif", nm != null && nm.areNotificationsEnabled());
            AlarmManager am = (AlarmManager) act.getSystemService(Context.ALARM_SERVICE);
            o.put("exact", Build.VERSION.SDK_INT < 31 || (am != null && am.canScheduleExactAlarms()));
            PowerManager pm = (PowerManager) act.getSystemService(Context.POWER_SERVICE);
            o.put("battery", pm != null && pm.isIgnoringBatteryOptimizations(act.getPackageName()));
            o.put("camera", act.checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED);
            return o.toString();
        } catch (Exception e) { return "{}"; }
    }

    @JavascriptInterface
    public void requestPerm(String k) {
        act.runOnUiThread(() -> {
            try {
                Intent i = null;
                if ("notif".equals(k)) {
                    if (Build.VERSION.SDK_INT >= 33 && act.checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED && act.shouldShowRequestPermissionRationale(Manifest.permission.POST_NOTIFICATIONS)) {
                        act.requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, MainActivity.RC_NOTIF);
                        return;
                    }
                    i = new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS).putExtra(Settings.EXTRA_APP_PACKAGE, act.getPackageName());
                } else if ("exact".equals(k) && Build.VERSION.SDK_INT >= 31) {
                    i = new Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM, Uri.parse("package:" + act.getPackageName()));
                } else if ("battery".equals(k)) {
                    i = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, Uri.parse("package:" + act.getPackageName()));
                }
                if (i != null) act.startActivity(i);
            } catch (Exception e) {
                try { act.startActivity(new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:" + act.getPackageName()))); } catch (Exception ignored) {}
            }
        });
    }

    @JavascriptInterface
    public void testNotification() {
        Scheduler.notificar(act, 999, "Plato funciona", "Así te llegarán los recordatorios.", "add:almuerzo");
    }

    /** Lee un código de barras en una imagen JPEG (base64) con ML Kit, sin internet. Responde onNative(id, código|null). */
    @JavascriptInterface
    public void scanBarcode(String id, String b64) {
        try {
            if (scanner == null) {
                scanner = BarcodeScanning.getClient(new BarcodeScannerOptions.Builder()
                        .setBarcodeFormats(Barcode.FORMAT_EAN_13, Barcode.FORMAT_EAN_8, Barcode.FORMAT_UPC_A, Barcode.FORMAT_UPC_E, Barcode.FORMAT_CODE_128)
                        .build());
            }
            byte[] b = Base64.decode(b64, Base64.DEFAULT);
            Bitmap bmp = BitmapFactory.decodeByteArray(b, 0, b.length);
            if (bmp == null) { act.responder(id, null); return; }
            scanner.process(InputImage.fromBitmap(bmp, 0))
                    .addOnSuccessListener(list -> {
                        String v = null;
                        for (Barcode bc : list) { if (bc.getRawValue() != null) { v = bc.getRawValue(); break; } }
                        act.responder(id, v);
                    })
                    .addOnFailureListener(e -> act.responder(id, null));
        } catch (Exception e) {
            act.responder(id, null);
        }
    }

    @JavascriptInterface
    public void voice(String id) { act.runOnUiThread(() -> act.escuchar(id)); }
}
