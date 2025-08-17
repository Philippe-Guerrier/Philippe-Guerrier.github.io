---
layout: default
title: Experience
permalink: /experience/
---
# Experience
[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)



### Deezer — Data Analyst (Intern)  
**Apr 2025 – Sep 2025 · Paris (Hybrid)**  
- SQL, Python, Airflow  
- Dashboard development  
- Product & Operations analytics  

---

### Uber — Data Analytics, Logistics & Operations (Intern)  
**Oct 2023 – Mar 2024 · Paris (Hybrid)**  
- Built analyses in SQL/Python  
- Applied regression, ML, and optimization to support operations  
- Improved driver and customer experience through data-driven insights  

---

### Amazon Business — Demand Generation & BI (Intern)  
**Jun 2023 – Aug 2023 · Munich (Hybrid)**  
- Automated DG reporting via online dashboard  
- Produced client insights for EU/US teams  
- Cross-team collaboration across international markets  

---

### Poke Break — Data Scientist (Contract)  
**Mar 2023 – Jun 2023 · Paris**  
- Reduced costs and increased benefits via predictive analytics  
- Improved customer satisfaction with process optimization  

---

# Volunteering

- **Dau’IA (Dauphine-PSL)** — AI Events & Talks Department (2024–2025)  
- **Sorbonne Competitive Intelligence & Strategy** — Business Network & Conferences (2022–2023)  



## Time Zone

<h3>Local time</h3>
<div class="tz-toolbar" id="exp-tz" data-default-tz="Europe/Paris">
  <!-- Add/remove cities as you like -->
  <button class="tz-chip" data-tz="Europe/Paris">Paris</button>
  <button class="tz-chip" data-tz="Europe/Berlin">Berlin</button>
  <button class="tz-chip" data-tz="Europe/Berlin">Munich</button>
  <button class="tz-chip" data-tz="Europe/London">London</button>
  <button class="tz-chip" data-tz="Europe/Amsterdam">Amsterdam</button>
  <button class="tz-chip" data-tz="Europe/Dublin">Dublin</button>
  <button class="tz-chip" data-tz="America/New_York">New York</button>
  <button class="tz-chip" data-tz="Asia/Singapore">Singapore</button>
</div>

<div class="tz-clock" id="exp-clock" aria-live="polite">
  <span class="big">--:--:--</span>
  <span class="sub"> </span>
</div>


## Where I’ve worked (map)

<div class="map-wrap">
  <div id="exp-map" class="map"></div>
