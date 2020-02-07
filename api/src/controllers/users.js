const User = require('../models/User');
const ErrorHandler = require('../utils/errors/ErrorHandler');
const userService = require('../services/users');
const sendEmail = require('../utils/sendEmail');

const getUsers = (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(() => {
      next(new ErrorHandler(500, 'Hubo un error. Vuelva a intentar nuevamente.'));
    });
};

const createUser = (req, res, next) => {
  userService.createUser(req)
    .then(user => {
      res.status(201).json(user);
      sendEmail(user.email, 'registration');
    })
    .catch(error => {
      if (!error.statusCode) {
        error = new ErrorHandler(500, 'Hubo un error. Vuelva a intentar nuevamente.');
      }
      next(error);
    });
};

module.exports = {
  getUsers,
  createUser
};
