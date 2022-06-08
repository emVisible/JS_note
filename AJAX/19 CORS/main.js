const express = require("express");
const app = express();
app.all("/cors-server", (request, response) => {
    
    //必要条件：设置跨域头
    //如果限制白名单，第二个参数就设置固定网页
    response.setHeader("Access-Control-Allow-Origin", "*");
    //一般还会有两个方法：
    response.setheader("Access-Control-Allow-Origin","*");
    response.setheader("Access-Control-Allow-method","*");


    response.send("cors server OK1");
})
app.listen(8000, () => {
    console.log("Link Successfully");
})