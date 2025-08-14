---
title: Algorithm Arcade
permalink: /labs/arcade/
---

# Algorithm Arcade

<div class="tabs">
  <button data-tab="astar">A* Pathfinding</button>
  <button data-tab="gd">Gradient Descent</button>
  <button data-tab="bloom">Bloom Filter</button>
</div>

<section id="astar" class="pane">
  <p>Click cells to toggle walls. Start=🟢 (top-left), Goal=🎯 (bottom-right).</p>
  <canvas id="grid" width="600" height="360" style="border:1px solid #e5e7eb;border-radius:10px"></canvas>
  <div class="row"><button id="runA">Run A*</button> <button id="clearA">Clear walls</button></div>
</section>

<section id="gd" class="pane" hidden>
  <p>Minimize <code>f(x,y)=(x−2)^2+(y+1)^2</code>. Step sets learning rate.</p>
  <label>Step <input id="eta" type="range" min="0.01" max="0.5" value="0.08" step="0.01"></label>
  <button id="gdStart">Start</button> <button id="gdReset">Reset</button>
  <canvas id="gdPlot" width="600" height="360" style="border:1px solid #e5e7eb;border-radius:10px"></canvas>
</section>

<section id="bloom" class="pane" hidden>
  <p>Add strings, then query. May report “maybe” due to false positives.</p>
  <div class="row">
    <input id="bfAdd" placeholder="word to add"> <button id="bfAddBtn">Add</button>
    <input id="bfQry" placeholder="word to query"> <button id="bfQryBtn">Query</button>
  </div>
  <div id="bfOut"></div>
  <canvas id="bfBits" width="600" height="60" style="border:1px solid #e5e7eb;border-radius:10px"></canvas>
</section>

