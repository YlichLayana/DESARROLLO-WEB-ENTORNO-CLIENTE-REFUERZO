var radioButton, marca, modelo, ram, hd, pantalla;
//var ordenadores = [];

var ramDefault;
var hdDefault;
var pantallaDefault;
var autonomiaDefault;
var tipoLapto = false;

document.addEventListener("DOMContentLoaded", inicializa, false);

function inicializa() {
  //elemento radio
  radioButton = document.getElementsByName("tipo");

  //elementos input listos para usarlos
  marca = document.getElementsByTagName("input")[2];
  modelo = document.getElementsByTagName("input")[3];
  ram = document.getElementsByTagName("input")[4];
  hd = document.getElementsByTagName("input")[5];
  pantalla = document.getElementsByTagName("input")[6];
  autonomia = document.getElementsByTagName("input")[7];

  //ocultar parte del formulario
  elementoAutonomia = document.getElementsByTagName("div")[6];

  //capturo el valor por default que tiene el formulario en place holder
  ramDefault = document.getElementsByTagName("input")[4].placeholder;
  hdDefault = document.getElementsByTagName("input")[5].placeholder;
  pantallaDefault = document.getElementsByTagName("input")[6].placeholder;
  autonomiaDefault = document.getElementsByTagName("input")[7].placeholder;

  //oculto el input
  elementoAutonomia.hidden = true;

  //oyentes de evento para el radio boton y para el boton agregar
  document.addEventListener("click", verRadio, false);
  document.addEventListener("click", agregando, false);
}

//funcion para capturar el radio elegido
function verRadio(event) {
  if (event.target.type == "radio") {
    if (radioButton[0].checked == true) {
      console.log("a elegido pc");
      elementoAutonomia.hidden = true;
      marca.focus();
    }
    if (radioButton[1].checked == true) {
      console.log("a elegido lapto");
      elementoAutonomia.hidden = false;
      tipoLapto = true;
      marca.focus();
    }
  }
}

//funcion para agregar el objeto al disparar el evento click del boton agregar
function agregando(event) {
  //variables con los que capturo lo datos pasados a los input
  let marcaCapture = marca.value;
  let modeloCapture = modelo.value;
  let ramCapture = ram.value;
  let hdCapture = hd.value;
  let pantallaCapture = pantalla.value;
  let autonomiaCapture = autonomia.value;

  //aqui realizo la condición de que si mi evento es disparado por un click realizado al type submit o type button y si los dos primeros input de marca y modelo no estan vacios

  if (event.target.type == "button" && marcaCapture != "" && modeloCapture != "") {
    //if (event.target.type =="submit") {

    // condiciono si las cajas de ram hd y pantalla estan vacias este intanciara el objeto padre y capturara los valores por defecto mostrados en los placeholder de dichos elementos

    if (tipoLapto) {
      //si tipo es true, utilizara la llamada a la herencia del prototipo ordenador el cual seria el OrdenadorPortatil
      console.log("es portatil");
      if (ramCapture != "" && hdCapture != "" && pantallaCapture != "" && autonomiaCapture != "") {
        const portatil = new OrdenadorPortatil(marcaCapture, modeloCapture, ramCapture, hdCapture,pantallaCapture, autonomiaCapture);
        console.log(portatil);
        portatil.listado();
        portatil.probar();
      } else {
        const portatil = new OrdenadorPortatil(marcaCapture, modeloCapture);
        console.log(portatil);
        portatil.listado();
        portatil.probar();
      }
    } else {
      if (ramCapture != "" && hdCapture != "" && pantallaCapture != "") {
        //en caso de que ningun input este vacio agregamos el ordenador con todos los datos ingresados
        const ordenadorMesa = new Ordenador(marcaCapture, modeloCapture, ramCapture, hdCapture,pantallaCapture);
        console.log(ordenadorMesa);
        ordenadorMesa.listado();
        //ordenadores.push(ordenadorMesa);
      } else {
        //en caso contrario agregamos el ordenador con todos los datos por defecto
        const ordenadorMesa = new Ordenador(marcaCapture, modeloCapture);
        console.log(ordenadorMesa);
        ordenadorMesa.listado();
      }
    }
  } else if (event.target.type == "button") {
    alert("Los Datos de Marca o Modelo no pueden quedar Vacios");
    marca.focus();
  }
}

//clase padre
class Ordenador {
  //metodo especial constructor
  constructor(marca, modelo, ram, hd, pantalla) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram || ramDefault;
    this.hd = hd || hdDefault;
    this.pantalla = pantalla || pantallaDefault;
  }

  //metodos de objeto
  listado() {
    console.log("DATOS ORDENADOR\n Marca: " + this.marca + "\n Modelo: " + this.modelo + "\n RAM: " + this.ram + "\n HD: " + this.hd + "\n PANTALLA: " + this.pantalla);

    var elemDivMostrarDatos = document.getElementById("caracteristicasOrdenador");

    var datoOrdenador ="DATOS ORDENADOR:\n Marca: " + this.marca + "\n Modelo: " + this.modelo + "\n RAM: " + this.ram + "\n HD: " + this.hd + "\n PANTALLA: " + this.pantalla;

    var p = document.createElement("p");

    p.textContent = datoOrdenador;
    elemDivMostrarDatos.appendChild(p);
  }
}

//herencia
//clase hija
class OrdenadorPortatil extends Ordenador {
  constructor(marca, modelo, ram, hd, pantalla, autonomia) {
    //aqui el metodo super manda a llamar el constructor de la clase padre
    super(marca, modelo, ram, hd, pantalla);
    //autonomia es una propiedad exclusiva de objeto hijo
    this.autonomia = autonomia || autonomiaDefault;
  }


  //metodos
  //sobre escritura del metodo del prototipo padre
  listado(){
    console.log('DATOS ORDENADOR PORTATIL:\n Marca: '+ this.marca + '\n Modelo: '+ this.modelo + '\n RAM: '+ this.ram + '\n HD: '+ this.hd +'\n Pantalla: ' +this.pantalla + '\n Autonomia: '+ this.autonomia);

    var elemDivMostrarDatos= document.getElementById('caracteristicasOrdenador');
  
    var datoOrdenador= 'DATOS ORDENADOR PORTATIL\n Marca: '+ this.marca + '\n Modelo: '+ this.modelo + '\n RAM: '+ this.ram + '\n HD: '+ this.hd +'\n Pantalla: ' +this.pantalla + '\n Autonomia: '+ this.autonomia;
  
    var p = document.createElement('p');

    p.textContent = datoOrdenador;
    elemDivMostrarDatos.appendChild(p);
  }

  //Cree otro metodo para el objeto OrdedanorPortatil
  probar(){
    console.log('Bien has creado un ordenador portatil '+ this.marca);
  }
}

