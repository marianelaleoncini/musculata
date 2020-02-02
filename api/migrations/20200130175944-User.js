'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'extraInfo',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'medicalCertificate',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'profilePicture',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'phoneNumber',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'emergencyPhoneNumber',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'address',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'confirmedRegistration',
        {
          type: Sequelize.BOOLEAN
        }
      ),
    ]);
  },
};

