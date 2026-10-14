const KNOWLEDGE_GRAPH_URL = './data/content-knowledge-graph.json';
const KNOWLEDGE_GRAPH_SCRIPT_URL = './data/content-knowledge-graph.js';

const graphTypeLabels = {
  a1_lesson: 'A1-les', lesson_audio: 'Lesaudio', a1_reference: 'A1 Cheat Sheet', lexeme: 'Woordenboek',
  graph_root: 'Overzicht', source_collection: 'Collectie', level: 'Niveau', learning_path: 'Leerpad', theme: 'Thema', spiral_theme: 'Spiraalthema', term: 'Term', vocabulary: 'Woordenschat',
  grammar: 'Grammatica', grammar_focus: 'Curriculumfocus', question_topic: 'Vraagstructuur', structure: 'Taalstructuur', idiom: 'Idiomatiek', concept: 'Concept',
  technical_concept: 'Vakbegrip', professional_concept: 'Professioneel begrip', listening: 'Luisteren', reading: 'Lezen', writing: 'Schrijven',
  logic_relation: 'Logische relatie', verb: 'Werkwoord', sense: 'Betekenis', usage: 'Gebruik', example: 'Voorbeeld', synonym_term: 'Synoniem',
  exercise: 'Oefening', practice: 'Mini-oefening', exercise_topic: 'Oefeningsthema', exercise_type: 'Oefeningstype', reference_group: 'Naslaggroep', category: 'Categorie', domain: 'Domein', issue: 'Controlepunt', known_error: 'Veelgemaakte fout',
  semantic: 'Betekenisdomein', auxiliary: 'Hulpwerkwoord', regularity: 'Vervoeging', preposition: 'Voorzetsel',
};

const graphRelationLabels = {
  resolves_to_verb: 'werkwoordfiche', has_lesson: 'bevat les', has_audio: 'heeft audio', resolves_to_lexeme: 'woordenboekbetekenis', teaches_lexeme: 'leert woord',
  has_level: 'niveau', contains_term: 'bevat', teaches_word: 'leert', used_in_theme: 'gebruikt in thema', documents_error: 'beschrijft fout',
  has_part: 'onderdeel', has_semantic_domain: 'betekenisdomein', uses_auxiliary: 'hulpwerkwoord', has_regularity: 'vervoeging',
  requires_preposition: 'vaste prepositie', has_issue: 'controlepunt', has_sense: 'betekenis', has_usage: 'gebruik', has_example: 'voorbeeld',
  has_synonym: 'synoniem', used_in_content: 'komt voor in', uses_grammar_focus: 'grammaticafocus', refines_grammar: 'uitwerking van', applies_grammar: 'past grammatica toe', practises_topic: 'oefent thema', has_exercise_type: 'oefeningstype',
  practised_by: 'geoefend in', related_to: 'verbonden met', has_level_variant: 'niveauvariant', has_category: 'categorie', has_collection: 'collectie', part_of_collection: 'broncollectie', guides_through_theme: 'begeleidt door thema', uses_lexeme: 'gebruikt woord', uses_verb: 'werkwoord in route', uses_exercise: 'oefening in route',
};

const graphModeRelations = {
  all: null,
  synonyms: new Set(['resolves_to_verb', 'has_sense', 'has_synonym', 'has_usage', 'has_example']),
  usage: new Set(['used_in_theme', 'used_in_content', 'uses_grammar_focus', 'refines_grammar', 'applies_grammar', 'practised_by', 'requires_preposition', 'has_semantic_domain', 'has_usage', 'has_example']),
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
    a1_lesson: 'a1', lesson_audio: 'a1', a1_reference: 'a1-cheatsheet', lexeme: 'woordenschat', verb: 'werkwoorden', grammar: 'grammatica', grammar_focus: 'grammatica', question_topic: 'vragen', structure: 'taalstructuren', idiom: 'taalstructuren',
    vocabulary: 'woordenschat', listening: 'luisteren', reading: 'lezen-schrijven', writing: 'lezen-schrijven', exercise: 'oefenen',
    technical_concept: node?.source === 'software' ? 'software' : node?.source === 'natuurkunde' ? 'natuurkunde' : 'wiskunde',
    professional_concept: 'vaklexicon', learning_path: 'leerpad', theme: node?.level?.toLocaleLowerCase('nl-NL'), level: node?.label?.toLocaleLowerCase('nl-NL'),
  };
  return routes[node?.type] || '';
}

