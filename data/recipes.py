# Recetas típicas colombianas y genéricas.
# ing: (id_alimento | "r:id_receta", gramos tal como se sirven) para TODA la receta (n porciones).
# comidas: d desayuno, a almuerzo, c cena, m merienda/onces. region: texto corto.
# pasos: preparación resumida.

R = []
def rec(id, nombre, n, comidas, region, ing, pasos, tags="", min=30):
    R.append(dict(id=id, nombre=nombre, n=n, comidas=comidas, region=region,
                  ing=ing, pasos=pasos, tags=tags, min=min))

# ---------- Bases ----------
rec("hogao", "Hogao", 6, "", "Nacional",
    [("tomate", 240), ("cebolla_larga", 90), ("aceite", 14), ("ajo", 3), ("sal", 2)],
    ["Pica finamente el tomate y la cebolla larga.",
     "Sofríe en el aceite a fuego medio con el ajo y la sal 12–15 minutos, hasta que esté espeso."],
    "base", 20)
rec("frijoles_antioquenos", "Fríjoles antioqueños", 6, "a", "Antioquia",
    [("frijol_cocido", 900), ("tocino", 40), ("platano_verde_cocido", 120), ("zanahoria_cocida", 60), ("r:hogao", 120), ("sal", 4)],
    ["Remoja los fríjoles desde la noche anterior.",
     "Cocínalos en olla a presión con el tocino 40 minutos.",
     "Agrega el plátano verde y la zanahoria picados y cocina 20 minutos más, sin presión.",
     "Sirve con hogao por encima."], "", 90)

# ---------- Desayunos ----------
rec("calentado", "Calentado paisa con huevo", 1, "d", "Antioquia",
    [("arroz_casero", 120), ("r:frijoles_antioquenos", 150), ("huevo_frito", 46), ("arepa_tela", 55), ("r:hogao", 20)],
    ["Calienta en sartén el arroz con los fríjoles del día anterior y el hogao, revolviendo.",
     "Sirve con un huevo frito y la arepa asada."], "", 15)
rec("pericos_arepa", "Huevos pericos con arepa", 1, "d", "Nacional",
    [("huevo", 100), ("tomate", 60), ("cebolla_larga", 20), ("aceite", 5), ("sal", 1), ("arepa_maiz", 80)],
    ["Sofríe el tomate y la cebolla picados en el aceite 3 minutos.",
     "Agrega los huevos batidos con sal y revuelve hasta que cuajen.",
     "Acompaña con la arepa asada."], "proteina", 12)
rec("pericos_arepa_queso", "Huevos pericos, arepa con queso y chocolate", 1, "d", "Nacional",
    [("huevo", 100), ("tomate", 60), ("cebolla_larga", 20), ("aceite", 5), ("sal", 1), ("arepa_maiz", 80), ("queso_campesino", 30), ("r:chocolate_leche", 240)],
    ["Prepara los huevos pericos.", "Asa la arepa y ponle el queso encima.", "Sirve con chocolate caliente."], "", 15)
rec("changua", "Changua", 2, "d", "Cundinamarca y Boyacá",
    [("leche_entera", 300), ("agua", 200), ("huevo", 100), ("cebolla_larga", 15), ("cilantro", 4), ("pan_frances", 40), ("sal", 2)],
    ["Hierve la leche con el agua, la sal y la cebolla larga picada.",
     "Baja el fuego y echa los huevos sin revolver; cocina 3 minutos.",
     "Sirve con cilantro picado y trozos de pan (calado) en el fondo del plato."], "", 15)
rec("caldo_costilla", "Caldo de costilla", 2, "d", "Cundinamarca",
    [("costilla_res", 160), ("papa_cocida", 300), ("caldo_pollo", 500), ("cebolla_larga", 20), ("cilantro", 5), ("ajo", 3), ("sal", 3)],
    ["Cocina la costilla con agua, cebolla larga, ajo y sal 40 minutos (o 20 en olla a presión).",
     "Agrega las papas en trozos y cocina hasta que ablanden.",
     "Sirve con cilantro picado y una arepa o pan si quieres."], "", 50)
