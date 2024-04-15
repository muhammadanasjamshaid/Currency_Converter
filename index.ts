#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280
};

let user_answer = await inquirer.prompt([
  {
    name: "From",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name : "amount",
    message: "Enter Your Amount",
    type: "number"
  }

]);

let FromAmount = currency[user_answer.From]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount

let Baseamount = amount / FromAmount
let Convertedamount = Baseamount * toAmount

console.log(Convertedamount);


