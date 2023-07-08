let num1 = 0;
let num2 = 0;
let operator = "+";
let displayValue;
let curDisplayOperator = false;
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const add = ((num1, num2) => num1 + num2);

const subtract = ((num1, num2) => num1 - num2);

const multiply = ((num1, num2) => num1 * num2);

const divide = ((num1, num2) => num2 === 0 ? "ERROR" : num1 / num2);

function operate(num1, num2, operator){
    if(operator === "+") return add(num1, num2);
    if(operator === "-") return subtract(num1, num2);
    if(operator === "*") return multiply(num1, num2);
    if(operator === "/") return divide(num1, num2);
    if(operator === "=") return num1;
};

function updateDisplay(input) {
    console.log(input);
    if(input.classList.contains("operator")){
        if(input.id === "="){
            curDisplayOperator = false;
            display.innerHTML = num1;
        }
        else {
            curDisplayOperator = true;
            display.innerHTML = input.innerHTML;
        }
    }
    else if(input.classList.contains("number") && curDisplayOperator){
        display.innerHTML = input.innerHTML;
        curDisplayOperator = false;
    }
    else if(input.classList.contains("number") && !curDisplayOperator && operator != "=" ){
        display.innerHTML += input.innerHTML;
        curDisplayOperator = false;
    }
}


buttons.forEach(button => {
    button.addEventListener('click', e => {
        pressedButton(e.target);
    })
})

function pressedButton(button) {
    if(button.classList.contains("number")){
        updateDisplay(button);
        num2 = parseFloat(num2 + button.innerHTML);
    }
    else if(button.id === "."){
        updateDisplay(button);
        num2 += ".";
    }
    else if(num1 === 0){
        num1 = num2;
        num2 = 0;
        updateDisplay(button);
        operator = button.id;
    }
    else if(button.id === "="){
        num2 = operate(num1, num2, operator);
        num1 = 0;
        operator = "=";
        display.innerHTML = num2;
    }
    else if(button.classList.contains("operator")){
        operator = button.id;
        updateDisplay(button);
        num1 = operate(num1, num2, operator);
        num2 = 0;
    }
}

