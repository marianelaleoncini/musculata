'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'type',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  },
};
