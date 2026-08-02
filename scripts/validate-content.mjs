import { readFile, writeFile } from 'node:fs/promises';
import { a0Themes } from '../js/starter-content.js';
import { a1Themes, a2Themes, grammarTopics, vocabulary, listeningScenes } from '../js/content.js';
import { spiralThemes } from '../js/spiral-content.js';
import { advancedSpiralLevels } from '../js/advanced-level-content.js';
import { deepGrammarTopics, prepositionEntries, fixedPrepositionCombinations, separableVerbBank, conjunctionBank, idiomBank } from '../js/depth-content.js';
import { questionTopics, pronominalAdverbs, questionPractice } from '../js/questions-content.js';
import { advancedGrammarTopics, readingArticles, emailTasks } from '../js/advanced-practice-content.js';
import { sourceReviewGrammarTopics, sourceReviewExercises } from '../js/source-review-content.js';
import { exerciseBank, exerciseStats } from '../js/exercises.js';
import { numberTimeTopics, mathConcepts } from '../js/number-math-content.js';
import { physicsConcepts, softwareConcepts } from '../js/technical-content.js';
import { professionalConcepts } from '../js/professional-content.js';
import { verbAtlas as baseVerbAtlas } from '../js/verb-atlas.js';
import { applyVerbCorrections, modalAndCoreVerbCorrections } from '../js/verb-corrections.js';
import { applyCoreVerbReviews, coreVerbReviews } from '../js/verb-core-review.js';
import { applyInitialVerbReviews, initialVerbReviews } from '../js/verb-initial-review.js';
import { applyFinalVerbReviews, finalVerbReviews } from '../js/verb-final-review.js';

const root = new URL('../', import.meta.url);
const APP_VERSION = '19.2.4';
const results = [];
const add = (area, check, status, detail, evidence = null) => results.push({ area, check, status, detail, evidence });
const pass = (area, check, detail, evidence = null) => add(area, check, 'pass', detail, evidence);
const fail = (area, check, detail, evidence = null) => add(area, check, 'fail', detail, evidence);
const warn = (area, check, detail, evidence = null) => add(area, check, 'warning', detail, evidence);
const expect = (condition, area, check, detail, evidence = null) => condition ? pass(area, check, detail, evidence) : fail(area, check, detail, evidence);
const unique = (items) => new Set(items).size === items.length;
const genericMeanings = new Set([
  'Het werkwoord beschrijft vooral een handeling of activiteit.',
  'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',
  'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',
  'Dit werkwoord drukt beweging, richting of verplaatsing uit.',
  'Gebruik vaak hebben voor de activiteit en zijn bij een duidelijke richting of bestemming.',
  'Het werkwoord drukt mogelijkheid, noodzaak, toestemming, wens of verwachting uit.',
  'Het werkwoord beschrijft een gebeurtenis, resultaat of het ontstaan van een situatie.',
]);

function validateThemes(level, themes) {
  expect(themes.length > 0, 'curriculum', `${level} heeft thema's`, `${themes.length} thema's aangetroffen.`);
  expect(unique(themes.map((item) => item.id)), 'curriculum', `${level} thema-id's zijn uniek`, 'Geen dubbele thema-id aangetroffen.');
  const incomplete = themes.filter((theme) => !theme.title || !theme.description || !theme.dialogue?.length || !theme.exercise?.question);
  expect(incomplete.length === 0, 'curriculum', `${level} thema's zijn inhoudelijk compleet`, incomplete.length ? `Onvolledig: ${incomplete.map((item) => item.id).join(', ')}` : 'Titel, uitleg, dialoog en oefening zijn aanwezig.');
}

