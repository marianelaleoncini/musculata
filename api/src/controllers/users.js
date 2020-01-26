const User = require('../models/User');

const getUsers = (req, res) => {
  res.status(200).json({
    id: '1',
    name: 'Marianela'
  });
};

const createUser = (req, res) => {
  res.status(200).json('OK');
};

module.exports = {
  getUsers,
  createUser,
};