const Star = require('../models/star');
const utils = require('../utils');

module.exports = {
    async createStar(req, res) {
        try {
            const data = req.body;
            const star = await Star.create(data);
            return res.json(star);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getStarById(req, res) {
        try {
            const { star_id } = req.params;
            const star = await Star.findByPk(star_id,{
               // include: { association: 'birth_info'}
            });
            return res.json(star);
        } catch (e) {
            res.status(400).send(e);
        }
    },
};