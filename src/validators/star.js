const { validationResult } = require('../utils')
const utils = require('../utils')

exports.createStar = [
    utils.createCheckValidator('artistic_name', 'IS_EMPTY'),
    utils.createCheckValidator('bio', 'IS_EMPTY'),
    utils.createCheckValidator('birth_name', 'IS_EMPTY'),
    utils.createCheckValidator('birth_date', 'IS_EMPTY'),
    utils.createCheckValidator('birth_city', 'IS_EMPTY'),
    utils.createCheckValidator('birth_state', 'IS_EMPTY'),
    utils.createCheckValidator('birth_country', 'IS_EMPTY'),
    utils.createCheckValidator('gender', 'IS_EMPTY'),
    utils.createCheckValidator('profile_image', 'IS_EMPTY'),
    utils.createCheckValidator('height_meters', 'IS_EMPTY'),
    utils.createCheckValidator('specialties', 'IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]
