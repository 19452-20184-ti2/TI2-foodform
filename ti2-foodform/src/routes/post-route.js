const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');

router.get('', postController.getPosts);
router.get('/:id', postController.getPost);
router.post('', postController.postPost);
router.put('/:id', postController.putPost);
router.delete('/:id', postController.deletePost);

module.exports = router;