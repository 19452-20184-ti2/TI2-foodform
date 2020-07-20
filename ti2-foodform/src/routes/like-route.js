const express = require('express');
const router = express.Router();
const likeController = require('../controllers/like-controller');

//Middleware
const authorize = require('../configs/authorization');
const roles = require('../helpers/roles');

//so para testes
router.get('', authorize(roles.User), likeController.getLikes);

module.exports = router;