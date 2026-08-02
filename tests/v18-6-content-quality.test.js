import test from 'node:test';
import assert from 'node:assert/strict';
import { verbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections, modalAndCoreVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews, coreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews, initialVerbReviews } from '../js/verb-initial-review.js';
import { sourceReviewGrammarTopics, sourceReviewExercises } from '../js/source-review-content.js';

applyVerbCorrections(verbAtlas);
applyCoreVerbReviews(verbAtlas);
applyInitialVerbReviews(verbAtlas);
const get = (name) => verbAtlas.find((verb) => verb.infinitive === name);

const genericMeanings = [
  'Het werkwoord beschrijft vooral een handeling of activiteit.',
  'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',
  'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',
  'Dit werkwoord drukt beweging, richting of verplaatsing uit.',
  'Gebruik vaak hebben voor de activiteit en zijn bij een duidelijke richting of bestemming.',
];

test('V18.18 heeft 1.807 inhoudelijk uitgebreide werkwoordfiches zonder generieke definities', () => {
  assert.equal(modalAndCoreVerbCorrections.length, 19);
  assert.equal(coreVerbReviews.length, 73);
  assert.equal(initialVerbReviews.length, 1748);
  assert.equal(verbAtlas.filter((verb) => verb.reviewed === true).length, 1807);
  for (const verb of verbAtlas.filter((item) => item.reviewed === true)) {
    assert.ok(verb.meaning.length >= 35, `${verb.infinitive}: te korte definitie`);
    assert.ok(!genericMeanings.includes(verb.meaning), `${verb.infinitive}: generieke definitie`);
    assert.ok(verb.synonyms.length >= 1, `${verb.infinitive}: synoniemen ontbreken`);
    assert.equal(new Set(verb.synonyms).size, verb.synonyms.length, `${verb.infinitive}: dubbel synoniem`);
    assert.ok(verb.examples.length >= 2, `${verb.infinitive}: voorbeelden ontbreken`);
  }
});

test('bekende vervoegingsfouten uit V18.5 zijn gecorrigeerd', () => {
  const expected = {
    praten: ['ik praat', 'praatte', 'gepraat'],
    antwoorden: ['ik antwoord', 'antwoordde', 'geantwoord'],
    horen: ['ik hoor', 'hoorde', 'gehoord'],
    eten: ['ik eet', 'at', 'gegeten'],
    wachten: ['ik wacht', 'wachtte', 'gewacht'],
    ontmoeten: ['ik ontmoet', 'ontmoette', 'ontmoet'],
    bellen: ['ik bel', 'belde', 'gebeld'],
    lijken: ['ik lijk', 'leek', 'geleken'],
    vallen: ['ik val', 'viel', 'gevallen'],
  };
  for (const [name, forms] of Object.entries(expected)) {
    const verb = get(name);
    assert.ok(verb, `${name}: ontbreekt`);
    assert.deepEqual([verb.presentForms[0], verb.past, verb.participle], forms, name);
  }
});

test('ontbrekende kernwerkwoorden zijn zonder duplicaten toegevoegd', () => {
  for (const name of ['begrijpen', 'zetten', 'leggen']) {
    assert.equal(verbAtlas.filter((verb) => verb.infinitive === name).length, 1, name);
    assert.equal(get(name).reviewed, true, name);
  }
  assert.equal(verbAtlas.length, 1886);
});

test('de bronreview voegt twaalf uitlegmodules en vierentwintig controleerbare oefeningen toe', () => {
  assert.equal(sourceReviewGrammarTopics.length, 12);
  assert.equal(sourceReviewExercises.length, 24);
  assert.equal(new Set(sourceReviewGrammarTopics.map((item) => item.id)).size, 12);
  assert.equal(new Set(sourceReviewExercises.map((item) => item.id)).size, 24);
  for (const topic of sourceReviewGrammarTopics) {
    assert.ok(topic.summary.length >= 60);
    assert.ok(topic.rule.length >= 30);
    assert.ok(topic.examples.length >= 4);
  }
  for (const exercise of sourceReviewExercises) {
    assert.ok(exercise.prompt && exercise.explanation);
    assert.ok(exercise.type === 'selfcheck' ? exercise.modelAnswer : exercise.answer);
    if (exercise.type === 'choice') assert.ok(exercise.options.includes(exercise.answer));
  }
});
