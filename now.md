---
layout: default
title: Now
permalink: /now/
---

[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)

## Time Zones

<!-- top of now.md -->
<p><strong>Open to:</strong> <span class="chip">Paris</span> <span class="chip">Berlin</span> <span class="chip">London</span> …</p>
<p><strong>Local time:</strong> <span id="clock"></span></p>
<script>setInterval(()=>{document.getElementById('clock').textContent=new Date().toLocaleTimeString()},1000);</script>

## Updates

_Last updated: 2025‑08‑14_

- Building analytics and product insights at **Deezer**.
- Prototyping **offline AI for music** (song ID + recommender) and small local tools (scraper + LLM, etc.).
- Reading/experimenting: ML systems, AI in medicine, and quantum/optimization.


## Open to work - preferred cities

<div class="map-wrap">
  <div id="open-map" class="map"></div>
</div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<style>
  .map-wrap{height:360px;border:1px solid var(--border,#e5e7eb);border-radius:12px;overflow:hidden;margin:12px 0 28px}
  .map{height:100%;width:100%}
  .leaflet-tooltip{padding:3px 6px;border-radius:6px;border:1px solid #e5e7eb;background:#fff;color:#111827}
  html[data-theme="dark"] .leaflet-tooltip{border-color:#1f2937;background:#111827;color:#e8eef7}
  html[data-theme="dark"] .leaflet-container{filter:saturate(.9) brightness(.95)}
</style>

<script>
(function(){
  if (!window.L) return;

  // ——— Layers ———
  const worked = [
    { name:'Paris, France',   lat:48.8566, lng:2.3522, info:'Deezer · Uber · Poke Break · Streamglish' },
    { name:'Munich, Germany', lat:48.1351, lng:11.5820, info:'Amazon Business' }
  ];
  // Replace your current openTo array with this:
  const openTo = [
    { name:'Paris, France',            lat:48.8566,  lng:2.3522,   mode:'Hybrid' },
    { name:'Berlin, Germany',          lat:52.5200,  lng:13.4050,  mode:'Hybrid' },
    { name:'Munich, Germany',          lat:48.1351,  lng:11.5820,  mode:'Hybrid' },
    { name:'London, UK',               lat:51.5072,  lng:-0.1276,  mode:'Hybrid' },
    { name:'Amsterdam, Netherlands',   lat:52.3676,  lng:4.9041,   mode:'Hybrid' },
    { name:'Dublin, Ireland',          lat:53.3498,  lng:-6.2603,  mode:'Hybrid' },
    { name:'Miami, Florida, USA',      lat:25.7617,  lng:-80.1918, mode:'Hybrid' },
    { name:'West Palm Beach, FL, USA', lat:26.7153,  lng:-80.0534, mode:'Hybrid' },
    { name:'Frankfurt, Germany',       lat:50.1109,  lng:8.6821,   mode:'Hybrid' },
    { name:'New York, USA',            lat:40.7128,  lng:-74.0060, mode:'Hybrid' },
    { name:'Hamburg, Germany',         lat:53.5511,  lng:9.9937,   mode:'Hybrid' },
    { name:'Shenzhen, China',          lat:22.5431,  lng:114.0579, mode:'Hybrid' },
    { name:'Singapore',                lat:1.3521,   lng:103.8198, mode:'Hybrid' },
    { name:'Hong Kong',                lat:22.3193,  lng:114.1694, mode:'Hybrid' },
    { name:'Stockholm, Sweden',        lat:59.3293,  lng:18.0686,  mode:'Hybrid' },
    { name:'Oslo, Norway',             lat:59.9139,  lng:10.7522,  mode:'Hybrid' },
    { name:'Rotterdam, Netherlands',   lat:51.9244,  lng:4.4777,   mode:'Hybrid' },
    { name:'Cologne, Germany',         lat:50.9375,  lng:6.9603,   mode:'Hybrid' },
    { name:'Zurich, Switzerland',      lat:47.3769,  lng:8.5417,   mode:'Hybrid' },
    { name:'Beijing, China',           lat:39.9042,  lng:116.4074, mode:'Hybrid' },
    { name:'Hauts-de-Seine, France',   lat:48.8280,  lng:2.2180,   mode:'Hybrid' }, // dept. west of Paris
    { name:'Toronto, Canada',          lat:43.6532,  lng:-79.3832, mode:'Hybrid' },
    { name:'Edinburgh, UK',            lat:55.9533,  lng:-3.1883,  mode:'Hybrid' },
    { name:'Melbourne, Australia',     lat:-37.8136, lng:144.9631, mode:'Hybrid' },
    { name:'Vienna, Austria',          lat:48.2082,  lng:16.3738,  mode:'Hybrid' }
  ];


  const map = L.map('open-map', {
    zoomControl: true,
    scrollWheelZoom: true,   // enable wheel zoom
    dragging: true,
    tap: false,
    worldCopyJump: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; OpenStreetMap contributors', detectRetina:true, maxZoom:19
  }).addTo(map);

  const workedLayer = L.layerGroup().addTo(map);
  const openLayer   = L.layerGroup().addTo(map);

  const mkWorked = p => {
    const m = L.circleMarker([p.lat,p.lng], {
      radius:7, color:'#2563eb', weight:2, fillColor:'#2563eb', fillOpacity:.35
    }).addTo(workedLayer);
    m.bindTooltip(p.name,{permanent:true,direction:'top',offset:[0,-6]});
    m.bindPopup(`<strong>${p.name}</strong><br>${p.info || ''}`);
    return m;
  };
  const mkOpen = p => {
    const m = L.circleMarker([p.lat,p.lng], {
      radius:7, color:'#f59e0b', weight:2, dashArray:'4 3', fillColor:'#f59e0b', fillOpacity:.25
    }).addTo(openLayer);
    m.bindTooltip(p.name,{permanent:true,direction:'top',offset:[0,-6]});
    m.bindPopup(`<strong>${p.name}</strong><br>Open to work here`);
    return m;
  };

  const ms1 = worked.map(mkWorked);
  const ms2 = openTo.map(mkOpen);

  // auto-fit all visible markers
  const all = L.featureGroup([...ms1, ...ms2]);
  map.fitBounds(all.getBounds(), {padding:[24,24]});
  map.setMaxBounds([[-85,-180],[85,180]]);

  // tiny layer toggle (collapsed). Replaces big pills.
  L.control.layers(null, {
    'Worked': workedLayer,
    'Open to work': openLayer
  }, {collapsed:true}).addTo(map);

  const fix = () => map.invalidateSize();
  window.addEventListener('load', fix);
  setTimeout(fix, 350);
})();
</script>



