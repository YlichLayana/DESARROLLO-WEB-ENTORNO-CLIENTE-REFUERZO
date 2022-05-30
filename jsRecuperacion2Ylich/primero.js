//TODO: El DOMContentLoadedevento se activa cuando el documento HTML inicial se ha cargado y analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los submarcos terminen de cargarse.

var cajaReferencia;
var cajaCliente;
var contadorError = 0; // contador de errores

document.addEventListener("DOMContentLoaded", inicializar, false);

//!funcion para inicializar y dejar elementos listo del DOM
function inicializar() {
  cajaReferencia = document.getElementsByName("referencia")[0].value =
    randomCaracteres();
  cajaCliente = document.getElementsByName("cliente")[0].focus(); // caja de cliente vacia con foco en la caja
  document
    .getElementsByTagName("input")[2]
    .addEventListener("click", comprobar, false); // boton
}

//!funcion que genera caracteres aleatorios 
function randomCaracteres() {
  var result = [];
  var numerodeCaracteres = 6; //* Este valor  representa el numero de caracteres a generar aleatoriamente y se puede cambiar segun querramos
  for (var i = 0; i < numerodeCaracteres; i++) {
    // Genera un número de 0 a 25
    var ranNum = Math.ceil(Math.random() * 25);
    // El ASCII de la letra mayúscula'A 'es 65, y el código ASCII de A ~ Z es 65 + 0 ~ 25;
    // Luego llame a String.fromCharCode () para pasar el valor ASCII, devuelva el carácter correspondiente y guarda en la matriz
    result.push(String.fromCharCode(65 + ranNum));
  }
  return result.join(""); // metodo join se usa para unir los elementos del array result
}

//! funcion llamada al realizar click en el boton
function comprobar() {
  cajaCliente = document.getElementsByTagName("input")[1].value;
  if (cajaReferencia == cajaCliente) {
    console.log("son iguales");
    alert("Correcto: Los caracteres son coincidentes ");
    window.close(); //cierra la ventana actual
    window.open("Ejercicio-2/coches-0-just-html.html"); // abre la ventana siguiente
  } else {
    //lo limpia
    contadorError++;
    if (contadorError <= 2) {
      alert("No esta autorizado a entrar en nuestra aplicación");
      cajaCliente = document.getElementsByTagName("input")[1].value = "";
      cajaCliente = document.getElementsByTagName("input")[1].focus();
    } else {
      window.close();
    }
  }
}
