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
  <h1>Say hi 👋</h1>
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
      <a class="btn" href="https://github.com/Philippe-Guerrier" target="_blank" rel="noopener">GitHub</a>
    </div>
    <p class="tiny">Tip: include role, location (hybrid), and timeline for a faster reply.</p>
  </div>
</div>

<style>
.contact-hero{text-align:center;margin:14px 0 8px}
.contact-hero h1{margin:0}
.contact-hero p{opacity:.85;margin:.25rem 0 0}

/* Stage */
.env-stage{display:grid;justify-items:center;gap:12px;margin:18px 0}

/* Envelope button */
.envelope{position:relative;width:220px;height:140px;border:0;background:transparent;cursor:pointer;outline-offset:4px}
.env-body{position:absolute;inset:20px 0 0 0;margin:auto;width:220px;height:120px;border-radius:8px;box-shadow:0 6px 16px rgba(2,6,23,.15)}
.env-flap{position:absolute;top:0;left:0;right:0;margin:0 auto;width:0;height:0;border-left:110px solid transparent;border-right:110px solid transparent;border-top:70px solid transparent;transform-origin:50% 100%;transition:transform .4s ease}
.env-seal{position:absolute;top:54px;left:0;right:0;margin:0 auto;width:42px;height:42px;display:grid;place-items:center;border-radius:999px;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,.12);transition:transform .25s ease}
.envelope:hover .env-seal{transform:scale(1.06)}

/* Light theme vars */
.envelope .env-body{background:linear-gradient(180deg,#ffffff,#f8fafc); border:1px solid #e5e7eb}
.envelope .env-seal{background:#ffffff;border:1px solid #e5e7eb}
.envelope .env-flap{border-top-color:#f1f5f9}

/* Dark theme */
html[data-theme="dark"] .envelope .env-body{background:linear-gradient(180deg,#0f172a,#0b1220); border:1px solid #1f2937}
html[data-theme="dark"] .envelope .env-seal{background:#0f172a;border:1px solid #1f2937;color:#e8eef7}
html[data-theme="dark"] .envelope .env-flap{border-top-color:#0f172a}

/* Open state */
.envelope[aria-expanded="true"] .env-flap{transform:rotateX(160deg)}
.envelope[aria-expanded="true"] + .env-card{display:block}

/* Card */
.env-card{max-width:520px;width:clamp(280px,80vw,520px);border:1px solid var(--bd,#e5e7eb);border-radius:12px;padding:14px;box-shadow:0 8px 24px rgba(2,6,23,.12)}
html[data-theme="dark"] .env-card{border-color:#1f2937;background:#0f172a;color:#e8eef7}
.env-card[hidden]{display:none}
.env-card h3{margin:.2rem 0 .5rem}
.c-links{display:flex;flex-wrap:wrap;gap:8px;margin:.4rem 0 .2rem}
.btn{display:inline-block;padding:8px 12px;border:1px solid var(--bd,#e5e7eb);border-radius:999px;text-decoration:none}
.btn:hover{border-color:#2563eb}
html[data-theme="dark"] .btn{border-color:#1f2937}
.tiny{opacity:.75;font-size:.9rem;margin:.25rem 0 0}
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


