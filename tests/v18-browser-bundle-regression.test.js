import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const bundle = readFileSync(new URL('../js/app.js', import.meta.url), 'utf8');
const source = readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const serviceWorker = readFileSync(new URL('../service-worker.js', import.meta.url), 'utf8');
const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('de klassieke browserbundle definieert verbcorrecties voor gebruik', () => {
  const definition = bundle.indexOf('function applyVerbCorrections(atlas)');
  const invocation = bundle.indexOf('applyVerbCorrections(verbAtlas);');
  assert.ok(definition >= 0, 'applyVerbCorrections ontbreekt in js/app.js');
  assert.ok(invocation > definition, 'applyVerbCorrections wordt aangeroepen voordat de functie bestaat');
});

test('de eerste alfabetische verbatch staat vóór de toepassing in de browserbundle', () => {
  const dataDefinition = bundle.indexOf('const initialVerbReviews =');
  const functionDefinition = bundle.indexOf('function applyInitialVerbReviews(atlas)');
  const invocation = bundle.indexOf('applyInitialVerbReviews(verbAtlas);');
  assert.ok(dataDefinition >= 0, 'initialVerbReviews ontbreekt in js/app.js');
  assert.ok(functionDefinition > dataDefinition, 'applyInitialVerbReviews staat vóór de batchdata');
  assert.ok(invocation > functionDefinition, 'applyInitialVerbReviews wordt aangeroepen voordat de functie bestaat');
  assert.match(bundle, /Met de hand zacht en meestal herhaaldelijk/);
  assert.match(bundle, /"participle": "aanbeden"/);
});

test('de klassieke browserbundle bevat de kennisgraafimplementatie vóór initialisatie', () => {
  const definition = bundle.indexOf('function createKnowledgeGraphExplorer(');
  const invocation = bundle.indexOf('knowledgeGraphExplorer = createKnowledgeGraphExplorer({');
  assert.ok(definition >= 0, 'createKnowledgeGraphExplorer ontbreekt als functie in js/app.js');
  assert.ok(invocation > definition, 'de kennisgraaf wordt geïnitialiseerd voordat de implementatie is gebundeld');
});

test('de werkwoorddetailpagina leest definities en voorbeeldzinnen voor', () => {
  for (const code of [source, bundle]) {
    assert.match(code, /Luister naar de definitie van/);
    assert.match(code, /Luister naar voorbeeldzin/);
    assert.match(code, /Synoniemen, gebruik en voorbeelden/);
  }
});

test('niet-gecontroleerde atlasitems krijgen geen verzonnen synoniemen of voorbeelden', () => {
  assert.match(bundle, /function hasReviewedVerbMetadata\(verb\)/);
  assert.doesNotMatch(bundle, /Geen direct synoniem; vergelijk de voorbeelden\./);
  assert.doesNotMatch(bundle, /Bekijk de voorbeelden voor het gebruik in context\./);
  assert.match(bundle, /Betekenis nog niet handmatig nagekeken/);
  assert.match(bundle, /Grammaticale basisinformatie/);
});

test('zullen toont een echte toelichting in plaats van een verzonnen perfectum', () => {
  assert.match(bundle, /Zullen heeft in het gewone modale gebruik geen zelfstandig perfectum\./);
  assert.match(source, /perfectContent/);
  assert.match(source, /geen zelfstandig perfectum/);
});

test('de zichtbare werkwoordenaantallen zijn onderling consistent', () => {
  assert.match(index, /Zoek in 1\.886 werkwoorden\./);
  assert.match(index, /<strong>1\.886<\/strong> werkwoorden/);
  assert.match(index, /<strong>873<\/strong> regelmatig/);
  assert.match(index, /<strong>1\.013<\/strong> onregelmatig/);
});

test('V18.18 gebruikt netwerkverversing voor de shell, correctielagen en kennisgraaf', () => {
  assert.equal(packageJson.version, '18.18.0');
  assert.match(serviceWorker, /nederlands-gewoon-doen-v18-18-0/);
  assert.match(serviceWorker, /networkFirst/);
  assert.match(index, /styles\.css\?v=18\.18\.0/);
  assert.match(index, /app\.js\?v=18\.18\.0/);
  assert.match(serviceWorker, /\.\/js\/verb-corrections\.js/);
  assert.match(serviceWorker, /\.\/js\/verb-core-review\.js/);
  assert.match(serviceWorker, /\.\/js\/verb-initial-review\.js/);
  assert.match(serviceWorker, /\.\/js\/knowledge-graph\.js/);
  assert.match(bundle, /createKnowledgeGraphExplorer/);
});

test('de bundle bevat de gecorrigeerde zinspatronen en niet de oude fouten', () => {
  for (const expected of [
    'Ik besluit het aanbod aan te nemen.',
    '… omdat ik het aanbod aanneem.',
    'Ik heb goed kunnen oefenen.',
    'Je hebt niet hoeven wachten.'
  ]) assert.ok(bundle.includes(expected), `ontbreekt in bundle: ${expected}`);

  const correctionStart = bundle.indexOf('const modalAndCoreVerbCorrections = [');
  const correctionEnd = bundle.indexOf('function validateCorrection(item)', correctionStart);
  const runtimeCorrections = bundle.slice(correctionStart, correctionEnd);
  for (const forbidden of [
    'Ik kan kunnen.',
    '… omdat ik neem aan.',
    '… omdat ik ga door.',
    '… omdat ik doe aan.'
  ]) assert.ok(!runtimeCorrections.includes(forbidden), `oude fout staat in de actieve correctielaag: ${forbidden}`);
});


test('de bundle toont geen generieke classificatie meer als nagekeken definitie', () => {
  assert.match(bundle, /Betekenis nog niet handmatig nagekeken/);
  assert.match(bundle, /Een specifieke definitie, synoniemen en gebruiksvoorbeelden volgen pas na taalcontrole/);
  assert.match(bundle, /aria-label="Luister naar de definitie van/);
  assert.match(bundle, /Synoniemen, gebruik en voorbeelden/);
});
