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
router.post('/upload', authorize(roles.User), postController.postPost);
router.put('/:id', authorize(roles.User), postController.putPost);
router.delete('/:id', authorize(roles.User, roles.Admin), postController.deletePost);

//commentarios
router.get('/:id/comments',  commentController.getPostComments);
router.post('/:id/comments', authorize(roles.User), commentController.postComment);
router.delete('/:id/comments/:cid', authorize(roles.User, roles.Admin), commentController.deleteComment);

//likes
router.get('/:id/likes', likeController.getPostLikes);
router.post('/:id/like', authorize(roles.User), likeController.postLike);
router.put('/:id/like/:uid', authorize(roles.User),  likeController.putLike);
router.delete('/:id/like/:uid', authorize(roles.User, roles.Admin), likeController.deleteLike);

module.exports = router;
