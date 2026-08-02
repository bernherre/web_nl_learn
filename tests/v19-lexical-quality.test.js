import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
test('onbeoordeelde woorden tonen geen verzonnen definitie of schijnvoorbeeld', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.doesNotMatch(main, /Een vaste combinatie die je als één geheel gebruikt/);
  assert.match(main, /nog geen gecontroleerde betekenis beschikbaar/);
  assert.match(main, /example: ''/);
});
test('opslag en schade hebben een echte betekenis en voorbeeldzin', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /Tijdens de verhuizing bewaren we onze meubels in de opslag\./);
  assert.match(main, /De storm heeft veel schade aan het dak veroorzaakt\./);
});
