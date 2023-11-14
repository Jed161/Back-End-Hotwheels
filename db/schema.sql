DROP DATABASE IF EXISTS hotwheels_dev;

CREATE DATABASE hotwheels_dev;

\c hotwheels_dev;

CREATE TABLE hotwheels (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	imgUrl TEXT,
	category TEXT,
	year INT,
	engine TEXT,
	description TEXT,
	hybrid BOOLEAN,
	is_favorite BOOLEAN
);


