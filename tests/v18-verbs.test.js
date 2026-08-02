import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (relativePath) => readFile(new URL(relativePath, import.meta.url), 'utf8');

test('de werkwoordeninterface biedt de actuele zichtbare filters en het detailpaneel', async () => {
  const html = await read('../index.html');

  for (const id of [
    'verb-search',
    'verb-regularity',
    'verb-semantic',
    'verb-level',
    'verb-separable',
    'verb-auxiliary',
    'verb-atlas-list',
    'verb-detail',
  ]) {
    assert.match(html, new RegExp(`id="${id}"`, 'u'), `${id} ontbreekt in de werkwoordeninterface`);
  }
});

test('de werkwoorddetails tonen gecontroleerde lexicale informatie zonder de oude verb-feature-markering', async () => {
  const main = await read('../js/main.js');

  assert.match(main, /Synoniemen, gebruik en voorbeelden/u);
  assert.match(main, /Synoniemen en verwante uitdrukkingen/u);
  assert.match(main, /Verschil in gebruik/u);
  assert.match(main, /Woordfamilie/u);
  assert.match(main, /vaste prepositie/u);
  assert.match(main, /wederkerend/u);
});

test('de klassieke browserbundle bevat de werkwoordenatlas vóór initialisatie', async () => {
  const app = await read('../js/app.js');

  const atlasDefinition = app.indexOf('const verbAtlas =');
  const firstUse = app.indexOf('function renderVerbDetail');
  assert.ok(atlasDefinition >= 0, 'verbAtlas ontbreekt in de klassieke bundle');
  assert.ok(firstUse >= 0, 'renderVerbDetail ontbreekt in de klassieke bundle');
  assert.ok(atlasDefinition < firstUse, 'verbAtlas moet vóór de werkwoordeninterface worden gedefinieerd');
});


test('de werkwoordenlijst toont dezelfde nagekeken definitie als de detailfiche', async () => {
  const main = await read('../js/main.js');

  assert.match(main, /const definitionPreview = reviewed \? verb\.meaning/u);
  assert.match(main, /class="verb-list-definition"/u);
  assert.match(main, /class="verb-list-meta"/u);
  assert.doesNotMatch(main, /<small>\$\{escapeHtml\(verb\.semanticLabel\)\} · \$\{escapeHtml\(verb\.auxiliary\)\}<\/small>/u);
});
