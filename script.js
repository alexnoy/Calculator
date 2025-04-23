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
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

numbers.forEach((number) => number.addEventListener('click', function() {
    if ((operator.value !== '')) {
        display.textContent += number.textContent;
        secondNumber.value += number.textContent;
    } else {
        display.textContent += number.textContent;
        firstNumber.value += number.textContent;
    }
}));

operators.forEach((sign) => sign.addEventListener('click', function() {
    if (firstNumber.value === '') {
        operator.value = '';
    } else {
        display.textContent = '';
        operator.value = sign.textContent;
    }
}));

equals.addEventListener('click', function() {
    solution.value = operate(+firstNumber.value, operator.value, +secondNumber.value);
    display.textContent = solution.value;
});

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