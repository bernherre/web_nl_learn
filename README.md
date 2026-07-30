# v19.0.1 — lexicale kwaliteitscorrectie

Deze patch verwijdert misleidende generieke definities en voorbeelden die alleen het trefwoord herhalen.

## Wat verandert

- `de opslag`, `de schade` en tien andere kernwoorden rond verhuizen hebben concrete definities en natuurlijke voorbeeldzinnen.
- Niet-gecontroleerde items krijgen geen verzonnen voorbeeldzin meer.
- Niet-gecontroleerde items worden gemarkeerd als `controle nodig`.
- `npm run audit:content` controleert op generieke schijninhoud.
- Versie en cache worden verhoogd naar 19.0.1.
- 71 tests slagen.

## Installeren

Kopieer de inhoud van deze map over de hoofdmap van het lokale repository. Bestaande CSS-bestanden worden niet overschreven, zodat de recente dashboard-hotfixes behouden blijven.

Voer daarna uit:

```powershell
npm run check
git status --short
```
