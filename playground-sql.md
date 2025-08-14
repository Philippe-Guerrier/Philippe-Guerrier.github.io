---
title: SQL Playground
permalink: /play/sql/
---

# SQL Playground (runs in your browser)

<div markdown="0">
<details open>
  <summary><strong>Data schema (click to expand)</strong></summary>
  <div style="margin:10px 0">
    <table>
      <thead><tr><th>col</th><th>meaning</th><th>example</th></tr></thead>
      <tbody>
        <tr><td><code>id</code></td><td>order id</td><td>2001</td></tr>
        <tr><td><code>date</code></td><td>order date (YYYY-MM-DD)</td><td>2025-08-01</td></tr>
        <tr><td><code>city</code></td><td>PAR / LYO / BER</td><td>PAR</td></tr>
        <tr><td><code>seg</code></td><td>sushi / burg / pizza / healthy</td><td>sushi</td></tr>
        <tr><td><code>chan</code></td><td>ios / and / web</td><td>ios</td></tr>
        <tr><td><code>mem</code></td><td>Uber One member (0/1)</td><td>1</td></tr>
        <tr><td><code>stat</code></td><td>deliv / cxl_usr / cxl_rest</td><td>deliv</td></tr>
        <tr><td><code>km</code></td><td>distance (km)</td><td>3.1</td></tr>
        <tr><td><code>prom</code></td><td>promised minutes</td><td>34</td></tr>
        <tr><td><code>act</code></td><td>actual minutes (blank if canceled)</td><td>36</td></tr>
        <tr><td><code>net</code></td><td>subtotal minus discounts (€)</td><td>21.50</td></tr>
        <tr><td><code>fee</code></td><td>delivery fee (€)</td><td>2.90</td></tr>
        <tr><td><code>tip</code></td><td>tip (€)</td><td>0.00</td></tr>
        <tr><td><code>tot</code></td><td>net + fee + tip (0 if canceled)</td><td>24.40</td></tr>
      </tbody>
    </table>
  </div>
</details>
</div>

