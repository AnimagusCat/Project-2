CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT
);

CREATE TABLE IF NOT EXISTS movielist (
id SERIAL PRIMARY KEY,
users_id INTEGER,
movieid INTEGER,
watched BOOLEAN,
favourite BOOLEAN
);