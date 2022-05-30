//Todo: Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

//Todo: Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" }
  
];


function contarOvejas(ovejas) {
  // aquí tu magia
  var nombreTemp;
  var objetosEliminar = [];
  var letras ='na';
  
  for (const objetOveja of ovejas) {
      nombreTemp=objetOveja.name.toUpperCase();
      
      if (!nombreTemp.includes(letras.toUpperCase())) {
        objetosEliminar.push(objetOveja)
      }
  }

  //console.log(ovejas);
  //console.log(objetosEliminar);

  ovejas = ovejas.filter(item => !objetosEliminar.includes(item))

  return ovejas;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
