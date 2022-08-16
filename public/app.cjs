const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
var passwordHash = require('password-hash');

var hashedPassword = passwordHash.generate('password123');

console.log(hashedPassword);

app.use(bodyparser.urlencoded({ extended: true }));


// //Rinka05:<password>@rinkacluster.tmjd3ye.mongodb.net/?retryWrites=true&w=majority" ,

// mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 



//create data schema
const database = {
    name: String,
    contactnum: String,
    address: String,
    Date: String,
    email: String,
    password: String
}
const data = mongoose.model("data", database);
app.get("/", function (req, res) {
    res.send(__dirname + "/index.html")
})

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
mongoose.model('database',database);
mongoose.connect("mongodb+srv://Rinka05:<password>@rinkacluster.tmjd3ye.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true })

app.listen(3000, function () {
    console.log("server is running on port 3000");
})


//db.comments.find().pretty()










