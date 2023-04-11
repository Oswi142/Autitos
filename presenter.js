import Autito from "./autito.js";

const div=document.querySelector("#divPosInicial");
const labelPosFinal=document.querySelector("#posicion-final");
const form=document.querySelector("#formulario");
const comandos=document.querySelector("#comandos-input")
let Auto=new Autito(0,0,"N");
form.addEventListener("submit", (event) => {
event.preventDefault();
div.innerHTML = "<p>" + auto.ejecutarInstrucciones("5,5/3,3E/AADAADADDA") + "</p>";
let cadena = comandos.value.split('/');
console.log(cadena);
labelPosFinal.innerHTML = "<p>" + auto.ejecutarInstrucciones(comandos.value) + "</p>";
});