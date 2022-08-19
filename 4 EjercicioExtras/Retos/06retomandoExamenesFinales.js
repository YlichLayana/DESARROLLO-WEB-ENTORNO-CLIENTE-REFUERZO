//Todo: A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

//Todo: La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

//Todo: Si no se encuentra, se devuelve null.


function sumPairs(numbers, result) {
    var arrayResultante = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] + numbers[j] === result) { 
                if(arrayResultante.length<2){
                    arrayResultante.push(numbers[i], numbers[j]);
                    return arrayResultante;
                }
            }
        }
    }
        
    return null;
}



console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10) );  // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));  //[1, 5]
