const xhr = require("express");
const app = xhr();
app.all("/server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("akjslfkanfjzbj");
})
app.listen(8000, () => { console.log("Link successfully"); })