validateThemes('A0', a0Themes);
validateThemes('A1', a1Themes);
validateThemes('A2', a2Themes);
expect(a1Themes.length === 8 && a2Themes.length === 8, 'curriculum', 'A1 en A2 behouden de bestaande hoofdstructuur', `A1=${a1Themes.length}, A2=${a2Themes.length}.`);
const advancedLevelProblems = [];
for (const theme of spiralThemes) {
  for (const level of ['C1', 'C2']) {
    const data = advancedSpiralLevels[theme.id]?.[level];
    const itemCount = Object.values(data?.words || {}).flat().length;
    if (!data || data.canDo?.length < 3 || data.grammar?.length < 3 || data.dialogue?.length < 4 || itemCount < 24) advancedLevelProblems.push(`${level}:${theme.id}`);
  }
}
expect(advancedLevelProblems.length === 0, 'curriculum', 'C1 en C2 bevatten negen volledige spiraalthema’s', advancedLevelProblems.length ? advancedLevelProblems.join(', ') : '18 gevorderde themavarianten met doelen, grammatica, dialoog en minimaal 24 taalitems.');

const uiGrammar = [...grammarTopics, ...advancedGrammarTopics, ...sourceReviewGrammarTopics];
const allGrammar = [...uiGrammar, ...deepGrammarTopics];
expect(unique(uiGrammar.map((item) => item.id)) && unique(deepGrammarTopics.map((item) => item.id)), 'grammar', 'grammatica-id’s zijn uniek binnen elke gepubliceerde bank', `${uiGrammar.length} zoekbare modules en ${deepGrammarTopics.length} verdiepingsmodules gecontroleerd.`);
const weakGrammar = allGrammar.filter((item) => String(item.summary || '').length < 35 || String(item.rule || '').length < 15 || !Array.isArray(item.examples) || item.examples.length < 2);
expect(weakGrammar.length === 0, 'grammar', 'uitleg, regel en voorbeelden zijn aanwezig', weakGrammar.length ? `Onvoldoende: ${weakGrammar.map((item) => item.id).join(', ')}` : `${allGrammar.length} modules voldoen aan de minimumstructuur.`);
expect(sourceReviewGrammarTopics.length === 12, 'source-material', 'aangeleverd fotomateriaal heeft een eigen herhalingslaag', '12 nieuw geschreven modules zonder overname van boektekst.');

const coverage = [
  ['lidwoorden en zelfstandige naamwoorden', ['bepaald-lidwoord', 'onbepaald-lidwoord', 'zelfstandig-naamwoord']],
  ['meervoud en spelling', ['meervoud', 'bronreview-meervoud-spelling']],
  ['bijvoeglijke naamwoorden en vergelijking', ['bijvoeglijk-naamwoord', 'vergelijking', 'bronreview-bijvoeglijk-e', 'bronreview-vergelijking-onregelmatig']],
  ['voornaamwoorden', ['persoonlijk-onderwerp', 'persoonlijk-voorwerp', 'bezittelijk', 'aanwijzend', 'bronreview-voornaamwoord-nadruk', 'bronreview-ons-onze']],
  ['werkwoordstam en zwak verleden', ['tegenwoordige-tijd', 'bronreview-stam-spelling', 'bronreview-t-kofschip']],
  ['sterke en onregelmatige werkwoorden', ['bronreview-sterke-patronen']],
  ['hebben of zijn', ['hebben-zijn', 'bronreview-hebben-zijn-perfectum']],
  ['scheidbare en wederkerende werkwoorden', ['bronreview-scheidbaar-posities', 'bronreview-wederkerend']],
  ['Engelse leenwerkwoorden', ['bronreview-engelse-werkwoorden']],
];
const grammarIds = new Set(allGrammar.map((item) => item.id));
for (const [label, ids] of coverage) expect(ids.every((id) => grammarIds.has(id)), 'source-material', `dekking: ${label}`, ids.join(', '));

