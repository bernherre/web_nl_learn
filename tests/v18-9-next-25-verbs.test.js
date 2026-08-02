import test from 'node:test';
import assert from 'node:assert/strict';
import { verbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews, initialVerbReviews } from '../js/verb-initial-review.js';

const atlas = structuredClone(verbAtlas);
applyVerbCorrections(atlas);
applyCoreVerbReviews(atlas);
applyInitialVerbReviews(atlas);

const batch = initialVerbReviews.filter((item) => item.reviewBatch === 'V18.9-A101-A125');
const expected = [
  'achterblijven', 'achterhouden', 'achterlaten', 'achterliggen', 'achterlopen',
  'achterstaan', 'achterstellen', 'achteruitgaan', 'achteruitlopen', 'achteruitrijden',
  'achteruitslaan', 'achteruitvliegen', 'ademen', 'adviseren', 'afbestellen',
  'afbetalen', 'afbidden', 'afbijten', 'afbinden', 'afblazen', 'afblijven',
  'afboeken', 'afbouwen', 'afbreken', 'afbrengen',
];

test('V18.9 bevat de volgende 25 alfabetische reviews', () => {
  assert.equal(batch.length, 25);
  assert.deepEqual(batch.map((item) => item.infinitive), expected);
});

test('de nieuwe batch heeft specifieke definities, synoniemen en natuurlijke voorbeelden', () => {
  for (const item of batch) {
    assert.equal(item.reviewed, true, item.infinitive);
    assert.ok(item.meaning.length >= 35, item.infinitive);
    assert.ok(item.usage.length >= 35, item.infinitive);
    assert.ok(item.synonymNote.length >= 45, item.infinitive);
    assert.ok(item.synonyms.length >= 2, item.infinitive);
    assert.ok(item.examples.length >= 2, item.infinitive);
    assert.equal(item.reviewStatus, 'editorially-reviewed', item.infinitive);
  }
});

test('bekende automatische stamfouten zijn in V18.9 afgevangen', () => {
  const achterstellen = atlas.find((item) => item.infinitive === 'achterstellen');
  const afbestellen = atlas.find((item) => item.infinitive === 'afbestellen');
  assert.deepEqual(achterstellen.presentForms.slice(0, 3), ['ik stel achter', 'jij stelt achter', 'hij/zij stelt achter']);
  assert.equal(achterstellen.imperative, 'stel achter');
  assert.deepEqual(afbestellen.presentForms.slice(0, 3), ['ik bestel af', 'jij bestelt af', 'hij/zij bestelt af']);
  assert.equal(afbestellen.imperative, 'bestel af');
});
