import test from 'node:test';
import assert from 'node:assert/strict';
import { verbAtlas as sourceVerbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews } from '../js/verb-final-review.js';
import {
  a2SentencePatternImperativeLabels,
  a2SentencePatternOverrides,
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

function withoutSentencePatterns(verb) {
  const copy = structuredClone(verb);
  delete copy.sentencePatterns;
  return copy;
}

const forbiddenBarePatterns = [
  /^Ik\s+\S+(?:\s+\S+)?\.$/u,
  /^Ik kan\s+\S+\.$/u,
  /^\.\.\. omdat ik\s+\S+\.$/u,
  /\b(?:aanraad|besteel|invul|opruim)\b/iu,
];

test('alle 39 A2-fiches hebben een expliciet nagekeken patroon zonder structuurverlies', () => {
  const before = reviewedAtlas();
  const after = structuredClone(before);
  applyVerbSentencePatternFixes(after);

  const originals = before.filter((verb) => verb.level === 'A2');
  assert.equal(originals.length, 39);
  assert.deepEqual(
    Object.keys(a2SentencePatternOverrides).sort((a, b) => a.localeCompare(b, 'nl-NL')),
    originals.map((verb) => verb.infinitive).sort((a, b) => a.localeCompare(b, 'nl-NL')),
  );
  assert.deepEqual(
    Object.keys(a2SentencePatternImperativeLabels).sort((a, b) => a.localeCompare(b, 'nl-NL')),
    originals.map((verb) => verb.infinitive).sort((a, b) => a.localeCompare(b, 'nl-NL')),
  );

  for (const original of originals) {
    const verb = after.find((item) => item.infinitive === original.infinitive);
    assert.deepEqual(
      withoutSentencePatterns(verb),
      withoutSentencePatterns(original),
      `${verb.infinitive}: buiten Zinspositie en gebruik is inhoud gewijzigd`,
    );
    assert.deepEqual(
      Object.keys(verb.sentencePatterns),
      Object.keys(original.sentencePatterns),
      `${verb.infinitive}: de bestaande kaartstructuur is gewijzigd`,
    );
    assert.deepEqual(
      verb.sentencePatterns,
      a2SentencePatternOverrides[verb.infinitive],
      `${verb.infinitive}: niet alle A2-patronen komen uit de nagekeken laag`,
    );

    for (const [key, sentence] of Object.entries(verb.sentencePatterns)) {
      assert.ok(sentence.trim().split(/\s+/u).length >= 4, `${verb.infinitive}.${key}: te weinig context`);
      for (const pattern of forbiddenBarePatterns) {
        assert.equal(pattern.test(sentence), false, `${verb.infinitive}.${key}: onvolledig of fout patroon: ${sentence}`);
      }
    }

    const imperative = getVerbSentencePatternImperative(verb);
    assert.equal(imperative, a2SentencePatternImperativeLabels[verb.infinitive]);
    assert.ok(imperative.length >= 3, `${verb.infinitive}: ontbrekende imperatiefkop`);
  }
});

test('bekende A2-risicovormen zijn expliciet gecorrigeerd', () => {
  const atlas = reviewedAtlas();
  applyVerbSentencePatternFixes(atlas);

  const byInfinitive = Object.fromEntries(atlas.map((verb) => [verb.infinitive, verb]));
  assert.equal(getVerbSentencePatternImperative(byInfinitive.aanraden), 'raad deze cursus aan');
  assert.equal(getVerbSentencePatternImperative(byInfinitive.bestellen), 'bestel het boek online');
  assert.equal(getVerbSentencePatternImperative(byInfinitive.invullen), 'vul het formulier volledig in');
  assert.equal(getVerbSentencePatternImperative(byInfinitive.opruimen), 'ruim je werkplek op');
  assert.equal(byInfinitive.inschrijven.sentencePatterns.bijzin, '... omdat ik me voor de avondcursus inschrijf.');
  assert.equal(byInfinitive.opnemen.sentencePatterns.metTe, 'Hij besloot het telefoongesprek niet op te nemen.');
});
