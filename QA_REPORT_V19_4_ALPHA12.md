# QA Report — V19.4 Alpha 12

## Alcance

Alpha 12 añade un **Leerpad guiado** como capa de navegación sobre la aplicación existente. No reemplaza ni duplica las páginas de curso, gramática, Atlas de Verbos, preguntas, ejercicios ni Kennisgraaf.

Base funcional: **V19.4 Alpha 11**.

## Leerpad

- 56 rutas guiadas generadas desde contenido ya existente.
- Cobertura por nivel:
  - A0: 4 rutas
  - A1: 8 rutas
  - A2: 8 rutas
  - B1: 9 rutas
  - B2: 9 rutas
  - C1: 9 rutas
  - C2: 9 rutas
- Cada ruta puede recorrer, según disponibilidad real del contenido:
  1. situación/contexto;
  2. palabras con definición existente;
  3. gramática;
  4. verbos;
  5. diálogo;
  6. ejercicios existentes;
  7. cierre y navegación al Kennisgraaf.
- Los ejercicios enlazados provienen de `exerciseBank`; no se crea una segunda copia de la batería.
- Ante un error se muestra la explicación existente y accesos a la gramática, verbo o nodo exacto del Kennisgraaf cuando procede.
- Al abrir una explicación fuera del Leerpad aparece `Terug naar je Leerpad` para volver al punto de trabajo.

## Palabras y traducción

Cada palabra que se muestra como tarjeta dentro del Leerpad incluye:

- forma escrita;
- escucha normal;
- escucha lenta;
- definición ya existente en el lexicon central o en la lección fuente;
- ejemplo existente cuando está disponible;
- botón `Vertaal definitie`.

La ayuda de traducción:

- traduce únicamente el texto solicitado;
- abre una herramienta web externa en una pestaña nueva;
- no usa API;
- no usa backend;
- no almacena traducciones;
- no convierte el sitio en una aplicación multilingüe;
- conserva la web como sitio estático.

La preferencia de idioma de apoyo se guarda solo en `localStorage`.

## Kennisgraaf

Después de regenerar el grafo:

- nodos: **27.346**;
- relaciones: **91.063**;
- nodos `learning_path`: **56**;
- relaciones salientes desde rutas: **907**.

Relaciones específicas del Leerpad:

- `guides_through_theme`: 56
- `uses_exercise`: 168
- `uses_grammar_focus`: 108
- `applies_grammar`: 60
- `uses_verb`: 361
- `uses_lexeme`: 42
- `has_level`: 56
- `part_of_collection`: 56

La navegación es bidireccional: una ruta puede abrir su nodo del Kennisgraaf y un nodo `learning_path` puede volver a abrir esa ruta concreta.

## Protección de contenido existente

Comparación directa contra Alpha 11: no se modificó ningún archivo fuente de:

- Atlas de Verbos;
- `Zinspositie en gebruik`;
- gramática;
- preguntas;
- ejercicios;
- lexicon A0–A2;
- temas A0–C2;
- contenido profesional/técnico.

Los cambios se limitan a navegación Leerpad, UI, integración del Kennisgraaf, build, Service Worker y metadatos/documentación de versión.

## Tipografía y lectura

- La tipografía global se resuelve únicamente con fuentes locales/del sistema; no se descargan webfonts.
- `css/tokens.css` es la fuente central para `--font-body` y `--font-display`; `styles.css` ya no redefine esos tokens.
- Texto: `Segoe UI Variable Text`, `Aptos`, `system-ui` y fallbacks equivalentes.
- Títulos: `Aptos Display`, `Segoe UI Variable Display`, `Trebuchet MS` y fallbacks del sistema.
- Interlineado de lectura: 1.62; títulos con espaciado menos comprimido para mejorar legibilidad.
- `reference.html` usa la misma estrategia tipográfica sin dependencias externas.

## Paleta visual

- Se mantiene la identidad cromática existente: verde, naranja, amarillo, azul y violeta.
- La paleta base se suaviza con fondos cálidos, acentos menos saturados y sombras de menor opacidad.
- No se cambian layout, jerarquía, componentes, rutas ni contenido pedagógico.
- Los tokens de color para modo claro, oscuro, alto contraste y `color-safe` están centralizados en `css/tokens.css`.
- Los componentes principales consumen variables semánticas, incluida la barra lateral, estados de nivel y feedback correcto/error.
- Comprobación de contraste en pares principales:
  - claro: texto/superficie 12.17:1; texto secundario/superficie 4.93:1; acento/soft 4.86:1; navegación lateral 8.70:1;
  - oscuro: texto/superficie 13.43:1; texto secundario/superficie 7.41:1; acento/soft 5.51:1; navegación lateral 11.45:1.

## Ejecutor local

- `run-local.bat` abre `http://localhost:8000`.
- El servidor se inicia con `py -m http.server 8000`.
- `npm run serve` usa también el puerto 8000 mediante `python3 -m http.server 8000`.

## Validación automática

`npm run check` completado correctamente:

- **181/181 tests**;
- auditoría léxica: 2.773 tarjetas, 0 formas de catálogo bloqueantes;
- lexicon central: 1.647 entradas, A0–A2 sin `controle nodig`;
- auditoría curricular: aprobada;
- validación de contenido: **81/81** controles;
- 0 errores;
- 0 advertencias.

## Smoke HTTP

Servidor estático local en `http://localhost:8000`:

- `index.html`: HTTP 200
- `css/tokens.css?v=19.4.0-alpha.12`: HTTP 200
- `css/typography.css?v=19.4.0-alpha.12`: HTTP 200
- `js/app.js?v=19.4.0-alpha.12`: HTTP 200
- `data/content-knowledge-graph.json`: HTTP 200

No se declara una prueba visual automatizada de navegador; el entorno no se usó para validar layout mediante Chromium/Playwright.
