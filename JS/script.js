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
  var biodata = document.getElementById("biodata");
  if (
    calculator.style.display === "none" ||
    calculator.style.display === "" ||
    biodata.style.display === "block"
  ) {
    biodata.style.display = "none";
    calculator.style.display = "table"; // Menampilkan tabel
  } else {
    calculator.style.display = "none"; // Setelah opacity berkurang, sembunyikan tabel
  }
}

function showbiodata() {
  var calculator = document.getElementById("calculator");
  var biodata = document.getElementById("biodata");
  if (
    biodata.style.display === "none" ||
    biodata.style.display === "" ||
    calculator.style.display === "table"
  ) {
    biodata.style.display = "block";
    calculator.style.display = "none";
  } else {
    biodata.style.display = "none";
  }
}
