---
title: Search
permalink: /search/
---

# Search

<input id="q" placeholder="Type to search… (e.g., pulseflow, airflow, quantum)" />
<ol id="results" class="results"></ol>
<p id="s-error" style="display:none;">Couldn’t build the index. Try reloading the page.</p>

<style>
#q { width:100%; max-width:680px; padding:10px; margin:8px 0 18px; border:1px solid var(--border, #e5e7eb); border-radius:8px; }
.results { padding-left:18px; }
.results li { margin:8px 0 14px; }
.results a { font-weight:600; }
.snippet { display:block; opacity:.8; font-size:.95rem; margin-top:2px; }
</style>

<!-- Load Lunr (CDN) then the script -->
<script src="https://cdn.jsdelivr.net/npm/lunr@2.3.9/lunr.min.js"></script>
<script>
(async function(){
  const input = document.getElementById('q');
  const list = document.getElementById('results');
  const err  = document.getElementById('s-error');

  try {
    const url = '{{ "/search.json" | relative_url }}?v={{ site.github.build_revision | default: site.time | date: "%s" }}';
    const docs = await fetch(url).then(r => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    });
    const idx = lunr(function () {
      this.ref('url');
      this.field('title',       { boost: 10 });
      this.field('description', { boost: 4  });
      this.field('content');
      docs.forEach(d => this.add(d));
    });

    function render(q){
      list.innerHTML = '';
      if (!q) return;
      const hits = idx.search(q).slice(0, 20);
      for (const h of hits) {
        const d = docs.find(x => x.url === h.ref) || {};
        const snip = (d.description || d.content || '').toString();
        const pos = snip.toLowerCase().indexOf(q.toLowerCase());
        const start = Math.max(0, pos - 40), end = Math.min(snip.length, pos + 120);
        const excerpt = (pos >= 0 ? snip.slice(start, end) : snip.slice(0, 160)).replace(/\s+/g,' ').trim();
        const li = document.createElement('li');
        li.innerHTML = `<a href="${d.url}">${d.title || d.url}</a><span class="snippet">… ${excerpt} …</span>`;
        list.appendChild(li);
      }
    }
    input.addEventListener('input', e => render(e.target.value.trim()));
  } catch(e) {
    console.error('Search index error:', e);
    err.style.display = '';
  }
})();
</script>

