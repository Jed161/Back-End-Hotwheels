const express = require('express');

const { getAllHotwheels } = require('../queries/hotwheels.js');

const hotwheels = express.Router();

hotwheels.get('/', async (req, res) => {
	const allHotwheels = await getAllHotwheels();
	if (allHotwheels[0]) {
		res.status(200).json({ success: true, data: { payload: allHotwheels } });
	} else {
		res.status(500).json({ success: false, data: { error: 'Server error' } });
	}
});

module.exports = hotwheels;
