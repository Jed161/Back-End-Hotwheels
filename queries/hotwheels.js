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

const createHotwheel = async (hotwheel) => {
	const { name, img_url, category, year, engine, description, is_favorite } =
		hotwheel;
	try {
		const createdHotwheel = await db.one(
			'INSERT INTO hotwheels (name, img_url, category, year, engine, description, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
			[name, img_url, category, year, engine, description, is_favorite]
		);
		return createdHotwheel;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllHotwheels,
	getOneHotwheel,
	createHotwheel,
};
