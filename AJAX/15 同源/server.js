const express = require("express");
const app = express();
app.get('/home',(request,response)=>{
    response.sendFile(__dirname + '/main.html');
})
app.get('/data',(request,response)=>{
    response.send("User Data")
})
app.listen(9000,()=>{
    console.log("Server Ok");
})
