"use strict";
/* ===================== utilidades ===================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const NATIVE = typeof window.Android !== "undefined";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9ñ ]/g, " ").replace(/\s+/g, " ").trim();
const r0 = x => Math.round(x || 0);
const r1 = x => Math.round((x || 0) * 10) / 10;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const fmt = x => r0(x).toLocaleString("es-CO");
const pad = n => String(n).padStart(2, "0");
const dkey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => dkey(new Date());
const parseD = k => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
const addD = (k, n) => { const d = parseD(k); d.setDate(d.getDate() + n); return dkey(d); };
const DIAS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const DIAS_L = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const fdate = k => { const d = parseD(k); return `${DIAS_L[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`; };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const NK = ["kcal", "p", "c", "g", "f", "a", "na"];
const zeroN = () => ({ kcal: 0, p: 0, c: 0, g: 0, f: 0, a: 0, na: 0 });
const addN = (a, b, k = 1) => { for (const x of NK) a[x] += (b[x] || 0) * k; return a; };
const scaleN = (n, k) => { const o = {}; for (const x of NK) o[x] = (n[x] || 0) * k; return o; };

/* ===================== datos ===================== */
const GRUPOS = {
  cereales: ["Cereales y panes", "#C98A2B"], tuberculos: ["Tubérculos y plátanos", "#A86B3C"], leguminosas: ["Leguminosas", "#8A4B3A"],
  verduras: ["Verduras", "#4E9A55"], frutas: ["Frutas", "#E07A3A"], carnes: ["Carnes", "#B8473A"], pescados: ["Pescados y mariscos", "#3C7FB0"],
  huevos: ["Huevos", "#D9A43A"], lacteos: ["Lácteos", "#6C8EBF"], grasas: ["Grasas y semillas", "#9C8A3A"], azucares: ["Dulces", "#C2547E"],
  bebidas: ["Bebidas", "#3AA0B8"], snacks: ["Comidas rápidas y paquetes", "#8B5FBF"], condimentos: ["Condimentos y salsas", "#7A7A6A"],
  platos: ["Platos típicos (ICBF)", "#A0522D"], personal: ["Mis alimentos", "#2F7A57"], receta: ["Recetas", "#2F7A57"]
};
const FOODS = {};
(window.FOODS_RAW || []).forEach(r => {
  const [id, n, gr, kcal, p, c, g, f, a, na, por, src, syn, raw] = r;
  FOODS[id] = { id, n, gr, kcal, p, c, g, f, a, na, por, src, syn, raw };
});
const RECIPES = {};
(window.RECIPES || []).forEach(r => RECIPES[r.id] = r);
const MEALS = { desayuno: "Desayuno", media: "Media mañana", almuerzo: "Almuerzo", onces: "Onces", cena: "Cena" };
const MEAL_SLOT = { desayuno: "d", media: "m", almuerzo: "a", onces: "m", cena: "c" };

/* ===================== estado ===================== */
const DEF = () => ({
  v: 1, creado: today(), perfil: null, metas: null,
  diario: {}, pesos: [], medidas: [], plan: {}, compras: { hechos: {}, desde: null, dias: 7 },
  favs: [], recientes: [], propios: [], recetasPropias: [], barras: {},
  ayuno: { modo: "16:8", inicio: null, hist: [] },
  rec: { comidas: true, agua: true, aguaCada: 120, pesoSemanal: true, horas: { desayuno: "07:00", media: "10:00", almuerzo: "12:30", onces: "16:00", cena: "19:00" } },
  aj: { tema: "auto", key: "", modelo: "", modelos: [], sumaEjercicio: true, chat: [] }
});
let S;
function load() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem("plato") || "null"); } catch (e) { }
  if (!s && NATIVE) { try { s = JSON.parse(Android.loadState() || "null"); } catch (e) { } }
  S = Object.assign(DEF(), s || {});
  const d = DEF();
  S.rec = Object.assign(d.rec, S.rec || {}); S.rec.horas = Object.assign(d.rec.horas, S.rec.horas || {});
  S.aj = Object.assign(d.aj, S.aj || {}); S.ayuno = Object.assign(d.ayuno, S.ayuno || {});
  S.compras = Object.assign(d.compras, S.compras || {});
}
let saveT = 0;
function save() {
  const j = JSON.stringify(S);
  try { localStorage.setItem("plato", j); } catch (e) { toast("No se pudo guardar en el almacenamiento"); }
  clearTimeout(saveT);
  saveT = setTimeout(() => { if (NATIVE) { try { Android.saveState(j); } catch (e) { } pushNative(); } }, 600);
}
function day(k) { return S.diario[k] || (S.diario[k] = { items: [], agua: 0, ej: [] }); }
function dayPeek(k) { return S.diario[k] || { items: [], agua: 0, ej: [] }; }

