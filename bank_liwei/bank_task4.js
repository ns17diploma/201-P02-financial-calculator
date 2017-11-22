var rl = require('readline-sync');
console.log("Bank");

var year = rl.question("Year : ");
var interest =  Number(rl.question("Rate : "));
var amount = rl.question("Amount : ");
var deposit = amount / Math.pow(1+interest, year);

 console.log(deposit);