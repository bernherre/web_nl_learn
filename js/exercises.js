import { advancedExerciseBank } from './advanced-practice-content.js';
import { sourceReviewExercises } from './source-review-content.js';
const LEVEL_TARGETS = { A0: 250, A1: 700, A2: 900, B1: 1000, B2: 1200 };

const people = ['Noor', 'Sam', 'Lina', 'Omar', 'Sara', 'Milan', 'Yara', 'Daan'];
const places = ['school', 'markt', 'station', 'bibliotheek', 'huisarts', 'supermarkt', 'kantoor', 'gemeente'];
const times = ['vandaag', 'morgen', 'vanmiddag', 'vanavond', 'maandag', 'om acht uur'];
const objects = [
  ['het huis', 'het'], ['de fiets', 'de'], ['het boek', 'het'], ['de jas', 'de'],
  ['het station', 'het'], ['de afspraak', 'de'], ['het formulier', 'het'], ['de markt', 'de'],
];
const prepositions = [
  ['wachten', 'op', 'de bus'], ['denken', 'aan', 'mijn familie'], ['praten', 'over', 'het werk'],
  ['zorgen', 'voor', 'de kinderen'], ['luisteren', 'naar', 'de docent'], ['rekenen', 'op', 'jouw hulp'],
];
const connectors = [
  ['omdat', 'de trein vertraging heeft'], ['hoewel', 'het regent'], ['terwijl', 'ik aan het werk ben'],
  ['zodat', 'iedereen het begrijpt'], ['tenzij', 'de afspraak wordt verzet'], ['nadat', 'de vergadering is afgelopen'],
];
const preciseVerbs = [
  ['bespreken', 'het voorstel'], ['toelichten', 'de keuze'], ['beoordelen', 'de resultaten'],
  ['benadrukken', 'het belang'], ['onderbouwen', 'de conclusie'], ['vaststellen', 'de oorzaak'],
];

function pick(list, index, offset = 0) { return list[(index + offset) % list.length]; }
function shuffleDeterministic(items, index) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = (index * 17 + i * 11) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function makeA0(index) {
  const person = pick(people, index);
  const variants = [
    () => ({ topic: 'begroeten', type: 'choice', prompt: 'Welke begroeting gebruik je in de ochtend?', answer: 'Goedemorgen', options: ['Goedemorgen', 'Goedenacht', 'Tot morgen'], explanation: '“Goedemorgen” gebruik je meestal vóór de middag.' }),
    () => ({ topic: 'voorstellen', type: 'input', prompt: `Vul aan: Mijn naam ___ ${person}.`, answer: 'is', explanation: 'Bij “mijn naam” gebruik je de persoonsvorm “is”.' }),
    () => ({ topic: 'beleefdheid', type: 'choice', prompt: 'Wat zeg je wanneer iemand je helpt?', answer: 'Dank je wel', options: ['Dank je wel', 'Waar woon je?', 'Tot gisteren'], explanation: '“Dank je wel” is een informele bedanking.' }),
    () => ({ topic: 'getallen', type: 'input', prompt: `Schrijf het getal ${index % 10} in woorden.`, answer: ['nul','een','twee','drie','vier','vijf','zes','zeven','acht','negen'][index % 10], explanation: 'Dit is een basisgetal dat je vaak gebruikt bij telefoonnummers en adressen.' }),
    () => ({ topic: 'luisteren', type: 'listening', prompt: 'Luister en kies de juiste reactie.', audio: `Hallo, ik heet ${person}.`, answer: `Aangenaam, ${person}.`, options: [`Aangenaam, ${person}.`, 'Het kost tien euro.', 'Ik woon op maandag.'], explanation: 'Na een kennismaking kun je “Aangenaam” zeggen.' }),
  ];
  return variants[index % variants.length]();
}

function makeA1(index) {
  const person = pick(people, index);
  const [noun, article] = pick(objects, index);
  const place = pick(places, index);
  const time = pick(times, index);
  const variants = [
    () => ({ topic: 'lidwoorden', type: 'choice', prompt: `Kies het juiste lidwoord: ___ ${noun.replace(/^(de|het) /u, '')}`, answer: article, options: ['de', 'het', 'een'], explanation: `${noun} krijgt het lidwoord “${article}”.` }),
    () => ({ topic: 'woordvolgorde', type: 'order', prompt: 'Zet de woorden in de juiste volgorde.', answer: `${time[0].toUpperCase()}${time.slice(1)} gaat ${person} naar de ${place}.`, tokens: shuffleDeterministic([time, 'gaat', person, 'naar', 'de', `${place}.`], index), explanation: 'Na een tijdsbepaling staat de persoonsvorm op plek twee.' }),
    () => ({ topic: 'tegenwoordige tijd', type: 'input', prompt: `Vul aan: ${person} ___ in Nederland. (wonen)`, answer: 'woont', explanation: 'Bij hij/zij of een naam krijgt de stam meestal -t.' }),
    () => ({ topic: 'vragen', type: 'choice', prompt: 'Welke vraag past bij het antwoord “In Eindhoven”?', answer: 'Waar woon je?', options: ['Waar woon je?', 'Hoe oud ben je?', 'Wanneer eet je?'], explanation: '“Waar” vraagt naar een plaats.' }),
    () => ({ topic: 'luisteren', type: 'listening', prompt: 'Luister en kies waar de persoon naartoe gaat.', audio: `${person} gaat naar de ${place}.`, answer: `Naar de ${place}`, options: shuffleDeterministic([`Naar de ${place}`, 'Naar huis', 'Naar België'], index), explanation: 'Luister naar de richting na “naar”.' }),
  ];
  return variants[index % variants.length]();
}

