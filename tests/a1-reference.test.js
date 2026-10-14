import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { a1ReferenceCards, a1ReferenceNodeId } from '../js/a1-reference-content.js';
import { a1Themes, grammarTopics } from '../js/content.js';
import { findLexiconEntry } from '../js/lexicon.js';
import { verbAtlas } from '../js/verb-atlas.js';
applyCoreVerbReviews(verbAtlas);
const graph = JSON.parse(readFileSync(new URL('../data/content-knowledge-graph.json', import.meta.url)));
const nodes = new Map(graph.nodes.map(node => [node.id, node]));
test('A1 reference cards cover all eight themes and resolve canonical references', () => {
  assert.equal(new Set(a1ReferenceCards.map(card => card.id)).size, 24);
  assert.deepEqual(new Set(a1ReferenceCards.map(card => card.themeId)), new Set(a1Themes.map(theme => theme.id)));
  for (const card of a1ReferenceCards) {
    for (const term of card.terms) assert.ok(findLexiconEntry(term), term);
    for (const verb of card.verbs) assert.ok(verbAtlas.some(entry => entry.infinitive === verb), verb);
    for (const id of card.grammarIds) assert.ok(grammarTopics.some(topic => topic.id === id), id);
    assert.ok(card.examples.length >= 2);
    const id = a1ReferenceNodeId(card.id);
    assert.equal(nodes.get(id)?.data.referenceId, card.id);
    const edges = graph.edges.filter(edge => edge.source === id);
    assert.ok(edges.some(edge => edge.target === `theme:A1:${card.themeId}`));
    assert.equal(edges.filter(edge => edge.type === 'uses_lexeme').length, card.terms.length);
    assert.equal(edges.filter(edge => edge.type === 'uses_verb').length, card.verbs.length);
    for (const edge of edges) assert.ok(nodes.has(edge.target), edge.target);
  }
});
