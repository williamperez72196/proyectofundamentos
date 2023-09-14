var mysql= require('mysql');
var con= mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"ferreteria"
}
);

con.connect(
    (err)=>{  
         if(!err){
             console.log("Conexion Establecida");
             
           }else{
             console.log("Error de Conexion");
           }
      }
);

module.exports=con;
  