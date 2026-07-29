import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { verbAtlas } from '../js/verb-atlas.js';
import { enrichVerbAtlas, enrichedVerbCount } from '../js/verb-details.js';

const verbs = enrichVerbAtlas(verbAtlas);
const byName = (name) => verbs.find((verb) => verb.infinitive === name);

test('V18 bevat meer dan 1.900 werkwoorden en 160 lexicografisch verrijkte kernwerkwoorden', () => {
  assert.ok(verbs.length >= 1900);
  assert.equal(enrichedVerbCount, 160);
  assert.equal(verbs.filter((verb) => verb.lexicalEnriched).length, 160);
});

test('verrijkte werkwoorden hebben definitie, voorbeeld en synoniemen', () => {
  for (const verb of verbs.filter((item) => item.lexicalEnriched)) {
    assert.ok(verb.definition?.length > 12, verb.infinitive);
    assert.ok(verb.example?.length > 8, verb.infinitive);
    assert.ok(Array.isArray(verb.synonyms), verb.infinitive);
    assert.ok(verb.synonyms.length >= 1, verb.infinitive);
  }
});

test('de gedeelde onregelmatige kernvormen zijn gecorrigeerd', () => {
  assert.deepEqual(byName('aannemen').pastForms.slice(0, 2), ['ik nam aan', 'jij nam aan']);
  assert.equal(byName('aannemen').participle, 'aangenomen');
  assert.equal(byName('afwijzen').past, 'wees af');
  assert.equal(byName('afwijzen').participle, 'afgewezen');
  assert.equal(byName('zwemmen').presentForms[0], 'ik zwem');
});

test('wederkerende werkwoorden tonen voornaamwoorden en vaste voorzetsels', () => {
  const reflexive = verbs.filter((verb) => verb.reflexive);
  const fixed = verbs.filter((verb) => verb.fixedPrepositions?.length);
  assert.ok(reflexive.length >= 20);
  assert.ok(fixed.length >= 60);
  assert.equal(byName('voorbereiden').reflexiveForms[0], 'ik bereid me voor');
  assert.equal(byName('denken').fixedPrepositions[0][0], 'denken aan');
  assert.equal(byName('wachten').fixedPrepositions[0][0], 'wachten op');
});

test('de werkwoordeninterface biedt zichtbare filters en lexicale panelen', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(html, /id="verb-feature"/u);
  assert.match(html, /Verrijkte kern/u);
  assert.match(main, /Synoniemen en nabije woorden/u);
  assert.match(main, /Vaste voorzetsels en patronen/u);
  assert.match(main, /Wederkerend gebruik/u);
});

test('de klassieke bundle en offlinecache bevatten de V18-gegevens', async () => {
  const app = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');
  const worker = await readFile(new URL('../service-worker.js', import.meta.url), 'utf8');
  assert.match(app, /function\s+enrichVerbAtlas\s*\(/u);
  assert.match(app, /enrichVerbAtlas\s*\(\s*verbAtlas\s*\)/u);
  assert.ok(
    app.indexOf('function enrichVerbAtlas') < app.indexOf('const allVerbs = enrichVerbAtlas(verbAtlas)'),
    'enrichVerbAtlas moet voor de eerste aanroep in de browserbundle staan',
  );
  assert.match(app, /zich voorbereiden op/u);
  assert.match(worker, /verb-details\.js/u);
  assert.match(worker, /v18/u);
});
