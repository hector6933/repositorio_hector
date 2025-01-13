function sumar() {

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let suma = num1 + num2;
    return suma;

}

function mostrar() {

    document.getElementById('res').innerText = sumar();

}