let num1 = 0;
let num2 = 0;
let operator;
//let result;

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

//result = multiply(9,3);

//console.log(result);