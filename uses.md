---
layout: default
title: Uses
permalink: /uses/
---

# Uses
_Last updated: 2025-08-17_

### Quick help
[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)


## Data & ML
- **Core languages**: Python, SQL, R, JavaScript; basics in PHP, Java, C++.
- **Python stack**: pandas, NumPy, scikit-learn, TensorFlow, Keras, PyTorch; Jupyter.
- **NLP & GenAI**: classical NLP workflows; local LLM workflows with **Ollama / Hugging Face** (on-device where possible).
- **Audio / Retrieval**: CLAP embeddings + **FAISS** for vector search and offline recommenders (music/audio).
- **Quantum / Optimization**: **Qiskit** for quantum K-Means and experimentation.
- **Experimentation**: notebooks first; quick scripts packaged to jobs when stable.

## Analytics & BI
- **Dashboards & viz**: Tableau, Power BI, matplotlib/plotly.
- **Analytics**: SQL-first analysis, KPI design, cohorting, experimentation (A/B), funneling.
- **Stat packages**: SPSS when needed.

## Data Engineering & Orchestration
- **Pipelines / scheduling**: Apache Airflow.
- **Distributed compute**: Apache Spark (PySpark & Scala), MapReduce.
- **Ecosystem**: Hadoop / HDFS.
- **Data modeling**: dimensional modeling; **dbt** (learning basics).

## Databases & Storage
- **SQL engines**: PostgreSQL (when available), **MySQL**, SQLite for quick local work.

## Cloud
- **Platforms**: Google Cloud Platform, Microsoft Azure.
- Typical services: storage, compute, managed SQL/warehouse; infra kept minimal and cost-aware.

## Dev & Infra
- **Versioning**: Git & GitHub.
- **Containers**: Docker & Kubernetes (practical basics).
- **Editors & IDEs**: Jupyter Notebook, VS Code, PyCharm, Spyder, CodeBlocks.
- **Project tracking**: Jira.
- **Docs**: Markdown.

## Web / App
- **Frontend**: HTML/CSS/JS.
- **Web/General**: HTML/CSS/JS, Markdown, VS Code.

## Profiles & links
- **Portfolio (Google Sites)**: https://sites.google.com/view/philippeguerrier/
- **GitHub Pages**: https://philippe-guerrier.github.io/
- **LinkedIn**: https://www.linkedin.com/in/philippe-guerrier1/

---

<!-- ===== Spotlight 2.0 (Focus Meter + Quick Jump) ===== -->
<section class="spotlight2">
  <div class="sp-head">
    <strong>Spotlight</strong>
    <small>Tap a card → jump to section</small>
  </div>
  <div class="sp-row" id="spRow"></div>
</section>

