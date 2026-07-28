import { readFile, writeFile } from 'node:fs/promises';

const stripExports = (source) => source.replace(/^export\s+/gmu, '');
const stripImports = (source) => source.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"];\s*/gu, '');

const learning = stripExports(await readFile(new URL('../js/learning.js', import.meta.url), 'utf8'));
const depthContent = stripExports(await readFile(new URL('../js/depth-content.js', import.meta.url), 'utf8'));
const supplementContent = stripExports(await readFile(new URL('../js/supplement-content.js', import.meta.url), 'utf8'));
const questionsContent = stripExports(await readFile(new URL('../js/questions-content.js', import.meta.url), 'utf8'));
const verbAtlas = stripExports(await readFile(new URL('../js/verb-atlas.js', import.meta.url), 'utf8'));
const content = stripImports(stripExports(await readFile(new URL('../js/content.js', import.meta.url), 'utf8')));
const main = stripImports(await readFile(new URL('../js/main.js', import.meta.url), 'utf8'));

const bundle = `/* Generated browser bundle. Source of truth: learning.js, depth-content.js, supplement-content.js, questions-content.js, verb-atlas.js, content.js and main.js. */\n(function () {\n'use strict';\n${learning}\n${depthContent}\n${supplementContent}\n${questionsContent}\n${verbAtlas}\n${content}\n${main}\n})();\n`;
await writeFile(new URL('../js/app.js', import.meta.url), bundle, 'utf8');
console.log('js/app.js bijgewerkt.');
