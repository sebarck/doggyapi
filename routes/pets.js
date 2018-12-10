var express = require('express');
var router = express.Router;

//GET de mascotas asociadas a un ID de usuario
router.get('/pets', function(req, res, next) {
    //Aca deberia ir la conexion a la base para recuperar los usuarios
    Response = '{"mascotas":{"mascota":{"id":1,"nombre":"Pachorra","descripcion":"Es una perrita salchicha muy inquieta y juguetona"}}}';
    res.send(Response);
})

module.exports = router;