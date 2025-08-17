---
layout: default
title: Now
permalink: /now/
---

[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)



_Last updated: 2025‑08‑14_

- Building analytics and product insights at **Deezer**.
- Prototyping **offline AI for music** (song ID + recommender) and small local tools (scraper + LLM, etc.).
- Reading/experimenting: ML systems, AI in medicine, and quantum/optimization.


## Open to work — preferred cities

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
  const openTo = [
    { name:'Paris, France',   lat:48.8566, lng:2.3522 },
    { name:'London, UK',      lat:51.5072, lng:-0.1276 },
    { name:'Berlin, Germany', lat:52.52,   lng:13.405 },
    { name:'Munich, Germany', lat:48.1351, lng:11.5820 },
    { name:'Amsterdam, NL',   lat:52.3676, lng:4.9041 },
    { name:'Zurich, CH',      lat:47.3769, lng:8.5417 }
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



