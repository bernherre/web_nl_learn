import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { advancedSpiralLevels } from '../js/advanced-level-content.js';
import { spiralThemes } from '../js/spiral-content.js';
import { v19Exercises } from '../js/v19-learning-experience.js';
import { safeProgress } from '../js/learning.js';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

test('C1 en C2 hebben elk negen volledige spiraalthema’s', () => {
  assert.deepEqual(Object.keys(advancedSpiralLevels), spiralThemes.map((theme) => theme.id));
  for (const theme of spiralThemes) {
    for (const level of ['C1', 'C2']) {
      const data = advancedSpiralLevels[theme.id]?.[level];
      assert.ok(data, `${level} ontbreekt voor ${theme.id}`);
      assert.ok(data.canDo.length >= 3);
      assert.ok(data.grammar.length >= 3);
      assert.ok(data.dialogue.length >= 4);
      const items = Object.values(data.words).flat();
      assert.ok(items.length >= 24, `${level} ${theme.id} heeft slechts ${items.length} items`);
      assert.equal(new Set(items).size, items.length, `${level} ${theme.id} bevat dubbele items`);
    }
  }
});

test('C1 en C2 zijn zichtbaar, navigeerbaar en hebben eigen voortgang', async () => {
  const [html, main, bundle] = await Promise.all([read('index.html'), read('js/main.js'), read('js/app.js')]);
  for (const level of ['c1', 'c2']) {
    assert.match(html, new RegExp(`data-page="${level}"`));
    assert.match(html, new RegExp(`id="page-${level}"`));
    assert.match(html, new RegExp(`id="${level}-theme-grid"`));
    assert.match(main, new RegExp(`render${level.toUpperCase()}Themes`));
  }
  const definition = bundle.indexOf('const advancedSpiralLevels =');
  const use = bundle.indexOf('function spiralLevelData(');
  assert.ok(definition >= 0, 'advancedSpiralLevels ontbreekt in js/app.js');
  assert.ok(use > definition, 'advancedSpiralLevels wordt gebruikt vóór de definitie');
  assert.deepEqual(safeProgress().c1Completed, []);
  assert.deepEqual(safeProgress().c2Completed, []);
});

test('de oefenbank bevat inhoudelijke C1- en C2-oefeningen', () => {
  for (const level of ['C1', 'C2']) {
    const exercises = v19Exercises.filter((item) => item.level === level);
    assert.equal(exercises.length, 9);
    assert.equal(new Set(exercises.map((item) => item.topic)).size, 9);
    assert.ok(exercises.every((item) => item.prompt && item.explanation));
  }
});
