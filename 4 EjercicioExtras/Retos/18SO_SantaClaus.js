//TODO: Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.

//TODO: Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan guardar el mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.

//TODO: Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo número de elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el número de veces que se encontró repetido.

const files = ["photo", "postcard", "photo", "photo", "video"];
//*['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ["file", "file", "file", "game", "game"];
//*['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
//*['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

function fixFiles(archivo) {
  var nuevo = [];
  var contador;
  
  for (let dato of archivo) {
      
    if (!nuevo.includes(dato)) {
      nuevo.push(dato);
      var idx = nuevo.indexOf(dato);
      while (idx != -1) {
        //console.log("Indice elemento unico:" + idx );
        contador = 0;
        idx = nuevo.indexOf(dato, idx + 1);
      }
    } else {
      contador++;
      nuevo.push(dato + "(" + contador + ")");
    }
  }
  return nuevo;
}


var resultado1 = fixFiles(files);
var resultado2 = fixFiles(files2);
var resultado3 = fixFiles(files3);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

