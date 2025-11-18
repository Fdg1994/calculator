const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-op');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');

let currentValue = "";
let firstValue = null;
let operator = null;
let expressionDisplay = "";

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

        currentValue += digit;
        expressionDisplay += digit;

        display.textContent = expressionDisplay;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const newOperator = button.textContent;

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
    currentValue = '';
    display.textContent = '0';
});

equalsButton.addEventListener('click', () => {
    const a = Number(firstValue);
    const b = Number(currentValue);

    const callback = getCallback(operator);
    const result = operate(a, b, callback);

    display.textContent = result;

    firstValue = result;
    currentValue = "";
    operator = null;
    expressionDisplay = String(result);
});

