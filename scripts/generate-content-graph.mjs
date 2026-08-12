import { readFile, writeFile } from 'node:fs/promises';
import {
  levels,
  a1Themes,
  a2Themes,
  concepts,
  grammarTopics,
  vocabulary,
  listeningScenes,
} from '../js/content.js';
import { a0Themes } from '../js/starter-content.js';
import { centralLexiconEntries, findLexiconEntry } from '../js/lexicon.js';
import { spiralThemes } from '../js/spiral-content.js';
import { advancedSpiralLevels } from '../js/advanced-level-content.js';
import {
  prepositionEntries,
  fixedPrepositionCombinations,
  separableVerbBank,
  conjunctionBank,
  idiomBank,
} from '../js/depth-content.js';
import { questionTopics, pronominalAdverbs, questionPractice } from '../js/questions-content.js';
import { numberTimeTopics, numberQuickReference, mathCategories, mathConcepts } from '../js/number-math-content.js';
import { physicsCategories, physicsConcepts, softwareCategories, softwareConcepts } from '../js/technical-content.js';
import { professionalDomains, professionalConcepts } from '../js/professional-content.js';
import {
  advancedGrammarTopics,
  logicRelationGroups,
  adverbGroups,
  readingArticles,
  emailTasks,
} from '../js/advanced-practice-content.js';
import { sourceReviewGrammarTopics } from '../js/source-review-content.js';
import { c1c2GrammarTopics, c1c2QuestionTopics, c1c2QuestionPractice } from '../js/c1-c2-language-systems.js';
import { exerciseBank } from '../js/exercises.js';
import { verbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews } from '../js/verb-final-review.js';
import { applyVerbSentencePatternFixes } from '../js/verb-sentence-pattern-fixes.js';
import { buildGuidedPaths, guidedPathNodeId, guidedThemeNodeId } from '../js/learning-paths.js';

applyVerbCorrections(verbAtlas);
applyCoreVerbReviews(verbAtlas);
applyInitialVerbReviews(verbAtlas);
applyFinalVerbReviews(verbAtlas);
applyVerbSentencePatternFixes(verbAtlas);

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const VERSION = packageJson.version;
const nodes = new Map();
const edges = new Map();
const issues = [];
const sourceCounts = {};
const pendingGrammarFocuses = [];
const allQuestionTopics = [...questionTopics, ...c1c2QuestionTopics];
const allQuestionPractice = [...questionPractice, ...c1c2QuestionPractice];
const guidedPaths = buildGuidedPaths({ a0Themes, a1Themes, a2Themes, spiralThemes, advancedSpiralLevels, exerciseBank });

const clean = (value) => String(value ?? '').replace(/\s+/gu, ' ').trim();
const normalise = (value) => clean(value)
  .toLocaleLowerCase('nl-NL')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/gu, '')
  .replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');
const text = (...values) => values.flat(Infinity).filter((value) => value !== null && value !== undefined).map((value) => typeof value === 'object' ? JSON.stringify(value) : String(value)).join(' ');
const unique = (items) => [...new Set(items.filter(Boolean))];
const contentId = (type, value) => `${type}:${normalise(value) || 'onbekend'}`;

function addNode(node) {
  if (!node?.id || !node?.type || !node?.label) throw new Error(`Ongeldige node: ${JSON.stringify(node)}`);
  const previous = nodes.get(node.id);
  const next = {
    id: node.id,
    type: node.type,
    label: clean(node.label),
    subtitle: clean(node.subtitle),
    level: clean(node.level),
    status: node.status || 'ok',
    source: clean(node.source),
    searchText: clean(node.searchText || text(node.label, node.subtitle, node.level, node.source, node.data)),
    data: node.data || {},
  };
  if (previous) {
    nodes.set(node.id, {
      ...previous,
      ...next,
      data: { ...previous.data, ...next.data },
      searchText: unique([previous.searchText, next.searchText]).join(' '),
    });
  } else {
    nodes.set(node.id, next);
    sourceCounts[next.source || 'onbekend'] = (sourceCounts[next.source || 'onbekend'] || 0) + 1;
  }
  return node.id;
}

function addEdge(source, target, type, label = type, data = {}) {
  if (!source || !target || source === target) return null;
  const id = `${source}|${type}|${target}`;
  if (!nodes.has(source) || !nodes.has(target)) throw new Error(`Relatie verwijst naar ontbrekende node: ${id}`);
  if (!edges.has(id)) edges.set(id, { id, source, target, type, label, data });
  return id;
}

function ensureCategory(type, label, subtitle = '') {
  const id = contentId(type, label);
  addNode({ id, type, label, subtitle, source: 'graph-taxonomie' });
  return id;
}

function addIssue(targetId, codes, message, severity = 'warning', details = {}) {
  const codeList = unique(Array.isArray(codes) ? codes : [codes]);
  if (!codeList.length) return;
  const issueId = `issue:${targetId}`;
  const existing = nodes.get(issueId);
  const mergedCodes = unique([...(existing?.data?.codes || []), ...codeList]);
  const mergedMessages = unique([...(existing?.data?.messages || []), clean(message)]);
  const severityRank = { info: 1, warning: 2, error: 3 };
  const finalSeverity = severityRank[severity] > severityRank[existing?.data?.severity] ? severity : (existing?.data?.severity || severity);
  addNode({
    id: issueId,
    type: 'issue',
    label: finalSeverity === 'error' ? 'Inhoudsfout' : 'Controle nodig',
    subtitle: mergedMessages.join(' · '),
    status: finalSeverity,
    source: 'inhoudsvalidatie',
    searchText: text(codeList, mergedMessages, targetId),
    data: { ...existing?.data, ...details, codes: mergedCodes, messages: mergedMessages, severity: finalSeverity, targetId },
  });
  addEdge(targetId, issueId, 'has_issue', finalSeverity === 'error' ? 'fout' : 'controle');
  issues.push({ targetId, codes: codeList, severity: finalSeverity, message: clean(message) });
}

