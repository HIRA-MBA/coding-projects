#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "operation",
    type: "list",
    choices: ["addition", "subtraction", "multiplication", "division", "modulus"],
    message: "what would you like to do "
});
if (answer.operation === "addition") {
    let add = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "enter first number"
        },
        {
            name: "num2",
            type: "number",
            message: "enter second number number"
        }]);
    let sum = add.num1 + add.num2;
    console.log(` the  sum of ${add.num1} and ${add.num2} = ${sum}`);
}
else if (answer.operation === "subtraction") {
    let sub = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "enter first number"
        },
        {
            name: "num2",
            type: "number",
            message: "enter second  number"
        }]);
    let diff = sub.num1 - sub.num2;
    console.log(` the  difference of ${sub.num1} and ${sub.num2} = ${diff}`);
}
else if (answer.operation === "multiplication") {
    let mul = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "enter first number"
        },
        {
            name: "num2",
            type: "number",
            message: "enter second number"
        }]);
    let product = mul.num1 * mul.num2;
    console.log(` the  product of ${mul.num1} and ${mul.num2} = ${product}`);
}
else if (answer.operation === "division") {
    let div = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "enter dividend number"
        },
        {
            name: "num2",
            type: "number",
            message: "enter divisor number"
        }]);
    let division = div.num1 / div.num2;
    console.log(` the  quotient of ${div.num1} and ${div.num2} = ${division}`);
}
else if (answer.operation === "modulus") {
    let mod = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "enter dividend number"
        },
        {
            name: "num2",
            type: "number",
            message: "enter devisor number"
        }]);
    let modulus = mod.num1 % mod.num2;
    console.log(` the  remainder of ${mod.num1} and ${mod.num2} = ${modulus}`);
}
