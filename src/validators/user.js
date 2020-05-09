const { validationResult } = require('../utils')
const { check } = require('express-validator')

exports.createUser = [
    check('name')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('email')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY')
        .isEmail()
        .withMessage('EMAIL_IS_NOT_VALID'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]
