# QA report — web_nl_learn V19.3 RC1

## Resultado automático

- `npm run check`: aprobado.
- Tests Node: 144/144 aprobados.
- Validación de contenido: 73/73 controles aprobados; 0 advertencias; 0 fallos.
- Auditoría léxica: 2.773 tarjetas, conceptos y fichas revisadas automáticamente; 0 bloqueos.
- Atlas de verbos: 1.886 fichas conservadas.
- Banco de ejercicios: 8.072 ejercicios conservados.
- Rutas curriculares: A0, A1, A2, B1, B2, C1 y C2.

## Correcciones principales

- Eliminados los fallbacks que inventaban definiciones genéricas para palabras no revisadas.
- Los elementos pendientes se muestran como `controle nodig`, sin ejemplo ficticio.
- `isReliableDefinition()` e `isReliableExample()` centralizan el criterio léxico.
- Corregidos ejemplos contextuales y definiciones detectados por CI.
- PWA con página offline y tres shortcuts.
- Versión y caché sincronizadas desde `package.json`.
- Incluidas en la release las pruebas V19 que estaban únicamente en el repositorio.

## Deuda declarada

Las palabras de grupos amplios que todavía no tienen ficha individual revisada no reciben una definición fabricada. Se mantienen visibles y marcadas para revisión futura. Esta decisión protege la confianza del estudiante y evita contenido de relleno.
