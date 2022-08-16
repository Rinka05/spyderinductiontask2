const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/secretsantadb",{useNewUrlParser:true});

// user schema
const santasdb = {
    name: String,
    contactnum: String,
    address: String,
    Date: String,
    email: String,
    password: String
}
app.post("/", function (req, res) {
    let newdata = new data({
        name: req.body.name,
        contactnum: req.body.phoneno,
        address: req.body.address,
        date: req.body.date,
        email: req.body.email,
        password: req.body.password
    })
    newdata.save();
    
    res.redirect("/")
})
// mongoose model based on schema
const santas = mongoose.model("santas" ,santasdb);
app.get("/.exchange.html" , function(req,res){
    res.render("santas",{newsantas :name})
})
app.post("/exchange.html" ,function(req ,res){
    res.render("santas",{newsantas: name})
})

const santa1 = new santas({
    name:"santa1"
})
const santa2 = new santas({
    name:"santa2"
})
const defaultsanta =[santa1 ,santa2];
santas.insertMany(defaultsanta ,function(req ,res){
    res.send("/.exchange.html")
})