rec("tamal", "Tamal tolimense con chocolate", 1, "d", "Tolima",
    [("platos_tamal", 550), ("r:chocolate_leche", 240)],
    ["Calienta el tamal en agua hirviendo 20 minutos dentro de sus hojas.", "Sirve con chocolate caliente y, si quieres, una arepa."], "", 25)
rec("avena_banano", "Avena en hojuelas con leche y banano", 1, "d", "Genérica",
    [("avena_hojuelas", 40), ("leche_semi", 240), ("banano", 118)],
    ["Cocina la avena con la leche 4 minutos, revolviendo.",
     "Sirve con el banano en rodajas y canela al gusto."], "fibra", 8)
rec("tostadas_aguacate_huevo", "Tostadas integrales con aguacate y huevo", 1, "d", "Genérica",
    [("pan_integral", 56), ("aguacate", 50), ("huevo", 100), ("tomate", 40), ("sal", 1)],
    ["Tuesta el pan.", "Unta el aguacate machacado con sal.", "Pon encima los huevos cocidos o pochados y el tomate."], "proteina", 12)
rec("arepa_huevo_rec", "Arepa de huevo costeña", 1, "d", "Caribe",
    [("arepa_huevo", 150)],
    ["Arma la arepa con masa de maíz amarillo, frítela, ábrela, mete un huevo crudo, sella y vuelve a freír."], "", 25)
rec("yogur_granola", "Yogur griego con granola y fresas", 1, "dm", "Genérica",
    [("yogur_griego", 170), ("granola", 30), ("fresa", 100), ("miel", 7)],
    ["Sirve el yogur con la granola, las fresas picadas y un hilo de miel."], "proteina", 3)
rec("omelette_espinaca", "Omelette de espinaca y queso", 1, "dc", "Genérica",
    [("huevo", 100), ("clara_huevo", 66), ("espinaca", 30), ("queso_campesino", 30), ("aceite", 3), ("sal", 1)],
    ["Bate los huevos y las claras con sal.", "Cocina en sartén con el aceite, agrega la espinaca y el queso, y dobla."], "proteina", 10)
rec("arepa_pollo_queso", "Arepa rellena de pollo y queso", 1, "dc", "Nacional",
    [("arepa_maiz", 120), ("pollo_desmechado", 70), ("queso_doble_crema", 30), ("r:hogao", 20)],
    ["Abre la arepa caliente.", "Rellénala con el pollo desmechado mezclado con hogao y el queso."], "proteina", 10)
rec("pan_huevo_cafe", "Pan con huevo y café con leche", 1, "d", "Nacional",
    [("pan_frances", 50), ("huevo_frito", 46), ("r:cafe_leche", 240)],
    ["Fríe el huevo.", "Sirve con el pan y el café con leche."], "", 8)
rec("frutas_queso", "Fruta picada con queso", 1, "dm", "Nacional",
    [("papaya", 150), ("banano", 60), ("pina", 80), ("queso_campesino", 40)],
    ["Pica las frutas y sirve con el queso en cubos."], "", 5)
rec("calentado_lentejas", "Calentado de lentejas con huevo", 1, "d", "Nacional",
    [("arroz_casero", 120), ("r:lentejas", 150), ("huevo_frito", 46), ("arepa_maiz", 80)],
    ["Calienta el arroz con las lentejas en sartén.", "Sirve con huevo frito y arepa."], "", 12)
rec("almojabana_chocolate", "Almojábana con chocolate", 1, "dm", "Boyacá",
    [("almojabana", 55), ("r:chocolate_leche", 240)],
    ["Calienta la almojábana y acompaña con chocolate."], "", 10)
rec("huevos_rancheros_arroz", "Huevos con arroz y maduro (económico)", 1, "dc", "Nacional",
    [("arroz_casero", 150), ("huevo_frito", 92), ("platano_maduro_frito", 70)],
    ["Fríe los huevos y el maduro.", "Sirve con arroz."], "", 15)

# ---------- Almuerzos ----------
rec("bandeja_paisa", "Bandeja paisa", 1, "a", "Antioquia",
    [("arroz_casero", 150), ("r:frijoles_antioquenos", 220), ("carne_molida_cocida", 80), ("chicharron", 80), ("chorizo", 60), ("huevo_frito", 46), ("platano_maduro_frito", 70), ("arepa_tela", 55), ("aguacate", 40)],
    ["Prepara los fríjoles antioqueños.", "Sofríe la carne molida con hogao.", "Fríe el chicharrón, el chorizo, el huevo y las tajadas de maduro.", "Sirve todo con arroz, arepa y aguacate."], "", 120)
