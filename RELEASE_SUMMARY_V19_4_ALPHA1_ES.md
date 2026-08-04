# web_nl_learn V19.4 Alpha 1

## Objetivo de la entrega

Esta versión inicia la migración hacia un diccionario central sin esconder la deuda lingüística. La primera entrega cubre completamente A0 y el tema **Hallo** de A1, manteniendo `controle nodig` únicamente donde todavía falta contenido editorial real.

## Diccionario central

Se añadió `js/lexicon.js` como fuente única para definiciones y ejemplos reutilizables. Cada entrada contiene:

- término canónico;
- definición específica en neerlandés;
- ejemplo contextual;
- nivel MCER;
- tipo lingüístico o función comunicativa;
- estado editorial;
- trazabilidad de la revisión.

La interfaz consulta primero este diccionario. Solo después usa contenido local previamente validado, vocabulario visual o el Atlas de Verbos. El fallback `controle nodig` permanece como última opción.

## Enriquecimiento realizado

- 178 términos únicos de A0 revisados y centralizados.
- 145 términos del tema A1 **Hallo** cubiertos por el diccionario central.
- 82 entradas nuevas específicas para datos personales, familia, preguntas, verbos y actos comunicativos de A1.
- 42 definiciones validadas de versiones anteriores preservadas, entre ellas `de opslag` y `de schade`.
- 302 entradas centrales en total.

## Deuda visible, no oculta

La auditoría actual informa:

| Nivel | Términos únicos | Explicación fiable | Control necesario |
|---|---:|---:|---:|
| A0 | 178 | 178 | 0 |
| A1 | 966 | 300 | 666 |
| A2 | 917 | 182 | 735 |

Estas cifras se calculan por término único. Las tarjetas pendientes no reciben definiciones automáticas ni ejemplos ficticios.

## Knowledge Graph

El generador incorpora cada lexema central como nodo canónico y crea relaciones desde temas, tarjetas y vocabulario destacado:

- 25.944 nodos;
- 84.517 relaciones;
- 302 lexemas centrales;
- 0 controles bloqueantes del grafo.

## Build y prevención de regresiones

`scripts/build-classic.mjs` ahora utiliza un único manifiesto ordenado para leer y concatenar los 27 archivos fuente. Esto elimina la causa estructural de los errores anteriores en los que un archivo era leído, pero no incluido en `js/app.js`.

## Validación

- 158/158 pruebas automatizadas.
- 81/81 controles de contenido.
- Auditoría léxica general sin bloqueos.
- Auditoría del diccionario central sin bloqueos.
- Auditoría curricular sin bloqueos.
- Sintaxis de fuentes y bundle validada con Node.

El smoke test visual con Chromium no pudo completarse en el contenedor por limitaciones de DBus/zygote del entorno; no se afirma que esa prueba haya pasado.
