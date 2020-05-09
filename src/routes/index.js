const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Base API",
        version: '0.0.1'
    });
});

/* Routes */
router.use('/users', require('./users'));

router.use('*', (req, res) => {
    res.status(404).json({
        errors: {
            msg: 'URL_NOT_FOUND'
        }
    })
})

module.exports = router;