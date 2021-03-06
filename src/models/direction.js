const { Model, DataTypes } = require('sequelize');

class Direction extends Model {
    static init(sequelize) {
        super.init({
            director_id: DataTypes.INTEGER,
            movie_id: DataTypes.INTEGER
        }, {sequelize})
    }
}

module.exports = Direction;