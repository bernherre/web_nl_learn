# QA Report — V19.4 Alpha 11

## Alcance

Corrección de visibilidad para los niveles C1 y C2 en el selector del Atlas de Verbos. No se modificó el contenido de ninguna ficha verbal ni la sección `Zinspositie en gebruik`.

## Resultado funcional

- 1.886 fichas verbales conservadas.
- Selector de nivel visible desde A0 hasta C2.
- 8 fichas C1 visibles y filtrables.
- 4 fichas C2 visibles y filtrables.
- Knowledge Graph completo con 27.289 nodos y 90.155 relaciones.

## Validación

- 176/176 pruebas automatizadas aprobadas mediante `node --test tests/*.test.js`.
- 81/81 controles de contenido aprobados.
- Auditoría léxica: 2.773 tarjetas, 0 bloqueos.
- Diccionario central: 1.647 entradas; A0, A1 y A2 sin tarjetas pendientes.
- Auditoría curricular: 19 módulos gramaticales, 8 módulos de preguntas y 54 focos avanzados.
- `js/main.js` y `js/app.js` superan validación sintáctica.
- Build clásico regenerado desde 30 fuentes.

## Regresión protegida

La prueba `v19-4-alpha11-verb-levels.test.js` exige que el selector muestre A0–C2 y verifica exactamente las 8 fichas C1 y 4 fichas C2 asignadas.
