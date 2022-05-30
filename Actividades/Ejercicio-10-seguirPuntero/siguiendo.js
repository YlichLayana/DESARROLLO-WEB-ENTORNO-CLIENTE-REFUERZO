var divElement;
var divSeguidor;

document.addEventListener("DOMContentLoaded", inicializar, false);

function inicializar() {
  //Todo: elementos pre asignados a las variables 
  divElement = document.getElementById("contenido");
  divSeguidor = document.getElementById("siguelo");

  //Todo: le asigno propiedades de estilo como color y position, tambien la propiedad hidden para ocultar el seguidor del elemento 
  divSeguidor.style.backgroundColor = "Yellow";
  divSeguidor.style.borderRadius = "80%";
  divSeguidor.style.position = "absolute"
  divSeguidor.hidden=true; //* en true el elemento estara oculto

  //otro: aqui le asigno el metodo de escucha del evento que se accionará cuando se mueva el raton por dicho elemento
  divElement.addEventListener("mousemove", moverRaton, false);
  divElement.addEventListener("mouseout", salir, false);
  
}


function moverRaton(evento) {
  //otro: aqui obtengo los datos de las coordenadas del mouse 
  var x = evento.clientX;
  var y = evento.clientY;
  
  //*aqui hago visible al elemento seguidor 
  divSeguidor.hidden=false

  
  //Todo: aqui le asigno las coordenadas al elemento seguidor 
  divSeguidor.style.left = -150 + x  + "px";
  divSeguidor.style.top = -30 + y  + "px";

}

function salir() {
  divSeguidor.hidden=true;
}