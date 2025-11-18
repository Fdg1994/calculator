const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-op');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');
let currentValue = '';

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
        currentValue += button.textContent;   
        display.textContent = currentValue;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentValue += button.textContent;   
        display.textContent = currentValue;
    });
});
