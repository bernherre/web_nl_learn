# Changelog

## 19.3.0-rc.5 — V19.3 RC5

- Corrige la bundle clásica para conservar alias de importaciones ES Modules como `questionTopics as baseQuestionTopics`.
- Evita el error de navegador `baseQuestionTopics is not defined` al combinar preguntas A1–B2 con C1/C2.
- Añade una transformación genérica de alias en `build-classic.mjs`, no un parche específico de variable.
- Añade una prueba de regresión que valida definición y orden de los alias antes de su uso.
- Sincroniza también la versión visible del Knowledge Graph desde `package.json`.
- Mantiene la gramática, preguntas, Knowledge Graph, 1.886 verbos y 8.072 ejercicios de RC4.


## 19.3.0-rc.3 — V19.3 RC3

- Corrige el bundle clásico para incluir `lexical-quality.js` antes de su uso.
- Añade regresión específica para `isReliableDefinition()` e `isReliableExample()`.
- Sincroniza automáticamente la etiqueta visible de RC desde `package.json`.
- Mantiene intactos el Atlas de 1.886 verbos, C1/C2 y los 8.072 ejercicios.
- Valida 146/146 pruebas y 73/73 controles de contenido.

## 19.3.0-rc.1 — V19.3 RC1

- Centrale lexicale betrouwbaarheidscontrole toegevoegd.
- Generieke fallbackdefinities verwijderd uit de cursuskaarten.
- Onbeoordeelde woorden worden zichtbaar als `controle nodig` gemarkeerd en krijgen geen schijnvoorbeeld.
- Concrete definities en voorbeelden voor onder meer `de opslag`, `de schade` en `wat betekent dat?` gecorrigeerd.
- Versie- en cachebeheer gecentraliseerd vanuit `package.json`.
- PWA uitgebreid met offlinepagina en drie shortcuts.
- Design tokens en typografie als afzonderlijke lagen toegevoegd.
- CI-batterij uitgebreid met de V19-platform- en lexicale kwaliteitstests.

## 19.2.6

- De werkwoordenlijst toont dezelfde gecontroleerde definitie als de detailfiche.
