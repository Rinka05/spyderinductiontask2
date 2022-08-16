const express = Noderequire("express");
const app = express();
const mongoose = Noderequire("mongoose");
const bodyparser = Noderequire("body-parser");
let ejs = Noderequire('ejs');


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"main page.html")
});

app.post("/home" ,(req ,res)=>{
    res.sendFile(__dirname+"login.html")
});

app.listen(3000,function(){
    console.log("server is running on port 3000")
})
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/secretsantadb",{useNewUrlParser:true});

// user schema
const santasdb = {
    name: String,
    contactnum: String,
    address: String,
    Date: String,
    budget:Number,
    email: String,
    password: String
}
app.post("/", function (req, res) {
    let newdata = new data({
        name: req.body.name,
        contactnum: req.body.phoneno,
        address: req.body.address,
        date: req.body.date,
        budget:req.body.budget,
        email: req.body.email,
        password: req.body.password
    })
    newdata.save();
    
    res.redirect("/")
})




// mongoose model based on schema
// const santas = mongoose.model("santas" ,santasdb);
// app.get("/.exchange.html" , function(req,res){
//     res.render("santas",{newsantas :name})
// })
app.post("/login" ,function(req,res){
    res.senndFile("/signup_succesful.html")
});
app.post("/exchange" ,function(req ,res){
    res.render("santas",{newsantas: name} ,{newsantas:budget});
});

const santa1 = new santasdb({
    name:"santa1",
    budget:400
});
const santa2 = new santasdb({
    name:"santa2",
    budget:300
});
const defaultsanta =[santa1 ,santa2];
santasdb.insertMany(defaultsanta ,function(req ,res){
    res.send("/.exchange.html")
});
const defaultbudget =[budget1 ,budget2];
santasdb.insertMany(defaultbudget ,(req,res)=>{
    res.send("/exchange.html");
});
// let halfdefaultsanta = Math.floor(Math.random)*(defaultsanta.length/2);

// insert budget in an array and make budget of first person = bgt of last person and so on
// after exchange

defaultsanta[i] === defaultbudget[defaultbudget.length-i];
budget(defaultsanta[i] == defaultsanta[n-i]);
















