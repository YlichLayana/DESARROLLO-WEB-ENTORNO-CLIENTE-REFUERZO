//Todo: Variables globales de Elemento del DOM html
var marca;
var precio;
var botonAgrega;
var botonEnviar;

//* array de vehiculos
var vehiculos = [];
//* variable de Objeto JSON
var vehiculosJSON;

document.addEventListener("readystatechange", inicializar, false);

//!función inicializar es donde registramos los eventos
function inicializar() {
  
  marca = document.getElementsByTagName("input")[0];
  precio = document.getElementsByTagName("input")[1];
  botonAgrega = document.getElementById("storeButton");
  botonEnviar = document.getElementById("carForm");


  if (document.readyState == "complete") {
    //Se llama a los eventos keypress y click  de cada uno de los elementos del documento
    marca.addEventListener("keypress", enterMarca, false);
    precio.addEventListener("keypress", procesaEvento, false);
    botonAgrega.addEventListener("click", procesaEvento, false);
    botonEnviar.addEventListener("click", btnEnviar, false);

    //asigno el foco al elemento input llamado marca al cargarse la pagina
    marca.focus();
  }
}

//!funcion que desabilitaria el elemento marca
function desabilitaMarca() {
  marca = document.getElementsByTagName("input")[0].disabled = true;
}

//!funcion que habilita el elemento marca
function habilitaMarca() {
  marca = document.getElementsByTagName("input")[0].disabled = false;
}

//! funcion para limpiar los elemento de tipo input
function limpiar() {
  marca = document.getElementsByTagName("input")[0].value = "";
  precio = document.getElementsByTagName("input")[1].value = "";
  sessionStorage.clear();
}

//!funcion para agregar objetos en el array con formato en json
function agregar() {
  
  //Todo: En el array vehiculos agregamos objetos de formato JSON usando el metodo push, para ello debemos saber que el formato de un JSON es el siguiente { clave: valor , clave: valor}
  vehiculos.push({
    marca: sessionStorage.getItem("marca"),
    precio: sessionStorage.getItem("precio"),
  });


//Otro: Un uso común de JSON es intercambiar datos hacia/desde un servidor web. Al enviar datos a un servidor web, los datos deben ser una cadena. Convierta un objeto de JavaScript en una cadena con JSON.stringify(). La función de JavaScript JSON.stringify() sirve para convertirlo en una cadena. siguiendo la notación JSON.*/

  vehiculosJSON = JSON.stringify(vehiculos);
  console.log(vehiculosJSON);

  limpiar();
  habilitaMarca();
  inicializar();
}

//!funcion que maneja el evento que se dispara al precionar tecla enter
function enterMarca(event) {
  var captuMarca = marca.value;

  //key contiene el valor de la tecla pulsada
  //al dar a la tecla esta pasa a realizar el focus al siguien elemento input
  if (captuMarca != "" && event.type == "keypress") {
    if (event.key == "Enter") {
      console.log('pulso la tecla: '+event.key);

      /*sessionStorage propiedad con la que se accede al objeto Storage
      para poder almacenar los datos de manera local en este caso almacenamos
      la marca
      */
      sessionStorage.setItem("marca", captuMarca);
      console.log(sessionStorage.getItem("marca"));

      //se le asigna el foco al elemento precio del formulario
      precio.focus();
      // invoco la funcion que desabilita el elemento marca
      desabilitaMarca();
    }
  } else if (event.key == "Enter") {
    alert("no puede estar vacia la casilla de marca");
  }
}

//!funcion que manejar los evento click asignado al boton agregar y tambien manejara el evento al evento keypress al pulsar la tecla enter
function procesaEvento(elEvento) {
  var captuPrecio = precio.value;

  //si la casilla tiene dato y el tipo de evento es click
  if (captuPrecio != "" && elEvento.type == "click") {
    console.log("Boton agregar clicado");

    /*sessionStorage propiedad con la que se accede al objeto Storage
      para poder almacenar los datos de manera local en este caso almacenamos
      el precio
    */
    sessionStorage.setItem("precio", captuPrecio);
    console.log(sessionStorage.getItem("precio"));

    //llamo a la funcion agregar
    agregar();
  }
  // en caso que no haya datos en el elemento input este me muestra un mensaje y vuelve a dar el foco en el elemento 
  else if (elEvento.type == "click") {
    alert("no puede deja vacia la casilla");
    //vuelvo el foco a el elemento precio
    precio.focus();
  }

  //si la casilla tiene dato y el tipo de evento es keypress
  if (captuPrecio != "" && elEvento.type == "keypress") {
    // pregunto si la tecla pulsada es enter
    if (elEvento.key == "Enter") {
      console.log('pulso la tecla: '+elEvento.key);
      
      /*creamos la sessionStorage, propiedad con la que se accede al objeto Storage
      para poder almacenar los datos de manera local en este caso almacenamos
      el precio
      */
      sessionStorage.setItem("precio", captuPrecio);
      console.log(sessionStorage.getItem("precio"));
      //llamo a la funcion agregar
      agregar();
    }
  } 
  // en caso que no haya datos en el elemento input este me muestra un mensaje y vuelve a dar el foco en el elemento 
  else if (elEvento.key == "Enter") {
    alert("La casilla precio no puede quedar vacia");
    //vuelvo el foco a el elemento precio
    precio.focus();
  }
}

//!funcion que controla el evento boton enviar
function btnEnviar(event) {
  if (event.type == "click") {
    localStorage.setItem("datosJSON", vehiculosJSON);

    console.log(localStorage.getItem("datosJSON"));

    window.close(); //cierra la ventana actual
    window.open("coches-1-just-html.html"); // abre la ventana siguiente
  } 
}


