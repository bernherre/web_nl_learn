# Hotfix V19.2.4 — carga de C1/C2 en el bundle clásico

## Error corregido

La versión V19.2.3 incluía `js/advanced-level-content.js` y el script de compilación lo leía, pero `scripts/build-classic.mjs` no insertaba su contenido en `js/app.js`. Por eso el navegador encontraba `spiralLevelData()` antes de que existiera `advancedSpiralLevels` y detenía la inicialización.

## Corrección

- `advancedLevelContent` se inserta inmediatamente después de `spiralContent` y antes de `main.js`.
- La prueba C1/C2 ahora exige que la definición exista (`index >= 0`) antes de comprobar el orden.
- Se añadió una segunda prueba de regresión en la suite central del bundle.
- Se actualizó la versión y la caché del service worker a V19.2.4.

## Garantía

No se modificó ni eliminó contenido pedagógico, ejercicios, imágenes o verbos. El cambio afecta exclusivamente la composición del bundle, la prevención de regresiones y el versionado de caché.