/* ===================== nutrición ===================== */
function foodById(id) {
  if (FOODS[id]) return FOODS[id];
  return S.propios.find(f => f.id === id);
}
function recipeById(id) { return RECIPES[id] || S.recetasPropias.find(r => r.id === id); }
// Nutrientes de una referencia "f:id" o "r:id" para una cantidad en gramos (alimentos) o porciones (recetas)
function refInfo(ref) {
  const [t, id] = [ref.slice(0, 1), ref.slice(2)];
  if (t === "f") { const f = foodById(id); if (!f) return null; return { t, id, n: f.n, gr: f.gr, per100: f, por: f.por || [], src: f.src }; }
  const r = recipeById(id); if (!r) return null;
  return { t, id, n: r.n, gr: "receta", per: r.per, w: r.w, sv: r.sv, src: "receta" };
}
function nutOf(ref, grams) {
  const i = refInfo(ref); if (!i) return zeroN();
  if (i.t === "f") return scaleN(i.per100, grams / 100);
  return scaleN(i.per, grams / (i.w || 1));
}
function dayTotals(k) {
  const d = dayPeek(k), t = zeroN();
  d.items.forEach(it => addN(t, it.n));
  t.ej = (d.ej || []).reduce((s, e) => s + e.kcal, 0);
  return t;
}
function mealTotals(k, meal) { const t = zeroN(); dayPeek(k).items.filter(i => i.m === meal).forEach(i => addN(t, i.n)); return t; }
function goalKcal(k) { const t = dayTotals(k); return S.metas.kcal + (S.aj.sumaEjercicio ? t.ej : 0); }

function calcMetas(p) {
  const peso = +p.peso, alt = +p.altura, edad = +p.edad;
  const bmr = 10 * peso + 6.25 * alt - 5 * edad + (p.sexo === "h" ? 5 : -161);
  const act = { sed: 1.2, lig: 1.375, mod: 1.55, alt: 1.725, muy: 1.9 }[p.actividad] || 1.375;
  const tdee = bmr * act;
  let kcal = tdee;
  const ritmo = +p.ritmo || 0.5;
  if (p.objetivo === "bajar") kcal = tdee - ritmo * 7700 / 7;
  if (p.objetivo === "subir") kcal = tdee + ritmo * 7700 / 7;
  const minK = p.sexo === "h" ? 1500 : 1200;
  kcal = Math.max(minK, kcal);
  kcal = Math.round(kcal / 10) * 10;
  // proteína por kg (usa el peso meta si el IMC es alto)
  const imc = peso / ((alt / 100) ** 2);
  const pesoRef = imc > 30 && p.pesoMeta ? Math.max(+p.pesoMeta, 25 * (alt / 100) ** 2) : peso;
  const pkg = p.objetivo === "bajar" ? 1.8 : p.objetivo === "subir" ? 1.8 : 1.5;
  const prot = Math.round(pesoRef * pkg);
  const grasa = Math.round(kcal * 0.28 / 9);
  const carb = Math.max(50, Math.round((kcal - prot * 4 - grasa * 9) / 4));
  const agua = Math.round(peso * 35 / 250) * 250;
  return { kcal, p: prot, c: carb, g: grasa, f: p.sexo === "h" ? 30 : 25, agua, tdee: Math.round(tdee), bmr: Math.round(bmr), manual: false };
}
const imcOf = (kg, cm) => kg / ((cm / 100) ** 2);
function imcTxt(x) { return x < 18.5 ? "Bajo peso" : x < 25 ? "Saludable" : x < 30 ? "Sobrepeso" : "Obesidad"; }
function pesoActual() { return S.pesos.length ? S.pesos[S.pesos.length - 1].kg : +S.perfil.peso; }

