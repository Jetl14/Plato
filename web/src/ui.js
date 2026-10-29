"use strict";
/* ===================== íconos ===================== */
const IC = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/>',
  cal: '<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  book: '<path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4z"/><path d="M5 16a4 4 0 0 1 4-4h10"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  cam: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  bar: '<path d="M4 6v12M7 6v12M10 6v12M14 6v12M16 6v12M20 6v12"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  left: '<path d="m15 5-7 7 7 7"/>', right: '<path d="m9 5 7 7-7 7"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  star: '<path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4l-5.5 2.9 1-6.2L3 9.7l6.2-.9z"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  flame: '<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cart: '<path d="M3 4h2l2.5 11h11L21 8H7"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/>',
  swap: '<path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  scale: '<rect x="3" y="4" width="18" height="16" rx="4"/><path d="M8 9a5 5 0 0 1 8 0l-3 3"/>',
  run: '<circle cx="14" cy="4.5" r="2"/><path d="m6 21 3-6 3 2v5M8 11l3-4 4 3 3 1M11 7l-2-1-3 2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>',
  coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3"/>',
  fork: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 2-3 6v4h3v8"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  apple: '<path d="M12 7c-1-2-4-2.5-6-1-2.5 2-2 7 0 10 1.5 2.5 3 3 4 3s1.5-.5 2-.5 1 .5 2 .5 2.5-.5 4-3c1-1.6 1.5-3.5 1.3-5"/><path d="M12 7c0-2 1-4 3-4"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  dl: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', up: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  img: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  ruler: '<path d="m3 17 14-14 4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>'
};
const ic = (n, c = "") => `<svg class="i ${c}" viewBox="0 0 24 24">${IC[n] || ""}</svg>`;
const MEAL_IC = { desayuno: "coffee", media: "apple", almuerzo: "fork", onces: "coffee", cena: "moon" };

/* ===================== estado de la vista ===================== */
let TAB = "hoy", SEL = today();
const V = { recFiltro: "todas", recQ: "", planDia: today(), progRango: 30 };

function toast(t, ms = 2200) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("on"), ms); }
function vib() { if (NATIVE) try { Android.vibrate(15); } catch (e) { } }

/* ===================== hojas (bottom sheets) ===================== */
const SHEETS = [];
function sheet(title, body, foot = "", opts = {}) {
  const ov = document.createElement("div"); ov.className = "ov";
  const sh = document.createElement("div"); sh.className = "sheet" + (opts.full ? " full" : "");
  sh.innerHTML = `<div class="grab"></div><div class="sh-h"><h2 class="grow">${title}</h2>${opts.head || ""}<button class="ibtn" data-close>${ic("x")}</button></div>
    <div class="sh-b">${body}</div>${foot ? `<div class="sh-f">${foot}</div>` : ""}`;
  document.body.append(ov, sh);
  requestAnimationFrame(() => { ov.classList.add("on"); sh.classList.add("on"); });
  const o = { ov, sh, onClose: opts.onClose, close: () => closeSheet(o) };
  ov.onclick = () => o.close(); $("[data-close]", sh).onclick = () => o.close();
  SHEETS.push(o);
  return o;
}
function closeSheet(o) {
  o = o || SHEETS[SHEETS.length - 1]; if (!o) return;
  const i = SHEETS.indexOf(o); if (i >= 0) SHEETS.splice(i, 1);
  o.sh.querySelectorAll("[id]").forEach(e => e.removeAttribute("id"));
  o.ov.classList.remove("on"); o.sh.classList.remove("on");
  setTimeout(() => { o.ov.remove(); o.sh.remove(); }, 260);
  if (o.onClose) o.onClose();
}
function closeAll() { while (SHEETS.length) closeSheet(); }
window.onBack = () => { if (SHEETS.length) { closeSheet(); return true; } if (TAB !== "hoy") { go("hoy"); return true; } return false; };

/* ===================== navegación ===================== */
function go(t) {
  TAB = t;
  $$(".scr").forEach(s => s.classList.toggle("on", s.id === "s-" + t));
  $$("nav.tabs [data-t]").forEach(b => b.classList.toggle("on", b.dataset.t === t));
  render(); window.scrollTo(0, 0);
}
function render() {
  if (!S.perfil) return;
  ({ hoy: renderHoy, plan: renderPlan, recetas: renderRecetas, progreso: renderProgreso, perfil: renderPerfil })[TAB]();
}
window.onNativeResume = () => { if (S && S.perfil) { if (SEL !== today() && TAB === "hoy" && !SHEETS.length) SEL = today(); render(); pushNative(); } };
window.onNativeAction = a => {
  if (!S.perfil) return;
  if (a.startsWith("add:")) { go("hoy"); openAdd(a.slice(4)); }
  else if (a === "agua") { go("hoy"); }
  else if (a === "peso") { go("progreso"); openPeso(); }
  else if (a === "ayuno") { go("hoy"); openAyuno(); }
  else if (a === "foto") { go("hoy"); openAdd(guessMeal(), "foto"); }
};
function guessMeal() {
  const h = new Date().getHours(), ms = mealList();
  const pick = h < 10 ? "desayuno" : h < 12 ? "media" : h < 15 ? "almuerzo" : h < 18 ? "onces" : "cena";
  return ms.includes(pick) ? pick : (h < 15 ? ms[0] : ms[ms.length - 1]);
}

/* ===================== HOY ===================== */
function ring(pct, color, size = 132, sw = 12, track = "rgba(127,127,127,.22)") {
  const r = (size - sw) / 2, c = 2 * Math.PI * r, p = clamp(pct, 0, 1);
  return `<svg viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="${track}" stroke-width="${sw}" fill="none"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="${color}" stroke-width="${sw}" fill="none" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p)}"/></svg>`;
}
function weekStrip() {
  const d = parseD(SEL), dow = (d.getDay() + 6) % 7, mon = addD(SEL, -dow);
  let h = `<div class="week">`;
  for (let i = 0; i < 7; i++) {
    const k = addD(mon, i), dd = parseD(k), has = (S.diario[k]?.items || []).length;
    h += `<button class="${k === SEL ? "on" : ""}" onclick="selDay('${k}')">${DIAS[dd.getDay()]}<b>${dd.getDate()}</b><span class="dot ${has ? "y" : ""}"></span></button>`;
  }
  return h + "</div>";
}
window.selDay = k => { SEL = k; renderHoy(); };
window.shiftWeek = n => { SEL = addD(SEL, n * 7); renderHoy(); };
function renderHoy() {
  const k = SEL, t = dayTotals(k), M = S.metas, g = goalKcal(k), rest = g - t.kcal, d = dayPeek(k);
  const isToday = k === today();
  const title = isToday ? "Hoy" : k === addD(today(), -1) ? "Ayer" : k === addD(today(), 1) ? "Mañana" : fdate(k);
  const plan = S.plan[k];
  const mb = (lbl, v, goal, col) => `<div class="mac"><div class="lbl"><span class="mut">${lbl}</span><b>${r0(v)}<span class="mut" style="font-weight:500"> / ${goal} g</span></b></div><div class="bar"><i style="width:${clamp(v / goal * 100, 0, 100)}%;background:${col}"></i></div></div>`;
  let h = `<div class="top"><div><div class="mut sm">${isToday ? fdate(k) : ""}</div><h1>${title}</h1></div>
    <div class="row"><button class="ibtn" onclick="shiftWeek(-1)">${ic("left")}</button><button class="ibtn" onclick="${isToday ? "openChat()" : "selDay(today())"}">${isToday ? ic("chat") : ic("home")}</button><button class="ibtn" onclick="shiftWeek(1)">${ic("right")}</button><button class="ibtn" onclick="go('perfil')" aria-label="Perfil">${ic("user")}</button></div></div>
  ${weekStrip()}
  <div class="card hero">
    <div class="ringwrap">
      <div class="ring">${ring(t.kcal / g, rest < 0 ? "#F28B6C" : "#7FD6A6", 132, 12, "rgba(255,255,255,.14)")}
        <div class="ctr"><div class="big">${fmt(Math.abs(rest))}</div><div class="xs mut">${rest < 0 ? "kcal de más" : "kcal restantes"}</div></div></div>
      <div class="stats">
        <div class="stat"><span class="mut">Meta</span><b>${fmt(M.kcal)}</b></div>
        <div class="stat"><span class="mut">Comido</span><b>${fmt(t.kcal)}</b></div>
        <div class="stat"><span class="mut">Ejercicio</span><b>${t.ej ? "+" + fmt(t.ej) : "0"}</b></div>
        ${plan ? `<div class="stat"><span class="mut">Plan del día</span><b>${fmt(planTotals(k).kcal)}</b></div>` : ""}
      </div>
    </div>
    <div class="macros">${mb("Proteína", t.p, M.p, "var(--prot)")}${mb("Carbos", t.c, M.c, "var(--carb)")}${mb("Grasa", t.g, M.g, "var(--fat)")}</div>
  </div>`;
  for (const m of mealList()) {
    const items = d.items.filter(i => i.m === m), mt = mealTotals(k, m), sug = Math.round(M.kcal * mealShares()[m]);
    const pl = plan && plan.meals[m];
    h += `<div class="card meal"><div class="hd"><div class="ico">${ic(MEAL_IC[m])}</div><div class="grow"><h3>${MEALS[m]}</h3>
      <div class="sm mut">${mt.kcal ? fmt(mt.kcal) + " kcal" : "Sugerido ~" + fmt(sug) + " kcal"}${mt.kcal ? ` · P ${r0(mt.p)} · C ${r0(mt.c)} · G ${r0(mt.g)}` : ""}</div></div>
      <button class="add" onclick="openAdd('${m}')" aria-label="Agregar">${ic("plus")}</button></div>`;
    for (const it of items) h += `<div class="it" onclick="openItem('${k}','${it.id}')"><div class="grow"><div class="nm">${esc(it.nm)}</div><div class="xs mut">${esc(it.u || (it.q ? r0(it.q) + " g" : ""))}${it.ia ? " · IA" : ""}</div></div><div class="k">${fmt(it.n.kcal)}</div></div>`;
    if (pl && !(plan.hecho || {})[m]) {
      h += `<div class="planbox"><div class="it"><button class="chk" onclick="event.stopPropagation();logPlan('${k}','${m}')" aria-label="Marcar como comido"></button>
        <div class="grow" onclick="openPlanItem('${k}','${m}')"><div class="xs mut">Del plan</div><div class="nm">${esc(planLabel(pl))}</div><div class="xs mut">${pl.lbl ? "" : factorTxt(pl.f) + " · "}${fmt(pl.n.kcal)} kcal</div></div></div></div>`;
    }
    h += `</div>`;
  }
  // agua
  const vasos = Math.round(M.agua / 250), tom = Math.round((d.agua || 0) / 250);
  h += `<div class="card"><div class="row between"><div class="row">${ic("drop")}<div><h3>Agua</h3><div class="sm mut">${fmt(d.agua || 0)} de ${fmt(M.agua)} ml</div></div></div>
    <div class="row"><button class="btn sm sec" onclick="agua(-250)">−</button><button class="btn sm" onclick="agua(250)">+ vaso</button></div></div>
    <div class="glasses" style="margin-top:10px">${Array.from({ length: Math.max(vasos, tom) }, (_, i) => `<span class="glass ${i < tom ? "on" : ""}"></span>`).join("")}</div></div>`;
  // ejercicio y ayuno
  const fa = S.ayuno.inicio;
  h += `<div class="grid2">
    <button class="card tap" style="text-align:left" onclick="openEjercicio()"><div class="row">${ic("run")}<b>Ejercicio</b></div><div class="sm mut" style="margin-top:6px">${(d.ej || []).length ? fmt(t.ej) + " kcal quemadas" : "Agregar actividad"}</div></button>
    <button class="card tap" style="text-align:left" onclick="openAyuno()"><div class="row">${ic("clock")}<b>Ayuno</b></div><div class="sm mut" style="margin-top:6px">${fa ? fastStatus().txt : "Iniciar " + S.ayuno.modo}</div></button></div>`;
  // nutrientes del día
  h += `<div class="card"><div class="row between"><h3>Detalle del día</h3><button class="link" onclick="openDetalle('${k}')">Ver todo</button></div>
    <div class="kv" style="margin-top:6px"><span>Fibra <b>${r0(t.f)} g</b> / ${M.f}</span><span>Azúcares <b>${r0(t.a)} g</b></span><span>Sodio <b>${fmt(t.na)} mg</b> / 2.300</span></div></div>`;
  $("#s-hoy").innerHTML = h;
}
window.agua = ml => { const d = day(SEL); d.agua = Math.max(0, (d.agua || 0) + ml); save(); vib(); renderHoy(); };
window.logPlan = (k, m) => {
  const p = S.plan[k], x = p.meals[m]; if (!x) return;
  logItem(k, m, x.ref, x.g, x.lbl || factorTxt(x.f), { plan: true });
  p.hecho = p.hecho || {}; p.hecho[m] = true; save(); vib(); toast("Registrado desde tu plan"); render();
};
window.openDetalle = k => {
  const t = dayTotals(k), M = S.metas;
  const row = (l, v, u, goal) => `<tr><td>${l}</td><td>${typeof v === "number" ? (u === "mg" ? fmt(v) : r1(v)) : v} ${u}${goal ? ` <span class="mut">/ ${goal}</span>` : ""}</td></tr>`;
  const pc = t.kcal ? [t.p * 4 / t.kcal, t.c * 4 / t.kcal, t.g * 9 / t.kcal] : [0, 0, 0];
  sheet("Nutrientes del día", `<div class="sm mut">${fdate(k)}</div>
    <div class="nut"><div><b>${fmt(t.kcal)}</b><span>kcal</span></div><div><b style="color:var(--prot)">${r0(pc[0] * 100)}%</b><span>proteína</span></div><div><b style="color:var(--carb)">${r0(pc[1] * 100)}%</b><span>carbos</span></div><div><b style="color:var(--fat)">${r0(pc[2] * 100)}%</b><span>grasa</span></div></div>
    <table class="tbl">${row("Energía", t.kcal, "kcal", fmt(goalKcal(k)))}${row("Proteína", t.p, "g", M.p)}${row("Carbohidratos", t.c, "g", M.c)}${row("Grasa", t.g, "g", M.g)}${row("Fibra", t.f, "g", M.f)}${row("Azúcares", t.a, "g", "")}${row("Sodio", t.na, "mg", "2.300")}${row("Agua", fmt(dayPeek(k).agua || 0), "ml", fmt(M.agua))}</table>
    <p class="xs mut">Valores calculados con la Tabla de Composición de Alimentos Colombianos (ICBF) y USDA FoodData Central. Los azúcares no aparecen en la tabla del ICBF, así que en esos alimentos pueden salir en cero.</p>`);
};

