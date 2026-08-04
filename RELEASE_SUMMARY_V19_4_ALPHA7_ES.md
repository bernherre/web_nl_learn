# V19.4 Alpha 7 — reconstrucción segura desde Alpha 2

Alpha 7 restaura el principio correcto del proyecto: **arreglar contenido sin reducir el producto**.

## Qué se conserva

- Las 1.886 fichas verbales visibles.
- La estructura completa de cada ficha.
- A0 y A1 sin cambios.
- Definiciones, sinónimos, notas, ejemplos generales, conjugaciones y perfectum de Alpha 2.
- Los 27.289 nodos y 90.155 relaciones del Knowledge Graph.

## Qué cambia

Solo cambia el texto de las tarjetas de `Zinspositie en gebruik` en fichas seleccionadas de A2, B1 y B2. La cuadrícula mantiene sus mismas tarjetas y su mismo orden.

- A2: todas las series con formas desnudas quedan contextualizadas.
- B2: todas las series con formas desnudas quedan contextualizadas.
- B1: primer lote de 26 fichas corregido sin retirar el resto.
- C1: 8 verbos visibles.
- C2: 4 verbos visibles.

## Protección contra regresiones

Una batería dedicada falla si:

- desaparece una ficha;
- cambia A0 o A1;
- se modifica cualquier sección distinta de `Zinspositie en gebruik`;
- cambia la cantidad o el orden de las tarjetas;
- la bundle renderiza antes de aplicar las correcciones.

## Deuda pendiente

La revisión contextual de B1 debe continuar por lotes. Alpha 7 no la oculta ni reduce el Atlas para mejorar métricas.
