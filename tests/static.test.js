import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
async function read(path) { return readFile(new URL(path, root), 'utf8'); }

test('de startpagina is Nederlandstalig en werkt ook via dubbelklik', async () => {
  const html = await read('index.html');
  assert.match(html, /<html lang="nl"/);
  assert.match(html, /css\/styles\.css/);
  assert.match(html, /<script src="js\/app\.js"><\/script>/);
  assert.doesNotMatch(html, /type="module"/);
  assert.match(html, /manifest\.webmanifest/);
  assert.match(html, /images\/concept-map\.svg/);
});

test('de hoofdapp gebruikt geen twijfelachtige WAV-opnames', async () => {
  const html = await read('index.html');
  const main = await read('js/main.js');
  const app = await read('js/app.js');
  assert.doesNotMatch(html, /audio\/.*\.wav/i);
  assert.doesNotMatch(main, /audio\/.*\.wav/i);
  assert.match(main, /utterance\.lang = 'nl-NL'/);
  assert.match(app, /utterance\.lang = 'nl-NL'/);
  assert.match(html, /Normaal/);
  assert.match(html, /Langzaam/);
});

test('de inhoud bevat het leerpad A1 tot B2 en alle kerndomeinen', async () => {
  const content = await read('js/content.js');
  const { levels } = await import('../js/content.js');
  assert.deepEqual(levels.map((level) => level.id), ['A1', 'A2', 'B1', 'B2']);
  for (const domain of ['Grammatica', 'Werkwoorden', 'Semantiek', 'Woordenschat', 'Uitspraak', 'Communicatie']) assert.match(content, new RegExp(domain));
});

test('het oorspronkelijke naslagwerk blijft beschikbaar maar is niet de hoofdapp', async () => {
  const reference = await read('reference.html');
  const html = await read('index.html');
  assert.match(reference, /Capítulo 1/);
  assert.match(reference, /css\/reference\.css/);
  assert.match(html, /Oorspronkelijk naslagwerk/);
});

test('GitHub Pages voert tests uit voor de deployment', async () => {
  const workflow = await read('.github/workflows/deploy-pages.yml');
  assert.match(workflow, /npm run check/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});

test('alle lokale src- en href-assets op de startpagina bestaan', async () => {
  const html = await read('index.html');
  const references = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)]
    .map((match) => match[1])
    .filter((value) => !value.startsWith('http') && !value.startsWith('mailto:'));
  for (const reference of references) await assert.doesNotReject(readFile(new URL(reference, root)));
});

test('alle inhoudsafbeeldingen bestaan en hebben alternatieve tekst in de app', async () => {
  const { a1Themes, a2Themes, vocabulary } = await import('../js/content.js');
  const imageReferences = [...new Set([...a1Themes, ...a2Themes, ...vocabulary].map((item) => item.image).filter(Boolean))];
  assert.ok(imageReferences.length >= 16);
  for (const reference of imageReferences) await assert.doesNotReject(readFile(new URL(reference, root)));
  for (const item of vocabulary) assert.ok(item.alt);
});

test('de offline cache bevat de kernbestanden', async () => {
  const worker = await read('service-worker.js');
  for (const asset of ['index.html', 'css/styles.css', 'js/app.js', 'js/main.js', 'js/content.js', 'images/concept-map.svg']) assert.match(worker, new RegExp(asset.replaceAll('.', '\\.')));
});


test('de A1-cursus bevat acht volledige thema’s met eigen oefeningen', async () => {
  const { a1Themes } = await import('../js/content.js');
  const html = await read('index.html');
  assert.deepEqual(a1Themes.map((theme) => theme.id), ['hallo', 'school', 'wonen', 'eten', 'gezondheid', 'kleding', 'reizen', 'vrije-tijd']);
  assert.match(html, /id="page-a1"/);
  assert.match(html, /id="a1-theme-grid"/);
  assert.match(html, /data-page="a1"/);
  for (const theme of a1Themes) assert.ok(theme.exercise?.question && theme.exercise?.options?.length >= 3);
});

test('de A1-route gebruikt thematische beelden en browseruitspraak', async () => {
  const content = await read('js/content.js');
  const main = await read('js/main.js');
  for (const image of ['theme-hallo.svg', 'theme-school.svg', 'theme-wonen.svg', 'theme-eten.svg', 'theme-dokter.svg', 'theme-kleding.svg', 'theme-reizen.svg', 'theme-vrije-tijd.svg']) {
    assert.match(content, new RegExp(image.replace('.', '\.')));
    await assert.doesNotReject(readFile(new URL(`images/${image}`, root)));
  }
  assert.match(main, /renderA1Themes/);
  assert.match(main, /renderA2Themes/);
  assert.match(main, /data-course-answer/);
  assert.match(main, /class="sound-button speak"/);
});