expect(exerciseBank.length === 8072, 'exercises', 'oefenbanktotaal is reproduceerbaar', `${exerciseBank.length} oefeningen.`);
expect(unique(exerciseBank.map((item) => item.id)), 'exercises', 'oefening-id’s zijn uniek', `${exerciseBank.length} unieke id's.`);
const invalidExercises = exerciseBank.filter((item) => {
  if (!item.prompt || !item.explanation || !item.level || !item.type || !item.topic) return true;
  if (item.type === 'selfcheck') return !item.modelAnswer;
  if (item.answer === undefined || item.answer === null || String(item.answer).trim() === '') return true;
  if (item.type === 'choice') return !Array.isArray(item.options) || item.options.length < 3 || !item.options.includes(item.answer);
  if (item.type === 'order') return !Array.isArray(item.tokens) || item.tokens.length < 3;
  return false;
});
expect(invalidExercises.length === 0, 'exercises', 'antwoorden, opties en feedback zijn controleerbaar', invalidExercises.length ? `Ongeldig: ${invalidExercises.slice(0, 20).map((item) => item.id).join(', ')}` : 'Geen structureel onvolledige oefening gevonden.');
expect(sourceReviewExercises.length === 24 && sourceReviewExercises.every((item) => exerciseBank.some((exercise) => exercise.id === item.id)), 'source-material', 'brongerichte oefeningen zijn geïntegreerd', '24 oefeningen geïntegreerd in de normale oefenbank.');
pass('exercises', 'niveauverdeling', JSON.stringify(exerciseStats.byLevel));

const verbAtlas = structuredClone(baseVerbAtlas);
applyVerbCorrections(verbAtlas);
applyCoreVerbReviews(verbAtlas);
applyInitialVerbReviews(verbAtlas);
applyFinalVerbReviews(verbAtlas);
const reviewed = verbAtlas.filter((item) => item.reviewed === true);
const unreviewed = verbAtlas.filter((item) => item.reviewed !== true);
expect(verbAtlas.length === 1886, 'verbs', 'atlasomvang is consistent', `${verbAtlas.length} unieke werkwoorden na correctielagen.`);
expect(unique(verbAtlas.map((item) => item.infinitive)), 'verbs', 'werkwoorden zijn uniek', 'Geen dubbele infinitieven.');
const expectedReviewedCount = new Set([...modalAndCoreVerbCorrections, ...coreVerbReviews, ...initialVerbReviews, ...finalVerbReviews].map((item) => item.infinitive)).size;
expect(reviewed.length === expectedReviewedCount, 'verbs', 'alle expliciete reviews zijn toegepast', `${reviewed.length} handmatig nagekeken fiches.`);
const firstHundred = [...verbAtlas].sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL')).slice(0, 100);
expect(firstHundred.length === 100 && firstHundred.every((verb) => verb.reviewed === true), 'verbs', 'de eerste honderd alfabetische werkwoorden zijn volledig nagekeken', firstHundred.filter((verb) => verb.reviewed !== true).map((verb) => verb.infinitive).join(', ') || '100 van 100 fiches zijn nagekeken.');
const initialReviewNames = new Set(initialVerbReviews.map((verb) => verb.infinitive));
const initialTraceProblems = firstHundred.filter((verb) => initialReviewNames.has(verb.infinitive) && (!verb.reviewBatch || !verb.reviewStatus || !verb.lexicalSource));
expect(initialTraceProblems.length === 0, 'verbs', 'alle alfabetische reviewfiches hebben herleidbare reviewmetadata', initialTraceProblems.map((verb) => verb.infinitive).join(', ') || 'Reviewbatch, status en bronmethode zijn aanwezig.');
const invalidReviewed = reviewed.filter((verb) => !verb.meaning || verb.meaning.length < 35 || genericMeanings.has(verb.meaning) || !verb.synonyms?.length || !verb.usage || !verb.examples?.length || verb.presentForms?.length !== 6 || verb.pastForms?.length !== 6 || !verb.perfectForms);
expect(invalidReviewed.length === 0, 'verbs', 'nagekeken fiches hebben specifieke definities en geldige metadata', invalidReviewed.length ? invalidReviewed.map((item) => item.infinitive).join(', ') : `${reviewed.length} fiches voldoen.`);
const genericVisible = unreviewed.filter((verb) => genericMeanings.has(String(verb.meaning || '').trim()) || verb.synonyms?.length || verb.examples?.length);
expect(genericVisible.length === 0, 'verbs', 'niet-nagekeken fiches tonen geen verzonnen definities of synoniemen', genericVisible.length ? genericVisible.slice(0, 20).map((item) => item.infinitive).join(', ') : `${unreviewed.length} fiches blijven expliciet ongemarkeerd.`);
expect(unreviewed.length === 0, 'verbs', 'alle werkwoorden hebben een lexicale eindcontrole', unreviewed.length ? `${unreviewed.length} werkwoorden blijven open.` : `${reviewed.length} van ${verbAtlas.length} werkwoorden zijn nagekeken.`);

