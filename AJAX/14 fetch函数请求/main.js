//
const request = require("express");
const app = request();
let layout = 3000;

//对全部
app.all("/server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const data = {
        name: "Yang22"
    }
    let str = JSON.stringify(data);
    response.send(str);
})
//对axios
app.all("/axios-server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    const data = { name: "yang" };
    response.send(JSON.stringify(data));
    
})
//对fetch
app.all("/fetch-server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    const data = { name: "yang" };
    response.send(JSON.stringify(data));
})
//对jquery
app.all("/jquery-server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    const data = { name: "yang" };
    response.send(JSON.stringify(data));
})
//解决重复问题
app.all("/delay", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    setTimeout(() => {
        response.send(`Delay ${layout}s`);
    }, layout);
})
//解决ie
app.get("/ie", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("IE running...")
})


app.listen(8000, () => { console.log("Link successfully"); })