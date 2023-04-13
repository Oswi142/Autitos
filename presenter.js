import Autito from "./autito";

const form=document.querySelector("#form");
const labelPosFinal=document.querySelector("#pos-final");
const labelPosInicial=document.querySelector("#pos-inicial");
const labelComandos=document.querySelector("#comandos");
const comandos=document.querySelector("#comandos-input")

let auto=new Autito(0,0,"N");

form.addEventListener("submit", (event) => 
{
  event.preventDefault();
  let cadena = comandos.value.split('/');
  console.log(cadena);
  labelPosInicial.innerHTML = cadena[1];
  labelComandos.innerHTML = cadena[2];
  labelPosFinal.innerHTML =  auto.confirmarInstrucciones(comandos.value) ;
});