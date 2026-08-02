import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const pkg = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
const version = pkg.version;
const cacheVersion = version.replace(/\./gu, '-').replace(/[^a-z0-9-]/giu, '').replace(/-+/gu, '-');
async function update(path, transform) {
  const url = new URL(path, root);
  const source = await readFile(url, 'utf8');
  const next = transform(source);
  if (next !== source) await writeFile(url, next, 'utf8');
}
await update('index.html', (source) => source
  .replace(/css\/tokens\.css\?v=[^"]+/gu, `css/tokens.css?v=${version}`)
  .replace(/css\/typography\.css\?v=[^"]+/gu, `css/typography.css?v=${version}`)
  .replace(/css\/styles\.css\?v=[^"]+/gu, `css/styles.css?v=${version}`)
  .replace(/js\/app\.js\?v=[^"]+/gu, `js/app.js?v=${version}`));
await update('js/app-config.js', () => `export const APP_VERSION = '${version}';
export const APP_RELEASE = 'V19.3 RC1';
`);
await update('service-worker.js', (source) => source
  .replace(/const CACHE = '[^']+';/u, `const CACHE = 'nederlands-gewoon-doen-v${cacheVersion}';`)
  .replace(/const APP_VERSION = '[^']+';/u, `const APP_VERSION = '${version}';`));
console.log(`Versie gesynchroniseerd: ${version}`);
