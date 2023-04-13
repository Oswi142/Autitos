import Autito from "./autito.js";
describe("Sumar", () => {
    let auto = new Autito(0,0,'N');
    it("debe devolver la posicion inicial del autito", () => {
      expect(auto.definirPosIni("3,2,N")).toEqual("3,2,N");
    });
    it("debe crear un tablero 3x3", () => {
      expect(auto.definirTamTab("5,5")).toEqual("5,5");
    });
    it("debe avanzar una posicion en Y porque esta en Norte", () => {
    expect(auto.confirmar("A")).toEqual("3,3,N");
    });  
    it("debe de girar a la derecha cambiando la posicion a este debido a que apuntamos al norte", () => {
    expect(auto.cofirmar("D")).toEqual("3,3,E");
    });
    it("debe de girar a la izquiera cambiando la posicion a norte debido a que apuntamos al este", () => {
    expect(auto.confirmar("I")).toEqual("3,3,N");
    });
    it("debe de girar a la izquiera cambiando la posicion a oeste debido a que apuntamos al norte", () => {
    expect(auto.confirmar("I")).toEqual("3,3,O"); 
    })
    it("debe de reducir una casilla en la posicion X ya que avanzamos con direccion al oeste", () => {
    expect(auto.confirmar("A")).toEqual("2,3,O"); 
    })
    it("debe de girar a la izquiera cambiando la posicion a sur debido a que apuntamos al oeste", () => {
    expect(auto.confirmar("I")).toEqual("2,3,S"); 
    })
    it("debe de reducir una casilla en la posicion Y ya que avanzamos con direccion al sur", () => {
    expect(auto.confirmar("A")).toEqual("2,2,S"); 
    })
    it("debe de girar a la izquiera cambiando la posicion a este debido a que apuntamos al sur", () => {
    expect(auto.confirmar("I")).toEqual("2,2,E"); 
    })
    it("debe de aumentar una casilla en la posicion X ya que avanzamos con direccion al este", () => {
    expect(auto.confirmar("A")).toEqual("3,2,E"); 
    })
    it("debe de girar a la derecha cambiando la posicion a sur debido a que apuntamos al este", () => {
    expect(auto.confirmar("D")).toEqual("3,2,S");
    });
    it("debe de reducir una casilla en la posicion y ya que avanzamos con direccion al sur", () => {
    expect(auto.confirmar("A")).toEqual("3,1,S"); 
    })
    it("debe de reducir una casilla en la posicion y ya que avanzamos con direccion al sur pero en 2 posiciones", () => {
    expect(auto.confirmar("J")).toEqual("3,2,S"); 
    })
  });