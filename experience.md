---
layout: default
title: Experience
permalink: /experience/
---
# Experience
[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)


## Deezer - Data Analyst (Intern) · Apr 2025–Sep 2025  · Paris (Hybrid)
SQL • Python • Airflow • Dashboards • Product/Ops analytics.

## Uber - Data Analytics, Logistics & Operations (Intern) · Oct 2023–Mar 2024 · Paris (Hybrid)
Built analyses in SQL/Python; regression/ML/optimization to support ops decisions and improve driver/customer experience.

## Amazon Business - Demand Generation & BI (Intern) · Jun–Aug 2023 · Munich (Hybrid)
Automated DG reporting via online dashboard; client insights; cross‑team collaboration (EU/US).

## Poke Break - Data Scientist (Contract) · Mar–Jun 2023 · Paris
Cost reduction, benefit growth, and customer satisfaction improvements via predictive analytics and process optimization.

### Volunteering
- Dau’IA (Dauphine‑PSL) - AI events & talks department (2024–2025)
- Sorbonne Competitive Intelligence & Strategy - Business network & conferences (2022–2023)



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


