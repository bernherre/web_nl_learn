import { readFile, writeFile } from 'node:fs/promises';

const stripExports = (source) => source.replace(/^export\s+/gmu, '');
const stripImports = (source) => source.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"];\s*/gu, '');

const appMeta = stripExports(await readFile(new URL('../js/app-meta.js', import.meta.url), 'utf8'));
const learning = stripExports(await readFile(new URL('../js/learning.js', import.meta.url), 'utf8'));
const depthContent = stripExports(await readFile(new URL('../js/depth-content.js', import.meta.url), 'utf8'));
const supplementContent = stripExports(await readFile(new URL('../js/supplement-content.js', import.meta.url), 'utf8'));
const questionsContent = stripExports(await readFile(new URL('../js/questions-content.js', import.meta.url), 'utf8'));
const starterContent = stripExports(await readFile(new URL('../js/starter-content.js', import.meta.url), 'utf8'));
const spiralContent = stripExports(await readFile(new URL('../js/spiral-content.js', import.meta.url), 'utf8'));
const numberMathContent = stripExports(await readFile(new URL('../js/number-math-content.js', import.meta.url), 'utf8'));
const technicalContent = stripExports(await readFile(new URL('../js/technical-content.js', import.meta.url), 'utf8'));
const professionalContent = stripExports(await readFile(new URL('../js/professional-content.js', import.meta.url), 'utf8'));
const advancedPracticeContent = stripExports(await readFile(new URL('../js/advanced-practice-content.js', import.meta.url), 'utf8'));
const exercises = stripImports(stripExports(await readFile(new URL('../js/exercises.js', import.meta.url), 'utf8')));
const profiles = stripExports(await readFile(new URL('../js/profiles.js', import.meta.url), 'utf8'));
const verbAtlas = stripExports(await readFile(new URL('../js/verb-atlas.js', import.meta.url), 'utf8'));
const verbDetails = stripExports(await readFile(new URL('../js/verb-details.js', import.meta.url), 'utf8'));
const content = stripImports(stripExports(await readFile(new URL('../js/content.js', import.meta.url), 'utf8')));
const main = stripImports(await readFile(new URL('../js/main.js', import.meta.url), 'utf8'));

const bundle = `/* Generated browser bundle. Source of truth: app-meta.js, learning.js, depth-content.js, supplement-content.js, questions-content.js, starter-content.js, spiral-content.js, number-math-content.js, technical-content.js, professional-content.js, advanced-practice-content.js, exercises.js, profiles.js, verb-atlas.js, verb-details.js, content.js and main.js. */\n(function () {\n'use strict';\n${appMeta}\n${learning}\n${depthContent}\n${supplementContent}\n${questionsContent}\n${starterContent}\n${spiralContent}\n${numberMathContent}\n${technicalContent}\n${professionalContent}\n${advancedPracticeContent}\n${exercises}\n${profiles}\n${verbAtlas}\n${verbDetails}\n${content}\n${main}\n})();\n`;
await writeFile(new URL('../js/app.js', import.meta.url), bundle, 'utf8');
console.log('js/app.js bijgewerkt.');
