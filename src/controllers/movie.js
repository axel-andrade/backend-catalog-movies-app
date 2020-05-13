const Movie = require('../models/movie');
const Star = require('../models/star');
const Actor = require('../models/actor');
const Director = require('../models/director');
const Writer = require('../models/writer');
const utils = require('../utils');
const {Op} = require('sequelize');


const optionsQueryMovieForStars = [
    utils.formatOptionForQueryMovie('directors', 'star'),
    utils.formatOptionForQueryMovie('actors', 'star'),
    utils.formatOptionForQueryMovie('writers', 'star'),
];

const changeStarInMovie = async (req, res, model, op = 'add') => {
    try {
        const {movie_id} = req.params;
        const {ids} = req.body;
        const movie = await Movie.findByPk(movie_id);
        if (!movie) {
            return res.status(400).send(utils.buildErrObject(101, "MOVIE_NOT_FOUND"));
        }
        const stars = await model.findAll({
            where: {id: ids}
        });
        if (!stars || stars.length <= 0) {
            return res.status(400).send(utils.buildErrObject(101, "STARS_NOT_FOUND"));
        }

        if (op === 'add') {
            await Promise.all(
                stars.map(star => star.addMovie(movie))
            );
        } else if (op === 'remove') {
            await Promise.all(
                stars.map(star => star.removeMovie(movie))
            );
        }

        return res.json({message: "Operação realizada com sucesso."});
    } catch (e) {
        res.status(400).send(e);
    }
};

module.exports = {
    async createMovie(req, res) {
        try {
            const movie = await Movie.create(req.body);
            return res.json(movie);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async updateMovie(req, res) {
        try {
            const movie = await Movie.findByPk(req.params.id, {
                include: optionsQueryMovieForStars
            });
            if (!movie) {
                return res.status(400).send(utils.buildErrObject(101, "MOVIE_NOT_FOUND"));
            }
            await movie.update(req.body);
            return res.json(movie);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async deleteMovie(req, res) {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if (!movie) {
                return res.status(400).send(utils.buildErrObject(101, "MOVIE_NOT_FOUND"));
            }
            await movie.destroy();
            return res.json(movie);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getMovieById(req, res) {
        try {
            const movie = await Movie.findByPk(req.params.id, {
                include: optionsQueryMovieForStars
            });
            if (!movie) {
                return res.status(400).send(utils.buildErrObject(101, "MOVIE_NOT_FOUND"));
            }
            return res.json(movie);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getMovies(req, res) {
        try {
            const {limit = 10, offset = 0, search = ''} = req.query;
            const {count: total, rows: movies} = await Movie.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            title: {
                                [Op.iRegexp]: search
                            }
                        },
                        {
                            original_title: {
                                [Op.iRegexp]: search
                            }
                        },
                        {
                            description: {
                                [Op.iRegexp]: search
                            }
                        },
                        {
                            language: {
                                [Op.iRegexp]: search
                            }
                        },
                    ],
                },
                include: optionsQueryMovieForStars,
                order: [
                    ['id', 'DESC'],
                ],
                offset,
                limit
            });
            return res.json({movies, total: movies.length});
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async addDirectors(req, res) {
        return changeStarInMovie(req, res, Director, 'add');
    },
    async removeDirectors(req, res) {
        return changeStarInMovie(req, res, Director, 'remove');
    },
    async addActors(req, res) {
        return changeStarInMovie(req, res, Actor, 'add');
    },
    async removeActors(req, res) {
        return changeStarInMovie(req, res, Actor, 'remove');
    },
    async addWriters(req, res) {
        return changeStarInMovie(req, res, Writer, 'add');
    },
    async removeWriters(req, res) {
        return changeStarInMovie(req, res, Writer, 'remove');
    }
};