rec("ajiaco", "Ajiaco santafereño", 6, "a", "Bogotá",
    [("pollo_desmechado", 500), ("papa_cocida", 600), ("papa_criolla_cocida", 500), ("mazorca_cocida", 450), ("guascas", 10), ("cebolla_larga", 40), ("caldo_pollo", 1500), ("crema_leche", 90), ("sal", 8), ("aguacate", 240), ("arroz_casero", 600)],
    ["Cocina las pechugas en agua con cebolla larga, ajo y sal; desmecha el pollo y reserva el caldo.",
     "En el caldo cocina las papas sabaneras y pastusas en rodajas hasta que se deshagan; agrega la papa criolla y las mazorcas en trozos.",
     "Cuando espese, añade las guascas y el pollo.",
     "Sirve con crema de leche, alcaparras, aguacate y arroz."], "", 90)
rec("sancocho_gallina", "Sancocho de gallina", 6, "a", "Nacional",
    [("pollo_presa", 660), ("papa_cocida", 600), ("yuca_cocida", 500), ("platano_verde_cocido", 360), ("mazorca_cocida", 300), ("caldo_pollo", 1500), ("cebolla_larga", 40), ("cilantro", 10), ("sal", 8), ("arroz_casero", 600), ("aguacate", 180)],
    ["Cocina la gallina en presas con cebolla, ajo y sal (olla a presión 40 minutos).",
     "Agrega el plátano verde y la yuca; luego la papa y la mazorca.",
     "Cocina hasta que todo esté blando y termina con cilantro.",
     "Sirve con arroz y aguacate."], "", 100)
rec("sancocho_trifasico", "Sancocho trifásico", 6, "a", "Valle y Caribe",
    [("pollo_presa", 330), ("costilla_res", 300), ("cerdo_lomo", 300), ("papa_cocida", 450), ("yuca_cocida", 450), ("platano_verde_cocido", 360), ("mazorca_cocida", 300), ("caldo_pollo", 1500), ("cilantro", 10), ("sal", 8), ("arroz_casero", 600)],
    ["Cocina primero la res y el cerdo con aliños; luego agrega el pollo.",
     "Añade plátano, yuca, papa y mazorca.", "Termina con cilantro y sirve con arroz."], "", 120)
rec("frijoles_arroz", "Fríjoles con arroz, carne y maduro", 1, "a", "Antioquia",
    [("r:frijoles_antioquenos", 250), ("arroz_casero", 150), ("carne_molida_cocida", 70), ("platano_maduro_frito", 70), ("aguacate", 30)],
    ["Sirve los fríjoles con arroz, carne molida sofrita con hogao, tajadas de maduro y aguacate."], "", 20)
rec("lentejas", "Lentejas guisadas", 6, "a", "Nacional",
    [("lenteja_cocida", 900), ("papa_cocida", 200), ("zanahoria_cocida", 100), ("r:hogao", 120), ("sal", 4), ("comino", 2)],
    ["Cocina las lentejas con agua 25 minutos.", "Agrega papa y zanahoria picadas, el hogao, comino y sal; cocina 15 minutos más."], "fibra", 45)
rec("lentejas_arroz", "Lentejas con arroz, huevo y ensalada", 1, "a", "Nacional",
    [("r:lentejas", 250), ("arroz_casero", 150), ("huevo", 50), ("ensalada_verde", 80)],
    ["Sirve las lentejas con arroz, huevo cocido y ensalada."], "fibra", 10)
rec("arroz_pollo", "Arroz con pollo", 6, "a", "Nacional",
    [("arroz_casero", 900), ("pollo_desmechado", 450), ("arveja_verde", 120), ("zanahoria_cocida", 120), ("pimenton", 80), ("habichuela", 80), ("comino", 4), ("sal", 4), ("papa_frita", 300)],
    ["Cocina y desmecha el pollo; reserva el caldo.", "Sofríe pimentón, cebolla, ajo y color; agrega el arroz y el caldo.",
     "Cuando el arroz esté casi seco, añade el pollo, la zanahoria, las arvejas y la habichuela.", "Sirve con papa a la francesa (opcional) y ensalada."], "", 60)