test('de browserbundle heeft geen imports of exports nodig', async () => {
  const app = await read('js/app.js');
  assert.doesNotMatch(app, /^import\s/m);
  assert.doesNotMatch(app, /^export\s/m);
  assert.match(app, /initialize\(\);/);
});


test('elk A1- en A2-thema bevat minimaal honderdtwintig unieke woorden en combinaties', async () => {
  const { a1Themes, a2Themes } = await import('../js/content.js');
  assert.equal(a1Themes.length, 8);
  assert.equal(a2Themes.length, 8);
  for (const [level, themes] of [['A1', a1Themes], ['A2', a2Themes]]) {
    for (const theme of themes) {
      const words = Object.values(theme.wordGroups).flat();
      assert.ok(words.length >= 120, `${level} ${theme.title} heeft slechts ${words.length} woorden`);
      assert.equal(new Set(words).size, words.length, `${level} ${theme.title} bevat dubbele woorden`);
      assert.ok(theme.vocabulary.length >= 8);
      assert.ok(theme.dialogue.length >= 4);
    }
  }
});

test('de A2-route gebruikt de acht gepubliceerde hoofdthema’s als curriculaire referentie', async () => {
  const { a2Themes } = await import('../js/content.js');
  assert.deepEqual(a2Themes.map((theme) => theme.title), ['Verhuizen', 'Nederland', 'Kinderen', 'Winkels', 'Opleidingen', 'Werk zoeken', 'Werken', 'De gemeente']);
  const html = await read('index.html');
  assert.match(html, /id="page-a2"/);
  assert.match(html, /id="a2-theme-grid"/);
  assert.match(html, /1000\+/);
});


test('de verdiepingsbibliotheek bevat uitgebreide grammaticale systemen', async () => {
  const { deepGrammarTopics, prepositionEntries, fixedPrepositionCombinations, separableVerbBank, conjunctionBank, idiomBank } = await import('../js/depth-content.js');
  assert.ok(deepGrammarTopics.length >= 12);
  assert.ok(prepositionEntries.length >= 35);
  assert.ok(fixedPrepositionCombinations.length >= 80);
  assert.ok(separableVerbBank.length >= 80);
  assert.ok(separableVerbBank.filter((verb) => verb.models).length >= 12);
  assert.ok(conjunctionBank.length >= 40);
  assert.ok(idiomBank.length >= 75);
});

test('scheidbare werkwoorden tonen hun positie in zes zinsconstructies', async () => {
  const { separableVerbBank } = await import('../js/depth-content.js');
  const opstaan = separableVerbBank.find((verb) => verb.infinitive === 'opstaan');
  assert.ok(opstaan?.models);
  assert.match(opstaan.models.main, /sta .* op/);
  assert.match(opstaan.models.perfect, /opgestaan/);
  assert.match(opstaan.models.subordinate, /opsta/);
  assert.match(opstaan.models.te, /op te staan/);
});

test('de interface bevat A2 en de afzonderlijke taalstructurenbibliotheek', async () => {
  const html = await read('index.html');
  const main = await read('js/main.js');
  for (const id of ['page-a2', 'a2-theme-grid', 'page-taalstructuren', 'structure-tabs', 'structure-content']) assert.match(html, new RegExp(`id="${id}"`));
  for (const renderer of ['renderPrepositionStructures', 'renderSeparableStructures', 'renderConjunctionStructures', 'renderIdiomStructures']) assert.match(main, new RegExp(renderer));
});

test('de zestien thema’s bevatten samen ruim tweeduizend unieke leeritems binnen hun thema', async () => {
  const { a1Themes, a2Themes } = await import('../js/content.js');
  const counts = [...a1Themes, ...a2Themes].map((theme) => Object.values(theme.wordGroups).flat().length);
  assert.ok(counts.reduce((sum, count) => sum + count, 0) >= 2000);
});


