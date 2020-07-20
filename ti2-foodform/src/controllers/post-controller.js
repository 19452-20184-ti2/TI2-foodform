const postService = require('../services/post-service');

exports.getPosts = (req, res) => {
    return postService
        .getPosts() //serviço a ser acedido
            .then(result => res.json(result)) //caso de sucesso
            .catch(err => res.status(500).send(err.message)); //caso de reject
};

exports.getUserPosts = (req, res) => {
    return postService
        .getUserPosts(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.getPost = (req, res) => {
    return postService
        .getPost(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.postPost = (req, res) => {
    return postService
        .addPost(req.body)
            .then(result => res.json(result.save()))
            .catch(err => res.status(500).send(err.message));
};

exports.putPost = (req, res) => {
    return postService
        .updatePost(req.params.id, req.body)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.deletePost = (req, res) => {
    return postService
        .deletePost(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};