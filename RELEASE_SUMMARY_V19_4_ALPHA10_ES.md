# V19.4 Alpha 10 — Reparación de `Zinspositie en gebruik`

Alpha 10 conserva las 1.886 fichas del Atlas y mantiene intactas todas las secciones distintas de `Zinspositie en gebruik`.

## Incluido

- Revisión explícita de las 39 fichas A2.
- Procesamiento de las 20 fichas B2.
- Ampliación segura de la corrección contextual en B1 sin retirar contenido.
- 8 verbos C1 y 4 verbos C2 visibles, ordenados y conectados.
- Imperativos de la sección derivados externamente, sin añadir propiedades a las fichas.
- Kennisgraph regenerado con 1.886 verbos, 27.289 nodos y 90.155 relaciones.
- Corrección de Service Worker heredada de Alpha 9 para cargar los archivos grandes del grafo directamente desde la red.

## Protecciones

- La estructura y orden de las tarjetas no cambian.
- A0 y A1 se conservan.
- No se filtran ni eliminan verbos.
- Definiciones, conjugaciones, sinónimos, notas y ejemplos generales permanecen intactos.
- Las pruebas comparan cada ficha antes y después fuera de `sentencePatterns`.

## QA

- 174/174 pruebas.
- 81/81 controles de contenido.
- 0 errores y 0 advertencias en la validación de contenido.
