//Todo: ¡Hemos perdido a un reno y falta poco más de una semana para Navidad!. Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

//Todo: Lo bueno => los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno. Lo malo => la lista está desordenada y podría faltar el último...

//Todo: Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  //?primero ordeno los datos recibidos de menor a mayor
  ids.sort(function (a, b) {
    return a - b;
  });

  //*creo una variable que contendra el dato del ultimo elemento
  let ultimoElemento = ids[ids.length - 1];
  //Otros: estas variables la usare para el subcontrol de los datos
  let contador = 0; //* este contador es para obtener si en ids existen mas de un faltante
  let numsFaltntes = []; //? este array vacio es para agregar los ids faltantes
  let resultado; //*esta sera la variable resultante a la que asignare lo obtenido

  //! en esta sentencia if condiciono si el tamaño de ids es mayor o igual que 2 y si el primer elemento que contenta ids es 0
  if (ids.length <= 2 && ids[0] === 0) {
    resultado = ultimoElemento + 1; //! el resultado es el dato del ultimo elemento + 1
  }
  //Otro: por el caso contrario, este array llamado ids es mayor 2 entonces
  else {
    //Todo: Recorremos los datos recibidos desde un valor 0 hasta el valor de su ultimo elemento
    for (var i = 0; i <= ultimoElemento; i++) {
      //?Aqui condicionamos si no esta incluido cada valor del dato del array ids con la del ciclo de iteracion
      if (!ids.includes(i)) {
        contador++; //* incrementaremos el contador
        if (contador > 1) {
          //? si el contador es mayor 1 este quiere decir que falta mas elementos entonces los agregaremos a un nuevo array y lo asignamos al resultado
          numsFaltntes.push(i);
          resultado = numsFaltntes;
        }
        //!En caso contrario asigamos a resultado el valor de i que seria el dato faltante
        else {
          resultado = i;
        }
      }
    }
  }
  return console.log(resultado);
}

missingReindeer([1, 2]); // -> 0
missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
missingReindeer([1, 2, 5]); // -> 3,4
