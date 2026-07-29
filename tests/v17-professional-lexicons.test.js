import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { professionalDomains, professionalConcepts, professionalStats } from '../js/professional-content.js';

const root = new URL('../', import.meta.url);
async function read(path) { return readFile(new URL(path, root), 'utf8'); }

test('V17 bevat zes professionele begrippenatlassen', () => {
  assert.deepEqual(professionalDomains.map((domain) => domain.id), ['bedrijfskunde', 'marketing', 'economie', 'zorg', 'overheid', 'bouw']);
  assert.equal(professionalStats.total, 304);
  assert.equal(professionalStats.byDomain.bouw, 64);
  for (const id of ['bedrijfskunde', 'marketing', 'economie', 'zorg', 'overheid']) assert.equal(professionalStats.byDomain[id], 48);
});

test('elk professioneel begrip heeft naam, definitie, niveau en categorie', () => {
  for (const concept of professionalConcepts) {
    assert.ok(concept.term.length >= 3, `${concept.id} mist een bruikbare term`);
    assert.ok(concept.definition.length >= 45, `${concept.term} heeft een te korte definitie`);
    assert.ok(['A2', 'B1', 'B2'].includes(concept.level), `${concept.term} heeft geen geldig niveau`);
    assert.ok(concept.domain && concept.category);
  }
});

test('de vaklexiconinterface is zichtbaar, doorzoekbaar en progressief', async () => {
  const html = await read('index.html');
  const main = await read('js/main.js');
  for (const id of ['page-vaklexicon', 'professional-domain-tabs', 'professional-category-filters', 'professional-search', 'professional-concept-grid', 'professional-load-more']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(html, /data-page="vaklexicon"/);
  assert.match(main, /renderProfessionalLexicon/);
  assert.match(main, /professionalLimit/);
  assert.match(main, /data-professional-domain/);
  assert.match(main, /data-professional-category/);
});

test('de klassieke bundle en offlinecache bevatten het vaklexicon', async () => {
  const app = await read('js/app.js');
  const worker = await read('service-worker.js');
  assert.match(app, /const professionalDomainDefinitions =/);
  assert.match(app, /de begroting/);
  assert.match(app, /de vergunning/);
  assert.match(app, /de draagconstructie/);
  assert.match(worker, /professional-content\.js/);
});
