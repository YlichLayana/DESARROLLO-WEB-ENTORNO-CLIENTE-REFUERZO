var mensaje;
var opcion;
var clave;
var valor;
var textAreaSession;
var textAreaLocal;

//?esta variable la use para poder obtener todos los elemento button al inicializar el DOM
//?var botones;

var tipoAlmacenamiento = "";

document.addEventListener("DOMContentLoaded", inicializar, false);

function inicializar() {
  mensaje = document.getElementById("mensajes");
  opcion = document.getElementById("tipo");
  clave = document.getElementById("clave");
  valor = document.getElementById("valor");
  textAreaSession = document.getElementById("almacenamientoSesion");
  textAreaLocal = document.getElementById("almacenamientoLocal");

  //? Aqui obtengo la coleccion de elementos button y los almaceno en la variable creada, con esto puedo ver sus atributos y todo lo que contenga cada uno de estos elementos
  //?botones = document.getElementsByTagName("button");
  //?console.log(botones);

  opcion.addEventListener("change", manejaSeleccionador, false);
  document.addEventListener("click", manejarClick, false);
}

//!funcion para manejar el evento del area de tipo de almacenamiento
function manejaSeleccionador(evento) {
  switch (evento.target.value) {
    case "local":
      tipoAlmacenamiento = opcion.value;
      console.log("escogi el: " + tipoAlmacenamiento);
      clave.focus();
      break;

    case "sesion":
      tipoAlmacenamiento = opcion.value;
      console.log("escogi el: " + tipoAlmacenamiento);
      clave.focus();
      break;

    default:
      tipoAlmacenamiento = "";
      break;
  }
}

//!funcion para manejar evento para los botones
function manejarClick(event) {
  let claveCaptura = clave.value;
  let valorCaptura = valor.value;

  switch (event.target.innerText) {
    case "GUARDAR":
      //console.log("Si guardar");
      let indxRetornoGuarda = almacena();
      mostrarMensaje(indxRetornoGuarda, tipoAlmacenamiento, claveCaptura, valorCaptura);
      datosMostrar();
      break;

    case "ELIMINAR":
      //console.log("Si eliminar");
      let indxRetornoElimina = elimina();
      mostrarMensaje(indxRetornoElimina, tipoAlmacenamiento, claveCaptura, valorCaptura);
      datosMostrar();
      break;

    case "REFRESCAR":
      //console.log("Si refrescar");
      //console.log("Tengo " + (sessionStorage.length - 1) + " elementos dentro de mi Local Storage");
      textAreaSession.innerHTML= "Session tiene " +(sessionStorage.length - 1) +" elementos"
      textAreaLocal.innerHTML= "LocalStorage tiene " +(localStorage.length) +" elementos"
      
      break;

    case "COMPROBAR COMPATIBILIDAD DEL NAVEGADOR":
      //console.log("Si compatibilidad");
      let indexMsg;
      if (typeof Storage !== "undefined") {
        // Código cuando Storage es compatible
        indexMsg = 7;
        mostrarMensaje(indexMsg);
      } else {
        // Código cuando Storage NO es compatible
        indexMsg = 8;
      }
      break;
  }
}

//!funcion para capturar y almacenar datos en el storage
function almacena() {
  let claveCaptura = clave.value;
  let valorCaptura = valor.value;
  let retornaIndx;

  if (tipoAlmacenamiento.length > 0) {
    if (tipoAlmacenamiento === "local") {

      if (claveCaptura != "" && valorCaptura != "") {
        console.log("Valor guardado correcto en Local");
        localStorage.setItem(claveCaptura, valorCaptura);
        retornaIndx = 0;
        limpiar();
      } else {
        //console.log("Error: Debe llenar todos los campos");
        retornaIndx = 1;
        limpiar();
      }
    }

    if (tipoAlmacenamiento === "sesion") {

      if (claveCaptura != "" && valorCaptura != "") {
        console.log("Valor guardado correcto en Session");
        sessionStorage.setItem(claveCaptura, valorCaptura);
        retornaIndx = 0;
        limpiar();
      } else {
        //console.log("Error: Debe llenar todos los campos");
        retornaIndx = 1;
        limpiar();
      }
    }
  } else {
    console.log("Error: Debe elegir un tipo de almacenamiento");
    retornaIndx = 2;
    limpiar();
  }

  console.log(retornaIndx);
  return retornaIndx;
}

