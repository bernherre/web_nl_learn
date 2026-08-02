# Validatie kennisgraaf V18.7

Status: **geslaagd met één verklaarde inhoudelijke beperking**  
Datum: 2026-08-01

## Doel

De kennisgraaf maakt de volledige gestructureerde leerinhoud als één netwerk doorzoekbaar. Het doel is niet alleen navigatie, maar vooral het sneller ontdekken van:

- geldige synoniemen per betekenis;
- de thema's, grammatica, voorbeelden en oefeningen waarin een woord wordt gebruikt;
- ontbrekende definities, voorbeelden, gebruiksnotities of synoniemen;
- bekende taalfouten en nog niet handmatig gecontroleerde patronen;
- geïsoleerde of zwak verbonden inhoud.

## Gevalideerde omvang

| Onderdeel | Aantal |
|---|---:|
| Nodes | 17.511 |
| Relaties | 64.590 |
| Broncollecties | 47 |
| Niveaus | 5 |
| Thema's | 56 |
| Spiraalthema's | 9 |
| Termnodes | 3.265 |
| Grammaticanodes | 72 |
| Taalstructuren | 272 |
| Idiomen | 80 |
| Werkwoorden | 1.886 |
| Handmatig nagekeken betekenissen | 92 |
| Gecontroleerde synoniemtermen | 187 |
| Voorbeeldnodes | 277 |
| Oefeningen | 8.024 |
| Open issue-nodes | 1.794 |

## Semantisch model

Een gecontroleerd werkwoord volgt dit patroon:

`werkwoord → betekenis → synoniem / gebruiksnotitie / voorbeeld`

Daardoor is een synoniem gekoppeld aan de beschreven betekenis en niet zonder nuance aan het hele lemma. De graaf bevat daarnaast relaties naar niveau, semantisch domein, hulpwerkwoord, vervoeging, thema, grammaticale inhoud en oefeningen.

Een niet nagekeken werkwoord volgt dit patroon:

`werkwoord → controlepunt → ontbrekende of onbevestigde inhoud`

Het controlepunt bevat vijf afzonderlijke foutcodes. Voor `aaien` en de overige 1.793 nog niet nagekeken werkwoorden worden geen definitie of synoniemen verzonnen.

## Integriteitscontroles

- Alle node-id's zijn uniek.
- Alle relaties hebben een bestaande bron- en doelnode.
- Alle 8.024 oefeningen zijn aan niveau, type en onderwerp gekoppeld.
- Alle werkwoorden zijn gekoppeld aan semantisch domein, hulpwerkwoord en vervoegingsklasse.
- Nagekeken synoniemen hangen aan een betekenisnode en niet rechtstreeks aan het lemma.
- De reviewwachtrij bevat precies dezelfde 1.794 werkwoorden als de niet nagekeken atlasgroep.
- De B1/B2-spiraal, taalstructuren, lezen, luisteren, schrijven, technische concepten en vaklexicon zijn opgenomen.
- De graaf wordt pas geladen wanneer de pagina wordt geopend.
- Naast JSON is een lokale JavaScript-fallback aanwezig voor rechtstreeks openen vanaf schijf.

## Testresultaat

- Regressietests: **90/90 geslaagd**.
- Inhoudsvalidatie: **63 geslaagd, 1 waarschuwing, 0 fouten**.
- Gebroken relaties: **0**.

## Bekende beperking

De graaf maakt ontbrekende inhoud zichtbaar, maar maakt die inhoud niet automatisch betrouwbaar. Slechts 92 werkwoordfiches hebben momenteel een handmatig gevalideerde definitie, synoniemen, gebruiksnotitie en voorbeelden. De overige 1.794 blijven daarom expliciet in de reviewwachtrij staan.

Een automatische Chromium-weergavetest kon in de uitvoeringsomgeving niet betrouwbaar worden afgerond. De DOM-integratie, assets, syntax, bundling, relatie-integriteit, lazy loading en lokale fallback zijn wel geautomatiseerd gecontroleerd.
