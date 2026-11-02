---
layout: default
title: About
permalink: /about/
---
# About

[Home](/) · [Projects](/projects/) · [Contact](/contact/) · [Full portfolio →](https://sites.google.com/view/philippeguerrier/home)

I connect **data science, engineering, and business** to build practical, efficient systems with clear impact. My background spans analytics, information systems, and ML - with experience in music/media, marketplaces, and BI.

- **Now**: Data Analyst (Intern) @ **Deezer** - SQL, Python, Airflow, dashboards, Marketing/ops analytics.
- **Previously**: **Uber** (Ops & Logistics Analytics), **Amazon Business** (DG & BI), **Poke Break** (Data Science).

I enjoy offline-first ML (resource-aware, explainable components), clean interfaces, and strong defaults. Fluent in **French** & **English**; working **German**. And some other languages that I am currently working on **Chinese** & **Russian**.

### Education

- **M.Sc. Data Science & Business**, Université Paris Dauphine - PSL (2024–2025)
- **M.Sc. Data Science - Strategy & Competitive Intelligence**, Panthéon-Sorbonne (2022–2024)
- Prior studies in Finance/Economy & Data Science (Paris-Saclay; Bielefeld)

### Interests

AI for music/media, ML systems, robotics, AI in medicine, and quantum/optimization.


## Where I studied

<div id="eduMap" class="leaflet-map" aria-label="Study locations map"></div>

<style>
  /* Responsive map container */
  #eduMap.leaflet-map {
    width: 100%;
    height: 360px;
    box-sizing: border-box;
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 12px;
    margin: 16px 0;
    overflow: hidden;
  }
</style>

<script>
(function() {
  const mountId = 'eduMap';

  function init() {
    const el = document.getElementById(mountId);

    // Prevent missing elements and double initialization
    if (!el || el.dataset.mapInit) return;
    el.dataset.mapInit = '1';

    // Create map
    // Mouse-wheel zoom is disabled by default
    const map = L.map(el, {
      zoomControl: true,
      scrollWheelZoom: false,
      worldCopyJump: true
    });

    // Standard OpenStreetMap basemap (no API key required)
    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">' +
          'OpenStreetMap contributors</a>'
      }
    ).addTo(map);

    // Study places (name, latitude, longitude)
    const places = [
      ['Paris, France',              48.8566,   2.3522],
      ['West Palm Beach, Florida',   26.7153, -80.0534],
      ['Bielefeld, Germany',         52.0302,   8.5325],
      ['Miami, Florida',             25.7617, -80.1918],
      ['Saclay, France',             48.7322,   2.1697],
      ['Versailles, France',         48.8049,   2.1204]
    ];

    // Add markers, popups and tooltips
    const bounds = [];

    places.forEach(([label, lat, lng]) => {
      L.marker([lat, lng], { title: label })
        .addTo(map)
        .bindPopup(
          '<strong>' + label + '</strong><br/>Study location'
        )
        .bindTooltip(label, {
          direction: 'top',
          opacity: 0.9,
          permanent: false
        });

      bounds.push([lat, lng]);
    });

    // Automatically fit the map to all study locations
    map.fitBounds(bounds, {
      padding: [24, 24],
      maxZoom: 4
    });

    // Fix initial rendering and sizing issues
    setTimeout(() => map.invalidateSize(), 200);

    // Enable mouse-wheel zoom only when hovering over the map
    el.addEventListener('mouseenter', () => {
      map.scrollWheelZoom.enable();
    });

    el.addEventListener('mouseleave', () => {
      map.scrollWheelZoom.disable();
    });
  }

  // Load Leaflet once (CSS + JavaScript), then initialize the map
  function loadLeaflet() {
    if (window.L) {
      init();
      return;
    }

    // Load Leaflet CSS
    const cssId = 'leaflet-css';

    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href =
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';

      document.head.appendChild(link);
    }

    // Load Leaflet JavaScript
    const scriptId = 'leaflet-js';

    if (document.getElementById(scriptId)) return;

    const s = document.createElement('script');
    s.id = scriptId;
    s.src =
      'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

    s.onload = init;

    s.onerror = () => {
      console.error('Unable to load Leaflet.');
      const el = document.getElementById(mountId);
      if (el) el.dataset.mapInit = '';
    };

    document.head.appendChild(s);
  }

  // Wait for the map container to exist
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLeaflet);
  } else {
    loadLeaflet();
  }
})();
</script>