const levelIds = new Map();
for (const level of ['A0', ...levels.map((item) => item.id)]) {
  const levelData = level === 'A0' ? { title: 'Eerste woorden', description: 'Startniveau voor begroeten, voorstellen en basiscommunicatie.' } : levels.find((item) => item.id === level);
  const id = `level:${level}`;
  addNode({ id, type: 'level', label: level, subtitle: levelData?.title, level, source: 'leerpad', data: levelData || {} });
  levelIds.set(level, id);
}

function levelEdge(nodeId, level) {
  if (!level) return;
  if (levelIds.has(level)) {
    addEdge(nodeId, levelIds.get(level), 'has_level', level);
    return;
  }
  const matches = String(level).match(/A0|A1|A2|B1|B2|C1|C2/gu) || [];
  if (matches.length >= 2) {
    const order = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const start = order.indexOf(matches[0]);
    const end = order.indexOf(matches.at(-1));
    if (start >= 0 && end >= start) {
      for (const item of order.slice(start, end + 1)) addEdge(nodeId, levelIds.get(item), 'has_level', item);
      return;
    }
  }
  addIssue(nodeId, 'invalid-level', `Onbekend niveau: ${level}`, 'error');
}

const lexemeIds = new Map();
for (const entry of centralLexiconEntries) {
  const id = `lexeme:${normalise(entry.term)}`;
  lexemeIds.set(normalise(entry.term), id);
  addNode({
    id,
    type: 'lexeme',
    label: entry.term,
    subtitle: entry.definition,
    level: entry.level,
    source: 'centraal-lexicon',
    data: {
      definition: entry.definition,
      example: entry.example,
      kind: entry.kind,
      reviewStatus: entry.status,
      lexicalSource: entry.source,
    },
  });
  levelEdge(id, entry.level);
}

const allThemes = [
  ...a0Themes.map((theme) => ({ ...theme, level: 'A0' })),
  ...a1Themes.map((theme) => ({ ...theme, level: 'A1' })),
  ...a2Themes.map((theme) => ({ ...theme, level: 'A2' })),
];
const themeIds = new Map();
const themeVerbs = new Map();

for (const theme of allThemes) {
  const id = `theme:${theme.level}:${theme.id}`;
  themeIds.set(`${theme.level}:${theme.id}`, id);
  addNode({
    id,
    type: 'theme',
    label: theme.title,
    subtitle: theme.subtitle || theme.description,
    level: theme.level,
    source: `${theme.level}-cursus`,
    data: {
      description: theme.description,
      canDo: theme.canDo || [],
      pronunciation: theme.pronunciation || [],
      dialogue: theme.dialogue || [],
      image: theme.image || '',
    },
  });
  levelEdge(id, theme.level);

  for (const [group, words] of Object.entries(theme.wordGroups || {})) {
    for (const word of words || []) {
      const termId = `theme-term:${theme.level}:${theme.id}:${normalise(word)}`;
      addNode({
        id: termId,
        type: 'term',
        label: word,
        subtitle: group,
        level: theme.level,
        source: `${theme.level}-woordenbank`,
        data: { group, themeId: theme.id },
      });
      addEdge(id, termId, 'contains_term', group);
      const lexiconEntry = findLexiconEntry(word);
      const lexemeId = lexiconEntry ? lexemeIds.get(normalise(lexiconEntry.term)) : null;
      if (lexemeId) {
        addEdge(termId, lexemeId, 'resolves_to_lexeme', 'centrale betekenis');
        addEdge(id, lexemeId, 'teaches_lexeme', group);
      }
      const key = normalise(word.replace(/^(de|het|een)\s+/iu, ''));
      if (/werkwoord/iu.test(group)) {
        if (!themeVerbs.has(key)) themeVerbs.set(key, new Set());
        themeVerbs.get(key).add(id);
      }
    }
  }

  for (const entry of theme.vocabulary || []) {
    const [word, definition, example] = entry;
    const vocabId = `theme-vocabulary:${theme.level}:${theme.id}:${normalise(word)}`;
    addNode({
      id: vocabId,
      type: 'vocabulary',
      label: word,
      subtitle: definition,
      level: theme.level,
      source: `${theme.level}-kernwoordenschat`,
      data: { definition, example, themeId: theme.id },
    });
    addEdge(id, vocabId, 'teaches_word', 'kernwoord');
    const lexiconEntry = findLexiconEntry(word);
    const lexemeId = lexiconEntry ? lexemeIds.get(normalise(lexiconEntry.term)) : null;
    if (lexemeId) addEdge(vocabId, lexemeId, 'resolves_to_lexeme', 'centrale betekenis');
    if (!clean(definition) || clean(definition).length < 12) addIssue(vocabId, 'definition-too-short', 'Definitie ontbreekt of is te kort.', 'warning');
    if (!clean(example)) addIssue(vocabId, 'example-missing', 'Voorbeeldzin ontbreekt.', 'warning');
  }
}

