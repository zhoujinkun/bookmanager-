const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sm = require('./sqlModule');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.post('/login',(req,res)=>{
    let param = req.body;
    let sql = 'select count(*) as total from user where username=? and password=?';
    let data = [param.username,param.password];
    sm.sqlModule(sql,data,(result)=>{
       if(result[0].total == 0){
           
           res.redirect('/login.html');
       }else {
          
           res.redirect('/');
       }
    })
})
app.listen(3000,()=>{
    console.log('loading...');
})