const $botonSumar = document.querySelector("#botonesS");
const $botonRestar = document.querySelector("#botonesR");
const $display = document.querySelector("#display");
let cont = 0;

$botonSumar.addEventListener("click", function () {
    cont++;
    $display.textContent = "Incrementa el numero: " + cont;
});

$botonRestar.addEventListener("click", function () {
    cont--;
    $display.textContent = "Incrementa el numero: " + cont;
});
