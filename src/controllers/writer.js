const Writer = require('../models/writer');
const utils = require('../utils');

module.exports = {

    async getWriters(req, res) {
        try {
            const {count, rows} = await Writer.findAndCountAll({
                include:  { association: 'star'}
            });
            return res.json(rows);
        } catch (e) {
            res.status(400).send(e);
        }
    }
};