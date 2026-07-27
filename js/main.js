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
  a1Theme: 'hallo',
  a2Theme: 'verhuizen',
  grammarTopic: 'woordvolgorde',
  concept: 'grammatica',
  vocabularyCategory: 'alle',
  vocabularyQuery: '',
  practice: 'order',
  structure: 'voorzetsels',
  practiceSelection: [],
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
  a1ThemeGrid: el('a1-theme-grid'), a1ThemeDetail: el('a1-theme-detail'),
  a2ThemeGrid: el('a2-theme-grid'), a2ThemeDetail: el('a2-theme-detail'),
  conceptGrid: el('concept-grid'), conceptDetail: el('concept-detail'),
  grammarFilters: el('grammar-filters'), grammarList: el('grammar-list'), grammarDetail: el('grammar-detail'),
  structureTabs: el('structure-tabs'), structureSummary: el('structure-summary'), structureContent: el('structure-content'),
  verbSelect: el('verb-select'), verbMeaning: el('verb-meaning'), verbDetail: el('verb-detail'), speakVerb: el('speak-verb'),
  vocabularyFilters: el('vocabulary-filters'), vocabularyGrid: el('vocabulary-grid'), wordSearch: el('word-search'),
  listeningGrid: el('listening-grid'), practiceStage: el('practice-stage'),
  progressMinutes: el('progress-minutes'), progressCompleted: el('progress-completed'), progressAudio: el('progress-audio'),
  skillProgress: el('skill-progress'), clearProgress: el('clear-progress'),
  settingsDialog: el('settings-dialog'), darkModeSetting: el('dark-mode-setting'),
  speechRate: el('speech-rate'), speechRateOutput: el('speech-rate-output'), themeToggle: el('theme-toggle'),
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
  try {
    const stored = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return { theme: stored.theme === 'dark' ? 'dark' : 'light', speechRate: Number(stored.speechRate) || .9 };
  } catch { return { theme: 'light', speechRate: .9 }; }
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
  elements.levelPath.innerHTML = levels.map((level) => `<article class="card level-card ${level.current ? 'current' : ''} ${level.progress === 100 ? 'done' : ''}">
    <div class="level-badge">${level.id}</div>
    <div><span class="kicker">${level.title}</span><h2>${level.description}</h2><div class="module-tags">${level.modules.map((module) => `<span>${module}</span>`).join('')}</div></div>
    <div class="level-progress"><strong>${level.progress}%</strong><div class="meter"><i style="width:${level.progress}%"></i></div></div>
  </article>`).join('');
}

function themeWordCount(theme) {
  return Object.values(theme.wordGroups || {}).reduce((total, words) => total + words.length, 0);
}

