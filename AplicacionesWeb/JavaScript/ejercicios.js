function ej1() {

    let numero = parseInt(prompt("Dame un número y te dire si es par o impar"))
    
    if (esPar(numero) == true) {

        alert("El número es PAR");

    } else if (esPar(numero) == false) {

        alert("El número es IMPAR");

    } else {

        alert("Introduzca un número por favor");

    }

}

function esPar (num) {

    if (num % 2 == 0 ) {

        return true;

    } else if (num % 2 == 1) {

        return false;

    } else {

        return ;

    }

}

function ej2(n1,n2,n3) {

    if (n1 > n2 && n1 > n3 ) {

        console.log(n1 + " es el mayor de todos");

    } else if ( n2 > n1 && n2 > n3) {

        console.log(n2 + " es el mayor de todos");

    } else if ( n3 > n1 && n3 > n2 ) {

        console.log(n3 + " es el mayor de todos");

    } else {

        console.log("Hay uno o más nuneros iguales")

    }            
    
}




function ej3() {

    let nota = parseInt(prompt("Dime la nota del alumno"));

    if (nota >= 91 && nota <=100 ) {

        alert("Sobresaliente");

    } else if ( nota >= 71 && nota <= 90 ) {

        alert("Notable");

    } else if ( nota >= 61 && nota <= 70 ) {

        alert("Bien");

    } else if ( nota >= 50 && nota <= 60) {

        alert("Sufi");

    } else {

        alert("Insuficiente");

    }

}


function ej4() {

    let anio = parseInt(prompt("Dime un año"));

    if (anio % 2 == 0 ) {

        alert("El año es BISIESTO");

    } else {

        alert("El año NO es BISIESTO");

    }

}

function ej5() {

    let numero = parseInt(prompt("Dime un número"));

    if (numero < 0 ) {

        alert("El número es negativo");

    } else if ( numero == 0) {

        alert("El número es 0");

    } else if (numero > 0 ) {

        alert("El número es positivo");

    } else {

        alert("NO es un número");

    }

}