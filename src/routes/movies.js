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

router.put(
    '/:id',
    trimRequest.all,
    controller.updateMovie
);

router.delete(
    '/:id',
    trimRequest.all,
    controller.deleteMovie
);

router.post(
    '/:movie_id/directors',
    trimRequest.all,
    validator.addOrRemoveStars,
    controller.addDirectors
);

router.post(
    '/:movie_id/directors',
    trimRequest.all,
    validator.addOrRemoveStars,
    controller.removeDirectors
);

router.post(
    '/:movie_id/actors',
    trimRequest.all,
    validator.addOrRemoveStars,
    controller.addActors
);

router.post(
    '/:movie_id/actors',
    trimRequest.all,
    validator.addOrRemoveStars,
    controller.removeActors
);

router.post(
    '/:movie_id/writers',
    trimRequest.all,
    validator.addOrRemoveStars,
    controller.addWriters
);

router.post(
    '/:movie_id/writers',
    trimRequest.all,
    validator.addOrRemoveStars,
    controller.addWriters
);


module.exports = router;