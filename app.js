// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let almacenAmigos = [];


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo (){

let amigosUsuario = document.getElementById ('amigo').value;
console.log(amigosUsuario);

if (amigosUsuario === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    almacenAmigos.push(amigosUsuario);
    console.log("Lista de amigos:", almacenAmigos);

    // Muestra todos los nombres en el <p>
    asignarTextoElemento("p", `Amigos: ${almacenAmigos.join(", ")}`);

    // Limpia el input
    document.getElementById('amigo').value = "";
}

function sortearAmigo() {
    if (almacenAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * almacenAmigos.length);
    let nombreGanador = almacenAmigos[indiceAleatorio];

    alert( `Ganador: ${nombreGanador}`);
}