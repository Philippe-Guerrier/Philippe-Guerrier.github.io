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



## Where I've worked & studied

<div class="pillrow">
  {% for p in site.data.places.worked %}<span class="pill pill-work">{{ p.name }}</span>{% endfor %}
  {% for p in site.data.places.study  %}<span class="pill pill-study">{{ p.name }}</span>{% endfor %}
</div>

<div id="map-exp" aria-label="Map of cities I've worked and studied in"></div>

<!-- Leaflet (keep CSS before map JS) -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
(function(){
  const WORKED = {{ site.data.places.worked | jsonify }} || [];
  const STUDY  = {{ site.data.places.study  | jsonify }} || [];
  const points = WORKED.concat(STUDY);

  // Init
  const map = L.map('map-exp', { scrollWheelZoom:false, tap:true });

  function tileFor(theme){
    if (theme === 'dark') {
      return L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { attribution: '&copy; OpenStreetMap & CARTO', maxZoom: 19 });
    }
    return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '&copy; OpenStreetMap contributors', maxZoom: 19 });
  }
  let tiles = tileFor(document.documentElement.getAttribute('data-theme'));
  tiles.addTo(map);

  const workedStyle = { radius:7, color:'#ef4444', fillColor:'#ef4444', fillOpacity:0.9, weight:1 };
  const studyStyle  = { radius:7, color:'#6366f1', fillColor:'#6366f1', fillOpacity:0.9, weight:1 };

  WORKED.forEach(p => {
    const m = L.circleMarker([p.lat, p.lon], workedStyle).addTo(map);
    m.bindPopup(`<strong>${p.name}</strong><br>${(p.orgs||[]).join('<br>')}`);
    m.bindTooltip(p.name, {permanent:true, direction:'top', className:'map-label'});
  });
  STUDY.forEach(p => {
    const m = L.circleMarker([p.lat, p.lon], studyStyle).addTo(map);
    m.bindPopup(`<strong>${p.name}</strong><br>${(p.orgs||[]).join('<br>')}`);
    m.bindTooltip(p.name, {permanent:true, direction:'top', className:'map-label'});
  });

  if (points.length){
    const b = L.latLngBounds(points.map(p => [p.lat, p.lon]));
    map.fitBounds(b.pad(0.25));
  } else {
    map.setView([48.8566, 2.3522], 5); // fallback: Europe
  }

  // Switch tiles on theme change
  new MutationObserver(() => {
    map.removeLayer(tiles);
    tiles = tileFor(document.documentElement.getAttribute('data-theme'));
    tiles.addTo(map);
  }).observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
})();
</script>

<style>
#map-exp{ height:340px; border:1px solid var(--bd,#e5e7eb); border-radius:12px; margin:12px 0 6px; }
.pillrow{ display:flex; flex-wrap:wrap; gap:8px; margin:8px 0 10px; }
.pill{ padding:6px 10px; border-radius:999px; font-size:.9rem; border:1px solid var(--bd,#e5e7eb); }
.pill-work{ background:#fee2e2; color:#991b1b; }   /* worked = red-ish */
.pill-study{ background:#e0e7ff; color:#312e81; }  /* study = indigo-ish */
html[data-theme="dark"] .pill{ border-color:#1f2937; }
html[data-theme="dark"] .pill-work{ background:#451a1a; color:#fecaca; }
html[data-theme="dark"] .pill-study{ background:#1e1b4b; color:#c7d2fe; }

/* Always-visible name labels on the map */
.map-label{
  background: rgba(255,255,255,.92);
  color:#0b1220;
  border:1px solid #e5e7eb;
  border-radius:6px;
  padding:2px 6px;
  font-size:.85rem;
  box-shadow:0 1px 4px rgba(0,0,0,.08);
}
html[data-theme="dark"] .map-label{
  background: rgba(17,24,39,.92);
  color:#e8eef7;
  border-color:#1f2937;
}
</style>