function makeA2(index) {
  const person = pick(people, index);
  const [verb, prep, complement] = pick(prepositions, index);
  const place = pick(places, index);
  const variants = [
    () => ({ topic: 'voorzetsels', type: 'choice', prompt: `${person} ${verb === 'wachten' ? 'wacht' : verb === 'denken' ? 'denkt' : verb === 'praten' ? 'praat' : verb === 'zorgen' ? 'zorgt' : verb === 'luisteren' ? 'luistert' : 'rekent'} ___ ${complement}.`, answer: prep, options: shuffleDeterministic([prep, 'met', 'van'], index), explanation: `Het vaste patroon is “${verb} ${prep}”.` }),
    () => ({ topic: 'perfectum', type: 'input', prompt: `Vul aan: ${person} is naar de ${place} ___. (gaan)`, answer: 'gegaan', explanation: 'Het voltooid deelwoord van “gaan” is “gegaan”; bij richting gebruiken we “zijn”.' }),
    () => ({ topic: 'scheidbare werkwoorden', type: 'order', prompt: 'Maak een hoofdzin met “opbellen”.', answer: `${person} belt de huisarts op.`, tokens: shuffleDeterministic([person, 'belt', 'de', 'huisarts', 'op.'], index), explanation: 'In een hoofdzin staat het losse deel “op” aan het einde.' }),
    () => ({ topic: 'waar + voorzetsel', type: 'choice', prompt: `___ wacht ${person}? — Op de bus.`, answer: 'Waarop', options: ['Waarop', 'Waarmee', 'Waarvan'], explanation: 'Voor een zaak combineer je “waar” met de vaste prepositie “op”.' }),
    () => ({ topic: 'luisteren', type: 'listening', prompt: 'Luister en kies wat er is gebeurd.', audio: `${person} heeft de afspraak verzet.`, answer: 'De afspraak is veranderd.', options: ['De afspraak is veranderd.', 'De afspraak is betaald.', 'De afspraak is vergeten.'], explanation: '“Verzetten” betekent dat de afspraak naar een ander moment gaat.' }),
  ];
  return variants[index % variants.length]();
}

function makeB1(index) {
  const person = pick(people, index);
  const [connector, clause] = pick(connectors, index);
  const [verb, prep, complement] = pick(prepositions, index, 2);
  const variants = [
    () => ({ topic: 'bijzinnen', type: 'order', prompt: `Maak een zin met “${connector}”.`, answer: `${person} blijft thuis, ${connector} ${clause}.`, tokens: shuffleDeterministic([`${person}`, 'blijft', 'thuis,', connector, ...clause.split(' '), '.'], index), explanation: `Na “${connector}” staat de persoonsvorm meestal achteraan in de bijzin.` }),
    () => ({ topic: 'vaste combinaties', type: 'choice', prompt: `Welke combinatie is correct?`, answer: `${verb} ${prep}`, options: shuffleDeterministic([`${verb} ${prep}`, `${verb} met`, `${verb} voor`], index), explanation: `Leer “${verb} ${prep}” als één vaste combinatie.` }),
    () => ({ topic: 'vertellen', type: 'input', prompt: 'Vul aan: Toen ik thuiskwam, ___ ik meteen gegeten. (hebben)', answer: 'heb', explanation: 'In een hoofdzin staat de persoonsvorm na het eerste zinsdeel.' }),
    () => ({ topic: 'formele vragen', type: 'choice', prompt: 'Welke vraag klinkt het beleefdst?', answer: 'Zou u dat kunnen toelichten?', options: ['Zou u dat kunnen toelichten?', 'Leg dat uit.', 'Waarom doe je dat zo?'], explanation: '“Zou u … kunnen” maakt een verzoek beleefd en professioneel.' }),
    () => ({ topic: 'schrijven', type: 'selfcheck', prompt: 'Schrijf twee zinnen waarin je een mening geeft en een reden noemt.', modelAnswer: 'Ik vind openbaar vervoer belangrijk, omdat het de stad bereikbaar houdt.', explanation: 'Gebruik een mening en verbind de reden met “omdat” of “want”.' }),
  ];
  return variants[index % variants.length]();
}