/* ----- ver / editar un registro ----- */
window.openItem = (k, id) => {
  const d = day(k), it = d.items.find(i => i.id === id); if (!it) return;
  const editable = !!it.ref;
  const body = `<div class="sm mut">${MEALS[it.m] || ""} · ${fdate(k)}</div>
    <div class="nut"><div><b>${fmt(it.n.kcal)}</b><span>kcal</span></div><div><b>${r1(it.n.p)}</b><span>proteína</span></div><div><b>${r1(it.n.c)}</b><span>carbos</span></div><div><b>${r1(it.n.g)}</b><span>grasa</span></div></div>
    ${editable ? `<label class="f">Cantidad en gramos<div class="stepper"><button onclick="stepQ(-10)">−</button><input class="in" id="q" type="number" inputmode="decimal" value="${r0(it.q)}"><button onclick="stepQ(10)">+</button></div></label>` : ""}
    <label class="f">Comida<select class="in" id="mm">${mealList().map(m => `<option value="${m}" ${m === it.m ? "selected" : ""}>${MEALS[m]}</option>`).join("")}</select></label>
    ${it.ia ? `<p class="xs mut">Identificado con IA a partir de ${it.ia === "foto" ? "una foto" : "tu descripción"}.</p>` : ""}`;
  const o = sheet(esc(it.nm), body, `<button class="btn sec" onclick="delItem('${k}','${id}')">${ic("trash")}</button><button class="btn grow" id="sv">Guardar</button>`);
  $("#sv", o.sh).onclick = () => {
    it.m = $("#mm", o.sh).value;
    if (editable) { const q = +$("#q", o.sh).value; if (q > 0) { it.n = nutOf(it.ref, q); for (const x of NK) it.n[x] = r1(it.n[x]); it.q = q; it.u = `${r0(q)} g`; } }
    save(); o.close(); render();
  };
};
window.stepQ = n => { const i = $("#q"); i.value = Math.max(0, (+i.value || 0) + n); i.dispatchEvent(new Event("input")); };
window.delItem = (k, id) => {
  const d = day(k), i = d.items.findIndex(x => x.id === id); if (i < 0) return;
  const it = d.items.splice(i, 1)[0];
  if (it.plan && S.plan[k] && S.plan[k].hecho) delete S.plan[k].hecho[it.m];
  save(); closeSheet(); render(); toast("Eliminado");
};

/* ===================== AGREGAR ===================== */
let ADD = null;
window.openAdd = (meal, mode = "buscar") => {
  ADD = { meal: mealList().includes(meal) ? meal : guessMeal(), k: SEL, mode };
  const head = `<select class="in" id="addMeal" style="height:40px;width:auto;padding:0 8px">${mealList().map(m => `<option value="${m}" ${m === ADD.meal ? "selected" : ""}>${MEALS[m]}</option>`).join("")}</select>`;
  const o = sheet("Agregar", `<div class="chips" id="addTabs">
    ${[["buscar", "search", "Buscar"], ["foto", "cam", "Foto IA"], ["describir", "mic", "Describir"], ["codigo", "bar", "Código"], ["rapido", "bolt", "Rápido"]].map(([m, i, l]) => `<button class="chip" data-m="${m}">${ic(i, "s")}${l}</button>`).join("")}
    </div><div id="addBody" class="col"></div>`, "", { full: true, head, onClose: () => { stopCam(); } });
  ADD.o = o;
  $("#addMeal", o.sh).onchange = e => ADD.meal = e.target.value;
  $$("#addTabs .chip", o.sh).forEach(b => b.onclick = () => addMode(b.dataset.m));
  addMode(mode);
};
function addMode(m) {
  stopCam(); ADD.mode = m;
  $$("#addTabs .chip").forEach(b => b.classList.toggle("on", b.dataset.m === m));
  const B = $("#addBody");
  if (m === "buscar") {
    B.innerHTML = `<div class="search">${ic("search")}<input id="q" placeholder="Arepa, bandeja paisa, banano…" autocomplete="off"></div><div id="res" class="list"></div>`;
    const q = $("#q"); q.oninput = () => showResults(q.value); showResults("");
    setTimeout(() => q.focus(), 300);
  } else if (m === "foto") addFoto(B);
  else if (m === "describir") addDescribir(B);
  else if (m === "codigo") addCodigo(B);
  else if (m === "rapido") addRapido(B);
}
function avatar(ref, n, gr) {
  const col = (GRUPOS[gr] || GRUPOS.receta)[1];
  const t = norm(n).split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("").toUpperCase() || n[0];
  return `<div class="av" style="background:${col}">${esc(t)}</div>`;
}
function resultRow(e) {
  const i = refInfo(e.ref); if (!i) return "";
  const k = i.t === "r" ? `${fmt(i.per.kcal)} kcal · porción ${fmt(i.w)} g` : `${fmt(i.per100.kcal)} kcal / 100 g`;
  const src = i.t === "r" ? "Receta" : i.src === "TCAC" ? "ICBF" : i.src === "USDA" ? "USDA" : i.src === "personal" ? "Propio" : "Estimado";
  return `<div class="li" onclick="openFood('${e.ref}')">${avatar(e.ref, i.n, i.gr)}<div class="grow"><div class="b" style="font-size:15px">${esc(i.n)}</div><div class="xs mut">${k} · ${src}</div></div>
    <button class="ibtn" onclick="event.stopPropagation();quickAdd('${e.ref}')" aria-label="Agregar rápido">${ic("plus")}</button></div>`;
}
function showResults(q) {
  const R = $("#res"); if (!R) return;
  if (!q.trim()) {
    const rec = S.recientes.slice(0, 12).map(ref => ({ ref })).filter(e => refInfo(e.ref));
    const fav = S.favs.map(ref => ({ ref })).filter(e => refInfo(e.ref));
    let h = "";
    if (fav.length) h += `<div class="sec-t"><h3>Favoritos</h3></div>` + fav.map(resultRow).join("");
    if (rec.length) h += `<div class="sec-t"><h3>Recientes</h3></div>` + rec.map(resultRow).join("");
    if (!h) h = `<div class="empty">Busca entre ${fmt(Object.keys(FOODS).length)} alimentos y ${Object.values(RECIPES).filter(r => r.m).length} recetas colombianas.<br><br>También puedes tomar una foto de tu plato.</div>`;
    R.innerHTML = h; return;
  }
  const res = search(q, 50);
  R.innerHTML = res.length ? res.map(resultRow).join("") : `<div class="empty">No encontré “${esc(q)}”.<br><br><button class="btn sm" onclick="openNuevoAlimento('${esc(q).replace(/'/g, "")}')">Crear alimento</button> <button class="btn sm sec" onclick="addMode('describir')">Describir con IA</button></div>`;
}
window.quickAdd = ref => {
  const p = portionsOf(ref)[0];
  logItem(ADD.k, ADD.meal, ref, p[1], `1 ${p[0]}`);
  vib(); toast(`Agregado a ${MEALS[ADD.meal]}`); render();
};
window.openFood = (ref, opts = {}) => {
  const i = refInfo(ref); if (!i) return;
  const P = portionsOf(ref);
  let pi = opts.g ? P.length - 1 : 0, amt = opts.g ? opts.g : 1;
  const fav = S.favs.includes(ref);
  const head = `<button class="ibtn" id="fav" style="color:${fav ? "var(--carb)" : "inherit"}">${ic("star")}</button>`;
  const r = i.t === "r" ? recipeById(i.id) : null;
  const body = `<div class="row">${avatar(ref, i.n, i.gr)}<div class="sm mut">${i.t === "r" ? `Receta · ${esc(r.reg || "")}` : (GRUPOS[i.gr] || [""])[0]} · ${i.src === "TCAC" ? "Tabla ICBF" : i.src === "USDA" ? "USDA" : i.src === "receta" ? "Calculada con sus ingredientes" : i.src === "personal" ? "Alimento propio" : "Valor estimado"}</div></div>
    <div class="nut" id="nutb"></div>
    <div class="grid2"><label class="f">Cantidad<div class="stepper"><button id="mi">−</button><input class="in" id="amt" type="number" inputmode="decimal" step="any" value="${amt}" style="width:100%"><button id="pl">+</button></div></label>
    <label class="f">Medida<select class="in" id="por">${P.map((p, j) => `<option value="${j}" ${j === pi ? "selected" : ""}>${esc(p[0])}${p[1] > 1 ? ` (${r0(p[1])} g)` : ""}</option>`).join("")}</select></label></div>
    <div class="sm mut" id="gtxt"></div>
    <table class="tbl" id="tbl"></table>
    ${r ? `<button class="btn ghost" onclick="openReceta('${r.id}')">${ic("book", "s")} Ver receta e ingredientes</button>` : ""}`;
  const o = sheet(esc(i.n), body, `<button class="btn full" id="addb">Agregar a ${MEALS[ADD ? ADD.meal : guessMeal()]}</button>`, { head });
  const upd = () => {
    const a = +$("#amt", o.sh).value || 0, p = P[+$("#por", o.sh).value], g = a * p[1], n = nutOf(ref, g);
    $("#nutb", o.sh).innerHTML = `<div><b>${fmt(n.kcal)}</b><span>kcal</span></div><div><b style="color:var(--prot)">${r1(n.p)}</b><span>proteína</span></div><div><b style="color:var(--carb)">${r1(n.c)}</b><span>carbos</span></div><div><b style="color:var(--fat)">${r1(n.g)}</b><span>grasa</span></div>`;
    $("#gtxt", o.sh).textContent = p[1] > 1 ? `= ${fmt(g)} g` : "";
    $("#tbl", o.sh).innerHTML = `<tr><td>Fibra</td><td>${r1(n.f)} g</td></tr><tr><td>Azúcares</td><td>${r1(n.a)} g</td></tr><tr><td>Sodio</td><td>${fmt(n.na)} mg</td></tr>`;
    return { g, p, a };
  };
  $("#amt", o.sh).oninput = upd; $("#por", o.sh).onchange = () => { const p = P[+$("#por", o.sh).value]; $("#amt", o.sh).value = p[1] === 1 ? 100 : 1; upd(); };
  $("#mi", o.sh).onclick = () => { const p = P[+$("#por", o.sh).value]; const st = p[1] === 1 ? 10 : 0.5; $("#amt", o.sh).value = Math.max(0, r1((+$("#amt", o.sh).value || 0) - st)); upd(); };
  $("#pl", o.sh).onclick = () => { const p = P[+$("#por", o.sh).value]; const st = p[1] === 1 ? 10 : 0.5; $("#amt", o.sh).value = r1((+$("#amt", o.sh).value || 0) + st); upd(); };
  $("#fav", o.sh).onclick = e => { const f = S.favs.includes(ref); S.favs = f ? S.favs.filter(x => x !== ref) : [ref, ...S.favs]; save(); e.currentTarget.style.color = f ? "inherit" : "var(--carb)"; toast(f ? "Quitado de favoritos" : "Agregado a favoritos"); };
  if (opts.g) { $("#por", o.sh).value = P.length - 1; $("#amt", o.sh).value = r0(opts.g); }
  upd();
  $("#addb", o.sh).onclick = () => {
    const { g, p, a } = upd(); if (g <= 0) return;
    const k = ADD ? ADD.k : SEL, meal = ADD ? ADD.meal : guessMeal();
    const lbl = p[1] === 1 ? `${fmt(g)} g` : `${r1(a)} ${p[0]} · ${fmt(g)} g`;
    if (opts.onAdd) { opts.onAdd(ref, g); o.close(); return; }
    logItem(k, meal, ref, g, lbl); vib(); o.close(); toast(`Agregado a ${MEALS[meal]}`); render();
    if (ADD && ADD.mode === "buscar") { const q = $("#q"); if (q) { q.value = ""; showResults(""); } }
  };
};

