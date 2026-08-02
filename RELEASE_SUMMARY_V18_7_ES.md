# Resumen de entrega V18.7 — grafo de conocimiento

La V18.7 añade un **grafo semántico de todo el contenido estructurado** sin reemplazar ni modificar las rutas iniciales A0–B2, la navegación, la interfaz principal o el atlas de verbos.

## Qué permite encontrar

- La definición validada de un verbo y la capa de significado a la que pertenece.
- Sinónimos conectados a una **acepción concreta**, no al verbo completo de manera indiscriminada.
- Temas, explicaciones gramaticales, ejemplos, lecturas y ejercicios donde se utiliza una palabra.
- Ejercicios relacionados por nivel, tipo y tema.
- Definiciones genéricas o ausentes, sinónimos faltantes, ejemplos faltantes, notas de uso pendientes y patrones todavía no revisados.
- Contenido aislado o con pocas conexiones, para priorizar la revisión pedagógica.

## Cobertura actual

- **17.511 nodos** y **64.590 relaciones**.
- **47 colecciones de origen**.
- **1.886 verbos** y **8.024 ejercicios**.
- **56 temas**, incluidos los nueve temas en espiral A1–B2.
- Gramática, preguntas, adverbios, preposiciones, verbos separables, conectores, expresiones idiomáticas, lectura, escucha, escritura, matemáticas, física, software y vocabulario profesional.

## Control de definiciones y sinónimos

Los 92 verbos revisados se modelan así:

`verbo → significado → sinónimo / uso / ejemplo`

Esto evita afirmar que dos palabras son intercambiables en todos los contextos. Los otros **1.794 verbos** aparecen en una cola de revisión con cinco controles explícitos; no reciben definiciones ni sinónimos inventados.

`aaien`, por ejemplo, queda visible como pendiente de definición específica, sinónimos, ejemplos, nota de uso y revisión de patrones generados.

## Integración

- Nueva entrada **Kennisgraaf** en la navegación lateral.
- Búsqueda por texto, tipo de contenido y nivel.
- Modos de exploración para significado y sinónimos, lugares de uso, ejercicios y errores.
- Visualización local del vecindario del nodo seleccionado.
- Panel detallado con relaciones y acceso a las páginas existentes.
- Carga diferida para no ralentizar el inicio.
- Funciona mediante servidor web y dispone de una alternativa local para abrir `index.html` directamente desde el disco.

## Validación

- **90 de 90 pruebas automatizadas superadas**.
- **64 comprobaciones de contenido**: 63 correctas, una advertencia declarada y cero errores.
- **0 relaciones rotas**.
- La advertencia corresponde a los 1.794 verbos que todavía requieren revisión lexicográfica manual.

La V18.6 original se conserva; el trabajo se realizó en una copia independiente V18.7.
