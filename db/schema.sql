-- Creating DB and Table

DROP DATABASE IF EXISTS wheels_dev;
-- DROP TABLE IF EXISTS wheels;
-- DROP TABLE IF EXISTS reviews;


CREATE DATABASE wheels_dev;

\c wheels_dev;

CREATE TABLE wheels (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    manufacturer TEXT,
    type TEXT,
    hybrid BOOLEAN,
    time TEXT NOT NULL,
    is_favorite BOOLEAN
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    wheels_id INTEGER REFERENCES wheels (id)
    ON DELETE CASCADE
);


