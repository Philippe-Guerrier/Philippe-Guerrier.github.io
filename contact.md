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



<!-- Origami envelope -->
<section class="contact-hero">
  <h1>Don't hesitate to contact me!</h1>
  <p>Pick up the envelope to reveal the interesting info</p>
</section>

<!-- Origami envelope (centered, animated, theme-aware) -->
<div class="env-stage">
  <div class="env-shadow" aria-hidden="true"></div>

  <button class="envelope" id="env" aria-expanded="false" aria-controls="envCard">
    <span class="env-body" aria-hidden="true"></span>
    <span class="env-left" aria-hidden="true"></span>
    <span class="env-right" aria-hidden="true"></span>
    <span class="env-flap" aria-hidden="true"></span>
    <span class="env-paper" aria-hidden="true">
      <i></i><i></i><i></i>
    </span>
    <span class="env-seal" aria-hidden="true">✉️</span>
  </button>

  <div class="env-card" id="envCard" hidden>
    <h3>Let’s connect</h3>
    <div class="c-links">
      <a class="btn" href="mailto:philippeguerrier01@gmail.com?subject=Hello%20from%20your%20site">Email</a>
      <a class="btn" href="https://www.linkedin.com/in/philippe-guerrier1/" target="_blank" rel="noopener">LinkedIn</a>
      <a class="btn" href="https://profile.indeed.com/p/philippeg-14mjz3t" target="_blank" rel="noopener">Indeed</a>
    </div>
    <p class="tiny">Tip: I hope that my profile has convinced you!</p>
  </div>
</div>

<style>
/* ===== Theme tokens (page-scoped) ===== */
:root{
  /* surfaces */
  --card-bg:#ffffff;      --card-tx:#0b1220;   --card-bd:#e5e7eb;
  --btn-bg:#ffffff;       --btn-tx:#0b1220;    --btn-bd:#e5e7eb;
  --btn-bg-h:#f8fafc;     --btn-bd-h:#2563eb;  --btn-shadow:0 1px 2px rgba(2,6,23,.06);

  /* envelope */
  --env-bg:#ffffff;       --env-edge:#e5e7eb;  --env-grad:linear-gradient(180deg,#fff,#f8fafc);
  --paper-bg:#ffffff;     --paper-line:#e5e7eb; --paper-shadow:rgba(2,6,23,.12);
  --seal-bg:#ffffff;      --seal-bd:#e5e7eb;   --seal-tx:#0b1220;

  /* accents + misc */
  --ac:#2563eb;
  --shadow-lg:0 16px 48px rgba(2,6,23,.16);
  --shadow-md:0 8px 24px rgba(2,6,23,.12);
  --stage-shadow:radial-gradient(ellipse 50% 12px at 50% 50%, rgba(2,6,23,.25), transparent 60%);

  /* size */
  --W: clamp(240px, 64vw, 360px);
  --H: calc(var(--W) * 0.62);
  --R: 10px;
}
html[data-theme="dark"]{
  --card-bg:#0f172a;      --card-tx:#e8eef7;   --card-bd:#1f2937;
  --btn-bg:#0f172a;       --btn-tx:#e8eef7;    --btn-bd:#1f2937;
  --btn-bg-h:#111827;     --btn-bd-h:#60a5fa;  --btn-shadow:0 1px 2px rgba(0,0,0,.24);

  --env-bg:#0f172a;       --env-edge:#1f2937;  --env-grad:linear-gradient(180deg,#111827,#0b1220);
  --paper-bg:#0f172a;     --paper-line:#1f2937; --paper-shadow:rgba(0,0,0,.35);
  --seal-bg:#0f172a;      --seal-bd:#1f2937;   --seal-tx:#e8eef7;

  --ac:#60a5fa;
  --shadow-lg:0 16px 48px rgba(0,0,0,.38);
  --shadow-md:0 8px 24px rgba(0,0,0,.28);
  --stage-shadow:radial-gradient(ellipse 50% 12px at 50% 50%, rgba(0,0,0,.45), transparent 60%);
}

/* ===== Layout ===== */
.contact-hero{text-align:center;margin:14px 0 8px}
.contact-hero h1{margin:0}
.contact-hero p{opacity:.85;margin:.25rem 0 0; text-indent:4ch}

.env-stage{
  display:grid; justify-items:center; align-content:start;
  gap:14px; margin:22px 0 18px;
}
.env-shadow{
  width:calc(var(--W) * .75);
  height:18px; background:var(--stage-shadow); border-radius:999px;
  filter:blur(2px);
}

/* ===== Envelope 3D button ===== */
.envelope{
  position:relative; width:var(--W); height:var(--H);
  border:0; background:transparent; cursor:pointer; outline-offset:4px;
  transform-style:preserve-3d;
  transition:transform .2s ease, filter .2s ease;
}
.envelope:hover{ transform:translateY(-2px); filter:saturate(1.02) }

/* base rectangle (back) */
.env-body{
  position:absolute; inset:0;
  background:var(--env-grad);
  border:1px solid var(--env-edge); border-radius:var(--R);
  box-shadow:var(--shadow-md);
}

