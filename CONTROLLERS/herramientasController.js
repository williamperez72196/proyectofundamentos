var conexion=require('../config/conexion');
var herramientas=require('../model/herramientas');
var borrar= require("fs");

   module.exports={

      index: function(req, res) {

      //  con.query('SELECT * FROM herramientas', function (err, datos) {
      //    console.log(datos);
      //  });

          herramientas.obtener(conexion,function(err,datos){
             console.log(datos);
             res.render('herramientas/index', { title: 'Aplicacion', herramientas:datos});
        });
     },
       crear:function(req,res) {
         res.render('herramientas/crear');
       },
       guardar:function (req,res) {
         console.log(req.body);
         console.log(req.file.filename);

         herramientas.insertar(conexion,req.body,req.file,function (err){
            res.redirect('/herramientas');
        
    });

  },
  eliminar:function (req,res) {
    console.log("Recepcion de datos");
    console.log(req.params.id);

    herramientas.retornarDatosID(conexion,req.params.id,function (err,registros) {
      var nombreImagen="public/images/"+(registros[0].imagen);
      if(borrar.existsSync(nombreImagen)){
        borrar.unlinkSync(nombreImagen);
      }
      herramientas.borrar(conexion,req.params.id,function (err) {
          res.redirect('/herramientas');
      });
  });
},
editar:function (req,res) {
  res.render("herramientas/editar")
        herramientas.retornarDatosID(conexion,req.params.id,function (err,registros) {
               console.log(registros[0]);
               res.render('herramientas/editar',{herramienta:registros[0]});
        });
      },    
  actualizar:function name(req,res) {

         console.log(req.body.nombre);

        if(req.file){
        if(req.file.filename){

          herramientas.retornarDatosID(conexion,req.body.id,function (err,registros) {
            var nombreImagen="public/images/"+(registros[0].imagen);
            if(borrar.existsSync(nombreImagen)){
              borrar.unlinkSync(nombreImagen);
            }
            herramientas.actualizarArchivo(conexion,req.body,req.file,function (err) { });           
            
          });
      }
  }
  if(req.body.nombre){
    herramientas.actualizar(conexion,req.body,function (err) {            
    });

      res.redirect('/herramientas');

    }

  }
}
   
    