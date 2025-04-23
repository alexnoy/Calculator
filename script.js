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

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');


numbers.forEach((number) => number.addEventListener('click', function() {
    if ((operator.value !== '')) {
        display.textContent += number.textContent;
        secondNumber.value += number.textContent;
    } else {
        display.textContent += number.textContent;
        firstNumber.value += number.textContent;
    }
}));

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