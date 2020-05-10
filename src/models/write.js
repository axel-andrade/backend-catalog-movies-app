const { Model, DataTypes } = require('sequelize');

class Write extends Model {
    static init(sequelize) {
        super.init({
            writer_id: DataTypes.INTEGER,
            movie_id: DataTypes.INTEGER
        }, {sequelize})
    }
}

module.exports = Write;