// B1/B2 en de herhalende A1/A2-spiraalthema's worden als afzonderlijke curriculaire varianten opgenomen.
for (const theme of spiralThemes) {
  const parentId = `spiral-theme:${theme.id}`;
  addNode({ id: parentId, type: 'spiral_theme', label: theme.title, subtitle: theme.subtitle, source: 'spiraalleerpad', data: { image: theme.image, accent: theme.accent } });
  const levelVariants = { ...(theme.levels || {}), ...(advancedSpiralLevels[theme.id] || {}) };
  for (const [level, data] of Object.entries(levelVariants)) {
    const id = `theme:${level}:spiral:${theme.id}`;
    addNode({
      id, type: 'theme', label: theme.title, subtitle: `${level} · ${theme.subtitle}`, level, source: `${level}-spiraalcursus`,
      data: { canDo: data.canDo || [], grammar: data.grammar || [], dialogue: data.dialogue || [], image: theme.image, spiralThemeId: theme.id },
    });
    addEdge(parentId, id, 'has_level_variant', level);
    levelEdge(id, level);
    for (const grammarFocus of data.grammar || []) pendingGrammarFocuses.push({ themeId: id, themeKey: theme.id, level, label: grammarFocus });
    for (const [group, words] of Object.entries(data.words || {})) {
      for (const word of words || []) {
        const termId = `spiral-term:${level}:${theme.id}:${normalise(word)}`;
        addNode({ id: termId, type: 'term', label: word, subtitle: `${theme.title} · ${group}`, level, source: `${level}-spiraalwoorden`, data: { group, spiralThemeId: theme.id } });
        addEdge(id, termId, 'contains_term', group);
        if (/werkwoord/iu.test(group)) {
          const key = normalise(word.replace(/^(de|het|een)\s+/iu, ''));
          if (!themeVerbs.has(key)) themeVerbs.set(key, new Set());
          themeVerbs.get(key).add(id);
        }
      }
    }
  }
}

for (const item of vocabulary) {
  const id = `vocabulary:${normalise(item.word)}:${normalise(item.theme || item.category)}`;
  addNode({
    id,
    type: 'vocabulary',
    label: [item.article, item.word].filter(Boolean).join(' '),
    subtitle: item.definition,
    level: item.level,
    source: 'visuele-woordenschat',
    data: item,
  });
  levelEdge(id, item.level);
  const themeMatches = [...themeIds.entries()].filter(([key]) => key.endsWith(`:${item.theme}`));
  for (const [, themeId] of themeMatches) addEdge(id, themeId, 'used_in_theme', 'thema');
  if (!clean(item.definition) || clean(item.definition).length < 12) addIssue(id, 'definition-too-short', 'Definitie ontbreekt of is te kort.', 'warning');
  if (!clean(item.example)) addIssue(id, 'example-missing', 'Voorbeeldzin ontbreekt.', 'warning');
}

const grammarCollections = [
  ['grammatica', grammarTopics],
  ['gevorderde-grammatica', advancedGrammarTopics],
  ['bronmateriaal-review', sourceReviewGrammarTopics],
  ['c1-c2-grammatica', c1c2GrammarTopics],
  ['vragen', allQuestionTopics],
  ['getallen-en-tijd', numberTimeTopics],
];
const grammarIdsByLabel = new Map();

for (const [source, collection] of grammarCollections) {
  for (const item of collection) {
    const id = `${source === 'vragen' ? 'question' : 'grammar'}:${item.id}`;
    addNode({
      id,
      type: source === 'vragen' ? 'question_topic' : 'grammar',
      label: item.title,
      subtitle: item.summary || item.rule,
      level: item.level,
      source,
      data: {
        rule: item.rule || '',
        examples: item.examples || [],
        connections: item.connections || [],
        sections: item.sections || [],
        contrasts: item.contrasts || [],
        mistakes: item.mistakes || [],
        aliases: item.aliases || [],
        relatedGrammar: item.relatedGrammar || [],
      },
    });
    grammarIdsByLabel.set(normalise(item.title), id);
    grammarIdsByLabel.set(normalise(item.id), id);
    for (const alias of item.aliases || []) grammarIdsByLabel.set(normalise(alias), id);
    levelEdge(id, item.level);
    if (!clean(item.rule) || clean(item.rule).length < 20) addIssue(id, 'rule-too-short', 'Grammaticaregel ontbreekt of is te kort.', 'warning');
    if (!Array.isArray(item.examples) || item.examples.length === 0) addIssue(id, 'examples-missing', 'Grammaticaonderwerp heeft geen voorbeelden.', 'warning');
    for (const mistake of item.mistakes || []) {
      const issueNode = `known-error:${item.id}:${normalise(text(mistake))}`;
      addNode({ id: issueNode, type: 'known_error', label: 'Veelgemaakte fout', subtitle: text(mistake), level: item.level, source, data: { mistake } });
      addEdge(id, issueNode, 'documents_error', 'veelgemaakte fout');
    }
    for (const relatedId of item.relatedGrammar || []) {
      const target = grammarIdsByLabel.get(normalise(relatedId));
      if (target) addEdge(id, target, 'applies_grammar', 'past grammatica toe');
    }
  }
}

for (const focus of pendingGrammarFocuses) {
  const id = `grammar-focus:${focus.level}:${focus.themeKey}:${normalise(focus.label)}`;
  addNode({ id, type: 'grammar_focus', label: focus.label, subtitle: `${focus.level} · grammaticale focus in spiraalthema`, level: focus.level, source: `${focus.level}-spiraalgrammatica`, data: focus });
  addEdge(focus.themeId, id, 'uses_grammar_focus', 'grammaticale focus');
  levelEdge(id, focus.level);
  const canonical = grammarIdsByLabel.get(normalise(focus.label));
  if (canonical) addEdge(id, canonical, 'refines_grammar', 'uitwerking van');
}