// Project explicit legacy word references onto the canonical dictionary node.
// Stored IDs and edges remain intact; old links resolve through aliases.
export function compareGraphLabels(a, b) {
  return a.label.localeCompare(b.label, 'nl', { sensitivity: 'base', numeric: true }) || a.id.localeCompare(b.id, 'nl');
}

export function graphInitial(label) {
  const first = graphNormalise(label).charAt(0).toUpperCase();
  return /^[A-Z]$/.test(first) ? first : '#';
}

export function canonicalGraphView(source) {
  const byId = new Map(source.nodes.map((node) => [node.id, node]));
  const aliases = new Map();
  for (const edge of source.edges) {
    if (edge.type === 'resolves_to_lexeme' && ['term', 'vocabulary'].includes(byId.get(edge.source)?.type) && byId.get(edge.target)?.type === 'lexeme') aliases.set(edge.source, edge.target);
  }
  const edges = new Map();
  for (const edge of source.edges) {
    const from = aliases.get(edge.source) || edge.source;
    const to = aliases.get(edge.target) || edge.target;
    if (from === to && edge.source !== edge.target) continue;
    const type = edge.type === 'contains_term' && aliases.has(edge.target) ? 'teaches_lexeme' : edge.type;
    const id = `${from}|${type}|${to}`;
    if (!edges.has(id)) edges.set(id, { ...edge, id, source: from, target: to, type });
  }
  const contexts = new Map();
  for (const [id, canonical] of aliases) {
    if (!contexts.has(canonical)) contexts.set(canonical, []);
    contexts.get(canonical).push(byId.get(id));
  }
  return { ...source, nodes: source.nodes.filter((node) => !aliases.has(node.id)).map((node) => contexts.has(node.id) ? { ...node, sourceContexts: contexts.get(node.id), searchText: [node.searchText, ...contexts.get(node.id).map((item) => item.searchText)].join(' ') } : node), edges: [...edges.values()], aliases };
}

