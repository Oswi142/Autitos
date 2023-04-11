class Autito
{
  constructor(x, y,direccion) {
    this.x = x;
    this.y = y;
    this.direccion=direccion;
  }
  generarTablero(filas, columnas)
  {
    this.filas = filas;
    this.columnas=columnas;
    this.matriz = new Array(filas);
    for (let i = 0; i < filas+1; i++) 
    {
        this.matriz[i] = new Array(columnas);
    }
  }
  
  asignarValores(cadena){
    this.x = +cadena[0];
    this.y = +cadena[1][0];
    this.direccion = cadena[1][1];
  }

  definirPosicionInicial(comando){
    let cadena = comando.toString().split(',');
    this.asignarValores(cadena);
    return comando;
  }

  definirTamanioTablero(comando){
    let cadena = comando.split(',');
    this.generarTablero(+cadena[0],cadena[1]);
    return comando;
  }

  avanzar()
  {
      switch(this.direccion) 
      {
        case "N":
          if(this.y<this.columnas){
          this.matriz[this.x][this.y++];
          }
          if(this.y<this.columnas) this.matriz[this.x][this.y++];
          break;
        case "O":
          if(this.x>0){
            this.matriz[this.x--][this.y];
          }
          if(this.x>0) this.matriz[this.x--][this.y];   
          break;
        case "S":
          if(this.y>0){
          this.matriz[this.x][this.y--];
          }
          if(this.y>0) this.matriz[this.x][this.y--];
          break;
        case "E":
          if(this.x<this.filas){
          this.matriz[this.x++][this.y];
          }
          if(this.x<this.filas)this.matriz[this.x++][this.y];
          break;
      }
  }

  confirmarAvance(comando)
  {
    if (comando=="A"){
      this.avanzar();
    }
    if(comando=="D"){
      this.girarDerecha();
    }
    if(comando=="I"){
      this.girarIzquierda();
    }
    if (comando=="A") this.avanzar();
    if(comando=="D")this.girarDerecha();
    if(comando=="I")this.girarIzquierda();
    return this.x+","+this.y+this.direccion;
  }

  avanzarComandos(comandos)
  {
    for(let i =0;i<comandos.length;i++){
      this.confirmarAvance(comandos[i]);
    }
    return this.x+","+this.y+this.direccion;
  }

  confirmarAvanceInstrucciones(instrucciones)
  {
    let comandos = instrucciones.split('/');
    this.definirTamanioTablero(comandos[0]);
    this.definirPosicionInicial(comandos[1]);
    this.avanzarComandos(comandos[2]);
    return this.x+","+this.y+this.direccion;
  }
}
export default Autito;