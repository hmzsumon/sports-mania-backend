const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/league.controller');

// create a league
router.post('/', leagueController.create);

// Get All League
router.get('/', leagueController.getAll);

// Get Specific League
router.get('/:leagueId', leagueController.findById);

module.exports = router;
