CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT
);

CREATE TABLE IF NOT EXISTS movielist (
id SERIAL PRIMARY KEY,
users_id INTEGER,
movieid INTEGER,
movieTitle TEXT,
posterImage TEXT,
movieRating NUMERIC,
watched BOOLEAN,
favourite BOOLEAN
);