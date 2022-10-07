DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    body VARCHAR NOT NULL,
    author VARCHAR NOT NULL
);

INSERT INTO posts (title, body, author)
VALUES
    ('Forever Alone', 'Today, my sad ass got walked in on by a relative while I was having an imaginary conversation, with an imaginary friend, and I was talking out loud.', 'grangerrrr'),
    ('Life is Pain', 'Today, since my family and friends always make fun of me for being a wuss when it comes to pain, when I stubbed my toe, I made a point to not scream or complain in any way. Instead, I vomited and fainted.', 'secretdragon818'),
    ('Gas Giant', 'Today, I learned that the average human farts 15 times a day. I fart more than that within the first hour of the day, and thats even after not eating anything for three days.', 'elbarto');
