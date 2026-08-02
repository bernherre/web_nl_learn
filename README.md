# Nederlands, gewoon doen — V18.11.0


## V18.8 — primera tanda alfabética de verbos validada

V18.8 corrige el problema visible en los primeros bloques del atlas: los **100 primeros verbos en orden alfabético**, desde `aaien` hasta `accepteren`, ya tienen una ficha de aprendizaje completa. Son **98 fichas nuevas** y dos fichas anteriores (`aandoen` y `aannemen`) que permanecen en su lugar y reciben una explicación explícita de sus sinónimos por acepción.

Cada ficha de esta tanda contiene:

- una definición específica, no una clasificación genérica;
- sinónimos o equivalentes contextuales con una nota que explica dónde sí y dónde no son sustituibles;
- al menos dos ejemplos naturales;
- nota de uso y registro cuando el lema es raro, regional, histórico, técnico o formal;
- presente, pasado y perfectum, con correcciones manuales para formas irregulares, separables y reflexivas;
- metadatos de lote para que el grafo y los tests puedan distinguir contenido revisado de contenido pendiente.

Se corrigieron, entre otras, formas problemáticas de `aanbidden`, `aangaan`, `aanhebben`, `aankunnen`, `aanmatigen`, `aanslaan`, `aanstaan`, `aanstellen`, `aantellen`, `aantreffen` y `aanvallen`. La bundle clásica incluye ahora `verb-initial-review.js` antes de que `main.js` aplique la tanda.

Cobertura real después de esta entrega:

- **100/100** primeros verbos alfabéticos completos;
- **190/1.886** fichas revisadas en todo el atlas;
- **1.696** fichas todavía pendientes y mostradas explícitamente como tales;
- **17.986 nodos**, **65.575 relaciones** y **1.696 controles léxicos** en el grafo generado.

Esta versión no afirma que los 1.886 verbos estén terminados. La siguiente tanda debe continuar desde `achter...`, sin ocultar ni rellenar automáticamente los lemas todavía pendientes.

Archivos principales de la tanda:

- `data/initial-verb-definitions.json` — contenido editorial y excepciones morfológicas;
- `scripts/generate-initial-verb-review.mjs` — generación reproducible y validación del lote;
- `js/verb-initial-review.js` — capa publicada;
- `tests/v18-8-first-100-verbs.test.js` — pruebas de contenido, trazabilidad y formas de riesgo;
- `VERB_BATCH_A001_A100_VALIDATION_V18_8.md` — informe específico del lote.


## V18.7.1 — hotfix de la carga del grafo

Corrige el error de ejecución `createKnowledgeGraphExplorer is not defined`. El generador de la bundle leía `js/knowledge-graph.js`, pero no insertaba su contenido en `js/app.js`; por eso la inicialización llamaba a una función ausente.

La corrección:

- incluye realmente `knowledge-graph.js` en la bundle clásica antes de `main.js`;
- añade una prueba de regresión que exige la definición antes de su uso;
- incrementa la versión de assets y del Service Worker a `18.7.1` para evitar que el navegador conserve la bundle defectuosa;
- mantiene sin cambios el contenido y las relaciones del grafo, regenerados con metadatos `18.7.1`.


## V18.7 — kennisgraaf over alle leerinhoud

V18.7 voegt een afzonderlijke pagina **Kennisgraaf** toe zonder de bestaande cursusroutes, werkwoordenatlas of visuele structuur te vervangen. De graaf wordt tijdens de build uit de bronbestanden gegenereerd en bevat momenteel ruim 17.500 inhoudsnodes en 64.000 relaties.

De graaf verbindt onder meer:

- werkwoorden met betekenislagen, gecontroleerde synoniemen, gebruiksnotities en voorbeelden;
- werkwoorden met de thema’s, grammatica, taalstructuren en oefeningen waarin ze voorkomen;
- A0–B2-thema’s, inclusief alle B1/B2-spiraalthema’s;
- grammatica, vragen, voorzetsels, bijwoorden, idiomatiek en logische relaties;
- woordenschat, lezen, luisteren, schrijven, wiskunde, natuurkunde, software en vaklexicon;
- alle 8.024 oefeningen met niveau, type en thema;
- expliciete controlepunten voor ontbrekende of generieke definities, synoniemen, gebruiksnotities, voorbeelden en niet-gecontroleerde zinspatronen.

