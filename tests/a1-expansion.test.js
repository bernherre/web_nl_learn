import { legacyGuidedExerciseIds } from '../js/learning-paths.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {a1ExpansionVerbs} from '../js/a1-expansion-verbs.js';
import {a1ExpansionLessons,a1ExpansionExercises,a1LessonAudio,a1LessonNodeId} from '../js/a1-expansion-content.js';
import {a1ExpansionLexicon} from '../js/a1-expansion-lexicon.js';
import {verbAtlas} from '../js/verb-atlas.js';
import {applyVerbCorrections} from '../js/verb-corrections.js';
import {applyCoreVerbReviews} from '../js/verb-core-review.js';
import {applyInitialVerbReviews} from '../js/verb-initial-review.js';
import {applyFinalVerbReviews} from '../js/verb-final-review.js';
import {applyVerbSentencePatternFixes} from '../js/verb-sentence-pattern-fixes.js';
import {a1Themes, grammarTopics, listeningScenes, vocabulary} from '../js/content.js';
import {findLexiconEntry} from '../js/lexicon.js';
import {exerciseBank,checkExerciseAnswer} from '../js/exercises.js';
for (const apply of [applyVerbCorrections,applyCoreVerbReviews,applyInitialVerbReviews,applyFinalVerbReviews,applyVerbSentencePatternFixes]) apply(verbAtlas);
const graph=JSON.parse(readFileSync(new URL('../data/content-knowledge-graph.json',import.meta.url)));
const nodes=new Map(graph.nodes.map(node=>[node.id,node]));
const edges=new Set(graph.edges.map(edge=>`${edge.source}|${edge.type}|${edge.target}`));
const normalise=value=>value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
test('twelve complete additions coexist with the reviewed begrijpen entry',()=>{
 assert.equal(a1ExpansionVerbs.length,12);
 assert.equal(verbAtlas.length,1898);
 assert.equal(new Set(verbAtlas.map(v=>v.infinitive)).size,verbAtlas.length);
 assert.equal(verbAtlas.filter(v=>v.infinitive==='begrijpen').length,1);
 for(const v of a1ExpansionVerbs){
  assert.ok(v.reviewed && v.formsReviewed);
  assert.equal(v.presentForms.length,6);assert.equal(v.pastForms.length,6);assert.ok(v.perfectForms.length>=2);
  for(const key of ['meaning','usage','synonymNote','participle','imperative','auxiliary'])assert.ok(v[key]?.length,key+' '+v.infinitive);
  assert.ok(v.examples.length>=2 && v.synonyms.length>=1);
  assert.deepEqual(Object.keys(v.sentencePatterns),['hoofdzin','inversie','vraag','verleden','perfectum','modaal','bijzin']);
  assert.equal(nodes.get(`verb:${v.infinitive}`).status,'reviewed');
  assert.ok(a1ExpansionLessons.some(l=>l.verbs.includes(v.infinitive)),v.infinitive+' has no lesson');
 }
 assert.equal(a1ExpansionVerbs.find(v=>v.infinitive==='vertrekken').auxiliary,'zijn');
 assert.equal(a1ExpansionVerbs.find(v=>v.infinitive==='verstaan').presentForms[1],'jij verstaat');
 assert.equal(a1ExpansionVerbs.find(v=>v.infinitive==='typen').participle,'getypt');
 assert.deepEqual(a1ExpansionVerbs.find(v=>v.infinitive==='rennen').perfectForms,['ik heb gerend','wij hebben gerend','ik ben gerend','wij zijn gerend']);
});
test('all 90 reference photographs are mapped to complete, reachable lessons',()=>{
 assert.equal(a1ExpansionLessons.length,32);
 assert.deepEqual([...new Set(a1ExpansionLessons.flatMap(l=>l.referencePhotos))].sort((a,b)=>a-b),Array.from({length:90},(_,i)=>i+1));
 for(const l of a1ExpansionLessons){
  const id=a1LessonNodeId(l.id);
  assert.ok(a1Themes.find(t=>t.id===l.themeId).lessons.includes(l));
  assert.ok(edges.has(`theme:A1:${l.themeId}|has_lesson|${id}`));
  for(const term of l.terms){
   const entry=findLexiconEntry(term);assert.ok(entry,term);
   assert.ok(vocabulary.some(v=>v.word===term));
   assert.ok(edges.has(`${id}|uses_lexeme|lexeme:${normalise(entry.term)}`));
  }
  for(const verb of l.verbs){assert.ok(verbAtlas.find(v=>v.infinitive===verb)?.reviewed,verb);assert.ok(edges.has(`${id}|uses_verb|verb:${verb}`));}
  for(const grammarId of l.grammarIds)assert.ok(grammarTopics.some(g=>g.id===grammarId));
  const audio=a1LessonAudio.find(a=>a.id===l.audioId);
  assert.equal(audio.text,l.dialogue.join(' '));assert.equal(audio.language,'nl-NL');assert.equal(audio.engine,'speech-synthesis');
  assert.ok(edges.has(`${id}|has_audio|${audio.id}`));
  assert.ok(listeningScenes.some(s=>s.lessonId===l.id && s.text===audio.text));
  for(const exerciseId of l.exerciseIds){assert.ok(exerciseBank.some(e=>e.id===exerciseId));assert.ok(edges.has(`${id}|uses_exercise|exercise:${exerciseId}`));}
 }
});
test('new tests have unique options, valid answers, and canonical feedback',()=>{
 assert.equal(a1ExpansionExercises.length,120);
 for(const e of a1ExpansionExercises){
  assert.ok(checkExerciseAnswer(e,e.answer));
  if (e.options) {
    assert.equal(new Set(e.options).size,e.options.length,e.id);assert.ok(e.options.includes(e.answer));
    for(const option of e.options.filter(o=>o!==e.answer))assert.equal(checkExerciseAnswer(e,option),false);
  }
  if(e.type==='listening')assert.ok(e.audio.length>80);
 }
 assert.equal(a1ExpansionLexicon.length,46);
});

test('new verbs use independently specified present and past forms',()=>{
 const forms={groeten:['groet','groette','gegroet'],typen:['typt','typte','getypt'],pakken:['pakt','pakte','gepakt'],verstaan:['verstaat','verstond','verstaan'],smeren:['smeert','smeerde','gesmeerd'],duren:['duurt','duurde','geduurd'],vertrekken:['vertrekt','vertrok','vertrokken'],rennen:['rent','rende','gerend'],snappen:['snapt','snapte','gesnapt'],bezoeken:['bezoekt','bezocht','bezocht'],kletsen:['kletst','kletste','gekletst'],dekken:['dekt','dekte','gedekt']};
 for(const [name,[present,past,participle]] of Object.entries(forms)){
  const verb=verbAtlas.find(item=>item.infinitive===name);
  assert.equal(verb.presentForms[2],`hij/zij ${present}`,name);
  assert.equal(verb.past,past,name);assert.equal(verb.participle,participle,name);
 }
});

test('legacy guided exercise assignments and synonym links survive the expansion',()=>{
 for(const [pathId, ids] of Object.entries(legacyGuidedExerciseIds)) {
  const node=graph.nodes.find(item=>item.type==='learning_path' && item.data.pathId===pathId);
  assert.ok(node,pathId);
  for(const id of ids) assert.ok(node.data.exerciseIds.includes(id),`${pathId}: removed ${id}`);
 }
 assert.ok(edges.has('sense:begrijpen:1|has_synonym|synonym:snappen'));
 assert.ok(edges.has('synonym:snappen|resolves_to_verb|verb:snappen'));
});
