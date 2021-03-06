const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');
const commentController = require('../controllers/comment-controller');
const likeController = require('../controllers/like-controller');

//Middleware
const authorize = require('../configs/authorization');
const roles = require('../helpers/roles');

//posts
router.get('', postController.getPosts);
router.get('/:id', postController.getPost);
router.get('/user/:id', authorize(roles.User), postController.getUserPosts);
router.post('/upload', authorize(roles.User), postController.postPost);
router.put('/:id', authorize(roles.User), postController.putPost);
router.delete('/:id', authorize(roles.User), postController.deletePost);

//commentarios
router.get('/:id/comments', authorize(), commentController.getPostComments);
router.post('/:id/comments', authorize(roles.User), commentController.postComment);
router.delete('/:id/comments/:cid', authorize(roles.User), commentController.deleteComment);

//likes
router.get('/:id/likes', authorize(), likeController.getPostLikes);
router.post('/:id/like', authorize(roles.User), likeController.postLike);
router.put('/:id/like/:uid', authorize(roles.User),  likeController.putLike);
router.delete('/:id/like/:uid', authorize(roles.User), likeController.deleteLike);

module.exports = router;
