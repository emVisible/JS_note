const xhr = require("express");
const app = xhr();
app.all("/server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const data = {
        name: "Yang22"
    }
    let str = JSON.stringify(data);
    response.send(str);
})
app.listen(8000, () => { console.log("Link successfully"); })