for (const item of allQuestionPractice) {
  const id = `question-practice:${item.id}`;
  addNode({ id, type: 'practice', label: item.prompt, subtitle: item.explanation, level: item.level, source: 'vragen-oefenreeks', data: item });
  levelEdge(id, item.level);
  const topicId = grammarIdsByLabel.get(normalise(item.topic || 'vragen'));
  if (topicId) addEdge(id, topicId, 'practises_topic', 'oefent vraagstructuur');
  if (!Array.isArray(item.options) || !item.options[item.answer]) addIssue(id, 'invalid-answer', 'Vragenoefening heeft geen geldige antwoordindex.', 'error');
}

for (const group of numberQuickReference) {
  const groupId = `quick-reference:${normalise(group.title)}`;
  addNode({ id: groupId, type: 'reference_group', label: group.title, subtitle: 'Snelle referentie voor getallen en tijd', source: 'getallen-en-tijd', data: group });
  for (const value of group.items || []) {
    const itemId = `quick-reference-item:${normalise(group.title)}:${normalise(value)}`;
    addNode({ id: itemId, type: 'term', label: value, subtitle: group.title, source: 'getallen-en-tijd' });
    addEdge(groupId, itemId, 'contains_term', 'referentie');
  }
}

for (const [category, words] of adverbGroups) {
  const categoryId = `adverb-category:${normalise(category)}`;
  addNode({ id: categoryId, type: 'category', label: category, subtitle: 'Bijwoordcategorie', source: 'bijwoorden' });
  for (const word of words || []) {
    const wordId = `adverb:${normalise(category)}:${normalise(word)}`;
    addNode({ id: wordId, type: 'term', label: word, subtitle: `Bijwoord van ${category}`, source: 'bijwoorden' });
    addEdge(categoryId, wordId, 'contains_term', 'bijwoord');
  }
}

for (const [source, collection, type, labelKey, definitionKey] of [
  ['voorzetsels', prepositionEntries, 'structure', 'form', 'meaning'],
  ['vaste-voorzetsels', fixedPrepositionCombinations, 'structure', 'combination', 'meaning'],
  ['scheidbare-werkwoorden', separableVerbBank, 'structure', 'infinitive', 'meaning'],
  ['voegwoorden', conjunctionBank, 'structure', 'form', 'relation'],
  ['idiomatiek', idiomBank, 'idiom', 'expression', 'meaning'],
  ['voornaamwoordelijke-bijwoorden', pronominalAdverbs, 'structure', 'question', 'meaning'],
]) {
  for (const item of collection) {
    const label = item[labelKey];
    const id = `${type}:${source}:${normalise(label)}:${normalise(item.example || item.questionExample || '')}`;
    addNode({ id, type, label, subtitle: item[definitionKey], level: item.level || '', source, data: item });
    if (item.level) levelEdge(id, item.level);
    if (!clean(item[definitionKey])) addIssue(id, 'meaning-missing', 'Betekenis of relatie ontbreekt.', 'warning');
    if (!clean(item.example || item.questionExample)) addIssue(id, 'example-missing', 'Contextvoorbeeld ontbreekt.', 'warning');
  }
}

for (const concept of concepts) {
  const id = `concept:${concept.id}`;
  addNode({ id, type: 'concept', label: concept.title, subtitle: concept.description, source: 'conceptenweb', data: concept });
  for (const child of concept.children || []) {
    const childId = `concept-child:${concept.id}:${normalise(child)}`;
    addNode({ id: childId, type: 'concept', label: child, subtitle: concept.title, source: 'conceptenweb' });
    addEdge(id, childId, 'has_part', 'onderdeel');
  }
}

for (const [source, collection, type, labelKey, subtitleKey] of [
  ['wiskunde', mathConcepts, 'technical_concept', 'term', 'notion'],
  ['natuurkunde', physicsConcepts, 'technical_concept', 'term', 'definition'],
  ['software', softwareConcepts, 'technical_concept', 'term', 'definition'],
  ['vaklexicon', professionalConcepts, 'professional_concept', 'term', 'definition'],
]) {
  for (const item of collection) {
    const id = `${type}:${source}:${normalise(item.id || item.term)}:${normalise(item.domain || item.category || '')}`;
    addNode({ id, type, label: item[labelKey], subtitle: item[subtitleKey], level: item.level || '', source, data: item });
    if (item.level) levelEdge(id, item.level);
    if (!clean(item[subtitleKey]) || clean(item[subtitleKey]).length < 12) addIssue(id, 'definition-too-short', 'Definitie ontbreekt of is te kort.', 'warning');
  }
}

// Vakgebieden en deelcategorieën blijven als expliciete navigatienodes beschikbaar.
for (const [source, categories] of [['wiskunde', mathCategories], ['natuurkunde', physicsCategories], ['software', softwareCategories]]) {
  for (const category of categories) {
    const [key, label] = category;
    const categoryId = `category:${source}:${normalise(key)}`;
    addNode({ id: categoryId, type: 'category', label, subtitle: source, source });
    for (const node of nodes.values()) {
      if (node.source === source && node.data?.category === key) addEdge(node.id, categoryId, 'has_category', label);
    }
  }
}
for (const domain of professionalDomains) {
  const domainId = `domain:${domain.id}`;
  addNode({ id: domainId, type: 'domain', label: domain.title, subtitle: domain.subtitle, source: 'vaklexicon', data: domain });
  for (const category of domain.categories || []) {
    const categoryId = `category:vaklexicon:${domain.id}:${normalise(category)}`;
    addNode({ id: categoryId, type: 'category', label: category, subtitle: domain.title, source: 'vaklexicon' });
    addEdge(domainId, categoryId, 'has_category', 'deelgebied');
    for (const node of nodes.values()) {
      if (node.source === 'vaklexicon' && node.data?.domain === domain.id && node.data?.category === category) addEdge(node.id, categoryId, 'has_category', category);
    }
  }
}

