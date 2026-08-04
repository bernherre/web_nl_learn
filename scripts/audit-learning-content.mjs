import { writeFile } from 'node:fs/promises';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes, vocabulary, verbs } from '../js/content.js';
import { spiralThemes } from '../js/spiral-content.js';
import { physicsConcepts, softwareConcepts } from '../js/technical-content.js';
import { mathConcepts } from '../js/number-math-content.js';
import { professionalConcepts } from '../js/professional-content.js';
import { verbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews } from '../js/verb-final-review.js';
import { applyVerbSentencePatternFixes } from '../js/verb-sentence-pattern-fixes.js';
import { isReliableDefinition, isReliableExample } from '../js/lexical-quality.js';
applyVerbCorrections(verbAtlas); applyCoreVerbReviews(verbAtlas); applyInitialVerbReviews(verbAtlas); applyFinalVerbReviews(verbAtlas);
applyVerbSentencePatternFixes(verbAtlas);
const findings = [];
const add = (scope, term, problem) => findings.push({ scope, term, problem });
let reviewedCards = 0;
for (const [level, theme] of [...a0Themes.map((t)=>['A0',t]), ...a1Themes.map((t)=>['A1',t]), ...a2Themes.map((t)=>['A2',t])]) {
  for (const [term, definition, example] of theme.vocabulary || []) {
    reviewedCards += 1;
    if (!isReliableDefinition(term, definition)) add(`${level}/${theme.id}`, term, 'ongeldige of generieke definitie');
    if (!isReliableExample(term, example)) add(`${level}/${theme.id}`, term, 'ongeldige of contextloze voorbeeldzin');
  }
}
for (const item of vocabulary) { reviewedCards += 1; if (!isReliableDefinition(item.word,item.definition)) add('beeldwoorden',item.word,'ongeldige definitie'); if (!isReliableExample(item.word,item.example)) add('beeldwoorden',item.word,'ongeldige voorbeeldzin'); }
for (const item of verbs) { reviewedCards += 1; if (!isReliableDefinition(item.infinitive,item.meaning)) add('kernwerkwoorden',item.infinitive,'ongeldige definitie'); if (!isReliableExample(item.infinitive,item.examples?.[0])) add('kernwerkwoorden',item.infinitive,'ongeldige voorbeeldzin'); }
for (const [scope, concepts] of [['wiskunde',mathConcepts],['natuurkunde',physicsConcepts],['software',softwareConcepts],['vaklexicon',professionalConcepts]]) {
  for (const concept of concepts) { reviewedCards += 1; const term=concept.name||concept.term||concept.title; const definition=concept.definition||concept.description||concept.notion; if (!isReliableDefinition(term,definition)) add(scope,term,'ongeldige of generieke definitie'); }
}
const enrichedVerbs = verbAtlas.filter((verb) => verb.reviewed === true && isReliableDefinition(verb.infinitive,verb.meaning) && isReliableExample(verb.infinitive,verb.examples?.[0] || verb.sentencePatterns?.hoofdzin));
for (const verb of enrichedVerbs) { reviewedCards += 1; }
const catalogOnly = verbAtlas.length - enrichedVerbs.length;
const report=['# Lexicale kwaliteitsaudit','',`- Gecontroleerde kaarten en concepten: ${reviewedCards}`,`- Verrijkte werkwoorden: ${enrichedVerbs.length}`,`- Werkwoorden die bewust alleen als catalogusvorm worden behandeld: ${catalogOnly}`,`- Blokkerende bevindingen: ${findings.length}`,'','Niet-gecontroleerde woordgroepitems krijgen geen verzonnen definitie of schijnvoorbeeld; de interface markeert ze als **controle nodig**.',''];
if (findings.length) report.push('## Bevindingen','',...findings.slice(0,200).map((item)=>`- **${item.scope}** — ${item.term}: ${item.problem}`));
await writeFile(new URL('../docs/lexical-audit.md', import.meta.url), `${report.join('\n')}\n`, 'utf8');
if (findings.length) {
  const first = findings.slice(0, 20).map((item) => `${item.scope}: ${item.term} — ${item.problem}`).join('\n');
  throw new Error(`Lexicale audit vond ${findings.length} problemen. Eerste bevindingen:\n${first}`);
}
console.log(`Lexicale kwaliteitsaudit geslaagd: ${reviewedCards} gecontroleerde kaarten; ${catalogOnly} catalogusvormen.`);
