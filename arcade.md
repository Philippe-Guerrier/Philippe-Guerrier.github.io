---
title: Algorithm Arcade
permalink: /labs/arcade/
---

# Algorithm Arcade
Everything runs in your browser. Switch tabs below 👇

<div class="tabs">
  <button class="btn tab active" data-tab="astar" aria-pressed="true">A* Pathfinding</button>
  <button class="btn tab" data-tab="gd" aria-pressed="false">Gradient Descent+</button>
  <button class="btn tab" data-tab="bloom" aria-pressed="false">Bloom Filter</button>
</div>

<section id="astar" class="pane">
  <p><strong>Goal:</strong> find the shortest path on a grid, avoiding walls.</p>
  <ul>
    <li>Click cells to toggle walls.</li>
    <li>Start is <span style="color:#10b981">green</span> (top-left), goal is <span style="color:#ef4444">red</span> (bottom-right).</li>
  </ul>
  <div class="row">
    <button class="btn" id="runA">Run A*</button>
    <button class="btn" id="clearA">Clear walls</button>
  </div>
  <canvas id="grid" width="600" height="360" class="board"></canvas>

  <details class="exp">
    <summary><strong>How it works</strong></summary>
    <p>A* explores nodes with priority <code>f(n)=g(n)+h(n)</code> where <code>g</code> is distance from start and <code>h</code> is a heuristic (here: Manhattan distance). With an admissible <code>h</code>, A* returns an optimal path.</p>
    <p><em>Why it’s used:</em> games, maps, routing.</p>
  </details>
</section>

<section id="gd" class="pane" hidden>
  <p><strong>Goal:</strong> minimize a function with gradient‐based steps. Try a <em>non-convex</em> surface to see traps, noise to “shake” out of basins, or momentum to speed valleys.</p>

  <div class="row">
    <label>Objective
      <select id="obj" class="field">
        <option value="bowl">Quadratic bowl (convex)</option>
        <option value="himmel">Himmelblau (4 minima)</option>
        <option value="rastrigin">Rastrigin (many local minima)</option>
      </select>
    </label>

    <label>Step <input id="eta" type="range" min="0.01" max="0.6" value="0.08" step="0.01"></label>
    <label>Momentum β <input id="beta" type="range" min="0" max="0.95" value="0.80" step="0.05"></label>

    <label title="Gaussian noise added to the gradient">
      Noise σ <input id="noise" type="range" min="0" max="0.4" value="0.06" step="0.01">
    </label>

    <button class="btn" id="gdStart">Auto ▷</button>
    <button class="btn" id="gdStep">Step once</button>
    <button class="btn" id="gdRestart">Random restart</button>
    <button class="btn" id="gdClear">Clear trail</button>
  </div>

  <canvas id="gdPlot" width="600" height="360" class="board"></canvas>
  <div id="gdStats" class="card" style="margin-top:8px"></div>

  <details class="exp">
    <summary><strong>How it works</strong></summary>
    <p>Update rule with momentum & noise:
    <code>v ← β·v + (1−β)·(∇f(x) + 𝒩(0,σ²I))</code>,
    <code>x ← x − η·v</code>. When <code>β=0</code> and <code>σ=0</code> this reduces to vanilla GD.</p>
    <ul>
      <li><strong>Quadratic bowl:</strong> convex; any start converges.</li>
      <li><strong>Himmelblau:</strong> multiple minima; can get stuck near different solutions.</li>
      <li><strong>Rastrigin:</strong> many local minima; small noise sometimes helps escape.</li>
    </ul>
  </details>
</section>

<section id="bloom" class="pane" hidden>
  <p><strong>Goal:</strong> demonstrate a memory-efficient set structure with false positives.</p>
  <ul>
    <li>Add some words, then query others.</li>
    <li>Bloom filter replies “maybe” when all hashed bits are 1 (can be false positive), never false negative.</li>
  </ul>
  <div class="row">
    <input class="field" id="bfAdd" placeholder="word to add">
    <button class="btn" id="bfAddBtn">Add</button>
    <input class="field" id="bfQry" placeholder="word to query">
    <button class="btn" id="bfQryBtn">Query</button>
  </div>
  <div id="bfOut" class="card" style="margin-top:8px"></div>
  <canvas id="bfBits" width="600" height="60" class="board" style="margin-top:8px"></canvas>

  <details class="exp">
    <summary><strong>How it works</strong></summary>
    <p>We use an array of <code>m</code> bits and <code>k</code> hash functions. To add key <code>s</code>, set bits at indices <code>h_i(s)</code>. To query, check those bits; if any is 0 → “definitely not present”, else → “maybe present”.</p>
    <p><em>Why it’s used:</em> web caches, databases, network deduplication.</p>
  </details>
