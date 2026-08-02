# Hotfix V19.3.0 RC2

## Problema corregido

El bundle clásico `js/app.js` utilizaba `APP_VERSION` durante la inicialización, pero `scripts/build-classic.mjs` no insertaba el contenido de `js/app-config.js` en el bundle generado.

## Corrección

- Se inserta `app-config.js` al principio del bundle clásico.
- Se añade una prueba de regresión que exige que `APP_VERSION` exista y aparezca antes de su uso.
- Se actualiza la versión y la caché a `19.3.0-rc.2`.
