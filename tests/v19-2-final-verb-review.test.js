import test from 'node:test';
import assert from 'node:assert/strict';
import { verbAtlas as baseVerbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews, finalVerbReviews } from '../js/verb-final-review.js';

const atlas = structuredClone(baseVerbAtlas);
applyVerbCorrections(atlas);
applyCoreVerbReviews(atlas);
applyInitialVerbReviews(atlas);
applyFinalVerbReviews(atlas);
const byName = new Map(atlas.map((item) => [item.infinitive, item]));

test('alle resterende 79 werkwoorden hebben een volledige lexicale review', () => {
  assert.equal(finalVerbReviews.length, 79);
  assert.equal(atlas.filter((item) => item.reviewed !== true).length, 0);
  for (const item of finalVerbReviews) {
    assert.ok(item.meaning.length >= 35, item.infinitive);
    assert.ok(item.usage.length >= 35, item.infinitive);
    assert.ok(item.synonymNote.length >= 45, item.infinitive);
    assert.ok(item.synonyms.length >= 1, item.infinitive);
    assert.ok(item.examples.length >= 2, item.infinitive);
  }
});

test('bekende morfologische fouten in de laatste reviewlaag zijn hersteld', () => {
  assert.equal(byName.get('weggooien').participle, 'weggegooid');
  assert.equal(byName.get('weggooien').separable, true);
  assert.equal(byName.get('weerleggen').participle, 'weerlegd');
  assert.equal(byName.get('wegduiken').auxiliary, 'zijn');
  assert.equal(byName.get('wegwaaien').auxiliary, 'zijn');
  assert.equal(byName.get('wegzakken').auxiliary, 'zijn');
  assert.equal(byName.get('zakken').auxiliary, 'zijn');
  assert.equal(byName.get('wegvallen').stem, 'val');
});

test('zeldzame of contextgevoelige lemma’s worden niet als alledaagse synoniemen gepresenteerd', () => {
  assert.equal(byName.get('weerkomen').level, 'B2');
  assert.match(byName.get('weerkomen').usage, /weinig frequent|verouder/u);
  assert.match(byName.get('wegmaken').usage, /weinig frequent/u);
  assert.match(byName.get('wegstemmen').usage, /stemming/u);
});