rec("sudado_pollo", "Sudado de pollo con papa y arroz", 4, "a", "Nacional",
    [("pollo_presa", 440), ("papa_cocida", 400), ("r:hogao", 150), ("arroz_casero", 600), ("sal", 3), ("comino", 2)],
    ["Dora las presas, agrega el hogao, comino, sal y un poco de agua.", "Tapa, cocina 25 minutos, agrega las papas y cocina hasta que ablanden.", "Sirve con arroz."], "", 50)
rec("bistec_caballo", "Bistec a caballo con arroz y papa", 1, "a", "Nacional",
    [("carne_asada", 130), ("r:hogao", 60), ("huevo_frito", 46), ("arroz_casero", 150), ("papa_cocida", 120)],
    ["Asa la carne y báñala con hogao (bistec encebollado).", "Pon encima el huevo frito.", "Sirve con arroz y papa."], "proteina", 25)
rec("sobrebarriga_salsa", "Sobrebarriga en salsa criolla", 4, "a", "Bogotá",
    [("sobrebarriga", 520), ("r:hogao", 200), ("papa_salada_frita", 300), ("arroz_casero", 600), ("cerveza", 120), ("sal", 3)],
    ["Cocina la sobrebarriga con aliños en olla a presión 50 minutos.", "Dórala y báñala con hogao y un poco de cerveza.", "Sirve con papa criolla dorada y arroz."], "", 80)
rec("pollo_asado_papa", "Pollo asado con papa y ensalada", 1, "ac", "Nacional",
    [("pollo_asado", 250), ("papa_cocida", 150), ("ensalada_verde", 100), ("arepa_maiz", 40)],
    ["Sirve un cuarto de pollo asado con papa salada, ensalada y arepa."], "proteina", 5)
rec("mojarra_patacon", "Mojarra frita con patacón y arroz de coco", 1, "a", "Caribe",
    [("mojarra_frita", 200), ("patacon", 80), ("arroz_coco", 150), ("ensalada_verde", 60), ("limon", 10)],
    ["Fríe la mojarra sazonada con sal y limón.", "Sirve con patacones, arroz con coco y ensalada."], "", 40)
rec("posta_negra", "Posta negra cartagenera", 6, "a", "Cartagena",
    [("carne_asada", 780), ("panela", 60), ("gaseosa", 200), ("r:hogao", 120), ("arroz_coco", 900), ("platano_maduro_frito", 300)],
    ["Dora la carne y cocínala en olla con cola, panela rallada, cebolla y aliños 90 minutos hasta que la salsa quede oscura y espesa.",
     "Tajea y sirve con arroz con coco y tajadas de maduro."], "", 120)
rec("mondongo", "Sopa de mondongo", 6, "a", "Antioquia",
    [("mondongo", 600), ("cerdo_lomo", 200), ("chorizo", 120), ("papa_cocida", 500), ("yuca_cocida", 300), ("zanahoria_cocida", 100), ("r:hogao", 150), ("caldo_pollo", 1200), ("cilantro", 10), ("sal", 6), ("arroz_casero", 600), ("aguacate", 180)],
    ["Lava bien el mondongo con limón y cocínalo en olla a presión 60 minutos.", "Pícalo y cocina con el cerdo, el chorizo, la papa, la yuca, la zanahoria y el hogao.", "Sirve con arroz, aguacate y cilantro."], "", 120)
rec("cuchuco", "Cuchuco de trigo con espinazo", 6, "a", "Boyacá",
    [("trigo_partido_cocido", 600), ("cerdo_lomo", 400), ("papa_cocida", 400), ("arveja_verde", 150), ("habichuela", 150), ("repollo", 150), ("caldo_pollo", 1500), ("cebolla_larga", 40), ("sal", 6)],
    ["Cocina el espinazo de cerdo con cebolla y ajo.", "Agrega el trigo partido y cocina 30 minutos.", "Añade papa, arvejas, habichuelas y repollo; cocina hasta que estén blandos."], "fibra", 90)
