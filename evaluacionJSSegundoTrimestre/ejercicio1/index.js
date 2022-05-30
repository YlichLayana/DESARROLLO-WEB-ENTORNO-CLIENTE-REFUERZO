var nombre;
var apellido;
var condicion;

document.addEventListener("readystatechange", inicializar, false);

//! funcion para preparar y alistar los elementos del DOM con los que trabajare 
function inicializar() {
  nombre = document.getElementsByTagName("input")[0];
  apellido = document.getElementsByTagName("input")[1];
  condicion = document.getElementsByTagName("input")[2];

  nombre.focus(); // al cargar la pagina se da el foco al primer input

  if (document.readyState == "complete") {
    //Se llama a los eventos keypress en las cajas
    nombre.addEventListener("keypress", pulsarNombre, false);
    apellido.addEventListener("keypress", pulsarApellido, false);
    condicion.addEventListener("keypress", pulsarCondicion, false);
  }
}

//!metodo para realizar captura de elemento input nombre y ejecutar evento click
function pulsarNombre(event) {
  //variable para capturar el valor del elemento input el cuael es el nombre
  var captuNom = nombre.value;

  //Todo: key contiene el valor de la tecla pulsada, al dar a la tecla esta pasa a realizar el focus al siguien elemento input
  if (captuNom != "" && event.type == "keypress") {
    if (event.key == "Enter") {
      console.log(event.key);
      console.log("nombre " + captuNom);
      apellido.focus();
    }
  } else if (event.key == "Enter") {
    alert("Debe Ingresar Datos en Nombre");
  }
}

//!metodo para realizar captura de elemento input apellido y ejecutar evento click
function pulsarApellido(event) {
  //*variable para capturar el valor del elemento input en este caso es el apellido
  var captuApellido = apellido.value;

  //Todo: key contiene el valor de la tecla pulsada, al dar a la tecla esta pasa a realizar el focus al siguien elemento input
  if (captuApellido != "" && event.type == "keypress") {
    if (event.key == "Enter") {
      console.log(event.key);
      console.log("apellido " + captuApellido);
      condicion.focus();
    }
  } else if (event.key == "Enter") {
    alert("Debe Ingresar Datos en Apellido");
  }
}

//!metodo para realizar captura de elemento input si o no  y ejecutar evento click
function pulsarCondicion(event) {
  var captuNom = nombre.value;
  var captuApellido = apellido.value;
  var captuResp = condicion.value;
  //Todo: key contiene el valor de la tecla pulsada. Si este valor es enter se ejecuta el alert
  if (captuResp != "" && event.type == "keypress") {
    if (event.key == "Enter") {
      console.log(event.key);
      console.log("Respuesta " + captuResp);
      //Se invoca a transmisión

      if (captuResp.toLowerCase() == "si") {
        sessionStorage.setItem("nombre", captuNom);
        sessionStorage.setItem("apellido", captuApellido);

        window.open("director-just-html.html");
      } else {
        limpiar();
        window.close();
      }
    }
  } else if (event.key == "Enter") {
    alert("Debe Ingresar SI o NO");
  }
}

//!metodo para limpiar los elementos imput
function limpiar() {
  nombre.value = "";
  apellido.value = "";
  condicion.value = "";
  sessionStorage.clear();
}
