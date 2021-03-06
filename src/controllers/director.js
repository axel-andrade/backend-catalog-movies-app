const Director = require('../models/director');
const utils = require('../utils');

module.exports = {

    async getDirectors(req, res) {
        try {
            const {count, rows} = await Director.findAndCountAll({
                include:  { association: 'star'}
            });
            return res.json(rows);
        } catch (e) {
            res.status(400).send(e);
        }
    }
};