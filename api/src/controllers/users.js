const User = require('../models/User');

const getUsers = (req, res) => {
  res.status(200).json({
    id: '1',
    name: 'Marianela'
  });
};

const createUser = (req, res) => {
  const { name, lastName, email, password } = req.body;

  User.create({
    name,
    lastName,
    email,
    password
  })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

module.exports = {
  getUsers,
  createUser
};
