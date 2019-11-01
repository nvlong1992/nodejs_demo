//Define express router
const express = require('express');
const router = express.Router();

//Define controller
const controller = require('../controllers/user.controller');

router.get('/', controller.index);

module.exports = router;