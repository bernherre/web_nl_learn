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
  verbSentencePatternOverrides,
} from '../js/verb-sentence-pattern-fixes.js';

function clone(value) {
  return structuredClone(value);
}

function buildAtlasBeforeFixes() {
  const atlas = clone(sourceVerbAtlas);
  applyVerbCorrections(atlas);
  applyCoreVerbReviews(atlas);
  applyInitialVerbReviews(atlas);
  applyFinalVerbReviews(atlas);
  return atlas;
}

function withoutAllowedChanges(verb) {
  const copy = clone(verb);
  delete copy.sentencePatterns;
  delete copy.level;
  return copy;
}

test('Alpha 7 behoudt alle 1.886 fiches en verandert geen A0- of A1-fiche', () => {
  const before = buildAtlasBeforeFixes();
  const after = clone(before);
  applyVerbSentencePatternFixes(after);

  assert.equal(before.length, 1886);
  assert.equal(after.length, 1886);

  for (const original of before.filter((verb) => ['A0', 'A1'].includes(verb.level))) {
    const current = after.find((verb) => verb.infinitive === original.infinitive);
    assert.deepEqual(current, original, `${original.infinitive} uit ${original.level} mag niet veranderen`);
  }
});

test('de gerichte laag verandert alleen sentencePatterns en de expliciete C1-C2-indeling', () => {
  const before = buildAtlasBeforeFixes();
  const after = clone(before);
  applyVerbSentencePatternFixes(after);

  for (const original of before) {
    const current = after.find((verb) => verb.infinitive === original.infinitive);
    assert.deepEqual(
      withoutAllowedChanges(current),
      withoutAllowedChanges(original),
      `${original.infinitive}: een ander ficheonderdeel dan Zinspositie en gebruik is gewijzigd`,
    );

    const expectedLevel = advancedVerbLevelOverrides[original.infinitive] || original.level;
    assert.equal(current.level, expectedLevel, `${original.infinitive}: onverwachte niveauwijziging`);

    if (verbSentencePatternOverrides[original.infinitive] && !['A0', 'A1'].includes(expectedLevel)) {
      assert.deepEqual(
        Object.keys(current.sentencePatterns || {}),
        Object.keys(original.sentencePatterns || {}),
        `${original.infinitive}: de kaartstructuur van Zinspositie en gebruik is gewijzigd`,
      );
    }
  }
});

test('de bekende A2- en B1-fouten hebben context zonder de kaartstructuur te wijzigen', () => {
  const before = buildAtlasBeforeFixes();
  const after = clone(before);
  applyVerbSentencePatternFixes(after);

  const cases = {
    inschrijven: {
      hoofdzin: 'Ik schrijf me vandaag in voor de taalcursus.',
      perfectum: 'Ik heb me online voor het examen ingeschreven.',
      bijzin: '... omdat ik me voor de avondcursus inschrijf.',
    },
    ruilen: {
      hoofdzin: 'Ik ruil mijn boek met Noor.',
      verleden: 'Ik ruilde mijn jas voor een grotere maat.',
    },
    aanbakken: {
      hoofdzin: 'De rijst bakt aan op de bodem van de pan.',
      metTe: 'De kok probeert het vlees kort aan te bakken.',
    },
  };

  for (const [infinitive, expected] of Object.entries(cases)) {
    const original = before.find((verb) => verb.infinitive === infinitive);
    const current = after.find((verb) => verb.infinitive === infinitive);
    assert.deepEqual(Object.keys(current.sentencePatterns), Object.keys(original.sentencePatterns));
    for (const [key, sentence] of Object.entries(expected)) {
      assert.equal(current.sentencePatterns[key], sentence);
    }
  }
});

test('de werkwoordenatlas bevat zichtbare C1- en C2-fiches zonder fiches te verwijderen', () => {
  const atlas = buildAtlasBeforeFixes();
  applyVerbSentencePatternFixes(atlas);

  assert.equal(atlas.filter((verb) => verb.level === 'C1').length, 8);
  assert.equal(atlas.filter((verb) => verb.level === 'C2').length, 4);
  assert.equal(atlas.find((verb) => verb.infinitive === 'nuanceren').level, 'C1');
  assert.equal(atlas.find((verb) => verb.infinitive === 'herinterpreteren').level, 'C2');
});

function hasBareFormSentence(verb) {
  const patterns = verb.sentencePatterns || {};
  const values = Object.values(patterns).map((sentence) => String(sentence).replace(/^\.\.\./u, '…').trim());
  const exactForms = new Set(
    [...(verb.presentForms || []), ...(verb.pastForms || []), ...(verb.perfectForms || [])]
      .map((form) => `${form.charAt(0).toUpperCase()}${form.slice(1)}.`),
  );
  return values.some((sentence) => exactForms.has(sentence))
    || patterns.modaal === `Ik kan ${verb.infinitive}.`
    || /^… omdat ik \S+\.$/u.test(patterns.bijzin || '')
    || /^… om (?:\S+ )?te \S+\.$/u.test(patterns.metTe || '');
}

test('A2 en B2 behouden hun volledige fiches maar hebben geen kale vormzinnen meer', () => {
  const atlas = buildAtlasBeforeFixes();
  applyVerbSentencePatternFixes(atlas);

  for (const level of ['A2', 'B2']) {
    const verbs = atlas.filter((verb) => verb.level === level);
    assert.ok(verbs.length > 0, `${level}: geen werkwoorden gevonden`);
    assert.deepEqual(
      verbs.filter(hasBareFormSentence).map((verb) => verb.infinitive),
      [],
      `${level}: er staan nog kale vormzinnen in Zinspositie en gebruik`,
    );
  }
});

test('de gerichte B1-batch verbetert context zonder het overige B1-aanbod te verwijderen', () => {
  const before = buildAtlasBeforeFixes();
  const after = clone(before);
  applyVerbSentencePatternFixes(after);

  assert.equal(after.filter((verb) => verb.level === 'B1').length, 1740);
  const corrected = after.filter((verb) => (
    verb.level === 'B1'
    && verbSentencePatternOverrides[verb.infinitive]
    && !advancedVerbLevelOverrides[verb.infinitive]
  ));
  assert.equal(corrected.length, 26);
  assert.equal(after.find((verb) => verb.infinitive === 'aanbakken').sentencePatterns.hoofdzin, 'De rijst bakt aan op de bodem van de pan.');
});

test('de klassieke browserbundle past de gerichte correctielaag toe vóór de interface start', async () => {
  const { readFile } = await import('node:fs/promises');
  const bundle = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');
  const definition = bundle.indexOf('function applyVerbSentencePatternFixes(atlas)');
  const application = bundle.indexOf('applyVerbSentencePatternFixes(verbAtlas);');
  const renderer = bundle.indexOf('function renderVerbDetail(');

  assert.ok(definition >= 0, 'definitie van applyVerbSentencePatternFixes ontbreekt');
  assert.ok(application > definition, 'de correctielaag wordt niet na haar definitie toegepast');
  assert.ok(renderer > application, 'de interface kan starten voordat de correctielaag is toegepast');
});
