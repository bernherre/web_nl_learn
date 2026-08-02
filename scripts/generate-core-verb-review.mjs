import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const definitions = JSON.parse(await readFile(new URL('data/core-verb-definitions.json', root), 'utf8'));
const lines = (await readFile(new URL('data/sources/pattern-nl-verbs.txt', root), 'utf8'))
  .trim()
  .split(/\r?\n/u)
  .filter(Boolean)
  .map((line) => line.split(','));
const morphology = new Map();
for (const row of lines) if (!morphology.has(row[0])) morphology.set(row[0], row);

const formExceptions = {
  werken: { present: ['werk', 'werkt', 'werkt'], past: 'werkte', pastPlural: 'werkten', participle: 'gewerkt' },
};

function formsFor(definition) {
  const row = morphology.get(definition.infinitive);
  if (!row) throw new Error(`Geen morfologische bronvorm voor ${definition.infinitive}`);
  const exception = formExceptions[definition.infinitive] || {};
  const first = exception.present?.[0] || row[1];
  const second = exception.present?.[1] || row[2];
  const third = exception.present?.[2] || row[3];
  const past = exception.past || row[10];
  const pastPlural = exception.pastPlural || row[9];
  const participle = exception.participle || row[11];
  if (![first, second, third, past, pastPlural, participle].every(Boolean)) {
    throw new Error(`Onvolledige morfologische bronvorm voor ${definition.infinitive}`);
  }

  const presentForms = [
    `ik ${first}`, `jij ${second}`, `hij/zij ${third}`,
    `wij ${definition.infinitive}`, `jullie ${definition.infinitive}`, `zij ${definition.infinitive}`,
  ];
  const pastForms = [
    `ik ${past}`, `jij ${past}`, `hij/zij ${past}`,
    `wij ${pastPlural}`, `jullie ${pastPlural}`, `zij ${pastPlural}`,
  ];

  let perfectForms;
  if (definition.auxiliary === 'zijn') {
    perfectForms = [`ik ben ${participle}`, `wij zijn ${participle}`];
  } else if (definition.auxiliary === 'hebben/zijn') {
    perfectForms = [`ik heb ${participle}`, `ik ben ${participle}`];
  } else {
    perfectForms = [`ik heb ${participle}`, `wij hebben ${participle}`];
  }

  const regularity = /(?:de|te)$/u.test(past) ? 'regelmatig' : 'onregelmatig';
  const sentencePatterns = {
    hoofdzin: definition.examples[0],
    voorbeeld: definition.examples[1],
    context: definition.examples[2] || definition.examples[0],
    verleden: `Ik ${past}.`,
    perfectum: perfectForms[0] + '.',
  };

  return {
    ...definition,
    stem: first,
    past,
    pastPlural,
    participle,
    regularity,
    separable: false,
    presentForms,
    pastForms,
    perfectForms,
    imperative: definition.imperative || first,
    sentencePatterns,
    relatedWords: definition.relatedWords || [],
    fixedPreposition: definition.fixedPreposition || '',
    reflexive: definition.reflexive || false,
    curated: true,
    reviewed: true,
    formsReviewed: true,
    formsSource: 'Pattern NL verb lexicon; handmatig gecontroleerde kernselectie',
  };
}

const reviews = definitions.map(formsFor);
const duplicate = reviews.find((item, index) => reviews.findIndex((other) => other.infinitive === item.infinitive) !== index);
if (duplicate) throw new Error(`Dubbele definitie: ${duplicate.infinitive}`);

const source = `/**\n * Handmatig geschreven kernwoordenboek met gecontroleerde definities,\n * contextuele synoniemen en morfologische vormen uit de Pattern NL-lexicon.\n * Gegenereerd met scripts/generate-core-verb-review.mjs.\n */\n\nexport const coreVerbReviews = ${JSON.stringify(reviews, null, 2)};\n\nconst coreGenericMeanings = new Set([\n  'Het werkwoord beschrijft vooral een handeling of activiteit.',\n  'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',\n  'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',\n]);\n\nfunction validateReview(item) {\n  const required = ['infinitive', 'meaning', 'semanticLabel', 'usage', 'synonymNote', 'past', 'pastPlural', 'participle', 'conjugationClass'];\n  for (const field of required) {\n    if (typeof item[field] !== 'string' || item[field].trim().length < 2) throw new Error(\`${'${item.infinitive}'}: ongeldig veld ${'${field}'}\`);\n  }\n  if (item.meaning.length < 35 || coreGenericMeanings.has(item.meaning)) throw new Error(\`${'${item.infinitive}'}: definitie is generiek of te kort\`);\n  if (!Array.isArray(item.synonyms) || item.synonyms.length < 2 || new Set(item.synonyms).size !== item.synonyms.length) throw new Error(\`${'${item.infinitive}'}: synoniemen zijn onvolledig of dubbel\`);\n  if (!Array.isArray(item.examples) || item.examples.length < 2) throw new Error(\`${'${item.infinitive}'}: voorbeelden ontbreken\`);\n  if (item.presentForms.length !== 6 || item.pastForms.length !== 6 || item.perfectForms.length < 2) throw new Error(\`${'${item.infinitive}'}: vervoeging is onvolledig\`);\n}\n\nexport function applyCoreVerbReviews(atlas) {\n  const existingReviewed = new Set(atlas.filter((item) => item.reviewed === true).map((item) => item.infinitive));\n  for (const item of coreVerbReviews) {\n    validateReview(item);\n    if (existingReviewed.has(item.infinitive)) continue;\n    let verb = atlas.find((candidate) => candidate.infinitive === item.infinitive);\n    if (!verb) { verb = { infinitive: item.infinitive }; atlas.push(verb); }\n    Object.assign(verb, item, {\n      synonyms: [...item.synonyms], examples: [...item.examples], relatedWords: [...item.relatedWords],\n      presentForms: [...item.presentForms], pastForms: [...item.pastForms], perfectForms: [...item.perfectForms],\n      sentencePatterns: { ...item.sentencePatterns },\n    });\n  }\n  atlas.sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL'));\n  return atlas;\n}\n`;

await writeFile(new URL('js/verb-core-review.js', root), source, 'utf8');
console.log(`js/verb-core-review.js bijgewerkt met ${reviews.length} gecontroleerde werkwoorden.`);
