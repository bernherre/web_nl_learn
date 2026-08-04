import { readFile, writeFile } from 'node:fs/promises';

const stripExports = (source) => source.replace(/^export\s+/gmu, '');
const stripImports = (source) => source.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"];\s*/gu, '');

const stripImportsPreservingAliases = (source) => {
  const aliases = [];
  const withoutImports = source.replace(
    /import\s*\{([\s\S]*?)\}\s*from\s*['"][^'"]+['"];\s*/gu,
    (_match, specifiers) => {
      for (const rawSpecifier of specifiers.split(',')) {
        const specifier = rawSpecifier.trim();
        const aliasMatch = specifier.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/u);
        if (aliasMatch) aliases.push(`const ${aliasMatch[2]} = ${aliasMatch[1]};`);
      }
      return '';
    },
  );
  return `${aliases.join('\n')}\n${withoutImports}`;
};

// Eén manifest bepaalt zowel welke bronnen worden gelezen als hun volgorde in
// de klassieke bundle. Daardoor kan een bron niet meer wel worden ingelezen
// maar per ongeluk uit de uiteindelijke app.js verdwijnen.
const sourceManifest = [
  ['app-config.js', stripExports],
  ['lexical-quality.js', stripExports],
  ['lexicon-a1.js', stripExports],
  ['lexicon-a2.js', stripExports],
  ['lexicon.js', (source) => stripImports(stripExports(source))],
  ['learning.js', stripExports],
  ['depth-content.js', stripExports],
  ['supplement-content.js', stripExports],
  ['questions-content.js', stripExports],
  ['starter-content.js', stripExports],
  ['spiral-content.js', stripExports],
  ['advanced-level-content.js', stripExports],
  ['number-math-content.js', stripExports],
  ['technical-content.js', stripExports],
  ['professional-content.js', stripExports],
  ['advanced-practice-content.js', stripExports],
  ['source-review-content.js', stripExports],
  ['c1-c2-language-systems.js', stripExports],
  ['v19-learning-experience.js', stripExports],
  ['exercises.js', (source) => stripImports(stripExports(source))],
  ['profiles.js', stripExports],
  ['verb-atlas.js', stripExports],
  ['verb-corrections.js', stripExports],
  ['verb-core-review.js', stripExports],
  ['verb-initial-review.js', stripExports],
  ['verb-final-review.js', stripExports],
  ['verb-sentence-pattern-fixes.js', stripExports],
  ['knowledge-graph.js', stripExports],
  ['content.js', (source) => stripImports(stripExports(source))],
  ['main.js', stripImportsPreservingAliases],
];

const renderedSources = [];
for (const [fileName, transform] of sourceManifest) {
  const source = await readFile(new URL(`../js/${fileName}`, import.meta.url), 'utf8');
  renderedSources.push(transform(source));
}

const sourceList = sourceManifest.map(([fileName]) => fileName).join(', ');
const bundle = `/* Generated browser bundle. Source of truth and order: ${sourceList}. */\n(function () {\n'use strict';\n${renderedSources.join('\n')}\n})();\n`;
await writeFile(new URL('../js/app.js', import.meta.url), bundle, 'utf8');
console.log(`js/app.js bijgewerkt uit ${sourceManifest.length} bronbestanden.`);
