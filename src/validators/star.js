const { validationResult } = require('../utils')
const utils = require('../utils')

exports.createStar = [
    utils.createCheckValidator('artistic_name', 'IS_EMPTY'),
    utils.createCheckValidator('bio', 'IS_EMPTY'),
    utils.createCheckValidator('birth_info', 'IS_EMPTY'),
    utils.createCheckValidator('birth_info.name', 'IS_EMPTY'),
    utils.createCheckValidator('birth_info.date', 'IS_EMPTY'),
    utils.createCheckValidator('birth_info.city', 'IS_EMPTY'),
    utils.createCheckValidator('birth_info.state', 'IS_EMPTY'),
    utils.createCheckValidator('birth_info.country', 'IS_EMPTY'),
    utils.createCheckValidator('profile_image', 'IS_EMPTY'),
    utils.createCheckValidator('height_meters', 'IS_EMPTY'),
    utils.createCheckValidator('type', 'IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]
