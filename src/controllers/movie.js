const Movie = require('../models/movie');
const utils = require('../utils');

module.exports = {
    async createMovie(req, res) {
        try {
            const movie = await Movie.create(req.body);
            return res.json(movie);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getMovieById(req, res) {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if(!movie){
                return res.status(400).send(utils.buildErrObject(101, "NOT_FOUND"));
            }
            return res.json(movie);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getMovies(req, res) {
        try {
            const { limit = 10 , offset = 0 } = req.params;
            const { count : total, rows : movies } = await Movie.findAndCountAll({
                // where: {
                //     title: {
                //         [Op.like]: 'foo%'
                //     }
                // },
                offset,
                limit
            });
            return res.json({ movies, total });
        } catch (e) {
            res.status(400).send(e);
        }
    },
};