rec("arroz_atollado", "Arroz atollado", 6, "a", "Valle del Cauca",
    [("arroz_casero", 900), ("pollo_desmechado", 300), ("cerdo_lomo", 200), ("chorizo", 120), ("papa_criolla_cocida", 300), ("r:hogao", 150), ("caldo_pollo", 500), ("sal", 4)],
    ["Sofríe las carnes con hogao y color.", "Agrega el arroz, la papa criolla y el caldo.", "Cocina hasta que quede húmedo y cremoso (atollado)."], "", 60)
rec("ensalada_pollo", "Ensalada de pollo con aguacate", 1, "ac", "Genérica",
    [("pechuga_asada", 120), ("lechuga", 60), ("tomate", 80), ("pepino", 60), ("aguacate", 50), ("aceite", 5), ("limon", 10), ("sal", 1)],
    ["Corta la pechuga asada en tiras.", "Mezcla con las verduras y el aguacate.", "Aliña con aceite, limón y sal."], "proteina", 15)
rec("pechuga_arroz_ensalada", "Pechuga a la plancha con arroz y ensalada", 1, "ac", "Genérica",
    [("pechuga_asada", 150), ("arroz_casero", 120), ("ensalada_verde", 100), ("aguacate", 30), ("aceite", 3)],
    ["Asa la pechuga sazonada.", "Sirve con arroz, ensalada y aguacate."], "proteina", 20)
rec("picadillo", "Carne molida con papa (picadillo)", 4, "ac", "Nacional",
    [("carne_molida_cocida", 360), ("papa_cocida", 400), ("zanahoria_cocida", 100), ("arveja_verde", 80), ("r:hogao", 120), ("sal", 3), ("arroz_casero", 600)],
    ["Sofríe la carne con hogao.", "Agrega papa y zanahoria en cubos, arvejas y un poco de agua; cocina 20 minutos.", "Sirve con arroz."], "", 40)
rec("albondigas", "Albóndigas en salsa", 4, "ac", "Nacional",
    [("carne_molida_cocida", 400), ("huevo", 50), ("pan_blanco", 25), ("r:hogao", 200), ("sal", 3), ("arroz_casero", 600)],
    ["Mezcla la carne cruda con huevo, pan remojado y sal; forma bolitas.", "Dóralas y cocínalas en el hogao con un poco de agua 20 minutos.", "Sirve con arroz."], "", 45)
rec("pasta_pollo", "Pasta con pollo y verduras", 2, "ac", "Genérica",
    [("pasta_cocida", 360), ("pollo_desmechado", 180), ("brocoli", 120), ("pimenton", 60), ("crema_leche", 30), ("queso_parmesano", 10), ("aceite", 8), ("sal", 2)],
    ["Cocina la pasta.", "Saltea el pollo con pimentón y brócoli en el aceite.", "Mezcla con la pasta, la crema y el queso."], "", 25)
rec("pasta_atun", "Pasta con atún", 2, "ac", "Genérica",
    [("pasta_cocida", 360), ("atun_agua", 120), ("r:hogao", 100), ("queso_parmesano", 10), ("sal", 1)],
    ["Cocina la pasta.", "Mezcla con el atún calentado en hogao.", "Sirve con queso rallado."], "proteina", 20)
rec("crema_ahuyama", "Crema de ahuyama", 4, "ac", "Nacional",
    [("ahuyama", 700), ("papa_cocida", 150), ("cebolla_cabezona", 80), ("leche_semi", 240), ("mantequilla", 10), ("caldo_pollo", 500), ("sal", 4)],
    ["Cocina la ahuyama, la papa y la cebolla en el caldo.", "Licúa con la leche y la mantequilla; ajusta la sal."], "", 30)
rec("sopa_verduras", "Sopa de verduras", 4, "ac", "Nacional",
    [("papa_cocida", 300), ("zanahoria_cocida", 150), ("habichuela", 120), ("arveja_verde", 100), ("repollo", 120), ("caldo_pollo", 1200), ("cilantro", 6), ("sal", 5)],
    ["Cocina todas las verduras picadas en el caldo hasta que estén blandas.", "Termina con cilantro."], "fibra", 35)
