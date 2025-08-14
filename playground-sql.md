---
title: SQL Playground
permalink: /play/sql/
---

# SQL Playground (runs in your browser)

<textarea id="csv" rows="6" style="width:100%;max-width:760px">
order_id,order_date,city,restaurant_segment,channel,uberone_member,new_customer,status,prep_min,travel_min,distance_km,courier_wait_min,subtotal_eur,promo_eur,delivery_fee_eur,tip_eur,refund_eur,total_eur,promised_min,actual_min,rating
1001,2025-08-01,Berlin,Burgers,iOS,false,true,delivered,9,23,4.3,2,11.04,2.53,2.07,1,0.0,11.58,37,42,1
1002,2025-08-01,Berlin,Healthy,iOS,false,false,delivered,20,26,5.0,2,21.91,4.79,3.0,0,0.0,20.12,51,51,5
1003,2025-08-01,Lyon,Pizza,iOS,false,false,cancelled_by_restaurant,14,6,1.2,0,0.0,0.0,0.0,0.0,0.0,0.0,25,,
1004,2025-08-01,Paris,Sushi,iOS,false,false,delivered,10,12,2.7,0,19.34,0.0,3.93,0,0.0,23.27,27,29,4
1005,2025-08-02,Paris,Healthy,Android,true,false,delivered,11,24,4.4,2,11.12,1.34,0.0,1,0.0,10.78,40,48,3
1006,2025-08-02,Berlin,Pizza,iOS,false,false,cancelled_by_user,15,6,1.5,1,0.0,0.0,0.0,0.0,0.0,0.0,26,,
1007,2025-08-02,Berlin,Healthy,Android,true,false,delivered,9,25,4.7,2,33.82,0.0,0.0,4,0.0,37.82,39,39,2
1008,2025-08-02,Berlin,Pizza,Web,false,true,delivered,9,16,3.8,1,10.27,0.0,2.5,3,0.0,15.77,30,28,5
1009,2025-08-03,Paris,Burgers,Android,false,false,delivered,19,18,3.6,1,38.54,0.0,3.16,0,0.0,41.7,42,42,5
1010,2025-08-03,Lyon,Sushi,Web,true,false,delivered,18,16,3.2,3,19.77,2.29,0.0,2,0.0,19.48,39,42,3
1011,2025-08-03,Berlin,Burgers,Web,false,true,refunded_partial,12,17,2.4,3,37.07,0.0,3.56,0,4.75,35.88,34,33,4
1012,2025-08-03,Paris,Healthy,iOS,false,false,delivered,13,23,4.8,2,43.68,0.0,3.91,4,0.0,51.59,41,46,5
1013,2025-08-04,Lyon,Pizza,Android,true,true,delivered,16,17,3.1,2,20.26,0.0,0.0,1,0.0,21.26,38,33,4
1014,2025-08-04,Paris,Pizza,iOS,false,false,delivered,12,24,4.6,1,38.04,0.0,4.16,0,0.0,42.2,41,43,5
1015,2025-08-04,Berlin,Sushi,Web,true,false,delivered,17,20,3.6,2,19.79,0.0,0.0,5,0.0,24.79,42,36,5
1016,2025-08-04,Paris,Burgers,Android,false,true,cancelled_by_restaurant,14,9,1.8,4,0.0,0.0,0.0,0.0,0.0,0.0,28,,
1017,2025-08-05,Lyon,Healthy,iOS,false,false,delivered,8,22,3.9,1,22.61,0.0,4.76,0,0.0,27.37,35,30,4
1018,2025-08-05,Paris,Sushi,Android,true,false,delivered,12,23,4.7,2,20.85,0.0,0.0,2,0.0,22.85,40,45,2
1019,2025-08-05,Berlin,Pizza,Android,false,false,delivered,13,23,5.8,2,31.2,0.0,2.65,5,0.0,38.85,41,46,4
1020,2025-08-05,Paris,Healthy,Web,false,true,refunded_partial,11,9,1.1,3,25.54,0.0,4.18,0,6.63,23.09,25,20,5
1021,2025-08-06,Lyon,Burgers,iOS,true,false,delivered,16,22,4.7,3,31.45,0.0,0.0,2,0.0,33.45,43,48,2
1022,2025-08-06,Paris,Sushi,Web,false,false,delivered,12,21,3.9,2,44.56,0.0,3.56,6,0.0,54.12,38,35,5
1023,2025-08-06,Berlin,Healthy,Web,true,true,delivered,9,21,3.6,3,41.31,0.0,0.0,0,0.0,41.31,35,30,4
1024,2025-08-07,Paris,Pizza,iOS,false,false,delivered,11,25,5.0,0,39.93,0.0,4.31,0,0.0,44.24,41,36,5

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