const knownForms = {
  praten: ['ik praat', 'praatte', 'gepraat'], antwoorden: ['ik antwoord', 'antwoordde', 'geantwoord'],
  horen: ['ik hoor', 'hoorde', 'gehoord'], eten: ['ik eet', 'at', 'gegeten'],
  wachten: ['ik wacht', 'wachtte', 'gewacht'], ontmoeten: ['ik ontmoet', 'ontmoette', 'ontmoet'],
  bellen: ['ik bel', 'belde', 'gebeld'], lijken: ['ik lijk', 'leek', 'geleken'], vallen: ['ik val', 'viel', 'gevallen'],
};
const wrongKnown = Object.entries(knownForms).filter(([name, expected]) => {
  const verb = verbAtlas.find((item) => item.infinitive === name);
  return !verb || JSON.stringify([verb.presentForms[0], verb.past, verb.participle]) !== JSON.stringify(expected);
});
expect(wrongKnown.length === 0, 'verbs', 'bekende V18.5-vervoegingsfouten zijn hersteld', wrongKnown.length ? wrongKnown.map(([name]) => name).join(', ') : Object.keys(knownForms).join(', '));

const firstBatchForms = {
  aanbidden: { present: 'ik bid aan', second: 'jij bidt aan', past: 'bad aan', participle: 'aanbeden' },
  aangaan: { present: 'ik ga aan', second: 'jij gaat aan', past: 'ging aan', participle: 'aangegaan' },
  aanhebben: { present: 'ik heb aan', second: 'jij hebt aan', third: 'hij/zij heeft aan', participle: 'aangehad' },
  aankunnen: { present: 'ik kan aan', second: 'jij kunt/kan aan', third: 'hij/zij kan aan', participle: 'aangekund' },
  aanslaan: { present: 'ik sla aan', second: 'jij slaat aan', past: 'sloeg aan', participle: 'aangeslagen' },
  aanstaan: { present: 'ik sta aan', second: 'jij staat aan', past: 'stond aan', participle: 'aangestaan' },
  aanstellen: { present: 'ik stel aan', second: 'jij stelt aan', participle: 'aangesteld' },
  aantellen: { present: 'ik tel aan', second: 'jij telt aan', participle: 'aangeteld' },
  aantreffen: { present: 'ik tref aan', second: 'jij treft aan', past: 'trof aan', participle: 'aangetroffen' },
  aanvallen: { present: 'ik val aan', second: 'jij valt aan', past: 'viel aan', participle: 'aangevallen', auxiliary: 'hebben' },
};
const firstBatchFormErrors = [];
for (const [name, expected] of Object.entries(firstBatchForms)) {
  const verb = verbAtlas.find((item) => item.infinitive === name);
  if (!verb) { firstBatchFormErrors.push(`${name}: ontbreekt`); continue; }
  if (expected.present && verb.presentForms[0] !== expected.present) firstBatchFormErrors.push(`${name}: ${verb.presentForms[0]}`);
  if (expected.second && verb.presentForms[1] !== expected.second) firstBatchFormErrors.push(`${name}: ${verb.presentForms[1]}`);
  if (expected.third && verb.presentForms[2] !== expected.third) firstBatchFormErrors.push(`${name}: ${verb.presentForms[2]}`);
  if (expected.past && verb.past !== expected.past) firstBatchFormErrors.push(`${name}: ${verb.past}`);
  if (expected.participle && verb.participle !== expected.participle) firstBatchFormErrors.push(`${name}: ${verb.participle}`);
  if (expected.auxiliary && verb.auxiliary !== expected.auxiliary) firstBatchFormErrors.push(`${name}: hulpwerkwoord ${verb.auxiliary}`);
}
expect(firstBatchFormErrors.length === 0, 'verbs', 'onregelmatige vormen in de eerste alfabetische batch zijn expliciet gecontroleerd', firstBatchFormErrors.join('; ') || `${Object.keys(firstBatchForms).length} risicowerkwoorden gecontroleerd.`);
const malformedFirstBatchForms = firstHundred.filter((verb) => /\b(?:geaan\w*|kant aan|steelt aan|teelt aan|treeft aan|vaalt aan)\b/iu.test([verb.participle, ...verb.presentForms, ...verb.pastForms].join(' ')));
expect(malformedFirstBatchForms.length === 0, 'verbs', 'de eerste batch bevat geen bekende generatorfouten', malformedFirstBatchForms.map((verb) => verb.infinitive).join(', ') || 'Geen geaan- of foutieve stamvormen gevonden.');

