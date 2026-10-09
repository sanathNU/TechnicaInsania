/* global d3 */
(() => {
  const root = document.querySelector('.knowledge-garden');
  if (!root) return;

  const svgElement = document.querySelector('#knowledge-graph');
  const list = document.querySelector('#garden-list');
  const status = document.querySelector('#garden-status');
  const search = document.querySelector('#garden-search');
  const showTags = document.querySelector('#garden-tags');
  const reset = document.querySelector('#garden-reset');

  fetch(root.dataset.graphUrl)
    .then((response) => {
      if (!response.ok) throw new Error('The graph data could not be loaded.');
      return response.json();
    })
    .then(initialize)
    .catch(() => { status.textContent = 'The garden could not be loaded just now.'; });

  function initialize(graph) {
    const nodeById = new Map(graph.nodes.map((node) => [node.id, { ...node }]));
    const nodes = [...nodeById.values()];
    const notes = nodes.filter((node) => node.kind === 'note');
    const tags = nodes.filter((node) => node.kind === 'tag');
    const edges = [...graph.linkEdges, ...graph.tagEdges]
      .filter((edge) => nodeById.has(edge.source) && nodeById.has(edge.target))
      .map((edge) => ({ ...edge, source: nodeById.get(edge.source), target: nodeById.get(edge.target) }));

    const neighbors = new Map(nodes.map((node) => [node.id, new Set([node.id])]));
    edges.forEach((edge) => {
      neighbors.get(edge.source.id).add(edge.target.id);
      neighbors.get(edge.target.id).add(edge.source.id);
    });
    nodes.forEach((node) => {
      const degree = neighbors.get(node.id).size - 1;
      node.radius = node.kind === 'tag' ? 4 + Math.sqrt(degree) * 1.6 : 6 + Math.sqrt(degree) * 2.2;
      node.isPost = node.kind === 'note' && String(node.id).startsWith('/posts/');
    });

    renderFilter();
    search.addEventListener('input', renderFilter);

    if (typeof d3 === 'undefined') {
      svgElement.closest('.garden-canvas').hidden = true;
      return;
    }

    const graphView = drawGraph({ nodes, notes, edges, neighbors });
    search.addEventListener('input', graphView.applyFilter);
    showTags.addEventListener('change', graphView.toggleTags);
    reset.addEventListener('click', () => {
      search.value = '';
      showTags.checked = true;
      renderFilter();
      graphView.toggleTags();
      graphView.fit(600);
    });

    function renderFilter() {
      const matched = matchedNotes(notes, search.value);
      const results = notes.filter((node) => matched.has(node.id));
      status.textContent = `${results.length} note${results.length === 1 ? '' : 's'} shown · ${tags.length} tags in the garden`;
      list.replaceChildren(...results.sort((a, b) => a.title.localeCompare(b.title)).map(noteListItem));
    }
  }

  function drawGraph({ nodes, notes, edges, neighbors }) {
    const svg = d3.select(svgElement);
    const width = svgElement.clientWidth || 1000;
    const height = svgElement.clientHeight || 640;
    svg.attr('viewBox', `0 0 ${width} ${height}`).selectAll('*').remove();

    svg.append('defs').append('marker')
      .attr('id', 'garden-arrow').attr('viewBox', '0 -4 8 8')
      .attr('refX', 8).attr('markerWidth', 7).attr('markerHeight', 7).attr('orient', 'auto')
      .append('path').attr('d', 'M0,-4L8,0L0,4').attr('class', 'garden-arrow-head');

    const viewport = svg.append('g');
    const edgeLayer = viewport.append('g').attr('class', 'garden-edges');
    const nodeLayer = viewport.append('g').attr('class', 'garden-nodes');

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink().id((node) => node.id))
      .force('charge', d3.forceManyBody().strength((node) => (node.kind === 'tag' ? -120 : -340)).distanceMax(520))
      .force('collide', d3.forceCollide((node) => node.radius + (node.kind === 'tag' ? 12 : 26)).strength(0.9))
      .force('x', d3.forceX(width / 2).strength(0.07))
      .force('y', d3.forceY(height / 2).strength(0.1))
      .stop();

    const edgeSelection = edgeLayer.selectAll('line').data(edges).join('line')
      .attr('class', (edge) => `garden-edge garden-edge-${edge.kind}`)
      .attr('marker-end', (edge) => (edge.kind === 'link' ? 'url(#garden-arrow)' : null));

    const nodeSelection = nodeLayer.selectAll('a').data(nodes, (node) => node.id).join('a')
      .attr('class', (node) => `garden-node garden-node-${node.kind}${node.isPost ? ' garden-node-post' : ''}`)
      .attr('href', (node) => node.url || null)
      .attr('tabindex', 0)
      .attr('aria-label', (node) => (node.kind === 'tag' ? `Filter notes tagged ${node.title}` : `Open ${node.title}`));
    nodeSelection.append('circle').attr('r', (node) => node.radius);
    nodeSelection.append('title').text((node) => node.title);
    const labelSelection = nodeSelection.append('text')
      .attr('x', (node) => node.radius + 4).attr('y', 4)
      .text(shortLabel);

    nodeSelection
      .on('mouseenter focus', (event, node) => highlight(node))
      .on('mouseleave blur', () => highlight(null))
      .on('click', (event, node) => {
        if (node.kind !== 'tag') return;
        event.preventDefault();
        search.value = node.title;
        search.dispatchEvent(new Event('input'));
      })
      .call(d3.drag()
        .on('start', (event, node) => {
          if (!event.active) simulation.alphaTarget(0.25).restart();
          node.fx = node.x;
          node.fy = node.y;
        })
        .on('drag', (event, node) => { node.fx = event.x; node.fy = event.y; })
        .on('end', (event, node) => {
          if (!event.active) simulation.alphaTarget(0);
          node.fx = null;
          node.fy = null;
        }));

    const zoom = d3.zoom().scaleExtent([0.3, 4]).on('zoom', (event) => {
      viewport.attr('transform', event.transform);
      viewport.style('--garden-label-scale', event.transform.k ** -0.75);
      svgElement.classList.toggle('is-zoomed-out', event.transform.k < 0.45);
    });
    svg.call(zoom).on('dblclick.zoom', null);
    simulation.on('tick', render);

    let matched = matchedNotes(notes, search.value);
    let tagsVisible = showTags.checked;
    configureForces();
    simulation.tick(400);
    render();
    applyFilter();
    fit(0);

    function configureForces() {
      const activeEdges = edges.filter((edge) => tagsVisible || edge.kind === 'link');
      simulation.nodes(tagsVisible ? nodes : notes);
      simulation.force('link').links(activeEdges)
        .distance((edge) => (edge.kind === 'link' ? 90 : 120))
        .strength((edge) => (edge.kind === 'link' ? 0.8 : 0.22));
    }

    function render() {
      edgeSelection.each(function placeEdge(edge) {
        const { source, target } = edge;
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const length = Math.hypot(dx, dy) || 1;
        const inset = edge.kind === 'link' ? target.radius + 2 : 0;
        this.setAttribute('x1', source.x);
        this.setAttribute('y1', source.y);
        this.setAttribute('x2', target.x - (dx / length) * inset);
        this.setAttribute('y2', target.y - (dy / length) * inset);
      });
      nodeSelection.attr('transform', (node) => `translate(${node.x},${node.y})`);
    }

    function applyFilter() {
      const term = search.value.trim().toLowerCase();
      matched = matchedNotes(notes, term);
      const visibleTags = new Set(edges.filter((edge) => edge.kind === 'tag' && matched.has(edge.source.id))
        .map((edge) => edge.target.id));
      nodeSelection.classed('is-hidden', (node) => node.kind === 'tag' && !tagsVisible)
        .classed('is-muted', (node) => (node.kind === 'note' ? !matched.has(node.id) : Boolean(term) && !visibleTags.has(node.id)));
      edgeSelection.classed('is-hidden', (edge) => edge.kind === 'tag' && !tagsVisible)
        .classed('is-muted', (edge) => !matched.has(edge.source.id)
          || (edge.kind === 'link' ? !matched.has(edge.target.id) : Boolean(term) && !visibleTags.has(edge.target.id)));
    }

    function highlight(focused) {
      const related = focused ? neighbors.get(focused.id) : null;
      svgElement.classList.toggle('is-focusing', Boolean(focused));
      nodeSelection.classed('is-related', (node) => Boolean(related && related.has(node.id)));
      labelSelection.text((node) => (node === focused ? fullLabel(node) : shortLabel(node)));
      edgeSelection.classed('is-related', (edge) => Boolean(focused)
        && (edge.source.id === focused.id || edge.target.id === focused.id));
    }

    function toggleTags() {
      tagsVisible = showTags.checked;
      configureForces();
      simulation.alpha(0.6).restart();
      applyFilter();
    }

    function fit(duration) {
      const visible = tagsVisible ? nodes : notes;
      const xs = visible.map((node) => node.x);
      const ys = visible.map((node) => node.y);
      const [minX, maxX] = [Math.min(...xs) - 40, Math.max(...xs) + 150];
      const [minY, maxY] = [Math.min(...ys) - 40, Math.max(...ys) + 40];
      const scale = Math.min(2, 0.95 / Math.max((maxX - minX) / width, (maxY - minY) / height));
      const transform = d3.zoomIdentity.translate(width / 2, height / 2)
        .scale(scale).translate(-(minX + maxX) / 2, -(minY + maxY) / 2);
      (duration ? svg.transition().duration(duration) : svg).call(zoom.transform, transform);
    }

    return { applyFilter, toggleTags, fit };
  }

  function fullLabel(node) {
    return node.kind === 'tag' ? `#${node.title}` : node.title;
  }

  function shortLabel(node) {
    const label = fullLabel(node);
    return label.length > 26 ? `${label.slice(0, 24).trimEnd()}…` : label;
  }

  function matchedNotes(notes, rawTerm) {
    const term = rawTerm.trim().toLowerCase();
    return new Set(notes.filter((node) => !term || [node.title, ...(node.tags || [])]
      .join(' ').toLowerCase().includes(term)).map((node) => node.id));
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
})();
