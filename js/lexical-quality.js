export const GENERIC_DEFINITION_PATTERNS = [
  /^Het werkwoord beschrijft vooral/u,
  /^Het werkwoord beschrijft een toestand/u,
  /^Het onderwerp verandert van toestand/u,
  /^Een vaste combinatie(?: die| voor| om)/u,
  /^Een zelfstandig naamwoord(?: dat| voor)/u,
  /^Het zelfstandig naamwoord verwijst naar/u,
  /^Een werkwoord voor een handeling/u,
  /^Een woord waarmee je/u,
  /nog geen gecontroleerde betekenis beschikbaar/iu,
  /^Een .* uit deze les\.?$/u,
];

export function normalizeLexicalText(value) {
  return String(value || '')
    .trim()
    .toLocaleLowerCase('nl-NL')
    .replace(/[“”„'‘’.,!?;:()]/gu, '')
    .replace(/\s+/gu, ' ');
}

export function isReliableDefinition(term, definition) {
  const text = String(definition || '').trim();
  if (text.length < 18 || GENERIC_DEFINITION_PATTERNS.some((pattern) => pattern.test(text))) return false;
  return normalizeLexicalText(text) !== normalizeLexicalText(term);
}

export function isReliableExample(term, example) {
  const text = String(example || '').trim();
  if (text.length < 12 || normalizeLexicalText(text) === normalizeLexicalText(term)) return false;
  if (/^ik\s+[a-zà-ÿ-]+(?:en)\.?$/u.test(normalizeLexicalText(text))) return false;
  return normalizeLexicalText(text).split(' ').filter(Boolean).length >= 3;
}
