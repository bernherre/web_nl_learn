import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { verbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews } from '../js/verb-final-review.js';
import { applyVerbSentencePatternFixes } from '../js/verb-sentence-pattern-fixes.js';

applyVerbCorrections(verbAtlas);
applyCoreVerbReviews(verbAtlas);
applyInitialVerbReviews(verbAtlas);
applyFinalVerbReviews(verbAtlas);
applyVerbSentencePatternFixes(verbAtlas);

test('de werkwoordenfilter toont alle niveaus van A0 tot C2', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const select = html.match(/<select id="verb-level">([\s\S]*?)<\/select>/u)?.[1] || '';
  for (const level of ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
    assert.match(select, new RegExp(`<option value="${level}">${level}<\\/option>`, 'u'));
  }
  assert.match(select, /<option value="alle">Alle niveaus<\/option>/u);
});

test('C1 en C2 bevatten zichtbare werkwoordfiches', () => {
  const c1 = verbAtlas.filter((verb) => verb.level === 'C1');
  const c2 = verbAtlas.filter((verb) => verb.level === 'C2');
  assert.equal(c1.length, 8);
  assert.equal(c2.length, 4);
  assert.deepEqual(c1.map((verb) => verb.infinitive).sort(), [
    'beargumenteren', 'nuanceren', 'parafraseren', 'rechtvaardigen',
    'reflecteren', 'relativeren', 'veronderstellen', 'vertegenwoordigen',
  ]);
  assert.deepEqual(c2.map((verb) => verb.infinitive).sort(), [
    'herinterpreteren', 'mitigeren', 'rationaliseren', 'symboliseren',
  ]);
});
