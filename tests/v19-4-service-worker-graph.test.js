import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../service-worker.js', import.meta.url), 'utf8');

function workerContext({ fetchImpl = async () => { throw new Error('offline'); } } = {}) {
  const listeners = {};
  const context = {
    URL, Response, Promise, console,
    fetch: fetchImpl,
    caches: {
      open: async () => ({ put: async () => { throw new Error('quota'); }, addAll: async () => {} }),
      match: async () => undefined,
      keys: async () => [],
      delete: async () => true,
    },
    self: {
      location: { origin: 'http://localhost:8000' },
      clients: { claim: async () => {} },
      skipWaiting: () => {},
      addEventListener: (name, handler) => { listeners[name] = handler; },
    },
  };
  vm.createContext(context);
  vm.runInContext(source, context);
  return { context, listeners };
}

test('kennisgraafbestanden omzeilen de service-worker cache', () => {
  const { listeners } = workerContext();
  for (const path of ['content-knowledge-graph.json', 'content-knowledge-graph.js']) {
    let responded = false;
    listeners.fetch({
      request: { method: 'GET', url: `http://localhost:8000/data/${path}`, mode: 'cors', destination: path.endsWith('.js') ? 'script' : '' },
      respondWith: () => { responded = true; },
    });
    assert.equal(responded, false, `${path} mag niet door de service worker worden onderschept`);
  }
});

test('offline cachefuncties leveren altijd een Response en nooit null of een rejection', async () => {
  const { context } = workerContext();
  const request = { url: 'http://localhost:8000/data/missing.json' };
  const network = await context.networkFirst(request);
  const stale = await context.staleWhileRevalidate(request);
  assert.equal(network.status, 503);
  assert.equal(stale.status, 503);
  assert.match(await network.text(), /resource_unavailable/);
});

test('een cachequotafout verwerpt een geldige netwerkresponse niet', async () => {
  const expected = new Response('ok', { status: 200 });
  const { context } = workerContext({ fetchImpl: async () => expected.clone() });
  const response = await context.networkFirst({ url: 'http://localhost:8000/js/app.js' });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'ok');
});

test('de worker bevat geen expliciete Promise.reject-fallback meer', () => {
  assert.doesNotMatch(source, /Promise\.reject/u);
  assert.match(source, /isKnowledgeGraphAsset/u);
  assert.match(source, /cache quota error must never discard/u);
});


test('de applicatie registreert een versiegebonden worker en herlaadt na controllerwissel', async () => {
  const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /service-worker\.js\?v=\$\{APP_VERSION\}/u);
  assert.match(main, /controllerchange/u);
  assert.match(main, /location\.reload\(\)/u);
});
