const postService = require('../services/posts-service.js');

exports.getPosts = (req, res) => {
    postService
        .getPosts()
        .then( result => res.json(result) )
        .catch( err => res.status(500).send(err.message) );
}

exports.getPost = (req, res) => {
    postService
        .getPost(req.params.id)
        .then( result => res.json(result) )
        .catch( err => res.status(500).send(err.message) );
}

exports.insertPost = (req, res) => {
    postService
        .insertPost(req.body)
        .then( result => res.json(result) )
        .catch( err => res.status(500).send(err.message) );
}

exports.updatePost = (req, res) => {
    postService
        .updatePost(req.params.id, req.body)
        .then( result => res.json(result) )
        .catch( err => res.status(500).send(err.message) );
}

exports.deletePost = (req, res) => {
    postService
        .deletePost(req.params.id)
        .then( result => res.json(result) )
        .catch( err => res.status(500).send(err.message) );
}