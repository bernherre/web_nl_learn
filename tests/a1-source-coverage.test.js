import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {a1SourcePages} from '../js/a1-source-pages.js';
import {a1ExpansionLessons,a1ExpansionExercises,a1LessonNodeId} from '../js/a1-expansion-content.js';
import {a1ReferenceCards,a1ReferenceNodeId} from '../js/a1-reference-content.js';
import {findLexiconEntry} from '../js/lexicon.js';
import {a1ExpansionVerbs} from '../js/a1-expansion-verbs.js';
const graph=JSON.parse(readFileSync(new URL('../data/content-knowledge-graph.json',import.meta.url)));
const edges=new Set(graph.edges.map(e=>`${e.source}|${e.type}|${e.target}`));
const lexemes=new Map(graph.nodes.filter(n=>n.type==='lexeme').map(n=>[n.label,n.id]));
test('all 90 source pages resolve words, lessons, exercises and reference cards',()=>{
 assert.deepEqual(a1SourcePages,JSON.parse(readFileSync(new URL('../data/source-audit/a1-photo-inventory.json',import.meta.url))));
 assert.equal(a1SourcePages.length,90);assert.equal(new Set(a1SourcePages.map(p=>p.file)).size,90);
 for(const p of a1SourcePages){
  const l=a1ExpansionLessons.find(l=>l.id===p.lessonId);assert.ok(l,p.id);
  assert.ok(edges.has(`${a1LessonNodeId(l.id)}|has_source_page|${p.id}`));
  assert.ok(p.rule.length>30);assert.ok(p.limits);
  const exercises=a1ExpansionExercises.filter(e=>e.sourcePageIds?.includes(p.id));
  for(const term of p.terms){const e=findLexiconEntry(term);assert.ok(e,term);assert.ok(l.terms.includes(term));assert.ok(edges.has(`${p.id}|uses_lexeme|${lexemes.get(e.term)}`));assert.ok(exercises.some(x=>x.answer===e.definition),`${p.id}: ${term}`);}
  for(const v of p.verbs)assert.ok(edges.has(`${p.id}|uses_verb|verb:${v}`),v);
  const cards=a1ReferenceCards.filter(c=>c.sourcePages.some(s=>s.id===p.id));assert.ok(cards.length,p.id);
  for(const c of cards){assert.ok(edges.has(`${a1ReferenceNodeId(c.id)}|has_source_page|${p.id}`));for(const t of p.terms)assert.ok(c.terms.includes(t));}
 }
});
test('every lesson is completely represented in a linked reference card',()=>{
 for(const l of a1ExpansionLessons)assert.ok(a1ReferenceCards.some(c=>c.lessonIds.includes(l.id)&&l.terms.every(t=>c.terms.includes(t))),l.id);
});
test('six reconstructed verb paradigms have independently specified risk forms',()=>{
 const expected={trouwen:['jij trouwt','trouwde','getrouwd','zijn'],sporten:['jij sport','sportte','gesport','hebben'],voetballen:['jij voetbalt','voetbalde','gevoetbald','hebben'],onthouden:['jij onthoudt','onthield','onthouden','hebben'],opletten:['jij let op','lette op','opgelet','hebben'],aanwijzen:['jij wijst aan','wees aan','aangewezen','hebben']};
 for(const [name,forms] of Object.entries(expected)){const v=a1ExpansionVerbs.find(v=>v.infinitive===name);assert.deepEqual([v.presentForms[1],v.past,v.participle,v.auxiliary],forms);assert.equal(v.separable,['opletten','aanwijzen'].includes(name));}
});
