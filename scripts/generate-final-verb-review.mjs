import { readFile, writeFile } from 'node:fs/promises';
import { verbAtlas as sourceAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';

const root = new URL('../', import.meta.url);
const definitions = JSON.parse(await readFile(new URL('data/final-verb-reviews.json', root), 'utf8'));
const atlas = structuredClone(sourceAtlas);
applyVerbCorrections(atlas);
applyCoreVerbReviews(atlas);
applyInitialVerbReviews(atlas);

function finiteSecond(stem) {
  return stem.endsWith('t') ? stem : `${stem}t`;
}

function deriveRoot(infinitive, prefix) {
  return prefix && infinitive.startsWith(prefix) ? infinitive.slice(prefix.length) : '';
}

function buildReview(definition) {
  const base = atlas.find((item) => item.infinitive === definition.infinitive);
  if (!base) throw new Error(`Werkwoord ontbreekt in atlas: ${definition.infinitive}`);
  const merged = { ...base, ...definition };
  const separable = Boolean(merged.separable);
  const prefix = separable ? (merged.prefix || base.prefix || '') : '';
  const root = separable ? (merged.root || base.root || deriveRoot(merged.infinitive, prefix)) : '';
  const stem = merged.stem || base.stem || base.presentForms?.[0]?.replace(/^ik\s+/u, '').split(/\s+/u)[0];
  const past = merged.past;
  const pastPlural = merged.pastPlural;
  const participle = merged.participle;
  const auxiliary = merged.auxiliary || 'hebben';
  if (![stem, past, pastPlural, participle].every((value) => typeof value === 'string' && value.trim())) {
    throw new Error(`${definition.infinitive}: onvolledige vervoeging`);
  }
  const second = merged.secondThird || finiteSecond(stem);
  const presentForms = separable
    ? [`ik ${stem} ${prefix}`, `jij ${second} ${prefix}`, `hij/zij ${second} ${prefix}`, `wij ${root} ${prefix}`, `jullie ${root} ${prefix}`, `zij ${root} ${prefix}`]
    : [`ik ${stem}`, `jij ${second}`, `hij/zij ${second}`, `wij ${merged.infinitive}`, `jullie ${merged.infinitive}`, `zij ${merged.infinitive}`];
  const pastForms = [`ik ${past}`, `jij ${past}`, `hij/zij ${past}`, `wij ${pastPlural}`, `jullie ${pastPlural}`, `zij ${pastPlural}`];
  const perfectForms = auxiliary === 'zijn'
    ? [`ik ben ${participle}`, `wij zijn ${participle}`]
    : auxiliary === 'hebben/zijn'
      ? [`ik heb ${participle}`, `ik ben ${participle}`]
      : [`ik heb ${participle}`, `wij hebben ${participle}`];
  const regularity = merged.regularity || (/(?:de|te)(?:\s+\S+)?$/u.test(past) ? 'regelmatig' : 'onregelmatig');
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
    conjugationClass: separable
      ? regularity === 'regelmatig' ? 'zwak scheidbaar werkwoord' : 'sterk of onregelmatig scheidbaar werkwoord'
      : regularity === 'regelmatig' ? 'zwak werkwoord' : 'sterk of onregelmatig werkwoord',
    presentForms,
    pastForms,
    perfectForms,
    imperative: separable ? `${stem} ${prefix}` : stem,
    sentencePatterns: {
      hoofdzin: definition.examples[0],
      voorbeeld: definition.examples[1],
      context: definition.examples[1],
    },
    curated: true,
    reviewed: true,
    formsReviewed: true,
    formsSource: 'Morfologische eindcontrole V19.2.1; scheidbaarheid, hulpwerkwoord en kernvormen afzonderlijk gecontroleerd.',
    lexicalSource: 'Woorden.org als secundaire lexicale bron; spelling en morfologie gecontroleerd tegen de officiële Nederlandse spellingprincipes en de bestaande atlas; transparante samenstellingen compositioneel en redactioneel gevalideerd.',
    reviewBatch: 'V19.2.1-final-79',
    reviewStatus: 'editorially-reviewed',
  };
}

