const express = require("express");
const app = express();

app.listen(3000,function(){
    console.log("Server is running and listening in port 3000");
}) 

module.exports = app;