const User = require('../models/user');

module.exports = {
    async createUser(req, res) {
        try {
            const {name, email} = req.body;
            const user = await User.create({name, email});
            return res.json(user);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            res.status(400).send(e);
        }
    },
};