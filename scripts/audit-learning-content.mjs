import { readFile } from 'node:fs/promises';
import { a1Themes, a2Themes } from '../js/content.js';

const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
const forbidden = [
  'Een vaste combinatie die je als één geheel gebruikt',
  'Een zelfstandig naamwoord dat je nodig hebt om',
  'Een werkwoord voor een handeling, toestand of gebeurtenis binnen het thema',
];
for (const phrase of forbidden) {
  if (main.includes(phrase)) throw new Error(`Generieke leerinhoud gevonden: ${phrase}`);
}

const errors = [];
for (const theme of [...a1Themes, ...a2Themes]) {
  for (const item of theme.vocabulary || []) {
    const [term, definition, example] = item;
    if (!definition?.trim()) errors.push(`${theme.id || theme.title}: ${term} heeft geen definitie.`);
    if (example && example.trim().toLocaleLowerCase('nl-NL') === term.trim().toLocaleLowerCase('nl-NL')) {
      errors.push(`${theme.id || theme.title}: voorbeeld herhaalt alleen “${term}”.`);
    }
  }
}
if (errors.length) throw new Error(errors.slice(0, 20).join('\n'));
console.log('Lexicale kwaliteitsaudit geslaagd: geen generieke schijnvoorbeelden in gecontroleerde inhoud.');
