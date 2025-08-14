---
layout: default
title: Top Repos
permalink: /top-repos/
---
# Top GitHub Repositories
[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)


## Let's see !
<small>Auto‑generated from your public repos (excludes forks/archived). Sorted by stars, then recent updates. No maintenance needed.</small>

<input id="filter" type="search" placeholder="Filter by name or language…" style="margin:12px 0;padding:8px 10px;width:100%;max-width:420px;border:1px solid #e5e7eb;border-radius:10px" />

{% assign repos = site.github.public_repositories
  | where_exp: "r", "r.fork == false"
  | where_exp: "r", "r.archived == false"
  | sort: "stargazers_count" | reverse %}

<div class="card-grid" id="repo-grid">
{% for r in repos limit:12 %}
  <div class="card" data-name="{{ r.name | downcase }}" data-lang="{{ r.language | downcase }}">
    <h3><a href="{{ r.html_url }}">{{ r.name }}</a></h3>
    {% if r.description %}<p>{{ r.description }}</p>{% endif %}
    <p>
      {% if r.language %}<small>Language: {{ r.language }}</small>{% endif %}
      <br><small>⭐ {{ r.stargazers_count }} · Updated {{ r.updated_at | date: "%b %d, %Y" }}</small>
    </p>
  </div>
{% endfor %}
</div>

<script>
  const q = document.getElementById('filter');
  const grid = document.getElementById('repo-grid');
  const items = [...grid.children];
  q.addEventListener('input', () => {
    const s = q.value.trim().toLowerCase();
    items.forEach(card => {
      const name = card.dataset.name || '';
      const lang = card.dataset.lang || '';
      card.style.display = (!s || name.includes(s) || lang.includes(s)) ? '' : 'none';
    });
  });
</script>
