# Changelog

Alle belangrijke wijzigingen aan dit project worden in dit bestand bijgehouden. Het project volgt Semantic Versioning.

## [19.0.0] - 2026-07-30

### Added
- Formele applicatiemetadata en zichtbare versie.
- Gescheiden design tokens, thema's, typografie en toegankelijkheidsregels.
- Uitgebreidere PWA-manifestgegevens, snelkoppelingen en offlinepagina.
- Projectvalidatie die versie, bundle, cache en kernbestanden controleert.
- Architectuur-, bijdrage-, beveiligings- en technische-schulddocumentatie.

### Changed
- Vernieuwde typografische hiërarchie met moderne offline systeemfonts.
- Betrouwbaardere service-workerstrategie met netwerk-eerst voor navigatie en stale-while-revalidate voor assets.
- Vereenvoudigde en reproduceerbare `npm run check`-pipeline.

### Fixed
- Bescherming tegen versieverschillen tussen package, interface, bundle en cache.

## [19.0.2] - 2026-07-30

### Fixed

- Breidt de lexicale audit uit naar alle niveaus, thema’s, technische atlassen en professionele begrippen.
- Verbergt generieke definities en contextloze schijnvoorbeelden in de cursusinterface.
- Markeert niet-gecontroleerde woordgroepitems eerlijk als `controle nodig`.
- Behandelt niet-verrijkte werkwoorden uitsluitend als catalogusvormen.
- Verbetert het volledige woordveld van het A2-thema Verhuizen en diverse A0-kernzinnen.
- Corrigeert de uitleg van kernwerkwoorden en voorkomt foutieve vormen zoals `ik zweem`.
- Genereert `docs/lexical-audit.md` met aantallen en blokkerende bevindingen.

## [19.0.1] - 2026-07-30

### Fixed
- Verwijderd: generieke definities die deden alsof een woord lexicografisch was uitgelegd.
- Verwijderd: schijnvoorbeelden waarin alleen het trefwoord werd herhaald.
- Niet-gecontroleerde items worden nu eerlijk gemarkeerd als `controle nodig` en tonen geen voorbeeldzin.
- Toegevoegd: concrete betekenissen en natuurlijke voorbeelden voor kernwoorden rond verhuizen, waaronder `de opslag` en `de schade`.
- Toegevoegd: automatische lexicale kwaliteitsaudit om terugval te voorkomen.
