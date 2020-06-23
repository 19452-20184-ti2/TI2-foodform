const commentService = require('../services/comment-service');

exports.getComments = (req, res) => {
    return commentService
        .getAllComments()
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.getPostComments = (req, res) => {
    return commentService
        .getPostComments(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.postComment = (req, res) => {
    return commentService
        .addComment(req.params.id, req.body)
            .then(result => res.json(result.save()))
            .catch(err => res.status(500).send(err.message));
};

exports.deleteComment = (req, res) => {
    return commentService
        .deleteComment(req.params.cid)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};
