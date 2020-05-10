const { Model, DataTypes } = require('sequelize');

class Actor extends Model {
    static init(sequelize) {
        super.init({
            star_id: DataTypes.INTEGER,
        }, {sequelize})
    }

    static associate(models) {
        this.belongsTo(models.Star, { foreignKey: 'star_id', as: 'star' });
        this.belongsToMany(models.Movie, { foreignKey: 'actor_id', through: 'casts', as: 'movies' });
    }

}

module.exports = Actor;