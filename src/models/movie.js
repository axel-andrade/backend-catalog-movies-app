const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            original_title: DataTypes.STRING,
            description: DataTypes.STRING,
            language: DataTypes.STRING,
            url_poster: DataTypes.STRING,
            url_trailer: DataTypes.STRING,
            duration_minutes: DataTypes.INTEGER,
            age_range: DataTypes.ENUM({
                values: ['free','+12','+14','+18']
            }),
            release_date: DataTypes.DATE,
            year: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Movie;