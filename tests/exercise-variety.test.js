import test from 'node:test';
import assert from 'node:assert/strict';
import {exerciseBank, exerciseContentKey, distinctExerciseCandidates} from '../js/exercises.js';
test('all choice and listening questions have distinct answer options',()=>{
 for(const exercise of exerciseBank.filter(item=>item.options)) assert.equal(new Set(exercise.options).size,exercise.options.length,exercise.id);
});
test('practice avoids repeated content while preserving historic records and IDs',()=>{
 const first={id:'old-1',level:'A1',type:'choice',prompt:'Kies',answer:'a',options:['a','b']};
 const duplicate={...first,id:'old-2',options:['b','a']};
 const different={...first,id:'new',prompt:'Anders'};
 const bank=[first,duplicate,different];
 assert.equal(exerciseContentKey(first),exerciseContentKey(duplicate));
 assert.deepEqual(distinctExerciseCandidates(bank,['old-2']),[different]);
 assert.deepEqual(distinctExerciseCandidates(bank,['old-2','new']),[first,different]);
 assert.deepEqual(bank.map(item=>item.id),['old-1','old-2','new']);
});
