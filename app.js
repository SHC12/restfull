var express = require ("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/works", function (error, res)
{
	if(error)
		console.log("Error to connect to Database :"+error);
	else
		console.log("Connect to DB");
});

app.use(bodyParser.urlencoded
({
	extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require("./models/work")(app, mongoose);
var workctl = require("./controllers/works");

var router = express.Router();

router.get('/', function (req, res)
{
	res.send("holaaa");
});

app.use(router);

var works = express.Router();

works.route("/works")
	.get(workctl.findAllWorks)
	.post(workctl.addWork);

works.route("/work/:id")
	.get(workctl.findById)
	.put(workctl.updateWork)
	.delete(workctl.deleteWork);

app.use("/", works);

app.listen(9000, function() 
{
	console.log("corriendo el app");
});
