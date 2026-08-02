# Changelog V18.8.0

## Added

- Primera tanda alfabética de 98 fichas nuevas, desde `aaien` hasta `accepteren`, combinada con dos fichas anteriores para cubrir los primeros 100 lemas.
- `data/initial-verb-definitions.json`.
- `scripts/generate-initial-verb-review.mjs`.
- `js/verb-initial-review.js`.
- Pruebas específicas en `tests/v18-8-first-100-verbs.test.js`.
- Metadatos de lote y registro lingüístico en el grafo.

## Fixed

- Inclusión efectiva de la nueva capa antes de `main.js` en la bundle clásica.
- Formas irregulares y separables de la primera tanda.
- Formas reflexivas completas de `aanmatigen`.
- Notas de sinonimia de `aandoen` y `aannemen`.
- Cache-busting y Service Worker actualizados a `18.8.0`.

## Validation

- 97/97 pruebas automatizadas.
- 69 controles de contenido: 68 PASS, 1 WARNING, 0 FAIL.
- 190/1.886 verbos revisados; 1.696 pendientes declarados.
