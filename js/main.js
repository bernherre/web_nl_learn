import {
  completionPercentage,
  filterVocabulary,
  getGreeting,
  isCorrectSentence,
  remainingWords,
  safeProgress,
  selectDutchVoice,
} from './learning.js';
import {
  prepositionEntries,
  fixedPrepositionCombinations,
  separableVerbBank,
  conjunctionBank,
  idiomBank,
} from './depth-content.js';
import { verbAtlas } from './verb-atlas.js';
import { questionTopics, pronominalAdverbs, questionPractice } from './questions-content.js';
import { a0Themes } from './starter-content.js';
import { spiralThemes, spiralStats } from './spiral-content.js';
import { numberTimeTopics, numberQuickReference, mathCategories, mathConcepts, mathStats } from './number-math-content.js';
import { physicsCategories, physicsConcepts, softwareCategories, softwareConcepts, technicalStats } from './technical-content.js';
import {
  a1Themes,
  a2Themes,
  concepts,
  dailyPlan,
  grammarTopics,
  levels,
  listeningScenes,
  verbs,
  vocabulary,
} from './content.js';

const STORAGE_KEY = 'nederlands-gewoon-doen-progress-v2';
const SETTINGS_KEY = 'nederlands-gewoon-doen-settings-v2';
const EXERCISE_WORDS = ['Vandaag', 'werk', 'ik', 'thuis'];
const EXPECTED_SENTENCE = 'Vandaag werk ik thuis.';

const state = {
  page: 'vandaag',
  voices: [],
  dutchVoice: null,
  selectedWords: [],
  grammarLevel: 'alle',
  a0Theme: 'groeten-afscheid',
  a1Theme: 'hallo',
  a2Theme: 'verhuizen',
  b1Theme: 'kleding-uiterlijk',
  b2Theme: 'kleding-uiterlijk',
  grammarTopic: 'woordvolgorde',
  questionLevel: 'alle',
  questionTopic: 'ja-nee-vragen',
  questionMatrixQuery: '',
  questionPracticeIndex: 0,
  questionPracticeAnswered: false,
  numberTopic: 'cardinalen-basis',
  mathCategory: 'alle',
  mathQuery: '',
  mathConcept: 'optellen',
  physicsCategory: 'alle',
  physicsQuery: '',
  softwareCategory: 'alle',
  softwareQuery: '',
  concept: 'grammatica',
  vocabularyCategory: 'alle',
  vocabularyQuery: '',
  practice: 'order',
  structure: 'voorzetsels',
  practiceSelection: [],
  verbQuery: '',
  verbRegularity: 'alle',
  verbSemantic: 'alle',
  verbLevel: 'alle',
  verbSeparable: 'alle',
  verbAuxiliary: 'alle',
  verbLimit: 80,
  selectedVerb: 'zijn',
  progress: readProgress(),
  settings: readSettings(),
};

const el = (id) => document.getElementById(id);
const elements = {
  sidebar: el('sidebar'), menuButton: el('menu-button'), pageContext: el('page-context'),
  goalMinutes: el('goal-minutes'), goalBar: el('goal-bar'), toast: el('toast'),
  answerZone: el('answer-zone'), wordBank: el('word-bank'), feedback: el('exercise-feedback'),
  checkAnswer: el('check-answer'), resetExercise: el('reset-exercise'), listenAnswer: el('listen-answer'),
  voiceStatus: el('voice-status'), settingsVoiceStatus: el('settings-voice-status'),
  dailyPlan: el('daily-plan'), dailyVocabulary: el('daily-vocabulary'), levelPath: el('level-path'),
  a0ThemeGrid: el('a0-theme-grid'), a0ThemeDetail: el('a0-theme-detail'),
  a1ThemeGrid: el('a1-theme-grid'), a1ThemeDetail: el('a1-theme-detail'),
  a2ThemeGrid: el('a2-theme-grid'), a2ThemeDetail: el('a2-theme-detail'),
  b1ThemeGrid: el('b1-theme-grid'), b1ThemeDetail: el('b1-theme-detail'),
  b2ThemeGrid: el('b2-theme-grid'), b2ThemeDetail: el('b2-theme-detail'),
  conceptGrid: el('concept-grid'), conceptDetail: el('concept-detail'),
  grammarFilters: el('grammar-filters'), grammarList: el('grammar-list'), grammarDetail: el('grammar-detail'),
  questionFilters: el('question-filters'), questionList: el('question-list'), questionDetail: el('question-detail'),
  questionMatrix: el('question-matrix'), questionMatrixSearch: el('question-matrix-search'), questionMatrixCount: el('question-matrix-count'), questionPractice: el('question-practice'),
  numberQuickReference: el('number-quick-reference'), numberTopicList: el('number-topic-list'), numberTopicDetail: el('number-topic-detail'),
  mathCategoryFilters: el('math-category-filters'), mathSearch: el('math-search'), mathConceptGrid: el('math-concept-grid'), mathConceptDetail: el('math-concept-detail'), mathConceptCount: el('math-concept-count'),
  physicsCategoryFilters: el('physics-category-filters'), physicsSearch: el('physics-search'), physicsConceptGrid: el('physics-concept-grid'), physicsConceptCount: el('physics-concept-count'),
  softwareCategoryFilters: el('software-category-filters'), softwareSearch: el('software-search'), softwareConceptGrid: el('software-concept-grid'), softwareConceptCount: el('software-concept-count'),
  structureTabs: el('structure-tabs'), structureSummary: el('structure-summary'), structureContent: el('structure-content'),
  verbSearch: el('verb-search'), verbRegularity: el('verb-regularity'), verbSemantic: el('verb-semantic'),
  verbLevel: el('verb-level'), verbSeparable: el('verb-separable'), verbAuxiliary: el('verb-auxiliary'),
  verbResultsSummary: el('verb-results-summary'), verbAtlasList: el('verb-atlas-list'), verbLoadMore: el('verb-load-more'),
  verbDetail: el('verb-detail'),
  vocabularyFilters: el('vocabulary-filters'), vocabularyGrid: el('vocabulary-grid'), wordSearch: el('word-search'),
  listeningGrid: el('listening-grid'), practiceStage: el('practice-stage'),
  progressMinutes: el('progress-minutes'), progressCompleted: el('progress-completed'), progressAudio: el('progress-audio'),
  skillProgress: el('skill-progress'), clearProgress: el('clear-progress'),
  settingsDialog: el('settings-dialog'), darkModeSetting: el('dark-mode-setting'),
  highContrastSetting: el('high-contrast-setting'), reducedMotionSetting: el('reduced-motion-setting'),
  textScaleSetting: el('text-scale-setting'), colorProfileSetting: el('color-profile-setting'),
  openSettingsTop: el('open-settings-top'), themeLight: el('theme-light'), themeDark: el('theme-dark'),
  contrastToggle: el('contrast-toggle'), colorProfile: el('color-profile'), settingsVoiceStatus: el('settings-voice-status'),
  speechRate: el('speech-rate'), speechRateOutput: el('speech-rate-output'),
};

function readProgress() {
  try { return safeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); }
  catch { return safeProgress(); }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch { /* Opslag kan geblokkeerd zijn. */ }
  updateProgressUI();
}

function readSettings() {
  const defaults = { theme: 'light', speechRate: .9, highContrast: false, reducedMotion: false, textScale: 'normal', colorProfile: 'standard' };
  try {
    const stored = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return {
      ...defaults,
      theme: stored.theme === 'dark' ? 'dark' : 'light',
      speechRate: Number(stored.speechRate) || .9,
      highContrast: Boolean(stored.highContrast),
      reducedMotion: Boolean(stored.reducedMotion),
      textScale: ['small', 'normal', 'large'].includes(stored.textScale) ? stored.textScale : 'normal',
      colorProfile: stored.colorProfile === 'color-safe' ? 'color-safe' : 'standard',
    };
  } catch { return defaults; }
}

function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings)); } catch { /* Opslag kan geblokkeerd zijn. */ }
}

function showToast(message) {
  if (!elements.toast) return;
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove('show'), 2600);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}


const commonWordLearningDetails = {
  'de naam': ['Het woord waarmee een persoon, plaats of ding wordt genoemd.', 'Mijn naam is Noor.'],
  'de voornaam': ['De persoonlijke naam die vóór de achternaam staat.', 'Mijn voornaam is Bernardo.'],
  'de achternaam': ['De familienaam die je met andere familieleden kunt delen.', 'Mijn achternaam is Herrera.'],
  'het adres': ['De gegevens waarmee je precies kunt aangeven waar iemand woont.', 'Mijn adres is Marktstraat 12.'],
  'de straat': ['Een openbare weg met huizen of andere gebouwen erlangs.', 'Wij wonen in een rustige straat.'],
  'het huisnummer': ['Het nummer waarmee een huis in een straat wordt aangeduid.', 'Ons huisnummer is 24.'],
  'de postcode': ['Een combinatie van cijfers en letters die bij een gebied of adres hoort.', 'Wat is uw postcode?'],
  'de woonplaats': ['De stad of het dorp waar iemand woont.', 'Mijn woonplaats is Waalre.'],
  'het land': ['Een gebied met eigen grenzen en meestal een eigen regering.', 'Nederland is een klein land.'],
  'de nationaliteit': ['De officiële verbondenheid van een persoon met een land.', 'Wat is uw nationaliteit?'],
  'de taal': ['Een systeem van woorden en regels waarmee mensen communiceren.', 'Nederlands is de taal die ik leer.'],
  'de familie': ['Alle verwanten samen, ook buiten het huishouden, zoals ooms, tantes en grootouders.', 'Mijn familie woont in verschillende landen.'],
  'het gezin': ['Ouders of verzorgers en kinderen die samen een huishouden vormen.', 'Ons gezin bestaat uit vier personen.'],
  'de ouder': ['Een vader, moeder of verzorger van een kind.', 'Elke ouder krijgt informatie van de school.'],
  'de vader': ['Een man die een kind heeft of verzorgt.', 'Mijn vader woont in Colombia.'],
  'de moeder': ['Een vrouw die een kind heeft of verzorgt.', 'Haar moeder werkt in een ziekenhuis.'],
  'de broer': ['Een jongen of man met dezelfde ouder of ouders als jij.', 'Mijn broer is ouder dan ik.'],
  'de zus': ['Een meisje of vrouw met dezelfde ouder of ouders als jij.', 'Mijn zus spreekt drie talen.'],
  'de man': ['Een volwassen persoon van het mannelijke geslacht; ook een huwelijkspartner.', 'De man wacht bij de ingang.'],
  'de vrouw': ['Een volwassen persoon van het vrouwelijke geslacht; ook een huwelijkspartner.', 'De vrouw fietst naar haar werk.'],
  'het kind': ['Een jonge persoon; ook een zoon of dochter van iemand.', 'Het kind speelt buiten.'],
  'heten': ['Een bepaalde naam hebben.', 'Ik heet Sofia.'],
  'zijn': ['Een identiteit, eigenschap, plaats of toestand uitdrukken.', 'Wij zijn vandaag thuis.'],
  'hebben': ['Iets bezitten, ontvangen of ervaren.', 'Ik heb een afspraak.'],
  'komen': ['Zich naar een plaats bewegen of uit een plaats afkomstig zijn.', 'Ik kom uit Colombia.'],
  'wonen': ['Op een bepaalde plaats je huis hebben.', 'Wij wonen dicht bij een park.'],
  'spreken': ['Met woorden mondeling communiceren.', 'Spreekt u Nederlands?'],
  'begrijpen': ['De betekenis van iets kennen of volgen.', 'Ik begrijp de vraag.'],
  'spellen': ['De letters van een woord één voor één noemen.', 'Kunt u uw naam spellen?'],
  'vragen': ['Iets zeggen om informatie, hulp of toestemming te krijgen.', 'Ik vraag de docent om hulp.'],
  'antwoorden': ['Reageren op een vraag of bericht.', 'Zij antwoordt rustig.'],
  'begroeten': ['Iemand vriendelijk aanspreken wanneer je die persoon ontmoet.', 'Wij begroeten de nieuwe buren.'],
  'voorstellen': ['Vertellen wie jezelf of een andere persoon is.', 'Ik stel mezelf aan de groep voor.'],
  'kennismaken': ['Iemand voor het eerst ontmoeten en informatie uitwisselen.', 'Morgen maken we kennis met het team.'],
  'ontmoeten': ['Bij iemand komen en die persoon zien of spreken.', 'Ik ontmoet mijn collega bij het station.'],
  'bellen': ['Telefonisch contact met iemand opnemen.', 'Ik bel vanmiddag de huisarts.'],
  'kennen': ['Weten wie of wat iemand of iets is door eerdere ervaring.', 'Ken je onze nieuwe docent?'],
  'nederlands': ['Behorend bij Nederland of de Nederlandse taal.', 'Ik volg een Nederlandse taalles.'],
  'buitenlands': ['Afkomstig uit of verbonden met een ander land.', 'Zij heeft een buitenlands diploma.'],
  'getrouwd': ['Door een huwelijk officieel met iemand verbonden.', 'Mijn zus is getrouwd.'],
  'alleenstaand': ['Niet getrouwd en zonder vaste partner in het huishouden.', 'Hij is alleenstaand.'],
  'jong': ['Nog niet oud; met een lage leeftijd.', 'De kinderen zijn nog jong.'],
  'oud': ['Al lang bestaand of met een hoge leeftijd.', 'Hoe oud ben je?'],
  'vriendelijk': ['Aardig, beleefd en prettig tegenover andere mensen.', 'De buurvrouw is erg vriendelijk.'],
  'nieuw': ['Nog niet lang bestaand, gekocht of bekend.', 'Wij hebben een nieuwe buurman.'],
  'hetzelfde': ['Niet verschillend; precies gelijk aan iets anders.', 'Wij hebben hetzelfde adres.'],
  'anders': ['Niet hetzelfde of op een andere manier.', 'Vandaag gaat het anders.'],
  'samen': ['Met één of meer andere mensen.', 'Wij leren samen Nederlands.'],
  'alleen': ['Zonder andere mensen of zonder hulp.', 'Ik woon niet alleen.'],
  'goedemorgen': ['Een beleefde begroeting die je in de ochtend gebruikt.', 'Goedemorgen, hoe gaat het?'],
  'goedemiddag': ['Een beleefde begroeting die je in de middag gebruikt.', 'Goedemiddag, waarmee kan ik u helpen?'],
  'goedenavond': ['Een beleefde begroeting die je in de avond gebruikt.', 'Goedenavond, welkom bij ons thuis.'],
  'tot ziens': ['Een neutrale of beleefde manier om afscheid te nemen.', 'Bedankt voor uw bezoek. Tot ziens!'],
  'tot morgen': ['Een afscheid waarmee je zegt dat je iemand morgen weer ziet.', 'Tot morgen op school!'],
  'hoe heet je?': ['Een informele vraag naar de naam van een persoon.', 'Hallo, hoe heet je?'],
  'waar kom je vandaan?': ['Een vraag naar het land, de stad of plaats van herkomst.', 'Waar kom je vandaan? Ik kom uit Spanje.'],
  'aangenaam kennis te maken': ['Een beleefde reactie wanneer je iemand voor het eerst ontmoet.', 'Aangenaam kennis te maken, ik ben Lina.'],
  'hoe gaat het?': ['Een vraag naar hoe iemand zich voelt of hoe het met iemand gaat.', 'Hoi Sam, hoe gaat het?'],
  'het gaat goed': ['Een positief antwoord op de vraag hoe het gaat.', 'Dank je, het gaat goed.'],
  'dank je wel': ['Een informele uitdrukking waarmee je iemand bedankt.', 'Dank je wel voor je hulp.'],
  'alstublieft': ['Een beleefd woord bij een verzoek of wanneer je iets aan iemand geeft.', 'Een koffie, alstublieft.'],
};

