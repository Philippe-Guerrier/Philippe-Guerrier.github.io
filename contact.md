---
layout: default
title: Contact
permalink: /contact/
---
# Contact

[Home](/) · [About](/about/) · [Projects](/projects/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)

- Email: **philippeguerrier01@gmail.com**  
- LinkedIn: <https://www.linkedin.com/in/philippe-guerrier1/>  
- GitHub: <https://github.com/Philippe-Guerrier>  
- Portfolio: <https://sites.google.com/view/philippeguerrier/home>


<section class="contact-hero">
  <h1>Don't hesitate to contact me!</h1>
  <p>Pick up the envelope to reveal the goods.</p>
</section>

<!-- Origami envelope -->
<div class="env-stage">
  <button class="envelope" id="env" aria-expanded="false" aria-controls="envCard">
    <span class="env-flap"></span>
    <span class="env-body"></span>
    <span class="env-seal">✉️</span>
  </button>

  <div class="env-card" id="envCard" hidden>
    <h3>Let’s connect</h3>
    <div class="c-links">
      <a class="btn" href="mailto:philippeguerrier01@gmail.com?subject=Hello%20from%20your%20site">Email</a>
      <a class="btn" href="https://www.linkedin.com/in/philippe-guerrier1/" target="_blank" rel="noopener">LinkedIn</a>
      <a class="btn" href="https://profile.indeed.com/p/philippeg-14mjz3t" target="_blank" rel="noopener">Indeed</a>
    </div>
    <p class="tiny">Tip: I hope that my profile has convinced you!.</p>
  </div>
</div>

<style>
/* ---------- Theme variables for the card + buttons ---------- */
:root{
  --card-bg:#ffffff;
  --card-tx:#0b1220;
  --card-bd:#e5e7eb;

  --btn-bg:#ffffff;
  --btn-tx:#0b1220;
  --btn-bd:#e5e7eb;
  --btn-bg-h:#f8fafc;
  --btn-bd-h:#2563eb;
  --btn-shadow:0 1px 2px rgba(2,6,23,.06);
}
html[data-theme="dark"]{
  --card-bg:#0f172a;
  --card-tx:#e8eef7;
  --card-bd:#1f2937;

  --btn-bg:#0f172a;
  --btn-tx:#e8eef7;
  --btn-bd:#1f2937;
  --btn-bg-h:#111827;
  --btn-bd-h:#60a5fa;
  --btn-shadow:0 1px 2px rgba(0,0,0,.24);
}

/* ---------- Envelope card ---------- */
.env-card{
  max-width:520px;
  width:clamp(280px,80vw,520px);
  border:1px solid var(--card-bd);
  border-radius:12px;
  padding:14px;
  background:var(--card-bg);
  color:var(--card-tx);
  box-shadow:0 8px 24px rgba(2,6,23,.12);
}
.env-card[hidden]{display:none}
.env-card h3{margin:.2rem 0 .5rem}
.c-links{display:flex;flex-wrap:wrap;gap:8px;margin:.4rem 0 .2rem}
.tiny{opacity:.75;font-size:.9rem;margin:.25rem 0 0}

/* ---------- Buttons (theme-aware) ---------- */
.btn{
  display:inline-block;
  padding:8px 12px;
  border:1px solid var(--btn-bd);
  border-radius:999px;
  background:var(--btn-bg);
  color:var(--btn-tx) !important;  /* avoid purple visited links */
  text-decoration:none;
  box-shadow:var(--btn-shadow);
  transition:background .15s ease,border-color .15s ease,transform .06s ease;
}
.btn:hover{ background:var(--btn-bg-h); border-color:var(--btn-bd-h); }
.btn:active{ transform:translateY(1px); }
.btn:focus-visible{
  outline:2px solid var(--btn-bd-h);
  outline-offset:2px;
}

/* (keep your existing envelope visuals; shown for context) */
.envelope .env-body{background:linear-gradient(180deg,#ffffff,#f8fafc); border:1px solid #e5e7eb}
.envelope .env-seal{background:#ffffff;border:1px solid #e5e7eb}
.envelope .env-flap{border-top-color:#f1f5f9}
html[data-theme="dark"] .envelope .env-body{background:linear-gradient(180deg,#0f172a,#0b1220); border:1px solid #1f2937}
html[data-theme="dark"] .envelope .env-seal{background:#0f172a;border:1px solid #1f2937;color:#e8eef7}
html[data-theme="dark"] .envelope .env-flap{border-top-color:#0f172a}
</style>


<script>
(function(){
  const btn = document.getElementById('env');
  const card = document.getElementById('envCard');
  if(!btn || !card) return;

  function toggle(open){
    btn.setAttribute('aria-expanded', open);
    card.hidden = !open;
  }
  btn.addEventListener('click', ()=> toggle(btn.getAttribute('aria-expanded')!=='true'));
  btn.addEventListener('keydown', e=>{
    if(e.key==='Enter' || e.key===' '){ e.preventDefault(); toggle(btn.getAttribute('aria-expanded')!=='true'); }
  });
})();
</script>


