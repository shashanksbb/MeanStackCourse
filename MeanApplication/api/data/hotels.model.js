var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	rating : {
		type : Number,
		min : 0,
		max : 5,
		required : true //default : 0 is equally fine
	},
	review : {
		type : String,
		required : true
	},
	createdOn : {
		type : Date,
		"default" : Date.now
	}
});

var roomSchema = mongoose.Schema({
	type : String,
	number : Number,
	description : String,
	photos : [String],
	price : Number
});

var hotelSchema = new mongoose.Schema({
	//name : String, This is short hand for:
	name : {
		type : String,
		required : true
	},
	stars : {
		type : Number,
		min : 0,
		max : 5,
		"default" : 0 //default : 0 is equally fine
	},
	services : [String],
	description : String,
	photos : [String],
	currency : String,
	reviews : [reviewSchema],
	rooms : [roomSchema],
	location: {
		address : String,
		coordinates : {
			type : [Number],
			index : "2dsphere"
		}
	}

});

mongoose.model('Hotel', hotelSchema);
//mongoose.model('Hotel', hotelSchema, 'hotels'//This parameter is collection name, 
//if not specified then it takes pluralized version of model name 'Hotel' in all small letters);