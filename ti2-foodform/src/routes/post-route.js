const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');
const commentController = require('../controllers/comment-controller');
const likeController = require('../controllers/like-controller');

//Middleware
const authorize = require('../configs/authorization')

//posts
router.get('', postController.getPosts);
router.get('/:id', postController.getPost);
router.post('/update', postController.postPost);
router.put('/:id', postController.putPost);
router.delete('/:id', postController.deletePost);

//commentarios
router.get('/:id/comments', commentController.getPostComments);
router.post('/:id/comments', commentController.postComment);
router.delete('/:id/comments/:cid', commentController.deleteComment);

//likes
router.get('/:id/likes', likeController.getPostLikes);
router.post('/:id/like', likeController.postLike);
router.put('/:id/like/:uid',  likeController.putLike);
router.delete('/:id/like/:uid', likeController.deleteLike);

module.exports = router;

//note to self: falta o middleware de autenticação implementado