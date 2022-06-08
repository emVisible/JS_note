const express = require("express");
const app = express();
app.post("/server",(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send("POST DONE");
})
app.listen(8000,()=>{
    console.log("POST RUNNING...");
})