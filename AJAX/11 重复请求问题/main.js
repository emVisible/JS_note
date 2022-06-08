const xhr = require("express");
const app = xhr();
let layout = 3000;
app.all("/server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const data = {
        name: "Yang22"
    }
    let str = JSON.stringify(data);
    response.send(str);
})
app.get("/delay", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        response.send(`Delay ${layout}s`);
    }, layout);
})
app.get("/ie", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("IE running...")
})
app.listen(8000, () => { console.log("Link successfully"); })