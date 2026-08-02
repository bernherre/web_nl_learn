# QA report — web_nl_learn V19.3 RC3

## Resultado

- `npm run check`: aprobado.
- Pruebas automatizadas: 146/146.
- Auditoría léxica: 2.773 tarjetas comprobadas; 0 formas genéricas bloqueantes.
- Validación de contenido: 73/73; 0 advertencias; 0 fallos.
- Bundle clásico: `isReliableDefinition()` e `isReliableExample()` definidas antes de `highlightedWordDetails()`.
- Versión de aplicación, assets y service worker: `19.3.0-rc.3`.

## Regresión cubierta

La prueba `de lexicale kwaliteitsfuncties staan vóór gebruik in de klassieke browserbundle` falla si cualquiera de las dos funciones no existe en `js/app.js` o aparece después de su primer uso.

## Nota

La comprobación automatizada se centra en build, sintaxis, orden de dependencias, contenido, auditoría y regresiones.