function normalizeLearningWord(word) {
  return String(word || '').trim().toLocaleLowerCase('nl-NL');
}

function highlightedWordDetails(theme, word) {
  const normalized = normalizeLearningWord(word);
  const local = (theme.vocabulary || []).find(([item]) => normalizeLearningWord(item) === normalized);
  if (local) return { definition: local[1], example: local[2], source: 'thema' };
  const global = vocabulary.find((item) => normalizeLearningWord(item.word) === normalized);
  if (global) return { definition: global.definition, example: global.example, source: 'beeldwoord' };
  return null;
}

function verbLearningDetails(word) {
  const normalized = normalizeLearningWord(word);
  const compact = verbs.find((item) => normalizeLearningWord(item.infinitive) === normalized);
  if (compact) return { definition: compact.meaning, example: compact.examples?.[0] || '', source: 'werkwoord' };
  const atlas = verbAtlas.find((item) => normalizeLearningWord(item.infinitive) === normalized);
  if (!atlas) return null;
  return {
    definition: atlas.meaning || `Een ${atlas.semanticLabel || 'werkwoord'} uit deze les.`,
    example: atlas.sentencePatterns?.hoofdzin || '',
    source: 'werkwoord',
  };
}

function fallbackWordDetails(theme, group, word) {
  const lowerGroup = normalizeLearningWord(group);
  const themeName = theme.title.toLocaleLowerCase('nl-NL');
  if (word.trim().endsWith('?')) {
    return { definition: `Een vaste vraag die je gebruikt in gesprekken over ${themeName}.`, example: word, source: 'vraag' };
  }
  if (lowerGroup.includes('vaste') || lowerGroup.includes('combinatie') || word.trim().includes(' ')) {
    return { definition: `Een vaste combinatie die je als één geheel gebruikt wanneer je over ${themeName} praat.`, example: word, source: 'combinatie' };
  }
  if (lowerGroup.includes('werkwoord')) {
    return { definition: `Een werkwoord voor een handeling, toestand of gebeurtenis binnen het thema ${themeName}.`, example: '', source: 'werkwoord' };
  }
  if (lowerGroup.includes('beschrij') || lowerGroup.includes('eigenschap') || lowerGroup.includes('bijvoeg')) {
    return { definition: `Een woord waarmee je een persoon, ding of situatie binnen het thema ${themeName} beschrijft.`, example: '', source: 'beschrijving' };
  }
  return { definition: `Een zelfstandig naamwoord dat je nodig hebt om over ${themeName} te praten.`, example: '', source: 'themawoord' };
}

function wordLearningDetails(theme, group, word) {
  const normalized = normalizeLearningWord(word);
  const curated = commonWordLearningDetails[normalized];
  if (curated) return { definition: curated[0], example: curated[1], source: 'uitleg' };
  return highlightedWordDetails(theme, word)
    || verbLearningDetails(word)
    || fallbackWordDetails(theme, group, word);
}

