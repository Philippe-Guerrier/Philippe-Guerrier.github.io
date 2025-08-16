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

<!-- Load Lunr (CDN) then our script -->
<script src="https://cdn.jsdelivr.net/npm/lunr@2.3.9/lunr.min.js"></script>
<script>
(async function(){
  const input = document.getElementById('q');
  const list = document.getElementById('results');
  const err  = document.getElementById('s-error');

  // Cache-buster: use build hash or time to force fresh JSON
  const version = "{{ site.github.build_revision | default: site.time | date: '%s' }}";
  const INDEX_URL = '{{ "/search.json" | relative_url }}?v=' + version;

  // Optional: read ?q= from URL and prefill
  const params = new URLSearchParams(location.search);
  if (params.get('q')) input.value = params.get('q');

  try {
    const docs = await fetch(INDEX_URL, { cache: 'no-store' }).then(r => r.json());

    // (Optional) light normalization to make 'universite' match 'Université'
    const norm = s => (s || "").normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();

    const idx = lunr(function () {
      this.ref('url');
      this.field('title',       { boost: 10 });
      this.field('description', { boost: 4 });
      this.field('content');
      // Index normalized copies so accents don't block matches
      this.field('title_norm');
      this.field('desc_norm');
      this.field('content_norm');

      docs.forEach(d => this.add({
        ...d,
        title_norm:   norm(d.title),
        desc_norm:    norm(d.description),
        content_norm: norm(d.content)
      }));
    });

    function render(q){
      list.innerHTML = '';
      if (!q) return;
      const hits = idx.search(q).slice(0, 20);
      for (const h of hits) {
        const d = docs.find(x => x.url === h.ref) || {};
        const li = document.createElement('li');
        const snip = (d.description || d.content || '').toString();
        const pos  = snip.toLowerCase().indexOf(q.toLowerCase());
        const start = Math.max(0, pos - 40), end = Math.min(snip.length, pos + 120);
        const excerpt = (pos >= 0 ? snip.slice(start, end) : snip.slice(0, 160)).replace(/\s+/g,' ').trim();
        li.innerHTML = `<a href="${d.url}">${d.title || d.url}</a><span class="snippet">… ${excerpt} …</span>`;
        list.appendChild(li);
      }
    }

    // Run immediately if input has value (from ?q= or user)
    if (input.value) render(input.value.trim());
    input.addEventListener('input', e => render(e.target.value.trim()));

  } catch(e) {
    err.style.display = '';
  }
})();
</script>

