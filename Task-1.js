// My Balance
var myBalance = 5000;
console.log(" ");
console.log("Main Balance:      "+ myBalance + "Tk");
console.log(" ");


// 1Kg apple & orange price
var apple = 350;
var orange = 500;

// if i Buy 2kg apple & 3kg orange
// Total Pay Amount
console.log("Apple  - 2kg ----  " + apple*2 + "Tk");
console.log("Orange - 3kg ----  " + orange*3 + "Tk");
console.log("------------------------");

var total = apple*2 + orange*3;
console.log("Total:            "+ total + "Tk");

myBalance -= total;
console.log("Available Balance:"+ myBalance + "Tk");

