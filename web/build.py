#!/usr/bin/env python3
"""Arma un solo index.html con la interfaz de Plato.
Uso: python3 web/build.py [salida]   (por defecto web/dist/index.html)"""
import base64, os, sys
H = os.path.dirname(os.path.abspath(__file__))
rd = lambda p: open(os.path.join(H, p), encoding="utf-8").read()
css = rd("src/style.css")
for key, f in (("FONT_FRAUNCES", "fonts/fraunces.woff"), ("FONT_FIGTREE", "fonts/figtree.woff")):
    b = base64.b64encode(open(os.path.join(H, f), "rb").read()).decode()
    css = css.replace(key, "data:font/woff;base64," + b)
js = "\n".join(rd(f"src/{n}") for n in ("data.js", "core.js", "ui.js"))
html = rd("src/shell.html").replace("/*CSS*/", css).replace("/*JS*/", js.replace("</script", "<\\/script"))
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(H, "dist", "index.html")
os.makedirs(os.path.dirname(out), exist_ok=True)
open(out, "w", encoding="utf-8").write(html)
print(out, f"{len(html)//1024} KB")
