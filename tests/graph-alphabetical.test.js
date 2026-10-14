import test from 'node:test';
import assert from 'node:assert/strict';
import { compareGraphLabels, graphInitial } from '../js/knowledge-graph.js';
test('graph sorts across types and review status in stable Dutch alphabetical order', () => {
 const nodes=[{id:'v',label:'bijten',type:'verb',status:'warning'},{id:'l',label:'appel',type:'lexeme'},{id:'g',label:'Zelfstandige naamwoorden',type:'grammar'},{id:'e',label:'Bellen',type:'exercise'}];
 assert.deepEqual(nodes.sort(compareGraphLabels).map(n=>n.label),['appel','Bellen','bijten','Zelfstandige naamwoorden']);
});
test('alphabet includes accents, numbers, and every entry exactly once', () => {
 assert.equal(graphInitial('één'),'E');
 assert.equal(graphInitial('  de koorts'),'D');
 assert.equal(graphInitial('12 maanden'),'#');
});