Synoniemen hangen aan een **specifieke betekenisnode** en niet rechtstreeks aan het lemma. Daardoor wordt een synoniem niet onterecht als algemeen equivalent gepresenteerd. Niet-nagekeken werkwoorden krijgen geen verzonnen relaties; zij verschijnen in een controlewachtrij.

Belangrijke bestanden:

- `scripts/generate-content-graph.mjs` — bouwt de graaf en voert structurele controles uit;
- `data/content-knowledge-graph.json` — volledige graaf voor de webinterface;
- `data/content-knowledge-graph-report.json` — compacte reviewwachtrijen en foutcodes;
- `js/knowledge-graph.js` — zoek-, filter- en visualisatielaag;
- `tests/v18-7-knowledge-graph.test.js` — regressietests voor dekking en relatie-integriteit.
- `data/content-knowledge-graph.js` — lui geladen fallback voor rechtstreeks openen via `file://`.


## V18.5 — herstel van startkaarten en werkwoorddetail

Deze correctie herstelt de kaartopmaak op de startpagina en voorkomt dat niet-handmatig nagekeken atlasitems een algemene classificatie als echte definitie tonen. De negentien gecontroleerde V18-werkwoorden behouden hun specifieke definitie, definitie-audio, synoniemen, gebruiksnotities en voorbeeldzinnen. Niet-gecontroleerde items tonen voortaan duidelijk dat alleen de vervoeging en grammaticale indeling beschikbaar zijn.

Daarnaast zijn regressietests toegevoegd voor de startkaarten, toegankelijkheidssamenvatting, definitie-audio en het onderscheid tussen gecontroleerde en niet-gecontroleerde werkwoordfiches.


## V18.4 — volledige validatie van de V18-wijzigingen

Deze correctieversie controleert het volledige verschil tussen V17 en V18.3. De negentien werkwoorden die sinds V18 zijn toegevoegd of inhoudelijk gewijzigd hebben nu expliciete vervoegingen, originele definities, synoniemen of verwante uitdrukkingen, gebruiksnotities, voorbeelden en gecontroleerde zinspatronen. Foutieve automatisch gemaakte patronen zoals `Ik kan kunnen` en `omdat ik neem aan` zijn verwijderd. Modale werkwoorden tonen ook het vervangende infinitief in het perfectum waar dat didactisch nodig is. `Zullen` krijgt een afzonderlijke uitleg omdat het in gewoon modaal gebruik geen zelfstandig perfectum heeft.

Daarnaast zijn de zoekindex, definitie-audio, voorbeeld-audio, klassieke browserbundle, offlinecache, zichtbare aantallen en de detailweergave opnieuw gecontroleerd. Niet-gecontroleerde atlasitems blijven herkenbaar als algemene classificaties en krijgen geen verzonnen synoniemen of voorbeelden.

## V18 — correctiefase werkwoorden

Deze versie begint bewust met correcties voordat nieuwe oefentypen worden toegevoegd. De eerste handmatig gecontroleerde laag:

- voegt `zullen`, `hoeven` en `durven` toe;
- corrigeert de tegenwoordige vormen van `zwemmen`;
- verdiept de kernmodale werkwoorden met betekenis, synoniemen, gebruiksverschillen en originele voorbeelden;
- verbetert belangrijke families rond `nemen` en `gaan`;
- maakt betekenis, synoniemen, gebruiksnotities en voorbeelden zichtbaar en doorzoekbaar;
- bevat regressietests voor de nieuwe correcties.

De automatisch opgebouwde atlas blijft beschikbaar, maar gecontroleerde gegevens krijgen voorrang. Verdere foto-inventarisatie wordt in volgende correctiebatches verwerkt.

## V17 — professionele begrippenatlassen

De V17 voegt één toegankelijke pagina **Vaklexicon** toe met zes volledige domeinen:

- Bedrijfskunde & administratie — 48 begrippen
- Marketing — 48 begrippen
- Economie — 48 begrippen
- Zorg, lichaam & gezondheid — 48 begrippen
- Overheid, recht & gemeente — 48 begrippen
- Bouw, architectuur & infrastructuur — 64 begrippen

Samen zijn dat **304 nieuwe Nederlandse vakbegrippen** op A2–B2-niveau. Elk begrip heeft een duidelijke definitie, niveau-indicatie, uitspraakknop, domeinfilter en zoekfunctie. De eerste 18 kaarten worden getoond; de rest verschijnt progressief zodat de pagina rustig blijft.


Een volledig statische leeromgeving voor Nederlands van **A0 tot B2**. De hoofdapp gebruikt uitsluitend Nederlands en volgt de didactische lijn:

