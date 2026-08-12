import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { buildGuidedPaths } from '../js/learning-paths.js';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes } from '../js/content.js';
import { spiralThemes } from '../js/spiral-content.js';
import { advancedSpiralLevels } from '../js/advanced-level-content.js';
import { exerciseBank } from '../js/exercises.js';
import { findLexiconEntry } from '../js/lexicon.js';

const paths = buildGuidedPaths({ a0Themes, a1Themes, a2Themes, spiralThemes, advancedSpiralLevels, exerciseBank });

test('Alpha 12 bouwt 56 begeleide routes van A0 tot C2 uit bestaande inhoud', () => {
  assert.equal(paths.length, 56);
  assert.deepEqual(Object.fromEntries(['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => [level, paths.filter((path) => path.level === level).length])), {
    A0: 4, A1: 8, A2: 8, B1: 9, B2: 9, C1: 9, C2: 9,
  });
  for (const path of paths) {
    assert.ok(path.themeId);
    assert.ok(path.sourcePage);
    assert.ok(path.title);
    assert.ok(path.exerciseIds.length >= 1, `${path.id}: geen bestaande oefening gekoppeld`);
    for (const id of path.exerciseIds) assert.ok(exerciseBank.some((exercise) => exercise.id === id), `${path.id}: onbekende oefening ${id}`);
  }
});

test('alle A0-A2-woordkaarten in het Leerpad hebben een bestaande definitie en contextzin', () => {
  for (const path of paths.filter((item) => ['A0', 'A1', 'A2'].includes(item.level))) {
    const local = new Map((path.wordCards || []).map((item) => [item.term, item]));
    for (const term of path.terms) {
      const entry = findLexiconEntry(term) || local.get(term);
      assert.ok(entry, `${path.id}: ${term} heeft geen bestaande definitiebron`);
      assert.ok(entry.definition?.length >= 12, `${path.id}: ${term} heeft geen bruikbare definitie`);
      assert.ok(entry.example?.length >= 8, `${path.id}: ${term} heeft geen contextvoorbeeld`);
    }
  }
});

test('de Leerpad-interface vertaalt alleen op verzoek via een externe webpagina en gebruikt geen vertaal-API', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /id="leerpad-support-language"/u);
  assert.match(main, /data-guided-translate/u);
  assert.match(main, /https:\/\/translate\.google\.com\//u);
  assert.doesNotMatch(main, /translation[_-]?api|deepl[_-]?auth|googleapis\.com\/language\/translate/iu);
  assert.match(main, /localStorage\.setItem\(LEERPAD_SUPPORT_LANGUAGE_KEY/u);
});

test('de klassieke browserbundle en offlinecache bevatten de begeleide leerpaden', async () => {
  const app = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');
  const worker = await readFile(new URL('../service-worker.js', import.meta.url), 'utf8');
  assert.match(app, /function buildGuidedPaths/u);
  assert.match(app, /function renderGuidedPaths/u);
  assert.match(worker, /\.\/js\/learning-paths\.js/u);
});

test('de Kennisgraaf bevat elke begeleide route met niveau, thema en oefeningen', async () => {
  const graph = JSON.parse(await readFile(new URL('../data/content-knowledge-graph.json', import.meta.url), 'utf8'));
  const pathNodes = graph.nodes.filter((node) => node.type === 'learning_path');
  assert.equal(pathNodes.length, 56);
  for (const node of pathNodes) {
    const outgoing = graph.edges.filter((edge) => edge.source === node.id);
    assert.ok(outgoing.some((edge) => edge.type === 'has_level'), `${node.id}: niveau ontbreekt`);
    assert.ok(outgoing.some((edge) => edge.type === 'guides_through_theme'), `${node.id}: thema ontbreekt`);
    assert.ok(outgoing.some((edge) => edge.type === 'uses_exercise'), `${node.id}: oefening ontbreekt`);
  }
  const advanced = pathNodes.filter((node) => ['C1', 'C2'].includes(node.level));
  assert.equal(advanced.length, 18);
  assert.ok(advanced.some((node) => graph.edges.some((edge) => edge.source === node.id && edge.type === 'uses_verb')), 'C1-C2-routes hebben geen werkwoordrelaties');
});
