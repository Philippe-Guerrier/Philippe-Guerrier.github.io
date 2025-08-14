---
title: SQL Playground
permalink: /play/sql/
---

# SQL Playground (runs in your browser)

<textarea id="csv" rows="6" style="width:100%;max-width:760px">
id,name,score
1,Alice,88
2,Bob,93
3,Carla,77
</textarea>
<button id="load">Load CSV as table 'data'</button>

<textarea id="sql" rows="6" style="width:100%;max-width:760px;margin-top:10px">SELECT * FROM data ORDER BY score DESC;</textarea>
<button id="run">Run SQL</button>

<pre id="out" style="padding:10px;border:1px solid #e5e7eb;border-radius:10px;overflow:auto;white-space:pre-wrap"></pre>

<style>
/* Light mode: use Cayman defaults (already good). Just minor polish */
#csv, #sql {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}
#load, #run {
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
}
#load:hover, #run:hover { background: #f8fafc; }

/* ✅ Dark mode overrides — ONLY when html[data-theme="dark"] is set */
html[data-theme="dark"] #csv,
html[data-theme="dark"] #sql {
  background: #0f172a;
  color: #e8eef7;
  border-color: #1f2937;
}
html[data-theme="dark"] #csv::placeholder,
html[data-theme="dark"] #sql::placeholder {
  color: #9aa4b5;
}
html[data-theme="dark"] #load,
html[data-theme="dark"] #run {
  background: #0f172a;
  color: #e8eef7;
  border-color: #1f2937;
}
html[data-theme="dark"] #load:hover,
html[data-theme="dark"] #run:hover {
  background: #111827;
}
html[data-theme="dark"] #out {
  background: #0f172a !important;        /* beat inline light style */
  color: #e8eef7 !important;
  border-color: #1f2937 !important;
}

/* Accessible focus rings (both modes) */
#csv:focus, #sql:focus, #load:focus, #run:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
html[data-theme="dark"] #csv:focus,
html[data-theme="dark"] #sql:focus,
html[data-theme="dark"] #load:focus,
html[data-theme="dark"] #run:focus {
  outline-color: #93c5fd;
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js"></script>
<script>
(async function(){
  const SQL = await initSqlJs({ locateFile: f => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/' + f });
  const db = new SQL.Database();
  const out = document.getElementById('out');

  function csvToTable(csv){
    const lines = csv.trim().split(/\r?\n/).map(l => l.split(','));
    const headers = lines.shift();
    const cols = headers.map(h => h.trim().replace(/[^a-z0-9_]/gi,'_') + ' TEXT');
    db.run('DROP TABLE IF EXISTS data;');
    db.run('CREATE TABLE data (' + cols.join(',') + ');');
    const stmt = db.prepare('INSERT INTO data VALUES (' + headers.map(_ => '?').join(',') + ')');
    lines.forEach(row => stmt.run(row.map(x => x.trim())));
    stmt.free();
  }

  function run(sql){
    try {
      const res = db.exec(sql);
      if (!res.length){ out.textContent = '(no rows)'; return; }
      const { columns, values } = res[0];
      const rows = [columns.join('\t')].concat(values.map(v => v.join('\t'))).join('\n');
      out.textContent = rows;
    } catch (e) {
      out.textContent = e.message;
    }
  }

  document.getElementById('load').onclick = () => {
    csvToTable(document.getElementById('csv').value);
    out.textContent = 'Loaded table data';
  };
  document.getElementById('run').onclick = () => run(document.getElementById('sql').value);
})();
</script>
