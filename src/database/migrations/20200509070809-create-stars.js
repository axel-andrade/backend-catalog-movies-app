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
      birth_info_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'birth_infos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      profile_image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      height_meters: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      type: {
        type: Sequelize.ARRAY(Sequelize.STRING(15)),
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
    return queryInterface.dropTable('stars');
  }
};
