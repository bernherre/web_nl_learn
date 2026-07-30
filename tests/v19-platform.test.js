import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('V19 centraliseert versie, design tokens en typografie', async () => {
  const [pkgText, index, tokens, type] = await Promise.all([read('package.json'), read('index.html'), read('css/tokens.css'), read('css/typography.css')]);
  const pkg = JSON.parse(pkgText);
  assert.equal(pkg.version, '19.0.2');
  assert.match(index, /v19\.0\.2/u);
  assert.match(tokens, /--font-body/u);
  assert.match(type, /text-rendering/u);
});

test('V19 heeft een controleerbare PWA-basis', async () => {
  const [manifestText, sw, offline] = await Promise.all([read('manifest.webmanifest'), read('service-worker.js'), read('offline.html')]);
  const manifest = JSON.parse(manifestText);
  assert.equal(manifest.display, 'standalone');
  assert.ok(manifest.shortcuts.length >= 3);
  assert.match(sw, /offline\.html/u);
  assert.match(sw, /v19-0-2/u);
  assert.match(offline, /Je bent niet verbonden/u);
});

test('V19 documenteert architectuur en resterende schuld eerlijk', async () => {
  const [architecture, debt, changelog] = await Promise.all([read('docs/architecture.md'), read('docs/technical-debt.md'), read('CHANGELOG.md')]);
  assert.match(architecture, /js\/app\.js/u);
  assert.match(debt, /Openstaand/u);
  assert.match(changelog, /19\.0\.0/u);
});
