const Direction = require('../models/direction');
const Star = require('../models/star');
const Movie = require('../models/movie');
const utils = require('../utils');

module.exports = {
    async createDirection(req, res) {
        try {
            const { star_id, movie_id } = req.body;

            const star = await Star.findByPk(star_id);
            if(!star){
                return res.status(400).send(utils.buildErrObject(101, "STAR_NOT_FOUND"));
            }

            const movie = await Movie.findByPk(movie_id);
            if(!movie){
                return res.status(400).send(utils.buildErrObject(101, "MOVIE_NOT_FOUND"));
            }

            const direction = await Direction.create({
                star_id,
                movie_id
            });
            return res.json(direction);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getDirectionsByStar(req, res) {
        try {
            const { star_id, offset = 0, limit = 10} = req.params;
            const star = await Star.findByPk(star_id);
            if(!star){
                return res.status(400).send(utils.buildErrObject(101, "STAR_NOT_FOUND"));
            }
            const { count : total, rows : directions } = await Star.findAndCountAll({
                where: {
                    star_id
                }, include: [
                    {
                        model: Movie,
                        as: 'movies',
                        through: {
                            attributes: [],
                        }
                    }
                ],
                // attributes: ['id', 'movie', 'created_at', 'updated_at'],
                offset,
                limit
            });
            return res.json({ directions, total });
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getStarById(req, res) {
        try {
            const { star_id } = req.params;
            const star = await Star.findByPk(star_id,{
                include: { association: 'birth_info'}
            });
            return res.json(star);
        } catch (e) {
            res.status(400).send(e);
        }
    },
};