const express = require('express');

const { getAllHotwheels, getOneHotwheel } = require('../queries/hotwheels.js');

const { checkName, checkBoolean } = require('../validations/checkHotwheels.js');

const hotwheels = express.Router();

hotwheels.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneHotwheel = await getOneHotwheel(id);
	if (oneHotwheel) {
		res.json(oneHotwheel);
	} else {
		res.status(404).json({ error: 'Not found!' });
	}
});

hotwheels.get('/', async (req, res) => {
	const allHotwheels = await getAllHotwheels();
	if (allHotwheels[0]) {
		res.status(200).json({ success: true, data: { payload: allHotwheels } });
	} else {
		res.status(500).json({ success: false, data: { error: 'Server error' } });
	}
});

module.exports = hotwheels;
