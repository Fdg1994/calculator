const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-op');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');
let currentValue = '';
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
        firstValue = Number(currentValue);
        operator = button.textContent;

        expressionDisplay = firstValue + operator;
        display.textContent = expressionDisplay;

        currentValue = "";
    });
});

clearButton.addEventListener('click', () => {
    currentValue = '';
    display.textContent = '0';
});

clearButton.addEventListener('click', () => {
    currentValue = '';
    display.textContent = '0';
});

