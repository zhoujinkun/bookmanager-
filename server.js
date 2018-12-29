//业务逻辑
const data = require('./data.json');
const fs = require('fs');
const path = require('path');

// 自定义把数据写入文件方法
let writeDataToFile = (res)=>{
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
        if(err){
            res.end('服务器响应错误');
        }else {
            res.redirect('/');
        }
    })
}
//渲染主页面
exports.showIndex = (req,res)=>{
    res.render('index',{list:data});
}
//渲染编辑图书页面
exports.toEditBook = (req,res)=>{
    //获取当前选中书的数据
    let id = req.query.id;
    let book = {};
    data.forEach((item)=>{
        if(id == item.id){
            book = item;
        }
        
    })
    res.render('editBook',book);
}

//编辑图书，更新数据
exports.editBook = (req,res)=>{
    let qdata = req.body;
    //console.log(qdata);
    //数据替换，没有写入文件中
    data.forEach((item)=>{
        if(qdata.id == item.id){
            for(var key in qdata){
                item[key] = qdata[key];
            }
            return;
        }
    })
    
    //  写入文件中
      writeDataToFile(res);
}

//删除图书
exports.removeBook = (req,res)=>{
    let id = req.query.id;
    data.forEach((item,index)=>{
        if(id == item.id){
            data.splice(index,1);
        }
        return;
    })
    //  写入文件中
    writeDataToFile(res);
}
//添加图书页面
exports.toAddBook = (req,res)=>{
    res.render('addBook',{});
}
//添加图书
exports.addBook = (req,res)=>{
    let qdata = req.body;
    //id的求法，把原数据的最大id求出来，和发送的数据组成新的数据，放到data.json文件中
    let newbook = {};
    for(let key in qdata){
        newbook[key] = qdata[key];
    }
    newbook.id = maxId()+1;
    data.push(newbook);
    //数据写入文件
    writeDataToFile(res);
}
//封装一个求最大值的方法
let maxId = ()=>{
    let arr = [];
    data.forEach((item)=>{
        arr.push(item.id);
    })
    return Math.max.apply(null,arr);
}