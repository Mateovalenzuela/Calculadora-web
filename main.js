const nro0 = document.getElementById('nro0')
const nro1 = document.getElementById('nro1')
const nro2 = document.getElementById('nro2')
const nro3 = document.getElementById('nro3')
const nro4 = document.getElementById('nro4')
const nro5 = document.getElementById('nro5')
const nro6 = document.getElementById('nro6')
const nro7 = document.getElementById('nro7')
const nro8 = document.getElementById('nro8')
const nro9 = document.getElementById('nro9')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multiplicacion = document.getElementById('multiplicacion')
const division = document.getElementById('division')


const pantalla = document.getElementById('pantalla');

nro0.addEventListener('click', escribirNumeroEnPantalla)
nro1.addEventListener("click", escribirNumeroEnPantalla)
nro2.addEventListener('click', escribirNumeroEnPantalla)
nro3.addEventListener('click', escribirNumeroEnPantalla)
nro4.addEventListener('click', escribirNumeroEnPantalla)
nro5.addEventListener('click', escribirNumeroEnPantalla)
nro6.addEventListener('click', escribirNumeroEnPantalla)
nro7.addEventListener('click', escribirNumeroEnPantalla)
nro8.addEventListener('click', escribirNumeroEnPantalla)
nro9.addEventListener('click', escribirNumeroEnPantalla)
suma.addEventListener('click', escribirNumeroEnPantalla)
resta.addEventListener('click', escribirNumeroEnPantalla)
multiplicacion.addEventListener('click', escribirNumeroEnPantalla)
division.addEventListener('click', escribirNumeroEnPantalla)

function escribirNumeroEnPantalla(event) {

    let numero = event.target.innerHTML;
    pantalla.value += numero;

}

function ejecutarOperacion() {
    let textoPantalla = pantalla.value;
    let resultado = eval(textoPantalla);
    pantalla.value = resultado;
}

function limpiarPantalla() {
    pantalla.value = null;
}

function borrarUltimo() {
    let str = pantalla.value;
    str = str.slice(0, -1)
    pantalla.value = str;
}

document.addEventListener("keydown", function (event) {
    const teclaPresionada = event.key;

    if (teclaPresionada >= "0" && teclaPresionada <= "9") {
        pantalla.value += teclaPresionada;
    } else if (teclaPresionada === "+") {
        pantalla.value += teclaPresionada
    } else if (teclaPresionada === "-") {
        pantalla.value += teclaPresionada
    } else if (teclaPresionada === "*") {
        pantalla.value += teclaPresionada
    } else if (teclaPresionada === "/") {
        pantalla.value += teclaPresionada
    } else if (teclaPresionada === "Enter") {
        ejecutarOperacion()
    } else if (teclaPresionada === "Backspace") {
        borrarUltimo()
    }
});
