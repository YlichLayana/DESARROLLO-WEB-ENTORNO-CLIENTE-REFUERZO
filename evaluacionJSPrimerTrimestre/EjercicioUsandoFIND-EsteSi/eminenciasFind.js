 //!array de objetos llamado eminencias al cual se agregaran los objetos Persona
 var eminencias = [];

 //!constructor de objeto
 function Persona(nombre, apellidos, fechaNaci, fechaMuer, aportacion, imagen) {
   this.nombre = nombre;
   this.apellidos = apellidos;
   this.fechaNaci = fechaNaci;
   this.fechaMuer = fechaMuer;
   this.dni = nombre.slice(0, 1) + Math.floor(Math.random() * (1000 - 0)) + apellidos.slice(apellidos.length - 3, apellidos.length);
   this.aportacion = aportacion;
   this.imagen = imagen;
 }

 //agrego objeto persona
 function agregar() {
   //o capturar de esta manera local al llamar la funcion
   var nombre = document.getElementsByTagName("input")[0].value;
   var apellidos = document.getElementsByTagName("input")[1].value;
   var dni = document.getElementsByTagName("input")[2].value;
   var fechaNaci = document.getElementsByTagName("input")[3].value;
   var fechaMuer = document.getElementsByTagName("input")[4].value;
   var aportacion = document.getElementsByTagName("textarea")[0].value;
   var datosImagen = prompt("Introduce la inicial y el apellido");

   //!instancia de objeto persona
   var nuevaPersona = new Persona(nombre, apellidos, fechaNaci, fechaMuer, aportacion, datosImagen);

   //*agrego objero persona al final del array eminencias
   eminencias.push(nuevaPersona);

   alert(eminencias[0].dni);// *muestro el dni en alert
   console.log(eminencias); //* con este console vemos lo que se a agregado en el array
   limpiar(); //* invocacion de la funcion que limpia las cajas de texto
 }

 //!funcion que se encarga de limpiar las cajas texto
 function limpiar() {
   //recorro todos los inputs y los limpio
   for (let i = 0; i < 5; i++) {
     document.getElementsByTagName("input")[i].value = "";
   }
   //limpio el area de texto;
   document.getElementsByTagName("textarea")[0].value = "";
 }

 //! funcion para buscar el objeto a traves del dato nombre ingresado
 function busca() {
   //variable de busqueda por nombre enviad en el formulario
   var nombreBusca = document.getElementsByTagName("input")[0].value;
   var tieneDato = false;


   //Todo: Otro metodo nativo de JS es el find. Pero en este caso devolver el primer elemento encontrado */
   if (nombreBusca != "") {
     tieneDato = true;
     var Buscado = eminencias.find(function (element) {
       return element.nombre == nombreBusca;
     });
   }

   if (!tieneDato) {
     alert("Debe ingresar dato para buscar ");
   }
   console.log(Buscado);


   //Otro: para ver valores de objeto buscado con metodo find
   for (const key in Buscado) {
     document.getElementsByTagName("input")[0].value = Buscado.nombre;
     document.getElementsByTagName("input")[1].value = Buscado.apellidos;
     document.getElementsByTagName("input")[2].value = Buscado.dni;
     document.getElementsByTagName("input")[3].value = Buscado.fechaNaci;
     document.getElementsByTagName("input")[4].value = Buscado.fechaMuer;
     document.getElementsByTagName("textarea")[0].value = Buscado.aportacion;
     document.getElementsByTagName("img")[0].src = Buscado.imagen+".jpg";
   }
 }