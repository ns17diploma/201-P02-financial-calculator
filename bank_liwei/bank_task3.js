var rl = require('readline-sync');
console.log("Bank");
var deposit = Number(rl.question("Deposit : "));
var rate = Number(rl.question("Rate : "));
var amount = Number(rl.question("Amount : "));
var year = ((amount - deposit) / deposit) / rate;

 console.log("Year : " + year);