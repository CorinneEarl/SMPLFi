//Enables dependencies
var express = require("express");
var session = require("express-session");
var morgan = require("morgan");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/SMPLFi');

var app = express();
//Sets the static page
app.use(express.static("public"));

app.listen(3000);