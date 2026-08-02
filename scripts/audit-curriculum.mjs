import { readFile, writeFile } from 'node:fs/promises';
import { advancedSpiralLevels } from '../js/advanced-level-content.js';
import { c1c2GrammarTopics, c1c2QuestionTopics, c1c2QuestionPractice } from '../js/c1-c2-language-systems.js';
import { questionTopics, questionPractice } from '../js/questions-content.js';

const normalise = (value) => String(value ?? '')
  .trim().toLocaleLowerCase('nl-NL').normalize('NFKD')
  .replace(/[\u0300-\u036f]/gu, '').replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const graph = JSON.parse(await readFile(new URL('../data/content-knowledge-graph.json', import.meta.url), 'utf8'));

const grammarAliases = new Map();
for (const topic of c1c2GrammarTopics) {
  grammarAliases.set(normalise(topic.id), topic.id);
  grammarAliases.set(normalise(topic.title), topic.id);
  for (const alias of topic.aliases || []) grammarAliases.set(normalise(alias), topic.id);
  check(topic.summary?.length >= 45, `${topic.id}: samenvatting te kort`);
  check(topic.rule?.length >= 35, `${topic.id}: regel te kort`);
  check(topic.examples?.length >= 4, `${topic.id}: minder dan vier voorbeelden`);
  check(topic.sections?.length >= 3, `${topic.id}: onvoldoende secties`);
  check(topic.contrasts?.length >= 2, `${topic.id}: onvoldoende contrasten`);
  check(topic.mistakes?.length >= 1, `${topic.id}: foutnotitie ontbreekt`);
}

const spiralFocuses = [];
for (const [themeId, levels] of Object.entries(advancedSpiralLevels)) {
  for (const level of ['C1', 'C2']) {
    for (const label of levels[level]?.grammar || []) {
      spiralFocuses.push({ themeId, level, label });
      check(grammarAliases.has(normalise(label)), `${level}/${themeId}: geen canonieke grammaticakoppeling voor “${label}”`);
    }
  }
}

const allQuestionTopics = [...questionTopics, ...c1c2QuestionTopics];
const allQuestionPractice = [...questionPractice, ...c1c2QuestionPractice];
const questionIds = new Set(allQuestionTopics.map((item) => item.id));
for (const item of c1c2QuestionTopics) {
  check(item.examples?.length >= 4, `${item.id}: minder dan vier vragen`);
  check(item.sections?.length >= 3, `${item.id}: onvoldoende secties`);
  check(item.relatedGrammar?.length >= 2, `${item.id}: grammaticakoppelingen ontbreken`);
  for (const grammarId of item.relatedGrammar || []) check(c1c2GrammarTopics.some((topic) => topic.id === grammarId), `${item.id}: onbekende grammatica ${grammarId}`);
}
for (const item of allQuestionPractice) check(questionIds.has(item.topic), `${item.id}: onbekend vraagonderwerp ${item.topic}`);

check(c1c2GrammarTopics.length === 19, `verwacht 19 C1-C2-grammaticamodules, kreeg ${c1c2GrammarTopics.length}`);
check(c1c2GrammarTopics.filter((item) => item.level === 'C1').length === 9, 'C1 moet negen canonieke grammaticamodules bevatten');
check(c1c2GrammarTopics.filter((item) => item.level === 'C2').length === 10, 'C2 moet tien canonieke grammaticamodules bevatten');
check(c1c2QuestionTopics.length === 8, `verwacht 8 C1-C2-vraagmodules, kreeg ${c1c2QuestionTopics.length}`);
check(c1c2QuestionPractice.length === 12, `verwacht 12 C1-C2-vraagoefeningen, kreeg ${c1c2QuestionPractice.length}`);
check(spiralFocuses.length === 54, `verwacht 54 C1-C2-curriculumfocussen, kreeg ${spiralFocuses.length}`);
check(graph.metadata?.version === packageJson.version, `graafversie ${graph.metadata?.version} wijkt af van ${packageJson.version}`);
check(graph.nodes.filter((node) => node.type === 'grammar_focus' && ['C1', 'C2'].includes(node.level)).length === 54, 'graaf bevat niet alle 54 C1-C2-grammaticafocussen');
check(graph.nodes.filter((node) => node.type === 'question_topic' && ['C1', 'C2'].includes(node.level)).length === 8, 'graaf bevat niet alle 8 C1-C2-vraagmodules');
check(graph.nodes.filter((node) => node.type === 'practice' && ['C1', 'C2'].includes(node.level)).length === 12, 'graaf bevat niet alle 12 C1-C2-vraagoefeningen');
check((graph.metadata?.relationCounts?.refines_grammar || 0) >= 54, 'graaf mist canonieke grammatica-verfijningsrelaties');
check((graph.metadata?.relationCounts?.applies_grammar || 0) >= 8, 'graaf mist vraag-naar-grammaticarelaties');

const report = [
  `# Curriculumaudit ${packageJson.version}`, '',
  `- Applicatieversie: ${packageJson.version}`,
  `- C1-C2-grammaticamodules: ${c1c2GrammarTopics.length}`,
  `- C1-C2-vraagmodules: ${c1c2QuestionTopics.length}`,
  `- C1-C2-vraagoefeningen: ${c1c2QuestionPractice.length}`,
  `- C1-C2-spiraalgrammaticafocussen: ${spiralFocuses.length}`,
  `- Kennisgraafnodes: ${graph.metadata?.nodeCount}`,
  `- Kennisgraafrelaties: ${graph.metadata?.edgeCount}`,
  `- Blokkerende bevindingen: ${failures.length}`, '',
  failures.length ? '## Bevindingen' : 'Alle grammatica-, vragen- en graafkoppelingen zijn actueel en intern consistent.',
  '',
  ...failures.map((item) => `- ${item}`),
];
await writeFile(new URL('../docs/curriculum-audit.md', import.meta.url), `${report.join('\n')}\n`, 'utf8');
if (failures.length) throw new Error(`Curriculumaudit vond ${failures.length} problemen:\n${failures.slice(0, 30).join('\n')}`);
console.log(`Curriculumaudit geslaagd: ${c1c2GrammarTopics.length} grammaticamodules, ${c1c2QuestionTopics.length} vraagmodules en ${spiralFocuses.length} gevorderde graaffocussen.`);
