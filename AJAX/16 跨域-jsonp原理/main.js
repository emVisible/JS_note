const request = require("express");
const app = request();
let layout = 3000;

app.get("/jsonp-server", (request, response) => {
    const data = {
        name: "JsonpServer Send OK"
    };

    //进行JSON转换--将数据转换为对象
    let str = JSON.stringify(data);//给client返回的结果数据
    response.end(`handle(${str})`);
    //返回结果的形式是函数调用，函数的参数就是要给client返回的结果数据
    // response.send('console.log("Across OK")')
    //调用的函数需要在client前端提前声明，不然会报错
    
})

app.listen(8000, () => { console.log("Link successfully"); })