#!/usr/bin/env python3
"""Extrae la Tabla de Composición de Alimentos Colombianos (ICBF, versión 2015) del PDF oficial.
Lee las tablas de análisis proximal (energía, proteína, lípidos, carbohidratos, fibra) y de minerales (sodio)
por posición de columnas. Resultado: data/icbf/tcac_2015.json  (valores por 100 g de parte comestible).
Uso: python3 data/parse_tcac.py data/icbf/tcac_2015.pdf
"""
import sys, re, json, pdfplumber
from collections import defaultdict

def num(s):
    s = s.replace(",", ".").strip()
    if s in ("Tr", "tr", "Tr."): return 0.0
    try: return float(s)
    except ValueError: return None

def rows_of(words, tol=2.2):
    rows = []
    for w in sorted(words, key=lambda w: (round(w["top"]), w["x0"])):
        if rows and abs(rows[-1][0] - w["top"]) <= tol: rows[-1][1].append(w)
        else: rows.append([w["top"], [w]])
    return rows

def parse(path):
    pdf = pdfplumber.open(path)
    prox, minr = {}, {}
    for pg in pdf.pages:
        ws = pg.extract_words(use_text_flow=False, keep_blank_chars=False, extra_attrs=[])
        txt = " ".join(w["text"] for w in ws[:400])
        isP = "Humedad" in txt and "Energía" in txt and "Lípidos" in txt
        isM = "Sodio" in txt and "Calcio" in txt
        if not (isP or isM): continue
        hdr = [w for w in ws if w["top"] < 75]
        def centers(label, sub="promedio"):
            labs = [w for w in hdr if w["text"].startswith(label)]
            subs = [w for w in hdr if w["text"] == sub]
            out = []
            for l in labs:
                c = (l["x0"] + l["x1"]) / 2
                best = min(subs, key=lambda s: abs((s["x0"] + s["x1"]) / 2 - c)) if subs else None
                if best and abs((best["x0"] + best["x1"]) / 2 - c) < 30: out.append((best["x0"] + best["x1"]) / 2)
            return sorted(set(round(x) for x in out))
        idw = [w for w in hdr if w["text"] == "identificación" or w["text"] == "Identificación"]
        nomw = [w for w in hdr if w["text"].upper() == "NOMBRE"]
        nw = [w for w in hdr if w["text"] in ("N", "n")]
        if not idw or not nomw: continue
        idx = (idw[0]["x0"] + idw[0]["x1"]) / 2
        name_x0 = nomw[0]["x0"] - 120
        n_x = (nw[0]["x0"] + nw[0]["x1"]) / 2 if nw else nomw[0]["x1"] + 80
        grp_x = [w for w in hdr if w["text"].upper() == "GRUPO"]
        grp_x1 = grp_x[0]["x1"] + 70 if grp_x else name_x0
        if isP:
            kc = [w for w in hdr if w["text"] == "(kcal)"]
            cols = {"kcal": (kc[0]["x0"] + kc[0]["x1"]) / 2 if kc else None}
            pr = centers("Proteína"); lp = centers("Lípidos"); cb = centers("Carbohidratos"); fb = centers("Fibra")
            cols.update(p=pr[0] if pr else None, g=lp[0] if lp else None, c=cb[0] if cb else None, f=fb[0] if fb else None)
            target = prox
        else:
            na = centers("Sodio"); cols = {"na": na[0] if na else None}; target = minr
        cols = {k: v for k, v in cols.items() if v is not None}
        body = [w for w in ws if w["top"] >= 70]
        last = None
        for top, rw in rows_of(body):
            ident = [w for w in rw if abs((w["x0"] + w["x1"]) / 2 - idx) < 22 and re.fullmatch(r"\d{1,4}", w["text"])]
            name = " ".join(w["text"] for w in rw if w["x0"] >= grp_x1 - 5 and w["x1"] <= n_x - 6 and w["x0"] > idx + 30)
            if not ident:
                if last and name and not any(num(w["text"]) is not None for w in rw if w["x0"] > n_x):
                    target[last]["n"] += " " + name
                continue
            i = int(ident[0]["text"])
            rec = target.setdefault(i, {"n": name})
            if name and len(name) > len(rec.get("n", "")): rec["n"] = name
            for w in rw:
                c = (w["x0"] + w["x1"]) / 2
                if c <= n_x + 8: continue
                for k, x in cols.items():
                    if abs(c - x) < 16:
                        v = num(w["text"])
                        if v is not None: rec[k] = v
            last = i
    out = []
    for i, r in sorted(prox.items()):
        name = re.sub(r"\s+", " ", r["n"]).strip()
        if not name or "kcal" not in r: continue
        na = minr.get(i, {}).get("na")
        out.append(dict(i=i, n=name, kcal=r.get("kcal"), p=r.get("p"), g=r.get("g"), c=r.get("c"), f=r.get("f"), na=na))
    return out

if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "data/icbf/tcac_2015.pdf"
    data = parse(src)
    json.dump(data, open(src.replace(".pdf", ".json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    print(len(data), "alimentos")
    bad = [d for d in data if None in (d["p"], d["g"], d["c"])]
    print("incompletos:", len(bad))
    for d in data[:12] + data[400:406]: print(d)
