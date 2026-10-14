import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { canonicalGraphView } from '../js/knowledge-graph.js';
const original = JSON.parse(readFileSync(new URL('../data/content-knowledge-graph.json', import.meta.url)));
const snapshot = JSON.stringify(original);
const view = canonicalGraphView(original);
test('dictionary references collapse without changing stored graph or merging unrelated same-label nodes', () => {
  assert.equal(JSON.stringify(original), snapshot);
  assert.equal(view.aliases.get('theme-term:A1:gezondheid:de-koorts'), 'lexeme:de-koorts');
  assert.ok(!view.nodes.some(n => n.id === 'theme-term:A1:gezondheid:de-koorts'));
  assert.ok(view.nodes.some(n => n.id === 'professional_concept:vaklexicon:zorg-148:zorg'));
  const ids = new Set(view.nodes.map(n => n.id));
  assert.ok(view.edges.every(e => ids.has(e.source) && ids.has(e.target)));
});
test('every original relation remains available through its canonical endpoints', () => {
  const pairs = new Set(view.edges.map(e => `${e.source}|${e.target}`));
  for (const e of original.edges) {
    const a = view.aliases.get(e.source) || e.source;
    const b = view.aliases.get(e.target) || e.target;
    if(a !== b) assert.ok(pairs.has(`${a}|${b}`), e.id);
  }
  assert.ok(pairs.has('theme:A1:gezondheid|a1-lesson:tandarts'));
});
test('grouped dictionary entries retain all original contextual fields and search text', () => {
  const nodes = new Map(view.nodes.map(n => [n.id, n]));
  for (const [id, canonical] of view.aliases) {
    const old = original.nodes.find(n => n.id === id);
    const current = nodes.get(canonical);
    assert.deepEqual(current.sourceContexts.find(n => n.id === id), old);
    if (old.searchText) assert.ok(current.searchText.includes(old.searchText));
  }
});
