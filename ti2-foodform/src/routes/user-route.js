const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

//Middleware
const authorize = require('../configs/authorization');
const roles = require('../helpers/roles');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', authorize(roles.User), userController.getUser);

module.exports = router;