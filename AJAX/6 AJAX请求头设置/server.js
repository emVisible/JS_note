const express = require("express");
const app = express();
app.post("/server",(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","*");//设置后端：接收所有类型请求
    response.send("POST DONE");
})
app.listen(8000,()=>{
    console.log("POST RUNNING...");
})