rec("higado_encebollado", "Hígado encebollado con arroz y papa", 1, "a", "Nacional",
    [("higado", 120), ("cebolla_cabezona", 80), ("aceite", 6), ("arroz_casero", 150), ("papa_cocida", 120)],
    ["Sofríe el hígado en tiras con cebolla en aros.", "Sirve con arroz y papa."], "proteina", 20)
rec("sudado_carne", "Sudado de carne con yuca", 4, "a", "Nacional",
    [("carne_desmechada", 400), ("yuca_cocida", 400), ("papa_cocida", 300), ("r:hogao", 150), ("sal", 3), ("arroz_casero", 600)],
    ["Cocina la carne en trozos con hogao y agua hasta que ablande.", "Agrega yuca y papa y cocina hasta que estén blandas.", "Sirve con arroz."], "", 70)
rec("viudo_pescado", "Viudo de pescado", 4, "a", "Huila y Tolima",
    [("tilapia", 600), ("yuca_cocida", 400), ("platano_verde_cocido", 360), ("papa_cocida", 300), ("r:hogao", 150), ("sal", 4)],
    ["Cocina al vapor el pescado con la yuca, el plátano y la papa.", "Sirve bañado en hogao."], "proteina", 50)
rec("garbanzos_arroz", "Garbanzos guisados con arroz", 4, "a", "Nacional",
    [("garbanzo_cocido", 600), ("cerdo_lomo", 150), ("zanahoria_cocida", 100), ("r:hogao", 150), ("sal", 3), ("arroz_casero", 600)],
    ["Cocina los garbanzos remojados.", "Guísalos con el cerdo en cubos, la zanahoria y el hogao.", "Sirve con arroz."], "fibra", 60)
rec("cazuela_mariscos", "Cazuela de mariscos", 4, "a", "Caribe y Pacífico",
    [("camaron", 300), ("tilapia", 300), ("coco_leche", 400), ("r:hogao", 150), ("crema_leche", 60), ("sal", 3), ("arroz_coco", 600)],
    ["Sofríe el hogao, agrega la leche de coco y la crema.", "Cocina el pescado y los camarones en la salsa 8 minutos.", "Sirve con arroz con coco."], "", 40)
rec("lechona_plato", "Lechona con arepa", 1, "a", "Tolima",
    [("lechona", 250), ("arepa_maiz", 80)],
    ["Sirve la porción de lechona con arepa."], "", 5)
rec("mute", "Mute santandereano", 6, "a", "Santander",
    [("maiz_peto_cocido", 500), ("costilla_res", 300), ("cerdo_lomo", 250), ("mondongo", 200), ("papa_cocida", 400), ("arveja_verde", 100), ("caldo_pollo", 1500), ("r:hogao", 120), ("sal", 6)],
    ["Cocina el maíz pelado la noche anterior.", "Cocina las carnes y el mondongo con aliños.", "Une todo con la papa y las arvejas y cocina hasta que espese."], "", 180)
rec("tilapia_plancha", "Tilapia a la plancha con ensalada y papa", 1, "ac", "Genérica",
    [("tilapia", 150), ("papa_cocida", 150), ("ensalada_verde", 120), ("aceite", 5), ("limon", 10)],
    ["Asa el filete con sal, ajo y limón.", "Sirve con papa y ensalada."], "proteina", 20)
rec("salmon_quinua", "Salmón con quinua y brócoli", 1, "ac", "Genérica",
    [("salmon", 150), ("quinua_cocida", 150), ("brocoli", 120), ("limon", 10)],
    ["Asa el salmón.", "Sirve con quinua y brócoli al vapor."], "proteina", 25)

# ---------- Cenas ligeras ----------
rec("sanduche_pollo", "Sánduche de pollo", 1, "cm", "Genérica",
    [("pan_integral", 56), ("pollo_desmechado", 80), ("lechuga", 20), ("tomate", 40), ("queso_doble_crema", 25), ("mayonesa", 7)],
    ["Arma el sánduche con el pan, el pollo, las verduras, el queso y un poco de mayonesa."], "proteina", 8)
rec("wrap_pollo", "Wrap de pollo", 1, "c", "Genérica",
    [("tortilla_trigo", 45), ("pechuga_asada", 100), ("lechuga", 30), ("tomate", 40), ("aguacate", 30), ("queso_campesino", 20)],
    ["Calienta la tortilla.", "Rellena con el pollo en tiras, las verduras, el aguacate y el queso; enrolla."], "proteina", 10)