test('de klassieke browserbundle bevat alle verdiepingsbanken voor gebruik', async () => {
  const app = await read('js/app.js');
  const expandedDeclaration = app.indexOf('const expandedWordGroups');
  const expandedUse = app.indexOf('expandedWordGroups[theme.id]');
  const supplementDeclaration = app.indexOf('const supplementaryWordGroups');
  const supplementUse = app.indexOf('supplementaryWordGroups[theme.id]');

  assert.ok(expandedDeclaration >= 0, 'expandedWordGroups ontbreekt in js/app.js');
  assert.ok(supplementDeclaration >= 0, 'supplementaryWordGroups ontbreekt in js/app.js');
  assert.ok(expandedDeclaration < expandedUse, 'expandedWordGroups wordt gebruikt voor de declaratie');
  assert.ok(supplementDeclaration < supplementUse, 'supplementaryWordGroups wordt gebruikt voor de declaratie');
});

test('de werkwoordenatlas bevat een grote, gefilterde verzameling met volledige vervoeging', async () => {
  const { verbAtlas } = await import('../js/verb-atlas.js');
  assert.ok(verbAtlas.length >= 1800);
  assert.ok(verbAtlas.filter((verb) => verb.regularity === 'regelmatig').length >= 800);
  assert.ok(verbAtlas.filter((verb) => verb.regularity === 'onregelmatig').length >= 900);
  assert.ok(verbAtlas.filter((verb) => verb.separable).length >= 1000);
  for (const semantic of ['handeling', 'beweging', 'verandering', 'toestand', 'gebeurtenis', 'modaal']) {
    assert.ok(verbAtlas.some((verb) => verb.semantic === semantic), `categorie ${semantic} ontbreekt`);
  }
  for (const verb of verbAtlas) {
    assert.equal(verb.presentForms.length, 6, `${verb.infinitive} mist tegenwoordige vormen`);
    assert.equal(verb.pastForms.length, 6, `${verb.infinitive} mist verleden vormen`);
    assert.ok(verb.perfectForms.length >= 2, `${verb.infinitive} mist voltooide vormen`);
    assert.ok(verb.participle, `${verb.infinitive} mist voltooid deelwoord`);
  }
});

test('de werkwoordeninterface ondersteunt zoeken en filters', async () => {
  const html = await read('index.html');
  const main = await read('js/main.js');
  for (const id of ['verb-search', 'verb-regularity', 'verb-semantic', 'verb-level', 'verb-separable', 'verb-auxiliary', 'verb-atlas-list']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(main, /getFilteredVerbs/);
  assert.match(main, /data-verb-infinitive/);
  assert.match(main, /renderConjugationTable/);
});

test('de klassieke bundle bevat de volledige werkwoordenatlas', async () => {
  const app = await read('js/app.js');
  assert.match(app, /const verbAtlas =/);
  assert.match(app, /"infinitive":"zijn"/);
  assert.match(app, /"semantic":"beweging"/);
});

test('de vragenmodule bevat een volledige leerlijn van A1 tot B2', async () => {
  const { questionTopics, pronominalAdverbs, questionPractice } = await import('../js/questions-content.js');
  const html = await read('index.html');
  assert.equal(questionTopics.length, 14);
  assert.ok(pronominalAdverbs.length >= 20);
  assert.ok(questionPractice.length >= 10);
  assert.deepEqual([...new Set(questionTopics.map((topic) => topic.level))], ['A1', 'A2', 'B1', 'B2']);
  for (const id of ['page-vragen', 'question-filters', 'question-list', 'question-detail', 'question-matrix', 'question-practice']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test('waar-daar-er-hier-patronen behandelen zaken, personen en gesplitste vormen', async () => {
  const { pronominalAdverbs } = await import('../js/questions-content.js');
  for (const form of ['waarmee', 'waarop', 'waarover', 'waarvoor', 'waaraan', 'waarvan', 'waarin', 'waaruit', 'waarnaar', 'waardoor']) {
    assert.ok(pronominalAdverbs.some((item) => item.question === form), `${form} ontbreekt`);
  }
  const met = pronominalAdverbs.find((item) => item.question === 'waarmee');
  assert.equal(met.person, 'met wie');
  assert.match(met.splitExample, /Waar .* mee\?/);
  const op = pronominalAdverbs.find((item) => item.question === 'waarop');
  assert.equal(op.reference, 'erop');
  assert.equal(op.demonstrative, 'daarop');
});

test('de klassieke bundle en offlinecache bevatten de vragenmodule', async () => {
  const app = await read('js/app.js');
  const worker = await read('service-worker.js');
  assert.match(app, /const questionTopics =/);
  assert.match(app, /const pronominalAdverbs =/);
  assert.match(app, /function renderQuestions\(\)/);
  assert.match(worker, /questions-content\.js/);
  assert.match(worker, /questions-map\.svg/);
});
