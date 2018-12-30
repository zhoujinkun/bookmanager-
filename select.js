//使用node操作数据库必须先有第三方依赖mysql才行
//npm install mysqljs/mysql;
const mysql = require('mysql');
// 创建链接数据库
const connection = mysql.createConnection({
  host     : 'localhost', //主机地址
  user     : 'root',  //数据库主机名
  password : '123456',//密码
  database : 'mybook' //链接的数据库名字
});
//  连接数据库
connection.connect();
//  查询数据指定数据
/* let sql = 'select * from book where id=?';
let data = [44] 
connection.query(sql,data,function (error, results, fields) {
    if (error) throw error;
    console.log(results[0]);
  });*/
// 查询所有数据
let sql = 'select * from book';

connection.query(sql,function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 //关闭数据库
connection.end();