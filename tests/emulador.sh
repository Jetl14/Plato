#!/bin/bash
# Instala Plato en el emulador, carga datos de ejemplo y toma capturas de las pantallas principales.
set -x
mkdir -p capturas
APK=app/build/outputs/apk/debug/app-debug.apk
adb install -r -g $APK
adb shell appops set com.plato.app SCHEDULE_EXACT_ALARM allow || true
adb push tests/demo.json /data/local/tmp/demo.json
adb shell "run-as com.plato.app mkdir -p files"
adb shell "cat /data/local/tmp/demo.json | run-as com.plato.app sh -c 'cat > files/estado.json'"
adb logcat -c
adb shell am start -n com.plato.app/.MainActivity
sleep 12
cap() { adb exec-out screencap -p > "capturas/$1.png"; }
cap 01_hoy
# pestañas inferiores (coordenadas relativas a 1080x2400)
W=$(adb shell wm size | grep -oE '[0-9]+x[0-9]+' | tail -1 | cut -dx -f1); H=$(adb shell wm size | grep -oE '[0-9]+x[0-9]+' | tail -1 | cut -dx -f2)
tap() { adb shell input tap $(( W * $1 / 100 )) $(( H * $2 / 100 )); sleep 3; }
tap 22 97; cap 02_plan
tap 70 97; cap 03_recetas
tap 90 97; cap 04_progreso
tap 50 96; sleep 2; cap 05_agregar
adb shell input text "ajiaco"; sleep 2; cap 06_buscar
adb shell input keyevent 4; sleep 1; adb shell input keyevent 4; sleep 1
tap 10 97; cap 07_hoy_final
# notificación de prueba y widget
adb shell am broadcast -a android.appwidget.action.APPWIDGET_UPDATE -n com.plato.app/.WidgetProvider || true
adb shell dumpsys alarm | grep -c "com.plato.app" > capturas/alarmas.txt || true
adb logcat -d > capturas/logcat.txt
grep -E "FATAL|AndroidRuntime|chromium.*(Uncaught|Error)|Console" capturas/logcat.txt | head -50 > capturas/errores.txt
cat capturas/errores.txt
cat capturas/alarmas.txt
