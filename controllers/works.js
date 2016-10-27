var mongoose = require("mongoose");
var work = mongoose.model("Work");


//GET return all register
exports.findAllWorks = function (req, res) 
{
	work.find(function (error, work) 
	{
		if(error)
			return res.send(500, error.message);
		console.log("GET/works");
		res.status(200).jsonp(work);
	});
};

//GET return a specific register
exports.findById = function (req, res) 
{
	work.findById(req.params.id, function (error, work) 
	{
		if(error)
			return res.send (500, error.message);
		console.log("GET/work/"+req.params.id);
		res.status(200).jsonp(work);
	});
};

//POST insert a new register
exports.addWork = function (req, res) 
{
	console.log("POST");
	console.log(req.body);

	var workNew = new work
	({
		title: 			req.body.title,
		description: 	req.body.description

	});

	workNew.save(function (error, work) 
	{
		if(error)
			return res.status(500).send(error.message);
		res.status(200).jsonp(work);
	});
};

//PUT update a especific register
exports.updateWork = function (req, res) 
{
	work.findById(req.params.id, function (error, work) 
	{
		work.title			= req.body.title,
		work.description 	= req.body.description
	});

	work.save(function (error) 
	{
		if(error)
			return res.status(500).send(error.message);
		res.status(200).jsonp(work);
	});

};

//DELETE delete a specific register
exports.deleteWork = function (req, res) 
{
	work.findById(req.params.id, function (error, work) 
	{
		work.remove(function (error) 
		{
			if(error)
				return res.status(500).send(error.message);
			res.status(200).send();
		});
	});
};