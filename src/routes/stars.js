const express = require('express');
const router = express.Router();
const controller = require('../controllers/star');
const validator = require('../validators/star');
const trimRequest = require('trim-request')

router.post(
    '/',
    trimRequest.all,
    validator.createStar,
    controller.createStar
);

router.get('/:star_id', trimRequest.all, controller.getStarById);

module.exports = router;