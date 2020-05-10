const { Model, DataTypes } = require('sequelize');

class Writer extends Model {
    static init(sequelize) {
        super.init({
            star_id: DataTypes.INTEGER
        }, {sequelize})
    }

    static associate(models) {
        this.belongsTo(models.Star, { foreignKey: 'star_id', as: 'star' });
        this.belongsToMany(models.Movie, { foreignKey: 'writer_id', through: 'writes', as: 'movies' });
    }

}

module.exports = Writer;