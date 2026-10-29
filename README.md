# Plato

App Android personal para contar calorías y planear comidas con cocina colombiana.

- **Diario**: desayuno, media mañana, almuerzo, onces y cena; agua, ejercicio y ayuno intermitente.
- **Registro**: búsqueda en 843 alimentos y 86 recetas, foto del plato o descripción con IA (Gemini), código de barras (ML Kit + Open Food Facts) y registro rápido.
- **Plan semanal** ajustado a calorías y proteína, con cambio de comidas, preferencias y **lista de mercado** en cantidades crudas.
- **Progreso**: peso, medidas, IMC, promedio semanal, racha y fecha estimada de meta.
- **Asistente** de nutrición con el contexto de tu día.
- Recordatorios, widget de pantalla de inicio, modo oscuro y copia de seguridad.

## Datos
- Tabla de Composición de Alimentos Colombianos, ICBF 2015 (`data/icbf/`, extraída con `data/parse_tcac.py`).
- "Caracterización y composición nutricional de 18 preparaciones tradicionales", ICBF 2017.
- USDA FoodData Central (SR Legacy) para alimentos genéricos.
- Las recetas se calculan sumando sus ingredientes (`data/build_data.py`).

## Compilar
`python3 data/build_data.py && python3 web/build.py` arma la interfaz; GitHub Actions compila el APK y lo publica en Releases.
