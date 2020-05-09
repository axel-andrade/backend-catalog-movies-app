const express = require('express');
const router = express.Router();
const controller = require('../controllers/movie');
const validator = require('../validators/movie');
const trimRequest = require('trim-request')

router.get('/', controller.getMovies);
router.get('/:id', controller.getMovieById);
router.post(
    '/',
    trimRequest.all,
    validator.createMovie,
    controller.createMovie
);

module.exports = router;