const express = require('express');

const {
	getAllHotwheels,
	getOneHotwheel,
	createHotwheel,
	deleteHotwheel,
	updateHotwheel,
} = require('../queries/hotwheels.js');
