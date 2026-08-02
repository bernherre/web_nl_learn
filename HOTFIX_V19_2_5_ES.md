# Hotfix V19.2.5

## Problema

Al copiar V19.2.4 sobre un checkout anterior de GitHub podía permanecer el archivo legado
`tests/v18-verbs.test.js`. Ese test esperaba la antigua marca `id="verb-feature"` y textos de una
interfaz de verbos que ya no corresponde con la arquitectura actual.

## Corrección

- Se incluye de nuevo `tests/v18-verbs.test.js` para sobrescribir de forma segura la prueba antigua.
- La prueba valida los filtros reales de la interfaz actual y el panel `verb-detail`.
- Se valida la presencia de las secciones léxicas actuales y el orden del Atlas en la bundle clásica.
- No se añadió una marca HTML ficticia únicamente para satisfacer una prueba obsoleta.

## Alcance

No cambia contenido pedagógico, verbos, ejercicios, C1/C2 ni navegación. Es una corrección de
compatibilidad para repositorios actualizados mediante extracción del ZIP sobre archivos existentes.
