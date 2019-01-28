var express = require('express');
var router = express.Router();
var user = require('../models/user'); //Referencia al modelo users de donde se recupera la query a ejecutar

/* GET de datos de usuario por email */
router.get('/:id?', function (req, res, next) {
  if (req.query.id) {
    user.getUserById(req.query.id, function (err, rows) {
      if (err)
        res.json(err);
      else
        res.json(rows);
    });
  }
  else
    res.status(404).send("Hubo un problema en la solicitud. Revisá que estés consultando correctamente por ID de usuario");
});

module.exports = router;
