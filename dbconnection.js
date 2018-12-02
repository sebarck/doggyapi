var mysql=require('mysql');
 var connection=mysql.createPool({

host:'localhost',
 user:'root',
 password:'Napoli.01',
 database:'doggyapi',
 port:3306

});
 module.exports=connection;