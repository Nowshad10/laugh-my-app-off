const db = require('../dbConfig');

class Post {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.author = data.author
    };

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const allPostData = await db.query(`SELECT * FROM posts;`);
                const allPosts = allPostData.rows.map(post => new Post(post));
                resolve(allPosts);
            } catch (error) {
                reject(`Cannot retrieve all users!`);
            }
        })
    };

    static findByPostId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [id]);
                const post = new Post(postData.rows[0]);
                resolve(post);
            } catch (error) {
                reject(`Error retrieving this post`);
            }
        })
    };

    static create({title, body, author}) {
        return new Promise(async (resolve, reject) => {
            try {
                const newPostQuery = await db.query(`INSERT INTO posts (title, body, author) VALUES ($1, $2, $3) RETURNING *;`, [title, body, author]);
                const newPost = new Post(newPostQuery.rows[0]);
            } catch (error) {
                reject(`Error creating user: ${error}`);
            }
        })
    };

    destroy() {
       return new Promise(async (resolve, reject) => {
        try {
            await db.query(`DELETE FROM posts WHERE id = $1;`, [this.id]);
            resolve('Post deleted');
        } catch (error) {
            reject('Error deleting post!');
        }
       }) 
    };
}

module.exports = Post;