<style>
details > div table { border-collapse: collapse; }
details > div th, details > div td { border: 1px solid #e5e7eb; padding: 6px 8px; }
html[data-theme="dark"] details > div th, 
html[data-theme="dark"] details > div td { border-color:#1f2937; }
</style>



<textarea id="csv" rows="6" style="width:100%;max-width:760px">
id,date,city,seg,chan,mem,stat,km,prom,act,net,fee,tip,tot
2001,2025-08-01,PAR,sushi,ios,0,deliv,3.1,34,36,21.50,2.90,0.00,24.40
2002,2025-08-01,PAR,burg,and,1,deliv,2.8,38,35,16.40,0.00,2.00,18.40
2003,2025-08-01,BER,pizza,ios,0,deliv,4.5,42,47,18.20,3.20,0.00,21.40
2004,2025-08-01,LYO,healthy,web,0,deliv,3.9,37,33,24.10,2.50,1.00,27.60
2005,2025-08-01,BER,sushi,and,1,cxl_usr,0.0,30,,0.00,0.00,0.00,0.00
2006,2025-08-01,PAR,pizza,web,0,deliv,1.6,31,28,12.80,2.00,1.00,15.80
2007,2025-08-01,LYO,burg,ios,0,deliv,2.2,35,34,19.90,2.50,0.00,22.40
2008,2025-08-01,BER,healthy,web,1,deliv,5.2,41,40,28.30,0.00,3.00,31.30
2009,2025-08-02,PAR,sushi,web,0,deliv,3.0,34,32,22.40,2.90,0.00,25.30
2010,2025-08-02,BER,burg,and,0,deliv,4.1,40,44,17.60,3.20,1.00,21.80
2011,2025-08-02,LYO,pizza,ios,1,deliv,2.7,33,31,15.10,0.00,2.00,17.10
2012,2025-08-02,PAR,healthy,web,0,deliv,5.0,42,38,26.90,2.50,0.00,29.40
2013,2025-08-02,BER,sushi,ios,0,cxl_rest,0.0,29,,0.00,0.00,0.00,0.00
2014,2025-08-02,LYO,burg,and,0,deliv,3.2,36,39,18.70,2.50,0.00,21.20
2015,2025-08-02,PAR,pizza,web,1,deliv,1.9,31,33,13.50,0.00,1.00,14.50
2016,2025-08-02,BER,healthy,ios,0,deliv,4.8,40,41,27.80,3.00,2.00,32.80
2017,2025-08-03,PAR,sushi,ios,0,deliv,2.6,33,34,20.90,2.50,0.00,23.40
2018,2025-08-03,LYO,healthy,web,1,deliv,4.5,39,36,31.20,0.00,3.00,34.20
2019,2025-08-03,BER,pizza,and,0,deliv,5.5,43,47,19.40,3.20,0.00,22.60
2020,2025-08-03,PAR,burg,web,0,deliv,3.1,36,35,22.10,2.50,1.00,25.60
2021,2025-08-03,BER,sushi,ios,1,deliv,2.3,31,30,16.80,0.00,2.00,18.80
2022,2025-08-03,LYO,pizza,ios,0,cxl_usr,0.0,32,,0.00,0.00,0.00,0.00
2023,2025-08-03,PAR,healthy,and,0,deliv,4.2,40,43,29.50,3.00,0.00,32.50
2024,2025-08-03,BER,burg,web,0,deliv,3.8,37,39,18.30,3.00,1.00,22.30
2025,2025-08-04,PAR,pizza,ios,0,deliv,1.5,30,29,14.20,2.00,0.00,16.20
2026,2025-08-04,LYO,sushi,web,0,deliv,3.3,35,37,21.50,2.50,0.00,24.00
2027,2025-08-04,BER,healthy,and,1,deliv,5.0,41,40,33.40,0.00,4.00,37.40
2028,2025-08-04,PAR,burg,ios,0,deliv,2.0,34,36,19.10,2.50,1.00,22.60
2029,2025-08-04,LYO,pizza,web,0,deliv,2.4,32,34,15.80,2.00,0.00,17.80
2030,2025-08-04,BER,sushi,and,0,cxl_rest,0.0,30,,0.00,0.00,0.00,0.00
2031,2025-08-04,PAR,healthy,web,1,deliv,4.7,42,39,28.70,0.00,2.00,30.70
2032,2025-08-04,BER,burg,ios,0,deliv,3.9,38,37,17.90,3.00,0.00,20.90
2033,2025-08-05,PAR,sushi,and,0,deliv,3.0,33,35,22.60,3.00,0.00,25.60
2034,2025-08-05,LYO,burg,ios,1,deliv,2.2,35,31,19.50,0.00,2.00,21.50
2035,2025-08-05,BER,pizza,web,0,deliv,4.9,42,45,18.90,3.20,0.00,22.10
2036,2025-08-05,PAR,healthy,ios,0,deliv,4.5,40,41,27.20,2.80,2.00,32.00
2037,2025-08-05,BER,sushi,web,0,deliv,2.8,31,29,20.10,3.00,1.00,24.10
2038,2025-08-05,LYO,pizza,and,0,cxl_usr,0.0,32,,0.00,0.00,0.00,0.00
2039,2025-08-05,PAR,burg,web,0,deliv,3.6,36,38,21.30,2.50,0.00,23.80
2040,2025-08-05,BER,healthy,ios,1,deliv,5.3,41,40,32.40,0.00,3.00,35.40
2041,2025-08-06,PAR,pizza,web,0,deliv,2.0,31,33,13.80,2.00,0.00,15.80
2042,2025-08-06,LYO,sushi,ios,0,deliv,3.1,34,34,21.10,2.50,1.00,24.60
2043,2025-08-06,BER,burg,and,0,deliv,4.0,39,41,18.20,3.00,0.00,21.20
2044,2025-08-06,PAR,healthy,web,1,deliv,4.6,42,44,30.80,0.00,4.00,34.80
2045,2025-08-06,BER,pizza,ios,0,deliv,5.1,43,46,19.70,3.20,0.00,22.90
2046,2025-08-06,LYO,sushi,web,0,cxl_rest,0.0,30,,0.00,0.00,0.00,0.00
2047,2025-08-06,PAR,burg,and,0,deliv,3.3,36,35,20.50,2.50,1.00,24.00
2048,2025-08-06,BER,healthy,web,1,deliv,5.0,41,39,31.60,0.00,3.00,34.60


</textarea>
<button id="load">Load CSV as table 'data'</button>

<textarea id="sql" rows="6" style="width:100%;max-width:760px;margin-top:10px">SELECT mem,
  ROUND(AVG(fee),2) AS avg_fee,
  ROUND(AVG(tip),2) AS avg_tip,
  COUNT(*) AS orders
FROM data
WHERE stat = 'deliv'
GROUP BY mem;</textarea>

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

/* Dark mode overrides — ONLY when html[data-theme="dark"] is set */
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
    document.getElementById('run').click(); 
  };
  document.getElementById('run').onclick = () => run(document.getElementById('sql').value);
})();
</script>
