import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { advancedGrammarTopics, advancedExerciseBank, advancedPracticeStats, emailTasks, logicRelationGroups, readingArticles } from '../js/advanced-practice-content.js';
import { exerciseBank, filterExercises } from '../js/exercises.js';

const root = new URL('../', import.meta.url);
async function read(path) { return readFile(new URL(path, root), 'utf8'); }

test('V16 voegt brede grammatica-oefeningen toe zonder alleen het totaal te verhogen', () => {
  assert.equal(advancedExerciseBank.length, 3950);
  assert.equal(exerciseBank.length, 8072);
  const requiredTopics = [
    'bijwoorden', 'connectors', 'connectors en signaalwoorden', 'vaste voorzetsels',
    'scheidbare werkwoorden', 'werkwoordstijden', 'condities', 'hypothetische condities',
    'vragen', 'lezen B1', 'lezen B2 / NT2-II-stijl', 'e-mails', 'e-mails B2',
  ];
  for (const topic of requiredTopics) assert.ok(exerciseBank.some((item) => item.topic === topic), `${topic} ontbreekt`);
  assert.ok(filterExercises(exerciseBank, { level: 'B2', type: 'reading' }).length >= 100);
  assert.ok(filterExercises(exerciseBank, { level: 'B1', type: 'selfcheck', topic: 'e-mails' }).length >= 50);
});

test('de logische verbindingsatlas bevat oorzaak, gevolg, doel, voorwaarden, contrast en tijd', () => {
  assert.deepEqual(logicRelationGroups.map((group) => group.id), ['oorzaak', 'gevolg', 'doel', 'voorwaarde', 'contrast', 'tijd']);
  const words = logicRelationGroups.flatMap((group) => group.items.map((item) => item[0]));
  for (const word of ['omdat', 'doordat', 'zodat', 'waardoor', 'daardoor', 'mits', 'tenzij', 'desondanks', 'vanwege']) {
    assert.ok(words.includes(word), `${word} ontbreekt`);
  }
  assert.ok(advancedGrammarTopics.some((topic) => topic.id === 'gevolg-zodat-waardoor'));
  assert.ok(advancedGrammarTopics.some((topic) => topic.id === 'hypothetische-voorwaarden'));
});

test('B1 en B2 bevatten originele artikelen met bewijsgerichte begripvragen', () => {
  assert.equal(readingArticles.length, 10);
  assert.ok(readingArticles.filter((item) => item.level === 'B1').length >= 4);
  assert.ok(readingArticles.filter((item) => item.level === 'B2').length >= 6);
  for (const article of readingArticles) {
    assert.ok(article.paragraphs.length >= 5);
    assert.ok(article.questions.length >= 6);
    assert.ok(article.vocabulary.length >= 4);
    for (const question of article.questions) {
      assert.equal(question.options.length, 3);
      assert.ok(Number.isInteger(question.answer));
      assert.ok(question.evidence >= 1 && question.evidence <= article.paragraphs.length);
      assert.ok(question.explanation);
    }
  }
});

test('e-mailtaken behandelen klachten, meningen, voorkeuren en professioneel B2-register', () => {
  assert.equal(emailTasks.length, 12);
  assert.equal(emailTasks.filter((item) => item.level === 'B1').length, 6);
  assert.equal(emailTasks.filter((item) => item.level === 'B2').length, 6);
  const all = emailTasks.map((item) => `${item.title} ${item.context} ${item.points.join(' ')}`).join(' ').toLowerCase();
  for (const concept of ['klacht', 'mening', 'voorkeur', 'advies', 'vertraging', 'feedback']) assert.match(all, new RegExp(concept));
  for (const task of emailTasks) {
    assert.ok(task.model.includes('Onderwerp:'));
    assert.ok(task.points.length >= 4);
    assert.ok(task.useful.length >= 4);
  }
});

test('de interface maakt grammatica, lezen en schrijven direct vindbaar', async () => {
  const html = await read('index.html');
  const main = await read('js/main.js');
  for (const id of ['page-lezen-schrijven', 'reading-article-list', 'reading-article-detail', 'email-task-list', 'email-task-detail', 'logic-relation-grid']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  for (const label of ['Bijwoorden', 'Connectors & signaalwoorden', 'Zodat · waardoor · daardoor', 'Voorwaarden']) assert.match(html, new RegExp(label));
  assert.match(main, /renderReadingWriting/);
  assert.match(main, /renderLogicRelations/);
  assert.match(main, /data-reading-answer/);
  assert.match(main, /data-email-model/);
});

test('de klassieke bundle en offlinecache bevatten de V16-module', async () => {
  const app = await read('js/app.js');
  const worker = await read('service-worker.js');
  assert.match(app, /const readingArticles =/);
  assert.match(app, /const advancedExerciseBank =/);
  assert.match(app, /Kunstmatige intelligentie en professioneel oordeel/);
  assert.match(worker, /advanced-practice-content\.js/);
  assert.equal(advancedPracticeStats.total, 3950);
});
