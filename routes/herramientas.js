
var express = require('express');
var router = express.Router(); 
const herramientasController = require('../CONTROLLERS/herramientasController'); 
// se comenta para no trabajar con ella

var multer = require('multer');
var fecha= Date.now();

var rutaAlmacen= multer.diskStorage(
{
  destination:function(request, file, callback){
    callback(null,'./public/images');
  },
  filename:function (request, file, callback){
    console.log(file);
    callback(null,fecha+"_"+file.originalname);
  }
}
);
var cargar= multer({storage:rutaAlmacen});
/* GET home page. */
router.get('/',herramientasController.index);
router.get('/crear',herramientasController.crear);
router.post("/",cargar.single("archivo"),herramientasController.guardar);

router.post('/eliminar/:id',herramientasController.eliminar);

router.get('/editar/:id',herramientasController.editar);
// 
// esta linea estaba declarada y ahora trabajaremos con la siguiente linea

// router.get('/', function(req, res, next){
//   res.send('Bienvenido a la pagina principal de Ferreteria');
// });


router.post("/actualizar",cargar.single("archivo"),herramientasController.actualizar);

module.exports = router;

