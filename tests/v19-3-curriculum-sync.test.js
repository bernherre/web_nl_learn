import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { c1c2GrammarTopics, c1c2QuestionTopics, c1c2QuestionPractice } from '../js/c1-c2-language-systems.js';
import { advancedSpiralLevels } from '../js/advanced-level-content.js';
import { questionTopics, questionPractice } from '../js/questions-content.js';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('de grammatica-atlas loopt inhoudelijk door tot C2', () => {
  assert.equal(c1c2GrammarTopics.length, 19);
  for (const [level, expected] of [['C1', 9], ['C2', 10]]) {
    const topics = c1c2GrammarTopics.filter((item) => item.level === level);
    assert.equal(topics.length, expected);
    for (const topic of topics) {
      assert.ok(topic.summary.length >= 45);
      assert.ok(topic.rule.length >= 35);
      assert.ok(topic.examples.length >= 4);
      assert.ok(topic.sections.length >= 3);
      assert.ok(topic.aliases.length >= 2);
    }
  }
});

test('alle gevorderde spiraalgrammatica verwijst naar een canonieke module', () => {
  const labels = new Set(c1c2GrammarTopics.flatMap((topic) => [topic.id, topic.title, ...(topic.aliases || [])]));
  for (const [themeId, levels] of Object.entries(advancedSpiralLevels)) {
    for (const level of ['C1', 'C2']) {
      for (const focus of levels[level].grammar) assert.ok(labels.has(focus), `${level}/${themeId}: ${focus}`);
    }
  }
});

test('de vragenleerlijn en actieve herhaling lopen van A1 tot C2', () => {
  const allTopics = [...questionTopics, ...c1c2QuestionTopics];
  const allPractice = [...questionPractice, ...c1c2QuestionPractice];
  assert.equal(allTopics.length, 22);
  assert.equal(allPractice.length, 22);
  assert.deepEqual([...new Set(allTopics.map((item) => item.level))], ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  const ids = new Set(allTopics.map((item) => item.id));
  for (const item of allPractice) assert.ok(ids.has(item.topic), `${item.id} -> ${item.topic}`);
});

test('de interface toont C1-C2 in grammatica, vragen en kennisgraaf', async () => {
  const [main, index, bundle] = await Promise.all([read('js/main.js'), read('index.html'), read('js/app.js')]);
  assert.match(main, /const allGrammarTopics = \[\.\.\.grammarTopics, \.\.\.advancedGrammarTopics, \.\.\.sourceReviewGrammarTopics, \.\.\.c1c2GrammarTopics\]/u);
  assert.match(main, /const filters = \['alle', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'\]/u);
  assert.match(index, /id="knowledge-graph-release"/u);
  assert.match(index, /<option value="C1">C1<\/option><option value="C2">C2<\/option>/u);
  assert.doesNotMatch(index, /V18\.18\.0/u);
  assert.ok(bundle.indexOf('const c1c2GrammarTopics =') < bundle.indexOf('const allGrammarTopics ='));
});

test('de kennisgraaf bevat de actuele C1-C2-grammatica en vragen', async () => {
  const graph = JSON.parse(await read('data/content-knowledge-graph.json'));
  assert.equal(graph.nodes.filter((node) => node.type === 'grammar_focus' && ['C1', 'C2'].includes(node.level)).length, 54);
  assert.equal(graph.nodes.filter((node) => node.type === 'question_topic' && ['C1', 'C2'].includes(node.level)).length, 8);
  assert.equal(graph.nodes.filter((node) => node.type === 'practice' && ['C1', 'C2'].includes(node.level)).length, 12);
  assert.ok(graph.metadata.relationCounts.refines_grammar >= 54);
  assert.ok(graph.metadata.relationCounts.applies_grammar >= 8);
});
