//路由渲染index.art
const express = require('express');
const router = express.Router();
const service = require('./server');
//渲染主页
router.get('/',service.showIndex);
//渲染编辑图书页面
router.get('/toEditBook',service.toEditBook);

//编辑图书更新数据
router.post('/editBook',service.editBook);

//删除图书
router.get('/toRemoveBook',service.removeBook);

// 添加图书页面
router.get('/toAddBook',service.toAddBook);

//添加图书
router.post('/addBook',service.addBook);
module.exports = router;