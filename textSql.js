//引入操作数据库模块
const sm = require('./sqlModule');
//查询数据
/* let sql = 'select * from book where id=?';
let data = [1];
sm.sqlModule(sql,data,(result)=>{
    console.log(result);
}) */
//添加数据
/* let sql = 'insert into book set ?';
let data = {
    name:'一千零一夜',
    author:'**',
    category:'文学、艺术',
    description:'富有哲理的故事'
}
sm.sqlModule(sql,data,(result)=>{
    console.log(result);
}) */
//删除数据
/* let sql = 'delete from book where id = ?';
let data = [49];
sm.sqlModule(sql,data,(result)=>{
    console.log(result);
}) */
//更新数据
let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = ['西游记','吴承恩','艺术','唐僧取经之路','2'];
sm.sqlModule(sql,data,(result)=>{
    console.log(result);
})