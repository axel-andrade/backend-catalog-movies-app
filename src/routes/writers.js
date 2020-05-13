const express = require('express');
const router = express.Router();
const controller = require('../controllers/writer');
const trimRequest = require('trim-request')

router.get('/', trimRequest.all, controller.getWriters);

module.exports = router;