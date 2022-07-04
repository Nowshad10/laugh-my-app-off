DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    body VARCHAR(800) NOT NULL,
    author VARCHAR(200) NOT NULL
);