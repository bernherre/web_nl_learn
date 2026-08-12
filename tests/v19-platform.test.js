import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const read=(path)=>readFile(new URL(`../${path}`,import.meta.url),'utf8');
test('V19.3 centraliseert versie, design tokens en typografie', async()=>{
 const [pkgText,index,tokens,type,styles,config]=await Promise.all([read('package.json'),read('index.html'),read('css/tokens.css'),read('css/typography.css'),read('css/styles.css'),read('js/app-config.js')]);
 const pkg=JSON.parse(pkgText);
 assert.ok(index.includes(`v=${pkg.version}`)); assert.ok(config.includes(pkg.version)); assert.match(tokens,/--font-body/u); assert.match(tokens,/--font-display/u); assert.match(tokens,/Segoe UI Variable Text/u); assert.match(tokens,/Aptos Display/u); assert.match(type,/text-rendering/u); assert.doesNotMatch(styles,/--font-body\s*:/u); assert.doesNotMatch(styles,/--font-display\s*:/u); assert.doesNotMatch(index,/fonts\.googleapis|use\.typekit/u);
});
test('V19.3 heeft een controleerbare PWA-basis',async()=>{
 const [manifestText,sw,offline,pkgText]=await Promise.all([read('manifest.webmanifest'),read('service-worker.js'),read('offline.html'),read('package.json')]);
 const manifest=JSON.parse(manifestText); const pkg=JSON.parse(pkgText); const cacheVersion=pkg.version.replace(/\./gu,'-').replace(/[^a-z0-9-]/giu,'').replace(/-+/gu,'-');
 assert.equal(manifest.display,'standalone'); assert.ok(manifest.shortcuts.length>=3); assert.match(sw,/offline\.html/u); assert.match(sw,new RegExp(cacheVersion,'u')); assert.match(offline,/Je bent niet verbonden/u);
});
test('V19.3 documenteert architectuur en resterende schuld eerlijk',async()=>{
 const [architecture,debt,changelog]=await Promise.all([read('docs/architecture.md'),read('docs/technical-debt.md'),read('CHANGELOG.md')]);
 assert.match(architecture,/js\/app\.js/u); assert.match(debt,/Openstaand/u); assert.match(changelog,/19\.3\.0-rc\.1/u);
});
