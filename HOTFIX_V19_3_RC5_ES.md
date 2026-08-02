# Hotfix V19.3 RC5

## Problema corregido

La bundle clásica eliminaba las importaciones ES Modules de `main.js` sin conservar los alias declarados con `as`. Por eso `questionTopics as baseQuestionTopics` y `questionPractice as baseQuestionPractice` desaparecían durante el build, aunque los módulos originales funcionaban correctamente.

## Solución

- `build-classic.mjs` conserva ahora de forma genérica todos los alias de importaciones nombradas.
- La bundle genera explícitamente `const baseQuestionTopics = questionTopics;` y `const baseQuestionPractice = questionPractice;` antes de construir las colecciones combinadas C1/C2.
- Se añadió una prueba de regresión que exige la existencia y el orden correcto de ambos alias.
- La versión, caché y referencias de assets se sincronizan como V19.3 RC5.

## Validación

El pipeline completo `npm run check` debe ejecutarse sin errores antes del empaquetado.
