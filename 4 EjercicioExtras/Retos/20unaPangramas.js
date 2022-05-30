//Todo: En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

//Todo: Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

//Todo: Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.


function pangram(letter) {

    let resultado = false;
    let contador = 0;
   
    //*creo una cadena de con todas las letras del alfabeto
    const ALFABETO = "abcdefghijklmnñopqrstuvwxy";

    //* Convierto la cadena letter a minúsculas
	let cadenaRecibida = letter.toLowerCase();

    //!aqui convierto mi alfabeto en un array de letras 
    //let alfabetoComoArreglo = Array.from(ALFABETO);
    let alfabetoComoArreglo = ALFABETO.split("");

    for (const letra of alfabetoComoArreglo) {
        if(cadenaRecibida.includes(letra)){
            contador++;
        }
    }
    
    if(contador==26){
        resultado = true;
    }
    
    return console.log(resultado)
}


pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true
pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false