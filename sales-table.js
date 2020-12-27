
var sales = document.getElementById("sales-header");
var clickCounter = 0
let selectedQuarter


const tableDetail = [
    { month: "January", sales: 50000, topSalesPerson: "Angela" },
  { month: "February", sales: 10000, topSalesPerson: "Roberto" },
  { month: "March", sales: 85000, topSalesPerson: "Maria" },
  { month: "April", sales: 56000, topSalesPerson: "Stacy" },
  { month: "May", sales: 68000, topSalesPerson: "William" },
  { month: "June", sales: 32000, topSalesPerson: "Darrel" },
  { month: "July", sales: 21000, topSalesPerson: "Angela" },
  { month: "August", sales: 18000, topSalesPerson: "Angela" },
  { month: "September", sales: 118000, topSalesPerson: "Maria" },
  { month: "October", sales: 52000, topSalesPerson: "Stacy" },
  { month: "November", sales: 87000, topSalesPerson: "Angela" },
  { month: "December", sales: 121000, topSalesPerson: "William" },
];

let duplicateArray = tableDetail
// modified duplicateArray
// renderTable(duplicate)

function renderTable(tableDetails) {
    document.getElementById("table-container").innerHTML = tableDetails.map(
        (detail) =>
          `<tr>
            <td class="text-left">${detail.month}</td>
            <td class="text-left">${detail.sales}</td>
            <td class="text-left">${detail.topSalesPerson}</td>
          </tr>`
      ).join("");
}

function onSortTable() {
  clickCounter++;

  const sortedArray = duplicateArray
  sortedArray.sort((x, y) => { 
    return x.sales - y.sales
   })

  if (clickCounter == 1) {
    renderTable(sortedArray)
  } else if (clickCounter == 2) {
    renderTable(sortedArray.reverse());
    clickCounter = 0
  } else if (clickCounter == 3) {
    // triggerFilter = current checked box 
    // if checked box = 1, make copy of duplicateArray.slice(0,3)
    renderTable(duplicateArray)
    clickCounter = 0;
  }
}

function onFilter(triggerFilter) {
    if (triggerFilter == selectedQuarter) {
        renderTable(tableDetail)
        duplicateArray = tableDetail
    }
    else if(triggerFilter != undefined){
        var allFilterCheckboxes = document.querySelectorAll(".check")
        allFilterCheckboxes.forEach(checkbox => checkbox.checked = false)
        triggerFilter.checked = true
        var quarter = triggerFilter.id.slice(1,2)  //(1, 2, 3, 4 )
        // Reducing the ID of checkboxes which are Q1,Q2,Q3,Q4 into just the number so we can check
        const quarterEnd = quarter * 3 // ( 3, 6, 9, 12)
        const quarterStart = quarterEnd - 3

        let quarterArray = tableDetail.slice(quarterStart, quarterEnd)
        renderTable(quarterArray)
        duplicateArray = quarterArray   //Creates workable array for other actions
        selectedQuarter = triggerFilter //selected quarter tracks to see if checkbox was selected again
    }
  } 

/*  
    1> Select the Sales header
    2> Create a function that tracks    


*/
renderTable(tableDetail);
