const Actor = require('../models/actor');
const utils = require('../utils');

module.exports = {

    async getActors(req, res) {
        try {
            const {count, rows} = await Actor.findAndCountAll({
                include:  { association: 'star'}
            });
            return res.json(rows);
        } catch (e) {
            res.status(400).send(e);
        }
    }
};