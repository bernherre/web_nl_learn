# v19.0.2 — globale lexicale kwaliteitscontrole

Deze patch verwijdert misleidende generieke definities en voorbeelden die alleen het trefwoord herhalen.

## Wat verandert

- `de opslag`, `de schade` en tien andere kernwoorden rond verhuizen hebben concrete definities en natuurlijke voorbeeldzinnen.
- Niet-gecontroleerde items krijgen geen verzonnen voorbeeldzin meer.
- Niet-gecontroleerde items worden gemarkeerd als `controle nodig`.
- `npm run audit:content` controleert op generieke schijninhoud.
- Versie en cache zijn verhoogd naar 19.0.2.
- De audit controleert nu cursuskaarten, kernwoorden, vaklexicons, technische atlassen en verrijkte werkwoorden.
- Niet-gecontroleerde woordgroepitems en cataloguswerkwoorden krijgen geen verzonnen uitleg.
- 71 tests slagen.

## Installeren

Kopieer de inhoud van deze map over de hoofdmap van het lokale repository. Bestaande CSS-bestanden worden niet overschreven, zodat de recente dashboard-hotfixes behouden blijven.

Voer daarna uit:

```powershell
npm run check
git status --short
```
