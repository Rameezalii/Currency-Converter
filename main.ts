#! usr/bin/env node
import inquirer from "inquirer";


const currency: any = {
  USD: 1,
  PKR: 277.5,
  INR: 83.3,
  CAD: 1.3,
  AFN: 71.2,
  CNY: 7.2,
  EUR: 0.9,
  TND: 3.1,
  YER: 250.4,
  TRY: 32,
};

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "INR",
      "CAD",
      "AFN",
      "CNY",
      "EUR",
      "TND",
      "YER",
      "TRY",
    ],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "INR",
      "CAD",
      "AFN",
      "CNY",
      "EUR",
      "TND",
      "YER",
      "TRY",
    ],
  },
  {
    name: "amount",
    message: "Enter Amount",
    type: "number",
  },
]);

let fromCurrency = currency[userAnswer.from];

let toCurrency = currency[userAnswer.to];

let amount = userAnswer.amount;

let baseAmount = amount / fromCurrency;

let convertedCurrency = baseAmount * toCurrency;

console.log(convertedCurrency);
