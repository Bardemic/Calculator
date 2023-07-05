let num1;
let num2;
let operator;

const add = ((num1, num2) => num1 + num2);

const subtract = ((num1, num2) => num1 - num2);

const multiply = ((num1, num2) => num1 * num2);

const divide = ((num1, num2) => num1 / num2);

function evaluate(num1, num2, operator){
    if(operator === "+") return add(num1, num2);
    if(operator === "-") return subtract(num1, num2);
    if(operator === "*") return multiply(num1, num2);
    if(operator === "/") return divide(num1, num2);
}