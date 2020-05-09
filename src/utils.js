const { validationResult } = require('express-validator')
const { check } = require('express-validator')

exports.buildErrObject = (code, message) => {
    return {
        code,
        message
    }
}

exports.handleError = (res, err) => {
    // Prints error in console
    if (process.env.NODE_ENV === 'development') {
        console.log(err)
    }
    // Sends error to user
    res.status(400).json({
        code: err.code,
        message: err.message
    })
}

exports.validationResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        if (req.body.email) {
            req.body.email = req.body.email.toLowerCase()
        }
        return next()
    } catch (err) {
        return this.handleError(res, this.buildErrObject(422, err.array()))
    }
}

exports.createCheckValidator = (field, type) => {
    if(field && type === 'IS_EMPTY' ){
        return check(field)
            .exists()
            .withMessage('MISSING')
            .not()
            .isEmpty()
            .withMessage('IS_EMPTY')
    }
}

