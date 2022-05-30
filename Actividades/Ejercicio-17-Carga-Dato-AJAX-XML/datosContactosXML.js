var boton;
var urlArchivoXML;
var conexionXML; 
var resultadoDIV

document.addEventListener("DOMContentLoaded", inicializar, false);


function inicializar(){
    boton=document.getElementsByTagName("button")[0].addEventListener("click", enviaPeticionAJAX, false);

    resultadoDIV = document.getElementById("resu")
}

function enviaPeticionAJAX() {
    console.log("estoy dentro de la funcion que realiza peticion ajax");

    urlArchivoXML = "contactos.xml";

    conexionXML = new XMLHttpRequest();
    conexionXML.addEventListener("readystatechange", enviarRespuestaAJAX, false);
    conexionXML.open('GET', urlArchivoXML);
    conexionXML.send();
}

function enviarRespuestaAJAX(evento) {
    //console.log("tipo de estado: " + evento.target.readyState);
    var salida = "";
    //Cuando readyState es 4 y el estado es 200, la respuesta está lista:
    if (evento.target.readyState == 4 && evento.target.status == 200) {
        //petición finalizada == 4 y documento encontrado, respuesta OK == 200
        //console.log("El status es: " + evento.target.status);

        //Otro: aqui obtengo la respuesta del XML
        var ObjRespuesta = conexionXML.responseXML;;
        
        //Todo: aqui obtengo el elemento padre del documento XML para poder iterar con sus hijos 
        var nodosXML = ObjRespuesta.getElementsByTagName("agenda")[0].childNodes;

         for (const item of nodosXML) { 
            //console.log(item)
            //console.log(item.nodeName)
            //console.log(item.localName)
            //console.log(item.textContent)
            if (item.nodeType==1) {
                console.log(item.nodeName +": "+item.textContent)
               // salida += "<p>"+item.nodeName +": "+item.textContent +"</p>";

                let crearInput = document.createElement("input");
                crearInput.setAttribute("value", item.nodeName +": "+item.textContent);

                let saltoLinea = document.createElement("hr");

                resultadoDIV.appendChild(saltoLinea);
                resultadoDIV.appendChild(crearInput);
                
            }
         }  
    }

    //resultadoDIV.innerHTML = salida
}