</div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<style>
  /* container = wrapper (controls radius/overflow) + inner map div (fills wrapper) */
  .map-wrap{height:360px;border:1px solid var(--border,#e5e7eb);border-radius:12px;overflow:hidden;margin:12px 0 28px}
  .map{height:100%;width:100%}
  /* readable labels in both themes */
  .leaflet-tooltip{padding:3px 6px;border-radius:6px;border:1px solid #e5e7eb;background:#fff;color:#111827}
  html[data-theme="dark"] .leaflet-tooltip{border-color:#1f2937;background:#111827;color:#e8eef7}
  /* keep map tiles looking okay in dark */
  html[data-theme="dark"] .leaflet-container{filter:saturate(.9) brightness(.95)}
</style>

<script>
(function(){
  if (!window.L) return; // safety

  // ——— Data (deduped by city) ———
  const worked = [
    { name:'Paris, France',   lat:48.8566, lng:2.3522,
      info:'Deezer · Uber · Poke Break · Streamglish' },
    { name:'Munich, Germany', lat:48.1351, lng:11.5820,
      info:'Amazon Business' }
  ];

  // ——— Map ———
  const map = L.map('exp-map', {
    zoomControl: true,
    scrollWheelZoom: true,     // enable scroll hijack
    dragging: true,
    tap: false,
    worldCopyJump: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; OpenStreetMap contributors', detectRetina:true, maxZoom:19
  }).addTo(map);

  // markers + always-visible labels
  const markers = worked.map(p => {
    const m = L.circleMarker([p.lat, p.lng], {
      radius:7, color:'#2563eb', weight:2, fillColor:'#2563eb', fillOpacity:.35
    }).addTo(map);
    m.bindTooltip(p.name, {permanent:true, direction:'top', offset:[0,-6]});
    m.bindPopup(`<strong>${p.name}</strong><br>${p.info}`);
    return m;
  });

  // fit bounds & keep user inside the world (prevents grey edges)
  const bounds = L.featureGroup(markers).getBounds();
  map.fitBounds(bounds, {padding:[24,24]});
  map.setMaxBounds([[-85,-180],[85,180]]);

  // fix “grey bar” when the map renders before fonts/layout settle
  const fix = () => map.invalidateSize();
  window.addEventListener('load', fix);
  setTimeout(fix, 350);
})();
</script>


<style>
.tz-toolbar{
  display:flex; flex-wrap:wrap; gap:8px; margin:8px 0 6px;
  --bd:#e5e7eb; --bg:#fff; --tx:#0b1220; --accent:#2563eb; --hover:#f8fafc;
}
.tz-chip{
  border:1px solid var(--bd); background:var(--bg); color:var(--tx);
  padding:6px 10px; border-radius:999px; cursor:pointer; font-size:.95rem;
}
.tz-chip:hover{ background:var(--hover); }
.tz-chip[aria-pressed="true"]{ background:var(--accent); color:#fff; border-color:var(--accent); }
.tz-clock{ display:flex; gap:10px; align-items:baseline; font-feature-settings:"tnum" 1; }
.tz-clock .big{ font-size:1.6rem; font-weight:700; letter-spacing:.02em; }
.tz-clock .sub{ opacity:.8; }

html[data-theme="dark"] .tz-toolbar{
  --bd:#1f2937; --bg:#0f172a; --tx:#e8eef7; --accent:#60a5fa; --hover:#111827;
}
</style>


<script>
(function(){
  // Formatters per time zone (caches for performance)
  const formatters = {};
  function fmt(tz){
    if(!formatters[tz]){
      formatters[tz] = {
        time: new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false }),
        date: new Intl.DateTimeFormat('en-GB', { timeZone: tz, weekday:'short', day:'2-digit', month:'short' }),
        tzn:  new Intl.DateTimeFormat('en-GB', { timeZone: tz, timeZoneName:'short' })
      };
    }
    return formatters[tz];
  }

  function wireTzToolbar(toolbarId, clockId){
    const bar = document.getElementById(toolbarId);
    const clock = document.getElementById(clockId);
    if(!bar || !clock) return;

    const chips = Array.from(bar.querySelectorAll('.tz-chip'));
    const big = clock.querySelector('.big');
    const sub = clock.querySelector('.sub');
    const storeKey = 'tz:' + toolbarId;

    let activeTz = localStorage.getItem(storeKey) || bar.getAttribute('data-default-tz') || (chips[0]?.dataset.tz);
    let tickHandle = null;

    function setActiveByTz(tz){
      activeTz = tz;
      localStorage.setItem(storeKey, tz);
      chips.forEach(ch => ch.setAttribute('aria-pressed', ch.dataset.tz === tz ? 'true' : 'false'));
      bar.dispatchEvent(new CustomEvent('tz:change', { detail: { timeZone: tz }}));
      restartTick();
    }

    function render(){
      try{
        const now = new Date();
        const f = fmt(activeTz);
        big.textContent = f.time.format(now);
        // Use the timezone name from a second format (it includes it); extract the tail
        const tzn = f.tzn.formatToParts(now).find(p => p.type === 'timeZoneName')?.value || '';
        sub.textContent = `${f.date.format(now)} • ${tzn}`;
      }catch(e){
        big.textContent = '--:--:--';
        sub.textContent = activeTz;
      }
    }

    function restartTick(){
      if(tickHandle) clearInterval(tickHandle);
      render();
      tickHandle = setInterval(render, 1000);
    }

    // Click behavior
    bar.addEventListener('click', (e)=>{
      const btn = e.target.closest('.tz-chip');
      if(!btn) return;
      e.preventDefault();
      setActiveByTz(btn.dataset.tz);
    });

    // Initial state
    chips.forEach(ch => ch.setAttribute('aria-pressed', 'false'));
    if (activeTz) setActiveByTz(activeTz);
    else if (chips[0]) setActiveByTz(chips[0].dataset.tz);
  }

  // Wire the sections you have on this page:
  wireTzToolbar('exp-tz', 'exp-clock'); // Experience
  wireTzToolbar('now-tz', 'now-clock'); // Now
})();
</script>



