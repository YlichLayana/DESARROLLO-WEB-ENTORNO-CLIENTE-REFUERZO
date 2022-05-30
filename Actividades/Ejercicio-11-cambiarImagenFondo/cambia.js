var imgFondo;

document.addEventListener("DOMContentLoaded", inicializar, false);

function inicializar() {
  imgFondo = document.getElementById("imagen");
  document.addEventListener("keydown", combinarTeclas, false);
}

function combinarTeclas(event) {

  var keyValue = event.key;
  var codeValue = event.code;

  console.log("keyValue: " + keyValue);
  console.log("codeValue: " + codeValue);

  if (event.altKey && keyValue =="F12") {
    console.log('¡Genial diste a la combinacion correcta!');
  
    console.log(imgFondo);

    imgFondo.style.backgroundImage="url(taza-javascript.png)"
  }
}