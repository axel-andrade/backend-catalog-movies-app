const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Movie = require('../models/movie');
const Star = require('../models/star');
const Actor = require('../models/actor');
const Director = require('../models/director');
const Writer = require('../models/writer');
const Direction = require('../models/direction');
const Cast = require('../models/cast');
const Write = require('../models/write');

const connection = new Sequelize(dbConfig);

User.init(connection);
Movie.init(connection);
Star.init(connection);
Actor.init(connection);
Director.init(connection);
Writer.init(connection);
Direction.init(connection);
Cast.init(connection);
Write.init(connection);

Actor.associate(connection.models);
Director.associate(connection.models);
Writer.associate(connection.models);
Movie.associate(connection.models);

module.exports = connection;