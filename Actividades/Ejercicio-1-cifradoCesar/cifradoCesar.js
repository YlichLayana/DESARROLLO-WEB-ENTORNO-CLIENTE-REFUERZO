var cajaEntra;
var cifrado;
var cajaResul;
var cifradoFinal;
var descifradoFinal;
var boton;

document.addEventListener("DOMContentLoaded", inicializar, false);

function inicializar() {
  cajaEntra = document.getElementById("mensajeEntrante");
  cifrado = document.getElementById("desplazamiento");
  cajaResul = document.getElementById("mensajeResultado");
  boton = document.getElementsByTagNameNS[0];

  cajaEntra.focus();
  document.addEventListener("keydown", darEnter, false);
  document.addEventListener("click", darclick, false);
}

//!funcion para manejar el evento de teclado
function darEnter(event) {
  let textRecibido = cajaEntra.value;
  let tipoCifrado = cifrado.value;
  

  switch (event.target.id) {
    case "mensajeEntrante":
      if (textRecibido != "" && event.key == "Enter") {
        console.log("Dio enter en mensaje entrante");
        cifrado.focus();
      } else if (event.key == "Enter") {
        console.log("MENSAJE: No puede quedar vacia");
        alert("MENSAJE: No puede quedar vacia");
      }
      break;

    case "desplazamiento":
      if (tipoCifrado != "" && event.key == "Enter") {
        console.log("Dio enter en cifrar");
        cajaResul.focus();

        if (textRecibido == textRecibido.toUpperCase()) {
          console.log("El string recibido está en mayuscula");

          cifradoFinal = cesarEncriptar(textRecibido, tipoCifrado);
          console.log(cifradoFinal);
          cajaResul.value = cifradoFinal;
        } else {
          console.log("El string recibido está en minúscula");
          cifradoFinal = cesarEncriptar(
            textRecibido.toUpperCase(),
            tipoCifrado
          );
          console.log(cifradoFinal);
          cajaResul.value = cifradoFinal;
        }
      } else if (event.key == "Enter") {
        console.log("CIFRAR: No puede quedar vacia");
        alert("CIFRAR: No puede quedar vacia");
      }
      break;
  }
}

//!funcion para manejar el evento click
function darclick(event) {
  let textoCifrado = cajaEntra.value;
  let tipoCifrado = cifrado.value;
  let nodoTexto;
  
  if (event.target.type == "button") {
    console.log("disteclick");
    textoCifrado = cajaResul.value;

    descifradoFinal = cesarDesEncriptar(textoCifrado, tipoCifrado);

    console.log(descifradoFinal);

    nodoTexto = document.getElementById("desencriptado");

    //* creación del elemeto p y asignacion de contenido en el
    p = document.createElement("p");
    p.innerHTML = "El mensaje oculto es: "+descifradoFinal;
    p.style.color = "#550F0F";

    //!aqui le agrego el nodo hijo el cual es el p
    nodoTexto.appendChild(p);
  }
}

//!funcion para encripatar
function cesarEncriptar(string, key) {
  const newClave = [];
  const ajustarClave = key % 26;

  for (const letra of string) {
    let newletra = letra.charCodeAt() + ajustarClave;

    // PARA LETRAS DE CIFRADO: si la nueva letra esta entre la a y la Z que en unicode son 97 y 122
    if (newletra <= 122) {
      newClave.push(String.fromCharCode(newletra));
    } else if (newletra > 122) {
      newClave.push(String.fromCharCode(96 + (newletra % 122)));
    }
  }
  return newClave.join("");
}

//!funcion para desencripatar
function cesarDesEncriptar(string, key) {
  const newClave = [];
  const ajustarClave = key % 26;

  for (const letra of string) {
    let newletra = letra.charCodeAt() - ajustarClave;

    // PARA LETRAS DE CIFRADO: si la nueva letra esta entre la a y la Z que en unicode son 97 y 122
    if (newletra <= 122) {
      newClave.push(String.fromCharCode(newletra));
    } else if (newletra > 122) {
      newClave.push(String.fromCharCode(96 - (newletra % 122)));
    }
  }
  return newClave.join("");
}

/*function cifrar(texto, desplazamiento) {
  
  let resultado = "";
  let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
  //desplazamiento = desplazamiento % 26;
  desplazamiento = ((desplazamiento % 26) + 26) % 26;

  if (texto) {
    for (let i = 0; i < texto.length; ++i) {
      //Si la letra está en el array de letras (si no es un símbolo, un espacio...)
      if (letras.indexOf(texto[i]) != -1) {
        //almacenamos en la posición de la letra más el desplazamiento y le aplicamos el módulo
        let posicion = (letras.indexOf(texto[i]) + desplazamiento) % 26;
        resultado += letras[posicion];
      } else resultado += texto[i]; // Números, espacios, símbolos...
    }
  }
  return resultado;
}*/
