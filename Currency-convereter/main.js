import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.004434589800443458980044345898,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your Currency"
    },
    {
        type: "list",
        name: "To",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your conversion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount"
    }
]);
const { From, To, amount } = answer;
if (From && To && amount) {
    let result = Convertion[From][To] * amount;
    console.log(`Your conversion from ${From} to ${To} is ${result}`);
}
else {
    console.log("Invalid Amount");
}
