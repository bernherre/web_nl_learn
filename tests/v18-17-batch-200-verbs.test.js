import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const rows = JSON.parse(await readFile(new URL('data/initial-verb-definitions.json', root), 'utf8'));
const batch = rows.filter((item) => item.reviewBatch === 'V18.17-A1351-A1550');

test('V18.17 voegt precies 200 nieuwe alfabetische fiches toe', () => {
  assert.equal(batch.length, 200);
  assert.equal(batch[0].infinitive, 'terugtrekken');
  assert.equal(batch.at(-1).infinitive, 'vastgrijpen');
});

test('de V18.17-fiches bevatten specifieke betekenisvelden en traceerbare bronstatus', () => {
  for (const item of batch) {
    assert.ok(item.meaning.length >= 35, item.infinitive);
    assert.ok(item.usage.length >= 50, item.infinitive);
    assert.ok(item.synonyms.length >= 2, item.infinitive);
    assert.ok(item.examples.length >= 2, item.infinitive);
    assert.match(item.lexicalSource, /Woorden\.org-prioriteit/);
    assert.equal(item.reviewStatus, 'editorially-reviewed');
  }
});
