import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const rows=JSON.parse(fs.readFileSync(new URL('../data/initial-verb-definitions.json',import.meta.url)));
const batch=rows.filter(x=>x.reviewBatch==='V18.16-A1151-A1350');
test('V18.16 adds exactly 200 reviewed entries',()=>{assert.equal(batch.length,200);assert.equal(batch[0].infinitive,'overvaren');assert.equal(batch.at(-1).infinitive,'terugsturen');});
test('V18.16 entries contain semantic fields',()=>{for(const x of batch){assert.ok(x.meaning.length>20);assert.ok(x.synonyms.length>=2);assert.ok(x.examples.length>=2);assert.ok(x.usage.length>30);}});
