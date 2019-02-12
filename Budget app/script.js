let mainList=[], monthList=[];
//object prototype
let monthsummary = {
    incomeTotal: function () {alert(this.month + " income")},
    expenseTotal:function () {alert(this.month +" expenseTotal")},
    month_balance: function () {alert(this.month +" month_balance")},
  };
//DOM variables
let selectedMonth = document.querySelector("#month-select");
let monthDisplay = document.getElementById("month");
let expenditureType = document.querySelector("#expenditure-type-select");
let description = document.querySelector(".description-box");
let amount = document.querySelector(".value-box");
let submitButton = document.querySelector("#button-sub");

//Utility Functions
function monthGet_Display() {
    let monthName = selectedMonth.options[selectedMonth.selectedIndex].value;
    monthDisplay.textContent = monthName;
    let month = monthDisplay.textContent;
    //console.log(month); //debugging
} 
for (let i=1; i <selectedMonth.options.length; i++) {
    monthList.push(selectedMonth.options[i].text);
  };
(function objCreator() {
    for (let i=1; i <selectedMonth.options.length; i++) {
            let month_summ = Object.create(monthsummary);
            mainList.push(month_summ);
            month_summ.month = monthList[i-1];
            month_summ.income = {};
            month_summ.expenses = {};
          }
    }());
//console.log(monthList) //Debugging
//Get month Value from selection and update its display
selectedMonth.addEventListener("change", monthGet_Display);
//console.log(mainList); //debugging

//Debugging Code
submitButton.addEventListener("click", function() {
    let monthName = selectedMonth.options[selectedMonth.selectedIndex].text;
    let expenditure = expenditureType.options[expenditureType.selectedIndex].value;
    let descri = description.value;
    let descri_val = parseFloat(amount.value);
    let month = mainList[monthList.indexOf(monthName)];
    if (expenditure==="income") {
    if (!(descri in month.income)) {
        month.income[descri] = descri_val;
    } else {
        month.income[descri] += descri_val;
    } } else if (expenditure==="expenses") {
        if (!(descri in month.expenses)) {
            month.expenses[descri] = descri_val;
        } else {
            month.expenses[descri] += descri_val;
        } 
    }
    console.log(mainList);
    //month.incomeAmount.push(descri_val);
    //mainList[monthList.indexOf(monthName)].amount = descri_val;
})