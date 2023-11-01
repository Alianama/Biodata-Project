// Kalkulator Javasript
function clearScreen() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var a = document.getElementById("result").value;
  var b = eval(a);
  document.getElementById("result").value = b;
}

//hideshow
const calculator = document.getElementById("calculator");
var display = 0;

function hideshow() {
  if (display == 1) {
    calculator.style.display = "block";
    display = 0;
  } else {
    calculator.style.display = "none";
    display = 1;
  }
}
