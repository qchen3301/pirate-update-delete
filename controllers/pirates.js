//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});

//create new pirate page
router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.post('/', (req,res)=> {
	const addPirate = req.body
	/*	pirates: the var in requirements that imports from models
		pirates: the attribute in new.hbs's <form> tag
		push(): the js method to append new info to an array
		addPirate: the const above that holds req.body */
	pirates.push(addPirate)
	res.redirect('/pirates')
})
//==============================
// UPDATE
//==============================

//==============================
// DESTROY
//==============================
router.delete('/:id', (req,res) => {
	console.log(`Walk the plank!: ${pirates[req.params.id]}`)
	pirates.splice(req.params.id, 1)
	res.redirect('/pirates')

})
//==============================
// EXPORTS
//==============================

module.exports = router;
