let input = document.getElementById('input');
let container = document.querySelector('.calculator');

let string = "";

const buttonsData = {
    'AC': { label: 'AC', action: clearInput },
    'DEL': { label: 'DEL', action: deleteLast },
    '+': { label: '+', action: appendToInput },
    '/': { label: '/', action: appendToInput },
    '-': { label: '-', action: appendToInput },
    '*': { label: '*', action: appendToInput },
    '7': { label: '7', action: appendToInput },
    '8': { label: '8', action: appendToInput },
    '9': { label: '9', action: appendToInput },
    '4': { label: '4', action: appendToInput },
    '5': { label: '5', action: appendToInput },
    '6': { label: '6', action: appendToInput },
    '1': { label: '1', action: appendToInput },
    '2': { label: '2', action: appendToInput },
    '3': { label: '3', action: appendToInput },
    '%': { label: '%', action: appendToInput },
    '00': { label: '00', action: appendToInput },
    '0': { label: '0', action: appendToInput },
    '.': { label: '.', action: appendToInput },
    '=': { label: '=', action: expressInNumbers }
};

for (let key in buttonsData) {


    let buttonElement = document.createElement('button'); // Create button element
    buttonElement.textContent = buttonsData[key].label; // Set button label
    buttonElement.classList.add('button'); // Add button class
    if (key == '/' || key === '*' || key === '-' || key === '+' || key === '%') {

        buttonElement.classList.add('operator');
    } else if (key === '=') {
        buttonElement.classList.add('equalBtn');
    }

    if (buttonsData[key].action) {
        if (key === '4' || key === '8' || key === '0' || key === '+' || key === '%') { // Start a new div for every 4 buttons
            div = document.createElement('div');
            container.appendChild(div);
        }
    }
    buttonElement.onclick = buttonsData[key].action; // Add onclick event if action exists
    div.appendChild(buttonElement); // Append button to container

}


// Function to clear the input
function clearInput() {
    string = "";
    input.value = string;
}

// Function to delete the last character
function deleteLast() {
    string = string.substring(0, string.length - 1);
    input.value = string;
}

// Function to append characters to the input
function appendToInput(event) {
    string += event.target.textContent;
    input.value = string;
}

// Function to express in numbers the input 

function expressInNumbers() {
    try {
        let result = evaluateExpression(string);
        input.value = result;
        input.style.color = "#fb7c14";
    } catch (error) {
        input.value = "Error";
        input.style.color = "red";
    }
}

function evaluateExpression(expression) {
    let tikens = expression.match(/\d+|\+|\-|\*|\/|\%|\./)
    if (!tokens) throw "Invalid expression";


    let arrNumber = [];
    let operators = { '+': true, '-': true, '*': true, '/': true, '%': true };
    for (let token of tikens) {
        if (operators[token]) {
            let b = arrNumber.pop();
            let a = arrNumber.pop();
            if (token === '+') arrNumber.push(a + b);
            else if (token === '-') arrNumber.push(a - b);
            else if (token === '*') arrNumber.push(a * b);
            else if (token === '/') arrNumber.push(a / b);
            else if (token === '%') arrNumber.push(a % b);
        } else {
            arrNumber.push(parseFloat(token));
        }
    }
}