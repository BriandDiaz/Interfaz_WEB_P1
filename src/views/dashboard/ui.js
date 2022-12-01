/*
Archivo empleado para manejar las uncionalidades del forms y botones de la página web con Js
*/

// formulario de agregar dispositivo
const addForm = document.querySelector("#addForm");


addForm.addEventListener("submit", e => {
    e.preventDefault() // evita que la página recargue
    // almacenamos la data del forms 
    const id = addForm["id"].value;
    const nombre = addForm["nombre"].value;
    // la enviamos al contrato inteligente 
    App.agregarDispositivo(id, nombre);
})