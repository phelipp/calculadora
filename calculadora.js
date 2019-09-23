var valor1 = 0;
var valor2 = 0;
var display;
const SOMA = 1;
const SUB = 2;
const MULT = 3;
const DIV = 4;
const PORCENT = 5;
const INVERSOR = 6;
const NULL = 0;
var tipo = NULL;

function addNumero(numero) {
    if (display.value === "0") { limpar(); }
    display.value += numero;
}
function incremento(tipo) {
    switch (tipo) {
        case SOMA:
            valor += parseFloat(display.value);
            break;
        case SUB:
            valor -= parseFloat(display.value);
            break;
        case MULT:
            valor *= parseFloat(display.value);
            break;
        case DIV:
            valor /= parseFloat(display.value);
            break;

        default:
            valor = parseFloat(display.value);

    }
    return valor
}
function adicao() {

    valor1 = incremento(tipo);
    tipo = SOMA;
    limpar();
}
function sub() {

    valor1 = incremento(tipo);
    tipo = SUB;
    limpar();
}
function mult() {

    valor1 = incremento(tipo);
    tipo = MULT;
    limpar();
}
function divisao() {
    if (valor1 = parseFloat(display.value) !== 0) {

        valor1 = incremento(tipo);
        tipo = DIV;
        limpar();
    }
}
function porcentagem() {
    tipo = PORCENT;
    valor1 = parseFloat(display.value);
    limpar();
}
function inversor() {
    valor1 = parseFloat(display.value) * -1;
    display.value = valor1;

}
function mostrarResulatado() {
    var aux = 0;
    valor2 = parseFloat(display.value);
    switch (tipo) {
        case SOMA:
            aux = valor1 + valor2;
            tipo = NULL;
            break;
        case SUB:
            aux = valor1 - valor2;
            tipo = NULL;
            break;
        case MULT:
            aux = valor1 * valor2;
            tipo = NULL;
            break;
        case DIV:
            aux = valor1 / valor2;
            tipo = NULL;
            break;
        case PORCENT:
            aux = valor1 * valor2 / 100;
            tipo = NULL;
            break;

    }

    display.value = aux;

}
function zerar() {
    valor1 = 0;
    tipo = NULL;
    mostrarResulatado();
}
function limpar() {

    display.value = "";
}

window.onload = function () {
    display = document.getElementById("display");
    this.display.value = 0;

}