</section>

<style>
/* ---------- Theme tokens ---------- */
:root{
  --btn-bg:#ffffff; --btn-fg:#0b1220; --btn-bd:#e5e7eb; --btn-bg-hover:#f8fafc; --btn-active:#2563eb;
  --board-bd:#e5e7eb; --card-bd:#e5e7eb;
}
html[data-theme="dark"]{
  --btn-bg:#0f172a; --btn-fg:#e8eef7; --btn-bd:#1f2937; --btn-bg-hover:#111827; --btn-active:#3b82f6;
  --board-bd:#1f2937; --card-bd:#1f2937;
}

/* ---------- Layout ---------- */
.tabs{display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap}
.row{display:flex;gap:10px;align-items:center;margin:8px 0;flex-wrap:wrap}

/* ---------- Buttons ---------- */
.btn{padding:6px 12px;border:1px solid var(--btn-bd);border-radius:10px;background:var(--btn-bg);color:var(--btn-fg);cursor:pointer;transition:background .15s,border-color .15s,box-shadow .15s}
.btn:hover{background:var(--btn-bg-hover)}
.btn:focus{outline:2px solid var(--btn-active);outline-offset:2px}
.btn.tab.active{border-color:var(--btn-active);box-shadow:0 0 0 2px color-mix(in srgb,var(--btn-active) 30%,transparent)}

/* ---------- Inputs ---------- */
.field{padding:6px 10px;border:1px solid var(--btn-bd);border-radius:8px;background:transparent;color:inherit}

/* ---------- Canvases & cards ---------- */
.board{border:1px solid var(--board-bd);border-radius:10px}
.card{border:1px solid var(--card-bd);border-radius:10px;padding:8px}

/* ---------- Details ---------- */
.exp{margin-top:8px}
.exp summary{cursor:pointer}
</style>

