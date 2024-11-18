// Clase
console.log("--- COSAS CLASE ---");
let numero1 = 10;

const numero2 = 100 // Las variables constantes NO pueden cambiar de valor en todo el programa una vez ya se le ha asignado valor

numero1 = 220;

// numero2 = 22;


// Ejercicio 1
console.log("--- EJERCICIO 1 ---");
let nombre = "Héctor";
let edad = 17;
let ciudad = "Teruel";

console.log("Hola me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);

// Ejercicio 2
console.log("--- EJERCICIO 2 ---");
let numero = 33;
let doble = numero * 2;
let triple = numero * 3;

console.log("El doble de " + numero + " es " + doble + " y el triple es " + triple);

        
// Ejercicio 3
console.log("--- EJERCICIO 3 ---");
let celsius = 20;
let farenheit = (celsius * 9/5) + 32;

console.log(celsius + "ºC son equivalentes a " + farenheit + " ºF");
// Ejercicio 4
console.log("--- EJERCICIO 4 ---");
let dias = 10;

console.log(dias + " dias, son " + [dias / 7] + " semanas y " + [dias % 7] + " dias");

// Ejercicio 5
console.log("--- EJERCICIO 5 ---");
let edad1 = 22;
let edad2 = 22;


if ( edad1 < edad2) {

    console.log(edad1 + " no es mayor que " + edad2);

} else if ( edad1 > edad2) {

    console.log(edad1 + " es mayor que " + edad2);

} else {

    console.log(edad1 + " es igual a " + edad2);

}

// Ejercicio 6
console.log("--- EJERCICIO 6 ---");

let nota1 = 5;
let nota2 = 4.9;
let nota3 = 10;

console.log("El promedio de " + nota1 + ", " + nota2 + "y " + nota3 + ".Es de " + [(nota1 + nota2 + nota3) / 3] );


// Ejercicio 7
console.log("--- EJERCICIO 7 ---");
let min = 130;

console.log(min + " minutos son " + [min / 60] + " horas y " + [ min % 60] + " minutos");


// Ejercicio 8
console.log("--- EJERCICIO 8 ---");
let largo = 200;
let ancho = 150;
console.log("Largo: " + largo + "cm");

console.log("Ancho: " + ancho + "cm");

console.log("El área es de " + [largo * ancho] + " cm2");

console.log("El perímetro es de " + [2 *(largo + ancho)] + " cm");

// Ejercicio 9
console.log("--- EJERCICIO 9 ---");
let precioOriginal = 30;
let descuento = 0.2;
let precioFinal = precioOriginal - (precioOriginal * descuento);

console.log("El precio original es de " + precioOriginal + ". Y aplicando el descuento se queda en " + precioFinal);

// Ejercicio 10
console.log("--- EJERCICIO 10 DESAFÍO ---");
let edadActual = 17;
let edadRetiro = 65;

console.log("Te quedan " + [edadRetiro - edadActual] + " años para jubilarte");

console.log("Te jubilarás en el " + [2024 + (edadRetiro - edadActual)]);