const { Model, DataTypes } = require('sequelize');

class Star extends Model {
    static init(sequelize) {
        super.init({
            artistic_name: DataTypes.STRING,
            bio: DataTypes.STRING,
            profile_image: DataTypes.STRING,
            height_meters: DataTypes.FLOAT,
            type: DataTypes.ARRAY(DataTypes.STRING)
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.BirthInfo, { foreignKey: 'birth_info_id', as: 'birth_info' });
    }
}

module.exports = Star;