const Movie = require('../models/movie');

module.exports = {
    async createMovie(req, res) {
        try {
            const movie = await Movie.create(req.body);
            return res.json(movie);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getMovies(req, res) {
        try {
            const users = await Movie.findAll();
            return res.json(users);
        } catch (e) {
            res.status(400).send(e);
        }
    },
};