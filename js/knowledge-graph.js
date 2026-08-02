const KNOWLEDGE_GRAPH_URL = './data/content-knowledge-graph.json';
const KNOWLEDGE_GRAPH_SCRIPT_URL = './data/content-knowledge-graph.js';

const graphTypeLabels = {
  graph_root: 'Overzicht', source_collection: 'Collectie', level: 'Niveau', theme: 'Thema', spiral_theme: 'Spiraalthema', term: 'Term', vocabulary: 'Woordenschat',
  grammar: 'Grammatica', question_topic: 'Vraagstructuur', structure: 'Taalstructuur', idiom: 'Idiomatiek', concept: 'Concept',
  technical_concept: 'Vakbegrip', professional_concept: 'Professioneel begrip', listening: 'Luisteren', reading: 'Lezen', writing: 'Schrijven',
  logic_relation: 'Logische relatie', verb: 'Werkwoord', sense: 'Betekenis', usage: 'Gebruik', example: 'Voorbeeld', synonym_term: 'Synoniem',
  exercise: 'Oefening', practice: 'Mini-oefening', exercise_topic: 'Oefeningsthema', exercise_type: 'Oefeningstype', reference_group: 'Naslaggroep', category: 'Categorie', domain: 'Domein', issue: 'Controlepunt', known_error: 'Veelgemaakte fout',
  semantic: 'Betekenisdomein', auxiliary: 'Hulpwerkwoord', regularity: 'Vervoeging', preposition: 'Voorzetsel',
};

const graphRelationLabels = {
  has_level: 'niveau', contains_term: 'bevat', teaches_word: 'leert', used_in_theme: 'gebruikt in thema', documents_error: 'beschrijft fout',
  has_part: 'onderdeel', has_semantic_domain: 'betekenisdomein', uses_auxiliary: 'hulpwerkwoord', has_regularity: 'vervoeging',
  requires_preposition: 'vaste prepositie', has_issue: 'controlepunt', has_sense: 'betekenis', has_usage: 'gebruik', has_example: 'voorbeeld',
  has_synonym: 'synoniem', used_in_content: 'komt voor in', practises_topic: 'oefent thema', has_exercise_type: 'oefeningstype',
  practised_by: 'geoefend in', related_to: 'verbonden met', has_level_variant: 'niveauvariant', has_category: 'categorie', has_collection: 'collectie', part_of_collection: 'broncollectie',
};

const graphModeRelations = {
  all: null,
  synonyms: new Set(['has_sense', 'has_synonym', 'has_usage', 'has_example']),
  usage: new Set(['used_in_theme', 'used_in_content', 'practised_by', 'requires_preposition', 'has_semantic_domain', 'has_usage', 'has_example']),
  issues: new Set(['has_issue', 'documents_error']),
  exercises: new Set(['practised_by', 'practises_topic', 'has_exercise_type']),
};

function graphEscape(value) {
  return String(value ?? '').replace(/[&<>'"]/gu, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function graphNormalise(value) {
  return String(value ?? '').trim().toLocaleLowerCase('nl-NL').normalize('NFKD').replace(/[\u0300-\u036f]/gu, '');
}

function compactNumber(value) {
  return new Intl.NumberFormat('nl-NL').format(Number(value) || 0);
}

function shortLabel(value, max = 24) {
  const cleaned = String(value ?? '').replace(/\s+/gu, ' ').trim();
  return cleaned.length > max ? `${cleaned.slice(0, max - 1)}…` : cleaned;
}


function loadKnowledgeGraphScript() {
  if (globalThis.__NL_CONTENT_KNOWLEDGE_GRAPH__) return Promise.resolve(globalThis.__NL_CONTENT_KNOWLEDGE_GRAPH__);
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${KNOWLEDGE_GRAPH_SCRIPT_URL}"]`);
    const script = existing || document.createElement('script');
    const finish = () => globalThis.__NL_CONTENT_KNOWLEDGE_GRAPH__
      ? resolve(globalThis.__NL_CONTENT_KNOWLEDGE_GRAPH__)
      : reject(new Error('Het lokale graafbestand bevat geen geldige gegevens.'));
    script.addEventListener('load', finish, { once: true });
    script.addEventListener('error', () => reject(new Error('Het lokale graafbestand kon niet worden geladen.')), { once: true });
    if (!existing) {
      script.src = KNOWLEDGE_GRAPH_SCRIPT_URL;
      script.defer = true;
      document.head.append(script);
    }
  });
}

