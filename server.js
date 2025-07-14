// Simple Calculator JavaScript

// Get the display element
let display = document.getElementById('display');

// Variables to store our numbers and operation

let firstNumber = '';
let secondNumber = '';
let operation = '';

// Function to append a number to the display
function appendNumber(num) {
    if (operation === '') {
        firstNumber += num;
        display.value = firstNumber;
    } else {
        secondNumber += num;
        display.value = secondNumber;
    }
}

// Function to set the operation
function setOperation(op) {
    operation = op;
    display.value = '';
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
}


// Function to calculate the result
function calculate() {
    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    // Do this
    if (operation === '/') {
        result = num1 / num2;
    }
    else if (operation === 'x') {
        result = num1 * num2;
    }
    else if (operation === '+'){
        result = num1 + num2;
    }
    else if (operation === '-'){
        result = num1 - num2;
    }
    else{
        result = 'ERROR'
    }
    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
}
