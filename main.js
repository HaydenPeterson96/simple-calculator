let firstOperand = 0;
let secondOperand = 0;
let currentOperation = null;
let total = 0;

let numberBtn = document.querySelectorAll(".number-btn");
let mainScreen = document.querySelector(".main-screen");
let topScreen = document.querySelector(".top-screen");
let operationBtn = document.querySelectorAll(".operation-btn");
let equalBtn = document.querySelector(".equal-btn");
let resetBtn = document.querySelector(".reset-btn");
let backBtn = document.querySelector(".back-btn");

numberBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (currentOperation === null) {
      if (firstOperand === 0) {
        firstOperand = btn.innerHTML;
      } else {
        firstOperand += btn.innerHTML;
      }
    } else {
      if (secondOperand === 0) {
        secondOperand = btn.innerHTML;
      } else {
        secondOperand += btn.innerHTML;
      }
    }
    updateDisplay();
  });
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    currentOperation = btn.innerHTML;
    updateDisplay();
  });
});

equalBtn.addEventListener("click", function () {
  if (currentOperation === "+") {
    total = parseInt(firstOperand, 10) + parseInt(secondOperand, 10);
  } else if (currentOperation === "−") {
    total = parseInt(firstOperand, 10) - parseInt(secondOperand, 10);
  } else if (currentOperation === "÷") {
    total = parseInt(firstOperand, 10) / parseInt(secondOperand, 10);
  } else {
    total = parseInt(firstOperand, 10) * parseInt(secondOperand, 10);
  }
  displayTotal();
});

resetBtn.addEventListener("click", function () {
  firstOperand = 0;
  secondOperand = 0;
  currentOperation = null;
  total = 0;
  updateDisplay();
});

backBtn.addEventListener("click", function () {
  if (mainScreen.innerHTML === firstOperand) {
    let str = firstOperand;
    str = str.substring(0, str.length - 1);
    firstOperand = str;
  } else if (mainScreen.innerHTML === secondOperand) {
    let str = secondOperand;
    str = str.substring(0, str.length - 1);
    secondOperand = str;
  }
  updateDisplay();
});

function displayTotal() {
  mainScreen.innerHTML = total;
  topScreen.innerHTML = "";
}

function updateDisplay() {
  if (currentOperation === null) {
    mainScreen.innerHTML = firstOperand;
  } else {
    mainScreen.innerHTML = secondOperand;
    topScreen.innerHTML = `${firstOperand} ${currentOperation}`;
  }
  if (secondOperand === 0 && currentOperation === null) {
    topScreen.innerHTML = "";
  }
}

updateDisplay();
