'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      original_title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url_poster: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url_trailer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duration_minutes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      age_range: {
        type: Sequelize.ENUM({
          values: ['free', '+12', '+14', '+18']
        }),
        allowNull: false
      },
      release_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
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
      return queryInterface.dropTable('movies');
  }
};
