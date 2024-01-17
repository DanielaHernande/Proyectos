// Boton para crear un mensaje en la consola
const btnCrear = document.getElementById("btnCrear");

// Boton para cambiar el texto del parrafo
const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const parrafo = document.getElementById("parrafo");

// Boton para cambiar el color del fondo del div
const div = document.querySelector("div");
const texto = document.getElementById("texto");

// Boton para agregar un elemento a la lsita
const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btnAgregar");

// Formulario 
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const btnEnviar = document.getElementById("btnEnviar");

// Imagenes 
const divImagenes = document.getElementById("imagenes");


// Eventos
btnCrear.addEventListener("click", () => {
    console.log("Presionaste el boton Crear Mensaje");
});

btnCambiarTexto.addEventListener("click", () => {
    parrafo.textContent = "Hola";
    console.log("Texto cambiado");
});

div.addEventListener("mouseover", () => {
    texto.style.backgroundColor = "red";
    console.log("Fondo del texto cambiado a color rojo");
});

btnAgregar.addEventListener("click", () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Elemento";
    lista.appendChild(nuevoElemento); 
});

lista.addEventListener("click", (event) => {

    const elementoClicado = event.target;

    if (elementoClicado.tagName === "LI") {
        lista.removeChild(elementoClicado);
        console.log("Elemento eliminado");
    }
});

//--------------------------Formulario-----------------------

btnEnviar.addEventListener("click",(event) => {
    event.preventDefault();

    if(nombre.value !== "" && email.value !== "" && contraseña.value !== ""){
        alert("Formulario enviado exitosamente");
        console.log("Formulario enviado exitosamente");

    } else {

        alert("Por favor ingrese los datos en el formulario.");
        console.log("Por favor ingrese los datos en el formulario.")
    }
});

//---------------------------------------------------------------------------------------------------------

// Galería de Imágenes:
// Crea una galería de imágenes con miniaturas. Al hacer clic en una miniatura,
//  muestra la imagen a tamaño completo en otro lugar
//  de la página. Utiliza el DOM para gestionar este cambio dinámico de imágenes.

divImagenes.addEventListener("click", (event) => {
    const imagenclick = event.target;

    imagenclick.style.width = "100%"
    imagenclick.style.height = "100%"

    console.log(`Click en el elemento: ${imagenclick}`);

});


// --------------------- Fecha y Hora ----------------

let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();

let hora = fecha.getHours()
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();



alert(`El dia es ${dia} del mes ${mes} del año ${año}, con una hora de ${hora} con ${minutos} minutos y ${segundos} segundos`);
console.log(`El dia es ${dia} del mes ${mes} del año ${año}, con una hora de ${hora} con ${minutos} minutos y ${segundos} segundos`);




