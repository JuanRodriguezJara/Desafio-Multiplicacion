// Ingresar número en el alert
let ciclo = function () {
let numero = prompt("Ingresa un número entre el 1 y el 20: ")
    while (numero > 20 || numero < 1){
        numero = prompt("El número ingresado está fuera del rango (1 al 20), por favor vuelva a ingresar un número: ");
    }
    return numero;
}
let number = ciclo();

// Multiplicación
for (let i = 1; i <= number; i++) {
    console.log( + i + " x " + number + " = " + i * number)
    }

// Factorial
for (let j = 1; j <= number; j++) {
    let res = 1;
    for (let k= 1; k <= j; k++) {
    res = res * k;
    }
    console.log("Factorial de " + j + " es: " + res);
    }
    