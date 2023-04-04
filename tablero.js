function crearTabla() {
  var filasInput = document.getElementById("filas");
  var columnasInput = document.getElementById("columnas");
  var filas = filasInput.value;
  var columnas = columnasInput.value;
  var tabla = document.createElement("table");
  for (var i = 0; i < filas; i++) {
    var fila = document.createElement("tr");
    for (var j = 0; j < columnas; j++) {
      var columna = document.createElement("td");
      fila.appendChild(columna);
    }
    tabla.appendChild(fila);
  }
  var contenedor = document.getElementById("tabla");
  contenedor.appendChild(tabla);
}