> **beeld → geluid → betekenis → structuur → gesprek → zelfstandig gebruik**

De applicatie kan rechtstreeks met een dubbelklik op `index.html` worden geopend. Voor offline/PWA-ondersteuning en lokaal ontwikkelen kan een kleine lokale server worden gebruikt.


## V16 — brede oefendekking, vindbare grammatica en lezen/schrijven B1–B2

V16 bouwt verder op de lokale profielen van V15 en corrigeert de inhoudelijke dekking van de oefenbank.

### Achtduizend oefeningen met expliciete grammaticale dekking

De oefenbank bevat nu **8.000 originele oefeningen**. Naast de eerdere basis komen de volgende domeinen als afzonderlijke oefenthema’s terug:

- bijwoorden van tijd, plaats, frequentie, graad, houding en verbinding;
- connectors en signaalwoorden per logische relatie;
- oorzaak, gevolg, doel, contrast, tijd en voorwaarde;
- `zodat`, `waardoor`, `daardoor`, `dus`, `doordat`, `omdat`, `aangezien`, `mits` en `tenzij`;
- losse en vaste voorzetsels, inclusief `waar/daar/er/hier + voorzetsel`;
- scheidbare werkwoorden in hoofdzin, bijzin, perfectum, modale en `te`-constructie;
- tegenwoordige tijd, imperfectum, perfectum, plusquamperfectum, passief en hypothetische voorwaarden;
- vragen, beleefde formuleringen, klachten, meningen en voorkeuren;
- begrijpend lezen B1 en B2;
- professionele e-mails B1 en B2.

### Grammatica die in twee klikken vindbaar is

De grammatica-atlas heeft directe ingangen voor **Bijwoorden**, **Connectors & signaalwoorden**, **Voorzetsels**, **Zodat / waardoor / daardoor**, **Voorwaarden** en **Nuance B2**. Een aparte relatiesectie groepeert vormen eerst naar betekenis en toont daarna of het om een voegwoord, bijwoord, voorzetsel of vaste verbinding gaat.

### Lezen B1 en B2

De route **Lezen & schrijven** bevat tien originele artikelen met alinea-aanduidingen, moeilijke woorden, voorleesfunctie en bewijsgerichte begripvragen. De B2-vragen zijn gemarkeerd als **NT2-II-stijl**, maar zijn geen officiële examenvragen.

Onderwerpen zijn onder andere bibliotheek en samenleving, duurzaam reizen, wonen en klachten, dierenopvang, kunstmatige intelligentie, stedelijke verdichting, duurzame voeding, literatuur, biodiversiteit en werkdruk.

### E-mails B1 en B2

Twaalf schrijftaken behandelen onder meer:

- klachten en reparatieverzoeken;
- afspraken wijzigen en informatie vragen;
- meningen en voorkeuren onderbouwen;
- formele klachten, adviezen en reacties op besluiten;
- vergaderingen samenvatten;
- risico’s en vertraging uitleggen;
- constructieve professionele feedback.

Iedere taak bevat een communicatieve situatie, ontvanger, register, verplichte inhoudspunten, bruikbare formuleringen, een schrijfveld en een modelantwoord.

## V15 — persoonlijke profielen en een echte oefenmotor

V15 voegde twee structurele onderdelen toe die in V16 behouden blijven:

### Gescheiden leerprofielen

- bij het openen verschijnt een profielkeuze;
- ieder opgeslagen profiel heeft eigen cursusvoortgang, fouten, oefenresultaten en herhalingen;
- het actieve profiel wordt alleen voor de huidige browsersessie onthouden met `sessionStorage`;
- profielgegevens worden lokaal opgeslagen met aparte sleutels per gebruiker;
- **Gastmodus** gebruikt uitsluitend `sessionStorage` en verdwijnt aan het einde van de browsersessie;
- profielen kunnen als JSON worden geëxporteerd en later opnieuw worden geïmporteerd;
- er worden geen trackingcookies, advertenties of externe analytics gebruikt;
- een lokale profielnaam of PIN is geen sterke beveiliging: voor echte accounts en synchronisatie is een backend nodig.

### Oefenbank A0–B2

De oorspronkelijke V15-oefenroute bevatte **4.050 oefeningen**; V16 breidt dit uit tot **8.000**:

| Niveau | Aantal |
|---|---:|
| A0 | 350 |
| A1 | 1.050 |
| A2 | 1.550 |
| B1 | 2.250 |
| B2 | 2.800 |

