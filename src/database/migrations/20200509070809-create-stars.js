'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stars', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      artistic_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      birth_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      birth_city: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      birth_state: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      birth_country: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      profile_image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM({
          values: ['male','female','outher']
        }),
        allowNull: false
      },
      height_meters: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      specialties: Sequelize.ARRAY(Sequelize.ENUM({
        values: ['actor', 'director', 'writer']
      })),
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stars');
  }
};
