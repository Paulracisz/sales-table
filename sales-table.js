var sales = document.getElementById("sales-header");
var salesPerson = document.getElementById("top-sales");
var clickCounter = 0;
let selectedQuarter;

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

let duplicateArray = new Array(...tableDetail);

function renderTable(tableDetails) {
  document.getElementById("table-container").innerHTML = tableDetails
    .map(
      (detail) =>
        `<tr>
            <td class="text-left">${detail.month}</td>
            <td class="text-left">${detail.sales.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</td>
            <td class="text-left">${detail.topSalesPerson}</td>
          </tr>`
    )
    .join("");
}

function onSortTable(whichSort) {
  clickCounter++;

  const sortedArray = new Array(...duplicateArray);
  
  // conditional to see which heading was clicked to sort either sales person, or sales numbers

  if (whichSort == "sales") {
    sortedArray.sort((x, y) => {
      return x.sales - y.sales;
    });
  } else if (whichSort == "salesperson") {
    sortedArray.sort((a, b) => {
        if ( a.topSalesPerson < b.topSalesPerson ){
          return -1;
        }
        if ( a.topSalesPerson > b.topSalesPerson ){
          return 1;
        }
        return 0;
      });
  }

  if (clickCounter == 1) {
    renderTable(sortedArray);
  } else if (clickCounter == 2) {
    renderTable(sortedArray.reverse());
  } else if (clickCounter == 3) {
    renderTable(duplicateArray);
    // triggerFilter = current checked box
    // if checked box = 1, make copy of duplicateArray.slice(0,3)
    clickCounter = 0;
  }
}

function onFilter(triggerFilter) {
  // Only triggers on page load and if box is clicked-
  // twice to reset table to original value.
  if (triggerFilter == selectedQuarter) {
    renderTable(tableDetail);
    duplicateArray = new Array(...tableDetail);
    selectedQuarter = undefined;
  }
  // This conditional is met when a box is clicked.
  else if (triggerFilter != undefined) {
    clickCounter = 0;
    let allFilterCheckboxes = document.querySelectorAll(".check");
    allFilterCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    triggerFilter.checked = true;
    let quarter = triggerFilter.id.slice(1, 2); //(1, 2, 3, 4 )
    // Reducing the ID of checkboxes which are Q1,Q2,Q3,Q4 into just the number so we can check
    const quarterEnd = quarter * 3; // ( 3, 6, 9, 12)
    const quarterStart = quarterEnd - 3;
    let quarterArray = tableDetail.slice(quarterStart, quarterEnd);
    renderTable(quarterArray);
    duplicateArray = quarterArray; // make a workable copy for other operations.
    selectedQuarter = triggerFilter; //selected quarter tracks to see if checkbox was selected again
  }
}

renderTable(tableDetail);
