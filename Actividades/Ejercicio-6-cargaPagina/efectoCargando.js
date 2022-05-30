document.addEventListener("DOMContentLoaded", cargando, false);

// OTRO: declaracion de las variables a usar
var puntosCarga = "......."; 
var pausa = 1000;
var nodoTexto;
var h2;

//!funcion que se ejecutara al cargase la pagina 
function cargando() {

  nodoTexto = document.getElementById("efecto");

  // creación del elemeto h2 y asignacion de contenido en el 
  h2 = document.createElement("h2");
  h2.innerHTML = "Conectando con la página segura ";
  h2.style.color='#550F0F';

  //* le aplico los estilos necesarios al nodo padre
  nodoTexto.style.textAlign = "center";
  nodoTexto.style.paddingTop = "200px";

  //!aqui le agrego el nodo hijo el cual es el h2
  nodoTexto.appendChild(h2);


  var i = 0; //* este sera mi iterador o contador de indice
  //otro: en este array separo los caracteres de la cadena de texto usando el metodo split 
  var arrayPuntosCarga = puntosCarga.split("");


  //! Aqui uso el metodo setInterval para que esta se repita con un tiempo de retraso entre cada ejecucion. Este llama a una función a intervalos específicos en milisegundos.
  var t = setInterval(function () {
    if (i >= arrayPuntosCarga.length - 1) {
      clearInterval(t);
      window.open("https://www.iestetuan.es/");
    }

    h2.innerHTML += arrayPuntosCarga[i];
    i++;
  }, pausa);
}
