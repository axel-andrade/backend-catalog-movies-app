'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('birth_infos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
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
    return queryInterface.dropTable('birth_infos');
  }
};