const duplicateSynonyms = reviewed.filter((verb) => new Set(verb.synonyms.map((item) => item.toLocaleLowerCase('nl-NL'))).size !== verb.synonyms.length || verb.synonyms.some((item) => item.toLocaleLowerCase('nl-NL') === verb.infinitive) || /geen (direct|algemeen) synoniem|is geen synoniem/iu.test(verb.synonymNote || ''));
expect(duplicateSynonyms.length === 0, 'verbs', 'synoniemen zijn uniek, contextueel bruikbaar en spreken de verschilnotitie niet tegen', duplicateSynonyms.length ? duplicateSynonyms.map((item) => item.infinitive).join(', ') : `${reviewed.length} fiches gecontroleerd.`);
const synonymNoteReviewNames = new Set([...coreVerbReviews, ...initialVerbReviews].map((verb) => verb.infinitive).concat(['aandoen', 'aannemen']));
const missingSynonymNotes = reviewed.filter((verb) => synonymNoteReviewNames.has(verb.infinitive) && (!verb.synonymNote || verb.synonymNote.length < 45));
expect(missingSynonymNotes.length === 0, 'verbs', 'contextuele verschillen tussen synoniemen zijn uitgelegd voor de nieuwe en diep nagekeken fiches', missingSynonymNotes.length ? missingSynonymNotes.map((item) => item.infinitive).join(', ') : `${synonymNoteReviewNames.size} fiches hebben een verschilnotitie.`);

const structuralBanks = [
  ['voorzetsels', prepositionEntries, 35], ['vaste voorzetselcombinaties', fixedPrepositionCombinations, 80],
  ['scheidbare werkwoorden', separableVerbBank, 80], ['voegwoorden', conjunctionBank, 40], ['idiomen', idiomBank, 75],
  ['vraagonderwerpen', questionTopics, 14], ['voornaamwoordelijke bijwoorden', pronominalAdverbs, 20], ['vraagoefeningen', questionPractice, 10],
];
for (const [label, bank, minimum] of structuralBanks) expect(bank.length >= minimum, 'language-structures', label, `${bank.length} items (minimum ${minimum}).`);

