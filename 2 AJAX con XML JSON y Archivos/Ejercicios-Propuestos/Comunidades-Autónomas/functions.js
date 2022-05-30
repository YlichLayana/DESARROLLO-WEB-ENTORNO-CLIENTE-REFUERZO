var objetoRespuesta;
document.addEventListener('DOMContentLoaded', asignarEventos, false);

function asignarEventos() {
    xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', gestionarRespuesta, false);
    xhr.open('GET', 'provincias.json', true);
    xhr.send(null);
}

function gestionarRespuesta(evento) {
    if (evento.target.readyState == 4 && evento.target.status == 200) {
        objetoRespuesta = JSON.parse(evento.target.responseText);
        let select = document.createElement('select');
        for (let i in objetoRespuesta) {
            //alert("Propiedad del JSON " + i);
            addSelect(select, i);
        }
        document.body.appendChild(select);
        select.addEventListener("change", getProvincias, true);

    }
}

function getProvincias(e) {
    let comunidadAutonoma = e.target.value;
    let arrProvincias = objetoRespuesta[comunidadAutonoma];

    if (document.getElementById('selectProvincias')) {
        document.getElementById('selectProvincias').remove();
    }

    let selectProv = document.createElement('select');
    selectProv.setAttribute('id', 'selectProvincias');
    document.body.appendChild(selectProv);

    for (let prov of arrProvincias) {
        addSelect(selectProv, prov);
    }
}

function addSelect(select, element) {
    let option = document.createElement('option');
    option.setAttribute('value', element);
    option.textContent = element;
    select.appendChild(option);
}