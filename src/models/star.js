const { Model, DataTypes } = require('sequelize');

class Star extends Model {
    static init(sequelize) {
        super.init({
            artistic_name: DataTypes.STRING,
            birth_name: DataTypes.STRING,
            birth_date: DataTypes.DATE,
            birth_city: DataTypes.STRING,
            birth_state: DataTypes.STRING,
            birth_country: DataTypes.STRING,
            bio: DataTypes.STRING,
            gender: DataTypes.ENUM({
                values: ['male','female','outher']
            }),
            profile_image: DataTypes.STRING,
            height_meters: DataTypes.FLOAT,
            specialties: DataTypes.ARRAY(DataTypes.ENUM({
                values: ['actor', 'director', 'writer']
            })),
        }, {
            sequelize
        })
    }

}

module.exports = Star;