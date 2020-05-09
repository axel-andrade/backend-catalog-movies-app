const Star = require('../models/star');
const BirthInfo = require('../models/birth-info');
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
};