rec("ensalada_atun", "Ensalada de atún", 1, "c", "Genérica",
    [("atun_agua", 120), ("lechuga", 60), ("tomate", 80), ("mazorca_cocida", 50), ("aguacate", 30), ("limon", 10), ("aceite", 5)],
    ["Mezcla el atún con las verduras, la mazorca y el aguacate.", "Aliña con limón y aceite."], "proteina", 10)
rec("arepa_huevo_queso", "Arepa con huevos y queso", 1, "dc", "Nacional",
    [("arepa_maiz", 80), ("huevo", 100), ("queso_campesino", 30), ("aceite", 3)],
    ["Asa la arepa.", "Prepara los huevos a tu gusto.", "Sirve con el queso."], "proteina", 10)
rec("caldo_papa_huevo", "Caldo de papa con huevo", 2, "dc", "Cundinamarca",
    [("papa_cocida", 300), ("huevo", 100), ("caldo_pollo", 600), ("cebolla_larga", 20), ("cilantro", 5), ("sal", 2)],
    ["Cocina las papas en el caldo con la cebolla.", "Agrega los huevos sin revolver y cocina 3 minutos.", "Sirve con cilantro."], "", 25)
rec("perro_caliente_rec", "Perro caliente", 1, "c", "Nacional",
    [("perro_caliente", 180), ("papas_paquete", 10), ("salsa_rosada", 15)],
    ["Arma el perro con pan, salchicha, papitas y salsas."], "", 10)
rec("hamburguesa_rec", "Hamburguesa con papas", 1, "ac", "Nacional",
    [("hamburguesa", 220), ("papa_frita", 100), ("salsa_tomate", 15)],
    ["Hamburguesa sencilla con papas a la francesa."], "", 15)
rec("salchipapa", "Salchipapa", 1, "c", "Nacional",
    [("papa_frita", 150), ("salchicha", 90), ("salsa_rosada", 20), ("salsa_tomate", 15)],
    ["Fríe las papas y las salchichas en rodajas; sirve con salsas."], "", 20)

# ---------- Meriendas / onces ----------
rec("empanadas_aji", "Empanadas con ají (3)", 1, "m", "Nacional",
    [("empanada", 210), ("aji", 15)], ["Sirve 3 empanadas con ají."], "", 5)
rec("bunuelo_chocolate", "Buñuelo con chocolate", 1, "m", "Nacional",
    [("bunuelo", 45), ("r:chocolate_leche", 240)], ["Buñuelo con chocolate caliente."], "", 5)
rec("pandebono_cafe", "Pandebono con café con leche", 1, "dm", "Valle del Cauca",
    [("pan_bono", 50), ("r:cafe_leche", 240)], ["Pandebono caliente con café con leche."], "", 5)
rec("salpicon_rec", "Salpicón de frutas", 1, "m", "Valle del Cauca",
    [("salpicon", 300)], ["Pica papaya, banano, piña y otras frutas; mezcla con jugo de sandía o naranja."], "", 10)
rec("mazamorra_bocadillo", "Mazamorra con bocadillo", 1, "m", "Antioquia",
    [("mazamorra", 250), ("bocadillo", 30)], ["Sirve la mazamorra fría con leche y un bocadillo."], "", 5)
rec("oblea_arequipe", "Oblea con arequipe", 1, "m", "Nacional", [("obleas", 45)], ["Unta arequipe entre dos obleas."], "", 3)
rec("maduro_queso", "Maduro asado con queso", 1, "m", "Nacional",
    [("platano_maduro_asado", 100), ("queso_campesino", 40)], ["Asa el maduro, ábrelo y rellena con queso."], "", 30)
rec("aguapanela_queso", "Aguapanela con queso", 1, "m", "Nacional",
    [("aguapanela", 240), ("queso_campesino", 40)], ["Sirve la aguapanela caliente con queso."], "", 10)
rec("tinto_galletas", "Tinto con galletas", 1, "m", "Nacional",
    [("tinto", 120), ("azucar", 8), ("galleta_saltina", 9)], ["Tinto con dos cucharaditas de azúcar y tres galletas de soda."], "", 5)
