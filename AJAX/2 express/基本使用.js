/*
    基本初始化：
        npm init --yes
        npm i express 创建modules 
*/

//1. 引入express
const express = require('express');
//2. 创建应用对象
const app = express();
//3.创建路由规则
//request：请求报文封装
//response：相应报文封装
app.get('/', (request, response) => {

    response.send("HELLO World");
})
//4.启动端口服务
app.listen(8000, () => {
    console.log("服务已启动 8000");
})

//开启：node.当前文件