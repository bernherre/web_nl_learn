# QA Report — V19.4 Alpha 10

## Alcance

Esta entrega parte de V19.4 Alpha 9 y limita los cambios funcionales del Atlas de Verbos a:

- los valores de `sentencePatterns`, visibles en `Zinspositie en gebruik`;
- la asignación explícita de 8 verbos a C1 y 4 verbos a C2;
- la regeneración del Kennisgraph y del bundle clásico.

No se modifican definiciones, sinónimos, conjugaciones, notas de uso, ejemplos generales ni la estructura de tarjetas de las fichas.

## Cobertura

- Verbos conservados: 1.886
- A2: 39/39 series revisadas explícitamente
- B1: 412 series reemplazadas por la capa contextual segura; las demás se conservan visibles sin filtrado
- B2: 20/20 series procesadas
- C1: 8 verbos ordenados y conectados
- C2: 4 verbos ordenados y conectados

## Kennisgraph

- Nodos: 27.289
- Relaciones: 90.155
- Nodos de verbo: 1.886
- Nodos C1 de verbo: 8
- Nodos C2 de verbo: 4
- Relaciones rotas: 0
- Controles pendientes publicados por el generador: 0

## Validación

- Pruebas automatizadas: 174/174
- Controles de contenido: 81/81
- Auditoría léxica: 2.773 tarjetas, 0 formas bloqueantes
- Diccionario central: 1.647 entradas; A0-A2 sin `controle nodig`
- Auditoría curricular: 19 módulos gramaticales, 8 módulos de preguntas y 54 focos avanzados del grafo
- Sintaxis de fuentes y bundle: aprobada
- Service Worker: el Kennisgraph evita Cache Storage para sus archivos grandes y siempre devuelve una `Response`

## Nota editorial

Alpha 10 no oculta ni elimina fichas. La cobertura B1 se amplió únicamente cuando la capa pudo construir una serie contextual que superó las validaciones automáticas. Las restantes fichas B1 permanecen disponibles y deben seguir corrigiéndose por lotes editoriales.
