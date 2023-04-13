class Autito
{
  constructor(x, y,direccion) 
  {
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

  asignarValores(cadena)
  {
    try
    {
    this.x = +cadena[0];
    this.y = +cadena[1][0];
    this.direccion = cadena[1][1];
    }
    catch
    {
      alert('Valores erroneos');
    }
  }

  definirPosIni(comando)
  {
    let cadena = comando.toString().split(',');
    this.asignarValores(cadena);
    return comando;
  }

  definirTamTab(comando)
  {
    try{
    let cadena = comando.split(',');
    this.generarTablero(+cadena[0],cadena[1]);
    return comando;}
    catch{
      alert('Valores erroneos');
    }
  }
  
  avanzar()
  {
      switch(this.direccion) 
      {
        case "N":
          if(this.y<this.columnas) this.matriz[this.x][this.y++];
          if(this.y>this.columnas) this.matriz[this.filas][this.y++];
          break;
        case "O":
          if(this.x>0) this.matriz[this.x--][this.y]; 
          if(this.x<0) this.matriz[this.columnas][this.y];   
          break;
        case "S":
          if(this.y>0) this.matriz[this.x][this.y--];
          if(this.y<0) this.matriz[this.x][this.filas];
          break;
        case "E":
          if(this.x<this.filas)this.matriz[this.x++][this.y];
          if(this.x>this.filas)this.matriz[this.x++][this.columnas];
          break;
      }
  }

  girarHaciaLaIzquierda(){
    switch(this.direccion) 
    {
      case "E":
        this.direccion="N";
        break;
      case "N":
        this.direccion="O";
        break;
      case "O":
        this.direccion="S";
        break;
      case "S":
        this.direccion="E";
        break;
    }
  }

  girarHaciaLaDerecha(){
    switch(this.direccion) {
      case "N":
        this.direccion="E";
        break;
      case "E":
        this.direccion="S";
        break;
      case "S":
        this.direccion="O";
        break;
      case "O":
        this.direccion="N";
        break;     
    }
  }

  jump()
  {
      switch(this.direccion) 
      {
        case "N":
          if(this.y<this.columnas) this.matriz[this.x][this.y+2];
          break;
        case "O":
          if(this.x>0) this.matriz[this.x-2][this.y];   
          break;
        case "S":
          if(this.y>0) this.matriz[this.x][this.y-2];
          break;
        case "E":
          if(this.x<this.filas)this.matriz[this.x+2][this.y];
          break;
      }
  }

  confirmar(comando){
    if(comando=="A")this.avanzar();
    if(comando=="J")this.jump();
    if(comando=="D")this.girarHaciaLaDerecha();
    if(comando=="I")this.girarHaciaLaIzquierda();
    return this.x+","+this.y+","+this.direccion;
  }

  confirmarComandos(comandos){
    for(let i =0;i<comandos.length;i++){
      this.confirmar(comandos[i]);
    }
    return this.x+","+this.y+","+this.direccion;
  }

  confirmarInstrucciones(instrucciones){
    let comandos = instrucciones.split('/');
    this.definirTamTab(comandos[0]);
    this.definirPosIni(comandos[1]);
    this.confirmarComandos(comandos[2]);
    return this.x+","+this.y+","+this.direccion;
  }
}

export default Autito;
