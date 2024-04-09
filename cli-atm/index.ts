#! /usr/bin/env node
import inquirer from "inquirer";
 let balance = 10000;
 let myPin=7860;

 let pinCode:any = await inquirer.prompt({
   name: "pin",
   type: "number",
   message : "Enter your pin"
 });
 if (myPin === pinCode.pin){
   console.log("pin is correct,please proceed");



 let options =await inquirer.prompt({
    name: "operations",
    type: "list",
    choices : ["balance check","fast cash","withdrawl"],
    message : "what would you like to do "
 });

 if (options.operations === "balance check"){
    console.log(` Your balance is ${balance}`)
 }

 else if (options.operations === "fast cash")
   {
   let fastCash= await inquirer.prompt({
      name :"cash",
      type:"list",
      choices: ['500','1000','1500','15000'],
      message:" how much cash do you want"
   });
   if (fastCash.cash > balance){
      console.log("insufficient balance")}
   else{ balance-=fastCash.cash;
      console.log(` yor remaing balance is ${balance}`)
    }  }

    else if (options.operations === "withdrawl")
      {
      let cash= await inquirer.prompt({
         name :"cash",
         type:"number",      
         message:" how much cash do you want"
      });
      if (cash.cash > balance){
         console.log("insufficient balance")}
      else{ balance-=cash.cash;
         console.log(` yor remaing balance is ${balance}`)
       }  };}
       else{console.log("pin is incorrect")};
   
   
    
 
