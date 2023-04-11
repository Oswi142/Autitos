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
}

export default Autito;