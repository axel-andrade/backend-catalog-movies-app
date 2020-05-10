const { validationResult } = require('../utils')
const utils = require('../utils')

exports.createDirection = [
    utils.createCheckValidator('star_id', 'IS_EMPTY'),
    utils.createCheckValidator('movie_id', 'IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]
