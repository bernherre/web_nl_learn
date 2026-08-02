# Validatierapport V18.5

## Reikwijdte

Deze controle vergelijkt de stabiele V17-commit `15b43d5` met de volledige correctiereeks V18 tot en met V18.5. De controle geldt voor alles wat sinds V18 is toegevoegd of gewijzigd. Zij is **geen** bewering dat alle 1.883 atlaswerkwoorden al een handmatig geschreven definitie hebben.


## V18.5 aanvullende regressiecontrole

- herstelt de CSS voor de vijf leerpadkaarten en de toegankelijkheidssamenvatting op de startpagina;
- herstelt de visuele koppeling tussen definitie, definitie-audio, synoniemen en voorbeelden;
- toont een expliciete controlestatus in plaats van een generieke definitie bij niet-handmatig nagekeken atlasitems;
- behoudt specifieke definities en audio uitsluitend voor de negentien gecontroleerde V18-items;
- gebruikt een nieuwe offlinecache zodat oude V18.4-stijlen niet blijven hangen.

## Gecontroleerde onderdelen

- de negentien expliciet gewijzigde werkwoorden;
- de drie nieuw toegevoegde modale werkwoorden `zullen`, `hoeven` en `durven`;
- vervoegingen, hulpwerkwoorden, scheidbaarheid, niveaus en betekenislabels;
- definities, synoniemen of verwante uitdrukkingen, gebruiksnotities en voorbeelden;
- zinspatronen in hoofdzin, verleden tijd, perfectum, bijzin, modale constructie en waar relevant `te`;
- zoekindex op definitie, gebruik en synoniemen;
- voorleesknoppen voor definitie, voorbeelden en zinspatronen;
- klassieke browserbundle `js/app.js`;
- offlinecache en cacheversie;
- zichtbare aantallen in de interface;
- het onderscheid tussen gecontroleerde en nog niet gecontroleerde atlasitems.

## Belangrijkste gevonden en herstelde fouten

1. Automatisch gemaakte patronen zoals `Ik kan kunnen.` en `… omdat ik neem aan.` waren grammaticaal onbruikbaar.
2. De modale perfectums toonden vooral losse deelwoorden en niet de didactisch belangrijke vervangende infinitief, bijvoorbeeld `ik heb moeten werken`.
3. `Zullen` kreeg ten onrechte de indruk van een zelfstandig perfectum; het heeft nu een afzonderlijke toelichting.
4. `Afnemen` stond alleen met `hebben`, terwijl verandering meestal `zijn` gebruikt en de overgankelijke handeling `hebben`.
5. De uitleg bij `durven + te` maakte onvoldoende onderscheid tussen de algemene standaardtaal en regionale variatie.
6. De definitie verscheen dubbel in de detailkaart.
7. Het tekstuele totaal vermeldde nog 1.880 terwijl de statistiek 1.883 aangaf.
8. De offlinecache had nog de V18.3-identificatie.

## Resultaat

- 1.883 unieke werkwoorden;
- 872 regelmatige en 1.011 onregelmatige werkwoorden;
- exact 19 items met `reviewed: true`;
- geen dubbele toevoeging wanneer de correctielaag opnieuw wordt uitgevoerd;
- alle geautomatiseerde tests slagen via `npm run check`.

## Bewuste grens

Nog niet gecontroleerde atlasitems tonen alleen hun bestaande globale classificatie. Zij krijgen geen automatisch verzonnen synoniemen, voorbeelden of het label `reviewed`. Het handmatig uitbreiden van de overige werkwoorden hoort bij een volgende correctiebatch en niet bij deze regressiecontrole.
