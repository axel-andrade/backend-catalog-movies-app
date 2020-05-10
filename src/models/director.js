const { Model, DataTypes } = require('sequelize');

class Director extends Model {
    static init(sequelize) {
        super.init({
            star_id: DataTypes.INTEGER
        }, {sequelize})
    }

    static associate(models) {
        this.belongsTo(models.Star, { foreignKey: 'star_id', as: 'star' });
        this.belongsToMany(models.Movie, { foreignKey: 'director_id', through: 'directions', as: 'movies' });
    }

}

module.exports = Director;