const addition = function(a, b) {
    return a + b;    
}

const subtraction = function(a, b) {
    return a - b;
}

const multiplication = function(a, b) {
    return a * b;
}

const division = function(a, b) {
    return a / b;
}

let firstNumber = {value: ''};
let operator = {value: ''};
let secondNumber = {value: ''};
let solution = {value: ''};

const operate = function(firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return addition(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtraction(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiplication(firstNumber, secondNumber);
    } else if (operator === '/') {
        return division(firstNumber, secondNumber);
    }
}