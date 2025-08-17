## Where I've worked & studied

<div class="pillrow">
  {% for p in site.data.places.worked %}<span class="pill pill-work">{{ p.name }}</span>{% endfor %}
  {% for p in site.data.places.study  %}<span class="pill pill-study">{{ p.name }}</span>{% endfor %}
</div>

<div id="map-exp" aria-label="Map of cities I've worked and studied in"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
(function(){
  const WORKED = {{ site.data.places.worked | default: empty | jsonify }};
  const STUDY  = {{ site.data.places.study  | default: empty | jsonify }};
  const allPts = (WORKED||[]).concat(STUDY||[]);

  const map = L.map('map-exp', { scrollWheelZoom: false, tap: true });
  function tileFor(theme){
    // Light (OSM Standard) vs Dark (Carto Dark Matter)
    if (theme === 'dark') {
      return L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { attribution: '&copy; OpenStreetMap &copy; CARTO', maxZoom: 19 }
      );
    }
    return L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '&copy; OpenStreetMap contributors', maxZoom: 19 }
    );
  }
  let currentTiles = tileFor(document.documentElement.getAttribute('data-theme'));
  currentTiles.addTo(map);

  const workedStyle = { radius: 7, color:'#ef4444', fillColor:'#ef4444', fillOpacity:0.85, weight:1 };
  const studyStyle  = { radius: 7, color:'#6366f1', fillColor:'#6366f1', fillOpacity:0.85, weight:1 };

  (WORKED||[]).forEach(p => {
    L.circleMarker([p.lat, p.lon], workedStyle)
      .addTo(map).bindPopup(`<strong>${p.name}</strong><br>${(p.orgs||[]).join('<br>')}`);
  });
  (STUDY||[]).forEach(p => {
    L.circleMarker([p.lat, p.lon], studyStyle)
      .addTo(map).bindPopup(`<strong>${p.name}</strong><br>${(p.orgs||[]).join('<br>')}`);
  });

  if (allPts.length){
    const b = L.latLngBounds(allPts.map(p => [p.lat, p.lon]));
    map.fitBounds(b.pad(0.25));
  } else {
    map.setView([48.8566, 2.3522], 5); // fallback: Europe
  }

  // Switch tiles when your dark-mode toggle changes the attribute
  new MutationObserver(() => {
    map.removeLayer(currentTiles);
    currentTiles = tileFor(document.documentElement.getAttribute('data-theme'));
    currentTiles.addTo(map);
  }).observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
})();
</script>

<style>
#map-exp{ height:340px; border:1px solid var(--bd,#e5e7eb); border-radius:12px; margin:12px 0 6px; }
.pillrow{ display:flex; flex-wrap:wrap; gap:8px; margin:8px 0 10px; }
.pill{ padding:6px 10px; border-radius:999px; font-size:.9rem; border:1px solid var(--bd,#e5e7eb); }
.pill-work{ background:#fee2e2; color:#991b1b; }   /* red-ish */
.pill-study{ background:#e0e7ff; color:#312e81; }  /* indigo-ish */
html[data-theme="dark"] .pill{ border-color:#1f2937; }
html[data-theme="dark"] .pill-work{ background:#451a1a; color:#fecaca; }
html[data-theme="dark"] .pill-study{ background:#1e1b4b; color:#c7d2fe; }
</style>
