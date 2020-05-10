const { Model, DataTypes } = require('sequelize');

class Cast extends Model {
    static init(sequelize) {
        super.init({
            actor_id: DataTypes.INTEGER,
            movie_id: DataTypes.INTEGER,
            role_name: DataTypes.STRING,
            role_level: DataTypes.ENUM({
                values: ['protagonist', 'antagonist', 'supporting', 'special', 'other']
            })

        }, {sequelize})
    }
}

module.exports = Cast;