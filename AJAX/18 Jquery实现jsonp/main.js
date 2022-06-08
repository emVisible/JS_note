const request = require("express");
const app = request();
app.all("/jquery-jsonp",(request,response)=>{
    const data = {
        name:"yang",
        city: ["杭州","河北"]
    };
    let str = JSON.stringify(data);

    //接收callback参数
    let callback = request.query.callback;//取得的是地址中callback=?的值
    response.end(`${callback}(${str})`);
    //注意这里的写法，意味着上边获取的callback值就是回调函数的名称
})
app.listen(8000,()=>{
    console.log("Link Ok");
})