const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const leagueSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			trim: true,
		},
		founded: {
			type: String,
			trim: true,
		},
		country: {
			type: String,
			trim: true,
		},
		sportsType: {
			type: String,
			trim: true,
		},
		gender: {
			type: String,
			trim: true,
		},
		descriptionOne: {
			type: String,
			trim: true,
		},
		descriptionTwo: {
			type: String,
			trim: true,
		},
		website: {
			type: String,
			trim: true,
		},
		facebook: {
			type: String,
			trim: true,
		},
		twitter: {
			type: String,
			trim: true,
		},
		youTube: {
			type: String,
			trim: true,
		},
		logo: {
			type: String,
			trim: true,
		},
		image: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
module.exports = mongoose.model('League', leagueSchema);
