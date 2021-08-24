const leagueService = require('../services/league.service');

//create
module.exports.create = async (req, res) => {
	try {
		const league = await leagueService.create(req.body);
		return res.status(200).json(league);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};

// get All league
module.exports.getAll = async (req, res) => {
	try {
		const leagues = await leagueService.getAll();
		return res.json(leagues);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};

// Get specific league
module.exports.findById = async (req, res) => {
	try {
		const specificLeague = await leagueService.findById(req.params.leagueId);
		return res.json(specificLeague);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};
