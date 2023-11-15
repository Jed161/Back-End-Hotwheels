DROP DATABASE IF EXISTS hotwheels_dev;

CREATE DATABASE hotwheels_dev;

\c hotwheels_dev;

CREATE TABLE hotwheels (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	img_url TEXT,
	category TEXT,
	year INT,
	engine TEXT,
	description VARCHAR,
	is_favorite BOOLEAN
);


