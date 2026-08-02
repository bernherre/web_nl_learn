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

const batch = initialVerbReviews.filter((item) => item.reviewBatch === 'V18.10-A126-A150');
const expected = [
  'afbuigen','afdalen','afdansen','afdoen','afdraaien','afdragen','afdrijven','afdringen','afdrinken','afdrogen',
  'afdruipen','afduwen','afdweilen','afdwingen','afeten','affietsen','affluiten','afgaan','afgeven','afglijden',
  'afgooien','afgraven','afhalen','afhangen','afhelpen',
];

test('V18.10 bevat de volgende 25 alfabetische reviews', () => {
  assert.equal(batch.length, 25);
  assert.deepEqual(batch.map((item) => item.infinitive), expected);
});

test('de V18.10-batch heeft specifieke definities, synoniemen en voorbeelden', () => {
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

test('morfologische fouten in afeten en afhalen zijn gecorrigeerd', () => {
  const afeten = atlas.find((item) => item.infinitive === 'afeten');
  const afhalen = atlas.find((item) => item.infinitive === 'afhalen');
  assert.deepEqual(afeten.presentForms.slice(0, 3), ['ik eet af','jij eet af','hij/zij eet af']);
  assert.equal(afeten.participle, 'afgegeten');
  assert.equal(afhalen.separable, true);
  assert.equal(afhalen.participle, 'afgehaald');
  assert.deepEqual(afhalen.presentForms.slice(0, 3), ['ik haal af','jij haalt af','hij/zij haalt af']);
});

test('hulpwerkwoorden bij bewegingswerkwoorden zijn inhoudelijk vastgelegd', () => {
  assert.equal(atlas.find((item) => item.infinitive === 'afdruipen').auxiliary, 'zijn');
  assert.equal(atlas.find((item) => item.infinitive === 'afdrijven').auxiliary, 'hebben/zijn');
  assert.equal(atlas.find((item) => item.infinitive === 'affietsen').auxiliary, 'hebben/zijn');
});
