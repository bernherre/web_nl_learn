# Validación de la tanda verbal A001–A100 — V18.8

## Alcance

La tanda cubre los cien primeros lemas después de ordenar el atlas con la configuración neerlandesa:

- primero: `aaien`;
- último: `accepteren`;
- fichas nuevas: 98;
- fichas anteriores conservadas: `aandoen` y `aannemen`;
- total completo dentro de la tanda: 100/100.

## Contrato de calidad aplicado

Una ficha solo puede quedar con `reviewed: true` si contiene:

1. definición específica y no genérica;
2. sinónimos o equivalentes contextualizados sin duplicados;
3. explicación de las diferencias entre esos equivalentes;
4. nota de uso;
5. dos o más ejemplos;
6. presente, pasado y perfectum completos;
7. separabilidad, reflexividad, auxiliar y registro cuando correspondan;
8. metadatos que identifican el lote y el método de revisión.

## Controles automáticos específicos

- Los cien primeros lemas deben estar revisados.
- Los 98 lemas nuevos deben pertenecer a `V18.8-A001-A100`.
- Ninguna definición puede coincidir con la lista de plantillas genéricas.
- El lema no puede aparecer como su propio sinónimo.
- Los sinónimos no pueden repetirse dentro de una ficha.
- Deben existir seis formas de presente y seis de pasado.
- Se rechazan participios que comiencen por `geaan`.
- Se rechazan formas conocidas como `kant aan`, `steelt aan`, `teelt aan`, `treeft aan` y `vaalt aan`.
- Los lemas restringidos deben declarar registro.

## Casos morfológicos comprobados expresamente

| Verbo | Presente | Pasado | Participio / perfectum |
|---|---|---|---|
| `aanbidden` | `ik bid aan`, `jij bidt aan` | `bad aan` | `aanbeden` |
| `aangaan` | `ik ga aan`, `jij gaat aan` | `ging aan` | `aangegaan` |
| `aanhebben` | `ik heb aan`, `hij/zij heeft aan` | `had aan` | `aangehad` |
| `aankunnen` | `ik kan aan`, `jij kunt/kan aan` | `kon aan` | `aangekund` |
| `aanmatigen` | `ik matig mij aan` | `ik matigde mij aan` | `ik heb mij ... aangematigd` |
| `aanslaan` | `ik sla aan`, `jij slaat aan` | `sloeg aan` | `aangeslagen` |
| `aanstaan` | `ik sta aan`, `jij staat aan` | `stond aan` | `aangestaan` |
| `aantreffen` | `ik tref aan`, `jij treft aan` | `trof aan` | `aangetroffen` |
| `aanvallen` | `ik val aan`, `jij valt aan` | `viel aan` | `aangevallen` |

## Registro y frecuencia

Los siguientes casos no se presentan como vocabulario cotidiano sin advertencia:

- `aanklinken`: raro; técnico o histórico;
- `aantellen`: anticuado o regional;
- `aanwerpen`: raro y parcialmente anticuado;
- `aanwinnen`: formal o de uso envejecido;
- otros verbos narrativos o técnicos llevan una marca equivalente cuando corresponde.

## Fuentes y método

Las definiciones, notas y ejemplos se redactaron para esta aplicación. La ortografía y las formas de riesgo se contrastaron con recursos del Instituut voor de Nederlandse Taal y la Woordenlijst oficial cuando estaban disponibles. Los sinónimos se revisaron manualmente por acepción y se acompañaron de límites de sustitución; no se extrajeron automáticamente para rellenar campos.

## Resultado técnico

- pruebas automatizadas: 97/97;
- controles de contenido: 69;
- correctos: 68;
- advertencias declaradas: 1;
- errores: 0;
- nodos del grafo: 17.986;
- relaciones: 65.575;
- relaciones rotas: 0.

## Limitación declarada

Fuera de esta tanda y de las capas anteriores quedan 1.696 verbos pendientes. El sistema los mantiene visibles como pendientes, sin presentar una definición genérica o un sinónimo inventado como contenido validado.
