const Star = require('../models/star');
const utils = require('../utils');

module.exports = {

    async getDirectors(req, res) {
        try {
            return res.json({});
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getDirectorById(req, res) {
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