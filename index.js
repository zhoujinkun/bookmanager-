// 文件入口
const express = require('express');
const app = express();
const template = require('art-template');
const bodyParser = require('body-parser');
const router = require('./router');
const path = require('path');
//启动静态资源,此方法是把网页写死的方式，最易懂,但是可以请求样式类文件css等并且文件路径必须带有/www
app.use('/www',express.static('public'));
// 设置模板路径
app.set('views',path.join(__dirname,'views'));
// 设置模板引擎
app.set('view engine','art');
// 让express兼容art-template
app.engine('art',require('express-art-template'));
//处理post json数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(router);
app.listen(3000,()=>{
    console.log('app is running');
})