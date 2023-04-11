import Autito from "./autito.js";

const labelPosFinal=document.querySelector("#posicion-final");
const labelPosInicial=document.querySelector("#posicion-inicial");
const labelComandos=document.querySelector("#comandos");
const form=document.querySelector("#formulario");
const posInicial=document.querySelector("#posicion-inicial")
const comandos=document.querySelector("#comandos-input")
const posFinal=document.querySelector("#posicion-final")
let Auto=new Autito(0,0,"N");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cadena = comandos.value.split('/');
  console.log(cadena);
  labelPosInicial.innerHTML = cadena[1];

  labelComandos.innerHTML = cadena[2];
  labelPosFinal.innerHTML =  auto.ejecutarInstrucciones(comandos.value) ;
});