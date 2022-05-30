document.addEventListener("DOMContentLoaded", contar, false);

var numeroSegundos = 5;
//Se realiza la cuenta atrás de 5 segundos

function contar() {
  document.getElementsByName("crono")[0].value = numeroSegundos;
  //Si la cuenta atrás se completa se muestra una imágen y se limpia la caja
  if (numeroSegundos < 0) {
    window.open("matricula-Hogwarts-just-html.html");
    limpiar();
  } else {
    numeroSegundos--;
    setTimeout("contar()", 1000);
  }
}

function limpiar() {
  //Limpia la caja de texto del cronómetro cuando llega a 0
  document.getElementsByName("crono")[0].value = "";
}
