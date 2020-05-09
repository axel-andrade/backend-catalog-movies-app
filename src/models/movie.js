const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            synopsis: DataTypes.STRING,
            language: DataTypes.STRING,
            url_poster: DataTypes.STRING,
            url_trailer: DataTypes.STRING,
            year: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Movie;