import test from 'node:test';
import assert from 'node:assert/strict';
import { initialVerbReviews } from '../js/verb-initial-review.js';

const batch = initialVerbReviews.filter((item) => item.reviewBatch === 'V18.14-A551-A750');

test('V18.14 bevat exact 200 fiches van gooien tot losgaan', () => {
  assert.equal(batch.length, 200);
  assert.equal(batch[0].infinitive, 'gooien');
  assert.equal(batch.at(-1).infinitive, 'losgaan');
  assert.equal(new Set(batch.map((item) => item.infinitive)).size, 200);
});

test('de V18.14-batch bevat specifieke definities, synoniemen en voorbeelden', () => {
  for (const verb of batch) {
    assert.ok(verb.meaning.length >= 35, `${verb.infinitive}: definitie`);
    assert.ok(verb.synonyms.length >= 2, `${verb.infinitive}: synoniemen`);
    assert.ok(verb.synonymNote.length >= 55, `${verb.infinitive}: synoniemnotitie`);
    assert.ok(verb.usage.length >= 55, `${verb.infinitive}: gebruik`);
    assert.ok(verb.examples.length >= 2, `${verb.infinitive}: voorbeelden`);
    assert.ok(verb.stem && verb.past && verb.pastPlural && verb.participle, `${verb.infinitive}: kernvormen`);
    assert.equal(verb.reviewStatus, 'editorially-reviewed');
  }
});

test('bekende morfologische fouten zijn in V18.14 gecorrigeerd', () => {
  const byLemma = Object.fromEntries(batch.map((item) => [item.infinitive, item]));
  assert.equal(byLemma.horen.past, 'hoorde');
  assert.equal(byLemma.horen.participle, 'gehoord');
  assert.equal(byLemma.hopen.participle, 'gehoopt');
  assert.equal(byLemma.haasten.participle, 'gehaast');
  assert.equal(byLemma.inrichten.participle, 'ingericht');
  assert.equal(byLemma.kosten.participle, 'gekost');
  assert.equal(byLemma.leiden.participle, 'geleid');
  assert.equal(byLemma.letten.participle, 'gelet');
  assert.equal(byLemma.lijken.past, 'leek');
  assert.equal(byLemma.lijken.participle, 'geleken');
});
