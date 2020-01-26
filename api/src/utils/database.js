const Sequelize = require('sequelize');

const sequelize = new Sequelize('musculata', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