/* ===================== búsqueda ===================== */
let IDX = null;
function buildIndex() {
  IDX = [];
  for (const f of Object.values(FOODS)) IDX.push({ ref: "f:" + f.id, n: f.n, k: norm(f.n + " " + (f.syn || "")), gr: f.gr });
  for (const f of S.propios) IDX.push({ ref: "f:" + f.id, n: f.n, k: norm(f.n + " " + (f.syn || "") + " " + (f.marca || "")), gr: "personal" });
  for (const r of Object.values(RECIPES)) if (r.m) IDX.push({ ref: "r:" + r.id, n: r.n, k: norm(r.n + " " + r.reg), gr: "receta" });
  for (const r of S.recetasPropias) IDX.push({ ref: "r:" + r.id, n: r.n, k: norm(r.n), gr: "receta" });
}
function search(q, lim = 40) {
  if (!IDX) buildIndex();
  const qs = norm(q).split(" ").filter(Boolean);
  if (!qs.length) return [];
  const out = [];
  for (const e of IDX) {
    let sc = 0, ok = true;
    for (const w of qs) {
      const re = new RegExp("(^| )" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      if (re.test(e.k)) sc += 3; else if (e.k.includes(w)) sc += 1; else if (w.length > 3 && e.k.includes(w.slice(0, -1))) sc += .5; else { ok = false; break; }
    }
    if (!ok) continue;
    if (norm(e.n).startsWith(qs[0])) sc += 2;
    sc -= e.n.length / 80;
    if (S.recientes.includes(e.ref)) sc += 1.5;
    if (S.favs.includes(e.ref)) sc += 1;
    out.push([sc, e]);
  }
  return out.sort((a, b) => b[0] - a[0]).slice(0, lim).map(x => x[1]);
}
// Mejor coincidencia para un nombre que devuelve la IA
function bestMatch(name) {
  const r = search(name, 1);
  if (r.length) return r[0].ref;
  const ws = norm(name).split(" ").filter(w => w.length > 2);
  for (let i = ws.length; i > 0; i--) { const rr = search(ws.slice(0, i).join(" "), 1); if (rr.length) return rr[0].ref; }
  for (const w of ws) { const rr = search(w, 1); if (rr.length) return rr[0].ref; }
  return null;
}

const STOP = new Set(["de", "con", "sin", "en", "el", "la", "los", "las", "y", "al", "del", "un", "una", "porcion", "plato"]);
function matchQuality(name, ref) {
  const i = refInfo(ref); if (!i) return 0;
  const f = i.t === "f" ? foodById(i.id) : null;
  const hay = norm(i.n + " " + (f && f.syn || ""));
  const ws = norm(name).split(" ").filter(w => w.length > 2 && !STOP.has(w));
  if (!ws.length) return 1;
  return ws.filter(w => hay.includes(w) || (w.length > 4 && hay.includes(w.slice(0, -1)))).length / ws.length;
}
/* ===================== registrar ===================== */
function portionsOf(ref) {
  const i = refInfo(ref); if (!i) return [["gramos", 1]];
  if (i.t === "r") {
    const w = i.w;
    return [["porción", w], ["media porción", Math.round(w / 2)], ["gramos", 1]];
  }
  const p = (i.por || []).map(x => [x[0], x[1]]);
  const liquid = i.gr === "bebidas" || /leche|kumis|yogur|jugo|caldo|aceite/.test(norm(i.n));
  p.push([liquid ? "ml / gramos" : "gramos", 1]);
  return p;
}
function logItem(k, meal, ref, grams, label, extra = {}) {
  const i = refInfo(ref); if (!i) return;
  const it = { id: uid(), m: meal, ref, nm: i.n, q: Math.round(grams * 10) / 10, u: label || "", n: nutOf(ref, grams), t: Date.now(), ...extra };
  for (const x of NK) it.n[x] = r1(it.n[x]);
  day(k).items.push(it);
  S.recientes = [ref, ...S.recientes.filter(r => r !== ref)].slice(0, 40);
  save();
  return it;
}
function logCustom(k, meal, name, n, extra = {}) {
  const it = { id: uid(), m: meal, ref: null, nm: name, q: 0, u: extra.u || "", n: Object.assign(zeroN(), n), t: Date.now(), ...extra };
  day(k).items.push(it); save(); return it;
}

/* ===================== plan de comidas ===================== */
const SIMPLE_SNACKS = [
  ["f:banano", 118, "1 banano"], ["f:manzana", 180, "1 manzana"], ["f:yogur_griego", 170, "1 vaso yogur griego"],
  ["f:mani", 30, "1 puñado de maní"], ["f:huevo", 100, "2 huevos cocidos"], ["f:mandarina", 180, "2 mandarinas"],
  ["f:almendras", 28, "1 puñado de almendras"], ["f:papaya", 250, "1 plato de papaya"], ["f:guayaba", 180, "2 guayabas"],
  ["f:queso_campesino", 50, "queso campesino"], ["f:leche_semi", 240, "1 vaso de leche"]
];
function mealList() { return S.perfil.comidas || ["desayuno", "almuerzo", "onces", "cena"]; }
function mealShares() {
  const ms = mealList();
  const base = { desayuno: 25, media: 10, almuerzo: 35, onces: 12, cena: 25 };
  const tot = ms.reduce((s, m) => s + base[m], 0);
  const o = {}; ms.forEach(m => o[m] = base[m] / tot); return o;
}
function excluded(r) {
  const ex = S.perfil.excluir || [];
  const veg = S.perfil.dieta === "veg";
  const sinCerdo = (S.perfil.excluir || []).includes("cerdo");
  const ids = recIngredients(r);
  for (const id of ids) {
    const f = foodById(id); if (!f) continue;
    if (veg && (f.gr === "carnes" || f.gr === "pescados")) return true;
    if (sinCerdo && /cerdo|tocin|chicharr|chorizo|lechona|morcilla|jamon/.test(id)) return true;
    if (ex.includes("lacteos") && f.gr === "lacteos") return true;
    if (ex.includes("pescado") && f.gr === "pescados") return true;
    if (ex.includes("huevo") && f.gr === "huevos") return true;
    if (ex.includes("gluten") && /pan_|pasta|harina_trigo|galleta|tortilla|trigo|cebada/.test(id)) return true;
    if (ex.includes("mani") && /mani/.test(id)) return true;
    if ((S.perfil.noMeGusta || []).includes(id)) return true;
  }
  return false;
}
function recIngredients(r, acc = new Set()) {
  for (const [id] of r.ing || []) {
    if (id.startsWith("r:")) { const s = recipeById(id.slice(2)); if (s) recIngredients(s, acc); } else acc.add(id);
  }
  return acc;
}
function candidates(slot) {
  const list = [];
  const all = [...Object.values(RECIPES), ...S.recetasPropias];
  for (const r of all) {
    if (!r.m || !r.m.includes(slot) || r.t === "bebida") continue;
    if (excluded(r)) continue;
    list.push({ ref: "r:" + r.id, n: r.n, per: r.per, w: r.w, single: r.sv === 1 || true });
  }
  if (slot === "m") for (const [ref, g, lbl] of SIMPLE_SNACKS) {
    const f = foodById(ref.slice(2)); if (!f) continue;
    if (excluded({ ing: [[ref.slice(2), g]] })) continue;
    list.push({ ref, n: lbl, per: scaleN(f, g / 100), w: g, simple: true });
  }
  return list;
}
function rnd(seed) { let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
function pickFactor(c, target) {
  const steps = c.simple ? [1, 2] : [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  let best = 1, be = 1e9;
  for (const s of steps) { const e = Math.abs(c.per.kcal * s - target); if (e < be) { be = e; best = s; } }
  return best;
}
function genDay(k, seed, keep = {}, recentRefs = []) {
  const R = rnd(seed), ms = mealList(), sh = mealShares(), M = S.metas;
  const C = {}; ms.forEach(m => C[m] = candidates(MEAL_SLOT[m]));
  let best = null, bs = 1e9;
  for (let it = 0; it < 500; it++) {
    const pl = {}; const tot = zeroN();
    for (const m of ms) {
      if (keep[m]) { pl[m] = keep[m]; addN(tot, pl[m].n); continue; }
      const cs = C[m]; if (!cs.length) continue;
      const c = cs[Math.floor(R() * cs.length)];
      const fac = pickFactor(c, M.kcal * sh[m]);
      const g = Math.round(c.w * fac);
      pl[m] = { ref: c.ref, f: fac, g, n: scaleN(c.per, fac), lbl: c.simple ? c.n : "" };
      addN(tot, pl[m].n);
    }
    let sc = Math.abs(tot.kcal - M.kcal) / M.kcal * 3
      + Math.max(0, (M.p - tot.p) / M.p) * 2 + Math.max(0, (tot.p - M.p * 1.5) / M.p)
      + Math.abs(tot.g - M.g) / M.g * 0.6 + Math.max(0, (tot.na - 2300) / 2300) * 0.5;
    for (const m of ms) if (pl[m] && recentRefs.includes(pl[m].ref)) sc += 0.35;
    const refs = ms.map(m => pl[m] && pl[m].ref);
    if (new Set(refs).size < refs.length) sc += 1;
    if (sc < bs) { bs = sc; best = pl; }
  }
  return best;
}
function genWeek(from, n = 7) {
  let recent = [];
  for (let i = 0; i < n; i++) {
    const k = addD(from, i);
    const p = genDay(k, (Date.now() + i * 7919) & 0x7fffffff, {}, recent);
    S.plan[k] = { meals: p, hecho: {} };
    recent = recent.concat(Object.values(p).map(x => x.ref)).slice(-12);
  }
  save();
}
function planTotals(k) { const p = S.plan[k]; const t = zeroN(); if (p) Object.values(p.meals).forEach(x => x && addN(t, x.n)); return t; }
function planLabel(x) {
  if (x.lbl) return x.lbl;
  const i = refInfo(x.ref); if (!i) return "?";
  return i.n;
}
function factorTxt(f) {
  const m = { 0.5: "½ porción", 0.75: "¾ de porción", 1: "1 porción", 1.25: "1¼ porciones", 1.5: "1½ porciones", 1.75: "1¾ porciones", 2: "2 porciones" };
  return m[f] || `${r1(f)} porciones`;
}

/* ===================== lista de mercado ===================== */
function shoppingList(from, n) {
  const need = {};
  const addRaw = (raw, k) => { for (const [id, g] of Object.entries(raw)) need[id] = (need[id] || 0) + g * k; };
  for (let i = 0; i < n; i++) {
    const p = S.plan[addD(from, i)]; if (!p) continue;
    for (const x of Object.values(p.meals)) {
      if (!x) continue;
      if (x.ref.startsWith("r:")) { const r = recipeById(x.ref.slice(2)); if (r && r.raw) addRaw(r.raw, x.f); }
      else { const f = foodById(x.ref.slice(2)); if (f) addRaw(f.raw ? { [f.raw.split(":")[0]]: x.g * +f.raw.split(":")[1] } : { [f.id]: x.g }, 1); }
    }
  }
  const skip = new Set(["agua", "sal", "caldo_pollo", "comino"]);
  const groups = {};
  for (const [id, g] of Object.entries(need)) {
    if (skip.has(id) || g < 1) continue;
    const f = foodById(id); if (!f) continue;
    (groups[f.gr] = groups[f.gr] || []).push({ id, n: f.n, g, txt: qtyTxt(f, g) });
  }
  return groups;
}
function plural(lbl, n) {
  const base = lbl.replace(/ \(.*\)/, "");
  if (n <= 1) return base;
  return base.split(" ").map(w => /^(de|con|sin|a|y)$/.test(w) ? w : /[aeiouáéó]$/.test(w) ? w + "s" : /[zs]$/.test(w) ? w : w + "es").join(" ");
}
function qtyTxt(f, g) {
  const por = f.por || [];
  const lb = por.find(p => p[0] === "libra");
  const liquid = f.gr === "bebidas" || /leche|kumis|yogur|caldo|jugo|^agua/.test(f.id);
  if (liquid && g >= 500) return `${r1(g / 1000)} litros`;
  if (liquid) return `${fmt(g)} ml`;
  if (lb && g >= 250) return `${r1(Math.ceil(g / 250) / 2)} lb (${fmt(g)} g)`;
  const u = por.find(p => /^unidad|^tallo|^diente|^tajada|^mazorca|^bloque|^lata|^pastilla/.test(p[0]));
  if (u && g / u[1] >= 0.8) { const n = Math.ceil(g / u[1] - 0.15); return `${n} ${plural(u[0], n)} · ${fmt(g)} g`; }
  if (g >= 1000) return `${r1(g / 1000)} kg`;
  return `${fmt(g)} g`;
}
/* ===================== IA (Gemini) ===================== */
const GBASE = "https://generativelanguage.googleapis.com/v1beta/";
async function gemModels(key) {
  const r = await fetch(`${GBASE}models?pageSize=200&key=${encodeURIComponent(key)}`);
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error?.message || ("Error " + r.status));
  const ms = (j.models || []).filter(m => (m.supportedGenerationMethods || []).includes("generateContent"))
    .map(m => m.name.replace("models/", ""))
    .filter(n => /^gemini-/.test(n) && /flash/.test(n) && !/(image|tts|audio|live|embedding|exp|learnlm|robotics|computer|8b)/.test(n));
  const ver = n => { const m = n.match(/gemini-(\d+(?:\.\d+)?)/); return m ? +m[1] : 0; };
  const rank = n => ver(n) * 10 - (/lite/.test(n) ? 3 : 0) - (/preview/.test(n) ? 1 : 0) - (/-\d{3,}$|-\d{2}-\d{4}/.test(n) ? 0.5 : 0);
  return ms.sort((a, b) => rank(b) - rank(a));
}
async function gemCall(parts, opts = {}) {
  const key = S.aj.key;
  if (!key) throw new Error("SIN_CLAVE");
  if (!navigator.onLine) throw new Error("Sin conexión a internet");
  let models = S.aj.modelos && S.aj.modelos.length ? S.aj.modelos : null;
  if (!models) { models = await gemModels(key); S.aj.modelos = models; save(); }
  let order = [...models];
  if (S.aj.modelo && order.includes(S.aj.modelo)) order = [S.aj.modelo, ...order.filter(m => m !== S.aj.modelo)];
  const nonLite = order.filter(m => !/lite/.test(m)).slice(0, 2), lite = order.filter(m => /lite/.test(m)).slice(0, 2);
  order = [...nonLite, ...lite];
  let lastErr = null;
  for (const m of order) {
    try {
      const body = { contents: opts.history ? [...opts.history, { role: "user", parts }] : [{ role: "user", parts }], generationConfig: { temperature: opts.temp ?? 0.2 } };
      if (opts.json) body.generationConfig.responseMimeType = "application/json";
      if (opts.system) body.systemInstruction = { parts: [{ text: opts.system }] };
      const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 60000);
      const r = await fetch(`${GBASE}models/${m}:generateContent?key=${encodeURIComponent(key)}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: ctl.signal });
      clearTimeout(to);
      const j = await r.json().catch(() => ({}));
      if (!r.ok) {
        lastErr = new Error(j.error?.message || ("Error " + r.status));
        if ([429, 500, 503, 404, 400].includes(r.status) && !/API key/.test(lastErr.message)) continue;
        throw lastErr;
      }
      const txt = (j.candidates?.[0]?.content?.parts || []).filter(p => !p.thought).map(p => p.text || "").join("");
      if (!txt) { lastErr = new Error("La IA no devolvió respuesta"); continue; }
      return { text: txt, model: m };
    } catch (e) {
      lastErr = e.name === "AbortError" ? new Error("La IA tardó demasiado") : e;
      if (/API key|SIN_CLAVE|permission/i.test(lastErr.message)) throw lastErr;
    }
  }
  throw lastErr || new Error("No hay modelos disponibles");
}
function parseJSON(t) {
  try { return JSON.parse(t); } catch (e) { }
  const m = t.match(/\{[\s\S]*\}|\[[\s\S]*\]/); if (m) try { return JSON.parse(m[0]); } catch (e) { }
  return null;
}
function catalogText() {
  const lines = [];
  for (const r of Object.values(RECIPES)) if (r.m) lines.push(`r:${r.id}|${r.n}|porción ${r.w} g`);
  for (const f of Object.values(FOODS)) lines.push(`f:${f.id}|${f.n}`);
  for (const f of S.propios) lines.push(`f:${f.id}|${f.n}`);
  return lines.join("\n");
}
const AI_FOOD_PROMPT = `Eres un nutricionista colombiano experto en estimar porciones. Analiza la comida y devuelve SOLO JSON con esta forma:
{"plato":"nombre corto del plato completo","items":[{"nombre":"nombre del alimento en español de Colombia","ref":"id del catálogo o null","gramos":número,"confianza":0-1,"kcal_estimadas":número,"proteina":número,"carbohidratos":número,"grasa":número}],"nota":"comentario breve si hay dudas (ej. salsa no visible, porción tapada)"}
Reglas:
- Separa cada componente visible del plato (arroz, fríjoles, carne, huevo, arepa, aguacate, bebida, etc.). Si es un plato que se come como unidad y está en el catálogo como receta (r:...), puedes usar la receta solo si TODOS sus componentes están presentes; si no, separa los componentes.
- Usa preferiblemente un id del catálogo (exacto, con prefijo f: o r:). Si nada corresponde, ref = null.
- Los gramos son la parte comestible tal como se ve servida (cocida). Usa referencias: plato llano 25 cm, cuchara 15 ml, arepa mediana 80 g, taza de arroz 160 g, presa de pollo 110 g, huevo 50 g, pocillo 150 ml, vaso 240 ml.
- Sé realista; no infles ni reduzcas porciones. Considera el aceite de las frituras.
- kcal_estimadas, proteina, carbohidratos y grasa son tu estimación para esos gramos (se usan solo si ref es null).
CATÁLOGO (id|nombre):
`;
async function aiAnalyze({ image, text }) {
  const parts = [];
  if (image) parts.push({ inline_data: { mime_type: "image/jpeg", data: image } });
  parts.push({ text: AI_FOOD_PROMPT + catalogText() + (text ? `\n\nDescripción del usuario: ${text}` : "\n\nAnaliza la foto.") });
  const res = await gemCall(parts, { json: true, temp: 0.1 });
  const j = parseJSON(res.text);
  if (!j || !Array.isArray(j.items)) throw new Error("No se pudo interpretar la respuesta de la IA");
  j.items = j.items.filter(x => x && x.nombre).map(x => {
    const g = clamp(+x.gramos || 100, 1, 3000);
    const ia = { kcal: +x.kcal_estimadas || 0, p: +x.proteina || 0, c: +x.carbohidratos || 0, g: +x.grasa || 0 };
    let ref = x.ref && refInfo(String(x.ref)) ? String(x.ref) : null, desdeIA = !!ref;
    if (!ref) ref = bestMatch(x.nombre);
    let usarIA = !ref;
    if (ref) {
      const q = matchQuality(x.nombre, ref), k = nutOf(ref, g).kcal, ratio = ia.kcal && k ? Math.max(k / ia.kcal, ia.kcal / k) : 1;
      // si la coincidencia local es parcial y las calorías no cuadran, usar la estimación de la IA
      if (!desdeIA && (q < 0.75 || (q < 1 && ratio > 1.5))) usarIA = !!ia.kcal;
      if (desdeIA && ratio > 3) usarIA = !!ia.kcal;
    }
    return { nombre: x.nombre, ref, g, conf: +x.confianza || 0.5, ia, usarIA };
  });
  j.model = res.model;
  return j;
}

/* ===================== Open Food Facts ===================== */
async function offLookup(code) {
  if (S.barras[code]) return { local: S.barras[code] };
  const r = await fetch(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json?fields=product_name,product_name_es,brands,nutriments,serving_quantity,serving_size,quantity`);
  if (!r.ok) return null;
  const j = await r.json();
  if (j.status !== 1 || !j.product) return null;
  const p = j.product, n = p.nutriments || {};
  let kcal = n["energy-kcal_100g"]; if (kcal == null && n.energy_100g != null) kcal = n.energy_100g / 4.184;
  if (kcal == null) return { incompleto: true, nombre: p.product_name_es || p.product_name || "", marca: p.brands || "" };
  return {
    nombre: p.product_name_es || p.product_name || "Producto", marca: (p.brands || "").split(",")[0],
    kcal: +kcal, p: +n.proteins_100g || 0, c: +n.carbohydrates_100g || 0, g: +n.fat_100g || 0, f: +n.fiber_100g || 0, a: +n.sugars_100g || 0,
    na: n.sodium_100g != null ? n.sodium_100g * 1000 : (n.salt_100g != null ? n.salt_100g * 400 : 0),
    porcion: +p.serving_quantity || 0, porcionTxt: p.serving_size || ""
  };
}

/* ===================== puente nativo ===================== */
const pend = {};
let nid = 0;
window.onNative = (id, data) => { const p = pend[id]; if (p) { delete pend[id]; p(data); } };
function nativeCall(fn, ...args) { return new Promise(res => { const id = "n" + (++nid); pend[id] = res; try { Android[fn](id, ...args); } catch (e) { delete pend[id]; res(null); } }); }
function pushNative() {
  if (!NATIVE || !S.perfil) return;
  try {
    const k = today(), t = dayTotals(k), g = goalKcal(k);
    Android.setWidget(JSON.stringify({ quedan: r0(g - t.kcal), meta: r0(g), comido: r0(t.kcal), p: r0(t.p), c: r0(t.c), g: r0(t.g), mp: S.metas.p, mc: S.metas.c, mg: S.metas.g, agua: dayPeek(k).agua, maMeta: S.metas.agua }));
  } catch (e) { }
  try { Android.setReminders(JSON.stringify(reminderList())); } catch (e) { }
}
function reminderList() {
  const L = [];
  const msgs = { desayuno: "¿Ya desayunaste? Registra tu desayuno", media: "Hora de la media mañana", almuerzo: "Registra tu almuerzo", onces: "¿Qué comiste en las onces?", cena: "No olvides registrar la cena" };
  if (S.rec.comidas) for (const m of mealList()) { const [h, mi] = (S.rec.horas[m] || "12:00").split(":").map(Number); L.push({ id: "m_" + m, h, m: mi, t: MEALS[m], x: msgs[m], a: "add:" + m }); }
  if (S.rec.agua) { const c = Math.max(60, +S.rec.aguaCada || 120); for (let mins = 9 * 60; mins <= 20 * 60; mins += c) L.push({ id: "w_" + mins, h: Math.floor(mins / 60), m: mins % 60, t: "Toma agua", x: "Un vaso de agua te acerca a tu meta del día", a: "agua" }); }
  if (S.rec.pesoSemanal) L.push({ id: "peso", h: 7, m: 15, dow: 1, t: "Pésate hoy", x: "Registra tu peso del lunes para ver tu progreso", a: "peso" });
  const once = [];
  if (S.ayuno.inicio) { const end = S.ayuno.inicio + fastHours() * 3600e3; if (end > Date.now()) once.push({ id: "ayuno", at: end, t: "¡Terminaste tu ayuno!", x: `Completaste ${S.ayuno.modo}. Ya puedes comer.`, a: "ayuno" }); }
  return { diarios: L, unicos: once };
}
function fastHours() { const m = S.ayuno.modo; if (m === "OMAD") return 23; return +m.split(":")[0]; }
