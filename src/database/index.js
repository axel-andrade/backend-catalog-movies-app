const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Movie = require('../models/movie');

const connection = new Sequelize(dbConfig);

User.init(connection);
Movie.init(connection);

module.exports = connection;