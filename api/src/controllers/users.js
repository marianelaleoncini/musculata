const User = require('../models/User');
const ErrorHandler = require('../utils/errors/ErrorHandler');
const userService = require('../services/users');
const sendEmail = require('../utils/sendEmail');
const errorMessages = require('../utils/errors/errorMessages');


const createUser = (req, res, next) => {
  userService.createUser(req)
    .then(user => {
      res.status(201).json(user);
      sendEmail(user.email, 'registration');
    })
    .catch(error => {
      if (!error.statusCode) {
        error = new ErrorHandler(500, errorMessages.genericError);
      }
      next(error);
    });
};

const getUsers = (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(() => {
      if (!error.statusCode) {
        error = new ErrorHandler(500, errorMessages.genericError);
      }
      next(error);
    });
};


module.exports = {
  createUser,
  getUsers,
};
