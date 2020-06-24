const express = require('express');
const router = express.Router();
const likeController = require('../controllers/like-controller');

//so para testes
router.get('', likeController.getLikes);

module.exports = router;