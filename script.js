const display = document.getElementById("display");
let isCalculated = false;

function appendToDispla(input) {
  if (isCalculated) {
    display.value = "";
    isCalculated = false;
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
  isCalculated = false;
}
function calculate() {
  try {
    let expression = display.value.replace(/x/g, "*");
    display.value = eval(expression);
    isCalculated = true;
  } catch (error) {
    display.value = "Error";
  }
}
