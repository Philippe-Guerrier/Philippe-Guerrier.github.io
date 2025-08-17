---
title: K-Means Playground
permalink: /labs/kmeans/
---

# K-Means Playground (drag points, change K)

<div class="km-toolbar">
  <label>K <input id="kval" type="range" min="2" max="6" value="3"></label>
  <button id="reset" class="km-btn">Reset points</button>
  <button id="step"  class="km-btn">Step</button>
  <button id="auto"  class="km-btn">Auto ▷</button>
</div>

<canvas id="km" width="720" height="440" style="border:1px solid #e5e7eb;border-radius:10px"></canvas>

<div class="share-row" style="margin-top:10px">
  <button id="shareLink"  class="km-btn">Share setup</button>
  <button id="resetState" class="km-btn">Reset parameters</button>
</div>

<style>
.km-toolbar{display:flex;gap:8px;margin-bottom:8px;align-items:center}
.km-toolbar input[type=range]{vertical-align:middle}
.km-btn{padding:6px 10px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;cursor:pointer}
.km-btn:hover{background:#f8fafc}
html[data-theme="dark"] #km{border-color:#1f2937}
html[data-theme="dark"] .km-btn{background:#0f172a;border-color:#1f2937;color:#e8eef7}
</style>

<!-- Inline StateShare fallback so buttons always work -->
<script>
window.StateShare = window.StateShare || (function(){
  function _parse(){
    const p = new URLSearchParams(location.search);
    const k = p.get('k'); const pts = p.get('pts');
    return {
      k: k ? (+k||3) : undefined,
      pts: pts ? pts.split(';')
                 .map(s=>s.split(',').map(Number))
                 .filter(a=>a.length===2 && a.every(n=>Number.isFinite(n))) : undefined
    };
  }
  function load(defaults){
    const s = _parse();
    return {
      k: (s.k ?? defaults.k),
      pts: (s.pts ?? defaults.pts)
    };
  }
  function save({k, pts}){
    const p = new URLSearchParams(location.search);
    if (k != null) p.set('k', k);
    if (Array.isArray(pts))
      p.set('pts', pts.map(([x,y])=>`${Math.round(x)},${Math.round(y)}`).join(';'));
    const url = location.pathname + '?' + p.toString() + location.hash;
    history.replaceState(null, '', url);
  }
  async function copyLink(btn){
    try{
      await navigator.clipboard.writeText(location.href);
      const old = btn.textContent; btn.textContent='Copied!'; setTimeout(()=>btn.textContent=old, 1200);
    }catch(_){ alert(location.href); }
  }
  function reset(){
    history.replaceState(null,'', location.pathname);
    location.reload();
  }
  return { load, save, copyLink, reset };
})();
</script>

<script>
(function(){
  // ====== State & canvas setup ======
  const W=720,H=440,c=document.getElementById('km'),g=c.getContext('2d');
  const col=['#2563eb','#16a34a','#f59e0b','#ef4444','#a855f7','#06b6d4'];

  // Load sharable state (query string), fallback to defaults
  const defaults = { k:3, pts:[] };
  const shared   = StateShare.load(defaults);

  let P=[], C=[], K = shared.k ?? 3;
  let dragging=null, auto=null;

  // DOM
  const kval  = document.getElementById('kval');
  const reset = document.getElementById('reset');
  const stepB = document.getElementById('step');
  const autoB = document.getElementById('auto');

  kval.value = K;

  function toArrayPoints(){ return P.map(p=>[Math.round(p.x), Math.round(p.y)]); }
  function persist(){ StateShare.save({ k:K, pts: toArrayPoints() }); }

  function assign(){
    P.forEach(p=>{
      let best=0,b=Infinity;
      for(let k=0;k<K;k++){
        const dx=p.x-C[k].x, dy=p.y-C[k].y, d=dx*dx+dy*dy;
        if(d<b){b=d;best=k;}
      }
      p.k=best;
    });
  }

  function update(){
    for(let k=0;k<K;k++){
      const S=P.filter(p=>p.k===k);
      if(S.length){
        C[k].x=S.reduce((s,p)=>s+p.x,0)/S.length;
        C[k].y=S.reduce((s,p)=>s+p.y,0)/S.length;
      }
    }
  }

  function step(){ assign(); update(); draw(); }

  function draw(){
    g.clearRect(0,0,W,H);
    P.forEach(p=>{ g.fillStyle=col[p.k%col.length]; g.beginPath(); g.arc(p.x,p.y,3,0,Math.PI*2); g.fill(); });
    for(let k=0;k<K;k++){ g.strokeStyle=col[k%col.length]; g.lineWidth=3; g.strokeRect(C[k].x-6,C[k].y-6,12,12); }
  }

  function initRandom(n=140){
    P=[...Array(n)].map(()=>({x:20+Math.random()*(W-40), y:20+Math.random()*(H-40), k:0}));
    C=[...Array(K)].map((_,i)=>({x:W*(i+1)/(K+1), y:H*(i+1)/(K+1)}));
    step(); persist();
  }

  function initFromState(){
    if (Array.isArray(shared.pts) && shared.pts.length){
      P = shared.pts.map(([x,y])=>({x:Math.max(2,Math.min(W-2, +x||0)),
                                    y:Math.max(2,Math.min(H-2, +y||0)),
                                    k:0}));
      C=[...Array(K)].map((_,i)=>({x:W*(i+1)/(K+1), y:H*(i+1)/(K+1)}));
      step();
    } else {
      initRandom();
    }
  }

  // Interactions: drag points / click to add
  c.onmousedown=e=>{
    const r=c.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
    const hit=P.find(p=> (p.x-x)**2+(p.y-y)**2 < 7**2 );
    if(hit){ dragging=hit; }
    else { P.push({x,y,k:0}); step(); persist(); }
  };
  c.onmousemove=e=>{
    if(!dragging) return;
    const r=c.getBoundingClientRect();
    dragging.x=Math.max(2,Math.min(W-2, e.clientX-r.left));
    dragging.y=Math.max(2,Math.min(H-2, e.clientY-r.top));
    step();
  };
  c.onmouseup=()=>{ if(dragging){ dragging=null; persist(); } };
  c.onmouseleave=()=>{ if(dragging){ dragging=null; persist(); } };

  // Controls
  kval.oninput=e=>{
    K=+e.target.value;
    C=[...Array(K)].map((_,i)=>({x:W*(i+1)/(K+1),y:H*(i+1)/(K+1)}));
    step(); persist();
  };
  reset.onclick = ()=>{ initRandom(); };
  stepB.onclick  = step;
  autoB.onclick  = e=>{
    if(auto){ clearInterval(auto); auto=null; e.target.textContent='Auto ▷'; }
    else { auto=setInterval(step,400); e.target.textContent='Auto ❚❚'; }
  };

  // Share buttons
  document.getElementById('shareLink').onclick  = (ev)=> StateShare.copyLink(ev.target);
  document.getElementById('resetState').onclick = ()=>  StateShare.reset();

  // Go!
  initFromState();
})();
</script>
