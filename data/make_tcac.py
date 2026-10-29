#!/usr/bin/env python3
"""Relaciona los alimentos de Plato con la TCAC 2015 (ICBF) y genera:
- tcac_map.json: valores oficiales para los alimentos de foods.py que tienen equivalente claro
- tcac_extra.json: el resto de alimentos TCAC, para que también se puedan buscar y registrar
Se dejan con USDA los casos en que la TCAC mide algo distinto a como se pesa al servir
(p. ej. leguminosas "cocidas" con su caldo, pasta "cocida" con valor de pasta seca)."""
import json, os, re
HERE = os.path.dirname(os.path.abspath(__file__))
T = {x["i"]: x for x in json.load(open(os.path.join(HERE, "icbf", "tcac_2015.json"), encoding="utf-8"))}

MAP = {
    "arroz_blanco_crudo": 11, "arroz_casero": 10, "arepa_maiz": 5, "arepa_tela": 6, "arepa_queso": 8,
    "almojabana": 1, "avena_hojuelas": 14, "galleta_saltina": 32, "galleta_dulce": 33, "cereal_hojuelas": 55,
    "maiz_peto_cocido": 63, "pan_frances": 80, "papa_cocida": 206, "papa_criolla_cocida": 193, "papa_cruda": 192,
    "name_cocido": 187, "platano_verde_crudo": 228, "platano_maduro_crudo": 225, "arveja_verde": 138,
    "aguacate": 252, "aguacate_criollo": 253, "banano": 269, "borojo": 272, "granadilla": 305, "guayaba": 309,
    "lulo": 321, "mango": 329, "maracuya": 333, "mora": 339, "pina": 348, "pitahaya": 351, "tomate_arbol": 358,
    "uchuva": 361, "papaya": 343, "manteca": 383, "mantequilla_mani": 384, "mantequilla": 385,
    "atun_aceite": 396, "atun_agua": 397, "camaron": 414, "sardina": 439, "mojarra_frita": 454, "tilapia_cruda": 445,
    "cerdo_lomo": 482, "costilla_cerdo": 477, "pechuga_asada": 530, "pollo_desmechado": 529, "pollo_presa": 533,
    "sobrebarriga": 546, "carne_molida_cruda": 543, "chicharron": 549, "chorizo": 551, "higado": 573,
    "salchicha": 608, "crema_leche": 620, "helado": 622, "kumis": 624, "leche_entera": 634,
    "leche_condensada": 627, "queso_doble_crema": 640, "queso_parmesano": 645, "yogur_dulce": 649,
    "huevo": 677, "huevo_frito": 679, "huevo_revuelto": 680, "clara_huevo": 676, "azucar": 688,
    "bocadillo": 692, "chocolate_mesa": 698, "arequipe": 706, "miel": 718, "tinto": 655,
}
GRP = {"A": "cereales", "B": "verduras", "C": "frutas", "D": "grasas", "E": "pescados", "F": "carnes", "G": "lacteos",
       "H": "bebidas", "J": "huevos", "K": "azucares", "L": "condimentos", "P": "verduras", "R": "snacks", "S": "snacks",
       "T": "leguminosas", "N": "snacks"}
SKIP = re.compile(r"harina de (pescado|carne)|esqueleto|recortes|cabeza, harina|piel|bagazo|epidermis|desengrasad|"
                  r"en polvo|pasta importada|insecto|harina$|, harina|almidón|moringa|bienestarina", re.I)
TUBER = re.compile(r"^(papa|yuca|plátano|ñame|arracacha|batata|malanga|achira|bore)", re.I)

def vals(x):
    o = {"kcal": x["kcal"], "p": x["p"], "c": x["c"], "g": x["g"]}
    if x.get("f") is not None: o["f"] = x["f"]
    if x.get("na") is not None: o["na"] = x["na"]
    return o

used = set(MAP.values())
m = {k: vals(T[v]) for k, v in MAP.items()}
extra = []
for i, x in sorted(T.items()):
    if i in used or SKIP.search(x["n"]) or x["kcal"] is None: continue
    letter = x["grupo"][0]
    if letter in ("N",): continue
    gr = GRP.get(letter, "snacks")
    if gr == "verduras" and TUBER.match(x["n"]): gr = "tuberculos"
    n = x["n"].replace("  ", " ")
    extra.append({"id": f"t{i}", "n": n + " (ICBF)", "gr": gr, "kcal": x["kcal"], "p": x["p"] or 0, "c": x["c"] or 0,
                  "g": x["g"] or 0, "f": x.get("f") or 0, "a": 0, "na": x.get("na") or 0, "por": [], "src": "TCAC",
                  "syn": "", "raw": ""})
json.dump(m, open(os.path.join(HERE, "tcac_map.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(extra, open(os.path.join(HERE, "tcac_extra.json"), "w", encoding="utf-8"), ensure_ascii=False)
print(len(m), "mapeados,", len(extra), "adicionales")
