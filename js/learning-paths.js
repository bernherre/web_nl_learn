const guidedLevelOrder = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const guidedClean = (value) => String(value ?? '').replace(/\s+/gu, ' ').trim();
const guidedNormalise = (value) => guidedClean(value)
  .toLocaleLowerCase('nl-NL')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/gu, '')
  .replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');

function coursePath(theme, level, exerciseBank) {
  const verbs = Object.entries(theme.wordGroups || {})
    .filter(([group]) => /werkwoord/iu.test(group))
    .flatMap(([, words]) => words || []);
  return {
    id: `${level.toLowerCase()}-${theme.id}`,
    level,
    themeId: theme.id,
    sourcePage: level.toLowerCase(),
    title: theme.title,
    subtitle: theme.subtitle || theme.description || '',
    image: theme.image || '',
    canDo: theme.canDo || [],
    terms: (theme.vocabulary || []).map(([term]) => term),
    wordCards: (theme.vocabulary || []).map(([term, definition, example]) => ({ term, definition, example })),
    grammar: (theme.grammar || []).map(([title, explanation]) => ({ title, explanation })),
    verbs,
    dialogue: (theme.dialogue || []).map((line, index) => ({ speaker: index % 2 === 0 ? 'A' : 'B', line })),
    miniTest: theme.exercise || null,
    exerciseIds: selectExercises(exerciseBank, level, theme.title, theme.id, theme.grammar, verbs),
  };
}

function spiralPath(theme, level, data, exerciseBank) {
  const wordGroups = data?.words || {};
  const verbs = Object.entries(wordGroups)
    .filter(([group]) => /werkwoord/iu.test(group))
    .flatMap(([, words]) => words || []);
  const terms = Object.entries(wordGroups)
    .filter(([group]) => !/werkwoord|formulering|gesprekszin/iu.test(group))
    .flatMap(([, words]) => words || []);
  return {
    id: `${level.toLowerCase()}-${theme.id}`,
    level,
    themeId: theme.id,
    sourcePage: level.toLowerCase(),
    title: theme.title,
    subtitle: theme.subtitle || '',
    image: theme.image || '',
    canDo: data?.canDo || [],
    terms,
    wordCards: [],
    grammar: (data?.grammar || []).map((title) => ({ title, explanation: '' })),
    verbs,
    dialogue: (data?.dialogue || []).map(([speaker, line]) => ({ speaker, line })),
    miniTest: null,
    exerciseIds: selectExercises(exerciseBank, level, theme.title, theme.id, data?.grammar || [], verbs),
  };
}

function tokenSet(...values) {
  return new Set(values.flat(Infinity).map(guidedClean).join(' ').toLocaleLowerCase('nl-NL').split(/[^\p{L}\p{N}]+/u).filter((token) => token.length >= 4));
}

function selectExercises(exerciseBank, level, title, themeId, grammar, verbs) {
  const wanted = tokenSet(title, themeId, grammar, verbs);
  const candidates = exerciseBank.filter((exercise) => exercise.level === level && ['choice', 'input', 'order'].includes(exercise.type));
  const scored = candidates.map((exercise) => {
    const haystack = tokenSet(exercise.topic, exercise.prompt, exercise.explanation, exercise.answer);
    let score = 0;
    for (const token of wanted) if (haystack.has(token)) score += 3;
    if (exercise.type === 'choice') score += 2;
    if (/grammatica|werkwoord|vragen/iu.test(exercise.skill || exercise.topic || '')) score += 1;
    return { exercise, score };
  }).sort((a, b) => b.score - a.score || a.exercise.id.localeCompare(b.exercise.id, 'nl'));
  return scored.slice(0, 3).map(({ exercise }) => exercise.id);
}

export function buildGuidedPaths({ a0Themes, a1Themes, a2Themes, spiralThemes, advancedSpiralLevels, exerciseBank }) {
  const paths = [
    ...a0Themes.map((theme) => coursePath(theme, 'A0', exerciseBank)),
    ...a1Themes.map((theme) => coursePath(theme, 'A1', exerciseBank)),
    ...a2Themes.map((theme) => coursePath(theme, 'A2', exerciseBank)),
  ];
  for (const level of ['B1', 'B2', 'C1', 'C2']) {
    for (const theme of spiralThemes) {
      const data = theme.levels?.[level] || advancedSpiralLevels[theme.id]?.[level];
      if (data) paths.push(spiralPath(theme, level, data, exerciseBank));
    }
  }
  return paths.sort((a, b) => guidedLevelOrder.indexOf(a.level) - guidedLevelOrder.indexOf(b.level) || a.title.localeCompare(b.title, 'nl'));
}

export function findGuidedPath(paths, id) {
  return paths.find((path) => path.id === id) || paths[0] || null;
}

export function guidedPathNodeId(path) {
  return `learning-path:${guidedNormalise(path.id)}`;
}

export function guidedThemeNodeId(path) {
  return ['A0', 'A1', 'A2'].includes(path.level)
    ? `theme:${path.level}:${path.themeId}`
    : `theme:${path.level}:spiral:${path.themeId}`;
}