/* ----- foto con IA ----- */
function needKey(B) {
  B.innerHTML = `<div class="card col"><div class="row">${ic("spark")}<h3>Activa la IA de Plato</h3></div>
    <p class="sm" style="margin:0">Para reconocer platos por foto o por descripción, Plato usa Gemini de Google. Es gratis para uso personal:</p>
    <ol class="sm" style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:4px"><li>Abre <b>aistudio.google.com/apikey</b> e inicia sesión con tu cuenta de Google.</li><li>Toca <b>Create API key</b> y cópiala.</li><li>Pégala aquí abajo.</li></ol>
    <button class="btn sec sm" onclick="openUrl('https://aistudio.google.com/apikey')">Abrir Google AI Studio</button>
    <input class="in" id="kin" placeholder="Pega tu clave (AIza…)" autocomplete="off">
    <button class="btn" onclick="saveKey($('#kin').value).then(ok=>ok&&addMode(ADD.mode))">Guardar y probar</button>
    <p class="xs mut" style="margin:0">La clave se guarda solo en tu celular. Las fotos se envían a Google únicamente para analizarlas.</p></div>`;
}
window.openUrl = u => { if (NATIVE) Android.openUrl(u); else window.open(u, "_blank"); };
window.saveKey = async (k) => {
  k = (k || "").trim(); if (!k) { toast("Pega la clave primero"); return false; }
  toast("Probando la clave…");
  try { const ms = await gemModels(k); if (!ms.length) throw new Error("La clave no tiene modelos Gemini Flash disponibles"); S.aj.key = k; S.aj.modelos = ms; S.aj.modelo = ""; save(); toast("IA activada · " + ms[0]); return true; }
  catch (e) { toast("Clave no válida: " + e.message, 4000); return false; }
};
function addFoto(B) {
  if (!S.aj.key) return needKey(B);
  B.innerHTML = `<div class="card col" style="align-items:center;text-align:center;padding:22px">${ic("cam")}<h3>Toma una foto de tu plato</h3>
    <p class="sm mut" style="margin:0">Fotografía desde arriba, con todo el plato a la vista y buena luz. Si hay algo que no se ve (aceite, salsas, la bebida), cuéntalo abajo.</p>
    <div class="grid2" style="width:100%"><button class="btn" onclick="pickPhoto(true)">${ic("cam", "s")} Cámara</button><button class="btn sec" onclick="pickPhoto(false)">${ic("img", "s")} Galería</button></div>
    <input class="in" id="fotoNota" placeholder="Opcional: “con aceite”, “jugo de lulo con azúcar”…"></div>
    <div id="fotoRes" class="col"></div>`;
}
window.pickPhoto = cam => {
  const inp = document.createElement("input"); inp.type = "file"; inp.accept = "image/*"; if (cam) inp.capture = "environment";
  inp.onchange = async () => { const f = inp.files[0]; if (!f) return; const b64 = await shrink(f, 1024); runAI({ image: b64, text: ($("#fotoNota") || {}).value || "" }, "foto"); };
  inp.click();
};
function shrink(file, max) {
  return new Promise((res, rej) => {
    const img = new Image(); const url = URL.createObjectURL(file);
    img.onload = () => { const s = Math.min(1, max / Math.max(img.width, img.height)); const c = document.createElement("canvas"); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s); c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url); res(c.toDataURL("image/jpeg", 0.85).split(",")[1]); };
    img.onerror = rej; img.src = url;
  });
}
async function runAI(inp, kind) {
  const R = $(kind === "foto" ? "#fotoRes" : "#descRes"); if (!R) return;
  R.innerHTML = `${inp.image ? `<img class="photo" src="data:image/jpeg;base64,${inp.image}">` : ""}<div class="card row"><div class="spin"></div><div class="grow"><b>Analizando…</b><div class="sm mut">Identificando alimentos y porciones</div></div></div>`;
  try {
    const j = await aiAnalyze(inp);
    ADD.ai = { items: j.items, img: inp.image, kind, nota: j.nota, plato: j.plato };
    renderAI();
  } catch (e) {
    const m = e.message === "SIN_CLAVE" ? "Falta la clave de la IA" : /quota|429|RESOURCE_EXHAUSTED/i.test(e.message) ? "Se acabó la cuota gratuita de la IA por ahora. Intenta en unos minutos o registra manualmente." : e.message;
    R.innerHTML = `${inp.image ? `<img class="photo" src="data:image/jpeg;base64,${inp.image}">` : ""}<div class="card"><b>No se pudo analizar</b><p class="sm mut">${esc(m)}</p><button class="btn sm" onclick="addMode('buscar')">Buscar manualmente</button></div>`;
  }
}
function aiNut(x) { return x.ref && !x.usarIA ? nutOf(x.ref, x.g) : scaleN({ kcal: x.ia.kcal, p: x.ia.p, c: x.ia.c, g: x.ia.g, f: 0, a: 0, na: 0 }, 1); }
function renderAI() {
  const A = ADD.ai, R = $(A.kind === "foto" ? "#fotoRes" : "#descRes"); if (!R) return;
  const first = R.parentElement && R.parentElement.firstElementChild; if (first && first !== R) first.style.display = "none";
  const tot = zeroN(); A.items.forEach(x => addN(tot, aiNut(x)));
  let h = `${A.img ? `<img class="photo" src="data:image/jpeg;base64,${A.img}">` : ""}
   <div class="card"><div class="row between"><div><div class="xs mut">${esc(A.plato || "Resultado")}</div><h2>${fmt(tot.kcal)} kcal</h2></div><div class="kv"><span>P <b>${r0(tot.p)}</b></span><span>C <b>${r0(tot.c)}</b></span><span>G <b>${r0(tot.g)}</b></span></div></div>
   ${A.nota ? `<p class="xs mut" style="margin:6px 0 0">${esc(A.nota)}</p>` : ""}</div>
   <div class="sm mut">Revisa cada alimento y ajusta los gramos si hace falta. Las calorías salen de la tabla de alimentos.</div>`;
  A.items.forEach((x, j) => {
    const i = x.ref ? refInfo(x.ref) : null, n = aiNut(x);
    h += `<div class="card col" style="gap:8px"><div class="row"><div class="grow"><div class="b">${esc(i && !x.usarIA ? i.n : x.nombre)}</div>
      <div class="xs mut">${x.usarIA || !i ? "Valor estimado por la IA" : "Detectado: " + esc(x.nombre)} · ${x.conf >= 0.75 ? '<span class="pill ok">seguro</span>' : x.conf >= 0.5 ? '<span class="pill">probable</span>' : '<span class="pill warn">revisar</span>'}</div></div>
      <b>${fmt(n.kcal)}</b></div>
      <div class="row"><div class="stepper grow"><button onclick="aiG(${j},-10)">−</button><input class="in" type="number" inputmode="decimal" value="${r0(x.g)}" onchange="aiSetG(${j},this.value)"><span class="sm mut">g</span><button onclick="aiG(${j},10)">+</button></div>
      <button class="ibtn" onclick="aiSwap(${j})" aria-label="Cambiar">${ic("swap", "s")}</button><button class="ibtn" onclick="aiDel(${j})" aria-label="Quitar">${ic("trash", "s")}</button></div></div>`;
  });
  h += `<button class="btn ghost" onclick="aiAddMore()">${ic("plus", "s")} Agregar otro alimento</button>
   <button class="btn full" onclick="aiSave()">Guardar en ${MEALS[ADD.meal]}</button>`;
  R.innerHTML = h;
}
window.aiG = (j, d) => { const x = ADD.ai.items[j]; x.g = Math.max(1, x.g + d); renderAI(); };
window.aiSetG = (j, v) => { ADD.ai.items[j].g = Math.max(1, +v || 1); renderAI(); };
window.aiDel = j => { ADD.ai.items.splice(j, 1); renderAI(); };
window.aiSwap = j => pickRef(ADD.ai.items[j].nombre, ref => { const x = ADD.ai.items[j]; x.ref = ref; x.usarIA = false; renderAI(); });
window.aiAddMore = () => pickRef("", ref => { ADD.ai.items.push({ nombre: refInfo(ref).n, ref, g: portionsOf(ref)[0][1], conf: 1, ia: {}, usarIA: false }); renderAI(); });
window.aiSave = () => {
  const A = ADD.ai; if (!A.items.length) return;
  for (const x of A.items) {
    if (x.ref && !x.usarIA) logItem(ADD.k, ADD.meal, x.ref, x.g, `${fmt(x.g)} g`, { ia: A.kind });
    else logCustom(ADD.k, ADD.meal, x.nombre, { kcal: x.ia.kcal, p: x.ia.p, c: x.ia.c, g: x.ia.g }, { ia: A.kind, u: `${fmt(x.g)} g (estimado)` });
  }
  vib(); toast(`Guardado en ${MEALS[ADD.meal]}`); closeSheet(ADD.o); render();
};
function pickRef(q, cb) {
  const o = sheet("Elegir alimento", `<div class="search">${ic("search")}<input id="pq" value="${esc(q)}" placeholder="Buscar"></div><div id="pres" class="list"></div>`, "", { full: true });
  const show = () => { const r = search($("#pq", o.sh).value, 40); $("#pres", o.sh).innerHTML = r.map(e => { const i = refInfo(e.ref); return `<div class="li" data-r="${e.ref}">${avatar(e.ref, i.n, i.gr)}<div class="grow"><b>${esc(i.n)}</b><div class="xs mut">${i.t === "r" ? fmt(i.per.kcal) + " kcal/porción" : fmt(i.per100.kcal) + " kcal/100 g"}</div></div></div>`; }).join("") || `<div class="empty">Sin resultados</div>`; $$("[data-r]", o.sh).forEach(el => el.onclick = () => { o.close(); cb(el.dataset.r); }); };
  $("#pq", o.sh).oninput = show; show();
}

/* ----- describir (texto o voz) ----- */
function addDescribir(B) {
  if (!S.aj.key) return needKey(B);
  B.innerHTML = `<div class="card col"><h3>Cuéntame qué comiste</h3>
   <textarea class="in" id="desc" placeholder="Ej: dos arepas con queso, un huevo frito y un tinto con una cucharadita de azúcar"></textarea>
   <div class="grid2"><button class="btn sec" onclick="dictar()">${ic("mic", "s")} Dictar</button><button class="btn" onclick="describir()">${ic("spark", "s")} Calcular</button></div></div><div id="descRes" class="col"></div>`;
}
window.dictar = async () => {
  if (!NATIVE) { toast("El dictado funciona en la app del celular"); return; }
  const t = await nativeCall("voice");
  if (t) { const d = $("#desc"); d.value = (d.value ? d.value + " " : "") + t; }
};
window.describir = () => { const t = $("#desc").value.trim(); if (!t) { toast("Escribe qué comiste"); return; } runAI({ text: t }, "describir"); };

/* ----- código de barras ----- */
let CAM = null;
function stopCam() { if (CAM) { CAM.stop = true; try { CAM.stream.getTracks().forEach(t => t.stop()); } catch (e) { } CAM = null; } }
async function addCodigo(B) {
  B.innerHTML = `<div class="cam" id="camv"><video id="vid" playsinline muted></video><div class="aim"></div></div>
   <div class="sm mut" id="camMsg">Apunta al código de barras del empaque.</div>
   <div class="row"><input class="in" id="codeIn" inputmode="numeric" placeholder="O escribe el número"><button class="btn" onclick="buscarCodigo($('#codeIn').value)">Buscar</button></div>`;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
    const v = $("#vid"); v.srcObject = stream; await v.play();
    CAM = { stream, stop: false };
    const det = "BarcodeDetector" in window ? new BarcodeDetector({ formats: ["ean_13", "ean_8", "upc_a", "upc_e", "code_128"] }) : null;
    const cv = document.createElement("canvas");
    const loop = async () => {
      if (!CAM || CAM.stop) return;
      let code = null;
      try {
        if (det) { const r = await det.detect(v); if (r.length) code = r[0].rawValue; }
        else if (NATIVE && v.videoWidth) {
          const s = 900 / Math.max(v.videoWidth, v.videoHeight); cv.width = v.videoWidth * s; cv.height = v.videoHeight * s;
          cv.getContext("2d").drawImage(v, 0, 0, cv.width, cv.height);
          code = await nativeCall("scanBarcode", cv.toDataURL("image/jpeg", 0.8).split(",")[1]);
        }
      } catch (e) { }
      if (code && CAM) { vib(); stopCam(); buscarCodigo(code); return; }
      setTimeout(loop, det ? 200 : 350);
    };
    loop();
  } catch (e) { $("#camMsg").textContent = "No se pudo abrir la cámara. Escribe el número del código."; $("#camv").style.display = "none"; }
}
window.buscarCodigo = async code => {
  code = String(code || "").replace(/\D/g, ""); if (code.length < 6) { toast("Código no válido"); return; }
  stopCam();
  const B = $("#addBody"); B.innerHTML = `<div class="card row"><div class="spin"></div><b>Buscando ${code}…</b></div>`;
  try {
    const r = await offLookup(code);
    if (r && r.local) { openFood("f:" + r.local); addMode("buscar"); return; }
    if (r && !r.incompleto) {
      const id = "p_" + code;
      const f = { id, n: r.nombre + (r.marca ? ` (${r.marca})` : ""), gr: "personal", kcal: r1(r.kcal), p: r1(r.p), c: r1(r.c), g: r1(r.g), f: r1(r.f), a: r1(r.a), na: r0(r.na), por: r.porcion ? [["porción del empaque", r.porcion]] : [["paquete", 100]], src: "personal", syn: "", raw: "", barcode: code, marca: r.marca };
      S.propios = S.propios.filter(x => x.id !== id); S.propios.push(f); S.barras[code] = id; save(); IDX = null;
      addMode("buscar"); openFood("f:" + id); return;
    }
    B.innerHTML = `<div class="card col"><b>No encontré el producto ${code}</b><p class="sm mut" style="margin:0">Crea el alimento con los datos de la tabla nutricional del empaque. Quedará guardado para la próxima vez.</p>
      <button class="btn" onclick="openNuevoAlimento('${esc(r && r.nombre || "").replace(/'/g, "")}','${code}')">Crear desde la etiqueta</button><button class="btn sec" onclick="addMode('codigo')">Escanear otro</button></div>`;
  } catch (e) {
    B.innerHTML = `<div class="card col"><b>Sin conexión</b><p class="sm mut" style="margin:0">Para buscar códigos se necesita internet.</p><button class="btn" onclick="openNuevoAlimento('','${code}')">Crear manualmente</button></div>`;
  }
};

