import test from 'node:test';
import assert from 'node:assert/strict';
import { initialVerbReviews } from '../js/verb-initial-review.js';

const batch = initialVerbReviews.filter((item) => item.reviewBatch === 'V18.11-A151-A350');

test('V18.11 bevat exact 200 alfabetische fiches van afhouden tot bijstaan', () => {
  assert.equal(batch.length, 200);
  assert.equal(batch[0].infinitive, 'afhouden');
  assert.equal(batch.at(-1).infinitive, 'bijstaan');
  assert.equal(new Set(batch.map((item) => item.infinitive)).size, 200);
});

test('de V18.11-batch heeft specifieke betekenissen, synoniemen en volledige kernvormen', () => {
  for (const verb of batch) {
    assert.ok(verb.meaning.length >= 35, `${verb.infinitive}: definitie`);
    assert.ok(verb.synonyms.length >= 1, `${verb.infinitive}: synoniem`);
    assert.ok(verb.synonymNote.length >= 45, `${verb.infinitive}: synoniemnotitie`);
    assert.ok(verb.usage.length >= 35, `${verb.infinitive}: gebruik`);
    assert.ok(verb.examples.length >= 2, `${verb.infinitive}: voorbeelden`);
    assert.ok(verb.stem && verb.past && verb.pastPlural && verb.participle, `${verb.infinitive}: kernvormen`);
    assert.equal(verb.reviewStatus, 'editorially-reviewed');
  }
});
