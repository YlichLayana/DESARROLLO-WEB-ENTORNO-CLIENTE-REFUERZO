//array de usuarios
var usuarios = [];

//! constructor de  usuario
function User(nombre, clave, rol, fecha) {
  this.nombre = nombre;
  this.clave = clave;
  this.rol = rol;
  this.fecha = fecha;
}

//!funcion para agregar usuario
function agregar() {
  //*obtengo el tamaño del array
  var tamañoArray = usuarios.length;
  console.log(tamañoArray);
  //* obtengo la fecha actual
  var fechaAct = new Date();

  //Todo: capturar de esta manera local al llamar la funcion
  var nombre = document.getElementsByTagName("input")[0].value;
  var clave = document.getElementsByTagName("input")[1].value;
  var rol = "";
  if (tamañoArray < 1) {
    rol = "Administrador";
  } else {
    rol = "Estandar";
  }
  var fecha = fechaAct.getDate() + "/" + fechaAct.getMonth() + "/" + fechaAct.getFullYear();
  console.log(fecha);

  //Otro: instancia de objeto persona
  var nuevoUsuario = new User(nombre, clave, rol, fecha);

  //* agrego el objeto nuevoUsuario al array usuarios
  usuarios.push(nuevoUsuario);
  console.log(usuarios);

  limpiar(); // invocacion de la funcion que limpia las cajas de texto
}

//! metodo para visualizar usuarios
function visualizar() {
  //*variable de busqueda por nombre enviada en el formulario
  var userBuscado = document.getElementsByTagName("input")[0].value;
  var tieneDato = false;

  /*uso metodo nativo de JS es el find*/
  /*En este caso devolver el primer elemento encontrado */
  if (userBuscado != "") {
    tieneDato = true;
    var Buscado = usuarios.find(function (element) {
      return element.nombre == userBuscado;
    });
  }

  if (!tieneDato) {
    alert("Debe ingresar dato para buscar ");
  }
  console.log(Buscado);

  //*para ver mostrar el objeto buscado con metodo find
  for (const key in Buscado) {
    document.getElementsByTagName("input")[0].value = Buscado.nombre;
    document.getElementsByTagName("input")[1].value = Buscado.clave;
    document.getElementsByTagName("input")[2].value = Buscado.rol;
    document.getElementsByTagName("input")[3].value = Buscado.fecha;
  }
}

//! metodos para limpiar cajas
function limpiar() {
  for (let i = 0; i < 4; i++) {
    document.getElementsByTagName("input")[i].value = "";
  }
}

//! metodo para logearse segun el usuario agregado
function login() {
  //*variable de busqueda por nombre enviada en el formulario
  var userLogin = document.getElementsByTagName("input")[0].value;
  var userPass = document.getElementsByTagName("input")[1].value;
  var tieneDato = false;

  /*uso metodo nativo de JS es el find*/
  /*En este caso devolver el primer elemento encontrado */
  if (userLogin != "" && userPass != "") {
    tieneDato = true;
    var usuario = usuarios.find(function (element) {
      return element.nombre == userLogin;
    });

    //para ver mostrar el objeto buscado con metodo find
    for (const key in usuario) {
      if (usuario.rol == "Administrador") {
        mostrarElementos();
        limpiar();
        alert("Bienbenido Usuario Administrador");

        break;
      } else {
        alert("Bienbenido Usuario Estandar Usted esta dado de Alta!");
        break;
      }
    }
  }
  if (!tieneDato) {
    alert("Error: Debe ingresar datos para Logearse ");
  }
}

//! metodo para mostrar elementos del DOM ocultos
function mostrarElementos() {
  document.getElementsByTagName("tr")[2].hidden = false;
  document.getElementsByTagName("tr")[3].hidden = false;
  document.getElementsByTagName("tr")[5].hidden = false;
}
