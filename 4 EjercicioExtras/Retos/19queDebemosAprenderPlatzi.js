//Todo: Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es un regalo 🎁 para siempre. En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para completar dos cursos usando el máximo número de horas disponible.

//Todo: Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

//Todo: Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null

/*function learn(time, courses) {
  let arrayResulPosiciones = [];
  let posicionCero, posicionUno;
  var arrayTotales = [];
  var totalAux = 0;

  for (let indexA = 0; indexA < courses.length; indexA++) {
    for (let indexB = indexA + 1; indexB < courses.length; indexB++) {
      totalAux = courses[indexA] + courses[indexB];

      if (totalAux <= time) {
        //console.log("indices: "+indexA, indexB + " totales: "+ totalAux);
        arrayTotales.push(totalAux);
        var maxVal = Math.max(...arrayTotales);
        if (maxVal === totalAux) {
          posicionCero = indexA;
          posicionUno = indexB;
          //console.log("indices: "+indexA, indexB + " totales: "+ totalAux);
        }
      }
    }
  }

  if (
    posicionCero != undefined &&
    posicionUno != undefined &&
    arrayResulPosiciones.length < 2
  ) {
    arrayResulPosiciones.push(posicionCero, posicionUno);
  }
  if (arrayResulPosiciones.length > 0) {
    console.log(arrayResulPosiciones);
  } else {
    console.log(null);
  }
}
*/

//Otro: el codigo 100% funcional que cumple todas las validaciones
function learn(time, courses) {
  // Creamos una variable para sumar los índices
  let sum = null;
  // Creamos una variable para guardar el resultado de los índices
  let result = null;
  // Recorremos el arreglo courses para evaluar todos los valores
  for (let i in courses) {
    for (let j in courses) {
      // Si el índice i y j son iguales entonces ignoramos y continuamos con la siguiente iteración
      if (i == j) {
        continue;
      }
      // En caso de que i y j no sean iguales entonces evaluamos los valores
      else {
        // Creamos una variable temporal que sume los valores en los índices i y j
        let temp = courses[i] + courses[j];
        // Revisamos si sum es null o si time - la suma de los valores es menor a time - el valor actual de sum
        if (sum == null || time - temp < time - sum) {
          // Evaluamos si la suma de los índices es mayora al valor deseado (time), si es así, ignoramos estos índices
          if (temp > time) {
            continue;
          }
          // Actualizamos el valor de sum y obtenemos los índices que proporcionan el valor más cercano en la iteración actual
          else {
            sum = temp;
            result = [i, j];
          }
        }
      }
    }
  }
  // Devolvemos el valor de los índices al final de los ciclos for con los valores de i y j que sumados son igual o el valor más cercano a time
  return result;
}
console.log()

learn(10, [2, 3, 8, 1, 4]); // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

console.log(learn(15, [2, 10, 4, 1])); // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

console.log(learn(25, [10, 15, 20, 5])); // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

console.log(learn(8, [8, 2, 1])); // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

console.log(learn(8, [8, 2, 1, 4, 3])); // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

console.log(learn(4, [10, 14, 20])); // null -> no nos da tiempo a hacer dos cursos

console.log(learn(5, [5, 5, 5])); // null -> no nos da tiempo a hacer dos cursos
