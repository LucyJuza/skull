const express = require("express");
const path = require("path")
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 9001;
}
app.use(express.static("public"))
app.listen(port);
console.log("Le serveur tourne sur le port: %s",port);

app.get("/",(req,res) =>{
    res.render("index.html")
})