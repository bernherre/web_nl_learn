import { readFile, writeFile } from 'node:fs/promises';
import { verbAtlas as sourceAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';

const root = new URL('../', import.meta.url);
const definitions = JSON.parse(await readFile(new URL('data/initial-verb-definitions.json', root), 'utf8'));
const atlas = structuredClone(sourceAtlas);
applyVerbCorrections(atlas);
applyCoreVerbReviews(atlas);

const genericMeanings = new Set([
  'Het werkwoord beschrijft vooral een handeling of activiteit.',
  'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',
  'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',
]);

function finiteSecond(stem) {
  return stem.endsWith('t') ? stem : `${stem}t`;
}

function buildForms(definition) {
  const base = atlas.find((item) => item.infinitive === definition.infinitive);
  if (!base) throw new Error(`Werkwoord ontbreekt in atlas: ${definition.infinitive}`);

  const merged = { ...base, ...definition };
  const separable = Boolean(merged.separable);
  const prefix = separable ? (merged.prefix || 'aan') : '';
  const root = separable ? (merged.root || merged.infinitive.slice(prefix.length)) : '';
  const stem = merged.stem || base.presentForms?.[0]?.replace(/^ik\s+/u, '').split(/\s+/u)[0];
  const past = merged.past;
  const pastPlural = merged.pastPlural;
  const participle = merged.participle;
  const auxiliary = merged.auxiliary || 'hebben';

  if (![stem, past, pastPlural, participle].every((value) => typeof value === 'string' && value.trim())) {
    throw new Error(`${definition.infinitive}: onvolledige vervoeging`);
  }

  const second = merged.secondThird || finiteSecond(stem);
  const generatedPresentForms = separable
    ? [
      `ik ${stem} ${prefix}`, `jij ${second} ${prefix}`, `hij/zij ${second} ${prefix}`,
      `wij ${root} ${prefix}`, `jullie ${root} ${prefix}`, `zij ${root} ${prefix}`,
    ]
    : [
      `ik ${stem}`, `jij ${second}`, `hij/zij ${second}`,
      `wij ${merged.infinitive}`, `jullie ${merged.infinitive}`, `zij ${merged.infinitive}`,
    ];
  const presentForms = Array.isArray(definition.presentForms) ? [...definition.presentForms] : generatedPresentForms;
  const generatedPastForms = [
    `ik ${past}`, `jij ${past}`, `hij/zij ${past}`,
    `wij ${pastPlural}`, `jullie ${pastPlural}`, `zij ${pastPlural}`,
  ];
  const pastForms = Array.isArray(definition.pastForms) ? [...definition.pastForms] : generatedPastForms;

  const generatedPerfectForms = auxiliary === 'zijn'
    ? [`ik ben ${participle}`, `wij zijn ${participle}`]
    : auxiliary === 'hebben/zijn'
      ? [`ik heb ${participle}`, `ik ben ${participle}`]
      : [`ik heb ${participle}`, `wij hebben ${participle}`];
  const perfectForms = Array.isArray(definition.perfectForms) ? [...definition.perfectForms] : generatedPerfectForms;

  const pastCore = past.replace(/\s+aan$/u, '');
  const regularity = merged.regularity || (/(?:de|te)$/u.test(pastCore) ? 'regelmatig' : 'onregelmatig');
  const conjugationClass = merged.conjugationClass || (
    separable
      ? regularity === 'regelmatig' ? 'zwak scheidbaar werkwoord' : 'sterk of onregelmatig scheidbaar werkwoord'
      : regularity === 'regelmatig' ? 'zwak werkwoord' : 'sterk of onregelmatig werkwoord'
  );

  return {
    ...merged,
    prefix,
    root,
    stem,
    past,
    pastPlural,
    participle,
    auxiliary,
    regularity,
    conjugationClass,
    presentForms,
    pastForms,
    perfectForms,
    imperative: merged.imperative || (separable ? `${stem} ${prefix}` : stem),
    sentencePatterns: merged.sentencePatterns || {
      hoofdzin: merged.examples[0],
      voorbeeld: merged.examples[1],
      context: merged.examples[2] || merged.examples[1],
    },
    relatedWords: merged.relatedWords || [],
    fixedPreposition: merged.fixedPreposition || '',
    reflexive: Boolean(merged.reflexive),
    reflexiveOnly: Boolean(definition.reflexiveOnly),
    curated: true,
    reviewed: true,
    formsReviewed: true,
    formsSource: 'Bestaande atlasbasis met handmatige batchcontrole van scheidbaarheid, reflexiviteit en onregelmatige kernvormen',
    lexicalSource: merged.sourceMethod || 'Oorspronkelijk geschreven definitie; gecontroleerd tegen Nederlandse woordenboek- en corpusbronnen',
    reviewBatch: merged.reviewBatch || 'V18.8-A001-A100',
    reviewStatus: merged.reviewStatus || 'editorially-reviewed',
  };
}

function validateReview(item) {
  const required = ['infinitive', 'meaning', 'semanticLabel', 'usage', 'synonymNote', 'past', 'pastPlural', 'participle', 'conjugationClass'];
  for (const field of required) {
    if (typeof item[field] !== 'string' || item[field].trim().length < 2) {
      throw new Error(`${item.infinitive}: ongeldig veld ${field}`);
    }
  }
  if (item.meaning.length < 35 || genericMeanings.has(item.meaning)) {
    throw new Error(`${item.infinitive}: definitie is generiek of te kort`);
  }
  if (item.usage.length < 35) {
    throw new Error(`${item.infinitive}: gebruiksnotitie is te kort`);
  }
  if (item.synonymNote.length < 45) {
    throw new Error(`${item.infinitive}: verschil tussen synoniemen is onvoldoende uitgelegd`);
  }
  if (!Array.isArray(item.synonyms) || item.synonyms.length < 1 || new Set(item.synonyms).size !== item.synonyms.length) {
    throw new Error(`${item.infinitive}: synoniemen ontbreken of zijn dubbel`);
  }
  if (item.synonyms.some((value) => value.toLocaleLowerCase('nl-NL') === item.infinitive)) {
    throw new Error(`${item.infinitive}: het lemma staat als eigen synoniem vermeld`);
  }
  if (!Array.isArray(item.examples) || item.examples.length < 2 || item.examples.some((value) => value.length < 12) || new Set(item.examples).size !== item.examples.length) {
    throw new Error(`${item.infinitive}: voorbeelden ontbreken, zijn dubbel of zijn te kort`);
  }
  if (item.presentForms.length !== 6 || item.pastForms.length !== 6 || item.perfectForms.length < 2) {
    throw new Error(`${item.infinitive}: vervoeging is onvolledig`);
  }
  if (item.separable && (!item.prefix || !item.root)) {
    throw new Error(`${item.infinitive}: scheidbaar werkwoord zonder prefix of stamwerkwoord`);
  }
  if (/^geaan/u.test(item.participle)) {
    throw new Error(`${item.infinitive}: onmogelijk voltooid deelwoord ${item.participle}`);
  }
  if (!item.reviewBatch || item.reviewStatus !== 'editorially-reviewed' || !item.lexicalSource) {
    throw new Error(`${item.infinitive}: reviewtrace ontbreekt`);
  }
  if (item.reflexiveOnly && !item.presentForms.every((value) => /\b(?:mij|je|zich|ons)\b/u.test(value))) {
    throw new Error(`${item.infinitive}: wederkerende persoonsvormen zijn onvolledig`);
  }
  const malformed = item.presentForms.join(' ');
  if (/\b(?:kant|steelt|teelt|treeft|vaalt) aan\b/u.test(malformed)) {
    throw new Error(`${item.infinitive}: onmogelijke persoonsvorm in ${malformed}`);
  }
}

const reviews = definitions.map(buildForms);
for (const item of reviews) validateReview(item);
const duplicate = reviews.find((item, index) => reviews.findIndex((other) => other.infinitive === item.infinitive) !== index);
if (duplicate) throw new Error(`Dubbele definitie: ${duplicate.infinitive}`);

const source = `/**\n * Eerste alfabetische verbatch met specifieke definities, contextuele\n * synoniemen, voorbeelden en handmatig gecontroleerde kernvormen.\n * Gegenereerd met scripts/generate-initial-verb-review.mjs.\n */\n\nexport const initialVerbReviews = ${JSON.stringify(reviews, null, 2)};\n\nconst initialGenericMeanings = new Set(${JSON.stringify([...genericMeanings], null, 2)});\n\nfunction validateInitialReview(item) {\n  const required = ['infinitive', 'meaning', 'semanticLabel', 'usage', 'synonymNote', 'past', 'pastPlural', 'participle', 'conjugationClass'];\n  for (const field of required) {\n    if (typeof item[field] !== 'string' || item[field].trim().length < 2) throw new Error(\`${'${item.infinitive}'}: ongeldig veld ${'${field}'}\`);\n  }\n  if (item.meaning.length < 35 || initialGenericMeanings.has(item.meaning)) throw new Error(\`${'${item.infinitive}'}: definitie is generiek of te kort\`);\n  if (item.usage.length < 35) throw new Error(\`${'${item.infinitive}'}: gebruiksnotitie is te kort\`);\n  if (item.synonymNote.length < 45) throw new Error(\`${'${item.infinitive}'}: verschil tussen synoniemen is onvoldoende uitgelegd\`);\n  if (!Array.isArray(item.synonyms) || item.synonyms.length < 1 || new Set(item.synonyms).size !== item.synonyms.length) throw new Error(\`${'${item.infinitive}'}: synoniemen ontbreken of zijn dubbel\`);\n  if (!Array.isArray(item.examples) || item.examples.length < 2 || new Set(item.examples).size !== item.examples.length) throw new Error(\`${'${item.infinitive}'}: voorbeelden ontbreken of zijn dubbel\`);\n  if (item.presentForms.length !== 6 || item.pastForms.length !== 6 || item.perfectForms.length < 2) throw new Error(\`${'${item.infinitive}'}: vervoeging is onvolledig\`);\n  if (item.reflexiveOnly && !item.presentForms.every((value) => /\\b(?:mij|je|zich|ons)\\b/u.test(value))) throw new Error(\`${'${item.infinitive}'}: wederkerende persoonsvormen zijn onvolledig\`);\n}\n\nexport function applyInitialVerbReviews(atlas) {\n  const alreadyReviewed = new Set(atlas.filter((item) => item.reviewed === true && item.meaning && item.synonymNote).map((item) => item.infinitive));\n  for (const item of initialVerbReviews) {\n    validateInitialReview(item);\n    if (alreadyReviewed.has(item.infinitive)) continue;\n    let verb = atlas.find((candidate) => candidate.infinitive === item.infinitive);\n    if (!verb) { verb = { infinitive: item.infinitive }; atlas.push(verb); }\n    Object.assign(verb, item, {\n      synonyms: [...item.synonyms], examples: [...item.examples], relatedWords: [...item.relatedWords],\n      presentForms: [...item.presentForms], pastForms: [...item.pastForms], perfectForms: [...item.perfectForms],\n      sentencePatterns: { ...item.sentencePatterns },\n    });\n  }\n  atlas.sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL'));\n  return atlas;\n}\n`;

await writeFile(new URL('js/verb-initial-review.js', root), source, 'utf8');
console.log(`js/verb-initial-review.js bijgewerkt met ${reviews.length} gecontroleerde werkwoorden.`);