function wordGroupId(theme, group) {
  return `${theme.id}-${group}`.toLocaleLowerCase('nl-NL').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function showPage(page, updateHash = true) {
  const target = document.querySelector(`#page-${page}`);
  if (!target) return;
  state.page = page;
  document.querySelectorAll('.page').forEach((node) => node.classList.toggle('active', node === target));
  document.querySelectorAll('.nav-item').forEach((node) => node.classList.toggle('active', node.dataset.page === page));
  const activeNav = document.querySelector(`.nav-item[data-page="${page}"] span:last-child`);
  elements.pageContext.textContent = activeNav?.textContent || (page === 'les' ? 'Visuele les' : 'Nederlands');
  elements.sidebar?.classList.remove('open');
  elements.menuButton?.setAttribute('aria-expanded', 'false');
  if (updateHash) history.replaceState(null, '', `#${page}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadVoices() {
  if (!('speechSynthesis' in window)) {
    updateVoiceStatus('Audio wordt niet ondersteund door deze browser.', false);
    return;
  }
  state.voices = window.speechSynthesis.getVoices();
  state.dutchVoice = selectDutchVoice(state.voices);
  const message = state.dutchVoice
    ? `Stem: ${state.dutchVoice.name} (${state.dutchVoice.lang})`
    : 'Geen specifieke Nederlandse stem gevonden; de browser gebruikt nl-NL als taal.';
  updateVoiceStatus(message, Boolean(state.dutchVoice));
}

function updateVoiceStatus(message, available = true) {
  if (elements.voiceStatus) elements.voiceStatus.textContent = message;
  if (elements.settingsVoiceStatus) elements.settingsVoiceStatus.textContent = message;
  elements.voiceStatus?.classList.toggle('warning', !available);
}

function speak(text, rate) {
  if (!text || !('speechSynthesis' in window)) {
    showToast('Deze browser ondersteunt geen spraaksynthese.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';
  utterance.rate = Math.min(1.2, Math.max(.5, Number(rate) || state.settings.speechRate));
  utterance.pitch = 1;
  if (state.dutchVoice) utterance.voice = state.dutchVoice;
  utterance.onerror = () => showToast('De uitspraak kon niet worden afgespeeld. Controleer je browserstemmen.');
  window.speechSynthesis.speak(utterance);
  state.progress.audioPlays += 1;
  saveProgress();
}

function vocabularyCard(item) {
  return `<article class="card word-card">
    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}">
    <div class="word-card-body">
      <span class="word-type">${escapeHtml(item.article)}-woord · ${escapeHtml(item.category)}</span>
      <h3>${escapeHtml(item.word)}</h3>
      <p>${escapeHtml(item.definition)}</p>
      <span class="word-example">“${escapeHtml(item.example)}”</span>
      <div class="button-row">
        <button class="sound-button speak" type="button" data-text="${escapeHtml(item.word)}" data-rate="0.85">🔊 Woord</button>
        <button class="sound-button secondary speak" type="button" data-text="${escapeHtml(item.example)}" data-rate="0.9">Zin ▶</button>
      </div>
    </div>
  </article>`;
}

function renderDashboard() {
  const now = new Date();
  el('vandaag-title').textContent = getGreeting(now.getHours());
  el('today-label').textContent = new Intl.DateTimeFormat('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' }).format(now);
  elements.dailyPlan.innerHTML = dailyPlan.map((item, index) => `<button class="plan-item" type="button" data-page="${item.page}"><b>${index + 1}</b><span>${item.label}</span><small>${item.duration} min</small></button>`).join('');
  elements.dailyVocabulary.innerHTML = vocabulary.slice(0, 3).map(vocabularyCard).join('');
}

function renderLevels() {
  const progressByLevel = {
    A1: completionPercentage(state.progress.a1Completed.length, a1Themes.length),
    A2: completionPercentage(state.progress.a2Completed.length, a2Themes.length),
    B1: completionPercentage(state.progress.b1Completed.length, spiralThemes.length),
    B2: completionPercentage(state.progress.b2Completed.length, spiralThemes.length),
  };
  const allLevels = [{
    id: 'A0', title: 'Eerste contact', description: 'Begroeten, bedanken, jezelf voorstellen, om herhaling vragen en de eerste praktische zinnen gebruiken.',
    progress: completionPercentage(state.progress.a0Completed.length, a0Themes.length),
    modules: ['Hallo en tot ziens', 'Dit ben ik', 'Ik begrijp het niet', 'Dagelijkse basis'], page: 'a0',
  }, ...levels.map((level) => ({ ...level, progress: progressByLevel[level.id], page: level.id.toLowerCase() }))];
  elements.levelPath.innerHTML = allLevels.map((level) => `<article class="card level-card ${level.current ? 'current' : ''} ${level.progress === 100 ? 'done' : ''}">
    <button class="level-badge" type="button" data-page="${level.page}" aria-label="Open ${level.id}">${level.id}</button>
    <div><span class="kicker">${level.title}</span><h2>${level.description}</h2><div class="module-tags">${level.modules.map((module) => `<span>${module}</span>`).join('')}</div></div>
    <div class="level-progress"><strong>${level.progress}%</strong><div class="meter"><i style="width:${level.progress}%"></i></div><button class="text-button" type="button" data-page="${level.page}">Open ${level.id} →</button></div>
  </article>`).join('');
}

function themeWordCount(theme) {
  return Object.values(theme.wordGroups || {}).reduce((total, words) => total + words.length, 0);
}

function renderThemeWordGroups(theme) {
  return Object.entries(theme.wordGroups || {}).map(([group, words], index) => {
    const groupId = wordGroupId(theme, group);
    const cards = words.map((word, wordIndex) => {
      const details = wordLearningDetails(theme, group, word);
      const searchable = `${word} ${details.definition} ${details.example} ${group}`.toLocaleLowerCase('nl-NL');
      return `<article class="theme-word-card ${wordIndex >= 8 ? 'is-extra' : ''}" data-theme-word-card data-search="${escapeHtml(searchable)}">
        <div class="theme-word-card-top"><span class="word-kind">${escapeHtml(details.source)}</span><div class="word-audio-actions">
          <button class="icon-sound-button speak" type="button" data-text="${escapeHtml(word)}" data-rate="0.82" aria-label="Luister naar ${escapeHtml(word)}">🔊</button>
          <button class="icon-sound-button slow speak" type="button" data-text="${escapeHtml(word)}" data-rate="0.58" aria-label="Luister langzaam naar ${escapeHtml(word)}">🐢</button>
        </div></div>
        <h3>${escapeHtml(word)}</h3>
        <p class="theme-word-definition">${escapeHtml(details.definition)}</p>
        ${details.example ? `<details class="theme-word-example"><summary>Voorbeeldzin</summary><p>${escapeHtml(details.example)}</p><button class="text-button speak" type="button" data-text="${escapeHtml(details.example)}" data-rate="0.86">Luister naar de zin 🔊</button></details>` : ''}
      </article>`;
    }).join('');
    const remaining = Math.max(0, words.length - 8);
    return `<details class="theme-word-group" data-word-group="${escapeHtml(groupId)}" ${index === 0 ? 'open' : ''}>
      <summary><span>${escapeHtml(group)}</span><strong>${words.length} woorden</strong></summary>
      <div class="theme-word-card-grid">${cards}</div>
      ${remaining ? `<button class="word-group-more" type="button" data-word-group-more="${escapeHtml(groupId)}" data-remaining="${remaining}" aria-expanded="false">Toon nog ${remaining} woorden</button>` : ''}
    </details>`;
  }).join('');
}

function renderCourseThemeDetail(theme, level, completed) {
  const feedbackId = `${level.toLowerCase()}-feedback`;
  return `<div class="a1-detail-hero course-detail-hero level-${level.toLowerCase()}">
      <img src="${theme.image}" alt="Illustratie bij ${escapeHtml(theme.title)}">
      <div><div class="eyebrow"><span>${level}</span> Thema ${theme.number}</div><h1>${escapeHtml(theme.title)}</h1><p class="lead">${escapeHtml(theme.description)}</p>
      <div class="course-metrics"><span><strong>${themeWordCount(theme)}</strong> woorden</span><span><strong>${theme.grammar.length}</strong> grammaticale doelen</span><span><strong>2</strong> luistersnelheden</span></div>
      <div class="button-row"><button class="sound-button speak" type="button" data-text="${escapeHtml(theme.dialogue.join(' '))}" data-rate="0.9">🔊 Luister naar de dialoog</button><button class="sound-button secondary speak" type="button" data-text="${escapeHtml(theme.dialogue.join(' '))}" data-rate="0.62">🐢 Langzaam</button></div></div>
    </div>
    <div class="a1-detail-body">
      <section class="a1-can-do"><span class="kicker">Na dit thema</span><h2>Dit kun je</h2><ul>${theme.canDo.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section><div class="section-heading compact"><div><span class="kicker">Betekenis in context</span><h2>Uitgelichte kernwoorden</h2></div><span class="plan-total">${theme.vocabulary.length} uitgebreid</span></div>
        <div class="a1-word-grid">${theme.vocabulary.map(([word, meaning, example]) => `<article><strong>${escapeHtml(word)}</strong><p>${escapeHtml(meaning)}</p><small>${escapeHtml(example)}</small><div><button class="speak" type="button" data-text="${escapeHtml(word)}" data-rate="0.82" aria-label="Luister naar ${escapeHtml(word)}">🔊</button><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.88" aria-label="Luister naar de voorbeeldzin">Zin ▶</button></div></article>`).join('')}</div>
      </section>
      <section class="full-word-bank"><div class="section-heading compact"><div><span class="kicker">Woorden leren</span><h2>${themeWordCount(theme)} woorden en vaste combinaties</h2></div><span class="plan-total">betekenis · voorbeeld · geluid</span></div><p class="word-bank-intro">Begin rustig met acht woorden per groep. Elke kaart geeft een korte betekenis; open de voorbeeldzin en luister normaal of langzaam.</p><div class="word-bank-toolbar"><label class="word-bank-search"><span>Zoek in dit thema</span><input type="search" data-theme-word-search placeholder="Bijvoorbeeld: familie, wonen, spreken…" autocomplete="off"></label><p class="word-bank-result" data-theme-word-result aria-live="polite">${themeWordCount(theme)} woorden beschikbaar</p></div>${renderThemeWordGroups(theme)}</section>
      <section><span class="kicker">Grammatica</span><h2>Vorm en betekenis</h2><div class="a1-grammar-grid">${theme.grammar.map(([title, explanation]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(explanation)}</p><button class="text-button" type="button" data-page="grammatica" data-grammar-level="${level}">Open in de grammatica-atlas →</button></article>`).join('')}</div></section>
      <section class="a1-sound-panel"><div><span class="kicker">Uitspraak</span><h2>Klanken van dit thema</h2><p>Luister, kijk naar de spelling en spreek de woorden hardop na.</p></div><div class="pronunciation-chips">${theme.pronunciation.map((sound) => `<button class="speak" type="button" data-text="${escapeHtml(sound)}" data-rate="0.68">${escapeHtml(sound)} 🔊</button>`).join('')}</div></section>
      <section class="a1-dialogue"><span class="kicker">Gesprek</span><h2>Lees en luister</h2><div>${theme.dialogue.map((line, index) => `<p><b>${index % 2 === 0 ? 'A' : 'B'}</b><span>${escapeHtml(line)}</span><button class="speak" type="button" data-text="${escapeHtml(line)}" data-rate="0.86">🔊</button></p>`).join('')}</div></section>
      <section class="a1-mini-test"><span class="kicker">Mini-toets</span><h2>${escapeHtml(theme.exercise.question)}</h2><div class="option-list">${theme.exercise.options.map((option, index) => `<button type="button" data-course-answer="${index}" data-course-level="${level}" data-course-theme="${theme.id}">${escapeHtml(option)}</button>`).join('')}</div><p class="feedback" id="${feedbackId}">Kies één antwoord.</p></section>
      <button class="${completed ? 'secondary-button' : 'primary-button'} a1-complete-button" type="button" data-complete-course="${theme.id}" data-course-level="${level}">${completed ? '✓ Thema voltooid' : 'Markeer thema als voltooid'}</button>
    </div>`;
}

function courseConfig(level) {
  const configs = {
    A0: { themes: a0Themes, stateKey: 'a0Theme', progressKey: 'a0Completed', grid: elements.a0ThemeGrid, detail: elements.a0ThemeDetail },
    A1: { themes: a1Themes, stateKey: 'a1Theme', progressKey: 'a1Completed', grid: elements.a1ThemeGrid, detail: elements.a1ThemeDetail },
    A2: { themes: a2Themes, stateKey: 'a2Theme', progressKey: 'a2Completed', grid: elements.a2ThemeGrid, detail: elements.a2ThemeDetail },
  };
  return configs[level];
}

function renderCourseThemes(level) {
  const config = courseConfig(level);
  if (!config?.grid || !config?.detail) return;
  const { themes, stateKey, progressKey, grid, detail } = config;
  const currentId = state[stateKey];
  const completed = new Set(state.progress[progressKey] || []);
  grid.innerHTML = themes.map((theme) => `<button class="card a1-theme-card course-theme-card ${theme.id === currentId ? 'active' : ''} ${completed.has(theme.id) ? 'done' : ''}" type="button" data-course-theme-select="${theme.id}" data-course-level="${level}">
    <img src="${theme.image}" alt="Illustratie bij ${escapeHtml(theme.title)}">
    <span class="a1-theme-number">${completed.has(theme.id) ? '✓' : theme.number}</span>
    <div><small>${level} · ${themeWordCount(theme)} woorden</small><h2>${escapeHtml(theme.title)}</h2><p>${escapeHtml(theme.subtitle)}</p></div>
  </button>`).join('');
  const theme = themes.find((item) => item.id === currentId) || themes[0];
  detail.innerHTML = renderCourseThemeDetail(theme, level, completed.has(theme.id));
}

function spiralWordCount(theme, level) {
  return Object.values(theme.levels[level].words || {}).reduce((total, words) => total + words.length, 0);
}

function spiralDialogueText(theme, level) {
  return theme.levels[level].dialogue.map(([speaker, line]) => `${speaker}: ${line}`).join(' ');
}

function renderSpiralWordGroups(theme, level) {
  return Object.entries(theme.levels[level].words || {}).map(([group, words], index) => `<details class="theme-word-group spiral-word-group" ${index === 0 ? 'open' : ''}>
    <summary><span>${escapeHtml(group)}</span><strong>${words.length} items</strong></summary>
    <div class="theme-word-chip-grid">${words.map((word) => `<button class="theme-word-chip speak" type="button" data-text="${escapeHtml(word)}" data-rate="0.82"><span>${escapeHtml(word)}</span><small>luister</small></button>`).join('')}</div>
  </details>`).join('');
}

function renderSpiralDetail(theme, level, completed) {
  const data = theme.levels[level];
  const dialogue = spiralDialogueText(theme, level);
  const verbs = data.words.Werkwoorden || [];
  const prompts = level === 'B1'
    ? [`Vertel twee minuten over ${theme.title.toLocaleLowerCase('nl-NL')}.`, 'Geef je mening en noem minstens twee redenen.', 'Reageer beleefd op een andere mening.']
    : [`Analyseer een spanningsveld binnen ${theme.title.toLocaleLowerCase('nl-NL')}.`, 'Formuleer een standpunt met voorbehoud en een tegenargument.', 'Vat je conclusie samen in professioneel Nederlands.'];
  return `<div class="a1-detail-hero course-detail-hero level-${level.toLowerCase()} spiral-detail-hero">
      <img src="${theme.image}" alt="Illustratie bij ${escapeHtml(theme.title)}">
      <div><div class="eyebrow"><span>${level}</span> Spiraalthema</div><h1>${escapeHtml(theme.title)}</h1><p class="lead">${escapeHtml(theme.subtitle)}</p>
      <div class="course-metrics"><span><strong>${spiralWordCount(theme, level)}</strong> leeritems</span><span><strong>${data.grammar.length}</strong> grammaticapatronen</span><span><strong>${data.dialogue.length}</strong> gespreksbeurten</span></div>
      <div class="button-row"><button class="sound-button speak" type="button" data-text="${escapeHtml(dialogue)}" data-rate="0.9">🔊 Hele gesprek</button><button class="sound-button secondary speak" type="button" data-text="${escapeHtml(dialogue)}" data-rate="0.64">🐢 Langzaam</button></div></div>
    </div>
    <div class="a1-detail-body">
      <section class="a1-can-do"><span class="kicker">Na dit thema</span><h2>Dit kun je op ${level}</h2><ul>${data.canDo.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section><div class="section-heading compact"><div><span class="kicker">Spiraalwoorden</span><h2>Bekend thema, preciezere taal</h2></div><span class="plan-total">${spiralWordCount(theme, level)} items</span></div><p class="word-bank-intro">Dezelfde situatie groeit van concreet vocabulaire naar argumentatie, register en abstracte betekenis.</p>${renderSpiralWordGroups(theme, level)}</section>
      <section><div class="section-heading compact"><div><span class="kicker">Werkwoorden precies gebruiken</span><h2>${verbs.length} kernwerkwoorden</h2></div><button class="text-button" type="button" data-page="werkwoorden" data-verb-level-link="${level}">Open de werkwoordenatlas →</button></div><div class="precision-verb-grid">${verbs.map((verb) => `<button class="speak" type="button" data-text="${escapeHtml(verb)}" data-rate="0.8"><strong>${escapeHtml(verb)}</strong><small>betekenis · vorm · uitspraak</small></button>`).join('')}</div></section>
      <section><span class="kicker">Grammatica in context</span><h2>Structuren voor dit gesprek</h2><div class="spiral-grammar-grid">${data.grammar.map((item) => `<article><strong>${escapeHtml(item)}</strong><p>Herken dit patroon in het gesprek en gebruik het daarna in je eigen antwoord.</p><button class="text-button" type="button" data-page="grammatica" data-grammar-level="${level}">Bekijk ${level}-grammatica →</button></article>`).join('')}</div></section>
      <section class="a1-dialogue spiral-dialogue"><div class="section-heading compact"><div><span class="kicker">Gesprek</span><h2>Luister, lees en reageer</h2></div><button class="sound-button speak" type="button" data-text="${escapeHtml(dialogue)}" data-rate="0.86">🔊 Alles afspelen</button></div><div>${data.dialogue.map(([speaker, line]) => `<p><b>${escapeHtml(speaker.slice(0, 1))}</b><span><strong>${escapeHtml(speaker)}</strong>${escapeHtml(line)}</span><button class="speak" type="button" data-text="${escapeHtml(line)}" data-rate="0.86">🔊</button></p>`).join('')}</div></section>
      <section class="card speaking-lab"><div><span class="kicker">Zelf spreken</span><h2>Van input naar eigen taal</h2><p>Kies één opdracht. Bereid kernwoorden voor, spreek twee minuten en luister daarna kritisch naar jezelf.</p></div><ol>${prompts.map((prompt) => `<li><button class="speak" type="button" data-text="${escapeHtml(prompt)}" data-rate="0.82">${escapeHtml(prompt)} 🔊</button></li>`).join('')}</ol></section>
      <button class="${completed ? 'secondary-button' : 'primary-button'} a1-complete-button" type="button" data-complete-spiral="${theme.id}" data-course-level="${level}">${completed ? '✓ Thema voltooid' : `Markeer ${level}-thema als voltooid`}</button>
    </div>`;
}

function renderSpiralCourse(level) {
  const isB1 = level === 'B1';
  const stateKey = isB1 ? 'b1Theme' : 'b2Theme';
  const progressKey = isB1 ? 'b1Completed' : 'b2Completed';
  const grid = isB1 ? elements.b1ThemeGrid : elements.b2ThemeGrid;
  const detail = isB1 ? elements.b1ThemeDetail : elements.b2ThemeDetail;
  if (!grid || !detail) return;
  const completed = new Set(state.progress[progressKey] || []);
  grid.innerHTML = spiralThemes.map((theme, index) => `<button class="card a1-theme-card course-theme-card spiral-theme-card ${theme.id === state[stateKey] ? 'active' : ''} ${completed.has(theme.id) ? 'done' : ''}" type="button" data-spiral-theme-select="${theme.id}" data-course-level="${level}">
    <img src="${theme.image}" alt="Illustratie bij ${escapeHtml(theme.title)}">
    <span class="a1-theme-number">${completed.has(theme.id) ? '✓' : index + 1}</span>
    <div><small>${level} · ${spiralWordCount(theme, level)} items</small><h2>${escapeHtml(theme.title)}</h2><p>${escapeHtml(theme.subtitle)}</p></div>
  </button>`).join('');
  const theme = spiralThemes.find((item) => item.id === state[stateKey]) || spiralThemes[0];
  detail.innerHTML = renderSpiralDetail(theme, level, completed.has(theme.id));
}

function renderA0Themes() { renderCourseThemes('A0'); }
function renderA1Themes() { renderCourseThemes('A1'); }
function renderA2Themes() { renderCourseThemes('A2'); }
function renderB1Themes() { renderSpiralCourse('B1'); }
function renderB2Themes() { renderSpiralCourse('B2'); }

function renderConcepts() {
  elements.conceptGrid.innerHTML = concepts.map((concept) => `<button class="card concept-card ${concept.id === state.concept ? 'active' : ''}" type="button" data-concept="${concept.id}">
    <span class="concept-card-icon">${concept.icon}</span><h2>${concept.title}</h2><p>${concept.description}</p><small>${concept.children.length} kernonderwerpen →</small>
  </button>`).join('');
  renderConceptDetail();
}

function renderConceptDetail() {
  const concept = concepts.find((item) => item.id === state.concept) || concepts[0];
  const related = concept.related.map((id) => concepts.find((item) => item.id === id)?.title).filter(Boolean);
  elements.conceptDetail.innerHTML = `<div class="concept-detail-grid">
    <div><span class="kicker">${concept.icon} ${concept.title}</span><h2>${concept.description}</h2><p>Open een kernonderwerp of volg een verbinding naar een ander taaldomein.</p><div class="connection-tags">${related.map((item) => `<span>verbonden met ${item}</span>`).join('')}</div></div>
    <div class="concept-children">${concept.children.map((child) => `<button type="button" data-concept-child="${escapeHtml(child)}"><strong>${escapeHtml(child)}</strong><br><small>uitleg · voorbeelden · audio</small></button>`).join('')}</div>
  </div>`;
}

function renderNumberTime() {
  if (!elements.numberTopicList || !elements.numberTopicDetail || !elements.numberQuickReference) return;
  elements.numberQuickReference.innerHTML = numberQuickReference.map((group) => `<article class="card number-reference-card"><h2>${escapeHtml(group.title)}</h2><div>${group.items.map((item) => `<button class="speak" type="button" data-text="${escapeHtml(item.replace(/^\S+\s/, ''))}" data-rate="0.78">${escapeHtml(item)} <span aria-hidden="true">🔊</span></button>`).join('')}</div></article>`).join('');
  elements.numberTopicList.innerHTML = numberTimeTopics.map((topic) => `<button class="topic-button ${topic.id === state.numberTopic ? 'active' : ''}" type="button" data-number-topic="${escapeHtml(topic.id)}"><small>${escapeHtml(topic.level)}</small><strong>${escapeHtml(topic.title)}</strong><span>${escapeHtml(topic.summary)}</span></button>`).join('');
  const topic = numberTimeTopics.find((item) => item.id === state.numberTopic) || numberTimeTopics[0];
  elements.numberTopicDetail.innerHTML = `<div class="eyebrow"><span>${escapeHtml(topic.level)}</span> getallen & tijd</div><h1>${escapeHtml(topic.title)}</h1><p class="lead">${escapeHtml(topic.summary)}</p>
    <div class="rule-box number-rule-box"><small>Patroon</small><strong>${escapeHtml(topic.rule)}</strong></div>
    <div class="section-heading compact"><h2>Voorbeelden</h2><button class="sound-button speak" type="button" data-text="${escapeHtml(topic.examples.join(' '))}" data-rate="0.8">🔊 Luister naar alle voorbeelden</button></div>
    <ul class="example-list">${topic.examples.map((example) => `<li><span>${escapeHtml(example)}</span><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.84" aria-label="Luister naar ${escapeHtml(example)}">🔊</button></li>`).join('')}</ul>
    <div class="grammar-section-grid">${topic.sections.map((section) => `<article class="grammar-section-card"><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></article>`).join('')}</div>`;
}

function filteredMathConcepts() {
  const query = state.mathQuery.trim().toLocaleLowerCase('nl-NL');
  return mathConcepts.filter((concept) => {
    if (state.mathCategory !== 'alle' && concept.category !== state.mathCategory) return false;
    if (!query) return true;
    return [concept.term, concept.noun, concept.notion, concept.symbol, concept.formula, ...(concept.related || [])]
      .filter(Boolean).join(' ').toLocaleLowerCase('nl-NL').includes(query);
  });
}

function renderMathDetail(id = state.mathConcept) {
  const concept = mathConcepts.find((item) => item.id === id) || mathConcepts[0];
  state.mathConcept = concept.id;
  if (!elements.mathConceptDetail) return;
  elements.mathConceptDetail.innerHTML = `<div class="math-symbol" aria-hidden="true">${escapeHtml(concept.symbol)}</div><div class="eyebrow"><span>${escapeHtml(concept.category)}</span> wiskundetaal</div><h1>${escapeHtml(concept.term)}</h1><p class="math-noun">${escapeHtml(concept.noun)}</p><p class="lead">${escapeHtml(concept.notion)}</p>
    <div class="math-formula"><small>Notatie</small><strong>${escapeHtml(concept.formula)}</strong></div>
    <div class="math-spoken"><small>Zo zeg je het</small><p>${escapeHtml(concept.example)}</p><div class="button-row"><button class="sound-button speak" type="button" data-text="${escapeHtml(concept.term)}. ${escapeHtml(concept.example)}" data-rate="0.78">🔊 Luister</button><button class="sound-button secondary speak" type="button" data-text="${escapeHtml(concept.term)}. ${escapeHtml(concept.notion)}" data-rate="0.62">🐢 Langzaam</button></div></div>
    <h3>Verwante begrippen</h3><div class="connection-tags">${concept.related.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>`;
  elements.mathConceptGrid?.querySelectorAll('[data-math-concept]').forEach((button) => button.classList.toggle('active', button.dataset.mathConcept === concept.id));
}

function renderMath() {
  if (!elements.mathConceptGrid || !elements.mathCategoryFilters) return;
  elements.mathConceptCount.textContent = String(mathStats.concepts);
  elements.mathCategoryFilters.innerHTML = mathCategories.map(([id, label]) => `<button class="${state.mathCategory === id ? 'active' : ''}" type="button" data-math-category="${escapeHtml(id)}">${escapeHtml(label)}</button>`).join('');
  const filtered = filteredMathConcepts();
  if (!filtered.some((item) => item.id === state.mathConcept)) state.mathConcept = filtered[0]?.id || mathConcepts[0].id;
  elements.mathConceptGrid.innerHTML = filtered.length ? filtered.map((concept) => `<button class="math-concept-card ${concept.id === state.mathConcept ? 'active' : ''}" type="button" data-math-concept="${escapeHtml(concept.id)}"><span class="math-card-symbol">${escapeHtml(concept.symbol)}</span><small>${escapeHtml(concept.category)}</small><strong>${escapeHtml(concept.term)}</strong><p>${escapeHtml(concept.notion)}</p></button>`).join('') : '<div class="empty-state"><strong>Geen begrip gevonden.</strong><p>Zoek bijvoorbeeld op “matrix”, “integraal”, “groep” of “kans”.</p></div>';
  renderMathDetail(state.mathConcept);
}

function technicalCategoryLabel(categories, id) {
  return categories.find(([categoryId]) => categoryId === id)?.[1] || id;
}

function filterTechnicalConcepts(concepts, category, query) {
  const needle = query.trim().toLocaleLowerCase('nl-NL');
  return concepts.filter((concept) => {
    if (category !== 'alle' && concept.category !== category) return false;
    if (!needle) return true;
    return `${concept.term} ${concept.definition} ${concept.category}`.toLocaleLowerCase('nl-NL').includes(needle);
  });
}

function technicalCard(concept, categories) {
  const label = technicalCategoryLabel(categories, concept.category);
  return `<article class="card technical-concept-card"><div class="technical-card-head"><span>${escapeHtml(label)}</span><button class="mini-audio speak" type="button" data-text="${escapeHtml(concept.term)}" data-rate="0.76" aria-label="Luister naar ${escapeHtml(concept.term)}">🔊</button></div><h2>${escapeHtml(concept.term)}</h2><p>${escapeHtml(concept.definition)}</p></article>`;
}

function renderTechnicalAtlas(kind) {
  const isPhysics = kind === 'physics';
  const concepts = isPhysics ? physicsConcepts : softwareConcepts;
  const categories = isPhysics ? physicsCategories : softwareCategories;
  const category = isPhysics ? state.physicsCategory : state.softwareCategory;
  const query = isPhysics ? state.physicsQuery : state.softwareQuery;
  const filters = isPhysics ? elements.physicsCategoryFilters : elements.softwareCategoryFilters;
  const grid = isPhysics ? elements.physicsConceptGrid : elements.softwareConceptGrid;
  const count = isPhysics ? elements.physicsConceptCount : elements.softwareConceptCount;
  if (!filters || !grid || !count) return;
  filters.innerHTML = categories.map(([id, label]) => `<button class="${category === id ? 'active' : ''}" type="button" data-technical-kind="${kind}" data-technical-category="${escapeHtml(id)}">${escapeHtml(label)}</button>`).join('');
  const filtered = filterTechnicalConcepts(concepts, category, query);
  count.textContent = `${filtered.length} van ${concepts.length}`;
  grid.innerHTML = filtered.length ? filtered.map((concept) => technicalCard(concept, categories)).join('') : `<div class="empty-state"><strong>Geen begrip gevonden.</strong><p>Probeer een andere zoekterm of kies alle domeinen.</p></div>`;
}

function renderPhysics() { renderTechnicalAtlas('physics'); }
function renderSoftware() { renderTechnicalAtlas('software'); }

function renderGrammarFilters() {
  const filters = ['alle', 'A1', 'A2', 'B1', 'B2'];
  elements.grammarFilters.innerHTML = filters.map((level) => `<button class="${state.grammarLevel === level ? 'active' : ''}" type="button" data-grammar-level="${level}">${level === 'alle' ? 'Alle niveaus' : level}</button>`).join('');
}

function renderGrammar() {
  renderGrammarFilters();
  const filtered = grammarTopics.filter((topic) => state.grammarLevel === 'alle' || topic.level === state.grammarLevel);
  if (!filtered.some((topic) => topic.id === state.grammarTopic)) state.grammarTopic = filtered[0]?.id || grammarTopics[0].id;
  elements.grammarList.innerHTML = filtered.map((topic) => `<button class="topic-button ${topic.id === state.grammarTopic ? 'active' : ''}" type="button" data-grammar-topic="${topic.id}"><small>${topic.level}</small><strong>${topic.title}</strong><span>${topic.summary}</span></button>`).join('');
  const topic = grammarTopics.find((item) => item.id === state.grammarTopic) || grammarTopics[0];
  const sections = (topic.sections || []).map((section) => `<article class="grammar-section-card"><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></article>`).join('');
  const contrasts = (topic.contrasts || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const mistakes = (topic.mistakes || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  elements.grammarDetail.innerHTML = `<div class="eyebrow"><span>${topic.level}</span> grammatica</div><h1>${escapeHtml(topic.title)}</h1><p class="lead">${escapeHtml(topic.summary)}</p>
    <div class="rule-box"><small>Visueel zinsmodel</small><strong>${escapeHtml(topic.rule)}</strong></div>
    <div class="section-heading compact"><h2>Voorbeelden</h2><button class="sound-button speak" type="button" data-text="${escapeHtml(topic.examples.join(' '))}" data-rate="0.82">🔊 Luister naar alle voorbeelden</button></div>
    <ul class="example-list">${topic.examples.map((example) => `<li><span>${escapeHtml(example)}</span><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.88" aria-label="Luister naar ${escapeHtml(example)}">🔊</button></li>`).join('')}</ul>
    ${sections ? `<div class="grammar-section-grid">${sections}</div>` : ''}
    ${contrasts ? `<section class="grammar-note contrast"><h3>Betekenisverschillen</h3><ul>${contrasts}</ul></section>` : ''}
    ${mistakes ? `<section class="grammar-note mistake"><h3>Veelgemaakte fouten</h3><ul>${mistakes}</ul></section>` : ''}
    <h3>Gerelateerde concepten</h3><div class="connection-tags">${topic.connections.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>`;
}


function renderQuestionFilters() {
  const filters = ['alle', 'A1', 'A2', 'B1', 'B2'];
  elements.questionFilters.innerHTML = filters.map((level) => `<button class="${state.questionLevel === level ? 'active' : ''}" type="button" data-question-level="${level}">${level === 'alle' ? 'Alle niveaus' : level}</button>`).join('');
}

function renderQuestionDetail(topic) {
  const sections = (topic.sections || []).map((section) => `<article class="grammar-section-card"><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></article>`).join('');
  const contrasts = (topic.contrasts || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const mistakes = (topic.mistakes || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  elements.questionDetail.innerHTML = `<div class="eyebrow"><span>${escapeHtml(topic.level)}</span> vragen</div><h1>${escapeHtml(topic.title)}</h1><p class="lead">${escapeHtml(topic.summary)}</p>
    <div class="rule-box question-rule-box"><small>Zinsmodel</small><strong>${escapeHtml(topic.rule)}</strong></div>
    <div class="section-heading compact"><h2>Voorbeelden</h2><button class="sound-button speak" type="button" data-text="${escapeHtml(topic.examples.join(' '))}" data-rate="0.82">🔊 Luister naar alle vragen</button></div>
    <ul class="example-list question-example-list">${topic.examples.map((example) => `<li><span>${escapeHtml(example)}</span><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.86" aria-label="Luister naar ${escapeHtml(example)}">🔊</button></li>`).join('')}</ul>
    <div class="grammar-section-grid">${sections}</div>
    ${contrasts ? `<section class="grammar-note contrast"><h3>Vergelijk</h3><ul>${contrasts}</ul></section>` : ''}
    ${mistakes ? `<section class="grammar-note mistake"><h3>Veelgemaakte fouten</h3><ul>${mistakes}</ul></section>` : ''}
    <h3>Gerelateerde concepten</h3><div class="connection-tags">${topic.connections.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>`;
}

function renderQuestionMatrix() {
  const query = state.questionMatrixQuery.trim().toLocaleLowerCase('nl-NL');
  const filtered = pronominalAdverbs.filter((item) => {
    if (!query) return true;
    return Object.values(item).join(' ').toLocaleLowerCase('nl-NL').includes(query);
  });
  elements.questionMatrixCount.textContent = `${filtered.length} van ${pronominalAdverbs.length} patronen`;
  elements.questionMatrix.innerHTML = filtered.length ? filtered.map((item) => `<article class="question-matrix-card">
    <div class="question-matrix-head"><strong>${escapeHtml(item.question)}</strong><span>${escapeHtml(item.level)}</span></div>
    <p>${escapeHtml(item.meaning)}</p>
    <div class="question-form-row"><small>vraag</small><button class="speak" type="button" data-text="${escapeHtml(item.questionExample)}" data-rate="0.84">${escapeHtml(item.questionExample)} 🔊</button></div>
    <div class="pronoun-chain" aria-label="Verwijsvormen"><span><small>waar</small>${escapeHtml(item.question)}</span><span><small>daar</small>${escapeHtml(item.demonstrative)}</span><span><small>er</small>${escapeHtml(item.reference)}</span><span><small>hier</small>${escapeHtml(item.near)}</span></div>
    <div class="question-answer-row"><span>${escapeHtml(item.answerExample)}</span><button class="mini-audio speak" type="button" data-text="${escapeHtml(item.answerExample)}" data-rate="0.84">🔊</button></div>
    <div class="question-split-row"><small>ook gesplitst</small><span>${escapeHtml(item.splitExample)}</span></div>
    <div class="person-contrast"><small>persoon</small><strong>${escapeHtml(item.person)}</strong></div>
  </article>`).join('') : '<div class="empty-state"><strong>Geen vorm gevonden.</strong><p>Zoek bijvoorbeeld op “waarop”, “ermee”, “persoon” of “richting”.</p></div>';
}

function renderQuestionPractice() {
  const item = questionPractice[state.questionPracticeIndex % questionPractice.length];
  elements.questionPractice.innerHTML = `<div class="question-practice-heading"><div><span class="kicker">Actieve herhaling · ${escapeHtml(item.level)}</span><h2>Kies de beste vraag</h2><p>${escapeHtml(item.prompt)}</p></div><span class="practice-counter">${state.questionPracticeIndex + 1} / ${questionPractice.length}</span></div>
    <div class="question-practice-options">${item.options.map((option, index) => `<button type="button" data-question-practice-answer="${index}" ${state.questionPracticeAnswered ? 'disabled' : ''}>${escapeHtml(option)}</button>`).join('')}</div>
    <p class="feedback" id="question-practice-feedback">Kies één antwoord en bekijk waarom het klopt.</p>
    <div class="question-practice-actions"><button class="sound-button speak" type="button" data-text="${escapeHtml(item.audio)}" data-rate="0.84">🔊 Luister naar de juiste vorm</button><button class="primary-button" type="button" data-question-practice-next>Volgende vraag →</button></div>`;
}

function renderQuestions() {
  renderQuestionFilters();
  const filtered = questionTopics.filter((topic) => state.questionLevel === 'alle' || topic.level === state.questionLevel);
  if (!filtered.some((topic) => topic.id === state.questionTopic)) state.questionTopic = filtered[0]?.id || questionTopics[0].id;
  elements.questionList.innerHTML = filtered.map((topic) => `<button class="topic-button ${topic.id === state.questionTopic ? 'active' : ''}" type="button" data-question-topic="${escapeHtml(topic.id)}"><small>${escapeHtml(topic.level)}</small><strong>${escapeHtml(topic.title)}</strong><span>${escapeHtml(topic.summary)}</span></button>`).join('');
  renderQuestionDetail(questionTopics.find((topic) => topic.id === state.questionTopic) || questionTopics[0]);
  renderQuestionMatrix();
  renderQuestionPractice();
}

function getFilteredVerbs() {
  const query = state.verbQuery.trim().toLocaleLowerCase('nl-NL');
  return verbAtlas.filter((verb) => {
    if (query) {
      const haystack = [verb.infinitive, verb.root, verb.prefix, verb.semanticLabel, verb.participle]
        .filter(Boolean).join(' ').toLocaleLowerCase('nl-NL');
      if (!haystack.includes(query)) return false;
    }
    if (state.verbRegularity !== 'alle' && verb.regularity !== state.verbRegularity) return false;
    if (state.verbSemantic !== 'alle' && verb.semantic !== state.verbSemantic) return false;
    if (state.verbLevel !== 'alle' && verb.level !== state.verbLevel) return false;
    if (state.verbSeparable === 'ja' && !verb.separable) return false;
    if (state.verbSeparable === 'nee' && verb.separable) return false;
    if (state.verbAuxiliary !== 'alle' && verb.auxiliary !== state.verbAuxiliary) return false;
    return true;
  });
}

function verbPronounAndForm(line) {
  const split = String(line).split(' ');
  if (split[0] === 'hij/zij') return ['hij/zij', split.slice(1).join(' ')];
  return [split[0], split.slice(1).join(' ')];
}

function renderConjugationTable(forms) {
  return `<table class="conjugation-table"><tbody>${forms.map((line) => {
    const [pronoun, form] = verbPronounAndForm(line);
    return `<tr><td>${escapeHtml(pronoun)}</td><td><strong>${escapeHtml(form)}</strong></td></tr>`;
  }).join('')}</tbody></table>`;
}

function renderVerbDetail(infinitive = state.selectedVerb) {
  const verb = verbAtlas.find((item) => item.infinitive === infinitive) || verbAtlas.find((item) => item.infinitive === 'zijn') || verbAtlas[0];
  state.selectedVerb = verb.infinitive;
  const regularityLabel = verb.regularity === 'regelmatig' ? 'Regelmatig' : 'Onregelmatig';
  const separableLabel = verb.separable ? `Scheidbaar · ${verb.prefix} + ${verb.root}` : 'Niet scheidbaar';
  const perfectForms = verb.perfectForms.map((form) => `<div class="verb-perfect-form"><strong>${escapeHtml(form)}</strong><button class="speak" type="button" data-text="${escapeHtml(form)}" data-rate="0.82" aria-label="Luister naar ${escapeHtml(form)}">🔊</button></div>`).join('');
  const patternLabels = { hoofdzin: 'Hoofdzin', verleden: 'Verleden tijd', perfectum: 'Perfectum', modaal: 'Met modaal werkwoord', bijzin: 'Bijzin', metTe: 'Met te' };
  const patterns = Object.entries(verb.sentencePatterns || {}).map(([key, sentence]) => `<article><small>${escapeHtml(patternLabels[key] || key)}</small><p>${escapeHtml(sentence)}</p><button class="mini-audio speak" type="button" data-text="${escapeHtml(sentence.replace(/^… /, ''))}" data-rate="0.84">🔊 Luister</button></article>`).join('');
  elements.verbDetail.innerHTML = `<div class="verb-detail-header"><div class="verb-detail-title"><span class="kicker">${escapeHtml(verb.level)} · ${escapeHtml(verb.semanticLabel)}</span><h1>${escapeHtml(verb.infinitive)}</h1><p>${escapeHtml(verb.meaning)}</p></div><button class="sound-button speak" type="button" data-text="${escapeHtml(verb.infinitive)}" data-rate="0.72">🔊 Uitspraak</button></div>
    <div class="verb-meta-chips"><span class="primary">${regularityLabel}</span><span class="semantic">${escapeHtml(verb.semanticLabel)}</span><span>${escapeHtml(separableLabel)}</span><span>hulpwerkwoord: ${escapeHtml(verb.auxiliary)}</span><span>${escapeHtml(verb.conjugationClass)}</span></div>
    <div class="verb-semantic-note"><strong>Betekenistype</strong><p>${escapeHtml(verb.meaning)}</p>${verb.semantic === 'beweging' && verb.auxiliary === 'hebben/zijn' ? '<p><strong>Let op:</strong> <em>hebben</em> legt vaak de nadruk op de activiteit; <em>zijn</em> op richting of bestemming.</p>' : ''}</div>
    <div class="verb-conjugation-grid"><section class="conjugation-panel"><h3>Tegenwoordige tijd</h3>${renderConjugationTable(verb.presentForms)}</section><section class="conjugation-panel"><h3>Onvoltooid verleden tijd</h3>${renderConjugationTable(verb.pastForms)}</section></div>
    <section class="conjugation-panel"><div class="section-heading compact"><h3>Voltooide tijd</h3><span>voltooid deelwoord: <strong>${escapeHtml(verb.participle)}</strong></span></div><div class="verb-perfect-grid">${perfectForms}</div></section>
    <section class="conjugation-panel"><div class="section-heading compact"><h3>Zinspositie en gebruik</h3><span>gebiedende wijs: <strong>${escapeHtml(verb.imperative)}</strong></span></div><div class="verb-pattern-grid">${patterns}</div></section>
    <p class="verb-source-note">De atlas is automatisch opgebouwd uit gecureerde werkwoordstammen en morfologische regels. De OpenTaal-woordenlijst is gebruikt om Nederlandse spellingvormen te valideren. Controleer bij uitzonderlijk of specialistisch gebruik altijd een gezaghebbend woordenboek.</p>`;
  document.querySelectorAll('.verb-list-item').forEach((button) => {
    const active = button.dataset.verbInfinitive === verb.infinitive;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
}

function renderVerbs({ resetLimit = false } = {}) {
  if (resetLimit) state.verbLimit = 80;
  const filtered = getFilteredVerbs();
  if (!filtered.some((verb) => verb.infinitive === state.selectedVerb)) state.selectedVerb = filtered[0]?.infinitive || 'zijn';
  const visible = filtered.slice(0, state.verbLimit);
  const regularCount = filtered.filter((verb) => verb.regularity === 'regelmatig').length;
  const irregularCount = filtered.length - regularCount;
  elements.verbResultsSummary.innerHTML = `<span><strong>${filtered.length.toLocaleString('nl-NL')}</strong> resultaten</span><span>${regularCount} regelmatig · ${irregularCount} onregelmatig</span>`;
  elements.verbAtlasList.innerHTML = visible.length ? visible.map((verb) => `<button class="verb-list-item ${verb.infinitive === state.selectedVerb ? 'active' : ''}" type="button" role="option" aria-selected="${verb.infinitive === state.selectedVerb}" data-verb-infinitive="${escapeHtml(verb.infinitive)}"><span><strong>${escapeHtml(verb.infinitive)}</strong><small>${escapeHtml(verb.semanticLabel)} · ${escapeHtml(verb.auxiliary)}</small></span><span class="verb-list-badges"><span class="${verb.regularity === 'regelmatig' ? 'regular' : 'irregular'}">${verb.regularity === 'regelmatig' ? 'R' : 'OR'}</span>${verb.separable ? '<span>S</span>' : ''}<span>${escapeHtml(verb.level)}</span></span></button>`).join('') : '<div class="empty-state"><strong>Geen werkwoorden gevonden.</strong><p>Maak de zoekopdracht korter of zet een filter terug op “Alle”.</p></div>';
  elements.verbLoadMore.hidden = visible.length >= filtered.length;
  elements.verbLoadMore.textContent = `Toon meer (${Math.min(80, filtered.length - visible.length)} van ${filtered.length - visible.length} resterend)`;
  renderVerbDetail(state.selectedVerb);
}

function structureAudio(text, label = 'Luister') {
  return `<button class="mini-audio speak" type="button" data-text="${escapeHtml(text)}" data-rate="0.84">🔊 ${label}</button>`;
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key] || 'Overig';
    (groups[value] ||= []).push(item);
    return groups;
  }, {});
}

function renderPrepositionStructures() {
  const grouped = groupBy(prepositionEntries, 'category');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Voorzetsels als betekenissysteem</span><h2>${prepositionEntries.length} basisgebruiken + ${fixedPrepositionCombinations.length} vaste combinaties</h2><p>Vergelijk plaats, richting, tijd en vaste verbindingen. Leer niet alleen <em>op</em>, maar hele patronen zoals <em>wachten op</em> en <em>trots zijn op</em>.</p></div><div class="structure-metrics"><span><strong>${Object.keys(grouped).length}</strong> functies</span><span><strong>${fixedPrepositionCombinations.length}</strong> vaste patronen</span></div>`;
  const basic = Object.entries(grouped).map(([category, items]) => `<details class="structure-group" open><summary><span>${escapeHtml(category)}</span><strong>${items.length}</strong></summary><div class="structure-card-grid">${items.map((item) => `<article class="structure-card"><div class="structure-card-head"><strong>${escapeHtml(item.form)}</strong><span>${escapeHtml(item.category)}</span></div><p>${escapeHtml(item.meaning)}</p><small>${escapeHtml(item.pattern)}</small><blockquote>${escapeHtml(item.example)}</blockquote>${structureAudio(item.example)}</article>`).join('')}</div></details>`).join('');
  const fixed = `<details class="structure-group" open><summary><span>Werkwoord, bijvoeglijk naamwoord en zelfstandig naamwoord + vast voorzetsel</span><strong>${fixedPrepositionCombinations.length}</strong></summary><div class="pattern-table">${fixedPrepositionCombinations.map((item) => `<article><div><strong>${escapeHtml(item.combination)}</strong><span>${escapeHtml(item.meaning)}</span></div><p>${escapeHtml(item.example)}</p>${structureAudio(item.example)}</article>`).join('')}</div></details>`;
  elements.structureContent.innerHTML = basic + fixed;
}

function renderSeparableStructures() {
  const featured = separableVerbBank.filter((item) => item.models);
  const grouped = groupBy(separableVerbBank, 'prefix');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Werkwoord en zinspositie</span><h2>${separableVerbBank.length} scheidbare werkwoorden</h2><p>Bekijk het werkwoord in hoofdzin, inversie, perfectum, bijzin, modale constructie en combinatie met <em>te</em>.</p></div><div class="structure-metrics"><span><strong>${featured.length}</strong> volledige modellen</span><span><strong>${Object.keys(grouped).length}</strong> voorvoegsels</span></div>`;
  const featureCards = featured.map((verb) => `<article class="featured-verb-card"><div class="structure-card-head"><strong>${escapeHtml(verb.infinitive)}</strong><span>${escapeHtml(verb.prefix)} + …</span></div><p>${escapeHtml(verb.meaning)}</p><div class="sentence-position-list">${Object.entries(verb.models).map(([kind, sentence]) => `<div><small>${escapeHtml(kind)}</small><span>${escapeHtml(sentence)}</span>${structureAudio(sentence, '')}</div>`).join('')}</div></article>`).join('');
  const bank = Object.entries(grouped).map(([prefix, items]) => `<details class="structure-group"><summary><span>${escapeHtml(prefix)}-</span><strong>${items.length} werkwoorden</strong></summary><div class="verb-bank-grid">${items.map((verb) => `<article><strong>${escapeHtml(verb.infinitive)}</strong><span>${escapeHtml(verb.meaning)}</span><p>${escapeHtml(verb.example)}</p>${structureAudio(verb.example)}</article>`).join('')}</div></details>`).join('');
  elements.structureContent.innerHTML = `<section><div class="section-heading"><div><span class="kicker">Volledige zinsmodellen</span><h2>Hetzelfde werkwoord in zes constructies</h2></div></div><div class="featured-verb-grid">${featureCards}</div></section><section><div class="section-heading"><div><span class="kicker">Werkwoordenbank</span><h2>Gegroepeerd per voorvoegsel</h2></div></div>${bank}</section>`;
}

function renderConjunctionStructures() {
  const grouped = groupBy(conjunctionBank, 'type');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Verbinding en logica</span><h2>${conjunctionBank.length} voegwoorden en zinsverbinders</h2><p>Kies eerst de relatie — reden, gevolg, tijd, voorwaarde, tegenstelling of toevoeging — en pas daarna de juiste woordvolgorde toe.</p></div><div class="structure-metrics"><span><strong>${Object.keys(grouped).length}</strong> typen</span><span><strong>2</strong> hoofdpatronen</span></div>`;
  elements.structureContent.innerHTML = Object.entries(grouped).map(([type, items]) => `<details class="structure-group" open><summary><span>${escapeHtml(type)}</span><strong>${items.length}</strong></summary><div class="conjunction-grid">${items.map((item) => `<article><div class="structure-card-head"><strong>${escapeHtml(item.form)}</strong><span>${escapeHtml(item.relation)}</span></div><p class="word-order-label">${escapeHtml(item.wordOrder)}</p><blockquote>${escapeHtml(item.example)}</blockquote>${structureAudio(item.example)}</article>`).join('')}</div></details>`).join('');
}

function renderIdiomStructures() {
  const grouped = groupBy(idiomBank, 'category');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Chunks in plaats van losse woorden</span><h2>${idiomBank.length} vaste en idiomatische combinaties</h2><p>Deze uitdrukkingen functioneren als één betekenisblok. Leer de hele combinatie, inclusief lidwoord, voorzetsel en vaste woordvolgorde.</p></div><div class="structure-metrics"><span><strong>${Object.keys(grouped).length}</strong> betekenisdomeinen</span><span><strong>${idiomBank.length}</strong> voorbeeldzinnen</span></div>`;
  elements.structureContent.innerHTML = Object.entries(grouped).map(([category, items]) => `<details class="structure-group" ${items.length > 3 ? '' : 'open'}><summary><span>${escapeHtml(category)}</span><strong>${items.length}</strong></summary><div class="idiom-grid">${items.map((item) => `<article><strong>${escapeHtml(item.expression)}</strong><p>${escapeHtml(item.meaning)}</p><blockquote>${escapeHtml(item.example)}</blockquote>${structureAudio(item.example)}</article>`).join('')}</div></details>`).join('');
}

function renderStructures(type = state.structure) {
  state.structure = type;
  elements.structureTabs?.querySelectorAll('[data-structure]').forEach((button) => {
    const active = button.dataset.structure === type;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  if (type === 'scheidbaar') renderSeparableStructures();
  else if (type === 'voegwoorden') renderConjunctionStructures();
  else if (type === 'idiomatiek') renderIdiomStructures();
  else renderPrepositionStructures();
}

function renderVocabularyFilters() {
  const categories = ['alle', ...new Set(vocabulary.map((item) => item.category))];
  elements.vocabularyFilters.innerHTML = categories.map((category) => `<button class="${category === state.vocabularyCategory ? 'active' : ''}" type="button" data-vocabulary-category="${category}">${category === 'alle' ? 'Alle thema’s' : category}</button>`).join('');
}

function renderVocabulary() {
  renderVocabularyFilters();
  const filtered = filterVocabulary(vocabulary, state.vocabularyCategory, state.vocabularyQuery);
  elements.vocabularyGrid.innerHTML = filtered.length ? filtered.map(vocabularyCard).join('') : '<div class="card panel"><h2>Geen woorden gevonden</h2><p>Probeer een ander thema of een kortere zoekterm.</p></div>';
}

function renderListening() {
  elements.listeningGrid.innerHTML = listeningScenes.map((scene) => `<article class="card listening-card">
    <img src="${scene.image}" alt="Illustratie bij ${scene.title}">
    <div class="listening-body"><div class="eyebrow"><span>${scene.level}</span> luisterscène</div><h2>${scene.title}</h2><p>${scene.intro}</p>
      <div class="listening-controls"><button class="sound-button speak" type="button" data-text="${escapeHtml(scene.text)}" data-rate="0.92">🔊 Normaal</button><button class="sound-button secondary speak" type="button" data-text="${escapeHtml(scene.text)}" data-rate="0.62">🐢 Langzaam</button></div>
      <details><summary>Bekijk het transcript</summary><p>${scene.text}</p></details>
      <div class="comprehension"><strong>${scene.question}</strong><div class="option-list">${scene.options.map((option, index) => `<button type="button" data-listening-scene="${scene.id}" data-option="${index}">${option}</button>`).join('')}</div></div>
    </div></article>`).join('');
}

function renderMainExercise() {
  elements.wordBank.replaceChildren();
  elements.answerZone.replaceChildren();
  if (state.selectedWords.length === 0) {
    const placeholder = document.createElement('span');
    placeholder.className = 'placeholder';
    placeholder.textContent = 'Tik hieronder op het eerste woord';
    elements.answerZone.append(placeholder);
  }
  state.selectedWords.forEach((word, index) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = word;
    button.addEventListener('click', () => { state.selectedWords.splice(index, 1); resetMainExercise(); renderMainExercise(); });
    elements.answerZone.append(button);
  });
  remainingWords(EXERCISE_WORDS, state.selectedWords).forEach((word) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = word;
    button.addEventListener('click', () => { state.selectedWords.push(word); resetMainExercise(); renderMainExercise(); });
    elements.wordBank.append(button);
  });
  elements.checkAnswer.disabled = state.selectedWords.length !== EXERCISE_WORDS.length;
}

function resetMainExercise() {
  elements.answerZone.classList.remove('correct', 'wrong');
  elements.feedback.textContent = 'Tik de woorden in de juiste volgorde aan.';
  elements.checkAnswer.textContent = 'Controleren';
}

function checkMainExercise() {
  const correct = isCorrectSentence(state.selectedWords, EXPECTED_SENTENCE);
  elements.answerZone.classList.remove('correct', 'wrong');
  elements.answerZone.classList.add(correct ? 'correct' : 'wrong');
  if (correct) {
    elements.feedback.textContent = 'Goed gedaan! De persoonsvorm staat op de tweede plaats.';
    elements.checkAnswer.textContent = '✓ Correct';
    if (!state.progress.wordOrderCompleted) {
      state.progress.wordOrderCompleted = true;
      state.progress.completed += 1;
      state.progress.minutes = Math.max(8, state.progress.minutes);
      saveProgress();
    }
    speak('Goed gedaan. Vandaag werk ik thuis.', .86);
  } else {
    elements.feedback.textContent = 'Bijna. Begin met “Vandaag” en zet daarna de persoonsvorm.';
    elements.checkAnswer.textContent = 'Nog eens';
  }
}

function renderPractice(type = state.practice) {
  state.practice = type;
  state.practiceSelection = [];
  document.querySelectorAll('[data-practice]').forEach((button) => {
    const active = button.dataset.practice === type;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  if (type === 'article') {
    elements.practiceStage.innerHTML = `<div class="practice-question"><img class="visual-prompt" src="images/woord-huis.svg" alt="Een huis"><span class="kicker">Kies het lidwoord</span><h1>___ huis</h1><p>Welk lidwoord hoort bij dit woord?</p><div class="practice-choices"><button type="button" data-practice-answer="de">de</button><button type="button" data-practice-answer="het">het</button></div><p class="feedback" id="practice-feedback">Kijk naar het beeld en kies.</p></div>`;
  } else if (type === 'verb') {
    elements.practiceStage.innerHTML = `<div class="practice-question"><span class="kicker">Vervoeg het werkwoord</span><h1>Vandaag ___ ik thuis.</h1><p>Gebruik het werkwoord <strong>werken</strong>.</p><div class="practice-choices"><button type="button" data-practice-answer="werk">werk</button><button type="button" data-practice-answer="werkt">werkt</button><button type="button" data-practice-answer="werken">werken</button></div><p class="feedback" id="practice-feedback">Kies de juiste persoonsvorm.</p><button class="sound-button speak" type="button" data-text="Vandaag werk ik thuis." data-rate="0.82">🔊 Hoor de volledige zin</button></div>`;
  } else {
    elements.practiceStage.innerHTML = `<div class="practice-question"><span class="kicker">Woordvolgorde</span><h1>Begin met “Morgen”</h1><p>Zet de woorden in de juiste volgorde.</p><div class="practice-order-zone" id="practice-order-zone"><span class="placeholder">Jouw zin verschijnt hier</span></div><div class="practice-choices" id="practice-order-bank">${['Morgen', 'gaat', 'Sara', 'met de trein'].map((word) => `<button type="button" data-order-word="${word}">${word}</button>`).join('')}</div><p class="feedback" id="practice-feedback">De persoonsvorm staat op plek twee.</p><button class="primary-button" type="button" id="check-practice-order" disabled>Controleren</button></div>`;
  }
}

function updatePracticeOrder() {
  const zone = el('practice-order-zone');
  const bank = el('practice-order-bank');
  if (!zone || !bank) return;
  zone.innerHTML = state.practiceSelection.length ? state.practiceSelection.map((word, index) => `<button type="button" data-remove-order="${index}">${word}</button>`).join('') : '<span class="placeholder">Jouw zin verschijnt hier</span>';
  const all = ['Morgen', 'gaat', 'Sara', 'met de trein'];
  bank.innerHTML = remainingWords(all, state.practiceSelection).map((word) => `<button type="button" data-order-word="${word}">${word}</button>`).join('');
  el('check-practice-order').disabled = state.practiceSelection.length !== all.length;
}

function completePractice(message) {
  state.progress.practiceCompleted += 1;
  state.progress.completed += 1;
  state.progress.minutes += 3;
  saveProgress();
  showToast(message);
}

function updateProgressUI() {
  const progress = safeProgress(state.progress);
  const minutes = Math.min(progress.minutes, 20);
  elements.goalMinutes.textContent = String(minutes);
  elements.goalBar.style.width = `${completionPercentage(minutes, 20)}%`;
  elements.progressMinutes.textContent = String(progress.minutes);
  elements.progressCompleted.textContent = String(progress.completed);
  elements.progressAudio.textContent = String(progress.audioPlays);
  const skills = [
    ['Luisteren', Math.min(82, 48 + progress.audioPlays * 2), 'A2+'],
    ['Spreken', 52, 'A2'],
    ['Grammatica', Math.min(78, 55 + progress.completed * 4), 'A2+'],
    ['Woordenschat', 64, 'A2+'],
  ];
  elements.skillProgress.innerHTML = skills.map(([name, value, level]) => `<div class="skill-row"><div><span>${name}</span><b>${level}</b></div><div class="meter"><i style="width:${value}%"></i></div></div>`).join('');
}

function syncSettingsControls() {
  const root = document.documentElement;
  root.dataset.theme = state.settings.theme;
  root.dataset.contrast = state.settings.highContrast ? 'high' : 'normal';
  root.dataset.motion = state.settings.reducedMotion ? 'reduced' : 'full';
  root.dataset.textScale = state.settings.textScale;
  root.dataset.colorProfile = state.settings.colorProfile;

  if (elements.darkModeSetting) elements.darkModeSetting.checked = state.settings.theme === 'dark';
  if (elements.highContrastSetting) elements.highContrastSetting.checked = state.settings.highContrast;
  if (elements.reducedMotionSetting) elements.reducedMotionSetting.checked = state.settings.reducedMotion;
  if (elements.textScaleSetting) elements.textScaleSetting.value = state.settings.textScale;
  if (elements.colorProfileSetting) elements.colorProfileSetting.value = state.settings.colorProfile;
  if (elements.colorProfile) elements.colorProfile.value = state.settings.colorProfile;
  if (elements.contrastToggle) elements.contrastToggle.setAttribute('aria-pressed', String(state.settings.highContrast));

  [elements.themeLight, elements.themeDark].forEach((button) => {
    if (!button) return;
    const active = button.dataset.themeChoice === state.settings.theme;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-text-scale]').forEach((button) => {
    const active = button.dataset.textScale === state.settings.textScale;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = state.settings.theme === 'dark' ? '#0f1d1a' : '#123f38';
}

function applySettings({ persist = true } = {}) {
  syncSettingsControls();
  if (persist) saveSettings();
}

function applyTheme(theme) {
  state.settings.theme = theme === 'dark' ? 'dark' : 'light';
  applySettings();
}

function initializeSettings() {
  applySettings({ persist: false });
  elements.speechRate.value = String(state.settings.speechRate);
  elements.speechRateOutput.textContent = `${state.settings.speechRate.toFixed(2).replace(/0$/, '')}×`;
  const openDialog = () => elements.settingsDialog?.showModal();
  el('open-settings')?.addEventListener('click', openDialog);
  elements.openSettingsTop?.addEventListener('click', openDialog);
  elements.themeLight?.addEventListener('click', () => applyTheme('light'));
  elements.themeDark?.addEventListener('click', () => applyTheme('dark'));
  elements.darkModeSetting?.addEventListener('change', (event) => applyTheme(event.target.checked ? 'dark' : 'light'));
  elements.contrastToggle?.addEventListener('click', () => { state.settings.highContrast = !state.settings.highContrast; applySettings(); });
  elements.highContrastSetting?.addEventListener('change', (event) => { state.settings.highContrast = event.target.checked; applySettings(); });
  elements.reducedMotionSetting?.addEventListener('change', (event) => { state.settings.reducedMotion = event.target.checked; applySettings(); });
  document.querySelectorAll('[data-text-scale]').forEach((button) => button.addEventListener('click', () => { state.settings.textScale = button.dataset.textScale; applySettings(); }));
  elements.textScaleSetting?.addEventListener('change', (event) => { state.settings.textScale = event.target.value; applySettings(); });
  elements.colorProfile?.addEventListener('change', (event) => { state.settings.colorProfile = event.target.value; applySettings(); });
  elements.colorProfileSetting?.addEventListener('change', (event) => { state.settings.colorProfile = event.target.value; applySettings(); });
  elements.speechRate.addEventListener('input', (event) => {
    state.settings.speechRate = Number(event.target.value);
    elements.speechRateOutput.textContent = `${state.settings.speechRate.toFixed(2).replace(/0$/, '')}×`;
    saveSettings();
  });
}

function handleClick(event) {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) {
    if (pageButton.dataset.a0Theme) { state.a0Theme = pageButton.dataset.a0Theme; renderA0Themes(); }
    if (pageButton.dataset.a1Theme) { state.a1Theme = pageButton.dataset.a1Theme; renderA1Themes(); }
    if (pageButton.dataset.a2Theme) { state.a2Theme = pageButton.dataset.a2Theme; renderA2Themes(); }
    if (pageButton.dataset.b1Theme) { state.b1Theme = pageButton.dataset.b1Theme; renderB1Themes(); }
    if (pageButton.dataset.b2Theme) { state.b2Theme = pageButton.dataset.b2Theme; renderB2Themes(); }
    if (pageButton.dataset.grammarLevel) { state.grammarLevel = pageButton.dataset.grammarLevel; renderGrammar(); }
    if (pageButton.dataset.topic) {
      state.grammarTopic = pageButton.dataset.topic;
      renderGrammar();
    }
    showPage(pageButton.dataset.page);
    return;
  }
  const courseThemeButton = event.target.closest('[data-course-theme-select]');
  if (courseThemeButton) {
    const level = courseThemeButton.dataset.courseLevel;
    const config = courseConfig(level);
    if (config) { state[config.stateKey] = courseThemeButton.dataset.courseThemeSelect; renderCourseThemes(level); }
    return;
  }
  const spiralThemeButton = event.target.closest('[data-spiral-theme-select]');
  if (spiralThemeButton) {
    const level = spiralThemeButton.dataset.courseLevel;
    state[level === 'B1' ? 'b1Theme' : 'b2Theme'] = spiralThemeButton.dataset.spiralThemeSelect;
    renderSpiralCourse(level);
    return;
  }
  const legacyA1ThemeButton = event.target.closest('[data-a1-theme]');
  if (legacyA1ThemeButton) { state.a1Theme = legacyA1ThemeButton.dataset.a1Theme; renderA1Themes(); return; }
  const courseAnswer = event.target.closest('[data-course-answer]');
  if (courseAnswer) {
    const level = courseAnswer.dataset.courseLevel;
    const themes = courseConfig(level)?.themes || [];
    const theme = themes.find((item) => item.id === courseAnswer.dataset.courseTheme);
    const correct = Number(courseAnswer.dataset.courseAnswer) === theme.exercise.answer;
    courseAnswer.parentElement.querySelectorAll('button').forEach((button, index) => {
      button.disabled = true;
      button.classList.toggle('correct', index === theme.exercise.answer);
    });
    courseAnswer.classList.toggle('wrong', !correct);
    const feedback = el(`${level.toLowerCase()}-feedback`);
    feedback.textContent = correct ? `Goed! ${theme.exercise.explanation}` : `Nog niet. ${theme.exercise.explanation}`;
    if (correct) completePractice(`${level}-mini-toets correct.`);
    return;
  }
  const completeCourse = event.target.closest('[data-complete-course]');
  if (completeCourse) {
    const level = completeCourse.dataset.courseLevel;
    const id = completeCourse.dataset.completeCourse;
    const config = courseConfig(level);
    if (!config) return;
    const values = new Set(state.progress[config.progressKey] || []);
    values.has(id) ? values.delete(id) : values.add(id);
    state.progress[config.progressKey] = [...values];
    saveProgress();
    renderCourseThemes(level);
    renderLevels();
    showToast(values.has(id) ? `${level}-thema gemarkeerd als voltooid.` : `${level}-thema opnieuw geopend.`);
    return;
  }
  const completeSpiral = event.target.closest('[data-complete-spiral]');
  if (completeSpiral) {
    const level = completeSpiral.dataset.courseLevel;
    const id = completeSpiral.dataset.completeSpiral;
    const key = level === 'B1' ? 'b1Completed' : 'b2Completed';
    const values = new Set(state.progress[key] || []);
    values.has(id) ? values.delete(id) : values.add(id);
    state.progress[key] = [...values];
    saveProgress();
    renderSpiralCourse(level);
    renderLevels();
    showToast(values.has(id) ? `${level}-thema gemarkeerd als voltooid.` : `${level}-thema opnieuw geopend.`);
    return;
  }
  const questionLevel = event.target.closest('[data-question-level]');
  if (questionLevel) { state.questionLevel = questionLevel.dataset.questionLevel; renderQuestions(); return; }
  const questionTopic = event.target.closest('[data-question-topic]');
  if (questionTopic) { state.questionTopic = questionTopic.dataset.questionTopic; renderQuestions(); return; }
  const questionAnswer = event.target.closest('[data-question-practice-answer]');
  if (questionAnswer) {
    const item = questionPractice[state.questionPracticeIndex % questionPractice.length];
    const selected = Number(questionAnswer.dataset.questionPracticeAnswer);
    state.questionPracticeAnswered = true;
    questionAnswer.parentElement.querySelectorAll('button').forEach((button, index) => {
      button.disabled = true;
      button.classList.toggle('correct', index === item.answer);
      button.classList.toggle('wrong', index === selected && index !== item.answer);
    });
    const feedback = el('question-practice-feedback');
    feedback.textContent = selected === item.answer ? `Goed. ${item.explanation}` : `Nog niet. ${item.explanation}`;
    if (selected === item.answer) completePractice('Vraagconstructie correct.');
    return;
  }
  if (event.target.closest('[data-question-practice-next]')) {
    state.questionPracticeIndex = (state.questionPracticeIndex + 1) % questionPractice.length;
    state.questionPracticeAnswered = false;
    renderQuestionPractice();
    return;
  }
  const numberTopic = event.target.closest('[data-number-topic]');
  if (numberTopic) { state.numberTopic = numberTopic.dataset.numberTopic; renderNumberTime(); return; }
  const mathCategory = event.target.closest('[data-math-category]');
  if (mathCategory) { state.mathCategory = mathCategory.dataset.mathCategory; renderMath(); return; }
  const technicalCategory = event.target.closest('[data-technical-category]');
  if (technicalCategory) {
    const kind = technicalCategory.dataset.technicalKind;
    if (kind === 'physics') { state.physicsCategory = technicalCategory.dataset.technicalCategory; renderPhysics(); }
    if (kind === 'software') { state.softwareCategory = technicalCategory.dataset.technicalCategory; renderSoftware(); }
    return;
  }
  const mathConcept = event.target.closest('[data-math-concept]');
  if (mathConcept) { renderMathDetail(mathConcept.dataset.mathConcept); return; }
  const structureButton = event.target.closest('[data-structure]');
  if (structureButton) { renderStructures(structureButton.dataset.structure); return; }
  const verbLevelLink = event.target.closest('[data-verb-level-link]');
  if (verbLevelLink) { state.verbLevel = verbLevelLink.dataset.verbLevelLink; elements.verbLevel.value = state.verbLevel; renderVerbs({ resetLimit: true }); showPage('werkwoorden'); return; }
  const verbButton = event.target.closest('[data-verb-infinitive]');
  if (verbButton) { renderVerbDetail(verbButton.dataset.verbInfinitive); return; }
  const wordGroupMore = event.target.closest('[data-word-group-more]');
  if (wordGroupMore) {
    const group = document.querySelector(`[data-word-group="${CSS.escape(wordGroupMore.dataset.wordGroupMore)}"]`);
    if (!group) return;
    const expanded = group.classList.toggle('show-all');
    wordGroupMore.setAttribute('aria-expanded', String(expanded));
    wordGroupMore.textContent = expanded ? 'Toon minder' : `Toon nog ${wordGroupMore.dataset.remaining} woorden`;
    return;
  }
  const speechButton = event.target.closest('.speak');
  if (speechButton) { speak(speechButton.dataset.text, speechButton.dataset.rate); return; }
  const conceptButton = event.target.closest('[data-concept]');
  if (conceptButton) { state.concept = conceptButton.dataset.concept; renderConcepts(); return; }
  const conceptChild = event.target.closest('[data-concept-child]');
  if (conceptChild) { showToast(`${conceptChild.dataset.conceptChild}: deze verdiepende les staat klaar voor de volgende inhoudsronde.`); return; }
  const grammarLevel = event.target.closest('[data-grammar-level]');
  if (grammarLevel) { state.grammarLevel = grammarLevel.dataset.grammarLevel; renderGrammar(); return; }
  const grammarTopic = event.target.closest('[data-grammar-topic]');
  if (grammarTopic) { state.grammarTopic = grammarTopic.dataset.grammarTopic; renderGrammar(); return; }
  const vocabularyCategory = event.target.closest('[data-vocabulary-category]');
  if (vocabularyCategory) { state.vocabularyCategory = vocabularyCategory.dataset.vocabularyCategory; renderVocabulary(); return; }
  const listeningOption = event.target.closest('[data-listening-scene]');
  if (listeningOption) {
    const scene = listeningScenes.find((item) => item.id === listeningOption.dataset.listeningScene);
    const correct = Number(listeningOption.dataset.option) === scene.answer;
    listeningOption.parentElement.querySelectorAll('button').forEach((button, index) => button.classList.toggle('correct', index === scene.answer));
    listeningOption.classList.toggle('wrong', !correct);
    if (correct) completePractice('Goed geluisterd!');
    return;
  }
  const practiceTab = event.target.closest('[data-practice]');
  if (practiceTab) { renderPractice(practiceTab.dataset.practice); return; }
  const practiceAnswer = event.target.closest('[data-practice-answer]');
  if (practiceAnswer) {
    const expected = state.practice === 'article' ? 'het' : 'werk';
    const correct = practiceAnswer.dataset.practiceAnswer === expected;
    practiceAnswer.parentElement.querySelectorAll('button').forEach((button) => button.disabled = true);
    practiceAnswer.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) practiceAnswer.parentElement.querySelector(`[data-practice-answer="${expected}"]`)?.classList.add('correct');
    el('practice-feedback').textContent = correct ? 'Goed! Dat is correct.' : `Niet helemaal. Het juiste antwoord is “${expected}”.`;
    if (correct) completePractice('Oefening afgerond.');
    return;
  }
  const orderWord = event.target.closest('[data-order-word]');
  if (orderWord) { state.practiceSelection.push(orderWord.dataset.orderWord); updatePracticeOrder(); return; }
  const removeOrder = event.target.closest('[data-remove-order]');
  if (removeOrder) { state.practiceSelection.splice(Number(removeOrder.dataset.removeOrder), 1); updatePracticeOrder(); return; }
  if (event.target.closest('#check-practice-order')) {
    const correct = isCorrectSentence(state.practiceSelection, 'Morgen gaat Sara met de trein.');
    el('practice-feedback').textContent = correct ? 'Perfect. De persoonsvorm “gaat” staat op plek twee.' : 'Kijk opnieuw: Morgen + gaat + Sara + met de trein.';
    if (correct) completePractice('Woordvolgorde correct.');
  }
}

function handleDynamicInput(event) {
  const input = event.target.closest('[data-theme-word-search]');
  if (!input) return;
  const bank = input.closest('.full-word-bank');
  if (!bank) return;
  const query = normalizeLearningWord(input.value);
  bank.classList.toggle('search-mode', Boolean(query));
  let matches = 0;
  bank.querySelectorAll('.theme-word-group').forEach((group) => {
    let groupMatches = 0;
    group.querySelectorAll('[data-theme-word-card]').forEach((card) => {
      const visible = !query || normalizeLearningWord(card.dataset.search).includes(query);
      card.hidden = !visible;
      if (visible) groupMatches += 1;
    });
    group.hidden = groupMatches === 0;
    if (query && groupMatches) group.open = true;
    matches += groupMatches;
  });
  const result = bank.querySelector('[data-theme-word-result]');
  if (result) result.textContent = query ? `${matches} resultaten voor “${input.value.trim()}”` : `${bank.querySelectorAll('[data-theme-word-card]').length} woorden beschikbaar`;
}

function initializeEvents() {
  document.addEventListener('click', handleClick);
  document.addEventListener('input', handleDynamicInput);
  elements.menuButton.addEventListener('click', () => {
    const open = elements.sidebar.classList.toggle('open');
    elements.menuButton.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      elements.sidebar.classList.remove('open');
      elements.menuButton.setAttribute('aria-expanded', 'false');
    }
  });
  elements.checkAnswer.addEventListener('click', checkMainExercise);
  elements.resetExercise.addEventListener('click', () => { state.selectedWords = []; resetMainExercise(); renderMainExercise(); });
  elements.listenAnswer.addEventListener('click', () => speak(state.selectedWords.join(' ') || EXPECTED_SENTENCE));
  elements.verbSearch.addEventListener('input', (event) => { state.verbQuery = event.target.value; renderVerbs({ resetLimit: true }); });
  elements.verbRegularity.addEventListener('change', (event) => { state.verbRegularity = event.target.value; renderVerbs({ resetLimit: true }); });
  elements.verbSemantic.addEventListener('change', (event) => { state.verbSemantic = event.target.value; renderVerbs({ resetLimit: true }); });
  elements.verbLevel.addEventListener('change', (event) => { state.verbLevel = event.target.value; renderVerbs({ resetLimit: true }); });
  elements.verbSeparable.addEventListener('change', (event) => { state.verbSeparable = event.target.value; renderVerbs({ resetLimit: true }); });
  elements.verbAuxiliary.addEventListener('change', (event) => { state.verbAuxiliary = event.target.value; renderVerbs({ resetLimit: true }); });
  elements.verbLoadMore.addEventListener('click', () => { state.verbLimit += 80; renderVerbs(); });
  elements.questionMatrixSearch.addEventListener('input', (event) => { state.questionMatrixQuery = event.target.value; renderQuestionMatrix(); });
  elements.mathSearch?.addEventListener('input', (event) => { state.mathQuery = event.target.value; renderMath(); });
  elements.physicsSearch?.addEventListener('input', (event) => { state.physicsQuery = event.target.value; renderPhysics(); });
  elements.softwareSearch?.addEventListener('input', (event) => { state.softwareQuery = event.target.value; renderSoftware(); });
  elements.wordSearch.addEventListener('input', (event) => { state.vocabularyQuery = event.target.value; renderVocabulary(); });
  elements.clearProgress.addEventListener('click', () => {
    state.progress = safeProgress();
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* Opslag kan geblokkeerd zijn. */ }
    updateProgressUI();
    renderA0Themes();
    renderA1Themes();
    renderA2Themes();
    renderB1Themes();
    renderB2Themes();
    renderLevels();
    showToast('De lokale voortgang is gewist.');
  });
  window.addEventListener('hashchange', () => {
    const page = location.hash.slice(1);
    if (document.querySelector(`#page-${page}`)) showPage(page, false);
  });
}

function initialize() {
  renderDashboard();
  renderLevels();
  renderA0Themes();
  renderA1Themes();
  renderA2Themes();
  renderB1Themes();
  renderB2Themes();
  renderConcepts();
  renderGrammar();
  renderQuestions();
  renderNumberTime();
  renderMath();
  renderPhysics();
  renderSoftware();
  renderStructures();
  renderVerbs();
  renderVocabulary();
  renderListening();
  renderMainExercise();
  renderPractice();
  updateProgressUI();
  initializeSettings();
  initializeEvents();
  loadVoices();
  if ('speechSynthesis' in window) window.speechSynthesis.onvoiceschanged = loadVoices;
  const hashPage = location.hash.slice(1);
  showPage(document.querySelector(`#page-${hashPage}`) ? hashPage : 'vandaag', false);
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}

initialize();
