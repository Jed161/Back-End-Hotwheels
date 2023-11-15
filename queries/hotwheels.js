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

const deleteHotwheel = async (id) => {
	try {
		const deletedHotwheel = await db.one(
			'DELETE FROM hotwheels WHERE id=$1 RETURNING *',
			id
		);
		return deletedHotwheel;
	} catch (error) {
		return error;
	}
};

const updateHotwheel = async (id, hotwheel) => {
	try {
		const { name, img_url, category, year, engine, description, is_favorite } =
			hotwheel;
		const updatedHotwheel = await db.one(
			'UPDATE hotwheels SET name=$1, img_url=$2, category=$3, year=$4, engine=$5, description=$6, is_favorite=$7 WHERE id=$8 RETURNING *',
			[name, img_url, category, year, engine, description, is_favorite, id]
		);
		return updatedHotwheel;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllHotwheels,
	getOneHotwheel,
	createHotwheel,
	deleteHotwheel,
	updateHotwheel,
};