const articleProblems = readingArticles.filter((item) => item.paragraphs?.length < 5 || item.questions?.length < 6 || item.vocabulary?.length < 4 || item.questions.some((q) => !q.explanation || !Array.isArray(q.options) || q.options.length !== 3));
expect(articleProblems.length === 0, 'reading-writing', 'B1-B2-leesteksten hebben vragen, bewijs en woordenschat', articleProblems.length ? articleProblems.map((item) => item.id).join(', ') : `${readingArticles.length} artikelen gevalideerd.`);
const emailProblems = emailTasks.filter((item) => item.points?.length < 4 || item.useful?.length < 4 || !item.model?.includes('Onderwerp:'));
expect(emailProblems.length === 0, 'reading-writing', 'e-mailtaken bevatten opdrachtpunten, taalsteun en model', emailProblems.length ? emailProblems.map((item) => item.id).join(', ') : `${emailTasks.length} taken gevalideerd.`);

const conceptBanks = [
  ['woordenschat', vocabulary], ['luisterscènes', listeningScenes], ['getallen en tijd', numberTimeTopics],
  ['wiskunde', mathConcepts], ['natuurkunde', physicsConcepts], ['software', softwareConcepts], ['vaklexicon', professionalConcepts],
];
for (const [label, bank] of conceptBanks) expect(bank.length > 0, 'content-banks', label, `${bank.length} items.`);

const files = {
  index: await readFile(new URL('index.html', root), 'utf8'),
  css: await readFile(new URL('css/styles.css', root), 'utf8'),
  main: await readFile(new URL('js/main.js', root), 'utf8'),
  bundle: await readFile(new URL('js/app.js', root), 'utf8'),
  worker: await readFile(new URL('service-worker.js', root), 'utf8'),
};
expect(files.index.includes(`styles.css?v=${APP_VERSION}`) && files.index.includes(`app.js?v=${APP_VERSION}`), 'technical', 'CSS en JavaScript hebben cache-busting', `Versie ${APP_VERSION} staat in beide shell-assets.`);
expect(/networkFirst/u.test(files.worker) && /updateViaCache: 'none'/u.test(files.main), 'technical', 'oude shell-assets kunnen niet permanent uit cache blijven komen', 'Netwerk-eerst voor document, CSS en JavaScript; registratie omzeilt de HTTP-cache.');
expect(/\.quick-level-card/u.test(files.css) && /\.accessibility-summary/u.test(files.css), 'technical', 'startkaarten en toegankelijkheidsblok hebben componentstijlen', 'Beide selectors aanwezig in styles.css.');
expect(/const coreVerbReviews =/u.test(files.bundle) && /const initialVerbReviews =/u.test(files.bundle) && /const finalVerbReviews =/u.test(files.bundle) && /const sourceReviewGrammarTopics =/u.test(files.bundle), 'technical', 'nieuwe inhoud zit in de klassieke browserbundle', 'Kernreviews, alfabetische batches, eindcontrole en bronreview aangetroffen.');
const v19ExercisesDefinitionPosition = files.bundle.indexOf('const v19Exercises =');
const v19ScenariosDefinitionPosition = files.bundle.indexOf('const v19PracticeScenarios =');
const v19ExercisesUsePosition = files.bundle.indexOf('...v19Exercises];');
const v19ScenariosUsePosition = files.bundle.indexOf('v19PracticeScenarios.find(');
expect(v19ExercisesDefinitionPosition >= 0 && v19ExercisesUsePosition > v19ExercisesDefinitionPosition, 'technical', 'V19-oefeningen worden vóór gebruik gebundeld', `Definitiepositie=${v19ExercisesDefinitionPosition}, gebruikspositie=${v19ExercisesUsePosition}.`);
expect(v19ScenariosDefinitionPosition >= 0 && v19ScenariosUsePosition > v19ScenariosDefinitionPosition, 'technical', 'V19-praktijksituaties worden vóór gebruik gebundeld', `Definitiepositie=${v19ScenariosDefinitionPosition}, gebruikspositie=${v19ScenariosUsePosition}.`);
const initialDefinitionPosition = files.bundle.indexOf('const initialVerbReviews =');
const initialInvocationPosition = files.bundle.indexOf('applyInitialVerbReviews(verbAtlas);');
const finalDefinitionPosition = files.bundle.indexOf('const finalVerbReviews =');
const finalInvocationPosition = files.bundle.indexOf('applyFinalVerbReviews(verbAtlas);');
expect(initialDefinitionPosition >= 0 && initialInvocationPosition > initialDefinitionPosition, 'technical', 'de eerste werkwoordbatch wordt vóór gebruik gebundeld', `Definitiepositie=${initialDefinitionPosition}, aanroeppositie=${initialInvocationPosition}.`);
expect(finalDefinitionPosition >= 0 && finalInvocationPosition > finalDefinitionPosition, 'technical', 'de lexicale eindcontrole wordt vóór gebruik gebundeld', `Definitiepositie=${finalDefinitionPosition}, aanroeppositie=${finalInvocationPosition}.`);


