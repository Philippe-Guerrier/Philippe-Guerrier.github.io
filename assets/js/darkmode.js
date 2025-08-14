(function(){
  const css = `
html[data-theme="dark"] body{ background:#0b1220 !important; color:#e8eef7 !important; }
html[data-theme="dark"] a{ color:#93c5fd !important; }
html[data-theme="dark"] pre,code,kbd,samp{ background:#0f172a !important; border:1px solid #1f2937 !important; }
html[data-theme="dark"] .project-card,
html[data-theme="dark"] .repo-card{ background:#0f172a !important; border:1px solid #1f2937 !important; }

.theme-toggle{
  position:fixed; right:16px; bottom:16px; z-index:9999;
  padding:8px 12px; border-radius:10px; cursor:pointer;
  border:1px solid #e5e7eb; background:#f8fafc; color:#0b1220;
  box-shadow:0 2px 10px rgba(0,0,0,.06);
}
html[data-theme="dark"] .theme-toggle{
  border-color:#1f2937; background:#0f172a; color:#e8eef7;
}`;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  function setTheme(t){ document.documentElement.setAttribute('data-theme', t); try{localStorage.setItem('theme', t);}catch{} }
  const saved = (()=>{ try{return localStorage.getItem('theme')}catch{ return null } })();
  setTheme(saved || 'light'); // default light

  function addButton(){
    if (document.querySelector('.theme-toggle')) return;
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    const sync = ()=>{ btn.textContent = (document.documentElement.getAttribute('data-theme')==='dark') ? '☀︎ Light' : '☾ Dark'; };
    sync();
    btn.onclick = ()=>{ const next = document.documentElement.getAttribute('data-theme')==='dark' ? 'light' : 'dark'; setTheme(next); sync(); };
    document.body.appendChild(btn);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addButton, {once:true});
  else addButton();
})();
