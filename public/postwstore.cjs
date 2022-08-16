const express = require("express");
const app = express();
const bodyparser = require("body-parser");


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    req.get(__dirname+"/mainpage.html");
    res.sendFile(__dirname + "/login.html");
  });
  app.post("/", (req, res) => {
    let username = req.body.name;
    let userbudget = req.body.budget;
   res.send(` "Hey🤶🏻"${username}+ "your budget is " +${userbudget}`);
  });