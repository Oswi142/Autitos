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
}

export default Autito;