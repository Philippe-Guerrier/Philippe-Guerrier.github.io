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

<!-- ===== Spotlight 2.0 (optional) ===== -->
<section class="spotlight2">
  <div class="sp-head">
    <strong>Spotlight</strong>
    <small>Tap a card → jump to section</small>
  </div>
  <div class="sp-row" id="spRow"></div>
</section>

<!-- ===== Stack Heatmap (Data Jobs vs Business Jobs) ===== -->
<section class="stack-heatmap">
  <h2>Stack Heatmap</h2>
  <p class="sm-sub">How my tooling shows up across two “modes” of work.</p>

  <div class="mode-toggle" role="tablist" aria-label="Heatmap mode">
    <button role="tab" aria-selected="true" data-mode="data">Data Jobs</button>
    <button role="tab" aria-selected="false" data-mode="biz">Business Jobs</button>
  </div>

  <div class="hm-wrap">
    <div class="hm-grid" id="hmGrid" aria-live="polite"></div>
    <div class="hm-legend">
      <span>Low</span><span class="bar"></span><span>High</span>
    </div>
  </div>
  <p class="hm-note">Hover a cell for a quick note; click a column to highlight.</p>
</section>

<style>
/* ---------- Spotlight 2.0 ---------- */
.spotlight2{margin:24px 0 12px; padding:12px; border:1px solid var(--bd,#e5e7eb); border-radius:12px}
html[data-theme="dark"] .spotlight2{border-color:#1f2937}
.sp-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.sp-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}
.sp-card{border:1px solid var(--bd,#e5e7eb);border-radius:12px;padding:10px;cursor:pointer;text-decoration:none;color:inherit;background:var(--bg,#fff)}
.sp-card:hover{transform:translateY(-1px);border-color:var(--ac,#2563eb)}
.sp-top{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.sp-meter{flex:1;height:6px;border-radius:999px;background:linear-gradient(90deg,#e5e7eb, #cbd5e1)}
html[data-theme="dark"] .sp-card{background:#0f172a;border-color:#1f2937}
html[data-theme="dark"] .sp-meter{background:linear-gradient(90deg,#1f2937,#374151)}
.sp-meter > i{display:block;height:6px;border-radius:999px;background:var(--ac,#2563eb);width:40%}
html[data-theme="dark"] .sp-meter > i{background:#60a5fa}
.sp-links{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.sp-links .chip{font-size:.85rem;border:1px solid var(--bd,#e5e7eb);padding:3px 8px;border-radius:999px;opacity:.9}

/* ---------- Heatmap ---------- */
.stack-heatmap{margin:26px 0}
.sm-sub{opacity:.8;margin-top:-6px}
.mode-toggle{display:inline-flex;border:1px solid var(--bd,#e5e7eb);border-radius:12px;overflow:hidden;margin:10px 0}
.mode-toggle button{padding:8px 12px;background:transparent;border:0;cursor:pointer}
.mode-toggle button[aria-selected="true"]{background:var(--bg,#fff)}
html[data-theme="dark"] .mode-toggle{border-color:#1f2937}
html[data-theme="dark"] .mode-toggle button[aria-selected="true"]{background:#0f172a}

.hm-wrap{margin-top:10px;overflow:auto}
.hm-grid{--cell:42px; --gap:6px; display:grid; gap:var(--gap)}
.hm-grid .row{display:grid; grid-template-columns: var(--first, 140px) repeat(var(--cols), var(--cell)); gap:var(--gap); align-items:center}
.hm-grid .row.head .cell{font-weight:600;text-align:center}
.hm-grid .cell{height:var(--cell); display:flex;align-items:center;justify-content:center; border:1px solid var(--bd,#e5e7eb); border-radius:8px; font-size:.9rem}
.hm-grid .y{justify-content:flex-start;padding-left:8px;background:var(--bg,#fff)}
.hm-grid .x{white-space:nowrap}
.hm-grid .v{position:relative}
.hm-grid .v[data-score]{background: var(--bg,#fff)}
.hm-grid .v[data-score]::before{
  content:''; position:absolute; inset:0; border-radius:8px;
  background: hsl(220 90% calc(98% - (var(--s,0)*45%)));
}
html[data-theme="dark"] .hm-grid .cell{border-color:#1f2937}
html[data-theme="dark"] .hm-grid .y{background:#0f172a}
html[data-theme="dark"] .hm-grid .v[data-score]::before{
  background: hsl(220 90% calc(18% + (var(--s,0)*28%)));
}
.hm-grid .v:hover{outline:2px solid var(--ac,#2563eb); outline-offset:0}
.col-focus .v[data-col="1"], .col-focus .v[data-col="2"], .col-focus .v[data-col="3"]{filter:saturate(1.15)}
.hm-tip{position:fixed;pointer-events:none;z-index:99; background:rgba(17,24,39,.96); color:#e5e7eb; font-size:.85rem; padding:6px 8px; border-radius:8px; transform:translate(-50%,-110%); display:none}
.hm-legend{display:flex;align-items:center;gap:8px;margin-top:8px;opacity:.8}
.hm-legend .bar{width:120px;height:10px;border-radius:999px;background:linear-gradient(90deg,#e5e7eb,#2563eb)}
html[data-theme="dark"] .hm-legend .bar{background:linear-gradient(90deg,#1f2937,#60a5fa)}
</style>

<script>
/* ---------- Spotlight data (edit scores 1–5 and link chips) ---------- */
const SPOTLIGHT = [
  { id:'data--ml',   title:'Data & ML',        score:5, links:['Python','pandas','scikit-learn','TensorFlow','PyTorch','FAISS','CLAP'] },
  { id:'analytics--bi', title:'Analytics & BI',score:4, links:['SQL','Tableau','Power BI','A/B','Cohorts'] },
  { id:'data-eng--orch',title:'Data Eng & Orchestration',score:4, links:['Airflow','Spark','Hadoop','dbt (basic)'] },
  { id:'db--storage',   title:'Databases & Storage', score:3, links:['PostgreSQL','MySQL','SQLite'] },
  { id:'cloud',         title:'Cloud',         score:3, links:['GCP','Azure'] },
  { id:'dev--infra',    title:'Dev & Infra',   score:3, links:['Git','Docker','Kubernetes (basics)'] },
  { id:'web--app',      title:'Web / App',     score:3, links:['HTML','CSS','JS'] },
  { id:'projects',      title:'Representative projects', score:4, links:['PulseFlow AI','Scrape-LLM','Sentiment Dashboard'] },
];
(function spotlight(){
  const row = document.getElementById('spRow');
  if(!row) return;
  SPOTLIGHT.forEach(s=>{
    const a = document.createElement('a');
    a.className='sp-card';
    a.href = '#'+s.id;
    a.innerHTML = `
      <div class="sp-top"><span>${s.title}</span></div>
      <div class="sp-meter"><i style="width:${(s.score/5)*100}%"></i></div>
      <div class="sp-links">${(s.links||[]).map(t=>`<span class="chip">${t}</span>`).join('')}</div>`;
    row.appendChild(a);
  });
})();

/* ---------- Heatmap data ---------- */
const HM_TOOLS = ['Python','SQL','Airflow','Spark','ML (TF/PT)','FAISS','Tableau/BI','dbt','Qiskit','Ollama'];
const HM_ROWS_DATA = [
  {label:'ETL & pipelines', notes:['Local jobs','Warehouse ops','DAG schedule','Batch at scale','N/A','N/A','Reporting layer','Modeling','N/A','N/A']},
  {label:'Feature engineering', notes:['Pandas/Numpy','SQL feats','Orchestration','Spark feats','Prep tensors','Vector build','N/A','Docs','N/A','N/A']},
  {label:'Experimentation (A/B)', notes:['Analyze','Metric SQL','Schedule checks','N/A','N/A','N/A','Dash KPIs','N/A','N/A','N/A']},
  {label:'Modeling (ML)', notes:['Training','Feature SQL','N/A','Spark ML','DL train','N/A','Model viz','N/A','N/A','N/A']},
  {label:'Retrieval / Search', notes:['Prep','Candidate SQL','N/A','N/A','Embed gen','ANN index','N/A','N/A','N/A','Local LLM assist']},
  {label:'Dashboards & storytelling', notes:['Scripts','Aggregates','N/A','N/A','N/A','N/A','Dashboards','N/A','N/A','N/A']},
];
/* Scores 0..5 per cell */
const MATRIX_DATA = [
  [5,4,4,3,4,5,2,1,0,3],
  [5,3,2,4,4,3,1,2,0,0],
  [5,5,1,0,1,0,5,0,0,0],
  [4,2,0,3,5,0,1,0,0,0],
  [3,3,0,0,4,5,0,0,0,4],
  [3,4,0,0,0,0,5,0,0,0],
];
const HM_ROWS_BIZ = [
  {label:'KPI / metrics', notes:['Py analysis','Core SQL','N/A','N/A','N/A','N/A','Viz','N/A','N/A','N/A']},
  {label:'Funnel / Cohorts', notes:['Compute','Window SQL','N/A','N/A','N/A','N/A','Viz','N/A','N/A','N/A']},
  {label:'Forecast / Planning', notes:['Stats','Model SQL','N/A','N/A','Light ML','N/A','Viz','N/A','N/A','N/A']},
  {label:'Growth Experiments', notes:['Analysis','Event SQL','N/A','N/A','N/A','N/A','Dash','N/A','N/A','N/A']},
  {label:'Decks / Narratives', notes:['Py charts','SQL pulls','N/A','N/A','N/A','N/A','Presentation','N/A','N/A','N/A']},
  {label:'Ops Intelligence', notes:['Ops py','Ops SQL','N/A','N/A','N/A','N/A','Ops BI','N/A','N/A','N/A']},
];
const MATRIX_BIZ = [
  [4,5,0,0,1,0,5,0,0,0],
  [4,5,0,0,1,0,5,0,0,0],
  [3,4,0,0,3,0,4,0,0,0],
  [4,5,0,0,1,0,4,0,0,0],
  [3,4,0,0,0,0,3,0,0,0],
  [4,5,0,0,0,0,4,0,0,0],
];

(function heatmap(){
  const grid = document.getElementById('hmGrid');
  if(!grid) return;
  const tip = document.createElement('div'); tip.className='hm-tip'; document.body.appendChild(tip);

  function render(rows, matrix){
    grid.innerHTML=''; grid.style.setProperty('--cols', HM_TOOLS.length); grid.style.setProperty('--first','140px');

    // Header
    const head = document.createElement('div'); head.className='row head';
    head.innerHTML = `<div class="cell y"></div>` + HM_TOOLS.map((t,i)=>`<div class="cell x" data-col="${i+1}">${t}</div>`).join('');
    grid.appendChild(head);

    // Rows
    rows.forEach((r,ri)=>{
      const row = document.createElement('div'); row.className='row';
      row.innerHTML = `<div class="cell y">${r.label}</div>` + matrix[ri].map((s,ci)=>{
        const note = (r.notes||[])[ci] || '';
        return `<div class="cell v" data-col="${ci+1}" data-score="${s}" style="--s:${s/5}" title="${note}">${s>0? s : ''}</div>`;
      }).join('');
      grid.appendChild(row);
    });

    // Hover tip (nicer than default title)
    grid.querySelectorAll('.v').forEach(c=>{
      c.addEventListener('mouseenter',e=>{
        const s = +c.getAttribute('data-score');
        const col = HM_TOOLS[+c.getAttribute('data-col')-1];
        tip.textContent = (c.title ? `${c.title} — ` : '') + `${s}/5 with ${col}`;
        tip.style.display='block';
      });
      c.addEventListener('mousemove',e=>{
        tip.style.left = e.pageX+'px'; tip.style.top = e.pageY+'px';
      });
      c.addEventListener('mouseleave',()=> tip.style.display='none');
    });

    // Click column to focus
    grid.querySelectorAll('.x').forEach(x=>{
      x.addEventListener('click',()=>{
        const col = x.getAttribute('data-col');
        grid.classList.toggle('col-focus');
        grid.querySelectorAll('.v').forEach(v=>{
          v.style.filter = (v.getAttribute('data-col')===col) ? 'saturate(1.5) contrast(1.1)' : '';
        });
      });
    });
  }

  // Toggle
  const tabs = document.querySelectorAll('.mode-toggle [role="tab"]');
  function setMode(m){
    tabs.forEach(b=>b.setAttribute('aria-selected', String(b.dataset.mode===m)));
    if(m==='biz') render(HM_ROWS_BIZ, MATRIX_BIZ);
    else render(HM_ROWS_DATA, MATRIX_DATA);
  }
  tabs.forEach(b=>b.addEventListener('click',()=> setMode(b.dataset.mode)));
  setMode('data');
})();
</script>



