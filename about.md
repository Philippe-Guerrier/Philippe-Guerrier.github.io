---
layout: default
title: About
permalink: /about/
---
# About

[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)

I connect **data science, engineering, and business** to build practical, efficient systems with clear impact. My background spans analytics, information systems, and ML - with experience in music/media, marketplaces, and BI.

- **Now**: Data Analyst (Intern) @ **Deezer** - SQL, Python, Airflow, dashboards, product/ops analytics.  
- **Previously**: **Uber** (Ops & Logistics Analytics), **Amazon Business** (DG & BI), **Poke Break** (Data Science).

I enjoy offline‑first ML (resource‑aware, explainable components), clean interfaces, and strong defaults. Fluent in **French** & **English**; working **German**. And some other languages that I am currently working on **Chinese** & **Russian**.

### Education
- **M.Sc. Data Science & Business**, Université Paris Dauphine - PSL (2024–2025)
- **M.Sc. Data Science - Strategy & Competitive Intelligence**, Panthéon‑Sorbonne (2022–2024)
- Prior studies in Finance/Econ & Data Science (Paris‑Saclay; Bielefeld)

### Interests
AI for music/media, ML systems, robotics, AI in medicine, and quantum/optimization.



## Where I studied

<div id="eduMap" class="leaflet-map" aria-label="Study locations map"></div>

<style>
  /* map container (responsive, no grey bars) */
  #eduMap.leaflet-map{
    height: 360px;
    border:1px solid var(--border, #e5e7eb);
    border-radius:12px;
    margin:16px 0;
  }
  /* dark mode background behind tiles */
  html[data-theme="dark"] .leaflet-container { background:#0b1220; }
</style>

<script>
(function(){
  const mountId = 'eduMap';

  function init(){
    const el = document.getElementById(mountId);
    if (!el || el.dataset.mapInit) return;   // never double-init
    el.dataset.mapInit = '1';

    // Create map (wheel zoom off by default; we enable it on hover below)
    const map = L.map(el, {
      zoomControl: true,
      scrollWheelZoom: false,
      worldCopyJump: true
    });

    // Light / Dark basemaps (Carto)
    const light = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
      { attribution: '&copy; OpenStreetMap &copy; CARTO' }
    );
    const dark = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
      { attribution: '&copy; OpenStreetMap &copy; CARTO' }
    );

    function applyTheme(){
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) { if (!map.hasLayer(dark)) { dark.addTo(map); light.remove(); } }
      else        { if (!map.hasLayer(light)) { light.addTo(map); dark.remove(); } }
    }
    applyTheme();
    new MutationObserver(applyTheme).observe(document.documentElement, {
      attributes:true, attributeFilter:['data-theme']
    });

    // Study places (name, lat, lon)
    const places = [
      ['Paris, France',              48.8566,   2.3522],
      ['West Palm Beach, Florida',   26.7153, -80.0534],
      ['Bielefeld, Germany',         52.0302,   8.5325],
      ['Miami, Florida',             25.7617, -80.1918],
      ['Versailles, France',         48.8049,   2.1204],
      ['Saclay, France',             48.7322,   2.1697]
    ];

    const bounds = [];
    places.forEach(([label, lat, lng]) => {
      L.marker([lat, lng], { title: label })
        .addTo(map)
        .bindPopup('<strong>' + label + '</strong><br/>Study location')
        .bindTooltip(label, { direction:'top', opacity:0.9, permanent:false });
      bounds.push([lat,lng]);
    });

    // Fit to markers + fix for initial grey bars
    map.fitBounds(bounds, { padding:[24,24] });
    setTimeout(() => map.invalidateSize(), 200);

    // Wheel zoom only when hovered (nice UX)
    el.addEventListener('mouseenter', () => map.scrollWheelZoom.enable());
    el.addEventListener('mouseleave', () => map.scrollWheelZoom.disable());
  }

  // Load Leaflet once (CSS + JS) then init
  function loadLeaflet(){
    if (window.L) return init();
    const cssId = 'leaflet-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId; link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    s.onload = init;
    document.head.appendChild(s);
  }

  // Wait for the container to exist
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', loadLeaflet);
  else
    loadLeaflet();
})();
</script>



