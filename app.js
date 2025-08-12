// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array 
let almacenAmigos = [];

//funcion para agregar texto
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//funcion para agregar amigo texto con boton 
function agregarAmigo (){

let amigosUsuario = document.getElementById ('amigo').value;
console.log(amigosUsuario);
//if de condicion por si no tiene nada el input 
if (amigosUsuario === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }
//almacena  nombre de amigos en el array 
    almacenAmigos.push(amigosUsuario);
    console.log("Lista de amigos:", almacenAmigos);

    // Muestra todos los nombres en el <p>
    asignarTextoElemento("p", `Amigos: ${almacenAmigos.join(", ")}`);

    // Limpia el input
    document.getElementById('amigo').value = "";
}
//funcion para sortear y si no hay amigos lo notifica. 
function sortearAmigo() {
    if (almacenAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
//seleccion de un nombre random 
    let indiceAleatorio = Math.floor(Math.random() * almacenAmigos.length);
    let nombreGanador = almacenAmigos[indiceAleatorio];

    alert( `Ganador: ${nombreGanador}`);
}