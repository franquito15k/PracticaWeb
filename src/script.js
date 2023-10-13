const $botonSumar = document.querySelector("#botonesS");
const $botonRestar = document.querySelector("#botonesR");
const $display = document.querySelector("#display");
const $reset = document.querySelector("#reset");

let cont = 0;
$display.textContent = "Incrementa el numero: " + cont;

$botonSumar.addEventListener("click", function () {
    cont++;
    $display.textContent = "Incrementa el numero: " + cont;
});

$botonRestar.addEventListener("click", function () {
    cont--;
    $display.textContent = "Incrementa el numero: " + cont;
});

$reset.addEventListener("click",function() {
    cont=0;
    $display.textContent = "Incrementa el numero: " + cont;
})