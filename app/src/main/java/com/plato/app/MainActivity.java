package com.plato.app;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.view.View;
import android.view.Window;
import android.view.WindowInsetsController;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.core.content.FileProvider;
import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewClientCompat;

import org.json.JSONObject;

import java.io.File;
import java.util.ArrayList;

public class MainActivity extends Activity {
    static final int RC_FILE = 10, RC_CAM_PERM = 11, RC_VOICE = 12, RC_NOTIF = 13, RC_WEBCAM_PERM = 14;
    WebView web;
    boolean loaded = false;
    String pendingAction = null;
    ValueCallback<Uri[]> fileCb;
    Uri camUri;
    PermissionRequest pendingWebPerm;
    WebChromeClient.FileChooserParams pendingParams;
    String voiceId;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        web = new WebView(this);
        setContentView(web);
        pintarBarras(null);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setTextZoom(100);

        final WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();
        web.setWebViewClient(new WebViewClientCompat() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView v, WebResourceRequest r) {
                return loader.shouldInterceptRequest(r.getUrl());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                Uri u = r.getUrl();
                if ("appassets.androidplatform.net".equals(u.getHost())) return false;
                try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception ignored) {}
                return true;
            }

            @Override
            public void onPageFinished(WebView v, String url) {
                loaded = true;
                if (pendingAction != null) { enviarAccion(pendingAction); pendingAction = null; }
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(PermissionRequest req) {
                runOnUiThread(() -> {
                    if (checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
                        req.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});
                    } else {
                        pendingWebPerm = req;
                        requestPermissions(new String[]{Manifest.permission.CAMERA}, RC_WEBCAM_PERM);
                    }
                });
            }

            @Override
            public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams p) {
                if (fileCb != null) fileCb.onReceiveValue(null);
                fileCb = cb;
                if (p.isCaptureEnabled()) {
                    if (checkSelfPermission(Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                        pendingParams = p;
                        requestPermissions(new String[]{Manifest.permission.CAMERA}, RC_CAM_PERM);
                        return true;
                    }
                    abrirCamara();
                } else {
                    try {
                        Intent i = p.createIntent();
                        startActivityForResult(i, RC_FILE);
                    } catch (Exception e) { fileCb.onReceiveValue(null); fileCb = null; }
                }
                return true;
            }
        });
        web.addJavascriptInterface(new Bridge(this), "Android");
        web.loadUrl("https://appassets.androidplatform.net/assets/index.html");

        accionDesde(getIntent());
        if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, RC_NOTIF);
        }
    }

    void abrirCamara() {
        try {
            File dir = new File(getCacheDir(), "fotos");
            dir.mkdirs();
            File[] viejas = dir.listFiles();
            if (viejas != null) for (File f : viejas) f.delete();
            File f = new File(dir, "plato_" + System.currentTimeMillis() + ".jpg");
            camUri = FileProvider.getUriForFile(this, "com.plato.app.files", f);
            Intent i = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
            i.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, camUri);
            i.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION);
            startActivityForResult(i, RC_FILE);
        } catch (Exception e) {
            camUri = null;
            if (fileCb != null) { fileCb.onReceiveValue(null); fileCb = null; }
        }
    }

    void escuchar(String id) {
        voiceId = id;
        Intent i = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "es-CO");
        i.putExtra(RecognizerIntent.EXTRA_PROMPT, "¿Qué comiste?");
        try { startActivityForResult(i, RC_VOICE); }
        catch (Exception e) { responder(id, null); }
    }

    void responder(String id, String valor) {
        final String js = "window.onNative&&window.onNative(" + JSONObject.quote(id) + "," + (valor == null ? "null" : JSONObject.quote(valor)) + ")";
        runOnUiThread(() -> web.evaluateJavascript(js, null));
    }

    @Override
    protected void onActivityResult(int rc, int res, Intent data) {
        super.onActivityResult(rc, res, data);
        if (rc == RC_FILE) {
            if (fileCb == null) return;
            Uri[] out = null;
            if (res == RESULT_OK) {
                if (data != null && (data.getData() != null || data.getClipData() != null)) {
                    if (data.getClipData() != null) {
                        ArrayList<Uri> l = new ArrayList<>();
                        for (int k = 0; k < data.getClipData().getItemCount(); k++) l.add(data.getClipData().getItemAt(k).getUri());
                        out = l.toArray(new Uri[0]);
                    } else out = new Uri[]{data.getData()};
                } else if (camUri != null) out = new Uri[]{camUri};
            }
            fileCb.onReceiveValue(out);
            fileCb = null;
            camUri = null;
        } else if (rc == RC_VOICE) {
            String t = null;
            if (res == RESULT_OK && data != null) {
                ArrayList<String> r = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                if (r != null && !r.isEmpty()) t = r.get(0);
            }
            if (voiceId != null) responder(voiceId, t);
            voiceId = null;
        }
    }

    @Override
    public void onRequestPermissionsResult(int rc, String[] perms, int[] res) {
        boolean ok = res.length > 0 && res[0] == PackageManager.PERMISSION_GRANTED;
        if (rc == RC_WEBCAM_PERM && pendingWebPerm != null) {
            if (ok) pendingWebPerm.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});
            else pendingWebPerm.deny();
            pendingWebPerm = null;
        } else if (rc == RC_CAM_PERM) {
            if (ok) abrirCamara();
            else if (fileCb != null) { fileCb.onReceiveValue(null); fileCb = null; }
        } else if (rc == RC_NOTIF) {
            Scheduler.programarTodo(this);
        }
    }

    @Override
    protected void onNewIntent(Intent i) {
        super.onNewIntent(i);
        setIntent(i);
        accionDesde(i);
    }

    void accionDesde(Intent i) {
        if (i == null) return;
        String a = i.getStringExtra("accion");
        if (a == null) return;
        i.removeExtra("accion");
        if (loaded) enviarAccion(a); else pendingAction = a;
    }

    void enviarAccion(String a) {
        web.evaluateJavascript("window.onNativeAction&&window.onNativeAction(" + JSONObject.quote(a) + ")", null);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (loaded) web.evaluateJavascript("window.onNativeResume&&window.onNativeResume()", null);
    }

    @Override
    protected void onPause() {
        super.onPause();
        WidgetProvider.actualizar(this);
    }

    @Override
    public void onBackPressed() {
        web.evaluateJavascript("window.onBack?window.onBack():false", v -> {
            if (!"true".equals(v)) MainActivity.super.onBackPressed();
        });
    }

    @Override
    public void onConfigurationChanged(Configuration c) {
        super.onConfigurationChanged(c);
        pintarBarras(null);
    }

    /** Colores de las barras del sistema según el tema elegido en la app ("auto", "light", "dark"). */
    void pintarBarras(String tema) {
        try {
            if (tema != null) getSharedPreferences("plato", MODE_PRIVATE).edit().putString("tema", tema).apply();
            String t = tema != null ? tema : getSharedPreferences("plato", MODE_PRIVATE).getString("tema", "auto");
            boolean noche = "dark".equals(t) || ("auto".equals(t) && (getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES);
            Window w = getWindow();
            int fondo = noche ? Color.parseColor("#111513") : Color.parseColor("#F6F3EC");
            int barra = noche ? Color.parseColor("#1A1F1C") : Color.WHITE;
            w.setStatusBarColor(fondo);
            w.setNavigationBarColor(barra);
            if (web != null) web.setBackgroundColor(fondo);
            if (Build.VERSION.SDK_INT >= 30) {
                WindowInsetsController c = w.getInsetsController();
                if (c != null) {
                    int m = WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS;
                    c.setSystemBarsAppearance(noche ? 0 : m, m);
                }
            } else {
                View d = w.getDecorView();
                int f = d.getSystemUiVisibility();
                if (noche) f &= ~(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
                else f |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
                d.setSystemUiVisibility(f);
            }
        } catch (Exception ignored) {}
    }
}