function renderThemeWordGroups(theme) {
  return Object.entries(theme.wordGroups || {}).map(([group, words], index) => `<details class="theme-word-group" ${index === 0 ? 'open' : ''}>
    <summary><span>${escapeHtml(group)}</span><strong>${words.length} woorden</strong></summary>
    <div class="theme-word-chip-grid">${words.map((word) => `<button class="theme-word-chip speak" type="button" data-text="${escapeHtml(word)}" data-rate="0.82"><span>${escapeHtml(word)}</span><small>luister</small></button>`).join('')}</div>
  </details>`).join('');
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
      <section class="full-word-bank"><div class="section-heading compact"><div><span class="kicker">Volledige woordenlijst</span><h2>${themeWordCount(theme)} woorden en vaste combinaties</h2></div><span class="plan-total">klik om te luisteren</span></div><p class="word-bank-intro">De woorden zijn semantisch gegroepeerd. Open een groep, luister en herhaal de woorden hardop.</p>${renderThemeWordGroups(theme)}</section>
      <section><span class="kicker">Grammatica</span><h2>Vorm en betekenis</h2><div class="a1-grammar-grid">${theme.grammar.map(([title, explanation]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(explanation)}</p><button class="text-button" type="button" data-page="grammatica" data-grammar-level="${level}">Open in de grammatica-atlas →</button></article>`).join('')}</div></section>
      <section class="a1-sound-panel"><div><span class="kicker">Uitspraak</span><h2>Klanken van dit thema</h2><p>Luister, kijk naar de spelling en spreek de woorden hardop na.</p></div><div class="pronunciation-chips">${theme.pronunciation.map((sound) => `<button class="speak" type="button" data-text="${escapeHtml(sound)}" data-rate="0.68">${escapeHtml(sound)} 🔊</button>`).join('')}</div></section>
      <section class="a1-dialogue"><span class="kicker">Gesprek</span><h2>Lees en luister</h2><div>${theme.dialogue.map((line, index) => `<p><b>${index % 2 === 0 ? 'A' : 'B'}</b><span>${escapeHtml(line)}</span><button class="speak" type="button" data-text="${escapeHtml(line)}" data-rate="0.86">🔊</button></p>`).join('')}</div></section>
      <section class="a1-mini-test"><span class="kicker">Mini-toets</span><h2>${escapeHtml(theme.exercise.question)}</h2><div class="option-list">${theme.exercise.options.map((option, index) => `<button type="button" data-course-answer="${index}" data-course-level="${level}" data-course-theme="${theme.id}">${escapeHtml(option)}</button>`).join('')}</div><p class="feedback" id="${feedbackId}">Kies één antwoord.</p></section>
      <button class="${completed ? 'secondary-button' : 'primary-button'} a1-complete-button" type="button" data-complete-course="${theme.id}" data-course-level="${level}">${completed ? '✓ Thema voltooid' : 'Markeer thema als voltooid'}</button>
    </div>`;
}

function renderCourseThemes(level) {
  const isA1 = level === 'A1';
  const themes = isA1 ? a1Themes : a2Themes;
  const currentId = isA1 ? state.a1Theme : state.a2Theme;
  const grid = isA1 ? elements.a1ThemeGrid : elements.a2ThemeGrid;
  const detail = isA1 ? elements.a1ThemeDetail : elements.a2ThemeDetail;
  const completedValues = isA1 ? state.progress.a1Completed : state.progress.a2Completed;
  if (!grid || !detail) return;
  const completed = new Set(completedValues || []);
  grid.innerHTML = themes.map((theme) => `<button class="card a1-theme-card course-theme-card ${theme.id === currentId ? 'active' : ''} ${completed.has(theme.id) ? 'done' : ''}" type="button" data-course-theme-select="${theme.id}" data-course-level="${level}">
    <img src="${theme.image}" alt="Illustratie bij ${escapeHtml(theme.title)}">
    <span class="a1-theme-number">${completed.has(theme.id) ? '✓' : theme.number}</span>
    <div><small>${level} · ${themeWordCount(theme)} woorden</small><h2>${escapeHtml(theme.title)}</h2><p>${escapeHtml(theme.subtitle)}</p></div>
  </button>`).join('');
  const theme = themes.find((item) => item.id === currentId) || themes[0];
  detail.innerHTML = renderCourseThemeDetail(theme, level, completed.has(theme.id));
}

function renderA1Themes() { renderCourseThemes('A1'); }
function renderA2Themes() { renderCourseThemes('A2'); }

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

function renderVerbs() {
  const coreOptions = verbs.map((verb) => `<option value="core:${escapeHtml(verb.infinitive)}">${escapeHtml(verb.infinitive)}</option>`).join('');
  const separableOptions = separableVerbBank.map((verb) => `<option value="separable:${escapeHtml(verb.infinitive)}">${escapeHtml(verb.infinitive)} · ${escapeHtml(verb.prefix)} + …</option>`).join('');
  elements.verbSelect.innerHTML = `<optgroup label="Kernwerkwoorden">${coreOptions}</optgroup><optgroup label="Scheidbare werkwoorden">${separableOptions}</optgroup>`;
  renderVerbDetail(`core:${verbs[0].infinitive}`);
}

function renderVerbDetail(value) {
  const [kind, infinitive] = String(value).includes(':') ? String(value).split(':') : ['core', value];
  elements.verbSelect.value = `${kind}:${infinitive}`;
  if (kind === 'separable') {
    const verb = separableVerbBank.find((item) => item.infinitive === infinitive) || separableVerbBank[0];
    const models = verb.models || { main: verb.example };
    const modelLabels = {
      main: 'Hoofdzin', inversion: 'Inversie', modal: 'Met een modaal werkwoord', perfect: 'Voltooide tijd', subordinate: 'Bijzin', te: 'Met te',
    };
    elements.verbMeaning.innerHTML = `<span class="kicker">Scheidbaar werkwoord</span><strong>${escapeHtml(verb.meaning)}</strong><small>Voorvoegsel: ${escapeHtml(verb.prefix)}</small>`;
    elements.speakVerb.dataset.text = verb.infinitive;
    elements.verbDetail.innerHTML = `<div class="section-heading"><div><span class="kicker">Werkwoord + zinspositie</span><h1>${escapeHtml(verb.infinitive)}</h1></div><button class="icon-sound speak" type="button" data-text="${escapeHtml(verb.infinitive)}" data-rate="0.75">🔊</button></div>
      <div class="split-verb-visual"><span>${escapeHtml(verb.prefix)}</span><i>+</i><strong>${escapeHtml(verb.infinitive.slice(verb.prefix.length))}</strong><small>in de hoofdzin vaak uit elkaar</small></div>
      <div class="verb-model-grid">${Object.entries(models).map(([key, sentence]) => `<article><small>${modelLabels[key] || key}</small><p>${escapeHtml(sentence)}</p><button class="speak" type="button" data-text="${escapeHtml(sentence)}" data-rate="0.86">🔊 Luister</button></article>`).join('')}</div>
      ${verb.models ? '<div class="grammar-note contrast"><h3>Zie het patroon</h3><p>Hoofdzin: het losse deel staat aan het einde. Bijzin: het werkwoord komt weer samen. Perfectum: <em>ge</em> staat meestal tussen voorvoegsel en stam. Met <em>te</em>: <em>op te staan</em>.</p></div>' : `<div class="grammar-note"><h3>In context</h3><p>${escapeHtml(verb.example)}</p></div>`}`;
    return;
  }
  const verb = verbs.find((item) => item.infinitive === infinitive) || verbs[0];
  elements.verbMeaning.innerHTML = `<span class="kicker">Betekenis</span><strong>${escapeHtml(verb.meaning)}</strong><small>Hulpwerkwoord: ${escapeHtml(verb.auxiliary)}</small>`;
  elements.speakVerb.dataset.text = verb.infinitive;
  elements.verbDetail.innerHTML = `<div class="section-heading"><div><span class="kicker">Werkwoord</span><h1>${escapeHtml(verb.infinitive)}</h1></div><button class="icon-sound speak" type="button" data-text="${escapeHtml(verb.infinitive)}" data-rate="0.75" aria-label="Luister naar ${escapeHtml(verb.infinitive)}">🔊</button></div>
    <div class="verb-tenses"><div class="tense-card"><h3>Tegenwoordige tijd</h3><ul>${verb.present.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div><div class="tense-card"><h3>Verleden tijd</h3><ul>${verb.past.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div><div class="tense-card"><h3>Voltooide tijd</h3><p>${escapeHtml(verb.perfect)}</p></div></div>
    <div class="verb-perfect"><span class="kicker">In context</span><ul class="example-list">${verb.examples.map((example) => `<li><span>${escapeHtml(example)}</span><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.88">🔊</button></li>`).join('')}</ul></div>`;
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

function applyTheme(theme) {
  state.settings.theme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = state.settings.theme;
  elements.darkModeSetting.checked = state.settings.theme === 'dark';
  elements.themeToggle.textContent = state.settings.theme === 'dark' ? '☀' : '☾';
  document.querySelector('meta[name="theme-color"]').content = state.settings.theme === 'dark' ? '#0f1d1a' : '#123f38';
  saveSettings();
}

function initializeSettings() {
  applyTheme(state.settings.theme);
  elements.speechRate.value = String(state.settings.speechRate);
  elements.speechRateOutput.textContent = `${state.settings.speechRate.toFixed(2).replace(/0$/, '')}×`;
  el('open-settings').addEventListener('click', () => elements.settingsDialog.showModal());
  elements.themeToggle.addEventListener('click', () => applyTheme(state.settings.theme === 'dark' ? 'light' : 'dark'));
  elements.darkModeSetting.addEventListener('change', (event) => applyTheme(event.target.checked ? 'dark' : 'light'));
  elements.speechRate.addEventListener('input', (event) => {
    state.settings.speechRate = Number(event.target.value);
    elements.speechRateOutput.textContent = `${state.settings.speechRate.toFixed(2).replace(/0$/, '')}×`;
    saveSettings();
  });
}

function handleClick(event) {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) {
    if (pageButton.dataset.a1Theme) { state.a1Theme = pageButton.dataset.a1Theme; renderA1Themes(); }
    if (pageButton.dataset.a2Theme) { state.a2Theme = pageButton.dataset.a2Theme; renderA2Themes(); }
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
    if (level === 'A1') { state.a1Theme = courseThemeButton.dataset.courseThemeSelect; renderA1Themes(); }
    else { state.a2Theme = courseThemeButton.dataset.courseThemeSelect; renderA2Themes(); }
    return;
  }
  const legacyA1ThemeButton = event.target.closest('[data-a1-theme]');
  if (legacyA1ThemeButton) { state.a1Theme = legacyA1ThemeButton.dataset.a1Theme; renderA1Themes(); return; }
  const courseAnswer = event.target.closest('[data-course-answer]');
  if (courseAnswer) {
    const level = courseAnswer.dataset.courseLevel;
    const themes = level === 'A1' ? a1Themes : a2Themes;
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
    const key = level === 'A1' ? 'a1Completed' : 'a2Completed';
    const values = new Set(state.progress[key] || []);
    values.has(id) ? values.delete(id) : values.add(id);
    state.progress[key] = [...values];
    saveProgress();
    level === 'A1' ? renderA1Themes() : renderA2Themes();
    showToast(values.has(id) ? `${level}-thema gemarkeerd als voltooid.` : `${level}-thema opnieuw geopend.`);
    return;
  }
  const structureButton = event.target.closest('[data-structure]');
  if (structureButton) { renderStructures(structureButton.dataset.structure); return; }
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

function initializeEvents() {
  document.addEventListener('click', handleClick);
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
  elements.verbSelect.addEventListener('change', (event) => renderVerbDetail(event.target.value));
  elements.speakVerb.addEventListener('click', () => speak(elements.speakVerb.dataset.text, .75));
  elements.wordSearch.addEventListener('input', (event) => { state.vocabularyQuery = event.target.value; renderVocabulary(); });
  elements.clearProgress.addEventListener('click', () => {
    state.progress = safeProgress();
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* Opslag kan geblokkeerd zijn. */ }
    updateProgressUI();
    renderA1Themes();
    renderA2Themes();
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
  renderA1Themes();
  renderA2Themes();
  renderConcepts();
  renderGrammar();
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
