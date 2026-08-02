# Hotfix V19.3 RC3

## Problema

El bundle clásico `js/app.js` utilizaba `isReliableDefinition()` e `isReliableExample()` sin incluir la implementación de `js/lexical-quality.js`. Los módulos ES funcionaban, pero la versión clásica cargada por `index.html` fallaba durante la inicialización.

## Causa

`scripts/build-classic.mjs` leía `lexical-quality.js`, pero omitía `${lexicalQuality}` en la plantilla final del bundle.

## Corrección

- Se inserta la capa de calidad léxica inmediatamente después de `app-config.js` y antes de cualquier uso.
- Se añade una prueba de regresión que exige ambas funciones y comprueba el orden de definición.
- La etiqueta visible de release se deriva ahora de `package.json`, evitando que nuevas RC sigan mostrando `V19.3 RC1`.
- Se actualizan versión, caché y assets a `19.3.0-rc.3`.