export function createKnowledgeGraphExplorer({ onOpenPage, onOpenVerb, onOpenPath, onOpenReference, onOpenLesson, notify } = {}) {
  let graph = null;
  let sourceGraph = null;
  let nodesById = new Map();
  let adjacency = new Map();
  let sourceAdjacency = new Map();
  let loaded = false;
  let loading = false;
  let pendingNodeId = null;
  let selectedId = 'verb:aaien';
  let resultLimit = 80;
  let neighbourPage = 0;
  let previousNodeId = null;
  const state = { query: '', type: 'all', level: 'all', mode: 'all', issuesOnly: false, depth: 2, representation: 'canonical', initial: 'all', neighbourQuery: '' };

  const get = (id) => document.getElementById(id);
  const elements = () => ({
    status: get('knowledge-graph-status'), stats: get('knowledge-graph-stats'), search: get('knowledge-graph-search'),
    type: get('knowledge-graph-type'), level: get('knowledge-graph-level'), mode: get('knowledge-graph-mode'), issuesOnly: get('knowledge-graph-issues-only'),
    results: get('knowledge-graph-results'), resultCount: get('knowledge-graph-result-count'), loadMore: get('knowledge-graph-load-more'),
    canvas: get('knowledge-graph-canvas'), detail: get('knowledge-graph-detail'), legend: get('knowledge-graph-legend'),
  });

  function buildIndexes() {
    sourceGraph ||= graph;
    sourceAdjacency = new Map();
    for (const edge of sourceGraph.edges) {
      for (const id of [edge.source, edge.target]) {
        if (!sourceAdjacency.has(id)) sourceAdjacency.set(id, []);
        sourceAdjacency.get(id).push(edge);
      }
    }
    graph = state.representation === 'original' ? { ...sourceGraph, aliases: new Map() } : canonicalGraphView(sourceGraph);
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
    if (state.initial !== 'all' && graphInitial(node.label) !== state.initial) return false;
    if (state.type === 'words' && !['lexeme', 'verb', 'term', 'vocabulary', 'synonym_term'].includes(node.type)) return false;
    if (!['all', 'words'].includes(state.type) && node.type !== state.type) return false;
    if (state.level !== 'all' && node.level !== state.level && !sourceAdjacency.get(node.id)?.some((edge) => relationNeighbour(edge, node.id) === `level:${state.level}`)) return false;
    if (state.issuesOnly && node.type !== 'issue' && !sourceAdjacency.get(node.id)?.some((edge) => edge.type === 'has_issue')) return false;
    return true;
  }

  function sortedResults() {
    return sourceGraph.nodes.filter(matchesFilters).sort(compareGraphLabels);
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
    if (!el.type || el.type.options.length > 2) return;
    const preferred = ['verb', 'sense', 'synonym_term', 'usage', 'theme', 'grammar', 'grammar_focus', 'question_topic', 'structure', 'vocabulary', 'exercise', 'issue'];
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
    if (el.resultCount) el.resultCount.textContent = `${compactNumber(Math.min(resultLimit, results.length))} van ${compactNumber(results.length)} · A–Z`;
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
    const edges = (adjacency.get(startId) || []).filter(relationAllowed);
    const direct = [...new Set(edges.map((edge) => relationNeighbour(edge, startId)))].filter((id) => id !== startId && nodesById.has(id));
    const parents = new Map(direct.map((id) => [id, startId]));
    if (state.depth === 2) for (const id of direct) {
      if (['level', 'source_collection', 'graph_root', 'category', 'exercise_type', 'exercise_topic'].includes(nodesById.get(id)?.type)) continue;
      for (const edge of adjacency.get(id) || []) {
        if (!relationAllowed(edge)) continue;
        const next = relationNeighbour(edge, id);
        if (next !== startId && nodesById.has(next) && !parents.has(next)) parents.set(next, id);
      }
    }
    // Balance content types so existing words are not displaced by new lessons.
    const groups = new Map();
    for (const id of parents.keys()) {
      const node = nodesById.get(id);
      if (state.neighbourQuery && !graphNormalise(`${node.label} ${node.subtitle || ''}`).includes(graphNormalise(state.neighbourQuery))) continue;
      const key = `${parents.get(id) === startId ? '0' : '1'}:${node.type}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(id);
    }
    for (const group of groups.values()) group.sort((a, b) => compareGraphLabels(nodesById.get(a), nodesById.get(b)));
    const ids = [];
    for (const depth of ['0', '1']) {
      const buckets = [...groups].filter(([key]) => key.startsWith(depth)).sort(([a], [b]) => a.localeCompare(b)).map(([, group]) => [...group]);
      while (buckets.some((group) => group.length)) for (const group of buckets) if (group.length) ids.push(group.shift());
    }
    const pinned = ids.includes(previousNodeId) ? previousNodeId : null;
    const remaining = ids.filter((id) => id !== pinned);
    const pageSize = state.depth === 2 ? 12 : pinned ? 23 : 24;
    const pages = Math.max(1, Math.ceil(remaining.length / pageSize));
    neighbourPage = Math.min(neighbourPage, pages - 1);
    const visible = remaining.slice(neighbourPage * pageSize, (neighbourPage + 1) * pageSize);
    if (pinned) visible.unshift(pinned);
    const visibleIds = new Set([startId, ...visible, ...visible.map((id) => parents.get(id))]);
    const visibleEdges = new Map();
    for (const id of visibleIds) for (const edge of adjacency.get(id) || []) if (relationAllowed(edge) && visibleIds.has(edge.source) && visibleIds.has(edge.target)) visibleEdges.set(edge.id, edge);
    return { nodes: [...visibleIds].map((id) => nodesById.get(id)), edges: [...visibleEdges.values()], total: ids.length, pages };
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
    const width = 1200; const height = 800; const cx = width / 2; const cy = height / 2;
    const positions = new Map([[selected.id, { x: cx, y: cy }]]);
    const firstRing = neighbours.slice(0, 10);
    const secondRing = neighbours.slice(10);
    firstRing.forEach((node, index) => {
      const angle = (Math.PI * 2 * index / Math.max(firstRing.length, 1)) - Math.PI / 2;
      positions.set(node.id, { x: cx + Math.cos(angle) * 300, y: cy + Math.sin(angle) * 220 });
    });
    secondRing.forEach((node, index) => {
      const angle = (Math.PI * 2 * index / Math.max(secondRing.length, 1)) - Math.PI / 2 + 0.15;
      positions.set(node.id, { x: cx + Math.cos(angle) * 510, y: cy + Math.sin(angle) * 345 });
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
    el.canvas.innerHTML = `<div class="button-row knowledge-neighbour-pages"><span role="status">${neighbours.length} van ${neighbourhoodData.total} verbonden items (${state.depth} ${state.depth === 1 ? 'stap' : 'stappen'}) · pagina ${neighbourPage + 1}/${neighbourhoodData.pages}</span><button type="button" class="secondary-button" data-graph-neighbour-page="-1" ${neighbourPage === 0 ? 'disabled' : ''}>Vorige</button><button type="button" class="secondary-button" data-graph-neighbour-page="1" ${neighbourPage + 1 >= neighbourhoodData.pages ? 'disabled' : ''}>Volgende</button></div><svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="knowledge-graph-svg-title knowledge-graph-svg-desc">
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
      ${node.sourceContexts?.length ? `<details><summary>Gebruik in thema’s en oorspronkelijke inhoud (${node.sourceContexts.length})</summary>${node.sourceContexts.map((item) => `<section><h3>${graphEscape(item.label)} · ${graphEscape(item.level || '')}</h3><p>${graphEscape(item.source)} · ${graphEscape(item.subtitle)}</p>${renderPrimitive(item.data)}</section>`).join('')}</details>` : ''}
      ${route ? `<button class="secondary-button" type="button" data-graph-open-page="${graphEscape(route)}" ${node.type === 'verb' ? `data-graph-open-verb="${graphEscape(node.label)}"` : ''} ${['a1_lesson', 'lesson_audio'].includes(node.type) ? `data-graph-open-lesson="${graphEscape(node.data?.lessonId)}"` : ''} ${node.type === 'a1_reference' ? `data-graph-open-reference="${graphEscape(node.data?.referenceId)}"` : ''} ${node.type === 'learning_path' ? `data-graph-open-path="${graphEscape(node.data?.pathId || '')}"` : ''}>Open in de leeromgeving →</button>` : ''}
      <section class="knowledge-relations"><div class="section-heading compact"><h3>Relaties</h3><span>${compactNumber(relations.length)} totaal</span></div>${Object.entries(relationGroups).sort((a, b) => b[1].length - a[1].length).map(([label, items]) => `<details ${['synoniem', 'controlepunt', 'gebruikt in thema', 'komt voor in'].includes(label) ? 'open' : ''}><summary>${graphEscape(label)} <span>${items.length}</span></summary><div>${items.map((item) => item.node ? `<button type="button" data-graph-node="${graphEscape(item.node.id)}"><small>${graphEscape(graphTypeLabels[item.node.type] || item.node.type)}</small><strong>${graphEscape(shortLabel(item.node.label, 55))}</strong></button>` : '').join('')}</div></details>`).join('')}</section>`;
  }

  function renderLegend() {
    const el = elements();
    if (!el.legend) return;
    el.legend.innerHTML = [
      ['language', 'Werkwoord, betekenis of synoniem'], ['curriculum', 'Niveau of thema'], ['exercise', 'Oefening'], ['issue', 'Controlepunt of fout'], ['content', 'Andere leerinhoud'],
    ].map(([kind, label]) => `<span><i class="${kind}"></i>${graphEscape(label)}</span>`).join('');
  }

  function selectNode(id) {
    id = graph?.aliases?.get(id) || id;
    if (!nodesById.has(id)) return;
    if (id !== selectedId) previousNodeId = selectedId;
    selectedId = id;
    state.neighbourQuery = '';
    if (get('knowledge-graph-neighbour-search')) get('knowledge-graph-neighbour-search').value = '';
    neighbourPage = 0;
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
    get('knowledge-graph-neighbour-search')?.addEventListener('input', (event) => { state.neighbourQuery = event.target.value; neighbourPage = 0; renderGraph(); });
    get('knowledge-graph-initial')?.addEventListener('change', (event) => { state.initial = event.target.value; resultLimit = 80; renderResults(); el.results?.scrollTo?.(0, 0); });
    get('knowledge-graph-depth')?.addEventListener('change', (event) => { state.depth = Number(event.target.value); neighbourPage = 0; renderGraph(); });
    get('knowledge-graph-representation')?.addEventListener('change', (event) => { state.representation = event.target.value; buildIndexes(); selectedId = graph.aliases.get(selectedId) || selectedId; neighbourPage = 0; renderAll(); });
    if (!el.search || el.search.dataset.graphBound === 'true') return;
    el.search.dataset.graphBound = 'true';
    el.search.addEventListener('input', (event) => { state.query = event.target.value; resultLimit = 80; renderResults(); });
    el.type?.addEventListener('change', (event) => { state.type = event.target.value; resultLimit = 80; renderResults(); });
    el.level?.addEventListener('change', (event) => { state.level = event.target.value; resultLimit = 80; renderResults(); });
    el.mode?.addEventListener('change', (event) => { state.mode = event.target.value; neighbourPage = 0; renderGraph(); });
    el.issuesOnly?.addEventListener('change', (event) => { state.issuesOnly = event.target.checked; resultLimit = 80; renderResults(); });
    el.loadMore?.addEventListener('click', () => { resultLimit += 80; renderResults(); });
    get('page-kennisgraaf')?.addEventListener('click', (event) => {
      const pager = event.target.closest('[data-graph-neighbour-page]');
      if (pager) { neighbourPage = Math.max(0, neighbourPage + Number(pager.dataset.graphNeighbourPage)); renderGraph(); return; }
      const nodeButton = event.target.closest('[data-graph-node]');
      if (nodeButton) { selectNode(nodeButton.dataset.graphNode); return; }
      const pageButton = event.target.closest('[data-graph-open-page]');
      if (pageButton) {
        if (pageButton.dataset.graphOpenVerb) onOpenVerb?.(pageButton.dataset.graphOpenVerb);
        else if (pageButton.dataset.graphOpenLesson) onOpenLesson?.(pageButton.dataset.graphOpenLesson);
        else if (pageButton.dataset.graphOpenReference) onOpenReference?.(pageButton.dataset.graphOpenReference);
        else if (pageButton.dataset.graphOpenPath) onOpenPath?.(pageButton.dataset.graphOpenPath);
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
      if (pendingNodeId && nodesById.has(pendingNodeId)) selectedId = pendingNodeId;
      pendingNodeId = null;
      selectedId = graph.aliases.get(selectedId) || selectedId;
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

  async function openNode(id) { pendingNodeId = id; await load(); if (loaded) { selectNode(id); pendingNodeId = null; } }

  return { open: load, selectNode, openNode };
}
