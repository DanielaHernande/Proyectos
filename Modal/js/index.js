// Selectores
const btnAbrirModalInfo = document.querySelector("#btnAbrirModalInfo");
const modalInfo = document.querySelector("#modalInfo");

const btnAbrirModalCarrito = document.querySelector("#carrito");
const modalCarrito = document.querySelector("#modal-carrito");

// Eventos de escucha
//Modal Carrito
if(window.location.href === "http://127.0.0.1:5500/informacionProducto.html")
{
    // Evento de escucha para el boton de abrir el modal de la informacion
    btnAbrirModalInfo.addEventListener("click", () => {

        // Funcion qye se activara cuando se precione el boton del modal para abrir la informacion
        modalInformacion();
    });
}

if(window.location.href === "http://127.0.0.1:5500/index.html")
{
    // Modal Informacion
    // Evento de escucha para el boton de abrir el modal del carrito
    btnAbrirModalCarrito.addEventListener("click", () => {

        // Funcion que se activara cuando se precione el boton del modal para abrir el carrito
        modalCart();
    });
}

// Funciones 

// Funcion Modal Informacion
function modalInformacion() {
    
    // Estilo que se le aplicara al modal despues de añadirle la clase para el estilo
    modalInfo.classList.add("modal-animation-open")
};

// Funcion Modal Carrito
function modalCart() {

    // Estilo que se le aplicara al modal despues de añadirle la clase para el estilo
    modalCarrito.classList.add("modal-animation-open")
};

