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
