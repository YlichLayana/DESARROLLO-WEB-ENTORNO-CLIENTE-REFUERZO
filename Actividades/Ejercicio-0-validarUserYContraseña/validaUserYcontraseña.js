document.addEventListener("DOMContentLoaded", inicializar, false);

//* Variables de captura
var entradaUsuario;
var entradaClave;

//* variables de tipo string con las que hare comparaciones con los datos recibidos en los inputs/
var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ"; //TODO: contendra todas la letras mayusculas
var letras = "abcdefghyjklmnñopqrstuvwxyz"; // TODO: contiene las letras minusculas
var nums = "0123456789"; // TODO: variable que contiene los numeros
var caractEspecial = "@$_&!?#"; // TODO: los caracteres no albanumericos o caracteres especiales

//*Array con mensajes de error que se mostraran segun su validacion
var msg = [
  "Contraseña correcta",
  "Contraseña demasiado corta",
  "Contraseña sin mayúsculas",
  "Contraseña sin minúsculas",
  "Contraseña sin digitos",
  "Contraseña sin caracteres no alfanúmericos",
];

function inicializar() {
  entradaUsuario = document.getElementsByName("perfil")[0];
  entradaClave = document.getElementsByName("perfil")[1];
  entradaUsuario.focus();

  document.addEventListener("click", validaOcancela, false);
}

/! Función que maneja el evento click y se ejecutara segun el boton que apretemos/;
function validaOcancela(evento) {
  // en estas variable capturo lo que se pasa en el input de texto
  let entradaUsuarioCapture = entradaUsuario.value;
  let entradaClaveCapture = entradaClave.value;

  switch (evento.target.value) {
    case "Validar":
      console.log("validando...");
      if (entradaUsuarioCapture == "" || entradaClaveCapture == "") {
        // pregunto si usuario o clave estan vacion
        document.write("Debe introducir datos para validar");
        
      } else {
        //en caso contrario

        document.write(validaUser(entradaUsuarioCapture)); //* en esta linea imprimo directamente el resultado que se obtiene al llamar la funcion validaUSer(entradaUsuario) y entradaUsuario contrendra la cadena de caracteres que recibe el input del formulario
        document.write("<br>");

        //OTRO: En esta  siguiente variable --> valorPass contendra el resultado que se da al invocara la funcion validaPass(entradaClave) --> al cual le paso lo que el input de entradaClaveCapture contiene  es decir la cadena de texto que recibe en el formulario
        var valorPass = validaPass(entradaClaveCapture);
        console.log(valorPass);
        document.write(msg[valorPass]); //*segun su valor presentare lo que contenga el array msg[]
      }
      break;

    case "Cancelar":
      console.log("cancelando...");
      if (confirm("Desea cancelar?")) {
        document.write("Adios");
      }
      break;
  }
}

/!Esta funcion validaUser tiene un parametro al que llame cadena es decir que esta funcion recibira un dato de tipo cadena el cual sera el dato recibido en el inpuut*/;
function validaUser(cadena) {
  var msg = "";

  var hayMayus = false;
  for (i = 0; i < cadena.length; i++) {
    // aqui recorro el largo de la cadena o dato recibido en la funcion
    // aqui comparo letras_mayusculas tiene incluida un caracter de la cadena en dicha posicion
    if (letras_mayusculas.includes(cadena.charAt(i))) {
      hayMayus = true;
    }
  }
  if (hayMayus) {
    msg = "Usuario no Valido";
  } else {
    msg = "Usuario Valido";
  }

  return msg;
}

/!esta funcion es similar que la de valida usuario solo que tendra más validaciones */;
function validaPass(cadena) {
  var hayMayus = false;
  var hayMinus = false;
  var haydigitos = false;
  var hayEspe = false;
  var tamanio = cadena.length;

  if (tamanio < 8) {
    // aqui valido si la clave tiene menos de 8 caracteres
    return 1; // la respuesta sera 1
  } else {
    for (i = 0; i < cadena.length; i++) {
      if (letras_mayusculas.includes(cadena.charAt(i))) {
        hayMayus = true;
      }
      if (letras.includes(cadena.charAt(i))) {
        hayMinus = true;
      }
      if (nums.includes(cadena.charAt(i))) {
        haydigitos = true;
      }
      if (caractEspecial.includes(cadena.charAt(i))) {
        hayEspe = true;
      }
    }

    /*aqui pregunto */
    if (!hayMayus) {
      //la negacion de mayusculas por false  me da respuesta 2
      return 2;
    }
    if (!hayMinus) {
      //la negacion de mayusculas por false  me da respuesta 3
      return 3;
    }
    if (!haydigitos) {
      //por false dara 4
      return 4;
    }
    if (!hayEspe) {
      return 5; // por false dara 5
    } else {
      return 0; // en caso contrario será 0
    }
  }

  // segun el valor que contenga el return esta función se pasar al array msg y mostrara el mensaje
}
