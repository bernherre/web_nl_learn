# Hotfix V19.2.2

## Error corregido

La bundle clásica `js/app.js` utilizaba `v19Exercises` antes de incluir el contenido de `js/v19-learning-experience.js`. Esto provocaba al abrir la aplicación:

```text
ReferenceError: v19Exercises is not defined
```

## Causa

`scripts/build-classic.mjs` leía el archivo V19, pero omitía `${v19LearningExperience}` en la concatenación final antes de `${exercises}`.

## Corrección

- El contenido V19 se inserta antes del banco de ejercicios.
- Se añadió una prueba de orden para `v19Exercises` y `v19PracticeScenarios`.
- La validación de contenido comprueba también ambas definiciones antes de su primer uso.
- Se incrementó el cache-busting y el service worker a V19.2.2.
