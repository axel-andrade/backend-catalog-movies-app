const { Model, DataTypes } = require('sequelize');

class Direction extends Model {
    static init(sequelize) {
        super.init({}, { sequelize })
    }

    static associate(models) {
        this.belongsTo(models.Star, { foreignKey: 'star_id', as: 'direct' });
        this.belongsToMany(models.Movie, { foreignKey: 'movie_id', through: 'user_techs', as: 'users' });
    }
}

module.exports = Star;