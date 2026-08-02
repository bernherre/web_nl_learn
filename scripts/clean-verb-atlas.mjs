import { readFile, writeFile } from 'node:fs/promises';

const url = new URL('../js/verb-atlas.js', import.meta.url);
const source = await readFile(url, 'utf8');
const prefix = 'export const verbAtlas = ';
if (!source.startsWith(prefix) || !source.trimEnd().endsWith(';')) throw new Error('Onverwacht verb-atlasformaat');
const atlas = JSON.parse(source.slice(prefix.length).trim().replace(/;$/u, ''));
const generic = new Set([
  'Het werkwoord beschrijft vooral een handeling of activiteit.',
  'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',
  'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',
  'Dit werkwoord drukt beweging, richting of verplaatsing uit.',
  'Gebruik vaak hebben voor de activiteit en zijn bij een duidelijke richting of bestemming.',
  'Het werkwoord drukt mogelijkheid, noodzaak, toestemming, wens of verwachting uit.',
  'Het werkwoord beschrijft een gebeurtenis, resultaat of het ontstaan van een situatie.',
]);
let removed = 0;
for (const verb of atlas) {
  if (generic.has(String(verb.meaning || '').trim())) {
    verb.meaning = '';
    verb.curated = false;
    delete verb.synonyms;
    delete verb.usage;
    delete verb.examples;
    removed += 1;
  }
  delete verb.reviewed;
}
await writeFile(url, `${prefix}${JSON.stringify(atlas)};\n`, 'utf8');
console.log(`Generieke definities verwijderd: ${removed}; atlasitems: ${atlas.length}.`);
