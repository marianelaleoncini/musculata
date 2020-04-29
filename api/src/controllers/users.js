const User = require('../models/User');
const ErrorHandler = require('../utils/errors/ErrorHandler');
const userService = require('../services/users');
const sendEmail = require('../utils/sendEmail');
const errorMessages = require('../utils/errors/errorMessages');


const createUser = (req, res, next) => {
  console.log(req.body);
  
  userService.createUser(req)
    .then(user => {
      res.status(201).json(user);
      sendEmail(user.email, 'registration');
    })
    .catch(error => {
      console.log(error);
      
      if (!error.statusCode) {
        error = new ErrorHandler(500, errorMessages.genericError);
      }
      next(error);
    });
};

const getUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch((error) => {
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
