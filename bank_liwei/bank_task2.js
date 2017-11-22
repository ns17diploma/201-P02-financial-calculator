var rl = require('readline-sync');
console.log("Bank");
var deposit = Number(rl.question("Deposit : "));
var year = Number(rl.question("Year : "));
var amount = Number(rl.question("Amount : "));
var interest = amount - deposit;
var rate = (interest / deposit) / year;
 console.log(rate);