<script>
(function(){
  // ===== Tabs
  document.querySelectorAll('.tabs .tab').forEach(b=>{
    b.onclick=()=>{
      document.querySelectorAll('.tabs .tab').forEach(t=>{t.classList.remove('active'); t.setAttribute('aria-pressed','false');});
      b.classList.add('active'); b.setAttribute('aria-pressed','true');
      document.querySelectorAll('.pane').forEach(p=>p.hidden=true);
      document.getElementById(b.dataset.tab).hidden=false;
    };
  });

  /* ===== A* PATHFINDING ===== */
  const gw=30, gh=18, cs=20, gridC=document.getElementById('grid'), gx=gridC.getContext('2d');
  let walls=new Set();
  function key(i,j){return i+','+j;}
  function drawGrid(path=[]){
    gx.clearRect(0,0,gridC.width,gridC.height);
    gx.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--board-bd').trim() || '#e5e7eb';
    for(let i=0;i<=gw;i++){gx.beginPath();gx.moveTo(i*cs,0);gx.lineTo(i*cs,gh*cs);gx.stroke();}
    for(let j=0;j<=gh;j++){gx.beginPath();gx.moveTo(0,j*cs);gx.lineTo(gw*cs,j*cs);gx.stroke();}
    walls.forEach(k=>{const [i,j]=k.split(',').map(Number);gx.fillStyle='#94a3b8';gx.fillRect(i*cs,j*cs,cs,cs);});
    gx.fillStyle='#f59e0b'; path.forEach(([i,j])=>gx.fillRect(i*cs+4,j*cs+4,cs-8,cs-8));
    gx.fillStyle='#10b981'; gx.fillRect(2,2,cs-4,cs-4);
    gx.fillStyle='#ef4444'; gx.fillRect((gw-1)*cs+2,(gh-1)*cs+2,cs-4,cs-4);
  }
  gridC.onclick=e=>{
    const r=gridC.getBoundingClientRect(), i=(e.clientX-r.left)/cs|0, j=(e.clientY-r.top)/cs|0;
    const k=key(i,j); if(k!=='0,0' && k!==key(gw-1,gh-1)){ walls.has(k)?walls.delete(k):walls.add(k); drawGrid(); }
  };
  function aStar(){
    const start=[0,0], goal=[gw-1,gh-1];
    const open=new Set([key(...start)]), came={}, gScore={}, fScore={};
    gScore[key(...start)]=0; fScore[key(...start)]=gw+gh;
    const H=([i,j])=>Math.abs(i-goal[0])+Math.abs(j-goal[1]);
    const neigh=([i,j])=>[[i+1,j],[i-1,j],[i,j+1],[i,j-1]].filter(([x,y])=>x>=0&&y>=0&&x<gw&&y<gh&&!walls.has(key(x,y)));
    const lowest=()=>{let best=null,b=1e9; open.forEach(k=>{if(fScore[k]<b){b=fScore[k];best=k}}); return best;};
    while(open.size){
      const cur=lowest(); const [ci,cj]=cur.split(',').map(Number);
      if(cur===key(gw-1,gh-1)){ const path=[]; let k=cur; while(k){ const [i,j]=k.split(',').map(Number); path.push([i,j]); k=came[k]; } return path.reverse(); }
      open.delete(cur);
      for(const [ni,nj] of neigh([ci,cj])){
        const nk=key(ni,nj); const tentative=(gScore[cur]??1e9)+1;
        if(tentative < (gScore[nk]??1e9)){
          came[nk]=cur; gScore[nk]=tentative; fScore[nk]=tentative+H([ni,nj]); open.add(nk);
        }
      }
    }
    return [];
  }
  document.getElementById('runA').onclick=()=>drawGrid(aStar());
  document.getElementById('clearA').onclick=()=>{walls.clear(); drawGrid();};
  drawGrid();

  /* ===== GRADIENT DESCENT+ ===== */
  const pg=document.getElementById('gdPlot'), ctx=pg.getContext('2d');
  const stats=document.getElementById('gdStats');
  const etaEl=document.getElementById('eta'), betaEl=document.getElementById('beta'), noiseEl=document.getElementById('noise');
  const objSel=document.getElementById('obj');
  const autoBtn=document.getElementById('gdStart');

  // Domain mapping: world [-6..6]^2 -> canvas
  const W=pg.width, H=pg.height; const L=-6, R=6, B=-6, T=6;
  const toPx=(x,y)=>({sx:(x-L)/(R-L)*W, sy:(1-(y-B)/(T-B))*H});
  const toXY=(sx,sy)=>({x: L + (sx/W)*(R-L), y: B + (1-(sy/H))*(T-B)});

  // Background heatmap (offscreen) to make landscapes visible
  const bg=document.createElement('canvas'); bg.width=W; bg.height=H; const bgx=bg.getContext('2d');
  function drawField(){
    const step=6; // px
    // sample to find min/max
    let vmin=Infinity, vmax=-Infinity;
    for(let y=0;y<H;y+=step){ for(let x=0;x<W;x+=step){
      const p=toXY(x+step/2,y+step/2); const v=f(p.x,p.y);
      if(v<vmin) vmin=v; if(v>vmax) vmax=v;
    }}
    const log = v => Math.log(1+Math.max(0,v-vmin)); // shift to keep >=0
    const maxLog = log(vmax);
    for(let y=0;y<H;y+=step){ for(let x=0;x<W;x+=step){
      const p=toXY(x+step/2,y+step/2); const v=f(p.x,p.y);
      const t = maxLog>0 ? (log(v)/maxLog) : 0;
      // color: light -> dark by t, respect theme (just vary lightness)
      const isDark = document.documentElement.getAttribute('data-theme')==='dark';
      const L0 = isDark ? 16 : 97, L1 = isDark ? 28 : 82; // lightness range
      const Lh = Math.round(L0 + (L1-L0)*t);
      bgx.fillStyle = `hsl(220, 25%, ${Lh}%)`;
      bgx.fillRect(x,y,step,step);
    }}
    // border
    bgx.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--board-bd').trim() || '#e5e7eb';
    bgx.strokeRect(0,0,W,H);
  }

  // Objectives + gradients
  let objective='bowl';
  function f(x,y){
    if(objective==='bowl')   return (x-2)**2 + (y+1)**2;
    if(objective==='himmel'){ const a=(x*x + y - 11), b=(x + y*y - 7); return a*a + b*b; }
    // rastrigin (A=10)
    const A=10; return 2*A + (x*x - A*Math.cos(2*Math.PI*x)) + (y*y - A*Math.cos(2*Math.PI*y));
  }
  function grad(x,y){
    if(objective==='bowl')   return {gx:2*(x-2), gy:2*(y+1)};
    if(objective==='himmel'){ const a=(x*x + y - 11), b=(x + y*y - 7); return {gx:4*x*a + 2*b, gy:2*a + 4*y*b}; }
    // rastrigin
    const A=10, twoPi=2*Math.PI; return {gx:2*x + A*twoPi*Math.sin(twoPi*x), gy:2*y + A*twoPi*Math.sin(twoPi*y)};
  }

  // State
  let pos=randomStart(), vel={x:0,y:0}, trail=[];
  let ticking=false, afId=null;

  function randomStart(){
    // start anywhere in domain (wider randomness makes it less "automatic")
    return {x: (Math.random()*12-6), y:(Math.random()*12-6)};
  }
  function randn(){ // Box–Muller
    let u=0,v=0; while(u===0) u=Math.random(); while(v===0) v=Math.random();
    return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);
  }

  function drawGD(){
    // background
    ctx.clearRect(0,0,W,H);
    ctx.drawImage(bg,0,0);
    // trail
    if(trail.length>1){
      ctx.beginPath();
      ctx.lineWidth=2;
      ctx.strokeStyle='rgba(37,99,235,0.8)';
      const p0=toPx(trail[0].x, trail[0].y); ctx.moveTo(p0.sx,p0.sy);
      for(let i=1;i<trail.length;i++){ const p=toPx(trail[i].x, trail[i].y); ctx.lineTo(p.sx,p.sy); }
      ctx.stroke();
    }
    // current point
    const p=toPx(pos.x,pos.y);
    ctx.fillStyle='#2563eb';
    ctx.beginPath(); ctx.arc(p.sx,p.sy,6,0,6.283); ctx.fill();
  }

  function stepOnce(){
    const eta=parseFloat(etaEl.value), beta=parseFloat(betaEl.value), sigma=parseFloat(noiseEl.value);
    let g=grad(pos.x,pos.y);
    if(sigma>0){ g.gx += sigma*randn(); g.gy += sigma*randn(); }
    // momentum (EMA of gradient), then step
    vel.x = beta*vel.x + (1-beta)*g.gx;
    vel.y = beta*vel.y + (1-beta)*g.gy;
    pos.x -= eta*vel.x; pos.y -= eta*vel.y;
    // keep in bounds (reflect)
    if(pos.x<L){ pos.x=L; vel.x*=-0.5; } if(pos.x>R){ pos.x=R; vel.x*=-0.5; }
    if(pos.y<B){ pos.y=B; vel.y*=-0.5; } if(pos.y>T){ pos.y=T; vel.y*=-0.5; }
    trail.push({x:pos.x,y:pos.y}); if(trail.length>400) trail.shift();
    drawGD();
    const val=f(pos.x,pos.y), gn=Math.hypot(grad(pos.x,pos.y).gx, grad(pos.x,pos.y).gy);
    stats.textContent = `x=${pos.x.toFixed(3)}, y=${pos.y.toFixed(3)}   f(x,y)=${val.toFixed(4)}   ‖∇f‖=${gn.toFixed(3)}   η=${eta}  β=${beta}  σ=${sigma}`;
  }

  function loop(){
    stepOnce();
    if(ticking) afId=requestAnimationFrame(loop);
  }

  function rebuild(){
    drawField(); // re-render landscape
    trail.length=0; vel={x:0,y:0}; drawGD();
  }

  // Controls
  document.getElementById('gdStep').onclick=stepOnce;
  document.getElementById('gdRestart').onclick=()=>{ pos=randomStart(); trail.length=0; vel={x:0,y:0}; drawGD(); };
  document.getElementById('gdClear').onclick=()=>{ trail.length=0; drawGD(); };
  autoBtn.onclick=()=>{
    if(ticking){ ticking=false; cancelAnimationFrame(afId); autoBtn.textContent='Auto ▷'; }
    else { ticking=true; autoBtn.textContent='Auto ❚❚'; loop(); }
  };
  objSel.onchange=()=>{ objective=objSel.value; rebuild(); };
  // Redraw background if theme toggles
  const obs=new MutationObserver(()=>rebuild());
  obs.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

  // init
  rebuild();

  /* ===== BLOOM FILTER ===== */
  const m=64,k=3,bits=new Uint8Array(m), bfC=document.getElementById('bfBits'), bx=bfC.getContext('2d'), out=document.getElementById('bfOut');
  function h1(s){let h=2166136261;for(let c of s) h=(h^c.charCodeAt(0))*16777619;return h>>>0;}
  function h(s,i){return (h1(s+i.toString())%m);}
  function drawBits(){
    bx.clearRect(0,0,bfC.width,bfC.height);
    const on='#2563eb', off=getComputedStyle(document.documentElement).getPropertyValue('--board-bd').trim() || '#e5e7eb';
    for(let i=0;i<m;i++){ bx.fillStyle=bits[i]?on:off; bx.fillRect(i*(bfC.width/m),10,(bfC.width/m)-1,40); }
  }
  document.getElementById('bfAddBtn').onclick=()=>{ const w=document.getElementById('bfAdd').value.trim(); if(!w) return;
    for(let i=0;i<k;i++) bits[h(w,i)]=1; drawBits(); };
  document.getElementById('bfQryBtn').onclick=()=>{ const w=document.getElementById('bfQry').value.trim(); if(!w) return;
    const maybe=[...Array(k)].every((_,i)=>bits[h(w,i)]); out.textContent = maybe ? `"${w}" MAYBE in set` : `"${w}" NOT in set`; };
  drawBits();
})();
</script>