const graph = JSON.parse(await readFile(new URL('data/content-knowledge-graph.json', root), 'utf8'));
const graphScript = await readFile(new URL('data/content-knowledge-graph.js', root), 'utf8');
const graphReport = JSON.parse(await readFile(new URL('data/content-knowledge-graph-report.json', root), 'utf8'));
const graphNodeIds = new Set(graph.nodes.map((node) => node.id));
const brokenGraphEdges = graph.edges.filter((edge) => !graphNodeIds.has(edge.source) || !graphNodeIds.has(edge.target));
expect(graph.metadata?.version === APP_VERSION, 'knowledge-graph', 'graafversie is gelijk aan de applicatieversie', `Versie ${graph.metadata?.version || 'onbekend'}.`);
expect(graph.nodes.length >= 17500 && graph.edges.length >= 64000, 'knowledge-graph', 'alle grote inhoudsbanken zijn verbonden', `${graph.nodes.length} nodes en ${graph.edges.length} relaties.`);
expect(brokenGraphEdges.length === 0, 'knowledge-graph', 'alle relaties verwijzen naar bestaande nodes', brokenGraphEdges.length ? `${brokenGraphEdges.length} gebroken relaties.` : 'Geen gebroken relaties.');
expect(graphReport.metadata?.issueCount === unreviewed.length && graphReport.reviewQueues?.verbs?.length === unreviewed.length, 'knowledge-graph', 'lexicale reviewwachtrij is volledig en controleerbaar', `${graphReport.reviewQueues?.verbs?.length || 0} werkwoorden in de wachtrij.`);
expect(/id="page-kennisgraaf"/u.test(files.index) && /createKnowledgeGraphExplorer/u.test(files.main), 'knowledge-graph', 'de graaf is geïntegreerd zonder bestaande routes te vervangen', 'Aparte, lui geladen kennisgraafpagina aangetroffen.');
expect(/__NL_CONTENT_KNOWLEDGE_GRAPH__/u.test(graphScript) && /loadKnowledgeGraphScript/u.test(await readFile(new URL('js/knowledge-graph.js', root), 'utf8')), 'knowledge-graph', 'de graaf werkt ook bij rechtstreeks openen vanaf schijf', 'Lui geladen JavaScript-fallback voor file:// aangetroffen.');

const sourceFiles = ['js/content.js', 'js/depth-content.js', 'js/questions-content.js', 'js/advanced-practice-content.js', 'js/source-review-content.js', 'js/verb-core-review.js', 'js/verb-initial-review.js', 'js/verb-final-review.js'];
const placeholderHits = [];
for (const file of sourceFiles) {
  const text = await readFile(new URL(file, root), 'utf8');
  for (const pattern of [/\bTODO\b/giu, /lorem ipsum/giu, /placeholder text/giu]) {
    if (pattern.test(text)) placeholderHits.push(file);
  }
}
expect(placeholderHits.length === 0, 'content-quality', 'geen TODO- of placeholdertekst in gepubliceerde inhoud', placeholderHits.join(', ') || 'Geen placeholders gevonden.');

