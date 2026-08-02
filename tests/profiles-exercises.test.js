import test from 'node:test';
import assert from 'node:assert/strict';
import { exerciseBank, exerciseStats, checkExerciseAnswer, filterExercises, safeExerciseStats } from '../js/exercises.js';
import { exportProfilePayload, profileExerciseKey, profileIdFromName, profileProgressKey, uniqueProfileId, validateProfileImport } from '../js/profiles.js';

test('de V16-oefenbank bevat achtduizend oefeningen met brede dekking', () => {
  assert.equal(exerciseBank.length, 8072);
  assert.deepEqual(exerciseStats.byLevel, { A0: 356, A1: 1064, A2: 1569, B1: 2259, B2: 2806, C1: 9, C2: 9 });
  assert.equal(new Set(exerciseBank.map((item) => item.id)).size, exerciseBank.length);
  for (const item of exerciseBank) {
    assert.ok(item.prompt);
    assert.ok(item.explanation);
    assert.ok(['choice', 'input', 'order', 'listening', 'selfcheck', 'reading'].includes(item.type));
  }
});

test('oefeningen kunnen op niveau, type en thema worden gefilterd', () => {
  const result = filterExercises(exerciseBank, { level: 'A2', type: 'choice', topic: 'voorzetsels' });
  assert.ok(result.length > 0);
  assert.ok(result.every((item) => item.level === 'A2' && item.type === 'choice' && item.topic === 'voorzetsels'));
});

test('antwoordcontrole negeert hoofdletters, eindpunctuatie en spatie voor leestekens', () => {
  const order = { type: 'order', answer: 'Vandaag werk ik thuis.' };
  assert.equal(checkExerciseAnswer(order, 'vandaag werk ik thuis .'), true);
  assert.equal(checkExerciseAnswer(order, 'Vandaag ik werk thuis'), false);
});

test('oefenstatistieken worden veilig hersteld', () => {
  assert.deepEqual(safeExerciseStats({ answered: -1, correct: '4', history: ['a', 2], mistakes: null }), {
    answered: 0,
    correct: 4,
    streak: 0,
    bestStreak: 0,
    history: ['a'],
    mistakes: {},
    byLevel: {},
  });
});

test('profielnamen krijgen stabiele lokale ids en gescheiden opslagsleutels', () => {
  assert.equal(profileIdFromName('José María'), 'jose-maria');
  assert.equal(uniqueProfileId('Noor', [{ id: 'noor' }, { id: 'noor-2' }]), 'noor-3');
  assert.equal(profileProgressKey('noor'), 'nl-learn:profile:noor:progress:v1');
  assert.equal(profileExerciseKey('noor'), 'nl-learn:profile:noor:exercise-stats:v1');
});

test('een profiel kan worden geëxporteerd en als geldig importbestand worden herkend', () => {
  const payload = exportProfilePayload({ id: 'sam', name: 'Sam' }, { minutes: 4 }, { answered: 2 });
  assert.equal(validateProfileImport(payload), true);
  assert.equal(validateProfileImport({ version: 1 }), false);
});
