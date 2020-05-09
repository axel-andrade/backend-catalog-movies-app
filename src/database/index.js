const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Movie = require('../models/movie');
const Star = require('../models/star');
const BirthInfo = require('../models/birth-info');

const connection = new Sequelize(dbConfig);

User.init(connection);
Movie.init(connection);
BirthInfo.init(connection);
Star.init(connection);
Star.associate(connection.models);

module.exports = connection;