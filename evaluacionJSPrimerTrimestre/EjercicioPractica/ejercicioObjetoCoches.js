var coches = [];

//! funcion constructora Coche
function Coche(marca, modelo, matricula, kilometros, propietario, imagen) {
  this.marca = marca;
  this.modelo = modelo;
  this.matricula = marca.slice(0, 1) + Math.floor(Math.random() * (1000 - 0)) + propietario.slice(propietario.length - 3, propietario.length);
  this.kilometros = kilometros;
  this.propietario = propietario;
  this.imagen = imagen;
}

//! funcion para agregar objetos 
function agregar() {
  //Todo: capturar de esta manera local al llamar la funcion
  var marca = document.getElementsByTagName("input")[0].value;
  var modelo = document.getElementsByTagName("input")[1].value;
  var matricula = document.getElementsByTagName("input")[2].value;
  var kilometros = document.getElementsByTagName("input")[3].value;
  if (kilometros == "") {
    kilometros = 0;
  }
  var propietario = document.getElementsByTagName("input")[4].value;

  var datosImagen = prompt("Introduce la inicial marca y el modelo del coche");

  //Otro: instancia de objeto persona
  var nuevoCoche = new Coche(
    marca,
    modelo,
    matricula,
    kilometros,
    propietario,
    datosImagen
  );

  //*agrego objeto coche al final del array eminencias usando push
  coches.push(nuevoCoche);

  alert(coches[0].matricula); // muestro el dni en alert
  console.log(coches); // con este console vemos lo que se a agregado en el array
  limpiar(); // invocacion de la funcion que limpia las cajas de texto
}

//! funcion para buscar un objeto coche segun el dato de la marca ingresada
function buscar() {
  //*variable de busqueda por marca enviada en el formulario
  var marcaBusca = document.getElementsByTagName("input")[0].value;
  var tieneDato = false;

  //Otro: Usando metodo nativo de JS es el find. Pero en este caso devolver el primer elemento encontrado */
  if (marcaBusca != "") {
    tieneDato = true;
    var Buscado = coches.find(function (element) {
      return element.marca == marcaBusca;
    });
  }

  if (!tieneDato) {
    alert("Debe ingresar dato para buscar ");
  }
  console.log(Buscado);

  //Todo: para ver valores de objeto buscado con metodo find
  for (const key in Buscado) {
    document.getElementsByTagName("input")[0].value = Buscado.marca;
    document.getElementsByTagName("input")[1].value = Buscado.modelo;
    document.getElementsByTagName("input")[2].value = Buscado.matricula;
    document.getElementsByTagName("input")[3].value = Buscado.kilometros;
    document.getElementsByTagName("input")[4].value = Buscado.propietario;

    document.getElementsByTagName("img")[0].src = Buscado.imagen + ".jpg";
  }
}

//!funcion para eliminar objeto coche
function removerCoche() {
  var datoEliminar = document.getElementsByTagName("input")[0].value;

  if (datoEliminar !== "") {
    var Buscado = coches.find(function (element) {
      return element.marca == datoEliminar;
    });
  } else {
    alert("Error: Debes ingresar el Dato correcto");
  }

  if (Buscado != undefined) {
    coches.splice(Buscado, 1);
    alert("El coche elimino Correctamente");
  } else {
    alert("El coche no se piuede eliminar no esta en la lista");
  }
}

//! funcion para limpiar las cajas de inputs
function limpiar() {
  for (let i = 0; i < 5; i++) {
    document.getElementsByTagName("input")[i].value = "";
  }
}

//! function para cancelar o Terminar
function cancelarOTerminar() {
  if (confirm("Desea Termiar o Cancelar?")) {
    document.write("Adios");
  }
}
