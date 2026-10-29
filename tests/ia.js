// Simula Gemini y Open Food Facts para probar foto, descripción y código de barras.
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  let calls = [];
  await ctx.route(/generativelanguage/, async r => {
    const u = r.request().url(); calls.push(u.replace(/key=[^&]+/, 'key=…'));
    if (u.includes('/models?')) return r.fulfill({ json: { models: [
      { name: 'models/gemini-3-flash', supportedGenerationMethods: ['generateContent'] },
      { name: 'models/gemini-3.1-flash-lite', supportedGenerationMethods: ['generateContent'] },
      { name: 'models/gemini-2.5-flash', supportedGenerationMethods: ['generateContent'] },
      { name: 'models/gemini-3-flash-image', supportedGenerationMethods: ['generateContent'] } ] } });
    if (u.includes('gemini-3-flash:')) return r.fulfill({ status: 429, json: { error: { message: 'RESOURCE_EXHAUSTED quota' } } });
    const body = JSON.parse(r.request().postData());
    const txt = body.contents.at(-1).parts.at(-1).text;
    if (body.systemInstruction) return r.fulfill({ json: { candidates: [{ content: { parts: [{ text: 'Te quedan unas 600 kcal: una arepa con pollo desmechado y ensalada.' }] } }] } });
    const out = { plato: 'Almuerzo corriente', nota: 'No se ve si el arroz tiene aceite', items: [
      { nombre: 'arroz blanco', ref: 'f:arroz_casero', gramos: 150, confianza: 0.9, kcal_estimadas: 230 },
      { nombre: 'fríjoles rojos', ref: null, gramos: 180, confianza: 0.8, kcal_estimadas: 240 },
      { nombre: 'carne asada', ref: 'f:carne_asada', gramos: 120, confianza: 0.7, kcal_estimadas: 260 },
      { nombre: 'tajada de maduro', ref: 'f:platano_maduro_frito', gramos: 70, confianza: 0.85, kcal_estimadas: 170 },
      { nombre: 'jugo de mora en agua', ref: null, gramos: 250, confianza: 0.4, kcal_estimadas: 110, proteina: 0.5, carbohidratos: 27, grasa: 0.2 } ] };
    if (!txt.includes('CATÁLOGO')) throw new Error('prompt sin catálogo');
    return r.fulfill({ json: { candidates: [{ content: { parts: [{ text: JSON.stringify(out) }] } }] } });
  });
  await ctx.route(/openfoodfacts/, r => r.fulfill({ json: { status: 1, product: { product_name: 'Galletas Festival', brands: 'Noel', serving_quantity: 32, serving_size: '32 g', nutriments: { 'energy-kcal_100g': 480, proteins_100g: 5, carbohydrates_100g: 70, fat_100g: 20, sugars_100g: 35, sodium_100g: 0.3 } } } }));
  await p.goto('file://' + path.resolve(__dirname, '../web/dist/index.html'));
  await p.evaluate(() => { localStorage.setItem('plato', JSON.stringify({ perfil: { nombre: 'E', sexo: 'h', edad: 29, altura: 172, peso: 82, actividad: 'mod', objetivo: 'bajar', ritmo: 0.5, pesoMeta: 74, comidas: ['desayuno', 'almuerzo', 'onces', 'cena'] }, metas: { kcal: 2170, p: 148, c: 242, g: 68, f: 30, agua: 2750, tdee: 2720, bmr: 1755 } })); });
  await p.reload();
  await p.evaluate(() => openAdd('almuerzo', 'foto'));
  await p.fill('#kin', 'AIzaPRUEBA'); await p.click('text=Guardar y probar'); await p.waitForTimeout(600);
  // simular foto
  await p.evaluate(async () => { const c = document.createElement('canvas'); c.width = 400; c.height = 300; const x = c.getContext('2d'); x.fillStyle = '#c84'; x.fillRect(0, 0, 400, 300); x.fillStyle = '#fff'; x.beginPath(); x.arc(200, 150, 120, 0, 7); x.fill(); const b64 = c.toDataURL('image/jpeg').split(',')[1]; await runAI({ image: b64, text: '' }, 'foto'); });
  await p.waitForTimeout(500); await p.screenshot({ path: '/tmp/shots/20_ia_foto.png' });
  await p.evaluate(() => window.scrollTo(0, 0)); await p.evaluate(() => { const b = document.querySelector('.sheet .sh-b'); b.scrollTop = 600; }); await p.screenshot({ path: '/tmp/shots/21_ia_foto2.png' });
  const res = await p.evaluate(() => ADD.ai.items.map(x => [x.nombre, x.ref, x.g, Math.round(aiNut(x).kcal), x.usarIA]));
  console.log(res);
  await p.evaluate(() => aiSave()); await p.waitForTimeout(400);
  console.log('registrados', await p.evaluate(() => S.diario[today()].items.map(i => `${i.nm} ${i.q}g ${Math.round(i.n.kcal)}kcal ${i.ia}`)));
  // código de barras
  await p.evaluate(() => openAdd('onces', 'buscar')); await p.waitForTimeout(400);
  await p.evaluate(() => buscarCodigo('7702025100136')); await p.waitForTimeout(600);
  await p.screenshot({ path: '/tmp/shots/22_codigo.png' });
  await p.evaluate(() => closeAll()); await p.waitForTimeout(300);
  // chat
  await p.evaluate(() => openChat()); await p.waitForTimeout(300); await p.fill('#cin', '¿Qué ceno?'); await p.click('#cs'); await p.waitForTimeout(600);
  await p.screenshot({ path: '/tmp/shots/23_chat.png' });
  console.log('modelos usados', calls.filter(c => c.includes(':generate')).map(c => c.split('/models/')[1].split(':')[0]));
  console.log(errs.length ? errs : 'SIN ERRORES'); await b.close();
})();
