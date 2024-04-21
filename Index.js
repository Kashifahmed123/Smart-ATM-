#! usr/bin/env node
import inquirer from "inquirer";
let mybalance = 15000;
let mypin = 12345;
let PinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin number",
    type: "number",
});
if (PinAnswer.pin === mypin) {
    console.log("correct pin number");
    let operationPin = await inquirer.prompt({
        name: "operation",
        message: "please select operation",
        type: "list",
        choices: ["withdraw", "fast Cash", "balance check"]
    });
    if (operationPin.operation === "withdraw") {
        let Remainingamount = await inquirer.prompt([
            { name: "amount",
                message: "Please enter your amount",
                type: "number", }
        ]);
        let enteramount = Remainingamount.amount;
        {
            if (enteramount >= mybalance) {
                console.log("You have insufficient balance");
            }
            else
                (mybalance -= Remainingamount.amount);
            {
                console.log(`Your remaining balance is : ${mybalance}`);
            }
        }
    }
    else if (operationPin.operation === "fast Cash") {
        let fastcash = await inquirer.prompt({
            name: "easycash",
            type: "list",
            message: "please select the fast cash you want to withdraw from below list",
            choices: ["1000", "2000", "3000", "4000", "5000", "20000"]
        });
        let easyCash = fastcash.easycash;
        if (easyCash >= mybalance) {
            console.log("You have insufficient balance");
        }
        else
            (mybalance -= easyCash);
        {
            console.log(`Your remaining balance is : ${mybalance}`);
        }
    }
    else
        (operationPin.operation === "balance check");
    {
        console.log(`Your balance is ${mybalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
