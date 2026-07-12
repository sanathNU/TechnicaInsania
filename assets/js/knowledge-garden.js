(() => {
  const root = document.querySelector('.knowledge-garden');
  if (!root) return;

  const svg = document.querySelector('#knowledge-graph');
  const list = document.querySelector('#garden-list');
  const status = document.querySelector('#garden-status');
  const search = document.querySelector('#garden-search');
  const showTags = document.querySelector('#garden-tags');
  const reset = document.querySelector('#garden-reset');
  const ns = 'http://www.w3.org/2000/svg';
  const make = (name, attributes = {}) => {
    const element = document.createElementNS(ns, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  };

  fetch(root.dataset.graphUrl)
    .then((response) => {
      if (!response.ok) throw new Error('The graph data could not be loaded.');
      return response.json();
    })
    .then(initialize)
    .catch(() => { status.textContent = 'The garden could not be loaded just now.'; });

  function initialize(graph) {
    const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
    const notes = graph.nodes.filter((node) => node.kind === 'note');
    const tags = graph.nodes.filter((node) => node.kind === 'tag');
    const edges = [...graph.linkEdges, ...graph.tagEdges]
      .filter((edge) => nodeById.has(edge.source) && nodeById.has(edge.target));
    const positions = new Map();
    placeAround(notes, 500, 350, 235, 0, positions);
    placeAround(tags, 500, 350, 320, Math.PI / 12, positions);
    const edgeLayer = make('g', { class: 'garden-edges' });
    const nodeLayer = make('g', { class: 'garden-nodes' });
    svg.replaceChildren(edgeLayer, nodeLayer);

    const edgeElements = edges.map((edge) => {
      const source = positions.get(edge.source);
      const target = positions.get(edge.target);
      const element = make('line', {
        x1: source.x, y1: source.y, x2: target.x, y2: target.y,
        class: `garden-edge garden-edge-${edge.kind}`
      });
      edgeLayer.append(element);
      return { edge, element };
    });

    const nodeElements = graph.nodes.map((node) => {
      const point = positions.get(node.id);
      const degree = edges.filter((edge) => edge.source === node.id || edge.target === node.id).length;
      const radius = node.kind === 'tag' ? 7 : Math.min(15, 6 + degree * 1.4);
      const element = make('a', { class: `garden-node garden-node-${node.kind}`, tabindex: '0' });
      if (node.url) element.setAttribute('href', node.url);
      element.setAttribute('aria-label', node.kind === 'tag' ? `Filter notes tagged ${node.title}` : `Open ${node.title}`);
      element.append(make('circle', { cx: point.x, cy: point.y, r: radius }));
      const label = make('text', { x: point.x + radius + 5, y: point.y + 4 });
      label.textContent = node.title;
      element.append(label);
      if (node.kind === 'tag') {
        element.addEventListener('click', (event) => {
          event.preventDefault();
          search.value = node.title;
          renderFilter();
        });
      }
      nodeLayer.append(element);
      return { node, element };
    });

    function renderFilter() {
      const term = search.value.trim().toLowerCase();
      const matched = new Set(notes.filter((node) => !term || [node.title, ...(node.tags || [])]
        .join(' ').toLowerCase().includes(term)).map((node) => node.id));
      const visibleTags = new Set(edges.filter((edge) => edge.kind === 'tag' && matched.has(edge.source))
        .map((edge) => edge.target));
      nodeElements.forEach(({ node, element }) => {
        element.classList.toggle('is-muted', node.kind === 'note' ? !matched.has(node.id) : Boolean(term) && !visibleTags.has(node.id));
      });
      edgeElements.forEach(({ edge, element }) => {
        const visible = edge.kind === 'link'
          ? matched.has(edge.source) && matched.has(edge.target)
          : showTags.checked && matched.has(edge.source) && (!term || visibleTags.has(edge.target));
        element.classList.toggle('is-muted', !visible);
      });
      const results = notes.filter((node) => matched.has(node.id));
      status.textContent = `${results.length} note${results.length === 1 ? '' : 's'} shown · ${tags.length} tags in the garden`;
      list.replaceChildren(...results.sort((a, b) => a.title.localeCompare(b.title)).map(noteListItem));
    }

    function noteListItem(node) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = node.url;
      link.textContent = node.title;
      item.append(link);
      if (node.tags && node.tags.length) {
        const tagText = document.createElement('span');
        tagText.className = 'garden-list-tags';
        tagText.textContent = node.tags.join(' · ');
        item.append(tagText);
      }
      return item;
    }

    search.addEventListener('input', renderFilter);
    showTags.addEventListener('change', renderFilter);
    reset.addEventListener('click', () => { search.value = ''; showTags.checked = true; renderFilter(); });
    renderFilter();
  }

  function placeAround(nodes, centerX, centerY, radius, offset, positions) {
    nodes.forEach((node, index) => {
      const angle = offset + (Math.PI * 2 * index) / Math.max(nodes.length, 1);
      positions.set(node.id, { x: centerX + Math.cos(angle) * radius, y: centerY + Math.sin(angle) * radius * 0.72 });
    });
  }
})();
