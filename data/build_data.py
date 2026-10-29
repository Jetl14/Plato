#!/usr/bin/env python3
"""Genera web/src/data.js a partir de foods.py, recipes.py y (si existe) tcac.json.
Uso: python3 data/build_data.py
- Valida que cada ingrediente exista.
- Calcula la nutrición de cada receta desde sus ingredientes (por porción y por 100 g).
- Si hay datos TCAC (ICBF) para un alimento (campo tcac en tcac_map.json), los usa en lugar del valor USDA/aprox.
"""
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from foods import FOODS
from recipes import R

KEYS = ["kcal", "p", "c", "g", "f", "a", "na"]

def parse_foods():
    out = {}
    for line in FOODS.strip().splitlines():
        t = line.split("|")
        fid, name, grp = t[0], t[1], t[2]
        nums = [float(x) for x in t[3:10]]
        i = 10; por = []
        while t[i] not in ("USDA", "aprox", "TCAC"):
            n, g = t[i].rsplit(":", 1); por.append([n, float(g)]); i += 1
        src = t[i]; syn = t[i + 1] if len(t) > i + 1 else ""; raw = t[i + 2] if len(t) > i + 2 else ""
        if fid in out: raise SystemExit("duplicado " + fid)
        out[fid] = dict(id=fid, n=name, gr=grp, **dict(zip(KEYS, nums)), por=por, src=src,
                        syn=syn, raw=raw)
    return out

def apply_tcac(foods):
    p = os.path.join(HERE, "tcac_map.json")
    if not os.path.exists(p): return 0
    m = json.load(open(p, encoding="utf-8")); k = 0
    for fid, v in m.items():
        if fid in foods and v:
            foods[fid].update({x: v[x] for x in KEYS if v.get(x) is not None})
            foods[fid]["src"] = "TCAC"; k += 1
    # alimentos TCAC adicionales (no mapeados) para ampliar la búsqueda
    p2 = os.path.join(HERE, "tcac_extra.json")
    if os.path.exists(p2):
        for v in json.load(open(p2, encoding="utf-8")):
            if v["id"] not in foods: foods[v["id"]] = v
    return k

def main():
    foods = parse_foods()
    nt = apply_tcac(foods)
    recs = {r["id"]: r for r in R}
    memo = {}
    def nut(rid, stack=()):
        if rid in memo: return memo[rid]
        if rid in stack: raise SystemExit("ciclo " + rid)
        r = recs[rid]; tot = dict.fromkeys(KEYS, 0.0); w = 0.0; raw = {}
        for iid, g in r["ing"]:
            if iid.startswith("r:"):
                sub, sw, sraw = nut(iid[2:], stack + (rid,))
                for k in KEYS: tot[k] += sub[k] * g / sw
                for k2, v in sraw.items(): raw[k2] = raw.get(k2, 0) + v * g / sw
            else:
                if iid not in foods: raise SystemExit(f"{rid}: no existe {iid}")
                f = foods[iid]
                for k in KEYS: tot[k] += f[k] * g / 100
                if f["raw"]:
                    rid2, fac = f["raw"].split(":"); raw[rid2] = raw.get(rid2, 0) + g * float(fac)
                else:
                    raw[iid] = raw.get(iid, 0) + g
            w += g
        memo[rid] = (tot, w, raw)
        return memo[rid]
    out_r = []
    for r in R:
        tot, w, raw = nut(r["id"])
        n = r["n"]
        out_r.append(dict(id=r["id"], n=r["nombre"], sv=n, m=r["comidas"], reg=r["region"], t=r["tags"],
                          min=r["min"], w=round(w / n), pasos=r["pasos"],
                          ing=[[i, g] for i, g in r["ing"]],
                          raw={k: round(v / n, 1) for k, v in raw.items()},
                          per={k: round(tot[k] / n, 1) for k in KEYS}))
    fl = []
    for f in foods.values():
        fl.append([f["id"], f["n"], f["gr"]] + [f[k] for k in KEYS] + [f["por"], f["src"], f["syn"], f["raw"]])
    js = ("// Generado por data/build_data.py — no editar a mano\n"
          "window.FOODS_RAW=" + json.dumps(fl, ensure_ascii=False, separators=(",", ":")) + ";\n"
          "window.RECIPES=" + json.dumps(out_r, ensure_ascii=False, separators=(",", ":")) + ";\n")
    dst = os.path.join(HERE, "..", "web", "src", "data.js")
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    open(dst, "w", encoding="utf-8").write(js)
    print(f"{len(foods)} alimentos ({nt} con TCAC), {len(out_r)} recetas, {len(js)//1024} KB")
    for r in out_r:
        if r["m"] and not r["t"] == "base":
            p = r["per"]; print(f'  {r["n"][:40]:40} {p["kcal"]:6.0f} kcal  P{p["p"]:5.1f} C{p["c"]:5.1f} G{p["g"]:5.1f}  {r["w"]} g')

if __name__ == "__main__":
    main()
