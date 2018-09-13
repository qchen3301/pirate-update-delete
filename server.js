//===========================
// REQUIREMENTS
//===========================
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var hbs = require('hbs');
const methodOverride = require('method-override')

//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//added method-override to app
app.use(methodOverride('_method'))
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');


//===========================
// CONTROLLERS
//===========================

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


//===========================
// LISTENERS
//===========================
app.listen(3000, function(req, res){
	console.log("Fire when ready on port 3000");
});
