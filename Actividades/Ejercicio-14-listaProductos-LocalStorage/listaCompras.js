//Todo: variables globales que usare en todo el codigo
var item;
var cantidad;
var tablaDatos;

//Otro: Aqui uso el método addEvenListener que es el encargado de la escucha del evento, el cual será el "DOMContentLoaded" que nos indica que el documento esta totalmente cargado
document.addEventListener("DOMContentLoaded", inicializar, false);

//! Esta será la función que prepara he inicializa todos los elemento del DOM que usaré posteriormente, y es pasada al Evento de carga del DOM
function inicializar() {
  item = document.getElementsByName("name")[0];
  cantidad = document.getElementsByName("data")[0];
  tablaDatos = document.getElementById("list");
  item.focus();

  console.log("Tamaño del LocalStorage " + localStorage.length);
  listarProductos();

  //* Aqui tambien aplíco el método encargado de la escucha del evento "Click"
  document.addEventListener("click", manejadorClickBotones, false);
}

//! Esta funcion es la que manejará quien acciona el evento
function manejadorClickBotones(event) {
  //* variables locales a la cual le asigno los datos recibidos
  let itemCaptura = item.value;
  let cantidadCaptura = cantidad.value;

  //Otro: Esta estructura de control Switch es con la que realizare operaciones segun el valor que contenga cada CASE.
  switch (event.target.value) {
    case "SALVAR":
      //Todo: Para este caso valido que haya datos en recibidos, por verdadero
      if (itemCaptura !== "" && cantidadCaptura !== "") {
        //? uso el objeto localStorage y con en metodo setItem se asigo el itemCaptura y cantidadCaptura, como par clave valor
        localStorage.setItem(itemCaptura, cantidadCaptura);
        limpiar(); //* Por ultimo hago llamada a la función limpiar
      } else {
        console.log("Error: Debe ingresar los datos de Item y Cantidad para almacenar");
      }
      break;

    case "ELIMINAR":
      //Todo: Para el caso de eliminar, validamos que hayamos recibido el dato de Item, por verdadero
      if (itemCaptura !== "") {
        //? validamos que dicho item del local estorage este definido y tambien exista su valor, por verdadero
        if (localStorage.getItem(itemCaptura) !== undefined && localStorage.getItem(itemCaptura)) {
          //* en el objeto localStorage use el metodo removeItem para eliminar el dato pasado
          localStorage.removeItem(itemCaptura);
          limpiar(); //* Hago llamada a la función limpiar
        } else {
          console.log("No existe en LocalStorage!!");
          limpiar();
        }
      } else {
        console.log("Error: Debe ingresar el dato de Item para eliminarlo");
      }
      break;

    case "MODIFICAR":
      //Todo: Para este caso valido que si haya recibido el dato del Item y luego validamos que
      if (itemCaptura !== "") {
        //? Si el local estorage este definido y tambien exista su valor, por verdadero
        if (localStorage.getItem(itemCaptura) !== undefined && localStorage.getItem(itemCaptura)) {
          //* Le asigno los valores obtenidos a los elemento de Item y Cantidad
          item.value = itemCaptura;
          cantidad.value = localStorage.getItem(itemCaptura);
          //! Ojo por ultimo se remueve el dato de pares clave valor para que este no se duplique al dar al boton guarda
          //localStorage.removeItem(itemCaptura);
        } else {
          console.log("No existe en LocalStorage!!");
          limpiar();
        }
      } else {
        console.log("Error: Debe ingresar el dato de Item para modificar");
      }
      break;

    case "Clear":
      localStorage.clear();
      limpiar();
      break;
  }
}

//! esta funcion se encargara de listar y crear las tablas con los valores que contenga el localStorage
function listarProductos() {
  //Otro: variables de creaccion de nodos 
  let filaPrincipal = document.createElement("tr");
  let celdaPrincIzq = document.createElement("th");
  let celdaPrincDrc = document.createElement("th");

  //Otro: asignacion de texto de cabecera 
  celdaPrincIzq.textContent = "Name";
  celdaPrincDrc.textContent = "Value";

  //Otro: agrego los nodos de cabecera en la primera fila de la tabla
  filaPrincipal.appendChild(celdaPrincIzq);
  filaPrincipal.appendChild(celdaPrincDrc);
  tablaDatos.appendChild(filaPrincipal);

  //Todo: Apartir de aqui trabajare sobre los datos del localStorage
  let keysLocal = Object.keys(localStorage);
  for (let key of keysLocal) {
    console.log(key + " - " + localStorage.getItem(key));
    let fila = document.createElement("tr");
    let celda;
    let textoCelda;
    for (var j = 0; j < 2; j++) {
      if (j < 1) {
        celda = document.createElement("td");
        textoCelda = document.createTextNode(key);
      } else {
        celda = document.createElement("td");
        textoCelda = document.createTextNode(localStorage.getItem(key));
      }
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
    }
    tablaDatos.appendChild(fila);
  }

  //? aqui valido si el tamaño del localStorage es 0 o no tiene elementos
  if (localStorage.length == 0) {
    listaVacia(); //* Hago llamada de la funcion que genera una tabla por defecto
  }
}

//! Esta funcion me crea una tabla por defecto con valores empty o vacio
function listaVacia() {
  let fila = document.createElement("tr");
  let celda;
  let textoCelda;
  for (var j = 0; j < 2; j++) {
    celda = document.createElement("td");
    textoCelda = document.createTextNode("empty");

    celda.appendChild(textoCelda);
    fila.appendChild(celda);
  }
  tablaDatos.appendChild(fila);
}

//! Funcion que realiza limpieza de los elementos del DOM
function limpiar() {
  item.value = "";
  cantidad.value = "";
  document.location.reload();
  item.focus();
}
