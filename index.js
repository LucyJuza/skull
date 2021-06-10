const express = require("express");
const path = require("path")
const app = express();
const favicon = require('serve-favicon');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 9001;
}
app.use(express.static("public"))
app.use(favicon(path.join(__dirname + "/public/favicon.ico")));
app.listen(port);
console.log("Le serveur tourne sur le port: %s",port);

app.get("/",(req,res) =>{
    res.render("index.html")
})