import test from 'node:test';
import assert from 'node:assert/strict';
import { verbAtlas } from '../js/verb-atlas.js';
import { modalAndCoreVerbCorrections, applyVerbCorrections } from '../js/verb-corrections.js';

applyVerbCorrections(verbAtlas);

const get = (infinitive) => verbAtlas.find((verb) => verb.infinitive === infinitive);
const reviewedNames = modalAndCoreVerbCorrections.map((verb) => verb.infinitive);

const expectedCore = {
  kunnen: ['kon', 'konden', 'gekund', 'hebben'],
  mogen: ['mocht', 'mochten', 'gemogen', 'hebben'],
  moeten: ['moest', 'moesten', 'gemoeten', 'hebben'],
  willen: ['wilde/wou', 'wilden/wouden', 'gewild', 'hebben'],
  zullen: ['zou', 'zouden', '—', '—'],
  hoeven: ['hoefde', 'hoefden', 'gehoeven', 'hebben'],
  durven: ['durfde', 'durfden', 'gedurfd', 'hebben'],
  laten: ['liet', 'lieten', 'gelaten', 'hebben'],
  aandoen: ['deed aan', 'deden aan', 'aangedaan', 'hebben'],
  gaan: ['ging', 'gingen', 'gegaan', 'zijn'],
  komen: ['kwam', 'kwamen', 'gekomen', 'zijn'],
  blijven: ['bleef', 'bleven', 'gebleven', 'zijn'],
  zwemmen: ['zwom', 'zwommen', 'gezwommen', 'hebben/zijn'],
  aannemen: ['nam aan', 'namen aan', 'aangenomen', 'hebben'],
  afnemen: ['nam af', 'namen af', 'afgenomen', 'hebben/zijn'],
  opnemen: ['nam op', 'namen op', 'opgenomen', 'hebben'],
  meenemen: ['nam mee', 'namen mee', 'meegenomen', 'hebben'],
  doorgaan: ['ging door', 'gingen door', 'doorgegaan', 'zijn'],
  uitgaan: ['ging uit', 'gingen uit', 'uitgegaan', 'zijn'],
};

test('V18.5 behoudt exact de negentien expliciet gecontroleerde werkwoorden', () => {
  assert.equal(reviewedNames.length, 19);
  assert.equal(new Set(reviewedNames).size, reviewedNames.length, 'dubbele correctienaam');
  const actual = verbAtlas.filter((verb) => verb.reviewed).map((verb) => verb.infinitive);
  assert.deepEqual(new Set(actual), new Set(reviewedNames));
  assert.equal(get('aanbouwen').reviewed, undefined);
  assert.equal(get('aanvangen').reviewed, undefined);
});

test('de drie ontbrekende modale werkwoorden zijn zonder duplicaten toegevoegd', () => {
  for (const infinitive of ['zullen', 'hoeven', 'durven']) {
    assert.equal(verbAtlas.filter((verb) => verb.infinitive === infinitive).length, 1, `${infinitive}: dubbel of ontbrekend`);
    assert.equal(get(infinitive).reviewed, true);
  }
  assert.equal(verbAtlas.length, 1883);
  assert.equal(verbAtlas.filter((verb) => verb.regularity === 'regelmatig').length, 872);
  assert.equal(verbAtlas.filter((verb) => verb.regularity === 'onregelmatig').length, 1011);
});

test('alle sinds V18 gewijzigde basisvormen en hulpwerkwoorden zijn expliciet gevalideerd', () => {
  for (const [infinitive, expected] of Object.entries(expectedCore)) {
    const verb = get(infinitive);
    assert.ok(verb, `${infinitive}: ontbreekt`);
    assert.deepEqual([verb.past, verb.pastPlural, verb.participle, verb.auxiliary], expected, `${infinitive}: basisvormen`);
    assert.equal(verb.presentForms.length, 6, `${infinitive}: tegenwoordige tijd`);
    assert.equal(verb.pastForms.length, 6, `${infinitive}: verleden tijd`);
  }
});

test('zwemmen heeft de gecorrigeerde stam in alle relevante velden', () => {
  const verb = get('zwemmen');
  assert.deepEqual(verb.presentForms.slice(0, 3), ['ik zwem', 'jij zwemt', 'hij/zij zwemt']);
  assert.equal(verb.imperative, 'zwem');
  assert.doesNotMatch(JSON.stringify(verb), /zweem/);
});

