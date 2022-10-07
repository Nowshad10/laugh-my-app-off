const Post = require('../models/Post');

async function getAllPosts(req, res) {
    try {
        const allPosts = await Post.all;
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(500).send({error});
    }
};

async function getPost(req, res) {
    try {
        const post = await Post.findByPostId(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).send({error});
    }
};

async function createPost(req, res) {
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).send({error});
    }
};

async function deletePost(req, res) {
    try {
        const postToDelete = await Post.findByPostId(req.params.id);
        await postToDelete.destroy();
        res.status(204).json();
    } catch(error) {
        res.status(500).send({error});
    }
};

module.exports = { getAllPosts, getPost, createPost, deletePost };
