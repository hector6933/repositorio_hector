let numero = 2;
function cli() {
    
    document.getElementById('consola').innerText = numero
    numero = numero * 2;

}

function reset() {

    numero = 2;
    document.getElementById('consola').innerText = "";
}

function limp() {

    document.getElementById('consola').innerText = "";

}
let i = 0;
let j = 0;
function cambiar() {
    let justy = ["space-around", "space-between", "space-evenly","center"];
    let colores = ["red", "green", "blue", "yellow"];
    if ( j < colores.length || i < justy.length) {
    document.getElementById('stan').style.justifyContent = justy[i];
    document.getElementById('caja1').style.backgroundColor = colores[j];
    document.getElementById('caja2').style.backgroundColor = colores[j];
    document.getElementById('caja3').style.backgroundColor = colores[j];
    document.getElementById('caja4').style.backgroundColor = colores[j];
    i++;
    j++;
    }

    if ( i == justy.length || j ==  colores.length) {

        i = 0;
        j = 0;

    }
}