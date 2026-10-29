// Prueba de la interfaz con Playwright (tamaño de celular). Uso: node tests/ui.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, colorScheme: process.env.DARK ? 'dark' : 'light' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  await p.goto('file://' + path.resolve(__dirname, '../web/dist/index.html'));
  const shot = async n => { await p.waitForTimeout(350); await p.screenshot({ path: `/tmp/shots/${n}.png` }); };
  const click = async s => { await p.click(s); await p.waitForTimeout(150); };
  await shot('01_bienvenida');
  await p.fill('#o_n', 'Emanuel'); await click('text=Continuar');
  await click('text=Hombre'); await p.fill('#o_e', '29'); await p.fill('#o_a', '172'); await p.fill('#o_p', '82'); await shot('02_datos'); await click('text=Continuar');
  await click('text=Moderada'); await click('text=Continuar');
  await click('text=Bajar de peso'); await p.fill('#o_m', '74'); await shot('03_objetivo'); await click('text=Continuar');
  await click('text=Continuar'); await shot('04_plan'); await click('text=Empezar');
  await shot('05_hoy');
  // registrar desde el plan
  await click('.planbox .chk');
  // buscar y agregar
  await click('#fab'); await p.fill('#q', 'arepa queso'); await shot('06_buscar');
  await click('#res .li'); await shot('07_detalle'); await click('#addb');
  await p.fill('#q', 'bandeja'); await click('#res .li'); await click('#addb');
  await click('[data-close]');
  await p.evaluate(() => agua(250)); await p.evaluate(() => agua(250));
  await shot('08_hoy_lleno');
  await p.evaluate(() => window.scrollTo(0, 2000)); await shot('09_hoy_abajo');
  await p.evaluate(() => window.scrollTo(0, 0));
  await click('nav [data-t=plan]'); await shot('10_plan');
  await p.evaluate(() => openCompras()); await shot('11_mercado'); await p.evaluate(() => closeAll());
  await click('nav [data-t=recetas]'); await shot('12_recetas');
  await p.evaluate(() => openReceta('ajiaco')); await shot('13_receta'); await p.evaluate(() => closeAll());
  await click('nav [data-t=progreso]'); await shot('14_progreso');
  await p.evaluate(() => go('perfil')); await shot('15_perfil');
  await p.evaluate(() => { go('hoy'); openAyuno(); }); await shot('16_ayuno'); await p.evaluate(() => closeAll());
  await p.evaluate(() => openAdd('almuerzo', 'foto')); await shot('17_foto_sin_clave'); await p.evaluate(() => closeAll());
  await p.evaluate(() => openAdd('almuerzo', 'rapido')); await shot('18_rapido'); await p.evaluate(() => closeAll());
  await p.evaluate(() => openEjercicio()); await shot('19_ejercicio'); await p.evaluate(() => closeAll());
  const st = await p.evaluate(() => ({ metas: S.metas, items: S.diario[today()].items.map(i => [i.nm, i.n.kcal]), planDias: Object.keys(S.plan).length, t: dayTotals(today()) }));
  console.log(JSON.stringify(st, null, 1));
  console.log(errs.length ? errs.join('\n') : 'SIN ERRORES');
  await b.close();
})();
