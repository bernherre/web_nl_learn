# Resumen de entrega V18.8 — primeros 100 verbos validados

V18.8 completa una primera tanda verificable del atlas sin cambiar la estructura inicial, las rutas A0–B2, la navegación ni la interfaz existente.

## Resultado de la tanda

- Los **100 primeros verbos en orden alfabético**, de `aaien` a `accepteren`, aparecen con definición específica, sinónimos contextualizados, diferencia de uso, ejemplos y conjugación.
- Se añadieron **98 fichas nuevas**. `aandoen` y `aannemen` ya estaban revisados y se conservaron, añadiendo una nota precisa sobre sus sinónimos por acepción.
- El atlas completo queda en **190 fichas revisadas de 1.886**.
- Las otras **1.696 fichas** siguen marcadas como pendientes; no reciben definiciones ni sinónimos automáticos.

## Correcciones lingüísticas relevantes

La tanda incluye correcciones explícitas para formas que no podían depender de una regla automática, entre ellas:

- `aanbidden`: `bad aan` y `aanbeden`;
- `aangaan`: `jij gaat aan`, `ging aan`, `aangegaan`;
- `aanhebben`: `hij/zij heeft aan`;
- `aankunnen`: `jij kunt/kan aan`;
- `aanmatigen`: formas reflexivas completas, como `ik matig mij aan`;
- `aanslaan` y `aanstaan`: `jij slaat aan` y `jij staat aan`;
- `aanstellen`, `aantellen`, `aantreffen` y `aanvallen`: raíces y formas personales corregidas.

Los lemas raros o restringidos, como `aanklinken`, `aantellen`, `aanwerpen` y `aanwinnen`, tienen una marca de registro para evitar presentarlos como vocabulario cotidiano.

## Definiciones y sinónimos

Cada ficha nueva exige:

- definición de al menos 35 caracteres y distinta de los textos genéricos prohibidos;
- uno o más sinónimos o equivalentes contextualizados;
- una nota que explica la diferencia semántica y los límites de sustitución;
- al menos dos ejemplos;
- nota de uso;
- seis formas de presente, seis de pasado y ejemplos de perfectum;
- trazabilidad mediante `reviewBatch`, `reviewStatus` y `lexicalSource`.

Los sinónimos se conectan en el grafo a la **capa de significado** del verbo, no al lema completo como equivalentes universales.

## Integración técnica

- Nueva fuente editorial: `data/initial-verb-definitions.json`.
- Generador reproducible: `scripts/generate-initial-verb-review.mjs`.
- Capa publicada: `js/verb-initial-review.js`.
- Integración en módulos y en la bundle clásica.
- Invalidación de caché mediante la versión `18.8.0`.
- Grafo regenerado con **17.986 nodos**, **65.575 relaciones** y **1.696 controles pendientes**.

## Validación

- **97 de 97 pruebas automatizadas superadas**.
- **69 controles de contenido**: 68 correctos, una advertencia declarada y cero errores.
- **100 de 100** primeras fichas completas.
- Cero relaciones rotas en el grafo.
- Pruebas de regresión para impedir `geaan...`, `kant aan`, `steelt aan`, `teelt aan`, `treeft aan` y `vaalt aan`.

La advertencia no es un fallo oculto: corresponde exactamente a los **1.696 verbos que aún requieren revisión léxica**. V18.8 no se presenta como la terminación de todo el atlas.
