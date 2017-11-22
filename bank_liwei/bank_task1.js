var rl = require('readline-sync');
console.log("Bank");
var deposit = rl.question("Deposit : ");
var year = rl.question("Year : ");
var interest =  Number(rl.question("Rate : "));
var amount = deposit * Math.pow(1+interest, year);
 console.log(amount);