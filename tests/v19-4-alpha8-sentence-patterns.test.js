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

function withoutAllowedSentenceChanges(verb) {
  const copy = structuredClone(verb);
  delete copy.sentencePatterns;
  if (advancedVerbLevelOverrides[copy.infinitive]) delete copy.level;
  return copy;
}

test('Alpha 8 behoudt alle 1.886 fiches en raakt geen andere verbsectie aan', () => {
  const before = reviewedAtlas();
  const after = structuredClone(before);
  applyVerbSentencePatternFixes(after);

  assert.equal(after.length, 1886);
  assert.deepEqual(
    after.map((verb) => verb.infinitive),
    before.map((verb) => verb.infinitive),
    'de correctielaag mag geen fiches verwijderen, toevoegen of herordenen',
  );

  for (const verb of after) {
    const original = before.find((item) => item.infinitive === verb.infinitive);
    assert.deepEqual(
      withoutAllowedSentenceChanges(verb),
      withoutAllowedSentenceChanges(original),
      `${verb.infinitive}: buiten Zinspositie en gebruik is inhoud gewijzigd`,
    );
    assert.deepEqual(
      Object.keys(verb.sentencePatterns || {}),
      Object.keys(original.sentencePatterns || {}),
      `${verb.infinitive}: de kaartstructuur van Zinspositie en gebruik is gewijzigd`,
    );
  }
});

test('A0 en A1 blijven volledig identiek aan Alpha 2', () => {
  const before = reviewedAtlas();
  const after = structuredClone(before);
  applyVerbSentencePatternFixes(after);

  for (const original of before.filter((verb) => ['A0', 'A1'].includes(verb.level))) {
    const verb = after.find((item) => item.infinitive === original.infinitive);
    assert.deepEqual(verb, original, `${original.infinitive}: A0/A1 mag niet wijzigen`);
  }
});

test('aanstaan toont volledige context zonder de structuur te reduceren', () => {
  const atlas = reviewedAtlas();
  const original = structuredClone(atlas.find((verb) => verb.infinitive === 'aanstaan'));
  applyVerbSentencePatternFixes(atlas);
  const verb = atlas.find((item) => item.infinitive === 'aanstaan');

  assert.deepEqual(Object.keys(verb.sentencePatterns), Object.keys(original.sentencePatterns));
  assert.deepEqual(verb.sentencePatterns, {
    hoofdzin: 'Die harde muziek staat mij niet aan.',
    verleden: 'Die harde muziek stond mij vroeger ook niet aan.',
    perfectum: 'Die houding heeft mij nooit aangestaan.',
    modaal: 'Zo’n dwingende toon kan veel mensen niet aanstaan.',
    bijzin: '... omdat die harde muziek mij niet aanstaat.',
    metTe: 'Die harde muziek lijkt mij niet aan te staan.',
  });
  assert.equal(getVerbSentencePatternImperative(verb), 'niet gebruikelijk bij deze betekenis');
  assert.equal(Object.hasOwn(verb, 'sentencePatternImperative'), false);
});

test('de handmatig gecontroleerde laag verbetert een B1-lot zonder volledige dekking te claimen', () => {
  const before = reviewedAtlas();
  const after = structuredClone(before);
  applyVerbSentencePatternFixes(after);
  const changed = after.filter((verb) => {
    const original = before.find((item) => item.infinitive === verb.infinitive);
    return verb.level === 'B1' && JSON.stringify(verb.sentencePatterns) !== JSON.stringify(original.sentencePatterns);
  });
  assert.ok(changed.length >= 50, `slechts ${changed.length} B1-fiches verbeterd`);
  assert.ok(changed.some((verb) => verb.infinitive === 'aanstaan'));
});
