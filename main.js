const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-op');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');

let currentValue = "";
let firstValue = null;
let operator = null;
let expressionDisplay = "";
let justCalculated = false;

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, callback) {
    return callback(a, b);
}

function getCallback(op) {
    if (op === '+') return add;
    if (op === '-') return subtract;
    if (op === 'x') return multiply;
    if (op === ':') return divide;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const digit = button.textContent;

        if (justCalculated) {
            currentValue = digit;
            firstValue = null;
            operator = null;
            expressionDisplay = digit;
            justCalculated = false;
        } else {
            currentValue += digit;
            expressionDisplay += digit;
        }

        display.textContent = expressionDisplay;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const newOperator = button.textContent;


        if (justCalculated) {
            currentValue = "";
            justCalculated = false;
        }

        if (firstValue !== null && currentValue !== "") {
            const callback = getCallback(operator);
            firstValue = operate(Number(firstValue), Number(currentValue), callback);
            display.textContent = firstValue;
        } else if (currentValue !== "") {
            firstValue = Number(currentValue);
        }

        operator = newOperator;

        currentValue = "";

        expressionDisplay = String(firstValue) + operator;
        display.textContent = expressionDisplay;
    });
});

clearButton.addEventListener('click', () => {
    currentValue = "";
    firstValue = null;
    operator = null;
    expressionDisplay = "";
    justCalculated = false;
    display.textContent = "0";
});

equalsButton.addEventListener('click', () => {
    const a = Number(firstValue);
    const b = Number(currentValue);

    if (operator === ":" && b === 0) {
        display.textContent = "Can't divide by zero!";

        firstValue = null;
        currentValue = "";
        operator = null;
        expressionDisplay = "";
        justCalculated = false;
        return; 
    }

    const callback = getCallback(operator);
    const result = operate(a, b, callback);


    display.textContent = result;

    firstValue = result;
    currentValue = "";
    operator = null;
    expressionDisplay = String(result);

    justCalculated = true;
});

