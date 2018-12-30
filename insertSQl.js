//作用是把data.json文件的内容转成sql语句
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'data.json'),'utf8',(err,data)=>{
    if(err)return;
    let dataObj = JSON.parse(data);
    //console.log(dataObj);
     dataObj.forEach((item)=>{
        let sql = `INSERT INTO book(name,author,category,description) VALUES('${item.name}','${item.author}','${item.category}','${item.desc}');`
        console.log(sql);
    }) 
    
})