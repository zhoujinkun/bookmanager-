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
//  添加数据
let sql = 'insert into book set ?';
let data = {
    name:'vue',
    author:'尤语溪',
    category:'js框架',
    description:'vue适合所有开发人'
}
connection.query(sql,data,function (error, results, fields) {
  if (error) throw error;
  //console.log(results);
  if(results.affectedRows>0){
      console.log('插入成功');
  }
});
 //关闭数据库
connection.end();