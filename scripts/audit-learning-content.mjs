import { writeFile } from 'node:fs/promises';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes, vocabulary, verbs } from '../js/content.js';
import { spiralThemes } from '../js/spiral-content.js';
import { physicsConcepts, softwareConcepts } from '../js/technical-content.js';
import { mathConcepts } from '../js/number-math-content.js';
import { professionalConcepts } from '../js/professional-content.js';
import { verbAtlas } from '../js/verb-atlas.js';
import { enrichVerbAtlas } from '../js/verb-details.js';

const genericPatterns = [
  /^Het werkwoord beschrijft vooral/u,
  /^Het werkwoord beschrijft een toestand/u,
  /^Het onderwerp verandert van toestand/u,
  /^Een vaste combinatie(?: die| voor| om)/u,
  /^Een zelfstandig naamwoord(?: dat| voor)/u,
  /^Het zelfstandig naamwoord verwijst naar/u,
  /^Een .* uit deze les\.?$/u,
];

const normalize = (value) => String(value || '')
  .trim()
  .toLocaleLowerCase('nl-NL')
  .replace(/[“”„'‘’.,!?;:()]/gu, '')
  .replace(/\s+/gu, ' ');

function validDefinition(term, definition) {
  const text = String(definition || '').trim();
  if (text.length < 18 || genericPatterns.some((pattern) => pattern.test(text))) return false;
  return normalize(text) !== normalize(term);
}

function validExample(term, example) {
  const text = String(example || '').trim();
  if (text.length < 12 || normalize(text) === normalize(term)) return false;
  if (/^ik\s+[a-zà-ÿ-]+(?:en)\.?$/u.test(normalize(text))) return false;
  return normalize(text).split(' ').filter(Boolean).length >= 3;
}

const findings = [];
const add = (scope, term, problem) => findings.push({ scope, term, problem });
const themeSets = [
  ...a0Themes.map((theme) => ['A0', theme]),
  ...a1Themes.map((theme) => ['A1', theme]),
  ...a2Themes.map((theme) => ['A2', theme]),
  ...spiralThemes.map((theme) => [theme.level || 'B1/B2', theme]),
];

let reviewedCards = 0;
for (const [level, theme] of themeSets) {
  for (const item of theme.vocabulary || []) {
    const [term, definition, example] = item;
    reviewedCards += 1;
    if (!validDefinition(term, definition)) add(`${level}/${theme.id || theme.title}`, term, 'ongeldige of generieke definitie');
    if (!validExample(term, example)) add(`${level}/${theme.id || theme.title}`, term, 'ongeldige of contextloze voorbeeldzin');
  }
}

for (const item of vocabulary) {
  reviewedCards += 1;
  if (!validDefinition(item.word, item.definition)) add('beeldwoorden', item.word, 'ongeldige definitie');
  if (!validExample(item.word, item.example)) add('beeldwoorden', item.word, 'ongeldige voorbeeldzin');
}

for (const item of verbs) {
  reviewedCards += 1;
  if (!validDefinition(item.infinitive, item.meaning)) add('kernwerkwoorden', item.infinitive, 'ongeldige definitie');
  if (!validExample(item.infinitive, item.examples?.[0])) add('kernwerkwoorden', item.infinitive, 'ongeldige voorbeeldzin');
}

for (const [scope, concepts] of [
  ['wiskunde', mathConcepts],
  ['natuurkunde', physicsConcepts],
  ['software', softwareConcepts],
  ['vaklexicon', professionalConcepts],
]) {
  for (const concept of concepts) {
    reviewedCards += 1;
    const term = concept.name || concept.term || concept.title;
    const definition = concept.definition || concept.description || concept.notion;
    if (!validDefinition(term, definition)) add(scope, term, 'ongeldige of generieke definitie');
  }
}

const enrichedVerbs = enrichVerbAtlas(verbAtlas).filter((verb) => verb.lexicalEnriched && verb.verified === true);
for (const verb of enrichedVerbs) {
  reviewedCards += 1;
  if (!validDefinition(verb.infinitive, verb.definition || verb.meaning)) add('verrijkt werkwoord', verb.infinitive, 'ongeldige definitie');
  if (!validExample(verb.infinitive, verb.example || verb.sentencePatterns?.hoofdzin)) add('verrijkt werkwoord', verb.infinitive, 'ongeldige voorbeeldzin');
}

const catalogOnly = verbAtlas.length - enrichedVerbs.length;
const report = [
  '# Lexicale kwaliteitsaudit',
  '',
  `- Gecontroleerde kaarten en concepten: ${reviewedCards}`,
  `- Verrijkte werkwoorden: ${enrichedVerbs.length}`,
  `- Werkwoorden die bewust alleen als catalogusvorm worden behandeld: ${catalogOnly}`,
  `- Blokkerende bevindingen: ${findings.length}`,
  '',
  'Niet-verrijkte werkwoorden krijgen geen verzonnen definitie of schijnvoorbeeld. Woordgroepitems zonder betrouwbare uitleg worden in de interface gemarkeerd als **controle nodig**.',
  '',
];
if (findings.length) {
  report.push('## Bevindingen', '', ...findings.slice(0, 200).map((item) => `- **${item.scope}** — ${item.term}: ${item.problem}`));
}
await writeFile(new URL('../docs/lexical-audit.md', import.meta.url), `${report.join('\n')}\n`, 'utf8');

if (findings.length) {
  throw new Error(`Lexicale audit vond ${findings.length} problemen. Eerste bevindingen:\n${findings.slice(0, 20).map((item) => `${item.scope}: ${item.term} — ${item.problem}`).join('\n')}`);
}
console.log(`Lexicale kwaliteitsaudit geslaagd: ${reviewedCards} gecontroleerde kaarten; ${catalogOnly} werkwoorden blijven eerlijk gemarkeerd als catalogusvorm.`);
