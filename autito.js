class Autito
{
  constructor(x, y,direccion) 
  {
    this.x = x;
    this.y = y;
    this.direccion=direccion;
  }

  generarTablero(columnas, filas)
  {
    this.matriz = new Array(filas);
    for (let i = 0; i < filas; i++) 
    {
        this.matriz[i] = new Array(columnas);
    }
  }

  llenarTablero(columnas,filas)
  {
    for (let i = 0; i < filas; i++) 
    {
        for (let j = 0; j < columnas; j++) 
        {
            this.matriz[i][j] = "0";
        }
    }
  }

  posicionarAutito(x,y)
  {
    this.matriz[x][y]='*';
  }

  definirTamañoTablero(comando)
  {
    let cadena = comando.split(',');
    this.generarTablero(+cadena[0],cadena[1]);
    return comando;
  }

  definirPosicionInicial(comando)
  {
    let cadena = comando.split(',');
    this.x = +cadena[0];
    this.y = +cadena[1];
    this.direccion = cadena[2];
    return comando;
  }

  avanzar()
  {
    switch(this.direccion) 
    {
      case "N":
        this.matriz[this.x][this.y++];
        break;
      case "O":
        this.matriz[this.x--][this.y];
        break;
      case "S":
        this.matriz[this.x][this.y--];
        break;
      case "E":
        this.matriz[this.x++][this.y];
        break;
    }
  }

  girarHaciaLaDerecha()
  {
    switch(this.direccion) 
    {
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

  girarHaciaLaIzquierda()
  {
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

  confirmarAvance(comando)
  {
    if (comando=="A")
    {
      this.avanzar();
    }
    if(comando=="D")
    {
      this.girarDerecha();
    }
    if(comando=="I")
    {
      this.girarIzquierda();
    }
    return this.x+","+this.y+","+this.direccion;
  }
}

export default Autito;

class Auto
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

  ingresarPosicionInicial(comando){
  let cadena = comando.toString().split(',');
  asignarValores(cadena)
  {
    this.x = +cadena[0];
    this.y = +cadena[1][0];
    this.direccion = cadena[1][1];
  }

  ingresarPosicionInicial(comando)
  {
    let cadena = comando.toString().split(',');
    this.asignarValores(cadena);
    return comando;
  }

  definirTamañoTablero(comando)
  {
    let cadena = comando.split(',');
    this.generarTablero(+cadena[0],cadena[1]);
    return comando;
  }

  avanzar()
  {
      switch(this.direccion) {
        case "N":
          if(this.y<this.columnas){
          this.matriz[this.x][this.y++];
          }
          break;
        case "O":
          if(this.x>0){
            this.matriz[this.x--][this.y];
          }
          break;
        case "S":
          if(this.y>0){
          this.matriz[this.x][this.y--];
          }
          break;
        case "E":
          if(this.x<this.filas){
          this.matriz[this.x++][this.y];
          }
          break;
      }
  }
    girarHaciaLaDerecha()
    {
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
  girarHaciaLaIzquierda()
  {
    switch(this.direccion) {
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

  ejecutar(comando)
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
    return this.x+","+this.y+this.direccion;
  }

  ejecutarComandos(comandos)
  {
    for(let i =0;i<comandos.length;i++){
      this.ejecutar(comandos[i]);
    }
    return this.x+","+this.y+this.direccion;
  }

  confirmarAvance(instrucciones)
  {
    let comandos = instrucciones.split('/');
    this.ingresarTamanioTablero(comandos[0]);
    this.ingresarPosicionInicial(comandos[1]);
    this.ejecutarComandos(comandos[2]);
    return this.x+","+this.y+this.direccion;
  }
}
export default Autito;