---
layout: default
title: Projects
permalink: /projects/
---
# Projects


> Small Note if you like this portfolio (Easter Eggs are presents) 
→ Try the [SQL Playground](/play/sql/) 

<p></p>
<p></p>
> A few representative repos. Full list on my [GitHub](https://github.com/Philippe-Guerrier) and [portfolio](https://sites.google.com/view/philippeguerrier/home).

[Home](/) · [About](/about/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)

<!--- <div class="navbar">[Home](/) · [About](/about/) · [Contact](/contact/)</div> --->

<div class="card-grid">
<div class="card">
<h3>PULSEFLOW AI - Offline music ID & recommender</h3>
<p>Local CLAP embeddings + FAISS for song ID and smart transitions; optional LLM notes. Offline, privacy‑first.</p>
<p><a href="https://github.com/Philippe-Guerrier/pulseflow-ai-offline-music-recommender">Repo</a></p>
</div>

<div class="card">
<h3>Scrape‑LLM (local) - hybrid scraper + vision</h3>
<p>Extracts article metadata, concise summaries, and example images; runs via Ollama/HF small models with a one‑click GUI.</p>
<p><a href="https://github.com/Philippe-Guerrier/scrape-llm">Repo</a></p>
</div>

<div class="card">
<h3>Real‑Time Market Sentiment Dashboard</h3>
<p>News/Reddit ingestion, parallel sentiment (DistilBERT/TextBlob), and short market write‑ups; fast preprocessing and clean UI.</p>
<p><a href="https://github.com/Philippe-Guerrier/Real-Time-AI-Powered-Market-Sentiment-Dashboard">Repo</a></p>
</div>

<div class="card">
<h3>Quantum Monte Carlo Simulations</h3>
<p>Applying quantum computing ideas to Monte Carlo simulations; experiments and notebooks.</p>
<p><a href="https://github.com/Philippe-Guerrier/Quantum-Monte-Carlo-Simulations">Repo</a></p>
</div>

<div class="card">
<h3>Quantum K‑means</h3>
<p>Exploration of quantum K‑means clustering with hands‑on notebooks.</p>
<p><a href="https://github.com/Philippe-Guerrier/Quantum_K-mean">Repo</a></p>
</div>

<div class="card">
<h3>Local Music Recommendation System</h3>
<p>Lightweight recommender fully on‑device; Windows‑friendly setup.</p>
<p><a href="https://github.com/Philippe-Guerrier/music_rec_system">Repo</a></p>
</div>
</div>

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


