var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workSchema = new Schema(
{
	title: {type:  String},
	description: {type: String}
});

module.exports = mongoose.model("Work", workSchema);