function makeB2(index) {
  const [verb, object] = pick(preciseVerbs, index);
  const [connector, clause] = pick(connectors, index, 3);
  const variants = [
    () => ({ topic: 'precisie', type: 'choice', prompt: `Kies het meest precieze professionele werkwoord: We moeten ${object} ___.`, answer: verb, options: shuffleDeterministic([verb, 'doen', 'gaan'], index), explanation: `“${verb}” is hier preciezer en professioneler dan een algemeen werkwoord.` }),
    () => ({ topic: 'register', type: 'choice', prompt: 'Welke formulering past het best in een formeel rapport?', answer: 'De resultaten tonen aan dat de maatregel effectief is.', options: ['De resultaten tonen aan dat de maatregel effectief is.', 'Je ziet gewoon dat het werkt.', 'Het doet het best goed.'], explanation: 'Een rapport vraagt om neutrale, controleerbare en precieze formuleringen.' }),
    () => ({ topic: 'argumentatie', type: 'order', prompt: `Bouw een genuanceerde zin met “${connector}”.`, answer: `De maatregel blijft zinvol, ${connector} ${clause}.`, tokens: shuffleDeterministic(['De', 'maatregel', 'blijft', 'zinvol,', connector, ...clause.split(' '), '.'], index), explanation: `Het verbindingswoord “${connector}” maakt de logische relatie expliciet.` }),
    () => ({ topic: 'idiomatiek', type: 'input', prompt: 'Vul aan: We moeten rekening ___ de gevolgen houden.', answer: 'met', explanation: 'De vaste uitdrukking is “rekening houden met”.' }),
    () => ({ topic: 'schrijven', type: 'selfcheck', prompt: 'Formuleer een korte conclusie met een beperking of voorbehoud.', modelAnswer: 'De aanpak lijkt effectief, voor zover de beschikbare gegevens representatief zijn.', explanation: 'B2-taal maakt ruimte voor nuance met woorden als “lijkt”, “voor zover” en “waarschijnlijk”.' }),
  ];
  return variants[index % variants.length]();
}

const factories = { A0: makeA0, A1: makeA1, A2: makeA2, B1: makeB1, B2: makeB2 };

function createLevelExercises(level, count) {
  return Array.from({ length: count }, (_, index) => {
    const exercise = factories[level](index);
    const answer = Array.isArray(exercise.answer) ? exercise.answer : String(exercise.answer || '');
    return {
      id: `${level.toLowerCase()}-${exercise.topic.replace(/[^a-z0-9]+/giu, '-').toLowerCase()}-${String(index + 1).padStart(4, '0')}`,
      level,
      difficulty: level === 'A0' ? 1 : level === 'A1' ? 2 : level === 'A2' ? 3 : level === 'B1' ? 4 : 5,
      skill: exercise.type === 'listening' ? 'luisteren' : exercise.type === 'selfcheck' ? 'schrijven' : 'grammatica',
      ...exercise,
      answer,
    };
  });
}

const baseExerciseBank = Object.entries(LEVEL_TARGETS).flatMap(([level, count]) => createLevelExercises(level, count));
export const exerciseBank = [...baseExerciseBank, ...advancedExerciseBank, ...sourceReviewExercises];
export const exerciseStats = {
  total: exerciseBank.length,
  byLevel: Object.fromEntries(Object.keys(LEVEL_TARGETS).map((level) => [level, exerciseBank.filter((item) => item.level === level).length])),
  types: [...new Set(exerciseBank.map((item) => item.type))],
};

export function normaliseExerciseAnswer(value) {
  return String(value ?? '').replace(/\s+([,.!?])/gu, '$1').replace(/[.!?]+$/gu, '').trim().replace(/\s+/gu, ' ').toLocaleLowerCase('nl-NL');
}

export function checkExerciseAnswer(exercise, response) {
  if (!exercise) return false;
  if (exercise.type === 'selfcheck') return Boolean(response);
  return normaliseExerciseAnswer(response) === normaliseExerciseAnswer(exercise.answer);
}

export function safeExerciseStats(raw = {}) {
  return {
    answered: Math.max(0, Number(raw.answered) || 0),
    correct: Math.max(0, Number(raw.correct) || 0),
    streak: Math.max(0, Number(raw.streak) || 0),
    bestStreak: Math.max(0, Number(raw.bestStreak) || 0),
    history: Array.isArray(raw.history) ? raw.history.filter((item) => typeof item === 'string').slice(-300) : [],
    mistakes: raw.mistakes && typeof raw.mistakes === 'object' ? raw.mistakes : {},
    byLevel: raw.byLevel && typeof raw.byLevel === 'object' ? raw.byLevel : {},
  };
}

export function filterExercises(bank, { level = 'alle', type = 'alle', topic = 'alle' } = {}) {
  return bank.filter((item) => (level === 'alle' || item.level === level)
    && (type === 'alle' || item.type === type)
    && (topic === 'alle' || item.topic === topic));
}
