# Changelog

## 19.4.0-alpha.2 — V19.4 Alpha 2

- Verrijkt de volledige resterende lexicale schuld van A1 en A2 met specifieke definities en contextuele voorbeelden.
- Voegt `js/lexicon-a1.js` toe met 666 redactioneel beoordeelde entries.
- Voegt `js/lexicon-a2.js` toe met 679 redactioneel beoordeelde entries.
- Vergroot het centrale lexicon van 302 naar 1.647 entries.
- Brengt A0 op 178/178, A1 op 966/966 en A2 op 917/917 betrouwbare kaarttermen.
- Verwijdert geen fallback: `controle nodig` blijft beschikbaar, maar heeft 0 actieve kaarten in A0–A2.
- Corrigeert de lidwoorden naar `het duin` en `het waterschap` in de broninhoud.
- Neemt beide nieuwe lexiconmodules op in de klassieke bundle en offlinecache.
- Breidt de Knowledge Graph uit naar 27.289 nodes en 90.155 relaties.
- Laat de lexiconaudit falen zodra A0, A1 of A2 opnieuw een open kaart bevat.
- Valideert 160/160 tests en 81/81 inhoudscontroles zonder waarschuwingen.

## 19.4.0-alpha.1 — V19.4 Alpha 1

- Introduceert `js/lexicon.js` als centrale bron voor gedeelde definities, contextzinnen en reviewmetadata.
- Verrijkt alle 178 unieke A0-termen; A0 bevat daardoor geen kaarten met `controle nodig` meer.
- Verrijkt alle 145 termen van het eerste A1-thema **Hallo**; 82 daarvan zijn nieuw centraal beoordeeld.
- Behoudt 42 eerder gevalideerde A1/A2-kernwoorden, waaronder `de opslag` en `de schade`, in het centrale lexicon.
- Laat niet-beoordeelde A1/A2-termen bewust zichtbaar als `controle nodig`; de schuld wordt niet verborgen.
- Laat zowel woordgroepkaarten als uitgelichte kernwoorden eerst het centrale lexicon gebruiken.
- Voegt 302 lexemen en hun relaties toe aan de Knowledge Graph.
- Voegt `audit:lexicon` toe met dekking, kwaliteit en openstaande termen per niveau.
- Vervangt de foutgevoelige handmatige browserbundle-samenstelling door één geordend bronmanifest.
- Ondersteunt versie-labels voor Alpha-releases naast RC-releases.
- Valideert 158/158 tests en 81/81 inhoudscontroles zonder waarschuwingen.

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
