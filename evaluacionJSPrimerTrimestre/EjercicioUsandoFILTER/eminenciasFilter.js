//OTRO: array de objetos llamado eminencias al cual contendra los objetos que agregaremos 
var eminencias = [];

//!constructor de objeto Persona
function Persona(nombre, apellidos, fechaNaci, fechaMuer, aportacion, imagen) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNaci = fechaNaci;
  this.fechaMuer = fechaMuer;
  this.dni = nombre.slice(0, 1) + Math.floor(Math.random() * (1000 - 0)) + apellidos.slice(apellidos.length - 3, apellidos.length);
  this.aportacion = aportacion;
  this.imagen = imagen;
}

//! funcion con la que agrego objeto persona 
function agregar() {
  //Otro: datos a capturar de esta manera local al llamar la funcion
  var nombre = document.getElementsByTagName("input")[0].value;
  var apellidos = document.getElementsByTagName("input")[1].value;
  var dni = document.getElementsByTagName("input")[2].value;
  var fechaNaci = document.getElementsByTagName("input")[3].value;
  var fechaMuer = document.getElementsByTagName("input")[4].value;
  var aportacion = document.getElementsByTagName("textarea")[0].value;
  var datosImagen = prompt("Introduce la inicial y el apellido");

  //Todo: instancia de objeto persona
  var nuevaPersona = new Persona(
    nombre,
    apellidos,
    fechaNaci,
    fechaMuer,
    aportacion,
    datosImagen
  );

  //*agrego objero persona al final del array eminencias
  eminencias.push(nuevaPersona);

  alert(eminencias[0].dni); // muestro el dni en alert
  console.log(eminencias); // con este console vemos lo que se a agregado en el array
  limpiar(); // invocacion de la funcion que limpia las cajas de texto
}

//!funcion que se encarga de limpiar las cajas texto
function limpiar() {
  //recorro todos los inputs y los limpio
  for (let i = 0; i < 5; i++) {
    document.getElementsByTagName("input")[i].value = "";
  }
  //limpio el area de texto;
  document.getElementsByTagName("textarea")[0].value = "";
}

//!Funcion para buscar el objeto persona en el array de eminecias
function buscar() {
  //*variable de busqueda por nombre enviad en el formulario
  var nombreBusca = document.getElementsByTagName("input")[0].value;
  var tieneDato = false;

  //OTRO: metodo nativo de js filter. Devolverá un arreglo con el objeto a buscar o uno vacio si no lo encuentra.

  if (nombreBusca != "") {
    tieneDato = true;
    var Buscado = eminencias.filter(function (element) {
      return element.nombre == nombreBusca;
    });
  }

  if (!tieneDato) {
    alert("Debe ingresar dato para buscar ");
  }
  console.log(Buscado);

  //*aqui mostramos los datos obtenido con el metodo filter
  if (Buscado.length > 0) {
    for (const iterator of Buscado) {
      document.getElementsByTagName("input")[0].value = iterator.nombre;
      document.getElementsByTagName("input")[1].value = iterator.apellidos;
      document.getElementsByTagName("input")[2].value = iterator.dni;
      document.getElementsByTagName("input")[3].value = iterator.fechaNaci;
      document.getElementsByTagName("input")[4].value = iterator.fechaMuer;
      document.getElementsByTagName("textarea")[0].value = iterator.aportacion;
      document.getElementsByTagName("img")[0].src = iterator.imagen + ".jpg";
    }
  } else {
    alert("No exite el ususario");
  }
}
