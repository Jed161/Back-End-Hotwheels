const db = require('../db/dbConfig.js');

const getAllHotwheels = async () => {
	try {
		const allHotwheels = await db.any('SELECT * FROM hotwheels');
		return allHotwheels;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllHotwheels,
};
