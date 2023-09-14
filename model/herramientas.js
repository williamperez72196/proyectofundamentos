module.exports={
  obtener:function (conexion,funcion) {
    conexion.query("SELECT * FROM herramientas",funcion);
  },
  insertar:function (conexion,datos,archivos,funcion) {
    conexion.query("INSERT INTO herramientas ( nombre, imagen) VALUES (?, ?) ",[datos.nombre, archivos.filename],funcion);

  },
  retornarDatosID:function (conexion,id,funcion) {

    conexion.query("SELECT * FROM herramientas WHERE id=?",[id],funcion); 
  },
  borrar:function (conexion,id,funcion) {
    conexion.query("DELETE FROM herramientas WHERE id=?",[id],funcion);
  },
  actualizar:function (conexion,datos,funcion) {
  conexion.query("UPDATE herramientas SET nombre=? WHERE id=?) ",[datos.nombre, datos.id],funcion);

},
actualizarArchivo:function (conexion,datos,archivo,funcion) {
  conexion.query("UPDATE herramientas SET imagen=? WHERE id=? ",[archivo.filename,datos.id],funcion);;
}

}