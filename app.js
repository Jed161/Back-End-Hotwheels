// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// ROUTES
app.get('/', (req, res) => {
	res.send('Welcome to Hotwheels App 🏎️');
});

// 404 PAGE
app.get('*', (req, res) => {
	res.status(404).json({ error: 'No page found!' });
});

module.exports = app;
