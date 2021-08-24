const League = require('../models/League.model');

// create League
module.exports.create = (league) => {
	return League.create(league);
};

// Get All league
module.exports.getAll = (league) => {
	return League.find(league);
};

// Get specific league
module.exports.findById = (leagueId) => {
	return League.findById(leagueId);
};