/* ----- rápido ----- */
function addRapido(B) {
  B.innerHTML = `<div class="card col"><h3>Registro rápido</h3><p class="sm mut" style="margin:0">Para cuando sabes las calorías (por ejemplo, de una etiqueta o un restaurante).</p>
   <label class="f">Nombre<input class="in" id="rn" placeholder="Almuerzo ejecutivo"></label>
   <div class="grid2"><label class="f">Calorías<input class="in" id="rk" type="number" inputmode="decimal"></label><label class="f">Proteína (g)<input class="in" id="rp" type="number" inputmode="decimal"></label>
   <label class="f">Carbohidratos (g)<input class="in" id="rc" type="number" inputmode="decimal"></label><label class="f">Grasa (g)<input class="in" id="rg" type="number" inputmode="decimal"></label></div>
   <button class="btn" onclick="rapido()">Agregar</button></div>
   <button class="btn ghost" onclick="openNuevoAlimento('')">${ic("plus", "s")} Crear un alimento para reutilizar</button>
   <button class="btn ghost" onclick="openNuevaReceta()">${ic("book", "s")} Crear una receta propia</button>`;
}
window.rapido = () => {
  const k = +$("#rk").value; if (!k) { toast("Escribe las calorías"); return; }
  logCustom(ADD.k, ADD.meal, $("#rn").value.trim() || "Registro rápido", { kcal: k, p: +$("#rp").value || 0, c: +$("#rc").value || 0, g: +$("#rg").value || 0 }, { u: "rápido" });
  vib(); toast("Agregado"); closeSheet(ADD.o); render();
};
window.openNuevoAlimento = (nombre = "", code = "") => {
  const o = sheet("Nuevo alimento", `<p class="sm mut" style="margin:0">Escribe los valores <b>por 100 g</b> (o 100 ml) como aparecen en la tabla nutricional del empaque.</p>
   <label class="f">Nombre<input class="in" id="nn" value="${esc(nombre)}"></label>
   <div class="grid2"><label class="f">Calorías<input class="in" id="nk" type="number" inputmode="decimal"></label><label class="f">Proteína<input class="in" id="np" type="number" inputmode="decimal"></label>
   <label class="f">Carbohidratos<input class="in" id="nc" type="number" inputmode="decimal"></label><label class="f">Grasa<input class="in" id="ng" type="number" inputmode="decimal"></label>
   <label class="f">Fibra<input class="in" id="nf" type="number" inputmode="decimal"></label><label class="f">Azúcares<input class="in" id="na" type="number" inputmode="decimal"></label>
   <label class="f">Sodio (mg)<input class="in" id="ns" type="number" inputmode="decimal"></label><label class="f">Porción (g)<input class="in" id="npor" type="number" inputmode="decimal" placeholder="opcional"></label></div>`,
    `<button class="btn full" id="ok">Guardar</button>`);
  $("#ok", o.sh).onclick = () => {
    const n = $("#nn", o.sh).value.trim(), k = +$("#nk", o.sh).value; if (!n || !k) { toast("Nombre y calorías son obligatorios"); return; }
    const id = code ? "p_" + code : "u_" + uid(), por = +$("#npor", o.sh).value;
    const f = { id, n, gr: "personal", kcal: k, p: +$("#np", o.sh).value || 0, c: +$("#nc", o.sh).value || 0, g: +$("#ng", o.sh).value || 0, f: +$("#nf", o.sh).value || 0, a: +$("#na", o.sh).value || 0, na: +$("#ns", o.sh).value || 0, por: por ? [["porción", por]] : [], src: "personal", syn: "", raw: "", barcode: code };
    S.propios = S.propios.filter(x => x.id !== id); S.propios.push(f); if (code) S.barras[code] = id; save(); IDX = null;
    o.close(); toast("Alimento creado"); if (ADD && ADD.o && SHEETS.includes(ADD.o)) { addMode("buscar"); openFood("f:" + id); }
  };
};
window.openNuevaReceta = () => {
  const R = { n: "", sv: 1, ing: [] };
  const o = sheet("Receta propia", `<label class="f">Nombre<input class="in" id="rnm" placeholder="Mi changua especial"></label>
    <label class="f">Porciones que rinde<input class="in" id="rsv" type="number" value="1" inputmode="numeric"></label>
    <div class="row between"><h3>Ingredientes</h3><button class="btn sm" id="ai">${ic("plus", "s")} Agregar</button></div><div id="ril" class="list"></div><div id="rtot" class="sm mut"></div>
    <label class="f">¿Para qué comidas?<div class="chips" id="rms">${[["d", "Desayuno"], ["a", "Almuerzo"], ["c", "Cena"], ["m", "Onces/media mañana"]].map(([v, l]) => `<button class="chip ${v === "a" ? "on" : ""}" data-v="${v}">${l}</button>`).join("")}</div></label>`,
    `<button class="btn full" id="ok">Guardar receta</button>`, { full: true });
  $$("#rms .chip", o.sh).forEach(c => c.onclick = () => c.classList.toggle("on"));
  const draw = () => {
    const t = zeroN(); let w = 0; R.ing.forEach(([ref, g]) => { addN(t, nutOf(ref, g)); w += g; });
    $("#ril", o.sh).innerHTML = R.ing.map(([ref, g], j) => `<div class="li"><div class="grow"><b>${esc(refInfo(ref).n)}</b><div class="xs mut">${fmt(g)} g · ${fmt(nutOf(ref, g).kcal)} kcal</div></div><button class="ibtn" data-d="${j}">${ic("trash", "s")}</button></div>`).join("") || `<div class="empty">Agrega los ingredientes con su peso</div>`;
    $$("[data-d]", o.sh).forEach(b => b.onclick = () => { R.ing.splice(+b.dataset.d, 1); draw(); });
    const sv = Math.max(1, +$("#rsv", o.sh).value || 1);
    $("#rtot", o.sh).textContent = R.ing.length ? `Por porción: ${fmt(t.kcal / sv)} kcal · P ${r0(t.p / sv)} · C ${r0(t.c / sv)} · G ${r0(t.g / sv)} · ${fmt(w / sv)} g` : "";
  };
  $("#rsv", o.sh).oninput = draw;
  $("#ai", o.sh).onclick = () => pickRef("", ref => openFood(ref, { onAdd: (r, g) => { R.ing.push([r, g]); draw(); } }));
  $("#ok", o.sh).onclick = () => {
    const n = $("#rnm", o.sh).value.trim(); if (!n || !R.ing.length) { toast("Ponle nombre y al menos un ingrediente"); return; }
    const sv = Math.max(1, +$("#rsv", o.sh).value || 1), t = zeroN(); let w = 0; const raw = {};
    R.ing.forEach(([ref, g]) => { addN(t, nutOf(ref, g)); w += g; raw[ref.slice(2)] = (raw[ref.slice(2)] || 0) + g / sv; });
    const per = {}; for (const x of NK) per[x] = r1(t[x] / sv);
    const m = $$("#rms .chip.on", o.sh).map(c => c.dataset.v).join("") || "a";
    S.recetasPropias.push({ id: "u_" + uid(), n, sv, m, reg: "Mi receta", t: "", min: 0, w: Math.round(w / sv), pasos: [], ing: R.ing.map(([ref, g]) => [ref.startsWith("r:") ? ref : ref.slice(2), g]), raw, per, propia: true });
    save(); IDX = null; o.close(); toast("Receta guardada");
  };
  draw();
};

/* ----- ejercicio ----- */
const MET = [["Caminar", 3.5], ["Caminar rápido", 4.5], ["Trotar", 7], ["Correr", 9.8], ["Bicicleta", 7.5], ["Bicicleta estática", 6], ["Natación", 6], ["Pesas / gimnasio", 5], ["Funcional / HIIT", 8], ["Baile / rumba", 5.5], ["Fútbol", 7], ["Yoga / estiramiento", 2.5], ["Subir escaleras", 8], ["Labores de la casa", 3.3]];
window.openEjercicio = () => {
  const d = day(SEL);
  const o = sheet("Ejercicio", `<div class="list">${(d.ej || []).map((e, j) => `<div class="li"><div class="grow"><b>${esc(e.n)}</b><div class="xs mut">${e.min} min</div></div><b>${fmt(e.kcal)} kcal</b><button class="ibtn" data-d="${j}">${ic("trash", "s")}</button></div>`).join("") || `<div class="sm mut">Aún no hay actividad este día.</div>`}</div>
    <label class="f">Actividad<select class="in" id="ea">${MET.map((m, j) => `<option value="${j}">${m[0]}</option>`).join("")}<option value="x">Otra (escribo las calorías)</option></select></label>
    <div class="grid2"><label class="f">Minutos<input class="in" id="em" type="number" inputmode="numeric" value="30"></label><label class="f">Calorías<input class="in" id="ek" type="number" inputmode="numeric"></label></div>
    <div class="sm mut">Cálculo: MET × ${r1(pesoActual())} kg × horas. ${S.aj.sumaEjercicio ? "Estas calorías se suman a tu meta del día." : "No se suman a tu meta (lo puedes cambiar en Perfil)."}</div>`,
    `<button class="btn full" id="ok">Agregar</button>`);
  const calc = () => { const a = $("#ea", o.sh).value; if (a === "x") return; $("#ek", o.sh).value = r0(MET[+a][1] * pesoActual() * (+$("#em", o.sh).value || 0) / 60); };
  $("#ea", o.sh).onchange = calc; $("#em", o.sh).oninput = calc; calc();
  $$("[data-d]", o.sh).forEach(b => b.onclick = () => { d.ej.splice(+b.dataset.d, 1); save(); o.close(); render(); openEjercicio(); });
  $("#ok", o.sh).onclick = () => { const a = $("#ea", o.sh).value, kc = +$("#ek", o.sh).value; if (!kc) return; d.ej = d.ej || []; d.ej.push({ n: a === "x" ? "Actividad" : MET[+a][0], min: +$("#em", o.sh).value || 0, kcal: kc }); save(); o.close(); render(); toast("Ejercicio agregado"); };
};

/* ----- ayuno ----- */
function fastStatus() {
  const st = S.ayuno.inicio; if (!st) return { on: false };
  const h = fastHours(), el = (Date.now() - st) / 3600e3, left = h - el;
  const hm = x => `${Math.floor(Math.abs(x))} h ${pad(Math.floor(Math.abs(x) * 60 % 60))} min`;
  return { on: true, pct: el / h, el, left, txt: left > 0 ? `Faltan ${hm(left)}` : `¡Meta cumplida! +${hm(-left)}`, hm };
}
let fastT = 0;
window.openAyuno = () => {
  const modos = ["12:12", "14:10", "16:8", "18:6", "20:4", "OMAD"];
  const o = sheet("Ayuno intermitente", `<div class="chips">${modos.map(m => `<button class="chip ${m === S.ayuno.modo ? "on" : ""}" data-m="${m}">${m === "OMAD" ? "Una comida (23:1)" : m}</button>`).join("")}</div>
    <div class="card col fastring" style="align-items:center" id="fbox"></div>
    <div class="sec-t"><h3>Historial</h3></div><div class="list" id="fh"></div>
    <p class="xs mut">El ayuno no es para todos. Si estás embarazada, tienes diabetes, antecedentes de trastornos de la alimentación o tomas medicamentos, consúltalo con tu médico.</p>`,
    "", { onClose: () => clearInterval(fastT) });
  const draw = () => {
    const f = fastStatus(), h = fastHours();
    $("#fbox", o.sh).innerHTML = f.on ? `<div class="ring" style="width:170px;height:170px">${ring(f.pct, f.left > 0 ? "var(--pri)" : "var(--carb)", 170, 14)}<div class="ctr"><div class="xs mut">Ayunando</div><div class="big">${f.hm(f.el).replace(" min", "m").replace(" h ", "h ")}</div><div class="xs mut">de ${h} h</div></div></div>
      <div class="b">${f.txt}</div><div class="sm mut">Empezó: ${new Date(S.ayuno.inicio).toLocaleString("es-CO", { weekday: "short", hour: "2-digit", minute: "2-digit" })} · Termina: ${new Date(S.ayuno.inicio + h * 3600e3).toLocaleString("es-CO", { weekday: "short", hour: "2-digit", minute: "2-digit" })}</div>
      <button class="btn full" id="fend">Terminar ayuno</button>`
      : `<div class="ring" style="width:170px;height:170px">${ring(0, "var(--pri)", 170, 14)}<div class="ctr"><div class="big">${h} h</div><div class="xs mut">de ayuno</div></div></div>
      <div class="sm mut">Te aviso con una notificación cuando termines.</div><button class="btn full" id="fstart">Empezar ahora</button>`;
    const s = $("#fstart", o.sh), e = $("#fend", o.sh);
    if (s) s.onclick = () => { S.ayuno.inicio = Date.now(); save(); pushNative(); draw(); render(); };
    if (e) e.onclick = () => { const f2 = fastStatus(); S.ayuno.hist.unshift({ ini: S.ayuno.inicio, fin: Date.now(), h: r1(f2.el), meta: h, ok: f2.left <= 0 }); S.ayuno.hist = S.ayuno.hist.slice(0, 60); S.ayuno.inicio = null; save(); pushNative(); draw(); render(); toast(f2.left <= 0 ? "¡Ayuno completado!" : "Ayuno terminado"); };
    $("#fh", o.sh).innerHTML = S.ayuno.hist.slice(0, 10).map(x => `<div class="li"><div class="grow"><b>${new Date(x.ini).toLocaleDateString("es-CO", { weekday: "short", day: "numeric", month: "short" })}</b><div class="xs mut">${x.h} h de ${x.meta} h</div></div>${x.ok ? '<span class="pill ok">cumplido</span>' : '<span class="pill">parcial</span>'}</div>`).join("") || `<div class="sm mut">Sin ayunos registrados.</div>`;
  };
  $$(".chip[data-m]", o.sh).forEach(c => c.onclick = () => { S.ayuno.modo = c.dataset.m; save(); $$(".chip[data-m]", o.sh).forEach(x => x.classList.toggle("on", x === c)); pushNative(); draw(); render(); });
  draw(); fastT = setInterval(draw, 30000);
};

