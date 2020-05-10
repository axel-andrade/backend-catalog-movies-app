const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Movie = require('../models/movie');
const Star = require('../models/star');
const Direction = require('../models/direction');

const connection = new Sequelize(dbConfig);

User.init(connection);
Movie.init(connection);
Star.init(connection);
Direction.init(connection);
Movie.associate(connection.models);

module.exports = connection;