/* side flaps */
.env-left,.env-right{
  position:absolute; inset:0; border-radius:var(--R);
  background:var(--env-bg); border:1px solid var(--env-edge);
  clip-path:polygon(0 0, 50% 50%, 0 100%);
}
.env-right{
  clip-path:polygon(100% 0, 50% 50%, 100% 100%);
}

/* top flap (3D hinge) */
.env-flap{
  position:absolute; left:0; right:0; top:0; height:52%;
  transform-origin:50% 0%;
  background:var(--env-grad); border:1px solid var(--env-edge); border-bottom:none;
  clip-path:polygon(0 0, 100% 0, 50% 100%);
  border-top-left-radius:var(--R); border-top-right-radius:var(--R);
  transform:rotateX(0deg);
  transition:transform .5s cubic-bezier(.2,.7,.2,1);
  backface-visibility:hidden;
}

/* seal */
.env-seal{
  position:absolute; left:50%; top:calc(50% - 6px); transform:translate(-50%,-50%);
  width:46px; height:46px; display:grid; place-items:center;
  background:var(--seal-bg); color:var(--seal-tx);
  border:1px solid var(--seal-bd); border-radius:999px;
  box-shadow:0 2px 10px rgba(0,0,0,.12);
  transition:transform .15s ease;
}
.envelope:hover .env-seal{ transform:translate(-50%,-50%) scale(1.06) }

/* letter (paper) */
.env-paper{
  position:absolute; left:6%; right:6%; bottom:8%;
  height:66%; background:var(--paper-bg); border:1px solid var(--env-edge);
  border-radius:8px; box-shadow:0 6px 18px var(--paper-shadow);
  transform:translateY(18%); opacity:.96;
  transition:transform .5s cubic-bezier(.2,.7,.2,1), opacity .3s ease;
  overflow:hidden;
}
.env-paper i{
  position:absolute; left:10px; right:10px; height:2px; background:var(--paper-line); opacity:.6;
}
.env-paper i:nth-child(1){ top:18px }
.env-paper i:nth-child(2){ top:34px }
.env-paper i:nth-child(3){ top:50px }

/* open state */
.envelope[aria-expanded="true"] .env-flap{ transform:rotateX(160deg) }
.envelope[aria-expanded="true"] .env-paper{ transform:translateY(-8%); opacity:1 }

/* ===== Card under envelope ===== */
.env-card{
  max-width:560px; width:clamp(280px,80vw,560px);
  border:1px solid var(--card-bd); border-radius:12px;
  padding:14px; background:var(--card-bg); color:var(--card-tx);
  box-shadow:var(--shadow-lg);
  transform:translateY(-2px); opacity:0; transition:opacity .35s ease, transform .35s ease;
}
.env-card[hidden]{ display:block; visibility:hidden; height:0; padding:0; border:0; box-shadow:none }
.envelope[aria-expanded="true"] + .env-card{ opacity:1; transform:translateY(0); visibility:visible; height:auto; padding:14px; border:1px solid var(--card-bd) }
.env-card h3{ margin:.2rem 0 .5rem }
.c-links{ display:flex; flex-wrap:wrap; gap:8px; margin:.4rem 0 .2rem }

/* theme-aware pill buttons */
.btn{
  display:inline-block; padding:9px 12px; border:1px solid var(--btn-bd);
  border-radius:999px; background:var(--btn-bg); color:var(--btn-tx) !important;
  text-decoration:none; box-shadow:var(--btn-shadow);
  transition:background .15s ease, border-color .15s ease, transform .06s ease;
}
.btn:hover{ background:var(--btn-bg-h); border-color:var(--btn-bd-h) }
.btn:active{ transform:translateY(1px) }
.btn:focus-visible{ outline:2px solid var(--btn-bd-h); outline-offset:2px }

.tiny{ opacity:.75; font-size:.9rem; margin:.25rem 0 0 }

/* Motion respect */
@media (prefers-reduced-motion: reduce){
  .envelope, .env-flap, .env-paper, .env-card{ transition:none !important }
}
</style>

<script>
(function(){
  const env  = document.getElementById('env');
  const card = document.getElementById('envCard');
  if(!env || !card) return;

  function setOpen(open){
    env.setAttribute('aria-expanded', open);
    if(open){
      card.hidden = false;
      // ensure animation frame so transitions run after unhide
      requestAnimationFrame(()=> card.style.removeProperty('visibility'));
    }else{
      // fade out via CSS, then hide after a tick to keep height collapse smooth
      card.hidden = true;
    }
  }

  env.addEventListener('click', ()=> setOpen(env.getAttribute('aria-expanded')!=='true'));
  env.addEventListener('keydown', e=>{
    if(e.key==='Enter' || e.key===' '){ e.preventDefault(); setOpen(env.getAttribute('aria-expanded')!=='true'); }
  });

  // Optional: click outside to close
  document.addEventListener('click', (e)=>{
    if(!env.contains(e.target) && !card.contains(e.target)){
      if(env.getAttribute('aria-expanded')==='true') setOpen(false);
    }
  }, {capture:true});
})();
</script>



