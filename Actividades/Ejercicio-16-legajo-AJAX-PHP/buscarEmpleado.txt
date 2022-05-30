//Todo: creacion de variable de tipo global a usar
var datoLegajo;
var boton;
var respuesta;
var conexion;


document.addEventListener("DOMContentLoaded", inicializar, false);

//! Funcion con la que inicializare los elemetnos a usar del DOM
function inicializar() {
  datoLegajo = document.getElementById("entrada-dato");
  
  boton = document.getElementById("boton").addEventListener("click", enviaDatosPeticionAJAX, false);

  respuesta=document.getElementById("respuesta");
}

//!funcion que realiza la petición al enviar datos de busqueda
function enviaDatosPeticionAJAX() {
  console.log("estoy dentro de la funcion");

  // Definimos los parámetros que vamos a enviar por POST
  var datosEnviar = "legajo=" + datoLegajo.value 

  // seteo la URL que vamos a solicitar via Ajax
  urlArchivo = "legajos.php";

  // Creamos un nuevo objeto encargado de la comunicación
  conexion = new XMLHttpRequest();

  // Definimos como queremos realizar la comunicación asincrona en true
  conexion.open("POST", urlArchivo, true);

  // Ponemos las cabeceras de la solicitud como si fuera un formulario, necesario si se utiliza POST
  conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  //pregunto si los casilleros de datos a enviar no son vacios
  if (datoLegajo.value != "") {
    console.log("datos a enviar: " + datosEnviar);

    //Enviamos la solicitud junto con los parámetros
    // es decir se pide que se ejecute el ajax y tambien le enviamos datos
    conexion.send(datosEnviar);

    // con la propiedad del objeto XMLHttpRequest
    // El evento readystatechange se activa cuatro veces (1-4), una vez por cada cambio en el estado listo..
    conexion.addEventListener("readystatechange", enviarRespuesta, false);
  }

  limpiar();
}

//! funcion que realiza el envio de la respuesta obtenida de la petición 
function enviarRespuesta(evento) {
  //console.log("tipo de estado: " + evento.target.readyState);

  //Cuando readyState es 4 y el estado es 200, la respuesta está lista:
  if (evento.target.readyState == 4 && evento.target.status == 200) {
      //console.log("status del documento: " + evento.target.status);
      var RespuestaPHP = conexion.responseText;
      console.log(RespuestaPHP);
      respuesta.innerHTML = RespuestaPHP;
  }
}

function limpiar() {
  datoLegajo.value = "";
}
