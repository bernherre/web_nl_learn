import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes, vocabulary, verbs } from '../js/content.js';
import { a1LexiconEntries } from '../js/lexicon-a1.js';
import { a2LexiconEntries } from '../js/lexicon-a2.js';
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

const uniqueTerms = (themes) => [...new Set(themes.flatMap((theme) => Object.values(theme.wordGroups || {}).flat()).map(normalizeLexeme))];
const a0Terms = uniqueTerms(a0Themes);

function hasReliableLocalSource(theme, word) {
  const key = normalizeLexeme(word);
  const local = (theme.vocabulary || []).find(([term]) => normalizeLexeme(term) === key);
  if (local && isReliableDefinition(word, local[1]) && isReliableExample(word, local[2])) return true;
  const visual = vocabulary.find((entry) => normalizeLexeme(entry.word) === key);
  if (visual && isReliableDefinition(word, visual.definition) && isReliableExample(word, visual.example)) return true;
  const compactVerb = verbs.find((entry) => normalizeLexeme(entry.infinitive) === key);
  if (compactVerb && isReliableDefinition(word, compactVerb.meaning) && isReliableExample(word, compactVerb.examples?.[0])) return true;
  const atlasVerb = verbAtlas.find((entry) => normalizeLexeme(entry.infinitive) === key);
  const reviewed = atlasVerb?.lexicalEnriched === true || atlasVerb?.reviewed === true || atlasVerb?.reviewStatus === 'editorially-reviewed';
  const definition = atlasVerb?.definition || atlasVerb?.meaning || '';
  const example = atlasVerb?.example || atlasVerb?.examples?.[0] || atlasVerb?.sentencePatterns?.hoofdzin || '';
  return Boolean(reviewed && isReliableDefinition(word, definition) && isReliableExample(word, example));
}

function unresolved(themes) {
  const result = new Map();
  for (const theme of themes) {
    for (const word of Object.values(theme.wordGroups || {}).flat()) {
      if (!findLexiconEntry(word) && !hasReliableLocalSource(theme, word)) result.set(normalizeLexeme(word), `${theme.id}: ${word}`);
    }
  }
  return [...result.values()];
}

test('het centrale lexicon bevat alle unieke A0-termen', () => {
  assert.equal(a0Terms.length, 178);
  for (const term of a0Terms) assert.ok(findLexiconEntry(term), `${term}: ontbreekt in het centrale lexicon`);
});

test('de nieuwe centrale batches bevatten exact de verrijkte A1- en A2-schuld', () => {
  assert.equal(a1LexiconEntries.length, 666);
  assert.equal(a2LexiconEntries.length, 679);
  assert.equal(centralLexiconEntries.length, 1647);
});

test('A0, A1 en A2 hebben geen kaarten meer met controle nodig', () => {
  assert.deepEqual(unresolved(a0Themes), []);
  assert.deepEqual(unresolved(a1Themes), []);
  assert.deepEqual(unresolved(a2Themes), []);
});

test('elke centrale entry heeft een specifieke definitie, contextzin en reviewmetadata', () => {
  for (const entry of centralLexiconEntries) {
    assert.ok(isReliableDefinition(entry.term, entry.definition), `${entry.term}: onbetrouwbare definitie`);
    assert.ok(isReliableExample(entry.term, entry.example), `${entry.term}: onbetrouwbaar voorbeeld`);
    assert.match(entry.level, /^(?:A0|A1|A2)$/u);
    assert.equal(entry.status, 'editorially-reviewed');
    assert.ok(entry.kind.length >= 4, `${entry.term}: woordsoort of functietype ontbreekt`);
    assert.match(entry.source, /centrale lexiconredactie/u);
  }
});

test('de gecorrigeerde Nederlandse lidwoorden worden in A2 gebruikt', () => {
  assert.ok(findLexiconEntry('het duin'));
  assert.ok(findLexiconEntry('het waterschap'));
  assert.equal(findLexiconEntry('de duin'), null);
  assert.equal(findLexiconEntry('de waterschap'), null);
});

test('de cursusinterface raadpleegt het centrale lexicon vóór lokale fallbacks', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  const central = main.indexOf('return centralWordDetails(word)');
  const local = main.indexOf('|| highlightedWordDetails(theme, word)', central);
  const pending = main.indexOf('|| fallbackWordDetails(theme, group, word)', central);
  assert.ok(central >= 0, 'centrale lexiconlookup ontbreekt');
  assert.ok(local > central, 'lokale themafallback staat vóór het centrale lexicon');
  assert.ok(pending > local, 'controle-nodigfallback staat niet als laatste');
});

test('de klassieke browserbundle definieert de A1- en A2-batches vóór het samengevoegde lexicon', async () => {
  const bundle = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');
  const a1 = bundle.indexOf('const a1LexiconEntries =');
  const a2 = bundle.indexOf('const a2LexiconEntries =');
  const definition = bundle.indexOf('const centralLexiconEntries =');
  const finder = bundle.indexOf('function findLexiconEntry(term)');
  const use = bundle.indexOf('function centralWordDetails(word)');
  assert.ok(a1 >= 0, 'a1LexiconEntries ontbreekt in de bundle');
  assert.ok(a2 > a1, 'a2LexiconEntries staat niet na A1');
  assert.ok(definition > a2, 'centralLexiconEntries staat vóór de batches');
  assert.ok(finder > definition, 'findLexiconEntry staat vóór de lexicondata');
  assert.ok(use > finder, 'centralWordDetails gebruikt het lexicon vóór de definitie');
});

test('alle lexiconmodules staan in de offlinecache en in de Knowledge Graph-generator', async () => {
  const worker = await readFile(new URL('../service-worker.js', import.meta.url), 'utf8');
  const generator = await readFile(new URL('../scripts/generate-content-graph.mjs', import.meta.url), 'utf8');
  assert.match(worker, /js\/lexicon-a1\.js/u);
  assert.match(worker, /js\/lexicon-a2\.js/u);
  assert.match(worker, /js\/lexicon\.js/u);
  assert.match(generator, /type: 'lexeme'/u);
  assert.match(generator, /resolves_to_lexeme/u);
  assert.match(generator, /teaches_lexeme/u);
});
