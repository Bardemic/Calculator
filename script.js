let num1 = 0;
let num2 = 0;
let operator;
let displayValue;
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
};

function updateDisplay(number) {
    console.log("Num1: " + num1 + " Num2: " + num2);
    display.innerHTML += number;
}


buttons.forEach(button => {
    button.addEventListener('click', e => {
        console.log(e.target);
        pressedButton(e.target);
    })
})

function pressedButton(button) {
    if(button.classList.contains("number")){
        updateDisplay(button.innerHTML);
        num2 = parseFloat(num2 + button.innerHTML);
        console.log(num2);
        console.log(button.innerHTML);
    }
    else if(button.id === "."){
        updateDisplay(button.innerHTML);
        num2 += ".";
    }
    else if(num1 === 0){
        num1 = num2;
        num2 = 0;
        updateDisplay(button.innerHTML);
        operator = button.id;
    }
    else if(button.id === "+"){
        updateDisplay(button.innerHTML);
        operator = "+";
        num1 = operate(num1, num2, operator);
        num2 = 0;
    }
    else if(button.id === "="){
        num1 = operate(num1, num2, operator);
        display.innerHTML = num1;
        num2 = 0;
    }
    else if(button.id === "-"){
        updateDisplay(button.innerHTML);
        operator = "-";
        num1 = operate(num1, num2, operator);
        num2 = 0;
    }
    else if(button.id === "/"){
        updateDisplay(button.innerHTML);
        operator = "/";
        num1 = operate(num1, num2, operator);
        num2 = 0;
    }
    else if(button.id === "*"){
        updateDisplay(button.innerHTML);
        operator = "*";
        num1 = operate(num1, num2, operator);
        num2 = 0;
    }
}

