import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 277.5,
    INR: 83.3,
    CAD: 1.3,
    AFN: 71.2,
    CNY: 7.2,
    EUR: 0.9,
    TND: 3.1,
    YER: 250.4,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "CAD", "AFN", "CNY", "EUR", "TND", "YER"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "CAD", "AFN", "CNY", "EUR", "TND", "YER"]
    },
    {
        name: "amount",
        message: "Enter Amount",
        type: "number"
    }
]);
let fromCurrency = currency[userAnswer.from];
let toCurrency = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromCurrency;
let convertedCurrency = baseAmount * toCurrency;
console.log(convertedCurrency);
