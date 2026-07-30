import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const required = ['index.html','offline.html','manifest.webmanifest','service-worker.js','css/styles.css','css/tokens.css','css/themes.css','css/typography.css','css/accessibility.css','js/app.js','LICENSE','CHANGELOG.md'];
for (const file of required) await access(new URL(`../${file}`, import.meta.url), constants.R_OK);
const [pkgText, index, bundle, sw] = await Promise.all([
  readFile(new URL('../package.json', import.meta.url), 'utf8'),
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../js/app.js', import.meta.url), 'utf8'),
  readFile(new URL('../service-worker.js', import.meta.url), 'utf8')
]);
const pkg = JSON.parse(pkgText);
if (!index.includes(`v${pkg.version}`)) throw new Error('De zichtbare versie komt niet overeen met package.json.');
if (!bundle.includes(`version: '${pkg.version}'`)) throw new Error('De browserbundle bevat niet de juiste applicatieversie.');
if (!sw.includes(pkg.version.replaceAll('.', '-'))) throw new Error('De service-workercache is niet gekoppeld aan de applicatieversie.');
if (!bundle.includes('function enrichVerbAtlas')) throw new Error('De verrijkte werkwoordenmodule ontbreekt in de browserbundle.');
console.log(`Projectvalidatie geslaagd voor v${pkg.version}.`);
