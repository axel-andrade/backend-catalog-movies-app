const { validationResult } = require('../utils')
const utils = require('../utils')

exports.createMovie = [
    utils.createCheckValidator('title', 'IS_EMPTY'),
    utils.createCheckValidator('original_title', 'IS_EMPTY'),
    utils.createCheckValidator('description', 'IS_EMPTY'),
    utils.createCheckValidator('language', 'IS_EMPTY'),
    utils.createCheckValidator('url_poster', 'IS_EMPTY'),
    utils.createCheckValidator('url_trailer', 'IS_EMPTY'),
    utils.createCheckValidator('duration_minutes', 'IS_EMPTY'),
    utils.createCheckValidator('age_range', 'IS_EMPTY'),
    utils.createCheckValidator('release_date', 'IS_EMPTY'),
    utils.createCheckValidator('year', 'IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]
