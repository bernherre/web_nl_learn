import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
const source = readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
function setup(voice = { lang: 'nl-NL', name: 'Dutch' }, implementation = source) {
  const played = [], notices = [], calls = [];
  const state = { settings: { speechRate: .9 }, progress: { audioPlays: 0 } };
  const synth = { speaking: false, pending: false, paused: false,
    cancel() { calls.push('cancel'); }, resume() { calls.push('resume'); },
    speak(u) { played.push(u); } };
  const context = vm.createContext({ window: { speechSynthesis: synth },
    SpeechSynthesisUtterance: class { constructor(text) { this.text = text; } },
    state, loadVoices() { calls.push('voices'); state.dutchVoice = voice; },
    saveProgress() { calls.push('save'); }, showToast(message) { notices.push(message); } });
  vm.runInContext(implementation.slice(implementation.indexOf('let activeUtterance = null;'), implementation.indexOf('\nfunction vocabularyCard')), context);
  return { played, notices, calls, state, synth, speak: context.speak };
}
test('speech starts synchronously, refreshes voices and only counts actual start once', () => {
  const h = setup(); h.speak('Ik ben Sara.');
  assert.equal(h.played.length, 1); assert.equal(h.state.progress.audioPlays, 0);
  assert.equal(h.played[0].lang, 'nl-NL'); assert.deepEqual(h.calls, ['voices']);
  h.played[0].onstart(); h.played[0].onstart();
  assert.equal(h.state.progress.audioPlays, 1);
});
test('replacement detaches canceled speech and ignores late events', () => {
  const h = setup(); h.speak('Eerste'); const oldError = h.played[0].onerror;
  h.synth.speaking = true; h.synth.paused = true; h.speak('Tweede');
  assert.equal(h.played[0].onerror, null); oldError({ error: 'synthesis-failed' });
  assert.deepEqual(h.notices, []); assert.ok(h.calls.includes('cancel')); assert.ok(h.calls.includes('resume'));
  h.played[1].onstart(); assert.equal(h.state.progress.audioPlays, 1);
});
test('normal interruptions do not display failures', () => {
  for (const error of ['canceled', 'interrupted']) {
    const h = setup(); h.speak('Hallo'); h.played[0].onerror({ error });
    assert.deepEqual(h.notices, []); assert.equal(h.state.progress.audioPlays, 0);
  }
});
test('genuine errors retain a useful cause and never count a failed attempt', () => {
  for (const error of ['not-allowed', 'voice-unavailable', 'language-unavailable', 'audio-busy', 'audio-hardware', 'network', 'synthesis-failed']) {
    const h = setup(); h.speak('Hallo'); h.played[0].onerror({ error });
    assert.equal(h.notices.length, 1); assert.equal(h.state.progress.audioPlays, 0);
    if (error === 'synthesis-failed') assert.match(h.notices[0], /synthesis-failed/);
  }
});
test('synchronous engine failure is handled', () => {
  const h = setup(); h.synth.speak = () => { throw Error('Unavailable'); }; h.speak('Hallo');
  assert.equal(h.notices.length, 1); assert.equal(h.state.progress.audioPlays, 0);
});

for (const file of ['main.js', 'app.js']) {
  test(`${file}: Dutch voice language and nl-NL fallback work at runtime`, () => {
    const implementation = readFileSync(new URL(`../js/${file}`, import.meta.url), 'utf8');
    for (const voice of [null, { lang: 'nl-NL', name: 'Dutch' }, { lang: 'nl-BE', name: 'Flemish' }]) {
      const h = setup(voice, implementation);
      h.speak('Goedemorgen');
      assert.equal(h.played[0].lang, voice?.lang || 'nl-NL');
      assert.equal(h.played[0].voice, voice || undefined);
    }
  });
}