test('alle gecontroleerde fiches hebben echte didactische metadata', () => {
  const forbidden = new Set([
    'Het werkwoord beschrijft vooral een handeling of activiteit.',
    'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',
    'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',
  ]);

  for (const infinitive of reviewedNames) {
    const verb = get(infinitive);
    assert.equal(verb.reviewed, true, `${infinitive}: niet als gecontroleerd gemarkeerd`);
    assert.ok(verb.meaning.length >= 20 && !forbidden.has(verb.meaning), `${infinitive}: definitie`);
    assert.ok(verb.semanticLabel.length >= 8, `${infinitive}: betekenislabel`);
    assert.ok(Array.isArray(verb.synonyms) && verb.synonyms.length > 0, `${infinitive}: synoniemen`);
    assert.ok(Array.isArray(verb.examples) && verb.examples.length >= 2, `${infinitive}: voorbeelden`);
    assert.ok(verb.usage.length >= 20, `${infinitive}: gebruiksnotitie`);
    assert.ok(verb.conjugationClass.length >= 8, `${infinitive}: vervoegingstype`);
    assert.ok(Object.keys(verb.sentencePatterns).length >= 5, `${infinitive}: zinspatronen`);
  }
});

test('modale perfectums tonen vervangende infinitieven waar dat didactisch nodig is', () => {
  assert.ok(get('kunnen').perfectForms.some((form) => form.includes('kunnen')));
  assert.ok(get('mogen').perfectForms.some((form) => form.includes('mogen')));
  assert.ok(get('moeten').perfectForms.some((form) => form.includes('moeten')));
  assert.ok(get('willen').perfectForms.some((form) => form.includes('willen')));
  assert.ok(get('hoeven').perfectForms.some((form) => form.includes('hoeven')));
  assert.ok(get('durven').perfectForms.some((form) => form.includes('durven')));
  assert.ok(get('laten').perfectForms.some((form) => form.includes('laten')));
});

test('zullen gebruikt een afzonderlijke perfectumtoelichting en geen nepvorm', () => {
  const verb = get('zullen');
  assert.deepEqual(verb.perfectForms, []);
  assert.match(verb.perfectNote, /geen zelfstandig perfectum/i);
  assert.equal(verb.participle, '—');
  assert.equal(verb.auxiliary, '—');
});

test('afnemen onderscheidt zijn bij verandering en hebben bij een handeling', () => {
  const verb = get('afnemen');
  assert.equal(verb.auxiliary, 'hebben/zijn');
  assert.ok(verb.perfectForms.some((form) => /is afgenomen/.test(form)));
  assert.ok(verb.perfectForms.some((form) => /heb .*afgenomen/.test(form)));
  assert.match(verb.usage, /zijn.*hebben|hebben.*zijn/i);
});

test('durven beschrijft te zonder regionale variatie als algemene regel voor te stellen', () => {
  const usage = get('durven').usage;
  assert.match(usage, /algemene standaardtaal/i);
  assert.match(usage, /Belgisch-Nederlands/i);
  assert.match(get('durven').sentencePatterns.hoofdzin, /durf .* te /);
});

test('gecontroleerde zinspatronen bevatten geen oude automatisch gemaakte fouten', () => {
  const forbiddenLiteral = [
    'Ik kan kunnen.', 'Ik kan mogen.', 'Ik kan moeten.', 'Ik kan willen.', 'Ik kan zullen.', 'Ik kan hoeven.', 'Ik kan durven.',
    '… omdat ik neem aan.', '… omdat ik neem af.', '… omdat ik neem op.', '… omdat ik neem mee.',
    '… omdat ik ga door.', '… omdat ik ga uit.', '… omdat ik doe aan.'
  ];
  const allPatterns = reviewedNames.flatMap((name) => Object.values(get(name).sentencePatterns));
  for (const sentence of forbiddenLiteral) assert.ok(!allPatterns.includes(sentence), `verboden patroon: ${sentence}`);
  for (const sentence of allPatterns) {
    assert.ok(/[.!?]$/.test(sentence.trim()), `zin zonder eindteken: ${sentence}`);
    assert.doesNotMatch(sentence, /\b(kan|mag|moet|wil|zal|hoef|durf)\s+(kunnen|mogen|moeten|willen|zullen|hoeven|durven)\b/i);
  }
});

test('scheidbare gecontroleerde werkwoorden hebben aaneengeschreven bijzinnen en correcte te-patronen', () => {
  const expected = {
    aandoen: ['aandoe', 'aan te doen'],
    aannemen: ['aanneem', 'aan te nemen'],
    afnemen: ['afneemt', 'af te nemen'],
    opnemen: ['opneem', 'op te nemen'],
    meenemen: ['meeneem', 'mee te nemen'],
    doorgaan: ['doorgaan', 'door te gaan'],
    uitgaan: ['uitgaan', 'uit te gaan'],
  };
  for (const [infinitive, [subordinate, withTe]] of Object.entries(expected)) {
    const patterns = get(infinitive).sentencePatterns;
    assert.match(patterns.bijzin, new RegExp(subordinate));
    assert.match(patterns.metTe, new RegExp(withTe));
  }
});

test('de correctielaag is idempotent en maakt geen dubbele werkwoorden', () => {
  const before = verbAtlas.length;
  applyVerbCorrections(verbAtlas);
  assert.equal(verbAtlas.length, before);
  for (const infinitive of reviewedNames) {
    assert.equal(verbAtlas.filter((verb) => verb.infinitive === infinitive).length, 1, infinitive);
  }
});
