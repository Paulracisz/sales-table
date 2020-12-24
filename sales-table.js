var Q1 = document.getElementById("Q1")
var Q2 = document.getElementById("Q2")


function onFilter(Q1, Q2, Q3, Q4) {
    console.log(Q2.checked)
    if (Q1.checked) {
        console.log(Q1)
      alert("filtering for Q1");
    } 
    else if (Q2.checked) {
        alert("filtering for Q2");
    }
  }


function filtering() {
var box = document.querySelector('.table-hover');

var tableDetail = [
    {month:"January",sales:"50,000",topSalesPerson:"Angela"},
    {month:"February",sales:"10,000",topSalesPerson:"Roberto"},
    {month:"March",sales:"85,000",topSalesPerson:"Maria"},
    {month:"April",sales:"56,000",topSalesPerson:"Stacy"},
    {month:"May",sales:"68,000",topSalesPerson:"William"},
    {month:"June",sales:"32,000",topSalesPerson:"Darrel"},
    {month:"July",sales:"21,000",topSalesPerson:"Angela"},
    {month:"August",sales:"18,000",topSalesPerson:"Angela"},
    {month:"September",sales:"118,000",topSalesPerson:"Maria"},
    {month:"October",sales:"52,000",topSalesPerson:"Stacy"},
    {month:"November",sales:"87,000",topSalesPerson:"Angela"},
    {month:"December",sales:"121,000",topSalesPerson:"William"},   
]

document.getElementById('table-container').innerHTML = tableDetail.map(detail => 
    `<tr>
      <td class="text-left">${detail.month}</td>
      <td class="text-left">${detail.sales}</td>
      <td class="text-left">${detail.topSalesPerson}</td>
    </tr>`
).join('')

if (checkboxElem.checked) {

}

}

filtering()