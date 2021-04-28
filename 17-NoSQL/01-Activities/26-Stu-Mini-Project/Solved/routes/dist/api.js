let myChart,transactions=[];fetch("/api/transaction").then(b=>b.json()).then(b=>{transactions=b,populateTotal(),populateTable(),populateChart()});function populateTotal(){const c=transactions.reduce((c,a)=>c+parseFloat(a.value),0).toFixed(2),a=document.querySelector("#total");a.textContent=c}function populateTable(){const d=document.querySelector("#tbody");d.innerHTML="",transactions.forEach(a=>{const b=document.createElement("tr");b.innerHTML=`
      <td>${a.name}</td>
      <td>${a.value}</td>
    `,d.appendChild(b)})}function populateChart(){const f=transactions.slice().reverse();let g=0;const a=f.map(c=>{const a=new Date(c.date);return`${a.getMonth()+1}/${a.getDate()}/${a.getFullYear()}`}),c=f.map(b=>(g+=parseInt(b.value),g));myChart&&myChart.destroy();const d=document.getElementById("my-chart").getContext("2d");myChart=new Chart(d,{type:"line",data:{labels:a,datasets:[{label:"Total Over Time",fill:!0,backgroundColor:"#6666ff",data:c}]}})}function sendTransaction(f){const g=document.querySelector("#t-name"),b=document.querySelector("#t-amount"),c=document.querySelector("form .error");if(""===g.value||""===b.value)return void(c.textContent="Missing Information");c.textContent="";const a={name:g.value,value:b.value,date:new Date().toISOString()};f||(a.value*=-1),transactions.unshift(a),populateChart(),populateTable(),populateTotal(),fetch("/api/transaction",{method:"POST",body:JSON.stringify(a),headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(b=>b.json()).then(d=>{d.errors?c.textContent="Missing Information":(g.value="",b.value="")}).catch(()=>{console.log("save record"),saveRecord(a),g.value="",b.value=""})}document.querySelector("#add-btn").addEventListener("click",function(b){b.preventDefault(),sendTransaction(!0)}),document.querySelector("#sub-btn").addEventListener("click",function(b){b.preventDefault(),sendTransaction(!1)});