function validate(item) {
  if (!item.meaning || item.meaning.length < 35) throw new Error(`${item.infinitive}: definitie te kort`);
  if (!item.usage || item.usage.length < 35) throw new Error(`${item.infinitive}: gebruiksnotitie te kort`);
  if (!item.synonymNote || item.synonymNote.length < 45) throw new Error(`${item.infinitive}: synoniemnotitie te kort`);
  if (!Array.isArray(item.synonyms) || item.synonyms.length < 1 || new Set(item.synonyms).size !== item.synonyms.length) throw new Error(`${item.infinitive}: synoniemen ongeldig`);
  if (!Array.isArray(item.examples) || item.examples.length < 2 || new Set(item.examples).size !== item.examples.length) throw new Error(`${item.infinitive}: voorbeelden ongeldig`);
  if (item.presentForms.length !== 6 || item.pastForms.length !== 6 || item.perfectForms.length < 2) throw new Error(`${item.infinitive}: vervoeging onvolledig`);
  if (item.separable && (!item.prefix || !item.root)) throw new Error(`${item.infinitive}: scheidbaar zonder prefix/root`);
  if (/^geweg/u.test(item.participle) || item.participle === 'geweerlegd') throw new Error(`${item.infinitive}: fout deelwoord ${item.participle}`);
}

const reviews = definitions.map(buildReview);
for (const item of reviews) validate(item);
if (new Set(reviews.map((item) => item.infinitive)).size !== reviews.length) throw new Error('Dubbele lemma’s in final review');

const source = `/**\n * V19.2.1 eindcontrole van de resterende 79 werkwoorden.\n * Specifieke definities, contextuele synoniemen, natuurlijke voorbeelden\n * en gecorrigeerde morfologie zonder generieke opvulling.\n */\n\nexport const finalVerbReviews = ${JSON.stringify(reviews, null, 2)};\n\nfunction validateFinalReview(item) {\n  if (!item.meaning || item.meaning.length < 35) throw new Error(\`${'${item.infinitive}'}: definitie te kort\`);\n  if (!item.usage || item.usage.length < 35) throw new Error(\`${'${item.infinitive}'}: gebruiksnotitie te kort\`);\n  if (!item.synonymNote || item.synonymNote.length < 45) throw new Error(\`${'${item.infinitive}'}: synoniemnotitie te kort\`);\n  if (!Array.isArray(item.synonyms) || item.synonyms.length < 1) throw new Error(\`${'${item.infinitive}'}: synoniemen ontbreken\`);\n  if (!Array.isArray(item.examples) || item.examples.length < 2) throw new Error(\`${'${item.infinitive}'}: voorbeelden ontbreken\`);\n  if (item.presentForms.length !== 6 || item.pastForms.length !== 6 || item.perfectForms.length < 2) throw new Error(\`${'${item.infinitive}'}: vervoeging onvolledig\`);\n}\n\nexport function applyFinalVerbReviews(atlas) {\n  for (const item of finalVerbReviews) {\n    validateFinalReview(item);\n    let verb = atlas.find((candidate) => candidate.infinitive === item.infinitive);\n    if (!verb) { verb = { infinitive: item.infinitive }; atlas.push(verb); }\n    Object.assign(verb, item, {\n      synonyms: [...item.synonyms], examples: [...item.examples], relatedWords: [...item.relatedWords],\n      presentForms: [...item.presentForms], pastForms: [...item.pastForms], perfectForms: [...item.perfectForms],\n      sentencePatterns: { ...item.sentencePatterns },\n    });\n  }\n  atlas.sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL'));\n  return atlas;\n}\n`;
await writeFile(new URL('js/verb-final-review.js', root), source, 'utf8');
console.log(`js/verb-final-review.js bijgewerkt met ${reviews.length} eindgereviseerde werkwoorden.`);
