# Hotfix V19.2.6

## Problema corregido

El listado del Atlas de Verbos mostraba como texto principal una categoría semántica genérica, por ejemplo `handeling of activiteit`, aunque la ficha detallada ya contenía una definición lexicográfica específica y revisada.

## Solución

- La tarjeta de cada verbo reutiliza ahora `verb.meaning`, la misma definición validada que aparece al abrir la ficha.
- La categoría semántica y el auxiliar permanecen como metadatos secundarios.
- Las definiciones se muestran en un máximo de dos líneas para conservar una interfaz compacta y legible.
- Si una ficha no estuviera revisada, la interfaz lo indica expresamente y no inventa una definición.
- Se añadió una prueba de regresión para evitar que el listado vuelva a usar la categoría genérica como definición principal.
