// This function clears all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function displays the values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
  var a = document.getElementById("result").value;
  var b = eval(a);
  document.getElementById("result").value = b;
}