<style>
/* ---------- Spotlight 2.0 ---------- */
.spotlight2{margin:24px 0 12px; padding:12px; border:1px solid var(--bd,#e5e7eb); border-radius:12px}
html[data-theme="dark"] .spotlight2{border-color:#1f2937}
.sp-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.sp-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}
.sp-card{border:1px solid var(--bd,#e5e7eb);border-radius:12px;padding:10px;cursor:pointer;text-decoration:none;color:inherit;background:var(--bg,#fff);transition:transform .12s ease,border-color .12s ease}
.sp-card:hover{transform:translateY(-1px);border-color:var(--ac,#2563eb)}
.sp-top{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.sp-meter{flex:1;height:6px;border-radius:999px;background:linear-gradient(90deg,#e5e7eb, #cbd5e1)}
html[data-theme="dark"] .sp-card{background:#0f172a;border-color:#1f2937}
html[data-theme="dark"] .sp-meter{background:linear-gradient(90deg,#1f2937,#374151)}
.sp-meter > i{display:block;height:6px;border-radius:999px;background:var(--ac,#2563eb);width:40%}
html[data-theme="dark"] .sp-meter > i{background:#60a5fa}
.sp-links{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.sp-links .chip{font-size:.85rem;border:1px solid var(--bd,#e5e7eb);padding:3px 8px;border-radius:999px;opacity:.9}
</style>

<script>
/* ---------- Spotlight data (edit scores 1–5 and link chips) ---------- */
const SPOTLIGHT = [
  { id:'data--ml',       title:'Data & ML',                  score:5, links:['Python','pandas','scikit-learn','TensorFlow','PyTorch','FAISS','CLAP'] },
  { id:'analytics--bi',  title:'Analytics & BI',             score:4, links:['SQL','Tableau','Power BI','A/B','Cohorts'] },
  { id:'data-eng--orch', title:'Data Eng & Orchestration',   score:4, links:['Airflow','Spark','Hadoop','dbt (basic)'] },
  { id:'db--storage',    title:'Databases & Storage',        score:3, links:['PostgreSQL','MySQL','SQLite'] },
  { id:'cloud',          title:'Cloud',                      score:3, links:['GCP','Azure'] },
  { id:'dev--infra',     title:'Dev & Infra',                score:3, links:['Git','Docker','Kubernetes (basics)'] },
  { id:'web--app',       title:'Web / App',                  score:3, links:['HTML','CSS','JS'] },
  { id:'projects',       title:'Representative projects',    score:4, links:['PulseFlow AI','Scrape-LLM','Sentiment Dashboard'] },
];

(function spotlight(){
  const row = document.getElementById('spRow');
  if(!row) return;
  SPOTLIGHT.forEach(s=>{
    const a = document.createElement('a');
    a.className='sp-card';
    a.href = '#'+s.id; // jump to your existing sections if their ids match
    a.innerHTML = `
      <div class="sp-top"><span>${s.title}</span></div>
      <div class="sp-meter"><i style="width:${(s.score/5)*100}%"></i></div>
      <div class="sp-links">${(s.links||[]).map(t=>`<span class="chip">${t}</span>`).join('')}</div>`;
    row.appendChild(a);
  });
})();
</script>
<!-- ===== /Spotlight 2.0 ===== -->


<!-- ===== Stack Heatmap (responsive) ===== -->
<section class="hm">
  <h2>Stack Heatmap</h2>
  <p class="hm-sub">How my tooling shows up across two “modes” of work.</p>

  <div class="hm-tabs">
    <button data-mode="data" class="on" id="hmTabData" aria-pressed="true">Data Jobs</button>
    <button data-mode="biz" id="hmTabBiz" aria-pressed="false">Business Jobs</button>
  </div>

  <div class="hm-grid" id="hmGrid" aria-live="polite">
    <div class="row head" id="hmHead"></div>
    <div class="rows" id="hmBody"></div>
  </div>

  <div class="hm-legend">
    <span>Low</span>
    <span class="bar"><i></i></span>
    <span>High</span>
  </div>
  <p class="hm-tip">Hover a cell for a quick note; click a column header to highlight.</p>
</section>

<style>
/* ---- layout / theme vars ---- */
.hm { --cell: 42px; --gap: 8px; --bd:#e5e7eb; --tx:#0b1220; --muted:#6b7280; --accent:#2563eb; }
html[data-theme="dark"] .hm { --bd:#1f2937; --tx:#e8eef7; --muted:#9aa4b5; --accent:#60a5fa; }

.hm h2 { margin-bottom:.25rem }
.hm-sub { margin:.25rem 0 1rem; color:var(--muted) }

.hm-tabs { display:flex; gap:8px; margin-bottom:10px }
.hm-tabs button{
  padding:6px 10px; border:1px solid var(--bd); border-radius:999px;
  background:#fff; cursor:pointer; color:var(--tx)
}
.hm-tabs .on{ border-color:var(--accent) }
html[data-theme="dark"] .hm-tabs button{ background:#0f172a }

.hm-grid{ 
  overflow:auto; border:1px solid var(--bd); border-radius:12px; padding:10px; 
  background:transparent;
}
.hm-grid .row{ display:grid; gap:var(--gap); grid-template-columns: 180px repeat(var(--cols), var(--cell)); align-items:center; }
.hm-grid .row + .row{ margin-top:var(--gap) }

.hm-grid .cell{
  width:var(--cell); height:var(--cell); border-radius:10px; 
  display:flex; align-items:center; justify-content:center;
  border:1px solid var(--bd); background:transparent; color:var(--tx);
  user-select:none;
}
.hm-grid .y{
  width:auto; justify-content:flex-start; padding:0 6px; border:none; background:transparent; font-weight:600;
}
.hm-grid .x{
  font-weight:600; border:none; background:transparent; width:var(--cell);
  display:flex; align-items:center; justify-content:center; text-align:center;
}
.hm-grid .x .short{ display:none; }
.hm-grid .x .full{ display:block; }

/* compact mode when space is tight */
.hm-grid.tight { --cell:34px; }
.hm-grid.tight .x{ 
  writing-mode:vertical-rl; transform:rotate(180deg); line-height:1;
  padding:6px 4px;
}
.hm-grid.tight .x .full{ display:none; }
.hm-grid.tight .x .short{ display:block; }

/* column focus */
.hm-grid[data-focus] .rows .cell[data-col],
.hm-grid[data-focus] .head .cell[data-col]{ opacity:.35; }
.hm-grid[data-focus] .rows .cell[data-col="F"],
.hm-grid[data-focus] .head .cell[data-col="F"]{ opacity:1; }

/* legend */
.hm-legend{ display:flex; align-items:center; gap:10px; margin:.75rem 0 }
.hm-legend .bar{ width:140px; height:8px; border-radius:999px; background:linear-gradient(90deg, rgba(37,99,235,.12), rgba(37,99,235,.9)); border:1px solid var(--bd) }

/* tip */
.hm-tip{ color:var(--muted); margin-top:4px }
</style>

<script>
(function(){
  const grid  = document.getElementById('hmGrid');
  const head  = document.getElementById('hmHead');
  const body  = document.getElementById('hmBody');
  const tabData = document.getElementById('hmTabData');
  const tabBiz  = document.getElementById('hmTabBiz');

  // --- tools (short + full for responsive headers) ---
  const HM_TOOLS = [
    { short:'Py',    full:'Python' },
    { short:'SQL',   full:'SQL' },
    { short:'Flow',  full:'Airflow' },
    { short:'Spark', full:'Spark' },
    { short:'ML',    full:'ML (TF/PT)' },
    { short:'FAISS', full:'FAISS' },
    { short:'BI',    full:'Tableau/BI' },
    { short:'dbt',   full:'dbt' },
    { short:'Qsk',   full:'Qiskit' },
    { short:'Oll',   full:'Ollama' }
  ];

  // rows (kept close to your sections)
  const ROWS = [
    'KPI / metrics',
    'Funnel / Cohorts',
    'Forecast / Planning',
    'Growth Experiments',
    'Decks / Narratives',
    'Ops Intelligence'
  ];

  // matrices: 0..5 intensity (adjust freely)
  const MAT_DATA = [
    [4,5,3,2,4,3,1,1,0,2], // KPI
    [4,5,2,2,4,3,2,1,0,2], // Funnel
    [3,4,2,2,4,2,2,1,0,1], // Forecast
    [4,5,2,1,4,2,1,1,0,2], // Growth
    [3,4,1,1,3,1,2,2,0,0], // Decks
    [4,5,2,1,3,1,1,1,0,2]  // Ops
  ];
  const MAT_BIZ = [
    [3,5,1,0,2,0,4,2,0,0],
    [3,5,1,0,2,0,4,2,0,0],
    [2,4,0,0,2,0,4,2,0,0],
    [2,4,0,0,1,0,3,2,0,0],
    [2,4,0,0,1,0,4,3,0,0],
    [2,5,0,0,1,0,3,2,0,0]
  ];

  // map 0..5 → RGBA fill
  const fill = (v) => `rgba(37,99,235,${Math.max(0.12, v/5)})`;

  function render(rows, matrix){
    grid.style.setProperty('--cols', HM_TOOLS.length);

    head.className = 'row head';
    head.innerHTML = `<div class="cell y"></div>` + HM_TOOLS.map((t,i)=>`
      <div class="cell x" data-col="${i+1}" title="${t.full}">
        <span class="full">${t.full}</span>
        <span class="short">${t.short}</span>
      </div>
    `).join('');

    body.innerHTML = rows.map((r,ri)=>`
      <div class="row">
        <div class="cell y">${r}</div>
        ${HM_TOOLS.map((t,ci)=>{
          const v = matrix[ri]?.[ci] ?? 0;
          const note = `${r} × ${t.full}: level ${v}`;
          return `<div class="cell" data-col="${ci+1}" title="${note}" style="background:${v?fill(v):'transparent'}"></div>`;
        }).join('')}
      </div>
    `).join('');

    // click to focus/unfocus a column
    head.querySelectorAll('.x').forEach(el=>{
      el.addEventListener('click', ()=>{
        const col = el.getAttribute('data-col');
        if (grid.dataset.focus === col) {
          delete grid.dataset.focus;
          head.querySelectorAll('.x').forEach(x=>x.removeAttribute('data-col'));
          body.querySelectorAll('.cell[data-col]').forEach(c=>c.setAttribute('data-col', c.getAttribute('data-col').replace('F','')));
          return;
        }
        grid.dataset.focus = col;
        head.querySelectorAll('.x').forEach(x=>x.removeAttribute('data-col'));
        el.setAttribute('data-col','F');
        body.querySelectorAll('.cell[data-col]').forEach(c=>{
          c.setAttribute('data-col', c.getAttribute('data-col').replace('F',''));
          if (c.getAttribute('data-col') === col) c.setAttribute('data-col','F');
        });
      });
    });

    autoTighten();
  }

  // auto-compact if the grid overflows horizontally
  function autoTighten(){
    grid.classList.remove('tight');
    requestAnimationFrame(()=>{
      if (grid.scrollWidth > grid.clientWidth) grid.classList.add('tight');
    });
  }
  window.addEventListener('resize', autoTighten);

  // tabs
  function setMode(m){
    if (m === 'data'){
      tabData.classList.add('on'); tabData.setAttribute('aria-pressed','true');
      tabBiz.classList.remove('on'); tabBiz.setAttribute('aria-pressed','false');
      render(ROWS, MAT_DATA);
    } else {
      tabBiz.classList.add('on'); tabBiz.setAttribute('aria-pressed','true');
      tabData.classList.remove('on'); tabData.setAttribute('aria-pressed','false');
      render(ROWS, MAT_BIZ);
    }
  }
  tabData.addEventListener('click', ()=>setMode('data'));
  tabBiz .addEventListener('click', ()=>setMode('biz'));

  // init
  setMode('data');
})();
</script>
<!-- ===== /Stack Heatmap ===== -->


