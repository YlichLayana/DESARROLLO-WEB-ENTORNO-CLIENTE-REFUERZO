//Todo: Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico. Las monedas para cambio que puedes usar son estas: desde  centimo hasta 50 centimos;

//Todo: Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

//Todo: La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible. 

function getCoins (change){
    let monedas = [1, 2, 5, 10, 20, 50];
    let resultado = Array(6).fill(0);

    monedas.reverse(); //Otro; primero cambio de posicion el array de mayor a menor valor contenido
    //console.log(monedas1);

    //Todo: en este ciclo for recorro uno a uno los indice del array y analizamos su valores contenidos 
    for (let index = 0; index < monedas.length; index++) {

        //!en la siguiente estructura de condicion pregunto si el valor recibido es mayor o igual al valor contenido en dicho indice del array monedas.. si es asi al valor de change recibido se le restara el valor contenido en el indice del array.
        if(change >= monedas[index]){
            change = change - monedas[index];

            resultado[index] = resultado[index]+1; //? y como penultimo paso en la posicion del array resultado le incrementamos el valor contenido tambien se podria escribir de la siguiente manera resultado[index]++

            index--;// como ultimo paso debemos decrementar el index de la interaccion del ciclo for para poder volver a validar la condicion 
        }

    }
    resultado.reverse(); //Todo: por ultimo al array resultado le aplicamos la funcion reverse para poder tener la posicion del array inicial con su respectivas respuesta
    //console.log(resultado)
    return resultado
}



console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
