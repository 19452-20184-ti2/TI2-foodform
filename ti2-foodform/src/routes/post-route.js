const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');
const commentController = require('../controllers/comment-controller');
const likeController = require('../controllers/like-controller');

//Middleware
const authorize = require('../configs/authorization')

//posts
router.get('', authorize(), postController.getPosts);
router.get('/:id', authorize(), postController.getPost);
router.post('/update', authorize(), postController.postPost);
router.put('/:id', authorize(), postController.putPost);
router.delete('/:id', authorize(), postController.deletePost);

//commentarios
router.get('/:id/comments', authorize(), commentController.getPostComments);
router.post('/:id/comments', authorize(), commentController.postComment);
router.delete('/:id/comments/:cid', authorize(), commentController.deleteComment);

//likes
router.get('/:id/likes', authorize(), likeController.getPostLikes);
router.post('/:id/like', authorize(), likeController.postLike);
router.put('/:id/like/:uid', authorize(), likeController.putLike);
router.delete('/:id/like/:uid', authorize(), likeController.deleteLike);

module.exports = router;