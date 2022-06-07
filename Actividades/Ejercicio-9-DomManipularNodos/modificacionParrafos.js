document.addEventListener("DOMContentLoaded", inicializa, false)
var contarPulse=0;
var boton;

function inicializa() {
    
    document.addEventListener("click", manejarPulsarBoton, false)
}

function manejarPulsarBoton(evento){

    if(evento.target.id == 'boton'){
        contarPulse++;
        console.log('diste click al boton...' + contarPulse);
    }

    var lugarPadre = document.getElementById("principal");

    var nuevoElemento = document.createElement("p");
    var segundoElemento = document.createElement("p");
    var tercerElemento = document.createElement("p");
    


    switch (contarPulse) {
        case 1:
            
            let nuevoTexto1 = document.createTextNode ("Agregado en click: "+ contarPulse +" Soy el nuevo párrafo");
            nuevoElemento.appendChild(nuevoTexto1)
            lugarPadre.appendChild(nuevoElemento);
            break;

        case 2:
            let nuevoTexto2 = document.createTextNode("Agregado en click: "+contarPulse+" Soy el nuevo párrafo intermedio");
            segundoElemento.appendChild(nuevoTexto2);
        
            let segundo = document.getElementsByTagName("p")[1];
            lugarPadre.insertBefore(segundoElemento, segundo);
            break;

        case 3:
            let nuevoTexto3 = document.createTextNode("Agregado en click: "+contarPulse+" Soy el párrafo suplente, el que reemplaza al párrafo etiquetado como segundo");
            tercerElemento.appendChild(nuevoTexto3);
            let tercero = document.getElementsByTagName("p")[2];
            
            // Reemplazamos el nodo
            lugarPadre.replaceChild(tercerElemento, tercero);
            break;

        case 4:
            // Obtenemos el nodo a eliminar
            let nodoAEliminar = document.getElementsByTagName("p")[3];
            // Eliminamos el nodo
            lugarPadre.removeChild(nodoAEliminar);
            break;

        default:

            if(confirm("Desea volver al DOM Original?")){
                 document.location.reload();               
            }
            break;
    
    }

}