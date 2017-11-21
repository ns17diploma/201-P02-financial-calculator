var rl = require('readline-sync');

var deposit = Number(rl.question("Deposit: RM "));
var year = Number(rl.question("Year: "));
var total = Number(rl.question("Total: RM "));

var cal = total / deposit;
var cal1 = cal - 1;
var cal2 = cal1 * 100
var ans = cal2.toFixed(2);

console.log( ans + " %" );