for (const scene of listeningScenes) {
  const id = `listening:${scene.id}`;
  addNode({ id, type: 'listening', label: scene.title, subtitle: scene.intro, level: scene.level, source: 'luisteren', data: scene });
  levelEdge(id, scene.level);
  if (!clean(scene.text)) addIssue(id, 'audio-text-missing', 'Luistertekst ontbreekt.', 'error');
  if (!Array.isArray(scene.options) || !Number.isInteger(scene.answer) || !scene.options[scene.answer]) addIssue(id, 'invalid-answer', 'Luistervraag heeft geen geldige antwoordindex.', 'error');
}

for (const article of readingArticles) {
  const id = `reading:${article.id}`;
  addNode({ id, type: 'reading', label: article.title, subtitle: article.topic, level: article.level, source: 'lezen', data: article });
  levelEdge(id, article.level);
  if (!Array.isArray(article.paragraphs) || article.paragraphs.length === 0) addIssue(id, 'text-missing', 'Leestekst ontbreekt.', 'error');
  if (!Array.isArray(article.questions) || article.questions.length === 0) addIssue(id, 'questions-missing', 'Begripvragen ontbreken.', 'warning');
}

for (const task of emailTasks) {
  const id = `email:${task.id}`;
  addNode({ id, type: 'writing', label: task.title, subtitle: task.context, level: task.level, source: 'schrijven', data: task });
  levelEdge(id, task.level);
  if (!clean(task.model)) addIssue(id, 'model-missing', 'Modelantwoord ontbreekt.', 'warning');
  if (!Array.isArray(task.points) || task.points.length === 0) addIssue(id, 'criteria-missing', 'Schrijfcriteria ontbreken.', 'warning');
}

for (const group of logicRelationGroups) {
  const groupId = `logic:${group.id}`;
  addNode({ id: groupId, type: 'logic_relation', label: group.title, subtitle: 'Logische relatie', source: 'argumentatie', data: group });
  for (const item of group.items || []) {
    const itemLabel = typeof item === 'string' ? item : item.term || item.form || item.word || text(item);
    const itemId = `logic-item:${group.id}:${normalise(itemLabel)}`;
    addNode({ id: itemId, type: 'term', label: itemLabel, subtitle: group.title, source: 'argumentatie', data: typeof item === 'object' ? item : { value: item } });
    addEdge(groupId, itemId, 'contains_term', 'verbindingsmiddel');
  }
}

const reviewedDefinitionPatterns = [
  /^het werkwoord beschrijft/iu,
  /^een gecontroleerde omschrijving/iu,
  /handeling of activiteit/iu,
];
const verbIds = new Map();
const verbByNormalised = new Map();

