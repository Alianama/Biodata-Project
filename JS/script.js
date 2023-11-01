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
function hideshow() {
  var calculator = document.getElementById("calculator");
  if (calculator.style.display === "none" || calculator.style.display === "") {
    calculator.style.display = "table"; // Menampilkan tabel
    setTimeout(function () {
      calculator.style.opacity = 1; // Setelah muncul, atur opacity ke 1
    }, 300);
  } else {
    calculator.style.opacity = 0; // Mengurangi opacity menjadi 0
    setTimeout(function () {
      calculator.style.display = "none"; // Setelah opacity berkurang, sembunyikan tabel
    }, 300);
  }
}
