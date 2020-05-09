const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const validator = require('../validators/user');
const trimRequest = require('trim-request')

router.get('/', controller.getUsers);
router.post(
    '/',
    trimRequest.all,
    validator.createUser,
    controller.createUser
);

module.exports = router;