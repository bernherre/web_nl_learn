import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes } from '../js/content.js';
import { enrichVerbAtlas } from '../js/verb-details.js';
import { verbAtlas } from '../js/verb-atlas.js';

const generic = /Het werkwoord beschrijft vooral|Het zelfstandig naamwoord verwijst naar|Een vaste combinatie die je als één geheel gebruikt/u;

test('alle uitgelichte cursuswoorden hebben concrete definities en contextvoorbeelden', () => {
  for (const theme of [...a0Themes, ...a1Themes, ...a2Themes]) {
    for (const [term, definition, example] of theme.vocabulary || []) {
      assert.ok(definition.length >= 18, `${term}: definitie is te kort`);
      assert.doesNotMatch(definition, generic, `${term}: generieke definitie`);
      assert.notEqual(example.trim().toLocaleLowerCase('nl-NL'), term.trim().toLocaleLowerCase('nl-NL'));
    }
  }
});

test('alleen werkelijk verrijkte werkwoorden worden als lexicaal gecontroleerd behandeld', () => {
  const verbs = enrichVerbAtlas(verbAtlas);
  const enriched = verbs.filter((verb) => verb.lexicalEnriched && verb.verified === true);
  const catalog = verbs.filter((verb) => !verb.lexicalEnriched);
  assert.ok(enriched.length >= 160);
  assert.ok(catalog.length > 1000);
  assert.ok(enriched.every((verb) => verb.definition && verb.example));
});

test('de browserinterface weigert generieke uitleg als gecontroleerde leerinhoud', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /isReliableDefinition/u);
  assert.match(main, /isReliableExample/u);
  assert.match(main, /controle nodig/u);
  assert.match(main, /atlas\?\.lexicalEnriched/u);
});

test('de lexicale audit rapporteert alle inhoudsdomeinen', async () => {
  const audit = await readFile(new URL('../scripts/audit-learning-content.mjs', import.meta.url), 'utf8');
  for (const domain of ['a0Themes', 'a1Themes', 'a2Themes', 'spiralThemes', 'mathConcepts', 'physicsConcepts', 'softwareConcepts', 'professionalConcepts']) {
    assert.match(audit, new RegExp(domain, 'u'));
  }
});
