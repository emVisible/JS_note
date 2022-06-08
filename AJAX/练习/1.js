const express = require("express");
const app = express();
app.get('/server', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("Change Successfully");
})
app.listen(8000, () => {
    console.log("Server running...");
})