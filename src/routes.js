const express = require('express');
const UserController = require('./controllers/user');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'world' })
})

routes.post('/users', UserController.createUser);

module.exports = routes