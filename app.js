// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//autor del código: Adelina Escobar Acevedo
//Fecha de creación: 29 de enero de 2025
// objetivos: 
//1.-Solicitar al usuario nombres de personas que se agregan al presionar el botón agregar
//2.- Al presionar el botón amigo secreto, se elige una persona
// *Restricciones: Si la cadena es vacía debe aparecer un mensaje de alerta  pidiendo un nombre válido
//Particularidades:
// los  nombres aparecen debajo del cuadro de texto
// al elegir el nombre, se elimina la lista e indica "el amigo secreto sorteado es: NOMBRE"

let amigos=[];

function agregarAmigo() {
    let nombreUsuario = document.querySelector('#amigo').value;
    console.log(nombreUsuario)
    if (nombreUsuario==''){
        alert("Ingresa un nombre válido");
    }
    else {
        amigos.push(nombreUsuario);
        limpiarCuadro();
        imprimeLista(amigos,'#listaAmigos')
        //document.querySelector('#sortear').removeAttribute('disabled');
    }
}

function limpiarCuadro(){
    valorCuadro = document.querySelector('#amigo').value='';
}

function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random()*(amigos.length))
    console.log(numeroAleatorio);
    mensajeAmigo = "Tu amigo secreto es "+ amigos[numeroAleatorio];
    imprimeLista("",'#listaAmigos')
    imprimeTexto(mensajeAmigo,'#resultado');
}

function imprimeTexto(mensaje,elemento){
    let texto = document.querySelector(elemento);
    texto.innerHTML = mensaje;
}

function imprimeLista(lista,elemento){
    let etiquetas="";
    let texto = document.querySelector(elemento);
    texto.innerHTML = "";
    for (let i=0; i<lista.length; i++){
        etiquetas += '<li>' + lista[i] + '</li>';
    }
    texto.innerHTML = etiquetas;
}