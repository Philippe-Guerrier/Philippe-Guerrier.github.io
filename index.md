---
layout: default
title: Home
permalink: /
---
# Philippe Guerrier

**Data** - offline AI for music, ML engineering, and applied AI in medicine. Currently **Data Analyst @ Deezer** (Apr 2025–Sep 2025). Past roles at **Uber** (Ops Analytics) and **Amazon** (BI/DG). Multilingual (FR/EN/DE).

[About](/about/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)

> **Dark/Light Mode** available in the bottom right corner !

## Highlights
- **PulseFlow AI** - Offline music identifier & recommender (CLAP embeddings + FAISS) with smooth transitions. Runs fully on‑device.  
  Repo: <https://github.com/Philippe-Guerrier/pulseflow-ai-offline-music-recommender>
- **Scrape‑LLM (local)** - Lightweight scraper + local LLM/vision for concise page summaries & image sampling (Ollama/HF).  
  Repo: <https://github.com/Philippe-Guerrier/scrape-llm>
- **Market Sentiment Dashboard** - Real‑time news+Reddit pipeline with parallel sentiment and short write‑ups.  
  Repo: <https://github.com/Philippe-Guerrier/Real-Time-AI-Powered-Market-Sentiment-Dashboard>

## Portfolio Highlights
- **Artificial Intelligence in Medicine and Pharmaceuticals** - SynthMolVAE: Gen AI for Drug Discovery + Molecule Generation using Variational Autoencoders (VAE).  
  Portfolio: <https://sites.google.com/view/philippeguerrier/ai-in-medicine-and-pharmaceuticals>
- **Quantum Computing** - Quantum K-mean + Quantum Computing for Monte Carlo Simulation.  
  Portfolio: <https://sites.google.com/view/philippeguerrier/quantum-computing-portfolio>

## Focus areas
- Offline, privacy‑preserving AI (audio/music)  
- Data/ML engineering (pipelines, Airflow, SQL, Python)  
- AI in medicine & pharma, and quantum/optimization


# Quick Labs & Easter Eggs 

<section class="mini-arcade">
  <h3>ML & Deep Learning Labs</h3>
  <p class="labs-sub">Interactive demos: A/B testing, clustering, pathfinding & probabilistic DS</p>

  <div class="arcade-cards">
    <!-- Labs -->
    <a class="arc-card" href="{{ '/labs/ab/' | relative_url }}">
      <span class="emoji" aria-hidden="true">🧪</span>
      <div class="meta">
        <h4>A/B Test</h4>
        <p>p-values, power & lift.</p>
      </div>
    </a>

    <a class="arc-card" href="{{ '/labs/kmeans/' | relative_url }}">
      <span class="emoji" aria-hidden="true">🎯</span>
      <div class="meta">
        <h4>K-Means</h4>
        <p>Drag points, change K.</p>
      </div>
    </a>

    <a class="arc-card" href="{{ '/labs/arcade/' | relative_url }}">
      <span class="emoji" aria-hidden="true">🕹️</span>
      <div class="meta">
        <h4>Algorithm Arcade</h4>
        <p>A* path, GD, Bloom.</p>
      </div>
    </a>
  </div>

  <!-- SQL section -->
  <div class="sql-split">
    <span class="egg-pill">🥚 SQL Easter Egg: press <kbd>G</kbd><kbd>G</kbd><kbd>O</kbd></span>
    <a class="arc-card sql-card" href="{{ '/play/sql/' | relative_url }}">
      <span class="emoji" aria-hidden="true">🗄️</span>
      <div class="meta">
        <h4>SQL Playground</h4>
        <p>Client-side analytics + Query Gallery.</p>
      </div>
    </a>
  </div>
</section>

<style>
/* scoped, theme-aware */
.mini-arcade{margin:18px 0}
.mini-arcade h3{margin:0 0 4px}
.mini-arcade .labs-sub{margin:0 0 10px; opacity:.8; font-size:.95rem}

.mini-arcade{
  --bg:#fff; --tx:#0b1220; --bd:#e5e7eb; --hover:#f8fafc; --shadow:0 2px 10px rgba(2,6,23,.06);
  --accent:#2563eb; --egg-bg:#111827; --egg-tx:#fff;
}
html[data-theme="dark"] .mini-arcade{
  --bg:#0f172a; --tx:#e8eef7; --bd:#1f2937; --hover:#111827; --shadow:0 2px 10px rgba(0,0,0,.25);
  --accent:#60a5fa; --egg-bg:#e5e7eb; --egg-tx:#0b1220;
}

.arcade-cards{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.arc-card{
  display:flex;gap:12px;align-items:center;text-decoration:none;
  border:1px solid var(--bd); background:var(--bg); color:var(--tx);
  padding:14px;border-radius:14px;box-shadow:var(--shadow);
  transition:transform .12s ease, background .12s ease, border-color .12s ease;
}
.arc-card:hover{transform:translateY(-1px);background:var(--hover);border-color:var(--accent)}
.arc-card .emoji{font-size:28px;line-height:1}
.arc-card .meta h4{margin:0 0 2px}
.arc-card .meta p{margin:0;opacity:.85}

/* SQL split block */
.sql-split{margin-top:16px;display:grid;gap:10px}
.egg-pill{
  width:max-content; font-size:.9rem; padding:6px 10px; border-radius:999px;
  background:var(--egg-bg); color:var(--egg-tx); border:1px solid var(--bd);
}
.egg-pill kbd{
  font-family:ui-monospace,Menlo,Consolas,monospace; font-weight:600; font-size:.85em;
  background:rgba(255,255,255,.12); padding:2px 6px; border-radius:6px; margin:0 2px;
}
html[data-theme="dark"] .egg-pill kbd{ background:rgba(0,0,0,.08); }

/* subtle accent for SQL card */
.sql-card{border-left:3px solid var(--accent)}
</style>


<!-- Profile Page + Person (homepage only) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": "{{ '/' | absolute_url }}",
  "name": "{{ site.title | escape }}",
  "dateModified": "{{ site.time | date_to_xmlschema }}",
  "mainEntity": {
    "@type": "Person",
    "name": "{{ site.author.name | default: site.title | escape }}",
    "jobTitle": "{{ site.author.job_title | escape }}",
    "url": "{{ '/' | absolute_url }}",
    {% if site.author.image %}"image": "{{ site.author.image | absolute_url }}",{% endif %}
    {% if site.author.email %}"email": "mailto:{{ site.author.email | escape }}",{% endif %}
    "sameAs": {{ site.author.same_as | jsonify }},
    "alumniOf": [{% for a in site.author.alumni_of %}{ "@type":"CollegeOrUniversity","name":"{{ a | escape }}" }{% unless forloop.last %}, {% endunless %}{% endfor %}],
    "knowsLanguage": {{ site.author.knows_language | jsonify }}{% if site.author.works_for %},
    "worksFor": { "@type":"Organization", "name":"{{ site.author.works_for | escape }}" }{% endif %}
  }
}
</script>



