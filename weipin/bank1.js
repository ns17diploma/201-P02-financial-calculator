var rl = require('readline-sync');

var deposit = Number(rl.question("Deposit: RM "));
var rate = Number(rl.question("Rate: "));
var year = Number(rl.question("Year: "));

var rateConvert = rate / 100;
var cal = 1 + rateConvert;
var count = deposit * Math.pow( cal , year );
var ans = count.toFixed(2);

console.log( "Total: RM " + ans );

