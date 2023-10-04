let mainOperand = 0;
let topOperand = 0;
let previousOperation = null;
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
    if (mainScreen.innerHTML === "0") {
      mainScreen.innerHTML = btn.innerHTML;
    } else {
      mainScreen.innerHTML += btn.innerHTML;
    }
  });
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (topOperand === 0) {
      currentOperation = btn.innerHTML;
      topOperand = parseInt(mainScreen.innerHTML);
      topScreen.innerHTML = `${topOperand} ${currentOperation}`;
      mainScreen.innerHTML = 0;
    } else {
      if (currentOperation === "×") {
        previousOperation = currentOperation;
        currentOperation = btn.innerHTML;
        mainOperand = topOperand * parseInt(mainScreen.innerHTML);
        topOperand = mainOperand;
        topScreen.innerHTML = `${topOperand} ${currentOperation}`;
        mainScreen.innerHTML = 0;
        mainOperand = 0;
      } else if (currentOperation === "+") {
        previousOperation = currentOperation;
        currentOperation = btn.innerHTML;
        mainOperand = topOperand + parseInt(mainScreen.innerHTML);
        topOperand = mainOperand;
        topScreen.innerHTML = `${topOperand} ${currentOperation}`;
        mainScreen.innerHTML = 0;
        mainOperand = 0;
      } else if (currentOperation === "÷") {
        previousOperation = currentOperation;
        currentOperation = btn.innerHTML;
        mainOperand = topOperand / parseInt(mainScreen.innerHTML);
        topOperand = mainOperand;
        topScreen.innerHTML = `${topOperand} ${currentOperation}`;
        mainScreen.innerHTML = 0;
        mainOperand = 0;
      } else if (currentOperation === "−") {
        previousOperation = currentOperation;
        currentOperation = btn.innerHTML;
        mainOperand = topOperand - parseInt(mainScreen.innerHTML);
        topOperand = mainOperand;
        topScreen.innerHTML = `${topOperand} ${currentOperation}`;
        mainScreen.innerHTML = 0;
        mainOperand = 0;
      }
    }
  });
});

resetBtn.addEventListener("click", function () {
  mainOperand = 0;
  topOperand = 0;
  previousOperation = null;
  currentOperation = null;
  total = 0;
  mainScreen.innerHTML = 0;
  topScreen.innerHTML = "";
});

equalBtn.addEventListener("click", function () {
  mainOperand = parseInt(mainScreen.innerHTML);
  if (currentOperation === "×") {
    total = topOperand * mainOperand;
  } else if (currentOperation === "+") {
    total = topOperand + mainOperand;
  } else if (currentOperation === "÷") {
    total = topOperand / mainOperand;
  } else if (currentOperation === "−") {
    total = topOperand - mainOperand;
  }

  mainScreen.innerHTML = total;
  topScreen.innerHTML = "";
});

backBtn.addEventListener("click", function () {
  let str = mainScreen.innerHTML;
  str = str.substring(0, str.length - 1);
  mainScreen.innerHTML = str;
});
