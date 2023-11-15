const db = require('../db/dbConfig.js');

const getAllHotwheels = async () => {
	try {
		const allHotwheels = await db.any('SELECT * FROM hotwheels');
		return allHotwheels;
	} catch (err) {
		return err;
	}
};

const getOneHotwheel = async (id) => {
	try {
		const oneHotwheel = await db.one('SELECT * FROM hotwheels WHERE id=$1', id);
		return oneHotwheel;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllHotwheels,
	getOneHotwheel,
};
