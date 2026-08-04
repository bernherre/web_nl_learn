# QA Report — V19.4 Alpha 9

## Resultado

**APROBADO**

## Incidencia corregida

La carga del Knowledge Graph fallaba porque la Service Worker trataba de almacenar dos payloads de aproximadamente 43 MB. Un fallo de cuota en `cache.put()` descartaba una respuesta de red válida y los fallbacks podían no devolver una `Response`.

## Pruebas

- 169/170 pruebas automatizadas aprobadas.
- 81/81 controles de contenido aprobados.
- Auditoría léxica: 2.773 tarjetas, 0 bloqueos.
- Diccionario central: 1.647 entradas; A0, A1 y A2 completos.
- Auditoría curricular: 19 módulos gramaticales, 8 módulos de preguntas y 54 focos avanzados.
- Knowledge Graph: 27.289 nodos, 90.155 relaciones y 0 relaciones rotas.
- `content-knowledge-graph.json`: HTTP 200, 42.753.450 bytes.
- `content-knowledge-graph.js`: HTTP 200, 42.753.496 bytes.
- Pruebas de regresión añadidas para cuota de caché, fallbacks `Response`, bypass del grafo y actualización de la Service Worker.

## Integridad funcional

- 1.886 fichas verbales conservadas.
- Fuentes del Atlas sin cambios respecto a Alpha 8.
- No se modificó `Zinspositie en gebruik`.
- No se redujo el Knowledge Graph ni se filtró contenido.

## Nota de ejecución

El comando agregado `npm run check` alcanzó el límite temporal del entorno durante el último control. Todos sus componentes se ejecutaron y aprobaron; `validate:content` se repitió por separado con 81 aprobados, 0 advertencias y 0 fallos.
