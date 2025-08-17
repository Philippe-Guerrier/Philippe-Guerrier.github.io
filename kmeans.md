---
title: K-Means Playground
permalink: /labs/kmeans/
---

# K-Means Playground (drag points, change K)

<div class="km-toolbar">
  <label>K <input id="kval" type="range" min="2" max="6" value="3"></label>
  <button id="reset">Reset points</button>
  <button id="step">Step</button>
  <button id="auto">Auto ▷</button>
</div>
<canvas id="km" width="720" height="440" style="border:1px solid #e5e7eb;border-radius:10px"></canvas>

<!-- Share controls (outside toolbar) -->
<div class="share-row" style="margin-top:10px">
  <button id="shareLink"  class="km-btn">Share setup</button>
  <button id="resetState" class="km-btn">Reset parameters</button>
</div>

<style>
.km-toolbar{display:flex;gap:8px;margin-bottom:8px}
.km-toolbar button{padding:6px 10px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;cursor:pointer}
.km-toolbar input[type=range]{vertical-align:middle}
html[data-theme="dark"] #km{border-color:#1f2937}
html[data-theme="dark"] .km-toolbar button{background:#0f172a;border-color:#1f2937;color:#e8eef7}
</style>

<script src="/assets/js/share-state.js"></script>

<script>
// 1) Load initial state (defaults if no query present)
const state = StateShare.load({ k:3, pts:[] }); // pts = [[x,y], ...]

// TODO: initialize your UI from state.k and state.pts here
// e.g., set k slider/input, draw existing points

// 2) Whenever k or points change, call:
function persist(){ StateShare.save({ k: currentK, pts: currentPointsArray }); }

// 3) Wire buttons
document.getElementById('shareLink').onclick = e => StateShare.copyLink(e.target);
document.getElementById('resetState').onclick = () => StateShare.reset();
</script>

<script>
(function(){
  const W=720,H=440,c=document.getElementById('km'),g=c.getContext('2d');
  const col=['#2563eb','#16a34a','#f59e0b','#ef4444','#a855f7','#06b6d4'];
  let P=[], C=[], K=3, dragging=null, auto=null;

  function rand(n){ return Math.random()*n|0; }
  function init(n=140){
    P=[...Array(n)].map(()=>({x:20+Math.random()*(W-40), y:20+Math.random()*(H-40), k:0}));
    C=[...Array(K)].map((_,i)=>({x:W*(i+1)/(K+1), y:H*(i+1)/(K+1)}));
    assign(); draw();
  }
  function assign(){
    P.forEach(p=>{
      let best=0,b=1e9;
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
      if(S.length){ C[k].x=S.reduce((s,p)=>s+p.x,0)/S.length; C[k].y=S.reduce((s,p)=>s+p.y,0)/S.length; }
    }
  }
  function step(){ assign(); update(); draw(); }
  function draw(){
    g.clearRect(0,0,W,H);
    P.forEach(p=>{ g.fillStyle=col[p.k]; g.beginPath(); g.arc(p.x,p.y,3,0,6.283); g.fill(); });
    for(let k=0;k<K;k++){ g.strokeStyle=col[k]; g.lineWidth=3; g.strokeRect(C[k].x-6,C[k].y-6,12,12); }
  }

  // Interactions: drag points, click to add
  c.onmousedown=e=>{
    const r=c.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
    const hit=P.find(p=> (p.x-x)**2+(p.y-y)**2 < 7**2 );
    if(hit){ dragging=hit; }
    else { P.push({x,y,k:0}); step(); }
  };
  c.onmousemove=e=>{
    if(!dragging) return;
    const r=c.getBoundingClientRect(); dragging.x=e.clientX-r.left; dragging.y=e.clientY-r.top; step();
  };
  c.onmouseup=()=> dragging=null; c.onmouseleave=()=> dragging=null;

  // Controls
  document.getElementById('kval').oninput=e=>{
    K=+e.target.value; C=[...Array(K)].map((_,i)=>({x:W*(i+1)/(K+1),y:H*(i+1)/(K+1)})); step();
  };
  document.getElementById('reset').onclick=()=>init();
  document.getElementById('step').onclick=step;
  document.getElementById('auto').onclick=e=>{
    if(auto){ clearInterval(auto); auto=null; e.target.textContent='Auto ▷'; }
    else { auto=setInterval(step,400); e.target.textContent='Auto ❚❚'; }
  };

  init();
})();
</script>






