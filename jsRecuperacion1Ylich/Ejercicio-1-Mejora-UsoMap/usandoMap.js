document.addEventListener("DOMContentLoaded", inicializar, false);

//TODO: Variables de captura de datos e inicializacion del documento
var nombre;
var clave;
var tipoUsuario;
var FechaAlta;

//OTRO: elementos a ocultar
var element1;
var element2;
var element3;

//OTRO: Creacion de map de usuarios que usaremos en el ejercicio
var usuarios = new Map();



//! funcion o metodo para inicializar el documento
function inicializar() {
  nombre = document.getElementsByTagName("input")[0];
  clave = document.getElementsByTagName("input")[1];
  tipoUsuario = document.getElementsByTagName("input")[2];
  FechaAlta = document.getElementsByTagName("input")[3];
  nombre.focus();

  //* Ocultar elementos al cargar la pagina
  element1 = document.getElementsByTagName("tr")[2].hidden = true;
  element2 = document.getElementsByTagName("tr")[3].hidden = true;
  element3 = document.getElementsByTagName("tr")[5].hidden = true;

  document.addEventListener("click", manejandoClick, false);
}

//! metodo especial que se usa como constructor de objeto User
function User(nombre, clave, rol, fecha) {
  this.nombre = nombre;
  this.clave = clave;
  this.rol = rol;
  this.fecha = fecha;
}

function manejandoClick(evento) {
  switch (evento.target.value) {
    case "AGREGAR":
      console.log("Agregando...");
      agregar();
      break;

    case "Aceptar":
      console.log("Logeandose...");
      login();
      break;

    case "Visualizar":
      console.log("visualizando...");
      visualizar();
      break;
  }
}

//!funcion para agregar usuario
function agregar() {
  //*capturo datos del formulario de esta manera local al llamar la funcion
  let nombreCapture = nombre.value;
  let claveCapture = clave.value;

  //*obtengo el tamaño del array
  let tamañoMap = usuarios.size;
  console.log(tamañoMap);

  //* creamos una variable a la cual se le instancio o llama en constructor new Date que retorna un nuevo objeto Date.
  let fechaAct = new Date();

  let rol = "";
  if (tamañoMap < 1) {
    rol = "Administrador";
  } else {
    rol = "Estandar";
  }

  let fecha = fechaAct.getDate() + "/" + fechaAct.getMonth() + "/" + fechaAct.getFullYear();
  console.log(fecha);

  //*instancia de objeto persona
  var nuevoUsuario = new User(nombreCapture, claveCapture, rol, fecha);

  //TODO: Al map usuarios se le agregan los objetos con su metodo set, enviandole el nombre capturado del objeto que este sera la clave y el objeto en si sera el contenido de la clave
  usuarios.set(nombreCapture, nuevoUsuario);

  //* imprimo los datos contenidos en el map
  console.log(usuarios);

  limpiar(); // invocacion de la funcion que limpia las cajas de texto
}

//! metodo para logearse los usuario que existen en el map
function login() {
  //variable de busqueda por nombre enviada en el formulario
  let userLogin = nombre.value;
  let userPass = clave.value;
  let tieneDato = false;

  /*uso metodo nativo de JS es el has*/
  /*En este caso devolver el primer elemento encontrado */
  if (userLogin != "" && userPass != "") {
    tieneDato = true;
    if (usuarios.has(userLogin)) {
      // esta variable es para tomar del map al usuario buscado
      var UsuarioBusca = usuarios.get(userLogin);
      console.log(UsuarioBusca); // aqui observo al usuario

      // realizo condicion de que si UsuarioBusca es usuario administrador
      // muestro los labels
      if (UsuarioBusca.rol == "Administrador") {
        console.log("es el duro");
        mostrarElementos();
        limpiar();
      } else {
        alert("Bienvenido Usuario Estandar Usted esta dado de Alta!");
      }
    }
  }
  if (!tieneDato) {
    alert("Error: Debe ingresar datos para Logearse ");
  }
}

//!metodo para visualizar usuarios
function visualizar() {
  //*variable de busqueda por nombre enviada en el formulario
  let userBuscado = nombre.value;
  let tieneDato = false;

  //* en esta condicion pregunto si el input esta vacio
  if (userBuscado != "") {
    tieneDato = true;
    //* consulto si en el map usuarios con el metodo has existe el usuario a buscar
    if (usuarios.has(userBuscado)) {
      //* si el usuario existe en el map lo asigno a una variable UsuarioMuestra
      var UsuarioMuestra = usuarios.get(userBuscado);
      console.log(UsuarioMuestra);

      nombre.value = UsuarioMuestra.nombre;
      clave.value = UsuarioMuestra.clave;
      tipoUsuario.value = UsuarioMuestra.rol;
      FechaAlta.value = UsuarioMuestra.fecha;
    }
  }

  if (!tieneDato) {
    alert("Debe ingresar dato para buscar ");
  }
}

//!metodos para limpiar cajas
function limpiar() {
  for (let i = 0; i < 4; i++) {
    document.getElementsByTagName("input")[i].value = "";
  }
}

//! funcion o metodo para mostrar elementos
function mostrarElementos() {
  element1 = document.getElementsByTagName("tr")[2].hidden = false;
  element2 = document.getElementsByTagName("tr")[3].hidden = false;
  element3 = document.getElementsByTagName("tr")[5].hidden = false;
}
