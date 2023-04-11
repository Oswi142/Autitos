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

  

}

export default Autito;