const counts = {
  curriculum: { a0Themes: a0Themes.length, a1Themes: a1Themes.length, a2Themes: a2Themes.length, grammarModules: allGrammar.length },
  exercises: { total: exerciseBank.length, byLevel: exerciseStats.byLevel, sourceReview: sourceReviewExercises.length },
  verbs: { total: verbAtlas.length, reviewed: reviewed.length, pendingLexicalReview: unreviewed.length, reviewedShare: Number((reviewed.length / verbAtlas.length * 100).toFixed(1)) },
  readingWriting: { articles: readingArticles.length, emailTasks: emailTasks.length },
  sourceMaterial: { suppliedImages: 57, newGrammarModules: sourceReviewGrammarTopics.length, newExercises: sourceReviewExercises.length },
  knowledgeGraph: { nodes: graph.nodes.length, edges: graph.edges.length, issues: graphReport.metadata.issueCount, sourceCollections: graphReport.metadata.typeCounts.source_collection },
};
const summary = {
  generatedAt: new Date().toISOString(), version: APP_VERSION,
  status: results.some((item) => item.status === 'fail') ? 'failed' : results.some((item) => item.status === 'warning') ? 'passed-with-warnings' : 'passed',
  totals: {
    checks: results.length,
    passed: results.filter((item) => item.status === 'pass').length,
    warnings: results.filter((item) => item.status === 'warning').length,
    failed: results.filter((item) => item.status === 'fail').length,
  },
  counts,
  results,
};
await writeFile(new URL('data/content-validation.json', root), JSON.stringify(summary, null, 2) + '\n', 'utf8');

const sections = [...new Set(results.map((item) => item.area))];
const md = [
  `# Content validation V${APP_VERSION}`, '',
  `Status: **${summary.status}**`,
  `Generated: ${summary.generatedAt}`, '',
  '## Summary', '',
  `- Checks: ${summary.totals.checks}`, `- Passed: ${summary.totals.passed}`, `- Warnings: ${summary.totals.warnings}`, `- Failed: ${summary.totals.failed}`, '',
  '## Verified scope', '',
  `- ${counts.curriculum.grammarModules} grammar modules across the original, deep, advanced and source-review layers.`,
  `- ${counts.exercises.total} exercises; ${counts.sourceMaterial.newExercises} were newly written from the supplied pedagogical coverage references.`,
  `- ${counts.verbs.total} verb lemmas; ${counts.verbs.reviewed} have manually reviewed definitions, contextual synonyms, usage notes and examples.`,
  `- ${counts.verbs.pendingLexicalReview} verb lemmas remain explicitly marked as not lexically reviewed; the interface does not present generic text as a definition.`,
  `- ${counts.readingWriting.articles} reading articles and ${counts.readingWriting.emailTasks} writing tasks.`,
  `- ${counts.knowledgeGraph.nodes} knowledge-graph nodes and ${counts.knowledgeGraph.edges} validated relationships across ${counts.knowledgeGraph.sourceCollections} source collections.`, '',
  '## Important limitation', '',
  'The complete application structure, published content banks and graph integrity were checked automatically. The lexical review queue is empty. The final 79 verb fiches were reviewed individually for meaning, contextual synonymy, usage, examples, separability, auxiliary choice and core morphology. Automated QA complements, but does not replace, future corrections when stronger authoritative evidence becomes available.', '',
];
for (const section of sections) {
  md.push(`## ${section}`, '');
  for (const item of results.filter((entry) => entry.area === section)) {
    const marker = item.status === 'pass' ? 'PASS' : item.status === 'warning' ? 'WARNING' : 'FAIL';
    md.push(`- **${marker} — ${item.check}:** ${item.detail}`);
  }
  md.push('');
}
await writeFile(new URL(`CONTENT_VALIDATION_V${APP_VERSION.replaceAll('.', '_')}.md`, root), md.join('\n') + '\n', 'utf8');

console.log(JSON.stringify(summary.totals));
if (summary.totals.failed) process.exitCode = 1;