//!funcion para eliminar
function elimina() {
  let claveCaptura = clave.value;
  let retornaIndx;

  if (tipoAlmacenamiento.length > 0) {
    if (tipoAlmacenamiento === "local") {
      console.log("Elimina en tipo localStorage");
      if (claveCaptura != "") {
        if (localStorage.getItem(claveCaptura) !== undefined && localStorage.getItem(claveCaptura)) {
          //Elimina
          localStorage.removeItem(claveCaptura);
          console.log("Valor eliminado correctamente");
          retornaIndx = 4;
          limpiar();
        } else {
          console.log("No existe en SessionStorage!!");
          retornaIndx = 5;
          limpiar();
        }
      } else {
        console.log("error debe dar dato para borrar");
        retornaIndx = 5;
        limpiar();
      }
    }

    if (tipoAlmacenamiento === "sesion") {
      console.log("Elimina en tipo sessionStorage");

      if (claveCaptura != "") {
        if (sessionStorage.getItem(claveCaptura) !== undefined && sessionStorage.getItem(claveCaptura)) {
          //Elimina
          sessionStorage.removeItem(claveCaptura);
          console.log("Valor eliminado correctamente");
          retornaIndx = 4;

          limpiar();
        } else {
          console.log("No existe en SessionStorage!!");
          retornaIndx = 5;
          limpiar();
        }
      } else {
        console.log("Error: Debe ingresar un dato en la casilla de clave");
        retornaIndx = 6;
        limpiar();
      }
    }
  } else {
    console.log("Error: Debe elegir un tipo de almacenamiento");
    retornaIndx = 2;
    limpiar();
  }

  console.log(retornaIndx);
  return retornaIndx;
}

//!funcion para recorrer el Local o las Session
function datosMostrar() {

  switch (tipoAlmacenamiento) {
    case "sesion":
      let todoContenidoSession ="";
      let keysSession = Object.keys(sessionStorage);
      for (let key of keysSession) {
        if (key.startsWith("IsThisFirstTime")) {
          continue; // se salta claves como "setItem", "getItem" etc
        }
        //console.log(key + " = " + localStorage.getItem(key));
        todoContenidoSession += key + " = " + sessionStorage.getItem(key) + '\n';
      }
      textAreaSession.innerHTML = todoContenidoSession;
      break;

    case "local":
      let todoContenidoLocal = "";
      let keysLocal = Object.keys(localStorage);
      for (let key of keysLocal) {
        if (key.startsWith("IsThisFirstTime")) {
          continue; // se salta claves como "setItem", "getItem" etc
        }
        //console.log(key + " = " + localStorage.getItem(key));
        todoContenidoLocal += key + " = " + localStorage.getItem(key) + '\n';
      }
      textAreaLocal.innerHTML = todoContenidoLocal;
      break;
  }
}

//!funcion para mostrar y eliminar mensaje
function mostrarMensaje(valorIndx, tipoAlmacenamiento, clave, valor) {

  let claveValorCaptura = clave+ " = " + valor;
  

  const msg = [
    "Correcto: Valor Guardado ",
    "Error: Debe llenar todos los campos",
    "Error: Debe elegir un tipo de almacenamiento",
    "Correcto: su navegador soporta Storage",
    "Correcto: Valor eliminado ",
    "Error: El valor a eliminar ",
    "Error: Debe ingresar un dato en la casilla de clave",
    "Correcto: El navegador compatible con el objeto Storage",
  ];


  switch (valorIndx) {
    case 0:
      mensaje.innerText = msg[valorIndx] + " >>( " + claveValorCaptura + " )<<  en " + tipoAlmacenamiento;
      break;

    case 4:
        mensaje.innerText = msg[valorIndx] + " >>( " + clave + " )<< en " + tipoAlmacenamiento;
      break;

    case 5:
      mensaje.innerText = msg[valorIndx] + " >>( " + clave + " )<< No existe en " + tipoAlmacenamiento;
      break;

    default:
      mensaje.innerText = msg[valorIndx];
      break;
  }

  setTimeout(quitarMensaje, 3000);

  function quitarMensaje() {
    mensaje.innerText = "";
  }
}

//!funcion de limpieza de selector de area y de cajas de clave y valor
function limpiar() {
  clave.value = "";
  valor.value = "";
  clave.focus();
}


/* otra manera de recorrer el objeto storage

  let msgDatos ="";
      for(var i=0; i < sessionStorage.length; i++) {
        key = sessionStorage.key(i);
        if (key.startsWith("IsThisFirstTime")) {
          continue; // se salta claves como "setItem", "getItem" etc
        }
        console.log(key);
        msgDatos += key + ' = ' + sessionStorage[key]+ '</br>';
      }

      document.getElementById("probar").innerHTML=msgDatos;

 */

