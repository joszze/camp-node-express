require('dotenv').config()
let express = require('express');
let app = express();


console.log("Hello World");

app.use(function(req,rest,next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next()
})
app.use("/public", express.static(__dirname + "/public"))



app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json",function(req,res){  
    let m = "Hello json"  
    res.json({"message" : (process.env.MESSAGE_STYLE === "uppercase" ? m.toUpperCase(): m)})
})

app.get('/now', function(req, res) {
    req["time"] = new Date();
    next();
  }, function(req, res) {
    res.json({"time":req.time.toString()})
  });

app.get("/:word/echo",function(req,res,next){
    res.json({"echo":req.params.word})
})

app.get("/name",function(req,res){
    res.json({"name":req.query.first+ " " + req.query.last})
})
7




























 module.exports = app;
