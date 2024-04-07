#! /uusr/bin/env node

import inquirer from "inquirer";
import chalk, { chalkStderr } from "chalk";

let todos:any[]=[];
let answer;

do {

 answer = await inquirer.prompt({
    name:"todo",
    type:"list",
    choices:["add","delete","update","view","exit"],
    message:chalk.green("\n \t what would you like to do \n ")
});

if (answer.todo === "add") {
    let addtask= await inquirer.prompt({
        name: "addtask",
        type:"input",
        message:chalk.green("what would you like to add in your task")
    });
    if (addtask.addtask ==="")
        {console.log(chalk.red("please enter a valid task"))}

    else {let task :[] = addtask.addtask.split(",");
    
     for (let i=0; i<task.length ; ++i){
        todos.push(task[i]);}
    };
    
    todos.forEach((todo)=>{chalk.blue(console.log( ` ${todo}  `))})
        
    }
    else if(answer.todo === "view") {
        if(todos.length ===0){
            console.log(chalk.red(" \n your list is empty \n"))
        }else{
        console.log(chalk.blue(`\n your todo list contains ${todos} \n`))}
    }
else if(answer.todo === "delete"){
    if (todos.length ===0 ) { console.log(" \n sorry, your list is empty")}
   else{ console.log(chalk.yellow(` \n your todo list contains ${todos}`));
    let deletetask= await inquirer.prompt([{
        name:"delete",
        type:"input",
        message:"what would you like to delete"
    },
    {name: "conirmation",
        type:"confirm",
        message:chalk.red("are you sure you want to delete"),
        default:false
    }])
    

    if (deletetask.conirmation === true){
        let remove =deletetask.delete;
        todos =todos.filter(item => item !== remove)
        console.log(chalk.yellow(`\n the list now contains ${todos}`))
    }

}}
else if (answer.todo === "update"){
    console.log(chalk.yellow(` \n todo list contains ${todos}`))
    let update= await inquirer.prompt([{
        name : "update",
        type:"input",
        message: chalk.yellow("would you would like to update")
    },
{      name : "replace",
    type:"inpput",
    message :chalk.green("what would you like to add instead")
}]);
let removeitem=update.update;
todos= todos.filter(item=>item !== removeitem);
let updateitem=update.replace;
todos.push(updateitem);
console.log(chalk.yellow(`\n your updated list now contains ${todos}`))
}}
    while (answer.todo !== "exit")
