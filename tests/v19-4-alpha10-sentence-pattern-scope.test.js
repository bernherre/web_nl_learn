import test from 'node:test';
import assert from 'node:assert/strict';
import { verbAtlas as sourceVerbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews } from '../js/verb-final-review.js';
import {
  advancedVerbLevelOverrides,
  applyVerbSentencePatternFixes,
  getVerbSentencePatternImperative,
} from '../js/verb-sentence-pattern-fixes.js';

function reviewedAtlas() {
  const atlas = structuredClone(sourceVerbAtlas);
  applyVerbCorrections(atlas);
  applyCoreVerbReviews(atlas);
  applyInitialVerbReviews(atlas);
  applyFinalVerbReviews(atlas);
  return atlas;
}

function withoutAllowedChanges(verb) {
  const copy = structuredClone(verb);
  delete copy.sentencePatterns;
  if (advancedVerbLevelOverrides[copy.infinitive]) delete copy.level;
  return copy;
}

test('de gerichte laag verandert alleen sentencePatterns en de expliciete C1-C2-indeling', () => {
  const before = reviewedAtlas();
  const after = structuredClone(before);
  applyVerbSentencePatternFixes(after);

  for (const verb of after) {
    const original = before.find((item) => item.infinitive === verb.infinitive);
    assert.deepEqual(
      withoutAllowedChanges(verb),
      withoutAllowedChanges(original),
      `${verb.infinitive}: een ander ficheonderdeel dan Zinspositie en gebruik is gewijzigd`,
    );
  }
});

test('de imperatiefkop wordt afgeleid zonder het werkwoordobject uit te breiden', () => {
  const atlas = reviewedAtlas();
  applyVerbSentencePatternFixes(atlas);

  const aanbakken = atlas.find((verb) => verb.infinitive === 'aanbakken');
  const aanstaan = atlas.find((verb) => verb.infinitive === 'aanstaan');

  assert.equal(Object.hasOwn(aanbakken, 'sentencePatternImperative'), false);
  assert.equal(Object.hasOwn(aanstaan, 'sentencePatternImperative'), false);
  assert.equal(getVerbSentencePatternImperative(aanbakken), 'bak het vlees kort aan');
  assert.equal(getVerbSentencePatternImperative(aanstaan), 'niet gebruikelijk bij deze betekenis');
});
