---
title: A/B Test Simulator
permalink: /labs/ab/
---

# A/B Test Simulator (client-side)

<div class="ab card">
  <label>A visits <input id="aN" type="number" value="2000" min="1"></label>
  <label>A conversions <input id="aC" type="number" value="180" min="0"></label>
  <label>B visits <input id="bN" type="number" value="2000" min="1"></label>
  <label>B conversions <input id="bC" type="number" value="210" min="0"></label>
  <label>α (two-tailed) <input id="alpha" type="number" step="0.001" value="0.05" min="0.001" max="0.2"></label>
  <button id="runAB">Compute</button>
</div>

<div class="ab results card" id="abOut" aria-live="polite"></div>

<style>
.ab.card{display:grid;gap:8px;grid-template-columns:repeat(2,minmax(220px,1fr));align-items:end;padding:12px;border:1px solid #e5e7eb;border-radius:12px}
.ab.card label{display:flex;justify-content:space-between;gap:8px}
.ab.card input{width:120px;padding:6px;border:1px solid #e5e7eb;border-radius:8px;background:transparent}
.ab.card button{grid-column:1/-1;padding:8px 12px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;cursor:pointer}
.results.card{margin-top:12px;padding:12px;border:1px solid #e5e7eb;border-radius:12px;white-space:pre-wrap}

html[data-theme="dark"] .ab.card,
html[data-theme="dark"] .results.card{border-color:#1f2937}
html[data-theme="dark"] .ab.card input{border-color:#1f2937;background:#0f172a;color:#e8eef7}
html[data-theme="dark"] .ab.card button{background:#0f172a;color:#e8eef7;border-color:#1f2937}
</style>

<script>
(function(){
  const $ = id => document.getElementById(id);
  const out = $('abOut');

  /* ---- Polyfill Math.erf (Abramowitz & Stegun 7.1.26) ---- */
  if (!('erf' in Math)) {
    Math.erf = function(x){
      const sign = x < 0 ? -1 : 1; x = Math.abs(x);
      const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911;
      const t=1/(1+p*x);
      const y=1-((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t*Math.exp(-x*x);
      return sign*y;
    };
  }

  /* ---- Helpers ---- */
  function phi(z){ return 0.5*(1 + Math.erf(z/Math.SQRT2)); }         // normal CDF
  function num(v, fb=0){ const x=parseFloat(v); return Number.isFinite(x)?x:fb; }
  function fmtPct(x){ return (100*x).toFixed(2) + '%'; }
  function fmt(x, n=3){ return Number.isFinite(x) ? x.toFixed(n) : '—'; }

  // Inverse CDF Φ⁻¹ (Acklam’s approximation)
  function invPhi(p){
    if(p<=0||p>=1) return NaN;
    const a=[-39.69683028665376,220.9460984245205,-275.9285104469687,138.3577518672690,-30.66479806614716,2.506628277459239];
    const b=[-54.47609879822406,161.5858368580409,-155.6989798598866,66.80131188771972,-13.28068155288572];
    const c=[-7.784894002430293e-3,-0.3223964580411365,-2.400758277161838,-2.549732539343734,4.374664141464968,2.938163982698783];
    const d=[7.784695709041462e-3,0.3224671290700398,2.445134137142996,3.754408661907416];
    const pl=0.02425, ph=1-pl; let q,r;
    if(p<pl){ q=Math.sqrt(-2*Math.log(p)); return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
    if(p>ph){ q=Math.sqrt(-2*Math.log(1-p)); return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
    q=p-0.5; r=q*q;
    return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q/(((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
  }

  function calc(){
    const aN=num($('aN').value), aC=num($('aC').value),
          bN=num($('bN').value), bC=num($('bC').value),
          alpha=num($('alpha').value, 0.05);

    // Basic validation
    if (aN<=0 || bN<=0) { out.textContent='Visitors must be > 0'; return; }
    if (aC<0 || bC<0 || aC>aN || bC>bN) { out.textContent='Conversions must be 0..visits'; return; }

    const p1=aC/aN, p2=bC/bN;
    const pPool=(aC+bC)/(aN+bN);
    const seNull=Math.sqrt(pPool*(1-pPool)*(1/aN+1/bN));
    const z=(p2-p1)/seNull;
    const pTwo=2*(1-phi(Math.abs(z)));

    // Power estimate under observed effect
    const seAlt=Math.sqrt(p1*(1-p1)/aN + p2*(1-p2)/bN);
    const zAlpha=Math.abs(invPhi(1-alpha/2));
    const zEff=Math.abs((p2-p1)/seAlt);
    const power = phi(-zAlpha + zEff) + (1 - phi(zAlpha + zEff));

    const lift = p1===0 ? 0 : (p2-p1)/p1;

    out.textContent =
`A: p = ${fmtPct(p1)}   (${aC}/${aN})
B: p = ${fmtPct(p2)}   (${bC}/${bN})
Lift (B vs A): ${fmtPct(lift)}

z = ${fmt(z)}    p(two-tailed) = ${fmt(pTwo,4)}    α = ${alpha}
Significant?  ${pTwo < alpha ? 'YES' : 'NO'}

Estimated power (at observed effect): ${fmtPct(power)}
(se_null=${fmt(seNull)}, se_alt=${fmt(seAlt)}, z_alpha=${fmt(zAlpha)}, z_effect=${fmt(zEff)})`;
  }

  $('runAB').addEventListener('click', calc);
  calc(); // initial render
})();
</script>
