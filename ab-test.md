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

  // Normal CDF
  function phi(z){ return 0.5*(1+Math.erf(z/Math.SQRT2)); }

  function fmtPct(x){ return (100*x).toFixed(2)+'%'; }
  function fmt(x){ return (Math.round(x*1000)/1000).toString(); }

  function calc(){
    const aN=+$('aN').value, aC=+$('aC').value, bN=+$('bN').value, bC=+$('bC').value;
    const alpha=+$('alpha').value;

    const p1=aC/aN, p2=bC/bN, lift=(p2-p1)/(p1||1);
    const pPool=(aC+bC)/(aN+bN);
    const seNull = Math.sqrt(pPool*(1-pPool)*(1/aN+1/bN));
    const z = (p2-p1)/seNull;
    const pTwo = 2*(1-phi(Math.abs(z)));      // two-tailed

    // Power (approx): under alternative, diff mean is (p2-p1), se_alt changes
    const seAlt = Math.sqrt(p1*(1-p1)/aN + p2*(1-p2)/bN);
    const zAlpha = Math.abs(invPhi(1-alpha/2));
    const zEff = Math.abs((p2-p1)/seAlt);
    const power = phi(-zAlpha + zEff) + (1-phi(zAlpha + zEff));  // two-tailed power

    const sig = pTwo < alpha ? 'YES' : 'NO';

    out.textContent =
`A: p = ${fmtPct(p1)}   ( ${aC}/${aN} )
B: p = ${fmtPct(p2)}   ( ${bC}/${bN} )
Lift (B vs A): ${fmtPct(lift)}

z = ${fmt(z)}   p(two-tailed) = ${fmt(pTwo)}   α = ${alpha}
Statistically significant?  ${sig}

Estimated power at observed effect: ${fmtPct(power)}
(se_null=${fmt(seNull)}, se_alt=${fmt(seAlt)}, z_alpha=${fmt(zAlpha)}, z_effect=${fmt(zEff)})`;
  }

  // Inverse CDF (Acklam’s approximation)
  function invPhi(p){
    if(p<=0||p>=1) return NaN;
    const a=[-3.969683028665376e+01, 2.209460984245205e+02,-2.759285104469687e+02, 1.383577518672690e+02,-3.066479806614716e+01, 2.506628277459239e+00];
    const b=[-5.447609879822406e+01, 1.615858368580409e+02,-1.556989798598866e+02, 6.680131188771972e+01,-1.328068155288572e+01];
    const c=[-7.784894002430293e-03,-3.223964580411365e-01,-2.400758277161838e+00,-2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
    const d=[7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
    const plow=0.02425, phigh=1-plow;
    let q,r;
    if(p<plow){ q=Math.sqrt(-2*Math.log(p)); return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);}
    if(phigh<p){ q=Math.sqrt(-2*Math.log(1-p)); return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);}
    q=p-0.5; r=q*q;
    return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q/(((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
  }

  $('runAB').onclick = calc; calc();
})();
</script>
