## Open to work in…

<div class="pillrow">
  {% for p in site.data.places.open %}
    <span class="pill pill-open">{{ p.name }} — {{ p.mode }}</span>
  {% endfor %}
</div>

<div id="map-now" aria-label="Map of locations I'm open to work in"></div>

<!-- Leaflet already loaded on Experience; include again only if this page can be standalone -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
(function(){
  const OPEN = {{ site.data.places.open | default: empty | jsonify }};
  const map = L.map('map-now', { scrollWheelZoom:false, tap:true });

  function tileFor(theme){
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

  const openStyle = { radius: 8, color:'#10b981', fillColor:'#10b981', fillOpacity:0.85, weight:1 };

  (OPEN||[]).forEach(p => {
    L.circleMarker([p.lat, p.lon], openStyle)
      .addTo(map).bindPopup(`<strong>${p.name}</strong><br>${p.mode || ''}`);
  });

  if (OPEN && OPEN.length){
    const b = L.latLngBounds(OPEN.map(p => [p.lat, p.lon]));
    map.fitBounds(b.pad(0.25));
  } else {
    map.setView([50, 8], 5);
  }

  new MutationObserver(() => {
    map.removeLayer(currentTiles);
    currentTiles = tileFor(document.documentElement.getAttribute('data-theme'));
    currentTiles.addTo(map);
  }).observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
})();
</script>

<style>
#map-now{ height:320px; border:1px solid var(--bd,#e5e7eb); border-radius:12px; margin:12px 0 6px; }
.pillrow{ display:flex; flex-wrap:wrap; gap:8px; margin:8px 0 10px; }
.pill{ padding:6px 10px; border-radius:999px; font-size:.9rem; border:1px solid var(--bd,#e5e7eb); }
.pill-open{ background:#d1fae5; color:#064e3b; }
html[data-theme="dark"] .pill{ border-color:#1f2937; }
html[data-theme="dark"] .pill-open{ background:#052e26; color:#a7f3d0; }
</style>
