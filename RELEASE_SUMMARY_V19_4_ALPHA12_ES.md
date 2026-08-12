# V19.4 Alpha 12 — Leerpad guiado

Alpha 12 convierte el Leerpad existente en un recorrido pedagógico real sin sustituir ninguna sección de la aplicación.

## Qué añade

- 56 rutas guiadas A0–C2 construidas a partir de los temas ya existentes.
- Navegación paso a paso por situación, vocabulario disponible, gramática, verbos, diálogo y ejercicios.
- Palabras con lectura, audio normal/lento, definición y ejemplo existentes.
- Traducción opcional de **solo la definición** mediante una herramienta web externa, sin API ni backend.
- Idioma de apoyo guardado localmente sin almacenar traducciones.
- Feedback de ejercicios con enlace a la explicación gramatical, ficha verbal o nodo del Kennisgraaf.
- Botón de retorno al Leerpad después de consultar una explicación.
- Integración bidireccional Leerpad ↔ Kennisgraaf.
- Tipografía global más amable y legible, basada exclusivamente en fuentes locales/del sistema y centralizada en design tokens.
- Paleta visual más suave y cálida, con los mismos colores temáticos pero menos saturados y sombras más discretas.
- Modos claro, oscuro, alto contraste y `color-safe` centralizados en los design tokens.
- Ejecutor local para Windows con `py -m http.server 8000`.

## Lo que no cambia

- No se reemplaza ninguna página existente.
- No se duplica contenido curricular.
- No se modifica el Atlas de Verbos ni `Zinspositie en gebruik`.
- No se modifican gramática, preguntas ni ejercicios.
- A0–A2 y el lexicon central permanecen intactos.
- La aplicación continúa siendo completamente estática.

## Kennisgraaf

- 27.346 nodos
- 91.063 relaciones
- 56 nodos de rutas guiadas
- 907 relaciones desde esas rutas hacia nivel, tema, lexemas, gramática, verbos y ejercicios

## QA

- 181/181 tests
- 81/81 controles de contenido
- auditorías léxica, curricular y del lexicon central aprobadas
- 0 errores
- 0 advertencias
