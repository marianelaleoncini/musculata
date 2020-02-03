const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Gym = sequelize.define('gym', {
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
  phoneNumber: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
});

module.exports = Gym;
