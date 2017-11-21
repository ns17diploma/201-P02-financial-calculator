var rl = require('readline-sync');

var rate = Number(rl.question("Rate: "));
var year = Number(rl.question("Year: "));
var total = Number(rl.question("Total: RM "));

var cal = rate / 100;
var cal1 = 1 + cal;
var cal2 = Math.pow( cal1, year );
var cal3 = total / cal2;
var ans = cal3.toFixed(0);

console.log( "Deposit: RM " + ans );