for (const verb of verbAtlas) {
  const id = `verb:${normalise(verb.infinitive)}`;
  verbIds.set(verb.infinitive, id);
  verbByNormalised.set(normalise(verb.infinitive), id);
  const reviewed = verb.reviewed === true
    && clean(verb.meaning).length >= 20
    && !reviewedDefinitionPatterns.some((pattern) => pattern.test(clean(verb.meaning)))
    && Array.isArray(verb.synonyms) && verb.synonyms.length > 0
    && Array.isArray(verb.examples) && verb.examples.length > 0
    && clean(verb.usage).length >= 12;
  addNode({
    id,
    type: 'verb',
    label: verb.infinitive,
    subtitle: reviewed ? verb.meaning : verb.semanticLabel,
    level: verb.level,
    status: reviewed ? 'reviewed' : 'unreviewed',
    source: 'werkwoordenatlas',
    searchText: text(verb.infinitive, verb.root, verb.prefix, verb.semanticLabel, verb.meaning, verb.usage, verb.synonyms, verb.examples, verb.fixedPreposition, verb.sentencePatterns),
    data: {
      reviewed,
      meaning: reviewed ? verb.meaning : '',
      semantic: verb.semantic,
      semanticLabel: verb.semanticLabel,
      synonyms: reviewed ? verb.synonyms : [],
      synonymNote: reviewed ? verb.synonymNote || '' : '',
      usage: reviewed ? verb.usage : '',
      examples: reviewed ? verb.examples : [],
      relatedWords: reviewed ? verb.relatedWords || [] : [],
      auxiliary: verb.auxiliary,
      regularity: verb.regularity,
      separable: Boolean(verb.separable),
      prefix: verb.prefix || '',
      root: verb.root || '',
      reflexive: Boolean(verb.reflexive),
      fixedPreposition: verb.fixedPreposition || '',
      conjugationClass: verb.conjugationClass,
      presentForms: verb.presentForms || [],
      pastForms: verb.pastForms || [],
      perfectForms: verb.perfectForms || [],
      participle: verb.participle || '',
      imperative: verb.imperative || '',
      sentencePatterns: verb.sentencePatterns || {},
      reviewBatch: verb.reviewBatch || '',
      reviewStatus: verb.reviewStatus || '',
      register: verb.register || '',
      lexicalSource: verb.lexicalSource || '',
    },
  });
  levelEdge(id, verb.level);

  const semanticId = ensureCategory('semantic', verb.semanticLabel || verb.semantic || 'onbekend', verb.semantic || '');
  addEdge(id, semanticId, 'has_semantic_domain', 'betekenisdomein');
  const auxiliaryId = ensureCategory('auxiliary', verb.auxiliary || 'onbekend', 'Hulpwerkwoord in het perfectum');
  addEdge(id, auxiliaryId, 'uses_auxiliary', verb.auxiliary || 'onbekend');
  const regularityId = ensureCategory('regularity', verb.regularity || 'onbekend', verb.conjugationClass || '');
  addEdge(id, regularityId, 'has_regularity', verb.regularity || 'onbekend');
  if (verb.fixedPreposition) {
    const prepId = ensureCategory('preposition', verb.fixedPreposition, 'Vaste prepositie');
    addEdge(id, prepId, 'requires_preposition', verb.fixedPreposition);
  }
  for (const themeId of themeVerbs.get(normalise(verb.infinitive)) || []) addEdge(id, themeId, 'used_in_theme', 'woordenbank');

  if (!reviewed) {
    const missing = [];
    if (!clean(verb.meaning) || reviewedDefinitionPatterns.some((pattern) => pattern.test(clean(verb.meaning)))) missing.push('definition-missing-or-generic');
    if (!Array.isArray(verb.synonyms) || verb.synonyms.length === 0) missing.push('synonyms-missing');
    if (!Array.isArray(verb.examples) || verb.examples.length === 0) missing.push('examples-missing');
    if (!clean(verb.usage)) missing.push('usage-note-missing');
    missing.push('generated-patterns-unreviewed');
    addIssue(id, missing, 'Lexicale fiche is nog niet volledig en handmatig gecontroleerd.', 'warning', { reviewQueue: 'verbs' });
  } else {
    const senseId = `sense:${normalise(verb.infinitive)}:1`;
    addNode({
      id: senseId,
      type: 'sense',
      label: `${verb.infinitive} · betekenis 1`,
      subtitle: verb.meaning,
      level: verb.level,
      status: 'reviewed',
      source: 'handmatige-werkwoordreview',
      data: { meaning: verb.meaning, usage: verb.usage, synonymNote: verb.synonymNote || '', reviewBatch: verb.reviewBatch || '', register: verb.register || '' },
    });
    addEdge(id, senseId, 'has_sense', 'betekenis');

    const usageId = `usage:${normalise(verb.infinitive)}:1`;
    addNode({ id: usageId, type: 'usage', label: `Gebruik van ${verb.infinitive}`, subtitle: verb.usage, level: verb.level, status: 'reviewed', source: 'handmatige-werkwoordreview', data: { note: verb.usage } });
    addEdge(senseId, usageId, 'has_usage', 'gebruik');

    for (const [index, example] of (verb.examples || []).entries()) {
      const exampleId = `example:${normalise(verb.infinitive)}:${index + 1}`;
      addNode({ id: exampleId, type: 'example', label: `Voorbeeld ${index + 1}`, subtitle: example, level: verb.level, status: 'reviewed', source: 'handmatige-werkwoordreview', data: { sentence: example } });
      addEdge(senseId, exampleId, 'has_example', 'voorbeeld');
    }

    const synonymSeen = new Set();
    for (const synonym of verb.synonyms || []) {
      const synonymKey = normalise(synonym);
      if (!synonymKey || synonymKey === normalise(verb.infinitive)) {
        addIssue(id, 'invalid-synonym', `Ongeldig synoniem: ${synonym}`, 'error');
        continue;
      }
      if (synonymSeen.has(synonymKey)) {
        addIssue(id, 'duplicate-synonym', `Dubbel synoniem: ${synonym}`, 'warning');
        continue;
      }
      synonymSeen.add(synonymKey);
      const targetId = verbByNormalised.get(synonymKey) || `synonym:${synonymKey}`;
      if (!nodes.has(targetId)) addNode({ id: targetId, type: 'synonym_term', label: synonym, subtitle: 'Synoniem of verwante uitdrukking', source: 'handmatige-werkwoordreview' });
      addEdge(senseId, targetId, 'has_synonym', 'synoniem', { note: verb.synonymNote || '', scope: 'sense' });
    }
  }
}

// Synoniemrelaties die naar later toegevoegde werkwoorden wijzen, worden nu naar de echte werkwoordnode omgezet.
for (const edge of [...edges.values()]) {
  if (edge.type !== 'has_synonym' || !edge.target.startsWith('synonym:')) continue;
  const key = edge.target.slice('synonym:'.length);
  const verbTarget = verbByNormalised.get(key);
  if (!verbTarget) continue;
  edges.delete(edge.id);
  addEdge(edge.source, verbTarget, 'has_synonym', edge.label, edge.data);
}

// Verbind grammatica en structuren met werkwoorden die letterlijk in gecontroleerde inhoud voorkomen.
const contextualNodes = [...nodes.values()].filter((node) => ['grammar', 'question_topic', 'structure', 'idiom', 'reading', 'writing', 'listening'].includes(node.type));
for (const node of contextualNodes) {
  const haystack = ` ${normalise(text(node.label, node.subtitle, node.data)).replaceAll('-', ' ')} `;
  for (const [verbKey, verbId] of verbByNormalised) {
    if (verbKey.length < 4) continue;
    const token = ` ${verbKey.replaceAll('-', ' ')} `;
    if (haystack.includes(token)) addEdge(verbId, node.id, 'used_in_content', 'komt voor in');
  }
}

