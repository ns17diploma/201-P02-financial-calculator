var rl = require('readline-sync');

var deposit = Number(rl.question("Deposit: RM "));
var rate = Number(rl.question("Rate: "));
var total = Number(rl.question("Total: RM "));

var cal = total / deposit;
var cal1 = cal - 1;
var cal2 = rate / 100;
var cal3 = cal1 / cal2;
var ans = cal3.toFixed(0);

console.log( "Year(s): " + ans );
