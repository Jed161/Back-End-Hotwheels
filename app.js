// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const hotwheelsController = require('.controllers/hotwheelsController.js');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/hotwheels', hotwheelsController);

// ROUTES
app.get('/', (req, res) => {
	res.send('Welcome to Hotwheels App 🏎️');
});

// 404 PAGE
app.get('*', (req, res) => {
	res.status(404).json({ success: false, data: { error: 'No page found!' } });
});

module.exports = app;
