let displayValue = '';
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
  if (currentOperation && displayValue === firstOperand) {
    displayValue = '';
  }
  displayValue += number;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue || '0';
}

function chooseOperation(operation) {
  if (displayValue) {
    firstOperand = displayValue;
    currentOperation = operation;
  }
}

function clearDisplay() {
  displayValue = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = '';
  updateDisplay();
}

function deleteNumber() {
  displayValue = displayValue.toString().slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  if (firstOperand && currentOperation) {
    secondOperand = displayValue;
    displayValue = operate(currentOperation, parseFloat(firstOperand), parseFloat(secondOperand)).toString();
    firstOperand = '';
    currentOperation = '';
    updateDisplay();
  }
}

function operate(operation, a, b) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? 'Error' : a / b;
    default:
      return 0;
  }
}

function calculateResult() {
    if (firstOperand && currentOperation) {
      const result = operate(currentOperation, parseFloat(firstOperand), parseFloat(displayValue));
      displayValue = parseFloat(result.toFixed(10)).toString(); // Rounds to 10 decimal places, then converts to string
      firstOperand = '';
      currentOperation = '';
      updateDisplay();
    }
  }
  
