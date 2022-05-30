//todo: Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

//Todo: Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

//Todo: Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

//Todo: Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

//Todo: Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

const carta = "bici coche balón _playstation bici coche peluche _otro _ms";


function listGifts(cartaRecibida) {
  //*aqui convierto mi cadena recibida en un array de palabras "cadenas"
  let cadenaSeparada = cartaRecibida.split(" ");

  let contador = 1;//*contador que usare en el map 

  let mapResultante = new Map();//* creo o instancio un map 

  let objeto = {}; //* creo un objeto vacio

  //Todo: aqui itero sobre los datos o cadenas que contiene el array cadenaSeparada
  for (let dato of cadenaSeparada) {
    //console.log("clave: " + dato);
    //Otro: Si el dato no existe en el map este se agregara al map
    if (!mapResultante.has(dato)) {
      mapResultante.set(dato, contador);
      //* aqui con el El método startsWith() indicamos si una cadena de texto comienza con el caracter _ de una cadena de texto concreta, devolviendo true o false.
        if(dato.startsWith("_")){
          console.log("tiene guion: " + dato);
          mapResultante.delete(dato);
        }
      
    } //Otro: y si el dato exite en el map tomo su valor
    else if (mapResultante.has(dato)) {
      var valor = mapResultante.get(dato);
      //*y lo agrego con el metodo set sobre escribiendo su clave "el dato" e incrementando su valor
      mapResultante.set(dato, (valor += 1));
    }
  }

  //Otro: aqui uso el metodo forEach para iterar sobre los datos de clave y valor del map y los voy asignando al objeto 
  mapResultante.forEach(function (valor, clave) {
    objeto[clave] = valor;
  });
  
  return objeto; 
}

const regalos = listGifts(carta);

console.log(regalos);
/* el resultado deberia ser asi
{
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
}
*/

