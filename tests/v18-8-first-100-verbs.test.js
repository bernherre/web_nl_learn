import test from 'node:test';
import assert from 'node:assert/strict';
import { verbAtlas as baseVerbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews, initialVerbReviews } from '../js/verb-initial-review.js';

const atlas = structuredClone(baseVerbAtlas);
applyVerbCorrections(atlas);
applyCoreVerbReviews(atlas);
applyInitialVerbReviews(atlas);

const firstHundred = [...atlas]
  .sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL'))
  .slice(0, 100);
const get = (name) => atlas.find((verb) => verb.infinitive === name);

const genericMeanings = new Set([
  'Het werkwoord beschrijft vooral een handeling of activiteit.',
  'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',
  'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',
  'Dit werkwoord drukt beweging, richting of verplaatsing uit.',
]);

test('de eerste honderd alfabetische werkwoorden zijn inhoudelijk compleet', () => {
  assert.equal(firstHundred.length, 100);
  assert.equal(firstHundred[0].infinitive, 'aaien');
  assert.equal(firstHundred.at(-1).infinitive, 'accepteren');
  for (const verb of firstHundred) {
    assert.equal(verb.reviewed, true, `${verb.infinitive}: niet nagekeken`);
    assert.ok(verb.meaning?.length >= 35, `${verb.infinitive}: definitie ontbreekt of is te kort`);
    assert.ok(!genericMeanings.has(verb.meaning), `${verb.infinitive}: generieke definitie`);
    assert.ok(Array.isArray(verb.synonyms) && verb.synonyms.length >= 1, `${verb.infinitive}: synoniemen ontbreken`);
    assert.equal(new Set(verb.synonyms.map((item) => item.toLocaleLowerCase('nl-NL'))).size, verb.synonyms.length, `${verb.infinitive}: dubbele synoniemen`);
    assert.ok(!verb.synonyms.some((item) => item.toLocaleLowerCase('nl-NL') === verb.infinitive), `${verb.infinitive}: lemma als eigen synoniem`);
    assert.ok(verb.synonymNote?.length >= 45, `${verb.infinitive}: verschil tussen synoniemen onvoldoende uitgelegd`);
    assert.ok(verb.usage?.length >= 35, `${verb.infinitive}: gebruiksnotitie ontbreekt`);
    assert.ok(Array.isArray(verb.examples) && verb.examples.length >= 2, `${verb.infinitive}: voorbeelden ontbreken`);
    assert.equal(verb.presentForms?.length, 6, `${verb.infinitive}: tegenwoordige tijd onvolledig`);
    assert.equal(verb.pastForms?.length, 6, `${verb.infinitive}: verleden tijd onvolledig`);
    assert.ok(verb.perfectForms?.length >= 2, `${verb.infinitive}: perfectum onvolledig`);
  }
});

test('de alfabetische reviewfiches hebben traceerbare batchmetadata', () => {
  const firstBatch = initialVerbReviews.filter((verb) => verb.reviewBatch === 'V18.8-A001-A100');
  assert.equal(firstBatch.length, 98);
  for (const verb of firstBatch) {
    assert.equal(verb.reviewStatus, 'editorially-reviewed', `${verb.infinitive}: verkeerde reviewstatus`);
    assert.ok(verb.lexicalSource?.length >= 30, `${verb.infinitive}: bronmethode ontbreekt`);
  }
  const firstNames = new Set(firstHundred.map((verb) => verb.infinitive));
  assert.ok(firstBatch.every((verb) => firstNames.has(verb.infinitive)), 'de eerste batch valt niet volledig binnen de eerste honderd');
  assert.deepEqual(firstHundred.filter((verb) => !firstBatch.some((item) => item.infinitive === verb.infinitive)).map((verb) => verb.infinitive), ['aandoen', 'aannemen']);
});

test('risicovormen in de eerste batch zijn expliciet gecorrigeerd', () => {
  const expected = {
    aanbidden: ['ik bid aan', 'jij bidt aan', 'bad aan', 'aanbeden', 'hebben'],
    aangaan: ['ik ga aan', 'jij gaat aan', 'ging aan', 'aangegaan', 'hebben/zijn'],
    aanhebben: ['ik heb aan', 'jij hebt aan', 'had aan', 'aangehad', 'hebben'],
    aankunnen: ['ik kan aan', 'jij kunt/kan aan', 'kon aan', 'aangekund', 'hebben'],
    aanslaan: ['ik sla aan', 'jij slaat aan', 'sloeg aan', 'aangeslagen', 'hebben'],
    aanstaan: ['ik sta aan', 'jij staat aan', 'stond aan', 'aangestaan', 'hebben'],
    aanstellen: ['ik stel aan', 'jij stelt aan', 'stelde aan', 'aangesteld', 'hebben'],
    aantellen: ['ik tel aan', 'jij telt aan', 'telde aan', 'aangeteld', 'hebben'],
    aantreffen: ['ik tref aan', 'jij treft aan', 'trof aan', 'aangetroffen', 'hebben'],
    aanvallen: ['ik val aan', 'jij valt aan', 'viel aan', 'aangevallen', 'hebben'],
  };
  for (const [name, forms] of Object.entries(expected)) {
    const verb = get(name);
    assert.ok(verb, `${name}: ontbreekt`);
    assert.deepEqual([verb.presentForms[0], verb.presentForms[1], verb.past, verb.participle, verb.auxiliary], forms, name);
  }
  const aanmatigen = get('aanmatigen');
  assert.equal(aanmatigen.reflexive, true);
  assert.deepEqual(aanmatigen.presentForms.slice(0, 3), ['ik matig mij aan', 'jij matigt je aan', 'hij/zij matigt zich aan']);
  assert.match(aanmatigen.perfectForms[0], /heb mij .* aangematigd/);
  const text = firstHundred.flatMap((verb) => [verb.participle, ...verb.presentForms, ...verb.pastForms]).join(' ');
  for (const forbidden of ['geaan', 'kant aan', 'steelt aan', 'teelt aan', 'treeft aan', 'vaalt aan']) {
    assert.ok(!text.includes(forbidden), `generatorfout aangetroffen: ${forbidden}`);
  }
});

test('zeldzame of regionale lemma’s zijn niet als alledaags Nederlands gepresenteerd', () => {
  for (const name of ['aanklinken', 'aantellen', 'aanwerpen', 'aanwinnen']) {
    const verb = get(name);
    assert.ok(verb, `${name}: ontbreekt`);
    assert.ok(verb.register, `${name}: registermarkering ontbreekt`);
    assert.match(`${verb.usage} ${verb.register}`, /(zeldzaam|verouderd|historisch|regionaal|formeel|vaktaal)/i, `${name}: gebruiksbeperking ontbreekt`);
  }
});
