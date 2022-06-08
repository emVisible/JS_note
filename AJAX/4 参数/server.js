const express = require('express');
const app = express();

app.get('/server', (request, response) => {
    //设置相应头
    response.setHeader('Access-Control-Allow-Origin', '*');//设置允许跨域

    //设置相应体
    response.send("HELLO World");
})
// get里的参数'/server' 指的是前端的页面交互的时候，当客户端向服务端请求时，
// 若URL路径为/server 则会执行回调函数，并且由response相应

app.listen(8000, () => {
    console.log("服务已启动 8000");
})