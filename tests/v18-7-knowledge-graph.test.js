import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const graph = JSON.parse(await readFile(new URL('data/content-knowledge-graph.json', root), 'utf8'));
const nodes = new Map(graph.nodes.map((node) => [node.id, node]));
const outgoing = new Map();
for (const edge of graph.edges) {
  if (!outgoing.has(edge.source)) outgoing.set(edge.source, []);
  outgoing.get(edge.source).push(edge);
}

test('de V19.2.1-kennisgraaf bevat alle hoofdcollecties zonder gebroken relaties', () => {
  assert.equal(graph.metadata.version, '19.3.0-rc.1');
  assert.equal(graph.nodes.length, graph.metadata.nodeCount);
  assert.equal(graph.edges.length, graph.metadata.edgeCount);
  assert.equal(graph.metadata.exerciseCount, 8072);
  assert.equal(graph.metadata.reviewedVerbs, 1886);
  assert.equal(graph.metadata.unreviewedVerbs, 0);
  assert.ok(graph.metadata.nodeCount >= 17500);
  assert.ok(graph.metadata.edgeCount >= 64000);
  assert.equal(graph.metadata.typeCounts.theme, 74);
  assert.equal(graph.metadata.typeCounts.spiral_theme, 9);
  assert.equal(graph.metadata.typeCounts.practice, 10);
  assert.ok(graph.metadata.typeCounts.category >= 70);
  for (const edge of graph.edges) {
    assert.ok(nodes.has(edge.source), `bron ontbreekt: ${edge.id}`);
    assert.ok(nodes.has(edge.target), `doel ontbreekt: ${edge.id}`);
  }
  for (const type of ['verb', 'sense', 'synonym_term', 'usage', 'theme', 'spiral_theme', 'grammar', 'structure', 'vocabulary', 'practice', 'exercise']) {
    assert.ok(graph.metadata.typeCounts[type] > 0, `${type} ontbreekt`);
  }
});

test('aaien heeft een nagekeken betekenislaag met contextuele synoniemen', () => {
  const aaien = nodes.get('verb:aaien');
  assert.ok(aaien);
  assert.equal(aaien.status, 'reviewed');
  assert.equal(aaien.data.reviewed, true);
  assert.match(aaien.data.meaning, /Met de hand zacht/);
  assert.deepEqual(aaien.data.synonyms, ['strelen', 'liefkozen']);
  assert.ok(!(outgoing.get(aaien.id) || []).some((edge) => edge.type === 'has_issue'), 'aaien mag niet meer in de reviewwachtrij staan');
  const senseEdge = (outgoing.get(aaien.id) || []).find((edge) => edge.type === 'has_sense');
  assert.ok(senseEdge, 'aaien mist een betekenisnode');
  const senseEdges = outgoing.get(senseEdge.target) || [];
  assert.equal(senseEdges.filter((edge) => edge.type === 'has_synonym').length, 2);
  assert.ok(senseEdges.some((edge) => edge.type === 'has_usage'));
  assert.ok(senseEdges.filter((edge) => edge.type === 'has_example').length >= 2);
});

test('de voormalige reviewwachtrij is volledig afgewerkt', () => {
  const verb = nodes.get('verb:vrijvechten');
  assert.ok(verb);
  assert.equal(verb.status, 'reviewed');
  assert.equal(verb.data.reviewed, true);
  assert.match(verb.data.meaning, /strijd|inspanning|verzet/u);
  assert.ok(verb.data.synonyms.includes('zich bevrijden'));
  assert.ok(!(outgoing.get(verb.id) || []).some((edge) => edge.type === 'has_issue'));
  assert.equal(graph.metadata.issueCount, 0);
});

test('nagekeken werkwoorden koppelen synoniemen aan een betekenis en niet globaal aan het lemma', () => {
  const zijn = nodes.get('verb:zijn');
  assert.equal(zijn.data.reviewed, true);
  const senseEdge = (outgoing.get(zijn.id) || []).find((edge) => edge.type === 'has_sense');
  assert.ok(senseEdge);
  const senseEdges = outgoing.get(senseEdge.target) || [];
  assert.ok(senseEdges.some((edge) => edge.type === 'has_synonym'));
  assert.ok(senseEdges.some((edge) => edge.type === 'has_usage'));
  assert.ok(senseEdges.filter((edge) => edge.type === 'has_example').length >= 3);
  assert.ok(!(outgoing.get(zijn.id) || []).some((edge) => edge.type === 'has_synonym'), 'synoniemen mogen niet zonder betekenislaag aan het lemma hangen');
});

test('de interface laadt de graaf lui en biedt filters voor synoniemen, gebruik en controles', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  const source = await readFile(new URL('js/knowledge-graph.js', root), 'utf8');
  const main = await readFile(new URL('js/main.js', root), 'utf8');
  for (const id of ['page-kennisgraaf', 'knowledge-graph-search', 'knowledge-graph-type', 'knowledge-graph-level', 'knowledge-graph-mode', 'knowledge-graph-results', 'knowledge-graph-canvas', 'knowledge-graph-detail']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(source, /content-knowledge-graph\.json/);
  assert.match(source, /content-knowledge-graph\.js/);
  assert.match(source, /loadKnowledgeGraphScript/);
  const localGraphScript = await readFile(new URL('data/content-knowledge-graph.js', root), 'utf8');
  assert.match(localGraphScript.slice(0, 100), /__NL_CONTENT_KNOWLEDGE_GRAPH__/);
  assert.match(html, /Betekenis en synoniemen/);
  assert.match(html, /Plaatsen van gebruik/);
  assert.match(html, /Fouten en controles/);
  assert.match(main, /page === 'kennisgraaf'/);
  assert.match(main, /createKnowledgeGraphExplorer/);
});
