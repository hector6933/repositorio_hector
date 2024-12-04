// EJERCICIO 1
function nombre() {

    // Hago que en la etiqueta con ID 'parrafo' se convierta al texto "hola"
    document.getElementById('nombre').innerText = prompt("Dime tu nombre");

}

function apellidos() {

    document.getElementById('apellidos').innerText = prompt("Dime tus apellidos")

}

// EJERCICIO 2
function fondo(color) {

    let fondo = document.body;

    fondo.style.background = color;

    return color;

}

function texto(color) {

    document.getElementById('parrafo').style.color = color;

}

function mostrarOcultar() {

    const texto = document.getElementById('miTexto');
    if ( texto.style.display === 'none') {

        texto.style.display = 'block';

    } else {

        texto.style.display = 'none';

    }
    
}

function comprobar() {

    if (fondo(color) == 'Red') {

        document.getElementById('res').innerText = "Si";

    } else {

        document.getElementById('res').innerText = "No";

    }
    
}