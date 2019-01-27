var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var InstitutionSchema = new Schema({
	'name' : String,
	'type' : String,
	'muncipality' : String
});

module.exports = mongoose.model('Institution', InstitutionSchema);
