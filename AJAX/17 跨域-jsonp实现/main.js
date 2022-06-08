const request= require("express");
let app = request();
app.all("/check-username",(request,response)=>{
    const data = {
        exist: 1,
        message:"Already exist"
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})
app.listen(8000,()=>{console.log("Server Ok");})