/* ===================== PLAN ===================== */
function renderPlan() {
  const k = V.planDia, p = S.plan[k];
  let h = `<div class="top"><div><div class="mut sm">Plan de comidas</div><h1>${k === today() ? "Hoy" : DIAS_L[parseD(k).getDay()].replace(/^./, c => c.toUpperCase())}</h1></div>
    <button class="btn sm sec" onclick="openCompras()">${ic("cart", "s")} Mercado</button></div>
    <div class="chips">${Array.from({ length: 7 }, (_, i) => { const kk = addD(today(), i), d = parseD(kk); return `<button class="chip ${kk === k ? "on" : ""}" onclick="V.planDia='${kk}';renderPlan()">${i === 0 ? "Hoy" : DIAS[d.getDay()]} ${d.getDate()}</button>`; }).join("")}</div>`;
  if (!p) {
    h += `<div class="card col" style="text-align:center;padding:24px;align-items:center">${ic("cal")}<h2>Tu menú colombiano de la semana</h2>
      <p class="sm mut" style="margin:0">Plato arma 7 días de comidas típicas ajustadas a tus ${fmt(S.metas.kcal)} kcal y ${S.metas.p} g de proteína, con lista de mercado incluida.</p>
      <button class="btn full" onclick="genPlan()">${ic("spark", "s")} Crear mi plan</button>
      <button class="btn ghost full" onclick="openPrefs()">Preferencias y alimentos a evitar</button></div>`;
  } else {
    const t = planTotals(k), M = S.metas;
    h += `<div class="card"><div class="row between"><div><div class="xs mut">Total del plan</div><h2>${fmt(t.kcal)} kcal</h2></div><div class="kv"><span>P <b>${r0(t.p)}</b>/${M.p}</span><span>C <b>${r0(t.c)}</b>/${M.c}</span><span>G <b>${r0(t.g)}</b>/${M.g}</span></div></div></div>`;
    for (const m of mealList()) {
      const x = p.meals[m]; if (!x) continue;
      const done = (p.hecho || {})[m];
      const r = x.ref.startsWith("r:") ? recipeById(x.ref.slice(2)) : null;
      h += `<div class="card col" style="gap:10px"><div class="row between"><div class="row">${ic(MEAL_IC[m], "s")}<b>${MEALS[m]}</b>${x.lock ? ic("lock", "s") : ""}</div>${done ? '<span class="pill ok">comido</span>' : ""}</div>
        <div class="rcard" onclick="${r ? `openReceta('${r.id}',${x.f})` : `openFood('${x.ref}',{g:${x.g}})`}"><div class="rimg" style="background:${recColor(x.ref)}">${esc(planLabel(x)[0])}</div>
        <div class="grow"><div class="b">${esc(planLabel(x))}</div><div class="xs mut">${x.lbl ? "" : factorTxt(x.f) + " · "}${fmt(x.g)} g · ${r && r.min ? r.min + " min" : ""}</div>
        <div class="kv"><span><b>${fmt(x.n.kcal)}</b> kcal</span><span>P ${r0(x.n.p)}</span><span>C ${r0(x.n.c)}</span><span>G ${r0(x.n.g)}</span></div></div></div>
        <div class="row"><button class="btn sm sec grow" onclick="swapPlan('${k}','${m}')">${ic("swap", "s")} Cambiar</button><button class="btn sm sec grow" onclick="rerollPlan('${k}','${m}')">${ic("refresh", "s")} Otra</button>
        <button class="btn sm ${done ? "sec" : ""} grow" ${done ? "disabled" : ""} onclick="logPlan('${k}','${m}')">${ic("check", "s")} ${done ? "Listo" : "Comí"}</button></div></div>`;
    }
    h += `<div class="grid2"><button class="btn sec" onclick="regenDay('${k}')">${ic("refresh", "s")} Rehacer día</button><button class="btn sec" onclick="genPlan()">${ic("spark", "s")} Nueva semana</button></div>
      <button class="btn ghost" onclick="openPrefs()">Preferencias y alimentos a evitar</button>`;
  }
  $("#s-plan").innerHTML = h;
}
function recColor(ref) { const cs = ["#2F7A57", "#C98A2B", "#B8473A", "#3C7FB0", "#8B5FBF", "#A86B3C", "#E07A3A"]; let s = 0; for (const c of ref) s = (s * 31 + c.charCodeAt(0)) >>> 0; return cs[s % cs.length]; }
window.genPlan = () => { genWeek(today(), 7); S.compras.hechos = {}; save(); V.planDia = today(); renderPlan(); toast("Plan semanal listo"); if (TAB === "hoy") renderHoy(); };
window.regenDay = k => { const keep = {}; const p = S.plan[k]; if (p) for (const [m, x] of Object.entries(p.meals)) if (x && x.lock) keep[m] = x; S.plan[k] = { meals: genDay(k, Date.now() & 0x7fffffff, keep), hecho: (p || {}).hecho || {} }; save(); renderPlan(); };
window.rerollPlan = (k, m) => {
  const p = S.plan[k], keep = {}; for (const [mm, x] of Object.entries(p.meals)) if (mm !== m && x) keep[mm] = x;
  const old = p.meals[m] && p.meals[m].ref; let nw = null;
  for (let i = 0; i < 6; i++) { nw = genDay(k, (Date.now() + i * 104729) & 0x7fffffff, keep)[m]; if (!nw || nw.ref !== old) break; }
  p.meals[m] = nw; save(); renderPlan();
};
window.swapPlan = (k, m) => {
  const p = S.plan[k], cur = p.meals[m], target = cur ? cur.n.kcal : S.metas.kcal * mealShares()[m];
  const cs = candidates(MEAL_SLOT[m]).map(c => { const f = pickFactor(c, target); return { ...c, f, kc: c.per.kcal * f }; }).sort((a, b) => Math.abs(a.kc - target) - Math.abs(b.kc - target));
  const o = sheet(`Cambiar ${MEALS[m].toLowerCase()}`, `<div class="sm mut">Opciones ordenadas por cercanía a ${fmt(target)} kcal</div><div class="list">${cs.slice(0, 40).map((c, j) => `<div class="li" data-j="${j}"><div class="rimg" style="width:44px;height:44px;font-size:18px;background:${recColor(c.ref)}">${esc(c.n[0])}</div><div class="grow"><b>${esc(c.n)}</b><div class="xs mut">${c.simple ? "" : factorTxt(c.f) + " · "}${fmt(c.kc)} kcal · P ${r0(c.per.p * c.f)}</div></div></div>`).join("")}</div>
   <label class="row" style="justify-content:space-between"><span>Fijar esta comida al rehacer el día</span><button class="switch ${cur && cur.lock ? "on" : ""}" id="lk"></button></label>`, "", { full: true });
  $("#lk", o.sh).onclick = e => { if (!cur) return; cur.lock = !cur.lock; e.currentTarget.classList.toggle("on", cur.lock); save(); renderPlan(); };
  $$("[data-j]", o.sh).forEach(el => el.onclick = () => { const c = cs[+el.dataset.j]; p.meals[m] = { ref: c.ref, f: c.f, g: Math.round(c.w * c.f), n: scaleN(c.per, c.f), lbl: c.simple ? c.n : "", lock: cur && cur.lock }; save(); o.close(); renderPlan(); });
};
window.openPlanItem = (k, m) => { const x = S.plan[k].meals[m]; if (x.ref.startsWith("r:")) openReceta(x.ref.slice(2), x.f); else openFood(x.ref, { g: x.g }); };
window.openPrefs = () => {
  const P = S.perfil, ex = P.excluir || [];
  const opts = [["cerdo", "Sin cerdo"], ["pescado", "Sin pescado ni mariscos"], ["lacteos", "Sin lácteos"], ["huevo", "Sin huevo"], ["gluten", "Sin trigo / gluten"], ["mani", "Sin maní"]];
  const o = sheet("Preferencias del plan", `<label class="f">Tipo de alimentación<div class="seg" id="dt">${[["todo", "Como de todo"], ["veg", "Vegetariano"]].map(([v, l]) => `<button class="${(P.dieta || "todo") === v ? "on" : ""}" data-v="${v}">${l}</button>`).join("")}</div></label>
   <label class="f">Evitar</label><div class="col">${opts.map(([v, l]) => `<button class="opt ${ex.includes(v) ? "on" : ""}" data-x="${v}">${l}</button>`).join("")}</div>
   <label class="f">Comidas del día</label><div class="col">${Object.entries(MEALS).map(([v, l]) => `<button class="opt ${mealList().includes(v) ? "on" : ""}" data-ml="${v}">${l}</button>`).join("")}</div>`,
    `<button class="btn full" id="ok">Guardar y rehacer plan</button>`);
  $$("#dt button", o.sh).forEach(b => b.onclick = () => $$("#dt button", o.sh).forEach(x => x.classList.toggle("on", x === b)));
  $$("[data-x],[data-ml]", o.sh).forEach(b => b.onclick = () => b.classList.toggle("on"));
  $("#ok", o.sh).onclick = () => {
    P.dieta = $("#dt .on", o.sh).dataset.v; P.excluir = $$("[data-x].on", o.sh).map(b => b.dataset.x);
    const ml = Object.keys(MEALS).filter(m => $(`[data-ml=${m}]`, o.sh).classList.contains("on")); if (ml.length < 2) { toast("Elige al menos 2 comidas"); return; }
    P.comidas = ml; save(); o.close(); genPlan();
  };
};
window.openCompras = () => {
  if (!Object.keys(S.plan).some(k => k >= today())) { toast("Primero crea tu plan"); return; }
  const from = today(), n = S.compras.dias || 7;
  const G = shoppingList(from, n);
  const order = ["carnes", "pescados", "huevos", "lacteos", "verduras", "frutas", "tuberculos", "cereales", "leguminosas", "grasas", "azucares", "bebidas", "condimentos", "snacks", "platos", "personal"];
  let h = `<div class="seg" id="cd">${[3, 5, 7].map(d => `<button class="${d === n ? "on" : ""}" data-d="${d}">${d} días</button>`).join("")}</div><div class="sm mut">Cantidades en crudo calculadas desde las recetas de tu plan.</div>`;
  for (const g of order) {
    if (!G[g]) continue;
    h += `<div class="sec-t"><h3>${GRUPOS[g][0]}</h3></div><div class="list">` + G[g].sort((a, b) => a.n.localeCompare(b.n)).map(x => { const on = S.compras.hechos[x.id]; return `<div class="li" data-c="${x.id}"><span class="chk ${on ? "on" : ""}">${on ? ic("check", "s") : ""}</span><div class="grow" style="${on ? "text-decoration:line-through;opacity:.55" : ""}"><b>${esc(x.n)}</b></div><span class="sm">${x.txt}</span></div>`; }).join("") + "</div>";
  }
  const o = sheet("Lista de mercado", h, `<button class="btn sec" id="cl">Desmarcar</button><button class="btn grow" id="sh">${ic("up", "s")} Compartir</button>`, { full: true });
  $$("#cd button", o.sh).forEach(b => b.onclick = () => { S.compras.dias = +b.dataset.d; save(); o.close(); openCompras(); });
  $$("[data-c]", o.sh).forEach(el => el.onclick = () => { const id = el.dataset.c; S.compras.hechos[id] = !S.compras.hechos[id]; save(); o.close(); openCompras(); });
  $("#cl", o.sh).onclick = () => { S.compras.hechos = {}; save(); o.close(); openCompras(); };
  $("#sh", o.sh).onclick = () => {
    let t = `Lista de mercado (${n} días) — Plato\n`;
    for (const g of order) if (G[g]) { t += `\n${GRUPOS[g][0].toUpperCase()}\n`; G[g].forEach(x => { if (!S.compras.hechos[x.id]) t += `• ${x.n}: ${x.txt}\n`; }); }
    if (NATIVE) Android.shareText(t); else if (navigator.share) navigator.share({ text: t }); else { navigator.clipboard.writeText(t); toast("Copiada"); }
  };
};