De oefenbank ondersteunt meerkeuze, invullen, woordvolgorde, luisteren en begeleid schrijven. Filters op niveau, type en thema worden gecombineerd met persoonlijke foutregistratie. De knop **Mijn fouten** maakt een herhaalsessie van eerder fout beantwoorde items.

## Vijf zichtbare cursusroutes

### A0 — eerste contact

Vier compacte instapthema’s met ruim 190 woorden, chunks en praktische zinnen:

1. **Hallo en tot ziens** — hallo, goedemorgen, hoe gaat het, dank je wel, tot straks, doei;
2. **Dit ben ik** — mijn naam is, ik heet, ik kom uit, ik woon in, ik spreek;
3. **Ik begrijp het niet** — herhalen, langzamer spreken, betekenis vragen en hulp zoeken;
4. **De eerste dagelijkse woorden** — ja/nee, cijfers, tijd, prijs, betalen, toilet en noodsituaties.

Elk A0-thema bevat een eigen illustratie, uitspraak op normale en langzame snelheid, woordgroepen, een kort gesprek, basisgrammatica en een mini-toets.

### A1 — dagelijkse basis

Acht volledige thema’s met ruim 1.000 woorden, taalhandelingen en vaste combinaties:

- hallo en familie;
- school;
- wonen;
- eten en drinken;
- gezondheid;
- kleding;
- reizen;
- vrije tijd.

### A2 — zelfstandig dagelijks handelen

Acht volledige thema’s met opnieuw ruim 1.000 woorden en combinaties:

- verhuizen;
- Nederland;
- kinderen;
- winkels;
- opleidingen;
- werk zoeken;
- werken;
- de gemeente.

### B1 — uitleggen, deelnemen en reageren

Negen zichtbare spiraalthema’s. Bekende onderwerpen keren terug met preciezere werkwoorden, langere zinnen, oorzaak-gevolg, ervaringen, mening en gesprek:

- kleding en uiterlijk;
- vakantie en reizen;
- dieren en natuur;
- huis en huishouden;
- eten en koken;
- supermarkt en markt;
- emoties en relaties;
- literatuur en verhalen;
- omgeving en milieu.

B1 bevat 234 geselecteerde leeritems, negen gesprekken, spreekopdrachten, grammatica in context en directe verbindingen naar de werkwoordenatlas.

### B2 — nuanceren, interpreteren en onderbouwen

Dezelfde negen spiraalthema’s groeien door naar abstractere taal, professioneel register, interpretatie, debat, beleid en kritische analyse. B2 bevat eveneens 234 geselecteerde leeritems en negen uitgebreide gesprekken.

Voorbeelden van B2-doelen:

- een literair motief of vertelperspectief interpreteren;
- klimaat- en consumentenbeleid genuanceerd bespreken;
- een standpunt formuleren met voorbehoud en tegenargument;
- precieze werkwoorden en vaste combinaties gebruiken;
- formeel en professioneel reageren.

## Curriculair spiraalmodel

Een thema verdwijnt niet na één niveau, maar krijgt telkens een diepere functie:

```text
Kleding    A1 kledingstukken → A2 kopen/ruilen → B1 identiteit → B2 duurzaamheid
Eten       A1 producten      → A2 recepten     → B1 cultuur   → B2 voedselsysteem
Emoties    A1 basisgevoel    → A2 oorzaken     → B1 conflict  → B2 psychologische nuance
Literatuur A1 kort verhaal   → A2 samenvatten  → B1 duiden    → B2 kritisch interpreteren
Omgeving   A1 buurt en weer  → A2 recycling    → B1 klimaat   → B2 transitie en beleid
```

## Grammatica-atlas

De grammatica-atlas bevat 38 basis- en verdiepingsthema’s van A1 tot B2, waaronder:

- lidwoorden, zelfstandige naamwoorden, meervoud en verkleinwoorden;
- bijvoeglijke naamwoorden, kleuren, vergelijking en voornaamwoorden;
- hoofdzin, inversie, bijzin en meerdere werkwoorden aan het einde;
- tegenwoordige tijd, perfectum, imperfectum en modale constructies;
- plaats-, richting- en tijdvoorzetsels;
- vaste combinaties met voorzetsels en `er + voorzetsel`;
- scheidbare werkwoorden in hoofdzin, perfectum, bijzin, modale constructie en `te`-constructie;
- nevenschikkende en onderschikkende voegwoorden;
- oorzaak, reden, doel, gevolg, voorwaarde, contrast en concessie;
- idiomatische en professionele formuleringen.