rec("arroz_leche_rec", "Arroz con leche", 1, "m", "Nacional", [("arroz_leche", 150)], ["Porción de arroz con leche con canela."], "", 5)
rec("natilla_bunuelo", "Natilla con buñuelo", 1, "m", "Navidad", [("natilla", 100), ("bunuelo", 45)], ["Plato navideño: natilla con buñuelo."], "", 5)
rec("mani_banano", "Banano con mantequilla de maní", 1, "m", "Genérica",
    [("banano", 118), ("mantequilla_mani", 16)], ["Corta el banano y unta la mantequilla de maní."], "", 3)
rec("yogur_fruta", "Yogur natural con fruta y chía", 1, "m", "Genérica",
    [("yogur_natural", 200), ("mango", 100), ("chia", 6)], ["Mezcla el yogur con mango picado y chía."], "", 3)
rec("pastel_pollo_gaseosa", "Pastel de pollo con gaseosa", 1, "m", "Nacional",
    [("pastel_pollo", 110), ("gaseosa", 350)], ["Pastel de pollo con gaseosa personal."], "", 2)

# ---------- Bebidas ----------
rec("chocolate_leche", "Chocolate con leche", 1, "dm", "Nacional",
    [("leche_entera", 200), ("agua", 40), ("chocolate_mesa", 20)],
    ["Disuelve la pastilla de chocolate en la leche con un poco de agua y bate con molinillo."], "bebida", 10)
rec("cafe_leche", "Café con leche", 1, "dm", "Nacional",
    [("leche_semi", 150), ("tinto", 90), ("azucar", 8)], ["Mezcla el café con la leche caliente y el azúcar."], "bebida", 5)
rec("jugo_lulo_agua", "Jugo de lulo en agua", 1, "am", "Nacional",
    [("lulo", 100), ("agua", 200), ("azucar", 20)], ["Licúa la pulpa de lulo con agua y azúcar; cuela."], "bebida", 5)
rec("jugo_mora_leche", "Jugo de mora en leche", 1, "am", "Nacional",
    [("mora", 100), ("leche_entera", 200), ("azucar", 20)], ["Licúa la mora con leche y azúcar; cuela."], "bebida", 5)
rec("limonada_panela", "Limonada de panela", 1, "am", "Nacional",
    [("aguapanela", 240), ("limon", 30)], ["Mezcla aguapanela fría con jugo de limón y hielo."], "bebida", 5)
rec("jugo_maracuya", "Jugo de maracuyá en agua", 1, "am", "Nacional",
    [("maracuya", 60), ("agua", 220), ("azucar", 20)], ["Licúa la pulpa con agua y azúcar; cuela."], "bebida", 5)
rec("avena_casera", "Avena casera (bebida)", 2, "dm", "Nacional",
    [("avena_hojuelas", 40), ("leche_entera", 400), ("azucar", 20)], ["Cocina la avena con la leche, la canela y el azúcar; licúa y sirve fría."], "bebida", 15)
rec("jugo_mora_agua", "Jugo de mora en agua", 1, "am", "Nacional",
    [("mora", 100), ("agua", 200), ("azucar", 20)], ["Licúa la mora con agua y azúcar; cuela."], "bebida", 5)
rec("jugo_guayaba_agua", "Jugo de guayaba en agua", 1, "am", "Nacional",
    [("guayaba", 120), ("agua", 200), ("azucar", 20)], ["Licúa la guayaba con agua y azúcar; cuela."], "bebida", 5)
rec("jugo_tomate_arbol", "Jugo de tomate de árbol en agua", 1, "am", "Nacional",
    [("tomate_arbol", 120), ("agua", 200), ("azucar", 20)], ["Escalda los tomates, pélalos y licúa con agua y azúcar; cuela."], "bebida", 5)
rec("limonada", "Limonada natural", 1, "am", "Nacional",
    [("limon", 40), ("agua", 250), ("azucar", 20)], ["Mezcla el jugo de limón con agua fría y azúcar."], "bebida", 5)
rec("jugo_mango_leche", "Jugo de mango en leche", 1, "am", "Nacional",
    [("mango", 120), ("leche_entera", 200), ("azucar", 15)], ["Licúa el mango con la leche y el azúcar."], "bebida", 5)
