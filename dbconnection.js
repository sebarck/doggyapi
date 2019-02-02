var mysql=require('mysql');
 var connection=mysql.createPool({

host:'mysql.decseguros.com.ar',
 user:'db_doggychapitas',
 password:'TSr4D8GzxLSmOCBUrw17',
 database:'db_doggy_test',
 port:3306

});
 module.exports=connection;