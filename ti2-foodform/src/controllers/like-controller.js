const likeService = require('../services/like-service');

exports.getLikes = (req, res) => {
    return likeService
        .getAllLikes()
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.getPostLikes = (req, res) => {
    return likeService
        .getPostLikes(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.postLike = (req, res) => {
    return likeService
        .like(req.params.id, req.body)
            .then(result => res.json(result.save()))
            .catch(err => res.status(500).send(err.message));
};

exports.putLike = (req, res) => {
    return likeService
        .updateLikedCondition(req.params.id, req.params.uid, req.body)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};

exports.deleteLike = (req, res) => {
    return likeService
        .deleteLikedCondition(req.params.id, req.params.uid)
            .then(result => res.json(result))
            .catch(err => res.status(500).send(err.message));
};