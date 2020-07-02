const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment-controller');

//Middleware
const authorize = require('../configs/authorization');
const roles = require('../helpers/roles');

router.get('', authorize(), commentController.getComments);

module.exports = router;