function success() {

  let etiqueta = document.getElementById("alertaBien");

  if (etiqueta.classList.contains("d-none")) {

    etiqueta.classList.remove("d-none");

  }

}

function mal() {

  let etiqueta = document.getElementById("alertaMal");

  if (etiqueta.classList.contains("d-none")) {

    etiqueta.classList.remove("d-none");

  }

}

function cerrarMal() {

  let etiqueta = document.getElementById("alertaMal");

  etiqueta.classList.add("d-none");

}

function cerrarBien() {

  let etiqueta = document.getElementById("alertaBien");

  etiqueta.classList.add("d-none");

}