## Vragen van A1 tot B2

De sectie **Vragen** bevat veertien lessen en 22 families met `waar`, `daar`, `er` en `hier + voorzetsel`:

- ja/nee-vragen en inversie;
- `wie`, `wat`, `waar`, `wanneer`, `waarom`, `hoe`;
- `hoe oud`, `hoe laat`, `hoe lang`, `hoe vaak`, `hoe ver`, `hoeveel`;
- `welk`, `welke`, `wat voor`;
- vragen met scheidbare werkwoorden;
- verleden tijd en perfectum;
- beleefde en indirecte vragen;
- `waarmee`, `waarop`, `waarover`, `waarvoor`, `waaraan`, `waarvan`, `waarin`, `waaruit`, `waarnaar`, `waardoor`, enzovoort;
- contrasten voor personen: `met wie`, `op wie`, `over wie`.

## Taalstructuren in context

Vier grote banken verbinden vorm, betekenis en zinspositie:

1. **Voorzetsels** — basisgebruik en meer dan tachtig vaste combinaties;
2. **Scheidbare werkwoorden** — 87 kernwerkwoorden en twaalf volledige positiemodellen;
3. **Voegwoorden** — 44 voegwoorden en zinsverbinders;
4. **Vaste en idiomatische combinaties** — 80 veelgebruikte chunks.

## Werkwoordenatlas

De atlas bevat **1.880 werkwoorden**:

- 870 regelmatige werkwoorden;
- 1.010 onregelmatige werkwoorden;
- 1.240 scheidbare werkwoorden;
- niveaulabel A1, A2, B1 of B2;
- semantische labels voor handeling, beweging, verandering, toestand, gebeurtenis/resultaat en modaliteit;
- filters op regelmatigheid, betekenis, niveau, scheidbaarheid en hulpwerkwoord;
- volledige tegenwoordige tijd;
- volledige onvoltooid verleden tijd;
- voltooid deelwoord en perfectum met `hebben`, `zijn` of beide;
- gebiedende wijs;
- modellen voor hoofdzin, verleden tijd, perfectum, modale constructie, bijzin en `te`.

Bij bewegingswerkwoorden met `hebben/zijn` legt de interface het functionele verschil uit: `hebben` benadrukt vaak de activiteit, terwijl `zijn` doorgaans richting, bestemming of verandering van plaats markeert.

De spellingvormen zijn gevalideerd met vrije gegevens van Stichting OpenTaal. Dit project is geen transcriptie van Van Dale of TaalCompleet. Die methodes dienen als inspiratie voor schaal, diepgang en ordening; definities, voorbeelden, dialogen en oefeningen in deze webapp zijn origineel geschreven.

## Woorden leren zonder visuele overbelasting

De volledige woordenbanken zijn in V14 opnieuw ontworpen en in V15 profielgebonden gemaakt als kleine leereenheden in plaats van een dicht raster met knoppen:

- maximaal acht woorden per groep bij de eerste weergave;
- twee kolommen op grote schermen en één kolom op mobiel;
- een korte Nederlandse definitie op iedere kaart;
- een uitklapbare voorbeeldzin waar betrouwbare context beschikbaar is;
- aparte knoppen voor normale en langzame uitspraak;
- zoeken binnen het actieve thema;
- een knop **Toon meer** voor de resterende woorden;
- semantische groepen die gesloten kunnen blijven totdat de leerling ze nodig heeft.

De app gebruikt handmatig geschreven uitleg voor kernwoorden, bestaande themadefinities en gecontroleerde werkwoordinformatie. Voor minder centrale woorden geeft zij een duidelijke thematische basisuitleg, zodat geen woord zonder leercontext als losse knop wordt aangeboden.

## Beeld en uitspraak

Nieuwe begrippen worden waar mogelijk ondersteund met een thematische illustratie. Alle gecontroleerde woorden en zinnen kunnen worden uitgesproken met `SpeechSynthesisUtterance`. De app kiest bij voorkeur:

1. `nl-NL`;
2. `nl-BE`;
3. een andere `nl-*`-stem.

Normale en langzame afspeelsnelheid zijn beschikbaar. De oude twijfelachtige WAV-opnames worden niet door de hoofdapp gebruikt.

## Toegankelijke visuele interface