const exerciseIds = new Set();
const exerciseTopicIds = new Map();
const exerciseTypeIds = new Map();
for (const exercise of exerciseBank) {
  const id = `exercise:${exercise.id}`;
  if (exerciseIds.has(id)) addIssue(id, 'duplicate-id', `Dubbel oefenings-ID: ${exercise.id}`, 'error');
  exerciseIds.add(id);
  addNode({
    id,
    type: 'exercise',
    label: exercise.prompt || exercise.id,
    subtitle: `${exercise.level} · ${exercise.topic} · ${exercise.type}`,
    level: exercise.level,
    source: 'oefenbank',
    searchText: text(exercise.id, exercise.level, exercise.skill, exercise.topic, exercise.type, exercise.prompt, exercise.answer, exercise.options, exercise.explanation, exercise.modelAnswer, exercise.audio),
    data: {
      exerciseId: exercise.id,
      skill: exercise.skill,
      topic: exercise.topic,
      exerciseType: exercise.type,
      difficulty: exercise.difficulty,
      prompt: exercise.prompt,
      answer: exercise.answer,
      options: exercise.options || [],
      explanation: exercise.explanation || '',
      modelAnswer: exercise.modelAnswer || '',
    },
  });
  levelEdge(id, exercise.level);

  const topicKey = normalise(exercise.topic || 'onbekend');
  let topicId = exerciseTopicIds.get(topicKey);
  if (!topicId) {
    topicId = `exercise-topic:${topicKey}`;
    exerciseTopicIds.set(topicKey, topicId);
    addNode({ id: topicId, type: 'exercise_topic', label: exercise.topic || 'Onbekend thema', subtitle: 'Oefeningsthema', source: 'oefenbank' });
  }
  addEdge(id, topicId, 'practises_topic', 'oefent');

  let typeId = exerciseTypeIds.get(exercise.type);
  if (!typeId) {
    typeId = `exercise-type:${normalise(exercise.type)}`;
    exerciseTypeIds.set(exercise.type, typeId);
    addNode({ id: typeId, type: 'exercise_type', label: exercise.type, subtitle: 'Oefeningstype', source: 'oefenbank' });
  }
  addEdge(id, typeId, 'has_exercise_type', exercise.type);

  const promptText = ` ${normalise(text(exercise.prompt, exercise.answer, exercise.explanation, exercise.modelAnswer)).replaceAll('-', ' ')} `;
  for (const [verbKey, verbId] of verbByNormalised) {
    if (verbKey.length < 4) continue;
    if (promptText.includes(` ${verbKey.replaceAll('-', ' ')} `)) addEdge(exercise.id ? verbId : id, id, 'practised_by', 'geoefend in');
  }

  if (!clean(exercise.prompt)) addIssue(id, 'prompt-missing', 'Oefenopdracht ontbreekt.', 'error');
  if (!clean(exercise.explanation)) addIssue(id, 'explanation-missing', 'Feedback of uitleg ontbreekt.', 'warning');
  if (exercise.type !== 'selfcheck' && !clean(exercise.answer)) addIssue(id, 'answer-missing', 'Antwoord ontbreekt.', 'error');
  if (exercise.type === 'choice') {
    const options = exercise.options || [];
    if (options.length < 2) addIssue(id, 'options-missing', 'Meerkeuze-oefening heeft te weinig opties.', 'error');
    if (!options.map(clean).includes(clean(exercise.answer))) addIssue(id, 'answer-not-in-options', 'Het juiste antwoord staat niet tussen de opties.', 'error');
  }
  if (exercise.type === 'selfcheck' && !clean(exercise.modelAnswer)) addIssue(id, 'model-answer-missing', 'Schrijfoefening heeft geen modelantwoord.', 'warning');
}

// Begeleide leerpaden zijn een dunne navigatielaag bovenop bestaande inhoud.
for (const path of guidedPaths) {
  const pathId = guidedPathNodeId(path);
  addNode({
    id: pathId,
    type: 'learning_path',
    label: path.title,
    subtitle: `${path.level} · begeleide route`,
    level: path.level,
    source: 'begeleid-leerpad',
    searchText: text(path.title, path.subtitle, path.level, path.canDo, path.terms, path.grammar, path.verbs, path.exerciseIds),
    data: {
      pathId: path.id,
      themeId: path.themeId,
      sourcePage: path.sourcePage,
      canDo: path.canDo,
      terms: path.terms,
      grammar: path.grammar.map((item) => item.title),
      verbs: path.verbs,
      exerciseIds: path.exerciseIds,
    },
  });
  levelEdge(pathId, path.level);
  const themeId = guidedThemeNodeId(path);
  if (nodes.has(themeId)) addEdge(pathId, themeId, 'guides_through_theme', 'begeleidt door thema');
  for (const term of path.terms || []) {
    const entry = findLexiconEntry(term);
    const lexemeId = entry ? lexemeIds.get(normalise(entry.term)) : null;
    if (lexemeId) addEdge(pathId, lexemeId, 'uses_lexeme', 'gebruikt woord');
  }
  for (const grammar of path.grammar || []) {
    const focusId = `grammar-focus:${path.level}:${path.themeId}:${normalise(grammar.title)}`;
    if (nodes.has(focusId)) addEdge(pathId, focusId, 'uses_grammar_focus', 'grammaticale stap');
    const canonical = grammarIdsByLabel.get(normalise(grammar.title));
    if (canonical) addEdge(pathId, canonical, 'applies_grammar', 'grammaticale stap');
  }
  for (const rawVerb of path.verbs || []) {
    const key = normalise(rawVerb);
    let verbId = verbByNormalised.get(key);
    if (!verbId) {
      const match = [...verbByNormalised.entries()].find(([verbKey]) => key.startsWith(`${verbKey}-`));
      verbId = match?.[1];
    }
    if (verbId) addEdge(pathId, verbId, 'uses_verb', 'werkwoord in route');
  }
  for (const exerciseId of path.exerciseIds || []) {
    const target = `exercise:${exerciseId}`;
    if (nodes.has(target)) addEdge(pathId, target, 'uses_exercise', 'oefening in route');
  }
}

