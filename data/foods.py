# Base de alimentos de Plato. Valores por 100 g de parte comestible.
# Columnas: id, nombre, grupo, kcal, proteína g, carbohidratos g, grasa g, fibra g, azúcares g, sodio mg,
#           porciones "nombre:g|...", fuente (USDA = FoodData Central SR Legacy; aprox = estimado, a reemplazar por TCAC/ICBF),
#           sinónimos, crudo "id:factor" (gramos crudos por gramo cocido, para la lista de mercado)
# Los grupos sirven para filtros, colores y la lista de mercado.

FOODS = r"""
arroz_blanco_cocido|Arroz blanco cocido (sin grasa)|cereales|130|2.7|28.2|0.3|0.4|0.1|1|taza:160|cucharón:90|USDA|arroz|arroz_blanco_crudo:0.38
arroz_casero|Arroz blanco casero (con aceite y sal)|cereales|152|2.7|28.0|3.0|0.4|0.1|280|taza:160|porción:150|cucharón:90|aprox|arroz, arroz blanco|arroz_blanco_crudo:0.37
arroz_blanco_crudo|Arroz blanco crudo|cereales|365|7.1|80.0|0.7|1.3|0.1|5|taza:185|libra:500|USDA||
arroz_integral_cocido|Arroz integral cocido|cereales|123|2.7|25.6|1.0|1.6|0.2|4|taza:195|porción:150|USDA||arroz_integral_crudo:0.38
arroz_integral_crudo|Arroz integral crudo|cereales|370|7.9|77.2|2.9|3.5|0.9|7|taza:190|USDA||
arroz_coco|Arroz con coco (costeño)|cereales|210|3.2|33.0|7.5|1.2|4.0|260|porción:150|taza:170|aprox|arroz de coco|arroz_blanco_crudo:0.33
harina_maiz_precocida|Harina de maíz precocida|cereales|367|6.7|80.0|1.7|5.0|0.3|3|taza:130|cucharada:10|USDA|harina pan, harina para arepas|
arepa_maiz|Arepa de maíz blanca asada|cereales|200|4.3|41.0|1.4|3.0|0.4|240|unidad mediana:80|unidad grande:120|aprox|arepa|harina_maiz_precocida:0.5
arepa_tela|Arepa delgada (paisa, sin sal)|cereales|180|3.7|38.0|1.3|2.8|0.3|10|unidad:55|aprox|arepa paisa, arepa de tela|harina_maiz_precocida:0.45
arepa_queso|Arepa de queso|cereales|265|8.5|35.0|10.0|2.4|1.0|420|unidad:110|aprox|arepa con queso|
arepa_choclo|Arepa de choclo|cereales|240|6.0|38.0|7.5|2.5|9.0|300|unidad:120|aprox|arepa de chócolo|
arepa_huevo|Arepa de huevo (frita)|cereales|300|9.0|28.0|17.0|2.0|0.5|350|unidad:150|aprox||
arepa_boyacense|Arepa boyacense|cereales|330|7.0|45.0|13.0|1.5|12.0|330|unidad:100|aprox||
pan_blanco|Pan blanco tajado|cereales|266|8.9|49.0|3.3|2.7|5.7|490|tajada:25|USDA|pan tajado, pan de molde|
pan_integral|Pan integral tajado|cereales|252|12.5|43.0|3.5|6.0|4.4|450|tajada:28|USDA|pan de molde integral|
pan_frances|Pan francés / aliñado|cereales|272|9.0|52.0|3.0|2.3|3.0|560|unidad:50|tajada:20|USDA|pan, pan blandito, mogolla|
pan_bono|Pandebono|cereales|340|9.0|40.0|16.0|0.5|2.0|500|unidad:50|aprox|pan de bono|
almojabana|Almojábana|cereales|330|12.0|33.0|16.0|0.3|3.0|470|unidad:55|aprox||
bunuelo|Buñuelo|cereales|390|9.0|38.0|22.0|0.3|2.0|420|unidad:45|aprox|buñuelos|
pandeyuca|Pandeyuca|cereales|320|6.5|45.0|13.0|0.5|2.0|420|unidad:40|aprox|pan de yuca|
pasta_cocida|Pasta cocida (espagueti, macarrón)|cereales|158|5.8|30.9|0.9|1.8|0.6|1|taza:140|porción:180|USDA|espaguetis, macarrones, pasta|pasta_cruda:0.42
pasta_cruda|Pasta cruda|cereales|371|13.0|74.7|1.5|3.2|2.7|6|paquete:250|USDA||
avena_hojuelas|Avena en hojuelas|cereales|379|13.2|67.7|6.5|10.1|1.0|6|cucharada:8|taza:80|USDA|avena|
granola|Granola|cereales|450|10.0|65.0|17.0|7.0|22.0|25|cucharada:12|taza:110|aprox||
cereal_hojuelas|Cereal de hojuelas de maíz|cereales|357|7.5|84.0|0.4|3.3|9.5|700|taza:28|USDA|corn flakes|
mazorca_cocida|Mazorca cocida (granos)|cereales|96|3.4|21.0|1.5|2.4|4.5|1|mazorca:150|taza:150|USDA|maíz tierno, choclo, chócolo|
maiz_peto_cocido|Maíz peto cocido|cereales|120|2.6|25.0|1.0|3.0|0.5|5|taza:165|aprox|maíz pelado, mute|
galleta_saltina|Galletas de soda (saltinas)|cereales|418|9.5|74.0|9.0|2.6|1.3|940|unidad:3|paquete (3 u):9|USDA|saltinas, galletas de soda|
galleta_dulce|Galletas dulces (tipo María)|cereales|440|7.0|73.0|14.0|2.0|22.0|330|unidad:6|paquete:30|USDA|galletas|
tortilla_trigo|Tortilla de trigo|cereales|304|8.0|50.0|8.0|3.5|2.0|620|unidad:45|USDA|wrap|
harina_trigo|Harina de trigo|cereales|364|10.3|76.3|1.0|2.7|0.3|2|taza:125|cucharada:8|USDA||
trigo_partido_cocido|Trigo partido cocido (cuchuco)|cereales|120|4.0|25.0|0.5|4.5|0.1|5|taza:180|aprox|cuchuco|
cebada_perlada_cocida|Cebada perlada cocida|cereales|123|2.3|28.2|0.4|3.8|0.3|3|taza:157|USDA|cebada|
quinua_cocida|Quinua cocida|cereales|120|4.4|21.3|1.9|2.8|0.9|7|taza:185|USDA|quinoa|
papa_cocida|Papa cocida|tuberculos|87|1.9|20.1|0.1|1.8|0.9|5|unidad mediana:150|unidad pequeña:90|USDA|papa sabanera, papa pastusa, papa salada|papa_cruda:1.0
papa_criolla_cocida|Papa criolla cocida|tuberculos|97|2.2|21.0|0.2|1.9|1.0|6|unidad:30|porción (6 u):180|aprox|papa amarilla|papa_cruda:1.0
papa_cruda|Papa cruda|tuberculos|77|2.0|17.5|0.1|2.1|0.8|6|libra:500|unidad:170|USDA||
papa_frita|Papas a la francesa|tuberculos|312|3.4|41.0|15.0|3.8|0.3|210|porción pequeña:80|porción mediana:120|USDA|papas fritas, francesas|
papa_salada_frita|Papa criolla frita|tuberculos|230|2.5|28.0|12.0|2.5|0.8|250|porción:100|aprox||
yuca_cocida|Yuca cocida|tuberculos|135|1.1|32.0|0.3|1.6|1.3|10|trozo:100|porción:150|aprox|yuca|yuca_cruda:1.0
yuca_frita|Yuca frita|tuberculos|280|1.4|38.0|14.0|2.0|1.5|200|trozo:60|porción:120|aprox||
yuca_cruda|Yuca cruda|tuberculos|160|1.4|38.1|0.3|1.8|1.7|14|libra:500|USDA||
platano_maduro_cocido|Plátano maduro cocido|tuberculos|116|0.8|31.2|0.2|2.3|14.0|5|unidad:180|mitad:90|USDA|maduro cocido|platano_maduro_crudo:1.0
platano_maduro_frito|Plátano maduro frito (tajadas)|tuberculos|250|1.5|40.0|10.0|2.3|18.0|5|tajada:35|porción (3 tajadas):100|aprox|tajadas de maduro, maduro frito|platano_maduro_crudo:1.25
platano_maduro_asado|Plátano maduro asado|tuberculos|140|1.3|37.0|0.3|2.3|17.0|4|unidad:200|mitad:100|USDA|maduro asado|platano_maduro_crudo:1.1
platano_maduro_crudo|Plátano maduro crudo|tuberculos|122|1.3|31.9|0.4|2.3|15.0|4|unidad:220|USDA||
patacon|Patacón (plátano verde frito)|tuberculos|309|1.5|49.2|11.8|3.5|1.0|200|unidad:40|unidad grande:80|USDA|tostón, patacones|platano_verde_crudo:1.4
platano_verde_cocido|Plátano verde cocido|tuberculos|116|0.8|31.0|0.2|2.3|3.0|5|unidad:180|trozo:60|USDA|plátano hartón|platano_verde_crudo:1.0
platano_verde_crudo|Plátano verde crudo|tuberculos|122|1.3|32.0|0.4|2.3|4.0|4|unidad:230|USDA||
arracacha_cocida|Arracacha cocida|tuberculos|104|0.8|24.9|0.2|1.8|2.0|8|trozo:60|aprox||
name_cocido|Ñame cocido|tuberculos|116|1.5|27.5|0.1|3.9|0.5|8|trozo:80|USDA|ñame|
batata_cocida|Batata cocida|tuberculos|76|1.4|17.7|0.1|2.5|5.7|27|unidad:150|USDA|camote|
frijol_cocido|Fríjol rojo cocido (sin grasa)|leguminosas|127|8.7|22.8|0.5|6.4|0.3|2|taza:180|cucharón:120|USDA|frijoles, fríjol cargamanto, frisoles|frijol_crudo:0.42
frijol_crudo|Fríjol rojo crudo|leguminosas|333|23.6|60.0|0.8|15.2|2.2|24|libra:500|taza:185|USDA||
lenteja_cocida|Lenteja cocida (sin grasa)|leguminosas|116|9.0|20.1|0.4|7.9|1.8|2|taza:200|cucharón:120|USDA|lentejas|lenteja_cruda:0.4
lenteja_cruda|Lenteja cruda|leguminosas|352|24.6|63.4|1.1|10.7|2.0|6|libra:500|USDA||
garbanzo_cocido|Garbanzo cocido|leguminosas|164|8.9|27.4|2.6|7.6|4.8|7|taza:165|USDA|garbanzos|garbanzo_crudo:0.45
garbanzo_crudo|Garbanzo crudo|leguminosas|378|20.5|63.0|6.0|12.2|10.7|24|libra:500|USDA||
arveja_seca_cocida|Arveja seca cocida|leguminosas|118|8.3|21.1|0.4|8.3|2.9|2|taza:195|USDA|arveja amarilla|arveja_seca_cruda:0.42
arveja_seca_cruda|Arveja seca cruda|leguminosas|352|23.8|61.6|1.2|22.2|8.0|15|libra:500|USDA||
arveja_verde|Arveja verde cocida|verduras|84|5.4|15.6|0.2|5.5|5.9|3|taza:160|cucharada:15|USDA|arvejas|
habichuela|Habichuela cocida|verduras|35|1.9|7.9|0.3|3.2|1.6|1|taza:125|USDA|ejotes, judías verdes|
tomate|Tomate|verduras|18|0.9|3.9|0.2|1.2|2.6|5|unidad:120|tajada:20|USDA|tomate chonto|
cebolla_cabezona|Cebolla cabezona|verduras|40|1.1|9.3|0.1|1.7|4.2|4|unidad:110|cucharada picada:10|USDA|cebolla blanca, cebolla roja|
cebolla_larga|Cebolla larga|verduras|32|1.8|7.3|0.2|2.6|2.3|16|tallo:15|USDA|cebolla junca, cebollín|
zanahoria|Zanahoria|verduras|41|0.9|9.6|0.2|2.8|4.7|69|unidad:70|taza rallada:110|USDA||
zanahoria_cocida|Zanahoria cocida|verduras|35|0.8|8.2|0.2|3.0|3.5|58|taza:155|USDA||
lechuga|Lechuga|verduras|15|1.4|2.9|0.2|1.3|0.8|28|taza:47|hoja:10|USDA||
repollo|Repollo|verduras|25|1.3|5.8|0.1|2.5|3.2|18|taza:90|USDA|col|
pepino|Pepino cohombro|verduras|15|0.7|3.6|0.1|0.5|1.7|2|unidad:200|tajada:7|USDA|pepino|
aguacate|Aguacate Hass|verduras|160|2.0|8.5|14.7|6.7|0.7|7|unidad (pulpa):136|tajada:30|USDA|palta, aguacate hass|
aguacate_criollo|Aguacate criollo (papelillo, lorena)|verduras|120|2.2|7.8|10.1|5.6|2.4|2|tajada:50|mitad:150|USDA|aguacate común|
brocoli|Brócoli cocido|verduras|35|2.4|7.2|0.4|3.3|1.4|41|taza:156|USDA|brócoli|
coliflor|Coliflor cocida|verduras|23|1.8|4.1|0.5|2.3|2.1|15|taza:124|USDA||
espinaca|Espinaca|verduras|23|2.9|3.6|0.4|2.2|0.4|79|taza:30|taza cocida:180|USDA||
ahuyama|Ahuyama cocida|verduras|30|0.8|7.5|0.1|1.5|2.5|2|taza:245|aprox|zapallo, auyama|
pimenton|Pimentón|verduras|26|1.0|6.0|0.3|2.1|4.2|4|unidad:120|USDA|pimiento|
champinon|Champiñones|verduras|22|3.1|3.3|0.3|1.0|2.0|5|taza:70|USDA|hongos|
remolacha|Remolacha cocida|verduras|44|1.7|10.0|0.2|2.0|8.0|77|unidad:80|USDA||
calabacin|Calabacín|verduras|17|1.2|3.1|0.3|1.0|2.5|8|unidad:200|USDA|zucchini|
cilantro|Cilantro|verduras|23|2.1|3.7|0.5|2.8|0.9|46|cucharada:4|USDA||
ajo|Ajo|verduras|149|6.4|33.0|0.5|2.1|1.0|17|diente:3|USDA||
guascas|Guascas|verduras|30|2.5|5.0|0.5|3.0|0.5|20|cucharada:2|aprox||
ensalada_verde|Ensalada (lechuga, tomate, cebolla)|verduras|20|1.0|4.2|0.2|1.4|2.4|10|porción:100|taza:80|aprox|ensalada|
banano|Banano|frutas|89|1.1|22.8|0.3|2.6|12.2|1|unidad:118|USDA|banana, guineo|
mango|Mango|frutas|60|0.8|15.0|0.4|1.6|13.7|1|unidad:200|taza:165|USDA||
papaya|Papaya|frutas|43|0.5|10.8|0.3|1.7|7.8|8|tajada:150|taza:145|USDA|papayuela|
pina|Piña|frutas|50|0.5|13.1|0.1|1.4|9.9|1|tajada:85|taza:165|USDA||
manzana|Manzana|frutas|52|0.3|13.8|0.2|2.4|10.4|1|unidad:180|USDA||
naranja|Naranja|frutas|47|0.9|11.8|0.1|2.4|9.4|0|unidad:130|USDA||
mandarina|Mandarina|frutas|53|0.8|13.3|0.3|1.8|10.6|2|unidad:90|USDA||
fresa|Fresa|frutas|32|0.7|7.7|0.3|2.0|4.9|1|taza:150|unidad:12|USDA|fresas|
guayaba|Guayaba|frutas|68|2.6|14.3|1.0|5.4|8.9|2|unidad:90|USDA||
maracuya|Maracuyá (pulpa)|frutas|97|2.2|23.4|0.7|10.4|11.2|28|unidad:20|USDA|parchita|
lulo|Lulo (pulpa)|frutas|25|0.4|5.9|0.1|1.1|3.6|4|unidad:70|USDA|naranjilla|
mora|Mora|frutas|43|1.4|9.6|0.5|5.3|4.9|1|taza:145|USDA|moras|
uchuva|Uchuva|frutas|53|1.9|11.2|0.7|4.9|9.0|0|unidad:5|taza:140|USDA|aguaymanto|
granadilla|Granadilla (pulpa)|frutas|90|2.4|21.0|0.6|10.0|11.0|25|unidad:50|aprox||
pitahaya|Pitahaya amarilla|frutas|50|0.6|12.0|0.2|3.0|9.0|0|unidad:150|aprox||
sandia|Sandía|frutas|30|0.6|7.6|0.2|0.4|6.2|1|tajada:280|taza:150|USDA|patilla|
melon|Melón|frutas|34|0.8|8.2|0.2|0.9|7.9|16|tajada:160|taza:160|USDA||
pera|Pera|frutas|57|0.4|15.2|0.1|3.1|9.8|1|unidad:180|USDA||
uva|Uvas|frutas|69|0.7|18.1|0.2|0.9|15.5|2|taza:150|unidad:5|USDA||
limon|Limón (jugo)|frutas|22|0.4|6.9|0.2|0.3|2.5|1|unidad:30|cucharada:15|USDA||
feijoa|Feijoa|frutas|61|0.7|15.2|0.6|6.4|8.2|3|unidad:50|USDA||
guanabana|Guanábana|frutas|66|1.0|16.8|0.3|3.3|13.5|14|taza:225|USDA||
tomate_arbol|Tomate de árbol|frutas|40|1.5|8.0|0.4|3.3|5.0|2|unidad:80|aprox|tamarillo|
borojo|Borojó|frutas|90|1.1|24.0|0.3|5.0|20.0|10|cucharada:20|aprox||
coco_leche|Leche de coco|grasas|230|2.3|5.5|23.8|2.2|3.3|15|taza:240|cucharada:15|USDA||
bocadillo|Bocadillo de guayaba|azucares|300|0.4|75.0|0.1|2.5|65.0|10|unidad:30|aprox|bocadillo veleño|
salpicon|Salpicón de frutas|frutas|65|0.7|16.0|0.2|1.5|14.0|5|vaso:300|aprox|salpicón|
pechuga_asada|Pechuga de pollo asada (sin piel)|carnes|165|31.0|0.0|3.6|0.0|0.0|74|porción:120|filete:150|USDA|pollo a la plancha, pechuga|pechuga_cruda:1.35
pechuga_cruda|Pechuga de pollo cruda|carnes|120|22.5|0.0|2.6|0.0|0.0|45|unidad:350|libra:500|USDA||
pollo_desmechado|Pollo cocido desmechado|carnes|151|29.0|0.0|3.0|0.0|0.0|60|taza:140|porción:100|USDA|pollo desmechado|pechuga_cruda:1.4
pollo_presa|Presa de pollo cocida (con piel)|carnes|229|23.3|0.0|14.7|0.0|0.0|84|presa (pierna o muslo):110|USDA|muslo, pierna pernil|pollo_crudo:1.4
pollo_asado|Pollo asado (con piel)|carnes|239|27.3|0.0|13.6|0.0|0.0|82|cuarto de pollo:250|presa:120|USDA||pollo_crudo:1.45
pollo_frito|Pollo frito apanado|carnes|290|24.0|9.0|17.0|0.4|0.0|650|presa:140|USDA|pollo broaster|
pollo_crudo|Pollo entero crudo (con piel)|carnes|215|18.6|0.0|15.1|0.0|0.0|70|libra:500|USDA|gallina|
carne_asada|Carne de res asada (magra)|carnes|200|29.0|0.0|9.0|0.0|0.0|60|porción:120|filete:150|USDA|bistec, lomo, punta de anca, churrasco|carne_cruda:1.4
carne_desmechada|Carne de res desmechada (falda)|carnes|220|29.0|0.0|11.0|0.0|0.0|60|porción:100|taza:140|USDA|carne desmechada, ropa vieja|carne_cruda:1.5
carne_molida_cocida|Carne molida de res cocida|carnes|250|25.9|0.0|15.4|0.0|0.0|72|porción:90|taza:150|USDA|carne molida|carne_molida_cruda:1.3
carne_molida_cruda|Carne molida de res cruda|carnes|215|18.6|0.0|15.0|0.0|0.0|66|libra:500|USDA||
carne_cruda|Carne de res cruda (magra)|carnes|140|22.0|0.0|5.0|0.0|0.0|55|libra:500|USDA|posta, bola, murillo|
sobrebarriga|Sobrebarriga cocida|carnes|260|26.0|0.0|17.0|0.0|0.0|70|porción:130|aprox|falda|carne_cruda:1.5
higado|Hígado de res cocido|carnes|175|26.5|5.2|4.7|0.0|0.0|77|porción:100|USDA|hígado||
costilla_res|Costilla de res cocida|carnes|295|26.0|0.0|21.0|0.0|0.0|60|porción:120|USDA|costilla|carne_cruda:1.3
mondongo|Mondongo cocido|carnes|94|11.7|2.0|4.1|0.0|0.0|68|taza:120|USDA|callo, panza|
chicharron|Chicharrón|carnes|495|22.0|0.0|45.0|0.0|0.0|600|porción:80|unidad pequeña:40|aprox|chicharrón carnudo|
chorizo|Chorizo antioqueño|carnes|300|14.0|3.0|26.0|0.0|0.0|900|unidad:60|aprox|chorizos|
morcilla|Morcilla (rellena)|carnes|260|9.0|20.0|16.0|1.0|0.0|700|unidad:80|aprox|rellena|
cerdo_lomo|Lomo de cerdo asado|carnes|200|27.0|0.0|9.4|0.0|0.0|55|porción:120|USDA|cerdo, chuleta|
costilla_cerdo|Costilla de cerdo cocida|carnes|290|25.0|0.0|21.0|0.0|0.0|80|porción:150|USDA|costillas BBQ|
tocino|Tocino (barriga de cerdo)|carnes|518|9.3|0.0|53.0|0.0|0.0|32|tajada:15|USDA|tocino barriga|
tocineta|Tocineta frita|carnes|541|37.0|1.4|42.0|0.0|0.0|1717|tajada:8|USDA|tocino tajado, bacon|
salchicha|Salchicha|carnes|290|11.0|4.0|26.0|0.0|2.0|1000|unidad:45|USDA|salchicha perro|
jamon|Jamón|carnes|120|18.0|2.0|4.0|0.0|1.0|1100|tajada:20|USDA|jamón de cerdo, jamón de pavo|
lechona|Lechona tolimense|platos|224|21.8|7.3|12.0|2.9|0.5|452|porción:250|TCAC|lechona||
tilapia|Tilapia / mojarra cocida|pescados|128|26.2|0.0|2.7|0.0|0.0|56|filete:120|USDA|mojarra, tilapia|tilapia_cruda:1.25
mojarra_frita|Mojarra frita (parte comestible)|pescados|220|24.0|4.0|12.0|0.0|0.0|300|unidad (comestible):200|aprox|mojarra|tilapia_cruda:1.3
tilapia_cruda|Pescado blanco crudo|pescados|96|20.1|0.0|1.7|0.0|0.0|52|libra:500|USDA|bagre, mojarra cruda|
salmon|Salmón cocido|pescados|206|22.1|0.0|12.4|0.0|0.0|61|filete:150|USDA||
atun_agua|Atún en agua (escurrido)|pescados|116|25.5|0.0|0.8|0.0|0.0|338|lata:120|USDA|atún|
atun_aceite|Atún en aceite (escurrido)|pescados|198|29.1|0.0|8.2|0.0|0.0|416|lata:120|USDA||
camaron|Camarón cocido|pescados|99|24.0|0.2|0.3|0.0|0.0|111|taza:145|USDA|camarones|
sardina|Sardinas en salsa de tomate|pescados|186|21.0|1.0|10.5|0.0|0.5|414|lata:155|USDA||
pescado_frito|Pescado frito apanado|pescados|230|18.0|10.0|13.0|0.5|0.5|400|filete:130|aprox|bagre frito|
huevo|Huevo cocido|huevos|155|12.6|1.1|10.6|0.0|1.1|124|unidad:50|USDA|huevo duro, huevo tibio, huevos|
huevo_frito|Huevo frito|huevos|196|13.6|0.8|14.8|0.0|0.4|207|unidad:46|USDA|huevo estrellado|huevo:1.05
huevo_revuelto|Huevos revueltos|huevos|149|10.0|1.6|11.0|0.0|1.4|145|porción (2 huevos):110|USDA||huevo:0.9
clara_huevo|Clara de huevo|huevos|52|10.9|0.7|0.2|0.0|0.7|166|unidad:33|USDA|claras|
leche_entera|Leche entera|lacteos|61|3.2|4.8|3.3|0.0|5.1|43|vaso:240|taza:240|USDA|leche|
leche_semi|Leche semidescremada|lacteos|50|3.3|4.8|2.0|0.0|5.0|47|vaso:240|USDA|leche deslactosada semidescremada|
leche_descremada|Leche descremada|lacteos|34|3.4|5.0|0.1|0.0|5.0|42|vaso:240|USDA|leche light|
queso_campesino|Queso campesino|lacteos|280|18.0|3.0|22.0|0.0|2.6|600|tajada:30|porción:50|aprox|queso fresco, queso blanco|
queso_doble_crema|Queso doble crema|lacteos|300|22.2|2.2|22.4|0.0|1.0|627|tajada:25|USDA|queso mozzarella, quesillo|
queso_costeno|Queso costeño|lacteos|330|20.0|2.0|27.0|0.0|0.0|1500|porción:40|aprox||
cuajada|Cuajada|lacteos|160|13.0|3.0|11.0|0.0|3.0|50|porción:60|aprox||
queso_parmesano|Queso parmesano|lacteos|431|38.5|4.1|28.6|0.0|0.9|1529|cucharada:5|USDA||
yogur_natural|Yogur natural entero|lacteos|61|3.5|4.7|3.3|0.0|4.7|46|vaso:200|USDA||
yogur_griego|Yogur griego natural (descremado)|lacteos|59|10.2|3.6|0.4|0.0|3.2|36|vaso:150|USDA|griego|
yogur_dulce|Yogur con dulce / bebida láctea|lacteos|90|3.0|15.0|2.0|0.0|14.0|45|vaso:200|botella:150|aprox|yogurt, alpinito|
kumis|Kumis|lacteos|85|3.0|13.0|2.3|0.0|12.0|45|vaso:200|aprox||
mantequilla|Mantequilla|grasas|717|0.9|0.1|81.0|0.0|0.1|643|cucharadita:5|cucharada:14|USDA||
crema_leche|Crema de leche|lacteos|300|2.2|3.0|31.0|0.0|3.0|40|cucharada:15|aprox||
arequipe|Arequipe|azucares|315|6.8|55.4|7.4|0.0|49.7|129|cucharada:20|USDA|dulce de leche|
leche_condensada|Leche condensada|azucares|321|7.9|54.4|8.7|0.0|54.4|127|cucharada:20|USDA||
suero_costeno|Suero costeño|lacteos|200|4.0|5.0|18.0|0.0|4.0|500|cucharada:15|aprox|suero atollabuey|
helado|Helado de crema|azucares|207|3.5|23.6|11.0|0.7|21.2|80|bola:70|USDA||
aceite|Aceite vegetal|grasas|884|0.0|0.0|100.0|0.0|0.0|0|cucharadita:4.5|cucharada:13.6|USDA|aceite de girasol, aceite de canola|
manteca|Manteca de cerdo|grasas|902|0.0|0.0|100.0|0.0|0.0|0|cucharada:13|USDA||
margarina|Margarina|grasas|717|0.2|0.7|80.7|0.0|0.0|700|cucharadita:5|USDA||
mayonesa|Mayonesa|grasas|680|1.0|0.6|75.0|0.0|0.6|635|cucharada:14|USDA||
mani|Maní tostado|grasas|585|23.7|21.5|49.7|8.0|4.2|6|puñado:30|cucharada:9|USDA|cacahuate|
mantequilla_mani|Mantequilla de maní|grasas|588|25.1|19.6|50.4|6.0|9.2|459|cucharada:16|USDA||
almendras|Almendras|grasas|579|21.2|21.6|49.9|12.5|4.4|1|puñado:28|unidad:1.2|USDA||
nueces|Nueces|grasas|654|15.2|13.7|65.2|6.7|2.6|2|puñado:28|USDA||
chia|Semillas de chía|grasas|486|16.5|42.1|30.7|34.4|0.0|16|cucharada:12|USDA|chía|
azucar|Azúcar|azucares|387|0.0|100.0|0.0|0.0|100.0|1|cucharadita:4|cucharada:12|USDA||
panela|Panela|azucares|380|0.4|95.0|0.1|0.0|90.0|30|cucharada rallada:12|bloque:500|aprox|piloncillo|
miel|Miel de abejas|azucares|304|0.3|82.4|0.0|0.2|82.1|4|cucharada:21|USDA||
chocolate_mesa|Chocolate de mesa (con azúcar)|azucares|450|5.0|68.0|20.0|7.0|55.0|10|pastilla:20|aprox|chocolate en pastilla|
cacao_polvo|Cacao en polvo sin azúcar|azucares|228|19.6|57.9|13.7|37.0|1.8|21|cucharada:5|USDA||
mermelada|Mermelada|azucares|278|0.4|68.9|0.1|1.1|48.5|32|cucharada:20|USDA||
chocolatina|Chocolatina con leche|azucares|535|7.7|59.4|29.7|3.4|51.5|79|unidad:30|USDA|chocolate|
gaseosa|Gaseosa|bebidas|42|0.0|10.6|0.0|0.0|10.6|4|lata:350|botella personal:400|vaso:250|USDA|coca cola, colombiana, postobón|
gaseosa_cero|Gaseosa sin azúcar|bebidas|0|0.0|0.0|0.0|0.0|0.0|10|lata:350|USDA|zero, light|
cerveza|Cerveza|bebidas|43|0.5|3.6|0.0|0.0|0.0|4|lata:330|botella:330|USDA|pola, aguila, poker, club|
aguardiente|Aguardiente|bebidas|200|0.0|10.0|0.0|0.0|10.0|0|trago:30|aprox|guaro|
ron|Ron|bebidas|231|0.0|0.0|0.0|0.0|0.0|1|trago:30|USDA||
vino|Vino tinto|bebidas|85|0.1|2.6|0.0|0.0|0.6|4|copa:150|USDA||
jugo_naranja|Jugo de naranja natural|bebidas|45|0.7|10.4|0.2|0.2|8.4|1|vaso:240|USDA||
tinto|Café tinto (sin azúcar)|bebidas|2|0.1|0.0|0.0|0.0|0.0|2|pocillo:120|taza:240|USDA|café|
aguapanela|Aguapanela|bebidas|38|0.0|9.5|0.0|0.0|9.0|3|vaso:240|pocillo:150|aprox|agua de panela|
avena_bebida|Avena (bebida láctea)|bebidas|95|3.0|16.0|2.0|0.5|11.0|50|vaso:250|aprox|avena alpina|
malta|Malta|bebidas|55|0.3|13.5|0.0|0.0|10.0|10|botella:330|aprox|pony malta|
agua|Agua|bebidas|0|0.0|0.0|0.0|0.0|0.0|0|vaso:240|USDA||
papas_paquete|Papas fritas de paquete|snacks|536|7.0|53.0|34.6|4.4|0.3|525|paquete pequeño:30|paquete mediano:45|USDA|margaritas, chips|
platanitos|Platanitos de paquete|snacks|520|2.0|60.0|30.0|3.0|2.0|300|paquete:35|aprox||
empanada|Empanada de maíz frita (carne y papa)|snacks|260|7.0|28.0|13.0|2.0|1.0|330|unidad:70|aprox|empanadas|
pastel_pollo|Pastel de pollo (hojaldre)|snacks|330|9.0|30.0|19.0|1.0|3.0|450|unidad:110|aprox||
dedito_queso|Dedito de queso|snacks|340|10.0|32.0|19.0|1.0|3.0|500|unidad:50|aprox|palito de queso|
pizza|Pizza de queso|snacks|266|11.4|33.0|10.0|2.3|3.6|598|porción:107|USDA||
hamburguesa|Hamburguesa sencilla|snacks|250|13.0|26.0|10.0|1.5|5.0|500|unidad:220|USDA||
perro_caliente|Perro caliente|snacks|270|9.5|25.0|15.0|1.0|4.0|700|unidad:180|aprox|perro||
obleas|Oblea con arequipe|azucares|360|5.0|65.0|9.0|0.5|45.0|100|unidad:45|aprox|oblea|
natilla|Natilla|azucares|170|2.0|32.0|4.0|0.5|20.0|40|porción:100|aprox||
arroz_leche|Arroz con leche|azucares|150|3.5|26.0|3.5|0.2|15.0|50|porción:150|aprox||
mazamorra|Mazamorra antioqueña (con leche)|bebidas|85|2.5|15.0|1.5|1.0|3.0|25|vaso:250|aprox||
sal|Sal|condimentos|0|0.0|0.0|0.0|0.0|0.0|38758|cucharadita:6|pizca:0.5|USDA||
salsa_tomate|Salsa de tomate (ketchup)|condimentos|101|1.0|27.4|0.1|0.3|21.3|907|cucharada:17|sobre:10|USDA|ketchup|
salsa_rosada|Salsa rosada|condimentos|400|1.0|10.0|40.0|0.0|8.0|700|cucharada:15|aprox||
aji|Ají casero|condimentos|20|0.8|4.0|0.2|1.0|2.0|300|cucharada:15|aprox||
caldo_pollo|Caldo de pollo (líquido)|condimentos|7|0.6|0.4|0.3|0.0|0.2|340|taza:240|USDA|consomé|
platos_ajiaco|Ajiaco santafereño (solo sopa, ICBF)|platos|69|6.4|9.1|0.8|2.2|1.0|250|plato:450|TCAC|ajiaco||
platos_bandeja|Bandeja paisa (ICBF)|platos|198|11.7|13.0|11.0|2.5|1.5|400|plato:800|TCAC|bandeja||
platos_mazamorra_chiquita|Mazamorra chiquita (ICBF)|platos|105|9.8|5.1|5.0|3.0|0.5|250|plato:400|TCAC||
platos_cuy|Cuy asado (ICBF)|platos|178|24.4|2.5|7.8|1.1|0|300|porción:250|TCAC|cuy||
platos_mute|Mute santandereano (ICBF)|platos|101|8.1|3.5|6.1|1.9|0.5|300|plato:450|TCAC|mute||
platos_tamal|Tamal tolimense (ICBF)|platos|108|5.7|12.7|3.8|4.0|0.5|300|unidad:550|media unidad:275|TCAC|tamal||
platos_viudo|Viudo de bocachico (ICBF)|platos|117|13.2|6.7|4.1|1.1|0.5|250|plato:500|TCAC|viudo de pescado||
platos_atollado|Arroz atollado (ICBF)|platos|109|10.1|7.5|4.3|1.7|0.5|300|plato:400|TCAC||
platos_sancocho_gallina|Sancocho valluno de gallina (ICBF)|platos|113|16.4|2.9|4.0|1.3|0.5|250|plato:500|TCAC|sancocho||
platos_friche|Friche de chivo (ICBF)|platos|238|29.7|0.8|12.9|0.8|0|400|porción:200|TCAC|friche||
platos_mote_queso|Mote de queso (ICBF)|platos|89|5.4|8.0|3.9|2.2|0.5|300|plato:400|TCAC|mote||
platos_rondon|Rondón (ICBF)|platos|126|8.2|18.5|2.1|1.7|1.0|300|plato:450|TCAC|rondon, rundown||
platos_pisillo|Pisillo de chigüiro (ICBF)|platos|211|26.0|5.8|9.3|1.1|0.5|400|porción:150|TCAC|pisillo||
platos_arroz_clavado|Arroz clavado (ICBF)|platos|179|6.4|25.9|5.5|0.5|0.5|300|plato:300|TCAC||
platos_sancocho_bagre|Sancocho de bagre (ICBF)|platos|125|16.9|0.1|6.3|1.5|0.5|300|plato:500|TCAC|sancocho de pescado||
platos_piangua|Sudao de piangua (ICBF)|platos|175|18.4|1.6|10.6|1.1|0.5|300|porción:250|TCAC|piangua||
platos_pirarucu|Chicharrón de pirarucú (ICBF)|platos|212|22.0|7.9|10.3|0.8|0|300|porción:150|TCAC|pirarucu||
comino|Comino / color (mezcla)|condimentos|300|15.0|40.0|18.0|10.0|2.0|150|cucharadita:2|aprox|color, achiote|
"""