<style>
.tabs{display:flex;gap:8px;margin-bottom:8px}
.tabs button{padding:6px 10px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;cursor:pointer}
.pane{margin-top:6px}
.row{display:flex;gap:8px;align-items:center;margin-top:6px}
html[data-theme="dark"] canvas{border-color:#1f2937}
html[data-theme="dark"] .tabs button{background:#0f172a;border-color:#1f2937;color:#e8eef7}
</style>

<script>
(function(){
  // Tab switcher
  document.querySelectorAll('.tabs button').forEach(b=>{
    b.onclick=()=>{ document.querySelectorAll('.pane').forEach(p=>p.hidden=true);
      document.getElementById(b.dataset.tab).hidden=false; };
  });

  /* ===== A* PATHFINDING ===== */
  const gw=30, gh=18, cs=20, gridC=document.getElementById('grid'), gx=gridC.getContext('2d');
  let walls=new Set();
  function key(i,j){return i+','+j;}
  function drawGrid(path=[]){
    gx.clearRect(0,0,gridC.width,gridC.height);
    gx.strokeStyle='#e5e7eb'; for(let i=0;i<=gw;i++){gx.beginPath();gx.moveTo(i*cs,0);gx.lineTo(i*cs,gh*cs);gx.stroke();}
    for(let j=0;j<=gh;j++){gx.beginPath();gx.moveTo(0,j*cs);gx.lineTo(gw*cs,j*cs);gx.stroke();}
    walls.forEach(k=>{const [i,j]=k.split(',').map(Number);gx.fillStyle='#94a3b8';gx.fillRect(i*cs,j*cs,cs,cs);});
    // path
    gx.fillStyle='#f59e0b'; path.forEach(([i,j])=>gx.fillRect(i*cs+4,j*cs+4,cs-8,cs-8));
    // start/goal
    gx.fillStyle='#10b981'; gx.fillRect(2,2,cs-4,cs-4); // start (0,0)
    gx.fillStyle='#ef4444'; gx.fillRect((gw-1)*cs+2,(gh-1)*cs+2,cs-4,cs-4); // goal
  }
  gridC.onclick=e=>{
    const r=gridC.getBoundingClientRect(), i=(e.clientX-r.left)/cs|0, j=(e.clientY-r.top)/cs|0;
    const k=key(i,j); if(k!=='0,0' && k!==key(gw-1,gh-1)){ walls.has(k)?walls.delete(k):walls.add(k); drawGrid(); }
  };
  function aStar(){
    const start=[0,0], goal=[gw-1,gh-1];
    const open=new Set([key(...start)]), came={}, gScore={}, fScore={};
    gScore[key(...start)]=0; fScore[key(...start)]=gw+gh;
    function h([i,j]){ return Math.abs(i-goal[0])+Math.abs(j-goal[1]); }
    function neigh([i,j]){
      const n=[[i+1,j],[i-1,j],[i,j+1],[i,j-1]].filter(([x,y])=>x>=0&&y>=0&&x<gw&&y<gh&&!walls.has(key(x,y)));
      return n;
    }
    function lowest(){ let best=null,b=1e9; open.forEach(k=>{if(fScore[k]<b){b=fScore[k];best=k}}); return best; }
    while(open.size){
      const cur=lowest(); const [ci,cj]=cur.split(',').map(Number);
      if(cur===key(...goal)){ // reconstruct
        const path=[]; let k=cur; while(k){const [i,j]=k.split(',').map(Number); path.push([i,j]); k=came[k]; }
        return path.reverse();
      }
      open.delete(cur);
      for(const [ni,nj] of neigh([ci,cj])){
        const nk=key(ni,nj); const tentative=(gScore[cur]??1e9)+1;
        if(tentative < (gScore[nk]??1e9)){
          came[nk]=cur; gScore[nk]=tentative; fScore[nk]=tentative+h([ni,nj]);
          if(!(nk in fScore)) open.add(nk); else open.add(nk);
        }
      }
    }
    return [];
  }
  document.getElementById('runA').onclick=()=>drawGrid(aStar());
  document.getElementById('clearA').onclick=()=>{walls.clear(); drawGrid();};
  drawGrid();

  /* ===== GRADIENT DESCENT ===== */
  const pg=document.getElementById('gdPlot'), ctx=pg.getContext('2d'), etaEl=document.getElementById('eta');
  let pos={x:-3,y:3}, ticking=null;
  function f(x,y){ return (x-2)**2 + (y+1)**2; }
  function grad(x,y){ return {gx:2*(x-2), gy:2*(y+1)}; }
  function toPx(x,y){ // map world [-6..6]x[-6..6] to canvas
    const sx=(x+6)/12*pg.width, sy=(1-(y+6)/12)*pg.height; return {sx,sy};
  }
  function drawGD(){
    ctx.clearRect(0,0,pg.width,pg.height);
    // contours
    ctx.strokeStyle='#e5e7eb'; for(let r=1;r<=11;r+=2){
      ctx.beginPath();
      for(let a=0;a<=360;a++){
        const x=2+Math.cos(a*Math.PI/180)*Math.sqrt(r), y=-1+Math.sin(a*Math.PI/180)*Math.sqrt(r);
        const {sx,sy}=toPx(x,y); if(a===0) ctx.moveTo(sx,sy); else ctx.lineTo(sx,sy);
      } ctx.stroke();
    }
    // current point
    const {sx,sy}=toPx(pos.x,pos.y);
    ctx.fillStyle='#2563eb'; ctx.beginPath(); ctx.arc(sx,sy,6,0,6.283); ctx.fill();
  }
  function stepGD(){
    const lr=parseFloat(etaEl.value);
    const {gx,gy}=grad(pos.x,pos.y);
    pos.x -= lr*gx; pos.y -= lr*gy; drawGD();
    if(Math.hypot(pos.x-2,pos.y+1)>0.02 && ticking) requestAnimationFrame(stepGD);
    else ticking=null;
  }
  document.getElementById('gdStart').onclick=()=>{ if(!ticking){ ticking=true; stepGD(); } };
  document.getElementById('gdReset').onclick=()=>{ pos={x:-3,y:3}; drawGD(); };
  drawGD();

  /* ===== BLOOM FILTER ===== */
  const m=64,k=3,bits=new Uint8Array(m), bfC=document.getElementById('bfBits'), bx=bfC.getContext('2d'), out=document.getElementById('bfOut');
  function h1(s){let h=2166136261;for(let c of s) h=(h^c.charCodeAt(0))*16777619;return h>>>0;}
  function h(s,i){return (h1(s+i.toString())%m);}
  function drawBits(){ bx.clearRect(0,0,bfC.width,bfC.height); for(let i=0;i<m;i++){ bx.fillStyle=bits[i]?'#2563eb':'#e5e7eb'; bx.fillRect(i*(bfC.width/m),10,(bfC.width/m)-1,40);} }
  document.getElementById('bfAddBtn').onclick=()=>{ const w=document.getElementById('bfAdd').value.trim(); if(!w) return;
    for(let i=0;i<k;i++) bits[h(w,i)]=1; drawBits(); };
  document.getElementById('bfQryBtn').onclick=()=>{ const w=document.getElementById('bfQry').value.trim(); if(!w) return;
    const maybe=[...Array(k)].every((_,i)=>bits[h(w,i)]); out.textContent = maybe ? `"${w}" MAYBE in set` : `"${w}" NOT in set`; };
  drawBits();
})();
</script>