De V15 behoudt de warme groene, crèmekleurige en oranje identiteit, maar gebruikt kleur nooit als enige informatiedrager. De interface bevat:

- dag- en nachtmodus;
- hoogcontrastmodus;
- een kleurveilig profiel voor onder meer rood-groenkleurenzienstoornissen;
- drie tekstgroottes;
- zichtbare focusranden en semantische labels;
- ondersteuning voor `prefers-reduced-motion`;
- tekstcontrast dat ook op kaarten, knoppen en badges leesbaar blijft.

## Getallen, datum en tijd

De afzonderlijke route **Getallen & tijd** behandelt onder andere:

- hoofdtelwoorden en rangtelwoorden;
- tientallen, honderden, duizenden, miljoenen, miljarden en biljoenen;
- breuken, decimalen, percentages, negatieve getallen en benaderingen;
- prijzen, telefoonnummers, adressen, maten en hoeveelheden;
- kloktijd, dagdelen, duur en frequentie;
- weekdagen, maanden, seizoenen, data, jaren, eeuwen en decennia.

## Wiskundetaal

De route **Wiskunde** is een begrippenatlas met Nederlandse namen en korte basisnoties voor rekenen, algebra, meetkunde, verzamelingen, groepen, vectoren, matrices, sommatie, productnotatie, afgeleiden, integralen, meervoudige integralen en tensoren.

## Natuurkunde en software

Twee technische woordenatlassen bevatten uitsluitend een Nederlandse term en een beknopte Nederlandse definitie:

- **Natuurkunde**: basisfysica, mechanica, elektromagnetisme, velden, relativiteit, kwantummechanica, astronomie, golven en thermodynamica;
- **Software**: programmeren, datastructuren, architectuur, data, cloud, DevOps, beveiliging, observability, testen en kunstmatige intelligentie.

Beide atlassen zijn doorzoekbaar, filterbaar en geschikt voor uitspraak via de Nederlandse browserstem.


## V18.3: regressiecorrectie

Deze versie herstelt alle regressies die sinds V18 in de werkwoordenatlas zijn ontstaan. Uitgebreide definities, synoniemen, gebruiksnotities, voorbeelden en voorleesknoppen worden alleen getoond voor werkwoorden waarvan die metadata expliciet is gecontroleerd. Niet-gecontroleerde atlasitems krijgen geen verzonnen synoniemen, voorbeeldzinnen of generieke V18-labels. De correctielaag valideert haar eigen metadata tijdens het laden en de klassieke browserbundle bevat dezelfde beveiliging.

## Direct openen

Open `index.html` met Chrome of Edge. De app laadt `js/app.js` als klassieke browserbundle, zodat navigatie en oefeningen ook via dubbelklik werken.

Voor Service Worker- en PWA-functies:

```bash
npm run serve
```

Open daarna `http://localhost:8080`.

## Ontwikkelen en valideren

Er zijn geen npm-afhankelijkheden nodig.

```bash
npm run generate:verbs
npm run generate:graph
npm run build
npm test
npm run check
```

- `npm run generate:verbs` regenereert de diep nagekeken kernlaag en de eerste alfabetische verbatch;
- `npm run generate:graph` bouwt de semantische graaf en het reviewrapport uit alle inhoudsmodules;
- `npm run build` genereert `js/app.js` uit alle bronbestanden;
- `npm test` voert statische en functionele tests uit;
- `npm run check` bouwt de bundle, controleert de JavaScript-syntaxis en voert alle geautomatiseerde tests uit.

## Structuur

```text
.
├── .github/workflows/deploy-pages.yml
├── css/
│   ├── styles.css
│   └── reference.css
├── images/
├── js/
│   ├── learning.js
│   ├── content.js
│   ├── starter-content.js
│   ├── spiral-content.js
│   ├── depth-content.js
│   ├── supplement-content.js
│   ├── questions-content.js
│   ├── verb-atlas.js
│   ├── verb-corrections.js
│   ├── verb-core-review.js
│   ├── verb-initial-review.js
│   ├── knowledge-graph.js
│   ├── exercises.js
│   ├── profiles.js
│   ├── main.js
│   ├── app.js
│   └── reference.js
├── data/
├── scripts/
├── tests/
├── index.html
├── reference.html
├── manifest.webmanifest
├── service-worker.js
└── package.json
```

## Bestaand materiaal

Het oorspronkelijke naslagwerk blijft beschikbaar in `reference.html`, maar is niet de hoofdapp. Oude audio blijft alleen als archiefmateriaal in de repository staan.
