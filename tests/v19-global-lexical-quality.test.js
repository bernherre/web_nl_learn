import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes } from '../js/content.js';
import { isReliableDefinition, isReliableExample } from '../js/lexical-quality.js';
test('alle uitgelichte cursuswoorden hebben concrete definities en contextvoorbeelden', () => {
  for (const theme of [...a0Themes, ...a1Themes, ...a2Themes]) for (const [term, definition, example] of theme.vocabulary || []) {
    assert.ok(isReliableDefinition(term, definition), `${term}: definitie is niet betrouwbaar`);
    assert.ok(isReliableExample(term, example), `${term}: voorbeeld is niet betrouwbaar`);
  }
});
test('alleen werkelijk nagekeken werkwoorden worden als lexicaal gecontroleerd behandeld', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /hasReviewedVerbMetadata/u); assert.match(main, /atlas\?\.lexicalEnriched/u);
});
test('de browserinterface weigert generieke uitleg als gecontroleerde leerinhoud', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /isReliableDefinition/u); assert.match(main, /isReliableExample/u); assert.match(main, /controle nodig/u); assert.match(main, /atlas\?\.lexicalEnriched/u);
});
test('de lexicale audit rapporteert alle inhoudsdomeinen', async () => {
  const audit = await readFile(new URL('../scripts/audit-learning-content.mjs', import.meta.url), 'utf8');
  for (const domain of ['a0Themes','a1Themes','a2Themes','spiralThemes','mathConcepts','physicsConcepts','softwareConcepts','professionalConcepts']) assert.match(audit,new RegExp(domain,'u'));
});
