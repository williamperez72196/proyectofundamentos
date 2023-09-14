var express = require('express');
var router = express.Router(); 
// const herramientasController = require('../CONTROLLERS/herramientasController'); 
// se comenta para no trabajar con ella


/* GET home page. */
// router.get('/', herramientasController.index); // 
// esta linea estaba declarada y ahora trabajaremos con la siguiente linea

router.get('/', function(req, res, next){
  res.send('Bienvenido a la pagina principal de Ferreteria');
});

module.exports = router;
