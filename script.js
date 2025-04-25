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

numbers.forEach((number) => number.addEventListener('click', function() {
    if (solution.value === +display.textContent) {
        display.textContent = '';
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
    } else if (firstNumber !== '' && operator.value === '') {
        display.textContent = '';
        operator.value = sign.textContent;
    }

    if (firstNumber.value !== '' && operator.value !== '' && secondNumber.value !== '') {
        evaluate();
        operator.value = sign.textContent;
        console.log(firstNumber.value, operator.value);
    }
}));

equals.addEventListener('click', function() {
    evaluate();
});

clear.addEventListener('click', function() {
    display.textContent = '';
    objects.forEach((object) => object.value = '');
})

const evaluate = function() {
    solution.value = operate(+firstNumber.value, operator.value, +secondNumber.value);
    display.textContent = parseFloat(solution.value.toFixed(3));
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