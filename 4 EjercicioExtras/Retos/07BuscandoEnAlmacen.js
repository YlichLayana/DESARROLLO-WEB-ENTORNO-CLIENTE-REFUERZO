//Todo: Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

//Todo: Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

//Todo: La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

let arrayOpcional = [];

function iterarAlmacen(object) { 
  for (const key in object) {
    const element = object[key];
    if (typeof element === "object") {
      iterarAlmacen(element);
    } else {
      arrayOpcional.push(element);
    }
  }
  return arrayOpcional;
}

function contains(store, product) {
  if (iterarAlmacen(store).includes(product)) {
    return true;
  }

  return false;
}

console.log(contains(almacen, "camiseta"));
console.log(contains(otroAlmacen, 'gameboy'));
