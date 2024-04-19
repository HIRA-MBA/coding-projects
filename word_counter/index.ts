#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let answer:{sentence:string}= await inquirer.prompt({
    name:"sentence",
    type:"input",
    message:chalk.bgGray("\nEnter your sentence")})


let words=answer.sentence.trim().split(" ");
console.log(words);


console.log(chalk.bgBlue(`\n \t your sentence has  ${words.length} words`));