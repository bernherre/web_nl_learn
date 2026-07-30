# Technische schuld

Dit document is een levend register. Een item is pas afgerond wanneer code, tests en documentatie zijn bijgewerkt.

## Afgerond in v19

- Versie als één controleerbaar contract tussen `package.json`, interface, bundle en cache.
- Visuele basis opgesplitst in tokens, thema's, typografie en toegankelijkheid.
- PWA-basis met manifest, offlinefallback en veilige cachevervanging.
- Buildvalidatie voor verplichte bestanden en de verrijkte werkwoordenmodule.
- Documentatie voor architectuur, bijdragen, beveiliging en releases.

## Openstaand

| Prioriteit | Gebied | Schuld | Aanpak |
|---|---|---|---|
| Hoog | JavaScript | De klassieke bundle blijft groot en monolithisch. | Opsplitsen per route met dynamische imports, zonder dubbelklikmodus te verliezen. |
| Hoog | Data | Inhoud gebruikt nog geen formeel schema. | JSON-schema's en validatie voor werkwoorden, oefeningen en lexicons. |
| Hoog | Browsertests | De meeste tests zijn statisch of unitgericht. | Playwright-tests voor menu, hashrouter, profielen, PWA en mobiel. |
| Middel | Opslag | Lokale profieldata heeft nog geen migratielaag. | Schema-versies en migraties voor localStorage/import/export. |
| Middel | Contentkwaliteit | Niet alle 1.900+ werkwoorden zijn lexicografisch beoordeeld. | Reviewstatus, bronveld en automatische duplicaatcontrole. |
| Middel | Performance | Grote datasets worden bij start geladen. | Zoekindexen en lazy loading per atlas. |
| Middel | Componenten | Componentstijlen staan nog samen in `styles.css`. | Stapsgewijs verdelen zonder selectorbreuken. |
| Laag | Installatie | SVG is het enige app-icoon. | PNG-iconen 192/512 en platformcontrole toevoegen. |
