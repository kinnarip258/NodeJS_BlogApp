const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/', userController.user_create_post);

module.exports = router;