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

let objects = [firstNumber, operator, secondNumber];

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');

numbers.forEach((number) => number.addEventListener('click', function() {
    if (+parseFloat(solution.value).toFixed(3) === +display.textContent) {
        display.textContent = '';
        dControl();
    }

    if (firstNumber.value === solution.value && operator.value === '') {
        firstNumber.value = '';
    }

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
    } else if (firstNumber.value !== '' && operator.value === '') {
        display.textContent = '';
        operator.value = sign.textContent;
        dControl();
    }

    if (operator.value !== '' && secondNumber.value === '') {
        operator.value = sign.textContent;
    }

    if (firstNumber.value !== '' && operator.value !== '' && secondNumber.value !== '') {
        evaluate();
        operator.value = sign.textContent;
    }
}));

equals.addEventListener('click', function() {
    if (evaluate() === '') {
        solution.value = '';
    } else {
        evaluate();
    }
});

clear.addEventListener('click', function() {
    display.textContent = '';
    objects.forEach((object) => object.value = '');
    dControl();
});

decimal.addEventListener('click', function() {
    dControl();
});

const dControl = function() {
    if (display.textContent.includes('.')) {
        decimal.disabled = true;
    } else {
        decimal.disabled = false;
    }
}

const evaluate = function() {
    solution.value = operate(+firstNumber.value, operator.value, +secondNumber.value);

    if (solution.value === undefined) {
        solution.value = +firstNumber.value;
        display.textContent = +parseFloat(solution.value).toFixed(3);
        return operator.value;
    }

    if (operator.value === '/' && secondNumber.value === '0') {
        firstNumber.value = 'NaN';
        return display.textContent = 'LOL really?';
    }

    display.textContent = +parseFloat(solution.value).toFixed(3);
    objects.forEach((object) => object.value = '');
    firstNumber.value = solution.value;
}

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