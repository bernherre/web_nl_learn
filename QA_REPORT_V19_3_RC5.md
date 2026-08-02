# QA report — web_nl_learn V19.3 RC5

## Alcance

Corrección del bundle clásico para conservar alias de importaciones ES Modules y evitar referencias indefinidas al combinar preguntas base con los módulos C1/C2.

## Verificaciones

- `baseQuestionTopics` se define como alias de `questionTopics` antes de construir `allQuestionTopics`.
- `baseQuestionPractice` se define como alias de `questionPractice` antes de construir `allQuestionPractice`.
- La transformación funciona de forma genérica para importaciones nombradas con `as`.
- La versión visible, assets y caché se sincronizan desde `package.json`.
- Gramática, preguntas y Knowledge Graph de RC4 permanecen conservados.
- Atlas de 1.886 verbos y banco de 8.072 ejercicios preservados.

## Resultado

- 152/152 pruebas automatizadas superadas.
- 81/81 controles de contenido aprobados.
- Auditoría léxica: 0 bloqueos.
- Auditoría curricular: 0 bloqueos.
