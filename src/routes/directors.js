const express = require('express');
const router = express.Router();
const controller = require('../controllers/director');
const trimRequest = require('trim-request')

router.get('/', trimRequest.all, controller.getDirectors);

module.exports = router;