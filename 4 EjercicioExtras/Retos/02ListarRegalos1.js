var contador = 1;
const carta = "bici coche balón _playstation bici coche peluche _otro _ms";

function listGifts(cartaRecibida) {
  let cadenaSeparada = cartaRecibida.split(" ");

  let mapResultante = new Map();

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

  return mapResultante; 
}


function mapToObj(mapRecibido) {

  let objeto = {};//* objeto vacio 

  mapRecibido.forEach(function (valor, clave) {
    objeto[clave] = valor;
  });

  return objeto;
}


const regalos = listGifts(carta);
console.log(regalos);

const mapToObjeto = mapToObj(regalos);
console.log(mapToObjeto);

