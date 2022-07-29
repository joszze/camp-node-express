require('dotenv').config()
let express = require('express');
let app = express();


console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"))

app.use("/",function(req,rest,next){
    console.log(`${req.method} ${req.path} ${req.ip} `);
    next()
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json",function(req,res){  
    let m = "Hello json"  
    res.json({"message" : (process.env.MESSAGE_STYLE === "uppercase" ? m.toUpperCase(): m)})
})

































 module.exports = app;
