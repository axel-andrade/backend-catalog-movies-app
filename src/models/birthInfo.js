const { Model, DataTypes } = require('sequelize');

class BirthInfo extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            date: DataTypes.DATE,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = BirthInfo;