/* ===================== RECETAS ===================== */
function renderRecetas() {
  const F = V.recFiltro;
  const all = [...Object.values(RECIPES).filter(r => r.m), ...S.recetasPropias];
  const filt = [["todas", "Todas"], ["d", "Desayunos"], ["a", "Almuerzos"], ["c", "Cenas"], ["m", "Onces"], ["prot", "Altas en proteína"], ["light", "Menos de 450 kcal"], ["bebida", "Bebidas"], ["fav", "Favoritas"], ["mias", "Mis recetas"]];
  let L = all.filter(r => {
    if (F === "todas") return r.t !== "bebida";
    if ("dacm".includes(F) && F.length === 1) return r.m.includes(F) && r.t !== "bebida";
    if (F === "prot") return r.per.p * 4 / Math.max(1, r.per.kcal) >= 0.28;
    if (F === "light") return r.per.kcal < 450 && r.t !== "bebida";
    if (F === "bebida") return r.t === "bebida";
    if (F === "fav") return S.favs.includes("r:" + r.id);
    if (F === "mias") return r.propia;
    return true;
  });
  if (V.recQ) { const q = norm(V.recQ); L = L.filter(r => norm(r.n + " " + r.reg).includes(q)); }
  let h = `<div class="top"><div><div class="mut sm">Cocina colombiana</div><h1>Recetas</h1></div><button class="btn sm sec" onclick="openNuevaReceta()">${ic("plus", "s")} Nueva</button></div>
   <div class="search">${ic("search")}<input id="rq" placeholder="Ajiaco, sancocho, arepa…" value="${esc(V.recQ)}"></div>
   <div class="chips">${filt.map(([v, l]) => `<button class="chip ${F === v ? "on" : ""}" onclick="V.recFiltro='${v}';renderRecetas()">${l}</button>`).join("")}</div>
   <div class="sm mut">${L.length} recetas · calorías por porción calculadas con sus ingredientes</div>`;
  h += L.map(r => `<div class="card tap rcard" onclick="openReceta('${r.id}')"><div class="rimg" style="background:${recColor("r:" + r.id)}">${esc(r.n[0])}</div>
    <div class="grow"><div class="b">${esc(r.n)}</div><div class="xs mut">${esc(r.reg || "")}${r.min ? " · " + r.min + " min" : ""}</div>
    <div class="kv"><span><b>${fmt(r.per.kcal)}</b> kcal</span><span>P ${r0(r.per.p)}</span><span>C ${r0(r.per.c)}</span><span>G ${r0(r.per.g)}</span></div></div></div>`).join("") || `<div class="empty">Sin recetas con ese filtro</div>`;
  $("#s-recetas").innerHTML = h;
  const q = $("#rq"); q.oninput = () => { V.recQ = q.value; const pos = q.selectionStart; renderRecetas(); const q2 = $("#rq"); q2.focus(); q2.setSelectionRange(pos, pos); };
}
window.openReceta = (id, f = 1) => {
  const r = recipeById(id); if (!r) return;
  let fac = f, sv = r.sv;
  const fav = S.favs.includes("r:" + id);
  const o = sheet(esc(r.n), `<div class="row"><div class="rimg" style="background:${recColor("r:" + id)}">${esc(r.n[0])}</div><div class="grow"><div class="sm mut">${esc(r.reg || "")}${r.min ? " · " + r.min + " min" : ""}</div><div class="sm">Rinde ${r.sv} ${r.sv > 1 ? "porciones" : "porción"} de ${fmt(r.w)} g</div></div></div>
    <div class="nut" id="rn"></div>
    <div class="row between"><span class="b">Porciones que vas a comer</span><div class="stepper"><button id="fm">−</button><b id="fv" style="min-width:64px;text-align:center"></b><button id="fp">+</button></div></div>
    <div class="sec-t"><h3>Ingredientes</h3><div class="row"><span class="sm mut">para</span><select class="in" id="svs" style="height:34px;width:auto;padding:0 6px">${[1, 2, 3, 4, 5, 6, 8, 10].map(n => `<option ${n === sv ? "selected" : ""}>${n}</option>`).join("")}</select><span class="sm mut">porc.</span></div></div>
    <div class="list" id="ri"></div>
    ${r.pasos && r.pasos.length ? `<div class="sec-t"><h3>Preparación</h3></div><ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px">${r.pasos.map(p => `<li>${esc(p)}</li>`).join("")}</ol>` : ""}
    <table class="tbl" id="rt"></table>
    ${r.propia ? `<button class="btn ghost" id="del">${ic("trash", "s")} Eliminar receta</button>` : ""}`,
    `<button class="ibtn" id="fav" style="width:48px;height:48px;color:${fav ? "var(--carb)" : "inherit"}">${ic("star")}</button><button class="btn grow" id="add">Agregar a ${MEALS[ADD && SHEETS.includes(ADD.o) ? ADD.meal : guessMeal()]}</button>`);
  const draw = () => {
    const n = scaleN(r.per, fac);
    $("#rn", o.sh).innerHTML = `<div><b>${fmt(n.kcal)}</b><span>kcal</span></div><div><b style="color:var(--prot)">${r0(n.p)}</b><span>proteína</span></div><div><b style="color:var(--carb)">${r0(n.c)}</b><span>carbos</span></div><div><b style="color:var(--fat)">${r0(n.g)}</b><span>grasa</span></div>`;
    $("#fv", o.sh).textContent = factorTxt(fac).replace(" porciones", "").replace(" porción", "").replace("de ", "");
    $("#rt", o.sh).innerHTML = `<tr><td>Fibra</td><td>${r1(n.f)} g</td></tr><tr><td>Sodio</td><td>${fmt(n.na)} mg</td></tr><tr><td>Peso servido</td><td>${fmt(r.w * fac)} g</td></tr>`;
    const k = sv / r.sv;
    $("#ri", o.sh).innerHTML = r.ing.filter(([iid]) => iid !== "agua").map(([iid, g]) => {
      const isR = iid.startsWith("r:"), info = isR ? recipeById(iid.slice(2)) : foodById(iid); if (!info) return "";
      const gg = g * k;
      return `<div class="li" ${isR ? `onclick="openReceta('${iid.slice(2)}')"` : ""}><div class="grow"><b>${esc(info.n)}</b>${isR ? '<div class="xs mut">ver preparación</div>' : ""}</div><span class="sm">${isR ? fmt(gg) + " g" : qtyTxt(info, gg)}</span></div>`;
    }).join("");
  };
  $("#fm", o.sh).onclick = () => { fac = Math.max(0.25, fac - 0.25); draw(); };
  $("#fp", o.sh).onclick = () => { fac = Math.min(4, fac + 0.25); draw(); };
  $("#svs", o.sh).onchange = e => { sv = +e.target.value; draw(); };
  $("#fav", o.sh).onclick = e => { const ref = "r:" + id, f2 = S.favs.includes(ref); S.favs = f2 ? S.favs.filter(x => x !== ref) : [ref, ...S.favs]; save(); e.currentTarget.style.color = f2 ? "inherit" : "var(--carb)"; };
  $("#add", o.sh).onclick = () => { const k = ADD && SHEETS.includes(ADD.o) ? ADD.k : SEL, meal = ADD && SHEETS.includes(ADD.o) ? ADD.meal : guessMeal(); logItem(k, meal, "r:" + id, r.w * fac, factorTxt(fac)); vib(); o.close(); toast(`Agregado a ${MEALS[meal]}`); render(); };
  const del = $("#del", o.sh); if (del) del.onclick = () => { S.recetasPropias = S.recetasPropias.filter(x => x.id !== id); save(); IDX = null; o.close(); render(); };
  draw();
};

/* ===================== PROGRESO ===================== */
function lineChart(pts, opts = {}) {
  if (pts.length < 1) return `<div class="empty">Sin datos todavía</div>`;
  const W = 340, H = 160, P = 28, xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  let y0 = Math.min(...ys, opts.goal ?? Infinity), y1 = Math.max(...ys, opts.goal ?? -Infinity); if (y1 - y0 < 2) { y0 -= 1; y1 += 1; }
  const pad_ = (y1 - y0) * 0.15; y0 -= pad_; y1 += pad_;
  const x0 = Math.min(...xs), x1 = Math.max(...xs, x0 + 1);
  const X = x => P + (x - x0) / (x1 - x0) * (W - P - 8), Y = y => 8 + (1 - (y - y0) / (y1 - y0)) * (H - 30);
  const path = pts.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join("");
  let g = "";
  for (let i = 0; i <= 3; i++) { const v = y0 + (y1 - y0) * i / 3; g += `<line x1="${P}" x2="${W - 8}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="2" y="${Y(v) + 4}" font-size="10" fill="var(--mut)">${r1(v)}</text>`; }
  if (opts.goal != null) g += `<line x1="${P}" x2="${W - 8}" y1="${Y(opts.goal)}" y2="${Y(opts.goal)}" stroke="var(--pri)" stroke-dasharray="4 4"/>`;
  return `<svg class="chart" viewBox="0 0 ${W} ${H}">${g}<path d="${path}" fill="none" stroke="var(--pri)" stroke-width="2.5" stroke-linejoin="round"/>${pts.map(p => `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3" fill="var(--pri)"/>`).join("")}
    <text x="${P}" y="${H - 4}" font-size="10" fill="var(--mut)">${opts.l0 || ""}</text><text x="${W - 8}" y="${H - 4}" font-size="10" fill="var(--mut)" text-anchor="end">${opts.l1 || ""}</text></svg>`;
}
function barChart(vals, goal, labels) {
  const W = 340, H = 150, n = vals.length, bw = (W - 20) / n, mx = Math.max(goal * 1.2, ...vals, 1);
  const Y = v => 10 + (1 - v / mx) * (H - 34);
  return `<svg class="chart" viewBox="0 0 ${W} ${H}"><line x1="10" x2="${W - 10}" y1="${Y(goal)}" y2="${Y(goal)}" stroke="var(--pri)" stroke-dasharray="4 4"/>
   ${vals.map((v, i) => `<rect x="${10 + i * bw + bw * 0.18}" y="${Y(v)}" width="${bw * 0.64}" height="${Math.max(0, H - 24 - Y(v))}" rx="5" fill="${v > goal * 1.08 ? "var(--prot)" : v ? "var(--pri)" : "var(--line)"}"/><text x="${10 + i * bw + bw / 2}" y="${H - 8}" font-size="10" text-anchor="middle" fill="var(--mut)">${labels[i]}</text>`).join("")}</svg>`;
}
function renderProgreso() {
  const P = S.perfil, M = S.metas, pa = pesoActual(), alt = +P.altura, imc = imcOf(pa, alt);
  const p0 = S.pesos.length ? S.pesos[0].kg : +P.peso, diff = pa - p0;
  const rng = V.progRango, since = addD(today(), -rng);
  const pts = S.pesos.filter(x => x.d >= since).map(x => [parseD(x.d).getTime() / 864e5, x.kg]);
  const last7 = Array.from({ length: 7 }, (_, i) => addD(today(), i - 6));
  const kc = last7.map(k => r0(dayTotals(k).kcal));
  const logged = last7.filter(k => dayPeek(k).items.length);
  const avg = logged.length ? logged.reduce((s, k) => s + dayTotals(k).kcal, 0) / logged.length : 0;
  const avgP = logged.length ? logged.reduce((s, k) => s + dayTotals(k).p, 0) / logged.length : 0;
  // racha
  let racha = 0; for (let k = today(); dayPeek(k).items.length; k = addD(k, -1)) racha++;
  if (!racha && dayPeek(addD(today(), -1)).items.length) for (let k = addD(today(), -1); dayPeek(k).items.length; k = addD(k, -1)) racha++;
  // proyección
  let proy = "";
  if (P.pesoMeta && P.objetivo !== "mantener") {
    const falta = Math.abs(pa - P.pesoMeta), sem = falta / (+P.ritmo || 0.5);
    const d = new Date(); d.setDate(d.getDate() + Math.round(sem * 7));
    proy = falta < 0.3 ? "¡Llegaste a tu meta!" : `A tu ritmo llegarías a ${P.pesoMeta} kg cerca del ${d.getDate()} de ${MESES[d.getMonth()]} ${d.getFullYear()}`;
  }
  let h = `<div class="top"><div><div class="mut sm">Tu evolución</div><h1>Progreso</h1></div><button class="btn sm" onclick="openPeso()">${ic("scale", "s")} Peso</button></div>
   <div class="card hero"><div class="row between"><div><div class="xs mut">Peso actual</div><div class="big-num">${r1(pa)}<span style="font-size:18px"> kg</span></div></div>
     <div style="text-align:right"><div class="xs mut">Desde el inicio</div><div class="b" style="font-size:20px">${diff > 0 ? "+" : ""}${r1(diff)} kg</div>${P.pesoMeta ? `<div class="xs mut">Meta: ${P.pesoMeta} kg</div>` : ""}</div></div>
     ${proy ? `<div class="sm" style="margin-top:10px;color:var(--hero-mut)">${proy}</div>` : ""}</div>
   <div class="card"><div class="row between"><h3>Peso</h3><div class="seg" style="width:180px">${[30, 90, 365].map(d => `<button class="${rng === d ? "on" : ""}" onclick="V.progRango=${d};renderProgreso()">${d === 365 ? "1 año" : d + " d"}</button>`).join("")}</div></div>
     ${lineChart(pts, { goal: P.pesoMeta ? +P.pesoMeta : null, l0: pts.length ? new Date(pts[0][0] * 864e5).toLocaleDateString("es-CO", { day: "numeric", month: "short" }) : "", l1: "hoy" })}</div>
   <div class="card"><div class="row between"><h3>Calorías, últimos 7 días</h3><span class="sm mut">meta ${fmt(M.kcal)}</span></div>${barChart(kc, M.kcal, last7.map(k => DIAS[parseD(k).getDay()]))}
     <div class="kv"><span>Promedio <b>${fmt(avg)} kcal</b></span><span>Proteína <b>${r0(avgP)} g</b></span><span>Días registrados <b>${logged.length}/7</b></span></div></div>
   <div class="grid3"><div class="card" style="text-align:center"><div class="xs mut">Racha</div><b style="font-size:22px">${racha}</b><div class="xs mut">días</div></div>
     <div class="card" style="text-align:center"><div class="xs mut">IMC</div><b style="font-size:22px">${r1(imc)}</b><div class="xs mut">${imcTxt(imc)}</div></div>
     <div class="card" style="text-align:center"><div class="xs mut">Gasto diario</div><b style="font-size:22px">${fmt(M.tdee)}</b><div class="xs mut">kcal</div></div></div>
   <div class="card"><div class="row between"><h3>Medidas</h3><button class="link" onclick="openMedidas()">Registrar</button></div>
     ${S.medidas.length ? (() => { const a = S.medidas[S.medidas.length - 1], b = S.medidas[0]; const f = (k, l) => a[k] ? `<span>${l} <b>${a[k]} cm</b>${b !== a && b[k] ? ` (${a[k] - b[k] > 0 ? "+" : ""}${r1(a[k] - b[k])})` : ""}</span>` : ""; return `<div class="kv" style="margin-top:6px">${f("cintura", "Cintura")}${f("cadera", "Cadera")}${f("pecho", "Pecho")}${f("brazo", "Brazo")}${f("muslo", "Muslo")}</div>`; })() : `<div class="sm mut">Medir cintura y cadera cada 2 semanas muestra cambios que la báscula no ve.</div>`}</div>
   <div class="card"><h3>Historial de peso</h3><div class="list">${S.pesos.slice(-8).reverse().map(x => `<div class="li"><div class="grow">${fdate(x.d)}</div><b>${x.kg} kg</b><button class="ibtn" onclick="delPeso('${x.d}')">${ic("trash", "s")}</button></div>`).join("") || `<div class="sm mut">Registra tu peso una vez por semana, en ayunas.</div>`}</div></div>`;
  $("#s-progreso").innerHTML = h;
}
window.openPeso = () => {
  const o = sheet("Registrar peso", `<label class="f">Fecha<input class="in" id="pd" type="date" value="${today()}" max="${today()}"></label>
   <label class="f">Peso (kg)<input class="in" id="pk" type="number" inputmode="decimal" step="0.1" value="${r1(pesoActual())}"></label>
   <div class="sm mut">Si cambia tu peso, tus metas de calorías se recalculan solas (a menos que las hayas puesto a mano).</div>`, `<button class="btn full" id="ok">Guardar</button>`);
  $("#ok", o.sh).onclick = () => {
    const d = $("#pd", o.sh).value || today(), kg = +$("#pk", o.sh).value; if (!(kg > 25 && kg < 400)) { toast("Peso no válido"); return; }
    S.pesos = S.pesos.filter(x => x.d !== d); S.pesos.push({ d, kg: r1(kg) }); S.pesos.sort((a, b) => a.d.localeCompare(b.d));
    if (!S.metas.manual) { const p = { ...S.perfil, peso: pesoActual() }; S.metas = Object.assign(calcMetas(p), { manual: false }); }
    save(); o.close(); render(); toast("Peso guardado");
  };
};
window.delPeso = d => { S.pesos = S.pesos.filter(x => x.d !== d); save(); renderProgreso(); };
window.openMedidas = () => {
  const L = [["cintura", "Cintura"], ["cadera", "Cadera"], ["pecho", "Pecho"], ["brazo", "Brazo"], ["muslo", "Muslo"]];
  const last = S.medidas[S.medidas.length - 1] || {};
  const o = sheet("Medidas (cm)", `<div class="grid2">${L.map(([k, l]) => `<label class="f">${l}<input class="in" id="m_${k}" type="number" inputmode="decimal" step="0.5" value="${last[k] || ""}"></label>`).join("")}</div>`, `<button class="btn full" id="ok">Guardar</button>`);
  $("#ok", o.sh).onclick = () => { const m = { d: today() }; L.forEach(([k]) => { const v = +$("#m_" + k, o.sh).value; if (v) m[k] = v; }); S.medidas = S.medidas.filter(x => x.d !== m.d); S.medidas.push(m); save(); o.close(); renderProgreso(); };
};

/* ===================== PERFIL / AJUSTES ===================== */
function renderPerfil() {
  const P = S.perfil, M = S.metas;
  const act = { sed: "Sedentario", lig: "Ligera", mod: "Moderada", alt: "Alta", muy: "Muy alta" }[P.actividad];
  const obj = { bajar: "Bajar de peso", mantener: "Mantener", subir: "Ganar masa" }[P.objetivo];
  const sw = (on, fn) => `<button class="switch ${on ? "on" : ""}" onclick="${fn}"></button>`;
  let h = `<div class="top"><div><div class="mut sm">Perfil</div><h1>${esc(P.nombre || "Tú")}</h1></div></div>
   <div class="card col"><div class="row between"><h3>Tus metas diarias</h3><button class="link" onclick="openMetas()">Editar</button></div>
     <div class="nut"><div><b>${fmt(M.kcal)}</b><span>kcal</span></div><div><b style="color:var(--prot)">${M.p}</b><span>proteína</span></div><div><b style="color:var(--carb)">${M.c}</b><span>carbos</span></div><div><b style="color:var(--fat)">${M.g}</b><span>grasa</span></div></div>
     <div class="sm mut">${obj}${P.objetivo !== "mantener" ? ` · ${P.ritmo} kg/semana` : ""} · Actividad ${act.toLowerCase()} · ${M.manual ? "metas personalizadas" : "calculado con Mifflin-St Jeor"}</div></div>
   <div class="card col"><div class="row between"><h3>Datos</h3><button class="link" onclick="startOnboarding(true)">Editar</button></div>
     <div class="kv"><span>Sexo <b>${P.sexo === "h" ? "Hombre" : "Mujer"}</b></span><span>Edad <b>${P.edad}</b></span><span>Estatura <b>${P.altura} cm</b></span><span>Peso <b>${r1(pesoActual())} kg</b></span>${P.pesoMeta ? `<span>Meta <b>${P.pesoMeta} kg</b></span>` : ""}</div></div>
   <div class="card col"><div class="row">${ic("spark")}<h3 class="grow">IA de Plato (Gemini)</h3>${S.aj.key ? '<span class="pill ok">activa</span>' : '<span class="pill">inactiva</span>'}</div>
     ${S.aj.key ? `<div class="sm mut">Modelo: ${esc(S.aj.modelo || (S.aj.modelos[0] || "automático"))}</div>
     <label class="f">Modelo<select class="in" id="mdl" onchange="S.aj.modelo=this.value;save()"><option value="">Automático (el mejor disponible)</option>${S.aj.modelos.map(m => `<option ${m === S.aj.modelo ? "selected" : ""}>${m}</option>`).join("")}</select></label>
     <div class="row"><button class="btn sm sec grow" onclick="refreshModels()">${ic("refresh", "s")} Actualizar modelos</button><button class="btn sm sec grow" onclick="S.aj.key='';S.aj.modelos=[];save();renderPerfil()">Quitar clave</button></div>`
      : `<div class="sm mut">Actívala para reconocer comidas por foto, describirlas con la voz y conversar con tu asistente de nutrición.</div><input class="in" id="kin2" placeholder="Pega tu clave de Google AI Studio"><div class="row"><button class="btn sm sec grow" onclick="openUrl('https://aistudio.google.com/apikey')">Obtener clave</button><button class="btn sm grow" onclick="saveKey($('#kin2').value).then(()=>renderPerfil())">Guardar</button></div>`}
   </div>
   <div class="card col"><h3>Recordatorios</h3>
     <div class="row between"><span>Comidas</span>${sw(S.rec.comidas, "S.rec.comidas=!S.rec.comidas;save();renderPerfil()")}</div>
     ${S.rec.comidas ? `<div class="grid2">${mealList().map(m => `<label class="f">${MEALS[m]}<input class="in" type="time" value="${S.rec.horas[m]}" onchange="S.rec.horas['${m}']=this.value;save()"></label>`).join("")}</div>` : ""}
     <div class="row between"><span>Tomar agua</span>${sw(S.rec.agua, "S.rec.agua=!S.rec.agua;save();renderPerfil()")}</div>
     ${S.rec.agua ? `<label class="f">Cada<select class="in" onchange="S.rec.aguaCada=+this.value;save()">${[60, 90, 120, 180].map(m => `<option value="${m}" ${+S.rec.aguaCada === m ? "selected" : ""}>${m / 60 >= 1 ? (m / 60) + " h" : m + " min"}${m === 90 ? " (1 h 30)" : ""}</option>`).join("")}</select></label>` : ""}
     <div class="row between"><span>Pesarme los lunes</span>${sw(S.rec.pesoSemanal, "S.rec.pesoSemanal=!S.rec.pesoSemanal;save();renderPerfil()")}</div>
     ${NATIVE ? `<button class="btn sm sec" onclick="Android.testNotification()">${ic("bell", "s")} Probar notificación</button><div id="perm" class="col"></div>` : ""}</div>
   <div class="card col"><h3>Preferencias</h3>
     <div class="row between"><span>Sumar ejercicio a mi meta</span>${sw(S.aj.sumaEjercicio, "S.aj.sumaEjercicio=!S.aj.sumaEjercicio;save();renderPerfil()")}</div>
     <label class="f">Tema<div class="seg">${[["auto", "Automático"], ["light", "Claro"], ["dark", "Oscuro"]].map(([v, l]) => `<button class="${S.aj.tema === v ? "on" : ""}" onclick="S.aj.tema='${v}';save();applyTheme();renderPerfil()">${l}</button>`).join("")}</div></label>
     <button class="btn sm sec" onclick="openPrefs()">Plan: alimentos a evitar y comidas del día</button></div>
   <div class="card col"><h3>Mis datos</h3><div class="sm mut">Todo se guarda en tu celular. Haz una copia de vez en cuando.</div>
     <div class="row"><button class="btn sm sec grow" onclick="exportar()">${ic("dl", "s")} Copia de seguridad</button><button class="btn sm sec grow" onclick="importar()">${ic("up", "s")} Restaurar</button></div>
     <div class="row"><button class="btn sm ghost grow" onclick="openMisAlimentos()">Mis alimentos (${S.propios.length})</button></div></div>
   <div class="card col"><h3>Sobre los datos</h3><p class="sm mut" style="margin:0">Composición de alimentos: Tabla de Composición de Alimentos Colombianos (ICBF, 2015) y “Caracterización y composición nutricional de 18 preparaciones tradicionales” (ICBF, 2017); alimentos genéricos: USDA FoodData Central. Productos empacados: Open Food Facts. Las recetas se calculan sumando sus ingredientes. Plato no reemplaza la orientación de un nutricionista o médico.</p>
     <div class="xs mut">Plato ${NATIVE ? (Android.version ? Android.version() : "") : "web"} · ${fmt(Object.keys(FOODS).length)} alimentos · ${Object.values(RECIPES).filter(r => r.m).length} recetas</div></div>`;
  $("#s-perfil").innerHTML = h;
  if (NATIVE) showPerms();
}
function showPerms() {
  try {
    const st = JSON.parse(Android.status()); const el = $("#perm"); if (!el) return;
    const items = [];
    if (!st.notif) items.push(["Permitir notificaciones", "notif"]);
    if (!st.exact) items.push(["Permitir alarmas exactas", "exact"]);
    if (!st.battery) items.push(["Quitar restricción de batería", "battery"]);
    el.innerHTML = items.length ? `<div class="xs mut">Para que los recordatorios lleguen a tiempo:</div>` + items.map(([l, k]) => `<button class="btn sm ghost" onclick="Android.requestPerm('${k}')">${l}</button>`).join("") : `<div class="xs mut">Recordatorios listos ✓</div>`;
  } catch (e) { }
}
window.refreshModels = async () => { try { S.aj.modelos = await gemModels(S.aj.key); save(); toast(`${S.aj.modelos.length} modelos disponibles`); renderPerfil(); } catch (e) { toast(e.message); } };
window.applyTheme = () => { const t = S.aj.tema; if (t === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", t); if (NATIVE) try { Android.setTheme(t); } catch (e) { } };
window.openMetas = () => {
  const M = S.metas;
  const o = sheet("Metas diarias", `<div class="sm mut">Calculado: ${fmt(calcMetas({ ...S.perfil, peso: pesoActual() }).kcal)} kcal. Puedes ajustarlas a mano, por ejemplo si tu nutricionista te dio otras.</div>
   <div class="grid2"><label class="f">Calorías<input class="in" id="mk" type="number" value="${M.kcal}"></label><label class="f">Proteína (g)<input class="in" id="mp" type="number" value="${M.p}"></label>
   <label class="f">Carbohidratos (g)<input class="in" id="mc" type="number" value="${M.c}"></label><label class="f">Grasa (g)<input class="in" id="mg" type="number" value="${M.g}"></label>
   <label class="f">Fibra (g)<input class="in" id="mf" type="number" value="${M.f}"></label><label class="f">Agua (ml)<input class="in" id="ma" type="number" step="250" value="${M.agua}"></label></div>
   <div class="sm mut" id="mchk"></div>`, `<button class="btn sec" id="rs">Recalcular</button><button class="btn grow" id="ok">Guardar</button>`);
  const chk = () => { const k = 4 * +$("#mp", o.sh).value + 4 * +$("#mc", o.sh).value + 9 * +$("#mg", o.sh).value; $("#mchk", o.sh).textContent = `Los macros suman ${fmt(k)} kcal${Math.abs(k - +$("#mk", o.sh).value) > 60 ? " — no coinciden con la meta de calorías" : ""}.`; };
  $$("input", o.sh).forEach(i => i.oninput = chk); chk();
  $("#rs", o.sh).onclick = () => { S.metas = calcMetas({ ...S.perfil, peso: pesoActual() }); save(); o.close(); render(); toast("Metas recalculadas"); };
  $("#ok", o.sh).onclick = () => { Object.assign(S.metas, { kcal: +$("#mk", o.sh).value, p: +$("#mp", o.sh).value, c: +$("#mc", o.sh).value, g: +$("#mg", o.sh).value, f: +$("#mf", o.sh).value, agua: +$("#ma", o.sh).value, manual: true }); save(); o.close(); render(); };
};
window.openMisAlimentos = () => {
  const o = sheet("Mis alimentos", `<div class="list">${S.propios.map(f => `<div class="li"><div class="grow"><b>${esc(f.n)}</b><div class="xs mut">${fmt(f.kcal)} kcal/100 g${f.barcode ? " · " + f.barcode : ""}</div></div><button class="ibtn" data-d="${f.id}">${ic("trash", "s")}</button></div>`).join("") || `<div class="empty">Aún no has creado alimentos.</div>`}</div>`, `<button class="btn full" id="nw">${ic("plus", "s")} Nuevo alimento</button>`);
  $$("[data-d]", o.sh).forEach(b => b.onclick = () => { const id = b.dataset.d; S.propios = S.propios.filter(x => x.id !== id); for (const c in S.barras) if (S.barras[c] === id) delete S.barras[c]; save(); IDX = null; o.close(); openMisAlimentos(); });
  $("#nw", o.sh).onclick = () => { o.close(); openNuevoAlimento(""); };
};
window.exportar = () => {
  const j = JSON.stringify(S), name = `plato-copia-${today()}.json`;
  if (NATIVE) { Android.saveText(name, j); toast("Guardada en Descargas"); }
  else { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([j], { type: "application/json" })); a.download = name; a.click(); }
};
window.importar = () => {
  const inp = document.createElement("input"); inp.type = "file"; inp.accept = "application/json,.json";
  inp.onchange = async () => { try { const s = JSON.parse(await inp.files[0].text()); if (!s.perfil) throw 0; localStorage.setItem("plato", JSON.stringify(s)); load(); IDX = null; save(); applyTheme(); go("hoy"); toast("Datos restaurados"); } catch (e) { toast("Archivo no válido"); } };
  inp.click();
};

/* ===================== ASISTENTE ===================== */
window.openChat = () => {
  if (!S.aj.key) { go("perfil"); toast("Activa la IA en tu perfil"); return; }
  const o = sheet("Asistente", `<div id="msgs" class="col" style="gap:8px"></div>`, `<input class="in grow" id="cin" placeholder="Pregunta sobre tu alimentación"><button class="btn" id="cs">${ic("right")}</button>`, { full: true, head: `<button class="ibtn" id="cclr">${ic("trash", "s")}</button>` });
  const draw = () => {
    const ms = S.aj.chat;
    $("#msgs", o.sh).innerHTML = (ms.length ? "" : `<div class="sm mut">Pregúntame cosas como: “¿Qué ceno si me quedan 500 kcal?”, “¿Cómo subo la proteína en el desayuno?” o “¿Es buena la aguapanela?”</div>
      <div class="chips" style="flex-wrap:wrap">${["¿Qué ceno con lo que me queda hoy?", "Ideas de desayuno con más proteína", "¿Cómo voy esta semana?"].map(q => `<button class="chip" data-q="${q}">${q}</button>`).join("")}</div>`) +
      ms.map(m => `<div class="msg ${m.r === "user" ? "me" : "ai"}">${esc(m.t)}</div>`).join("");
    $$("[data-q]", o.sh).forEach(b => b.onclick = () => send(b.dataset.q));
    const b = $(".sh-b", o.sh); b.scrollTop = b.scrollHeight;
  };
  const ctx = () => {
    const k = today(), t = dayTotals(k), M = S.metas, P = S.perfil;
    const items = dayPeek(k).items.map(i => `${MEALS[i.m]}: ${i.nm} (${r0(i.n.kcal)} kcal)`).join("; ") || "nada aún";
    const wk = Array.from({ length: 7 }, (_, i) => addD(k, i - 6)).map(d => `${d}: ${r0(dayTotals(d).kcal)} kcal, P ${r0(dayTotals(d).p)} g`).join("; ");
    return `Eres el asistente de nutrición de la app Plato, para una persona en Colombia. Responde en español colombiano, breve y práctico (máximo 8 líneas), con ejemplos de comida colombiana y cantidades caseras. No diagnostiques; ante temas médicos sugiere consultar a un profesional.
Perfil: ${P.sexo === "h" ? "hombre" : "mujer"}, ${P.edad} años, ${P.altura} cm, ${r1(pesoActual())} kg, objetivo ${P.objetivo}${P.pesoMeta ? " (meta " + P.pesoMeta + " kg)" : ""}. Metas: ${M.kcal} kcal, P ${M.p} g, C ${M.c} g, G ${M.g} g.
Hoy (${k}, ${new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}): ${r0(t.kcal)} kcal comidas, P ${r0(t.p)}, C ${r0(t.c)}, G ${r0(t.g)}; le quedan ${r0(goalKcal(k) - t.kcal)} kcal. Registros: ${items}.
Últimos 7 días: ${wk}.`;
  };
  const send = async q => {
    q = (q || $("#cin", o.sh).value).trim(); if (!q) return; $("#cin", o.sh).value = "";
    S.aj.chat.push({ r: "user", t: q }); draw();
    $("#msgs", o.sh).insertAdjacentHTML("beforeend", `<div class="msg ai" id="typing"><div class="spin"></div></div>`);
    try {
      const hist = S.aj.chat.slice(-11, -1).map(m => ({ role: m.r === "user" ? "user" : "model", parts: [{ text: m.t }] }));
      const r = await gemCall([{ text: q }], { system: ctx(), history: hist, temp: 0.6 });
      S.aj.chat.push({ r: "ai", t: r.text.replace(/\*\*/g, "").trim() });
    } catch (e) { S.aj.chat.push({ r: "ai", t: "No pude responder: " + (/quota|429/i.test(e.message) ? "se acabó la cuota gratuita por ahora." : e.message) }); }
    S.aj.chat = S.aj.chat.slice(-30); save(); draw();
  };
  $("#cs", o.sh).onclick = () => send(); $("#cin", o.sh).onkeydown = e => { if (e.key === "Enter") send(); };
  $("#cclr", o.sh).onclick = () => { S.aj.chat = []; save(); draw(); };
  draw();
};

/* ===================== BIENVENIDA ===================== */
let OB = null;
window.startOnboarding = (edit = false) => {
  const P = S.perfil || {};
  OB = { step: 0, edit, d: { nombre: P.nombre || "", sexo: P.sexo || "", edad: P.edad || "", altura: P.altura || "", peso: edit ? r1(pesoActual()) : (P.peso || ""), actividad: P.actividad || "", objetivo: P.objetivo || "", ritmo: P.ritmo || 0.5, pesoMeta: P.pesoMeta || "", comidas: P.comidas || ["desayuno", "almuerzo", "onces", "cena"], dieta: P.dieta || "todo", excluir: P.excluir || [] } };
  $("#app").style.display = "none"; $("nav.tabs").style.display = "none"; $("#ob").style.display = "";
  obRender();
};
function obRender() {
  const d = OB.d, st = OB.step, N = 6;
  const opt = (k, v, t, s = "") => `<button class="opt ${d[k] === v ? "on" : ""}" onclick="OB.d['${k}']='${v}';obRender()"><div class="grow"><b>${t}</b>${s ? `<div class="sm mut">${s}</div>` : ""}</div></button>`;
  let body = "", ok = true;
  if (st === 0) { body = `<div class="big-num" style="font-size:40px">Plato</div><p class="mut" style="margin:0">Cuenta calorías y arma tu menú con comida colombiana de verdad: ajiaco, arepas, fríjoles, sancocho… con los valores de la tabla del ICBF.</p>
     <label class="f">¿Cómo te llamas?<input class="in" id="o_n" value="${esc(d.nombre)}" placeholder="Tu nombre"></label>`; }
  if (st === 1) { body = `<h2>Sobre ti</h2><label class="f">Sexo biológico</label><div class="grid2">${opt("sexo", "m", "Mujer")}${opt("sexo", "h", "Hombre")}</div>
     <div class="grid3"><label class="f">Edad<input class="in" id="o_e" type="number" inputmode="numeric" value="${d.edad}"></label><label class="f">Estatura (cm)<input class="in" id="o_a" type="number" inputmode="numeric" value="${d.altura}"></label><label class="f">Peso (kg)<input class="in" id="o_p" type="number" inputmode="decimal" step="0.1" value="${d.peso}"></label></div>
     <p class="xs mut" style="margin:0">Se usan para calcular tu gasto de energía (fórmula de Mifflin-St Jeor).</p>`; ok = !!d.sexo; }
  if (st === 2) { body = `<h2>¿Qué tan activo eres?</h2>${opt("actividad", "sed", "Sedentario", "Trabajo de escritorio, casi no hago ejercicio")}${opt("actividad", "lig", "Ligera", "Camino a diario o entreno 1–3 días por semana")}${opt("actividad", "mod", "Moderada", "Entreno 3–5 días por semana")}${opt("actividad", "alt", "Alta", "Entreno fuerte 6–7 días o trabajo físico")}${opt("actividad", "muy", "Muy alta", "Atleta o trabajo físico pesado y entreno")}`; ok = !!d.actividad; }
  if (st === 3) {
    body = `<h2>¿Cuál es tu objetivo?</h2>${opt("objetivo", "bajar", "Bajar de peso")}${opt("objetivo", "mantener", "Mantener mi peso")}${opt("objetivo", "subir", "Ganar masa muscular")}
     ${d.objetivo && d.objetivo !== "mantener" ? `<label class="f">Peso meta (kg)<input class="in" id="o_m" type="number" inputmode="decimal" step="0.1" value="${d.pesoMeta}"></label>
     <label class="f">Ritmo<div class="seg">${(d.objetivo === "bajar" ? [0.25, 0.5, 0.75, 1] : [0.25, 0.5]).map(r => `<button class="${+d.ritmo === r ? "on" : ""}" onclick="obSave();OB.d.ritmo=${r};obRender()">${String(r).replace(".", ",")} kg/sem</button>`).join("")}</div></label>
     <p class="xs mut" style="margin:0">${d.objetivo === "bajar" ? "0,5 kg por semana es un ritmo sostenible para la mayoría." : "Ganar 0,25 kg por semana limita la grasa ganada."}</p>` : ""}`;
    ok = !!d.objetivo;
  }
  if (st === 4) {
    const ex = d.excluir; const tg = v => `onclick="obSave();OB.d.excluir=OB.d.excluir.includes('${v}')?OB.d.excluir.filter(x=>x!=='${v}'):[...OB.d.excluir,'${v}'];obRender()"`;
    body = `<h2>Tus comidas</h2><label class="f">¿Qué comidas haces al día?</label><div class="chips" style="flex-wrap:wrap">${Object.entries(MEALS).map(([m, l]) => `<button class="chip ${d.comidas.includes(m) ? "on" : ""}" onclick="obSave();OB.d.comidas=OB.d.comidas.includes('${m}')?OB.d.comidas.filter(x=>x!=='${m}'):Object.keys(MEALS).filter(x=>OB.d.comidas.includes(x)||x==='${m}');obRender()">${l}</button>`).join("")}</div>
     <label class="f">Alimentación</label><div class="grid2">${opt("dieta", "todo", "Como de todo")}${opt("dieta", "veg", "Vegetariano")}</div>
     <label class="f">Evitar</label><div class="chips" style="flex-wrap:wrap">${[["cerdo", "Cerdo"], ["pescado", "Pescado"], ["lacteos", "Lácteos"], ["huevo", "Huevo"], ["gluten", "Trigo/gluten"], ["mani", "Maní"]].map(([v, l]) => `<button class="chip ${ex.includes(v) ? "on" : ""}" ${tg(v)}>${l}</button>`).join("")}</div>`;
    ok = d.comidas.length >= 2;
  }
  if (st === 5) {
    const p = { ...d }; const M = calcMetas(p);
    body = `<h2>Tu plan</h2><div class="card hero" style="text-align:center"><div class="xs mut">Meta diaria</div><div class="big-num">${fmt(M.kcal)}</div><div class="sm mut">kcal</div>
     <div class="macros"><div><b>${M.p} g</b><div class="xs mut">proteína</div></div><div><b>${M.c} g</b><div class="xs mut">carbohidratos</div></div><div><b>${M.g} g</b><div class="xs mut">grasa</div></div></div></div>
     <div class="kv"><span>Metabolismo basal <b>${fmt(M.bmr)}</b></span><span>Gasto diario <b>${fmt(M.tdee)}</b></span><span>Agua <b>${fmt(M.agua)} ml</b></span></div>
     ${M.kcal <= (d.sexo === "h" ? 1500 : 1200) ? `<p class="sm" style="color:var(--warn);margin:0">Ajusté tu meta al mínimo recomendado; un déficit mayor no es aconsejable sin acompañamiento profesional.</p>` : ""}
     <p class="xs mut" style="margin:0">Puedes cambiar estas metas cuando quieras en tu perfil.</p>`;
  }
  $("#ob").innerHTML = `<div class="prog"><i style="width:${(st + 1) / N * 100}%"></i></div><div class="body">${body}</div>
    <div class="row">${st > 0 ? `<button class="btn sec" onclick="obSave();OB.step--;obRender()">${ic("left")}</button>` : (OB.edit ? `<button class="btn sec" onclick="obCancel()">Cancelar</button>` : "")}<button class="btn grow" ${ok ? "" : "disabled"} onclick="obNext()">${st === N - 1 ? (OB.edit ? "Guardar" : "Empezar") : "Continuar"}</button></div>`;
}
window.obSave = () => {
  const v = id => { const el = $("#" + id); return el ? el.value : null; };
  if (v("o_n") != null) OB.d.nombre = v("o_n").trim();
  if (v("o_e") != null) { OB.d.edad = v("o_e"); OB.d.altura = v("o_a"); OB.d.peso = v("o_p"); }
  if (v("o_m") != null) OB.d.pesoMeta = v("o_m");
};
window.obCancel = () => { $("#ob").style.display = "none"; $("#app").style.display = ""; $("nav.tabs").style.display = ""; render(); };
window.obNext = () => {
  obSave(); const d = OB.d;
  if (OB.step === 1) { const e = +d.edad, a = +d.altura, p = +d.peso; if (!(e >= 13 && e <= 100)) return toast("Edad entre 13 y 100 años"); if (!(a >= 120 && a <= 230)) return toast("Estatura en centímetros (ej. 165)"); if (!(p >= 30 && p <= 300)) return toast("Peso en kg (ej. 68)"); }
  if (OB.step === 3 && d.objetivo !== "mantener") { const m = +d.pesoMeta; if (m && (d.objetivo === "bajar" ? m >= +d.peso : m <= +d.peso)) return toast(d.objetivo === "bajar" ? "La meta debe ser menor a tu peso" : "La meta debe ser mayor a tu peso"); }
  if (OB.step < 5) { OB.step++; obRender(); return; }
  const P = { nombre: d.nombre, sexo: d.sexo, edad: +d.edad, altura: +d.altura, peso: +d.peso, actividad: d.actividad, objetivo: d.objetivo, ritmo: +d.ritmo, pesoMeta: d.objetivo === "mantener" ? null : (+d.pesoMeta || null), comidas: Object.keys(MEALS).filter(m => d.comidas.includes(m)), dieta: d.dieta, excluir: d.excluir };
  const first = !S.perfil;
  S.perfil = P; S.metas = calcMetas(P);
  if (!S.pesos.length || S.pesos[S.pesos.length - 1].kg !== P.peso) { S.pesos = S.pesos.filter(x => x.d !== today()); S.pesos.push({ d: today(), kg: P.peso }); S.pesos.sort((a, b) => a.d.localeCompare(b.d)); }
  save();
  if (first) genWeek(today(), 7);
  $("#ob").style.display = "none"; $("#app").style.display = ""; $("nav.tabs").style.display = "";
  go(first ? "hoy" : "perfil");
  if (first) toast("¡Listo! Tu plan de esta semana ya está armado", 3000);
};

/* ===================== inicio ===================== */
function boot() {
  load(); applyTheme();
  $$("nav.tabs [data-t]").forEach(b => b.onclick = () => go(b.dataset.t));
  $("#fab").onclick = () => openAdd(TAB === "hoy" ? guessMeal() : guessMeal());
  if (!S.perfil) startOnboarding(false);
  else { go("hoy"); pushNative(); }
  setInterval(() => { if (TAB === "hoy" && !SHEETS.length && S.ayuno.inicio) renderHoy(); }, 60000);
}
document.addEventListener("DOMContentLoaded", boot);
