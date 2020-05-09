const Star = require('../models/star');
const BirthInfo = require('../models/birthInfo');
const utils = require('../utils');

module.exports = {
    async createStar(req, res) {
        try {
            const starData = req.body;
            const birthInfoData = { ...starData['birth_info']};
            delete starData.birthInfo;

            const birthInfo = await BirthInfo.create(birthInfoData);
            const star = await Star.create({...starData, birth_info_id: birthInfo.id});
            return res.json({
                ...star.toJSON(),
                birth_info: birthInfo
            });
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