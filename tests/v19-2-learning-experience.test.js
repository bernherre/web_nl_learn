import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { v19Exercises, v19PracticeScenarios } from '../js/v19-learning-experience.js';
import { exerciseBank } from '../js/exercises.js';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

test('V19.2 voegt zes complete praktijksituaties toe', () => {
  assert.equal(v19PracticeScenarios.length, 6);
  for (const scenario of v19PracticeScenarios) {
    assert.ok(scenario.id && scenario.title && scenario.mission && scenario.image);
    assert.ok(scenario.questions.length >= 4);
    assert.ok(scenario.responses.length >= 4);
    assert.ok(scenario.natural.length >= 3);
    assert.ok(scenario.pronunciation.length >= 3);
  }
});

test('V19.3 RC1 bevat oefeningen voor alle niveaus van A0 tot C2', () => {
  assert.equal(v19Exercises.length, 48);
  assert.equal(new Set(v19Exercises.map((item) => item.id)).size, 48);
  for (const level of ['A0','A1','A2','B1','B2']) assert.equal(v19Exercises.filter((item) => item.level === level).length, 6);
  for (const level of ['C1','C2']) assert.equal(v19Exercises.filter((item) => item.level === level).length, 9);
  assert.ok(v19Exercises.filter((item) => item.image).length >= 5);
  assert.ok(v19Exercises.every((item) => exerciseBank.some((exercise) => exercise.id === item.id)));
});

test('de interface toont de praktijksituaties en visuele oefeningen', async () => {
  const [html, main, styles, sw] = await Promise.all([read('index.html'), read('js/main.js'), read('css/styles.css'), read('service-worker.js')]);
  assert.match(html, /data-page="praktijk"/);
  assert.match(html, /id="practice-scenario-grid"/);
  assert.match(main, /renderPracticeScenarios/);
  assert.match(main, /engine-visual/);
  assert.match(styles, /practice-scenario-grid/);
  const pkg = JSON.parse(await read('package.json'));
  assert.match(sw, new RegExp(pkg.version.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&'), 'u'));
});
