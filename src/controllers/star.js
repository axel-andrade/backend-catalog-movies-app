const Star = require('../models/star');
const Actor = require('../models/actor');
const Director = require('../models/director');
const Writer = require('../models/writer');
const utils = require('../utils');

module.exports = {
    async createStar(req, res) {
        try {
            const {specialties} = req.body;
            if (!utils.verifySpecialties(specialties)) {
                return res.status(400).send(utils.buildErrObject(101, "O campo especialidade contém valores inválidos."));
            }
            const star = await Star.create(req.body);
            await Promise.all(
                specialties.map(item => {
                    const data = {star_id: star.id};
                    switch (item) {
                        case 'actor':
                            return Actor.create(data);
                        case 'director':
                            return Director.create(data);
                        case 'writer': return Writer.create(data);
                        default:
                            return Promise.resolve();
                    }
                })
            );
            return res.json({ message: "Criado com sucesso. "});
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getStarById(req, res) {
        try {
            const {star_id} = req.params;
            const star = await Star.findByPk(star_id, {
                // include: { association: 'birth_info'}
            });
            return res.json(star);
        } catch (e) {
            res.status(400).send(e);
        }
    },
};