// Verbind expliciete inhoudsrelaties nadat alle nodes bestaan.
for (const node of nodes.values()) {
  const connections = node.data?.connections;
  if (!Array.isArray(connections)) continue;
  for (const connection of connections) {
    const key = normalise(typeof connection === 'string' ? connection : connection.title || connection.id || text(connection));
    const target = grammarIdsByLabel.get(key);
    if (target) addEdge(node.id, target, 'related_to', 'verbonden met');
    else if (key) {
      const targetId = `connection:${key}`;
      addNode({ id: targetId, type: 'concept', label: typeof connection === 'string' ? connection : connection.title || connection.id || text(connection), subtitle: 'Genoemde inhoudsrelatie', source: node.source });
      addEdge(node.id, targetId, 'related_to', 'verbonden met');
    }
  }
}

// Maak de herkomst zelf navigeerbaar: iedere inhoudsnode hoort bij een broncollectie.
const rootId = 'graph:all-content';
addNode({ id: rootId, type: 'graph_root', label: 'Alle leerinhoud', subtitle: 'Centrale ingang van de kennisgraaf', source: 'kennisgraaf' });
const sourceSnapshot = [...nodes.values()].filter((node) => node.id !== rootId && node.type !== 'source_collection');
const sourceIds = new Map();
for (const source of unique(sourceSnapshot.map((node) => node.source).filter(Boolean))) {
  const sourceId = `source:${normalise(source)}`;
  sourceIds.set(source, sourceId);
  addNode({ id: sourceId, type: 'source_collection', label: source, subtitle: 'Inhoudscollectie', source: 'kennisgraaf' });
  addEdge(rootId, sourceId, 'has_collection', 'collectie');
}
for (const node of sourceSnapshot) {
  const sourceId = sourceIds.get(node.source);
  if (sourceId && node.id !== sourceId) addEdge(node.id, sourceId, 'part_of_collection', 'broncollectie');
}

const nodeList = [...nodes.values()];
const reviewedVerbs = nodeList.filter((node) => node.type === 'verb' && node.status === 'reviewed').length;
const unreviewedVerbs = nodeList.filter((node) => node.type === 'verb' && node.status === 'unreviewed').length;

const finalNodes = [...nodes.values()];
const finalEdges = [...edges.values()];
const typeCounts = finalNodes.reduce((acc, node) => { acc[node.type] = (acc[node.type] || 0) + 1; return acc; }, {});
const relationCounts = finalEdges.reduce((acc, edge) => { acc[edge.type] = (acc[edge.type] || 0) + 1; return acc; }, {});
const severityCounts = finalNodes.filter((node) => node.type === 'issue').reduce((acc, node) => {
  const severity = node.data?.severity || node.status || 'warning';
  acc[severity] = (acc[severity] || 0) + 1;
  return acc;
}, {});

const graph = {
  metadata: {
    version: VERSION,
    generatedAt: new Date().toISOString(),
    language: 'nl',
    nodeCount: finalNodes.length,
    edgeCount: finalEdges.length,
    reviewedVerbs,
    unreviewedVerbs,
    exerciseCount: exerciseBank.length,
    issueCount: finalNodes.filter((node) => node.type === 'issue').length,
    typeCounts,
    relationCounts,
    severityCounts,
    sourceCounts,
  },
  nodes: finalNodes,
  edges: finalEdges,
};

const report = {
  metadata: graph.metadata,
  reviewQueues: {
    verbs: finalNodes.filter((node) => node.type === 'verb' && node.status === 'unreviewed').map((node) => node.id),
    errors: finalNodes.filter((node) => node.type === 'issue' && node.data?.severity === 'error').map((node) => node.id),
    warnings: finalNodes.filter((node) => node.type === 'issue' && node.data?.severity === 'warning').map((node) => node.id),
  },
  issueCodes: finalNodes.filter((node) => node.type === 'issue').flatMap((node) => node.data?.codes || []).reduce((acc, code) => {
    acc[code] = (acc[code] || 0) + 1;
    return acc;
  }, {}),
};

const graphJson = JSON.stringify(graph);
await writeFile(new URL('../data/content-knowledge-graph.json', import.meta.url), graphJson, 'utf8');
await writeFile(new URL('../data/content-knowledge-graph.js', import.meta.url), `globalThis.__NL_CONTENT_KNOWLEDGE_GRAPH__ = ${graphJson};\n`, 'utf8');
await writeFile(new URL('../data/content-knowledge-graph-report.json', import.meta.url), JSON.stringify(report, null, 2), 'utf8');
console.log(`Kennisgraaf V${VERSION}: ${graph.metadata.nodeCount} nodes, ${graph.metadata.edgeCount} relaties, ${graph.metadata.issueCount} controles.`);
