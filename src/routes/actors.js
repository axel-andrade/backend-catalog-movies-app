const express = require('express');
const router = express.Router();
const controller = require('../controllers/actor');
const trimRequest = require('trim-request')

router.get('/', trimRequest.all, controller.getActors);

module.exports = router;