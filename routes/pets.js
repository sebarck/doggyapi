var express = require('express');
var router = express.Router();
var response = "";

//GET de mascotas asociadas a un ID de usuario
router.get('/', function(req, res, next) {
    //Aca deberia ir la conexion a la base para recuperar los usuarios
    response = '{"mascotas":[{"id":1,"nombre":"Pachorra","descripcion":"Es una perrita salchicha muy inquieta y juguetona"},{"id":2,"nombre":"Coki","descripcion":"Es una perrita coker negra y gordita"}]}';
    res.send(response);
});

module.exports = router;
