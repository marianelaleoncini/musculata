const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  extraInfo: {
    type: Sequelize.STRING
  },
  medicalCertificate: {
    type: Sequelize.STRING
  },
  profilePicture: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  emergencyPhoneNumber: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  confirmedRegistration: {
    type: Sequelize.BOOLEAN
  },
});

module.exports = User;
