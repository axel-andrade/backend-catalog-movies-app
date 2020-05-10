const express = require('express');
const router = express.Router();
const controller = require('../controllers/directions');
const validator = require('../validators/direction');
const trimRequest = require('trim-request')

router.post(
    '/',
    trimRequest.all,
    validator.createDirection,
    controller.createDirection
);

router.get('/stars/:star_id', trimRequest.all, controller.getDirectionsByStar);
//
// router.get('/movies/:movie_id', trimRequest.all, controller.getDirectionByMovie);



module.exports = router;