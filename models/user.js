var db = require('../dbconnection'); //Referencia del modulo para la conexion a la base

var users = {
        getUserById: function (id, callback) {
                return db.query(`SELECT info.*
                                FROM db_doggy_chapitas.users usu, db_doggy_chapitas.contact_infos info
                                WHERE info.id = usu.contact_info_id
                                AND usu.id = ?`, [id], callback);
        }
}

module.exports = users;