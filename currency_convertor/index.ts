#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let answer =await inquirer.prompt([{
    name: "from",
    type: "list",
    choices: ["USD","GBP","EUR","PKR"],
    message: chalk.bold.green(" currency you want to convert from")

},
{    name : "to",
    type: "list",
    choices: ["USD","GBP","EUR","PKR"],
    message: chalk.bold.green("currency you would like to convert in")
},

 { name: "amount",
 type : "number",
 message:chalk.bold.italic.green("enter your amount")
}]);

let currency:any = {
    USD :1,
    GBP:0.8,
    Euro:0.92,
    PKR:280
};
let currencyFrom= currency[answer.from];
let currencyTo=currency[answer.to];
let baseCurrency=answer.amount/currencyFrom;
let result =baseCurrency*currencyTo;
console.log(chalk.bold.italic.yellow(Math.floor(result)));