async function readKnowledgeGraph() {
  if (globalThis.__NL_CONTENT_KNOWLEDGE_GRAPH__) return globalThis.__NL_CONTENT_KNOWLEDGE_GRAPH__;
  try {
    const response = await fetch(KNOWLEDGE_GRAPH_URL, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  } catch (fetchError) {
    try {
      return await loadKnowledgeGraphScript();
    } catch (scriptError) {
      throw new Error(`${fetchError.message}; ${scriptError.message}`);
    }
  }
}

function routeForNode(node) {
  const routes = {
    verb: 'werkwoorden', grammar: 'grammatica', question_topic: 'vragen', structure: 'taalstructuren', idiom: 'taalstructuren',
    vocabulary: 'woordenschat', listening: 'luisteren', reading: 'lezen-schrijven', writing: 'lezen-schrijven', exercise: 'oefenen',
    technical_concept: node?.source === 'software' ? 'software' : node?.source === 'natuurkunde' ? 'natuurkunde' : 'wiskunde',
    professional_concept: 'vaklexicon', theme: node?.level?.toLocaleLowerCase('nl-NL'), level: node?.label?.toLocaleLowerCase('nl-NL'),
  };
  return routes[node?.type] || '';
}

export function createKnowledgeGraphExplorer({ onOpenPage, onOpenVerb, notify } = {}) {
  let graph = null;
  let nodesById = new Map();
  let adjacency = new Map();
  let loaded = false;
  let loading = false;
  let selectedId = 'verb:aaien';
  let resultLimit = 80;
  const state = { query: '', type: 'all', level: 'all', mode: 'all', issuesOnly: false };

  const get = (id) => document.getElementById(id);
  const elements = () => ({
    status: get('knowledge-graph-status'), stats: get('knowledge-graph-stats'), search: get('knowledge-graph-search'),
    type: get('knowledge-graph-type'), level: get('knowledge-graph-level'), mode: get('knowledge-graph-mode'), issuesOnly: get('knowledge-graph-issues-only'),
    results: get('knowledge-graph-results'), resultCount: get('knowledge-graph-result-count'), loadMore: get('knowledge-graph-load-more'),
    canvas: get('knowledge-graph-canvas'), detail: get('knowledge-graph-detail'), legend: get('knowledge-graph-legend'),
  });

  function buildIndexes() {
    nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
    adjacency = new Map();
    for (const edge of graph.edges) {
      if (!adjacency.has(edge.source)) adjacency.set(edge.source, []);
      if (!adjacency.has(edge.target)) adjacency.set(edge.target, []);
      adjacency.get(edge.source).push(edge);
      adjacency.get(edge.target).push(edge);
    }
  }

  function relationNeighbour(edge, nodeId) {
    return edge.source === nodeId ? edge.target : edge.source;
  }

  function relationDirection(edge, nodeId) {
    return edge.source === nodeId ? 'out' : 'in';
  }

  function matchesFilters(node) {
    const query = graphNormalise(state.query);
    if (query && !graphNormalise(`${node.label} ${node.subtitle} ${node.searchText}`).includes(query)) return false;
    if (state.type !== 'all' && node.type !== state.type) return false;
    if (state.level !== 'all' && node.level !== state.level && !adjacency.get(node.id)?.some((edge) => relationNeighbour(edge, node.id) === `level:${state.level}`)) return false;
    if (state.issuesOnly && node.type !== 'issue' && !adjacency.get(node.id)?.some((edge) => edge.type === 'has_issue')) return false;
    return true;
  }

  function sortedResults() {
    const priority = { issue: 0, verb: 1, sense: 2, usage: 3, theme: 4, grammar: 5, structure: 6, exercise: 8 };
    return graph.nodes.filter(matchesFilters).sort((a, b) => {
      const selectedDelta = Number(b.id === selectedId) - Number(a.id === selectedId);
      if (selectedDelta) return selectedDelta;
      const statusDelta = Number(b.status === 'error' || b.status === 'warning' || b.status === 'unreviewed') - Number(a.status === 'error' || a.status === 'warning' || a.status === 'unreviewed');
      if (statusDelta) return statusDelta;
      return (priority[a.type] ?? 7) - (priority[b.type] ?? 7) || a.label.localeCompare(b.label, 'nl');
    });
  }

  function renderStats() {
    const el = elements();
    if (!el.stats) return;
    const metadata = graph.metadata;
    el.stats.innerHTML = [
      ['Nodes', metadata.nodeCount, 'alle inhoudseenheden'],
      ['Relaties', metadata.edgeCount, 'synoniemen, gebruik en structuur'],
      ['Werkwoorden nagekeken', metadata.reviewedVerbs, `van ${metadata.reviewedVerbs + metadata.unreviewedVerbs}`],
      ['Open controles', metadata.issueCount, 'vooral lexicale fiches'],
    ].map(([label, value, note]) => `<article><span>${graphEscape(label)}</span><strong>${compactNumber(value)}</strong><small>${graphEscape(note)}</small></article>`).join('');
  }

  function populateFilters() {
    const el = elements();
    if (!el.type || el.type.options.length > 1) return;
    const preferred = ['verb', 'sense', 'synonym_term', 'usage', 'theme', 'grammar', 'structure', 'vocabulary', 'exercise', 'issue'];
    const types = Object.keys(graph.metadata.typeCounts).sort((a, b) => {
      const ai = preferred.indexOf(a); const bi = preferred.indexOf(b);
      return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi) || (graphTypeLabels[a] || a).localeCompare(graphTypeLabels[b] || b, 'nl');
    });
    for (const type of types) {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = `${graphTypeLabels[type] || type} (${compactNumber(graph.metadata.typeCounts[type])})`;
      el.type.append(option);
    }
  }

  function renderResults() {
    const el = elements();
    const results = sortedResults();
    if (el.resultCount) el.resultCount.textContent = `${compactNumber(results.length)} gevonden`;
    if (el.results) {
      el.results.innerHTML = results.slice(0, resultLimit).map((node) => {
        const issue = node.type === 'issue' || ['warning', 'error', 'unreviewed'].includes(node.status);
        return `<button class="knowledge-result ${node.id === selectedId ? 'active' : ''}" type="button" data-graph-node="${graphEscape(node.id)}" aria-pressed="${node.id === selectedId}">
          <span class="knowledge-result-type">${graphEscape(graphTypeLabels[node.type] || node.type)}${node.level ? ` · ${graphEscape(node.level)}` : ''}</span>
          <strong>${graphEscape(shortLabel(node.label, 60))}</strong>
          <small>${graphEscape(shortLabel(node.subtitle || node.source, 100))}</small>
          ${issue ? `<span class="knowledge-status ${graphEscape(node.status)}">${node.type === 'issue' ? 'controle' : node.status === 'unreviewed' ? 'niet nagekeken' : graphEscape(node.status)}</span>` : ''}
        </button>`;
      }).join('') || '<p class="empty-state">Geen inhoud gevonden met deze filters.</p>';
    }
    if (el.loadMore) {
      el.loadMore.hidden = results.length <= resultLimit;
      el.loadMore.textContent = `Toon meer (${compactNumber(results.length - resultLimit)})`;
    }
  }

  function relationAllowed(edge) {
    const allowed = graphModeRelations[state.mode];
    return !allowed || allowed.has(edge.type);
  }

  function neighbourhood(startId) {
    const foundNodes = new Map();
    const foundEdges = new Map();
    const queue = [{ id: startId, depth: 0 }];
    const maxDepth = ['synonyms', 'exercises'].includes(state.mode) ? 2 : 1;
    const maxNodes = state.mode === 'all' ? 25 : 32;
    foundNodes.set(startId, nodesById.get(startId));

    while (queue.length && foundNodes.size < maxNodes) {
      const current = queue.shift();
      for (const edge of adjacency.get(current.id) || []) {
        if (!relationAllowed(edge)) continue;
        const neighbourId = relationNeighbour(edge, current.id);
        const neighbour = nodesById.get(neighbourId);
        if (!neighbour) continue;
        if (state.mode === 'issues' && !['issue', 'known_error', 'verb', 'grammar', 'question_topic'].includes(neighbour.type) && neighbourId !== startId) continue;
        foundEdges.set(edge.id, edge);
        if (!foundNodes.has(neighbourId)) {
          foundNodes.set(neighbourId, neighbour);
          if (current.depth < maxDepth) queue.push({ id: neighbourId, depth: current.depth + 1 });
          if (foundNodes.size >= maxNodes) break;
        }
      }
    }
    return { nodes: [...foundNodes.values()].filter(Boolean), edges: [...foundEdges.values()] };
  }

  function graphNodeClass(node) {
    if (node.type === 'issue' || node.type === 'known_error') return 'issue';
    if (node.type === 'verb' || node.type === 'sense' || node.type === 'synonym_term') return 'language';
    if (node.type === 'exercise' || node.type === 'exercise_topic') return 'exercise';
    if (node.type === 'theme' || node.type === 'level') return 'curriculum';
    return 'content';
  }

  function renderGraph() {
    const el = elements();
    if (!el.canvas) return;
    const selected = nodesById.get(selectedId) || nodesById.get('graph:all-content') || graph.nodes[0];
    if (!selected) return;
    selectedId = selected.id;
    const neighbourhoodData = neighbourhood(selected.id);
    const neighbours = neighbourhoodData.nodes.filter((node) => node.id !== selected.id);
    const width = 900; const height = 560; const cx = width / 2; const cy = height / 2;
    const positions = new Map([[selected.id, { x: cx, y: cy }]]);
    const firstRing = neighbours.slice(0, 14);
    const secondRing = neighbours.slice(14);
    firstRing.forEach((node, index) => {
      const angle = (Math.PI * 2 * index / Math.max(firstRing.length, 1)) - Math.PI / 2;
      positions.set(node.id, { x: cx + Math.cos(angle) * 205, y: cy + Math.sin(angle) * 178 });
    });
    secondRing.forEach((node, index) => {
      const angle = (Math.PI * 2 * index / Math.max(secondRing.length, 1)) - Math.PI / 2 + 0.15;
      positions.set(node.id, { x: cx + Math.cos(angle) * 365, y: cy + Math.sin(angle) * 250 });
    });

    const visibleIds = new Set(positions.keys());
    const lines = neighbourhoodData.edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target)).map((edge) => {
      const start = positions.get(edge.source); const end = positions.get(edge.target);
      const mx = (start.x + end.x) / 2; const my = (start.y + end.y) / 2;
      return `<g class="knowledge-edge"><line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}"></line><text x="${mx}" y="${my - 4}">${graphEscape(shortLabel(graphRelationLabels[edge.type] || edge.label, 18))}</text></g>`;
    }).join('');
    const nodeMarkup = [...positions.entries()].map(([id, position]) => {
      const node = nodesById.get(id);
      const active = id === selected.id;
      const w = active ? 180 : 142; const h = active ? 68 : 54;
      return `<g class="knowledge-node ${graphNodeClass(node)} ${active ? 'selected' : ''}" data-graph-node="${graphEscape(id)}" role="button" aria-label="${graphEscape(node.label)}" transform="translate(${position.x - w / 2} ${position.y - h / 2})">
        <rect width="${w}" height="${h}" rx="14"></rect>
        <text class="node-type" x="${w / 2}" y="${active ? 20 : 17}" text-anchor="middle">${graphEscape(graphTypeLabels[node.type] || node.type)}</text>
        <text class="node-label" x="${w / 2}" y="${active ? 43 : 37}" text-anchor="middle">${graphEscape(shortLabel(node.label, active ? 25 : 19))}</text>
        ${node.level ? `<text class="node-level" x="${w - 9}" y="12" text-anchor="end">${graphEscape(node.level)}</text>` : ''}
      </g>`;
    }).join('');
    el.canvas.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="knowledge-graph-svg-title knowledge-graph-svg-desc">
      <title id="knowledge-graph-svg-title">Relaties rond ${graphEscape(selected.label)}</title>
      <desc id="knowledge-graph-svg-desc">${compactNumber(neighbours.length)} zichtbare verbonden inhoudseenheden. Gebruik de resultatenlijst of klik op een node om verder te navigeren.</desc>
      ${lines}${nodeMarkup}
    </svg>`;
  }

  function renderPrimitive(value) {
    if (Array.isArray(value)) return value.length ? `<ul>${value.slice(0, 12).map((item) => `<li>${graphEscape(typeof item === 'object' ? JSON.stringify(item) : item)}</li>`).join('')}</ul>` : '';
    if (value && typeof value === 'object') return `<pre>${graphEscape(JSON.stringify(value, null, 2))}</pre>`;
    return `<p>${graphEscape(value)}</p>`;
  }

  function renderDetail() {
    const el = elements();
    if (!el.detail) return;
    const node = nodesById.get(selectedId);
    if (!node) return;
    const relations = adjacency.get(node.id) || [];
    const relationGroups = relations.reduce((acc, edge) => {
      const label = graphRelationLabels[edge.type] || edge.label || edge.type;
      (acc[label] ||= []).push({ edge, node: nodesById.get(relationNeighbour(edge, node.id)), direction: relationDirection(edge, node.id) });
      return acc;
    }, {});
    const status = node.type === 'verb' ? (node.data.reviewed ? 'Handmatig nagekeken' : 'Lexicale controle nodig') : node.type === 'issue' ? (node.data.severity === 'error' ? 'Fout' : 'Controle nodig') : '';
    const route = routeForNode(node);
    const verbDetails = node.type === 'verb' ? `<div class="knowledge-detail-grid">
      <div><span>Definitie</span><p>${graphEscape(node.data.meaning || 'Nog niet handmatig nagekeken.')}</p></div>
      <div><span>Synoniemen</span><p>${node.data.synonyms?.length ? node.data.synonyms.map(graphEscape).join(' · ') : 'Nog niet gecontroleerd.'}</p></div>
      <div><span>Gebruik</span><p>${graphEscape(node.data.usage || 'Nog niet gecontroleerd.')}</p></div>
      <div><span>Grammatica</span><p>${graphEscape([node.data.regularity, node.data.auxiliary ? `hulpwerkwoord ${node.data.auxiliary}` : '', node.data.separable ? 'scheidbaar' : 'niet scheidbaar', node.data.fixedPreposition ? `vaste prepositie ${node.data.fixedPreposition}` : ''].filter(Boolean).join(' · '))}</p></div>
    </div>` : '';
    const issueDetails = node.type === 'issue' ? `<div class="knowledge-issue-detail"><strong>${graphEscape((node.data.messages || []).join(' · '))}</strong><ul>${(node.data.codes || []).map((code) => `<li><code>${graphEscape(code)}</code></li>`).join('')}</ul></div>` : '';
    const exerciseDetails = node.type === 'exercise' ? `<div class="knowledge-detail-grid"><div><span>Opdracht</span><p>${graphEscape(node.data.prompt)}</p></div><div><span>Antwoord</span><p>${graphEscape(node.data.answer)}</p></div><div><span>Uitleg</span><p>${graphEscape(node.data.explanation)}</p></div><div><span>Classificatie</span><p>${graphEscape(`${node.level} · ${node.data.topic} · ${node.data.exerciseType}`)}</p></div></div>` : '';
    const genericData = !['verb', 'issue', 'exercise'].includes(node.type) && node.data && Object.keys(node.data).length
      ? `<details class="knowledge-raw-data"><summary>Inhoudsvelden bekijken</summary>${Object.entries(node.data).filter(([, value]) => value !== '' && value !== null && value !== undefined && (!Array.isArray(value) || value.length)).slice(0, 12).map(([key, value]) => `<section><strong>${graphEscape(key)}</strong>${renderPrimitive(value)}</section>`).join('')}</details>` : '';

    el.detail.innerHTML = `<div class="knowledge-detail-heading"><div><span class="kicker">${graphEscape(graphTypeLabels[node.type] || node.type)}${node.level ? ` · ${graphEscape(node.level)}` : ''}</span><h2>${graphEscape(node.label)}</h2><p>${graphEscape(node.subtitle || node.source)}</p></div>${status ? `<span class="knowledge-detail-status ${graphEscape(node.status)}">${graphEscape(status)}</span>` : ''}</div>
      ${verbDetails}${issueDetails}${exerciseDetails}${genericData}
      ${route ? `<button class="secondary-button" type="button" data-graph-open-page="${graphEscape(route)}" ${node.type === 'verb' ? `data-graph-open-verb="${graphEscape(node.label)}"` : ''}>Open in de leeromgeving →</button>` : ''}
      <section class="knowledge-relations"><div class="section-heading compact"><h3>Relaties</h3><span>${compactNumber(relations.length)} totaal</span></div>${Object.entries(relationGroups).sort((a, b) => b[1].length - a[1].length).slice(0, 12).map(([label, items]) => `<details ${['synoniem', 'controlepunt', 'gebruikt in thema', 'komt voor in'].includes(label) ? 'open' : ''}><summary>${graphEscape(label)} <span>${items.length}</span></summary><div>${items.slice(0, 30).map((item) => item.node ? `<button type="button" data-graph-node="${graphEscape(item.node.id)}"><small>${graphEscape(graphTypeLabels[item.node.type] || item.node.type)}</small><strong>${graphEscape(shortLabel(item.node.label, 55))}</strong></button>` : '').join('')}</div></details>`).join('')}</section>`;
  }

  function renderLegend() {
    const el = elements();
    if (!el.legend) return;
    el.legend.innerHTML = [
      ['language', 'Werkwoord, betekenis of synoniem'], ['curriculum', 'Niveau of thema'], ['exercise', 'Oefening'], ['issue', 'Controlepunt of fout'], ['content', 'Andere leerinhoud'],
    ].map(([kind, label]) => `<span><i class="${kind}"></i>${graphEscape(label)}</span>`).join('');
  }

  function selectNode(id) {
    if (!nodesById.has(id)) return;
    selectedId = id;
    renderResults();
    renderGraph();
    renderDetail();
  }

  function renderAll() {
    renderStats();
    populateFilters();
    renderResults();
    renderGraph();
    renderDetail();
    renderLegend();
  }

  function attachEvents() {
    const el = elements();
    if (!el.search || el.search.dataset.graphBound === 'true') return;
    el.search.dataset.graphBound = 'true';
    el.search.addEventListener('input', (event) => { state.query = event.target.value; resultLimit = 80; renderResults(); });
    el.type?.addEventListener('change', (event) => { state.type = event.target.value; resultLimit = 80; renderResults(); });
    el.level?.addEventListener('change', (event) => { state.level = event.target.value; resultLimit = 80; renderResults(); });
    el.mode?.addEventListener('change', (event) => { state.mode = event.target.value; renderGraph(); });
    el.issuesOnly?.addEventListener('change', (event) => { state.issuesOnly = event.target.checked; resultLimit = 80; renderResults(); });
    el.loadMore?.addEventListener('click', () => { resultLimit += 80; renderResults(); });
    get('page-kennisgraaf')?.addEventListener('click', (event) => {
      const nodeButton = event.target.closest('[data-graph-node]');
      if (nodeButton) { selectNode(nodeButton.dataset.graphNode); return; }
      const pageButton = event.target.closest('[data-graph-open-page]');
      if (pageButton) {
        if (pageButton.dataset.graphOpenVerb) onOpenVerb?.(pageButton.dataset.graphOpenVerb);
        else onOpenPage?.(pageButton.dataset.graphOpenPage);
      }
    });
  }

  async function load() {
    if (loaded || loading) return;
    loading = true;
    const el = elements();
    if (el.status) el.status.textContent = 'De kennisgraaf wordt geladen…';
    try {
      graph = await readKnowledgeGraph();
      buildIndexes();
      loaded = true;
      if (!nodesById.has(selectedId)) selectedId = 'graph:all-content';
      attachEvents();
      renderAll();
      if (el.status) el.status.textContent = `Kennisgraaf V${graph.metadata.version}: ${compactNumber(graph.metadata.nodeCount)} nodes en ${compactNumber(graph.metadata.edgeCount)} relaties.`;
    } catch (error) {
      if (el.status) el.status.textContent = 'De kennisgraaf kon niet worden geladen. Controleer of de databestanden naast de web staan.';
      notify?.(`Kennisgraaf niet geladen: ${error.message}`);
    } finally {
      loading = false;
    }
  }

  return { open: load, selectNode };
}
