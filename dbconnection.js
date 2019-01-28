var mysql=require('mysql');
 var connection=mysql.createPool({

host:'localhost',
 user:'root',
 password:'Napoli.01',
 database:'db_doggy_chapitas',
 port:3306

});
 module.exports=connection;