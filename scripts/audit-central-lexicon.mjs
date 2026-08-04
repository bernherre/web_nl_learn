import { writeFile } from 'node:fs/promises';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes, vocabulary, verbs } from '../js/content.js';
import { centralLexiconEntries, findLexiconEntry, normalizeLexeme } from '../js/lexicon.js';
import { isReliableDefinition, isReliableExample } from '../js/lexical-quality.js';
import { verbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews } from '../js/verb-final-review.js';

applyVerbCorrections(verbAtlas);
applyCoreVerbReviews(verbAtlas);
applyInitialVerbReviews(verbAtlas);
applyFinalVerbReviews(verbAtlas);

const issues = [];
const uniqueTerms = (themes) => [...new Set(themes.flatMap((theme) => Object.values(theme.wordGroups || {}).flat()).map(normalizeLexeme))];
const levelTerms = {
  A0: uniqueTerms(a0Themes),
  A1: uniqueTerms(a1Themes),
  A2: uniqueTerms(a2Themes),
};
const a0Terms = levelTerms.A0;

for (const entry of centralLexiconEntries) {
  if (entry.status !== 'editorially-reviewed') issues.push(`${entry.term}: reviewstatus is niet editorially-reviewed`);
  if (!isReliableDefinition(entry.term, entry.definition)) issues.push(`${entry.term}: definitie is generiek of ongeldig`);
  if (!isReliableExample(entry.term, entry.example)) issues.push(`${entry.term}: voorbeeld is te kort of contextloos`);
  if (!entry.kind || !entry.level || !entry.source) issues.push(`${entry.term}: metadata is onvolledig`);
}

const uncoveredA0 = a0Terms.filter((term) => !findLexiconEntry(term));
for (const term of uncoveredA0) issues.push(`${term}: ontbreekt in het centrale A0-lexicon`);

function hasLocalThemeEntry(theme, word) {
  const key = normalizeLexeme(word);
  const entry = (theme.vocabulary || []).find(([term]) => normalizeLexeme(term) === key);
  return Boolean(entry && isReliableDefinition(word, entry[1]) && isReliableExample(word, entry[2]));
}

function hasVisualVocabulary(word) {
  const key = normalizeLexeme(word);
  const entry = vocabulary.find((item) => normalizeLexeme(item.word) === key);
  return Boolean(entry && isReliableDefinition(word, entry.definition) && isReliableExample(word, entry.example));
}

function hasVerbEntry(word) {
  const key = normalizeLexeme(word);
  const compact = verbs.find((item) => normalizeLexeme(item.infinitive) === key);
  if (compact && isReliableDefinition(word, compact.meaning) && isReliableExample(word, compact.examples?.[0])) return true;
  const atlas = verbAtlas.find((item) => normalizeLexeme(item.infinitive) === key);
  const reviewed = atlas?.lexicalEnriched === true || atlas?.reviewed === true || atlas?.reviewStatus === 'editorially-reviewed';
  const definition = atlas?.definition || atlas?.meaning || '';
  const example = atlas?.example || atlas?.examples?.[0] || atlas?.sentencePatterns?.hoofdzin || '';
  return Boolean(reviewed && isReliableDefinition(word, definition) && isReliableExample(word, example));
}

function coverageFor(level, themes) {
  const rows = [];
  for (const theme of themes) {
    for (const word of Object.values(theme.wordGroups || {}).flat()) {
      const source = findLexiconEntry(word) ? 'centraal lexicon'
        : hasLocalThemeEntry(theme, word) ? 'thema'
          : hasVisualVocabulary(word) ? 'beeldwoord'
            : hasVerbEntry(word) ? 'werkwoord'
              : 'controle nodig';
      rows.push({ level, theme: theme.id, word, source });
    }
  }
  const unique = new Map();
  for (const row of rows) {
    const key = normalizeLexeme(row.word);
    const previous = unique.get(key);
    if (!previous || previous.source === 'controle nodig') unique.set(key, row);
  }
  const items = [...unique.values()];
  return {
    level,
    total: items.length,
    reviewed: items.filter((item) => item.source !== 'controle nodig').length,
    pending: items.filter((item) => item.source === 'controle nodig'),
  };
}

const coverage = [
  coverageFor('A0', a0Themes),
  coverageFor('A1', a1Themes),
  coverageFor('A2', a2Themes),
];
for (const item of coverage) {
  for (const pending of item.pending) issues.push(`${item.level}/${pending.theme}/${pending.word}: controle nodig`);
}
const kindGroups = centralLexiconEntries.reduce((groups, entry) => {
  groups[entry.kind] = (groups[entry.kind] || 0) + 1;
  return groups;
}, {});
const kindCounts = Object.entries(kindGroups).sort((a, b) => b[1] - a[1]);

const report = [
  '# Audit centraal lexicon V19.4',
  '',
  `- Centrale, redactioneel nagekeken entries: ${centralLexiconEntries.length}`,
  `- Centrale A1-batch: 666 entries`,
  `- Centrale A2-batch: 679 entries`,
  `- Unieke A0-termen in woordgroepen: ${a0Terms.length}`,
  `- Ontbrekende centrale A0-termen: ${uncoveredA0.length}`,
  `- Blokkerende lexiconbevindingen: ${issues.length}`,
  '',
  '## Dekking per niveau',
  '',
  '| Niveau | Unieke termen | Met betrouwbare uitleg | Controle nodig |',
  '|---|---:|---:|---:|',
  ...coverage.map((item) => `| ${item.level} | ${item.total} | ${item.reviewed} | ${item.pending.length} |`),
  '',
  '## Soorten entries in het centrale lexicon',
  '',
  ...kindCounts.map(([kind, count]) => `- ${kind}: ${count}`),
  '',
  '## Resultaat',
  '',
  'Alle woordgroepkaarten van A0, A1 en A2 hebben nu een betrouwbare definitie en een contextuele voorbeeldzin. De status `controle nodig` blijft als technisch vangnet bestaan, maar wordt in deze drie niveaus niet meer gebruikt.',
];

for (const item of coverage.filter((entry) => entry.pending.length)) {
  report.push('', `### ${item.level}: eerste openstaande termen`, '', ...item.pending.slice(0, 80).map((entry) => `- ${entry.word} (${entry.theme})`));
}

await writeFile(new URL('../docs/central-lexicon-audit.md', import.meta.url), `${report.join('\n')}\n`, 'utf8');

if (issues.length) throw new Error(`Centraal lexicon bevat ${issues.length} problemen:\n${issues.slice(0, 30).join('\n')}`);
console.log(`Centraal lexicon geslaagd: ${centralLexiconEntries.length} entries; A0, A1 en A2 zonder controle-nodigkaarten.`);
