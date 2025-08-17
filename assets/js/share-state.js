<script>
// Generic share-state helpers (query string)
window.StateShare = {
  load(defaults){
    const qs = new URLSearchParams(location.search);
    const out = {...defaults};
    for(const k of Object.keys(defaults)){
      if (!qs.has(k)) continue;
      const v = qs.get(k);
      if (Array.isArray(defaults[k])) out[k] = v.split(';').map(p=>p.split(',').map(Number));
      else if (!Number.isNaN(+defaults[k])) out[k] = Number(v);
      else out[k] = v;
    }
    return out;
  },
  save(obj){
    const qs = new URLSearchParams();
    for(const [k,v] of Object.entries(obj)){
      if (Array.isArray(v)) qs.set(k, v.map(p=>Array.isArray(p)?p.join(','):p).join(';'));
      else qs.set(k, String(v));
    }
    history.replaceState(null,'','?'+qs.toString());
  },
  copyLink(btn){
    const url = location.href;
    navigator.clipboard.writeText(url).then(()=>{
      if(btn){ const t=btn.textContent; btn.textContent='Copied!'; setTimeout(()=>btn.textContent=t,900); }
    });
  },
  reset(){
    history.replaceState(null,'',location.pathname);
    location.reload();
  }
};
</script>
