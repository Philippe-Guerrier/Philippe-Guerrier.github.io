<script>
(function(){
  // Inject styles (so you don't need to edit the theme)
  const css = `
:root {
  --bg: #ffffff; --text: #0b1220; --muted:#4b5563; --card:#f8fafc; --link:#2563eb; --border:#e5e7eb;
}
html[data-theme="dark"] {
  --bg: #0b1220; --text:#e8eef7; --muted:#a6b0c3; --card:#0f172a; --link:#93c5fd; --border:#1f2937;
}
body { background: var(--bg) !important; color: var(--text) !important; }
a { color: var(--link); }
.page-header, header, .site-footer { background: var(--card) !important; border-color: var(--border) !important; }
pre, code, kbd, samp { background: var(--card) !important; border: 1px solid var(--border) !important; }
.project-card, .repo-card { background: var(--card); border:1px solid var(--border); }
.theme-toggle {
  position: fixed; right: 16px; bottom: 16px; z-index: 9999;
  padding: 8px 12px; border-radius: 10px; cursor:pointer;
  border:1px solid var(--border); background: var(--card); color: var(--text);
  box-shadow: 0 2px 10px rgba(0,0,0,.06);
}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function setTheme(t){ document.documentElement.setAttribute('data-theme', t); localStorage.setItem('theme', t); }
  const saved = localStorage.getItem('theme');
  const prefDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved || (prefDark ? 'dark' : 'light'));

  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.textContent = (document.documentElement.getAttribute('data-theme') === 'dark') ? '☀︎ Light' : '☾ Dark';
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    btn.textContent = next === 'dark' ? '☀︎ Light' : '☾ Dark';
  });

  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(btn));
})();
</script>
