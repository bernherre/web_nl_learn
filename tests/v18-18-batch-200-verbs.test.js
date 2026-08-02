import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const defs = JSON.parse(fs.readFileSync(new URL('../data/initial-verb-definitions.json', import.meta.url), 'utf8'));
const batch = defs.filter((x) => x.reviewBatch === 'V18.18-A1551-A1750');

test('V18.18 contains exactly 200 newly enriched verbs', () => {
  assert.equal(batch.length, 200);
  assert.equal(batch[0].infinitive, 'vastgroeien');
  assert.equal(batch.at(-1).infinitive, 'vrijvallen');
});

test('V18.18 entries have specific definitions, two synonyms and two examples', () => {
  for (const row of batch) {
    assert.ok(row.meaning.length >= 28, `${row.infinitive}: definition too short`);
    assert.ok(!/handeling of activiteit|specifieke betekenis van/i.test(row.meaning), `${row.infinitive}: generic definition`);
    assert.equal(row.synonyms.length, 2, `${row.infinitive}: synonyms`);
    assert.ok(row.synonyms.every((x) => x && x.length >= 3), `${row.infinitive}: empty synonym`);
    assert.equal(row.examples.length, 2, `${row.infinitive}: examples`);
    assert.ok(row.synonymNote.toLocaleLowerCase('nl-NL').includes(row.synonyms[0].toLocaleLowerCase('nl-NL')), `${row.infinitive}: synonym note`);
  }
});
