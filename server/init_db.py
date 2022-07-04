import sqlite3

connection = sqlite3.connect('database.db')

with open('posts.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO posts (title, body, author) VALUES (?, ?, ?)", ("Forever Alone", "Today, my sad ass got walked in on by a relative while I was having an imaginary conversation, with an imaginary friend, and I was talking out loud.", "grangerrr"))

cur.execute("INSERT INTO posts (title, body, author) VALUES (?, ?, ?)", ("Life is Pain", "Today, since my family and friends always make fun of me for being a wuss when it comes to pain, when I stubbed my toe, I made a point to not scream or complain in any way. Instead, I vomited and fainted.", "secretdragon818"))

connection.commit()
connection.close()
