'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('casts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      actor_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'actors', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      movie_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'movies', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    return queryInterface.dropTable('casts');
  }
};
