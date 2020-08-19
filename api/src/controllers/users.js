const firebase = require('firebase-admin');

const User = require('../models/User');
const ErrorHandler = require('../utils/errors/ErrorHandler');
const userService = require('../services/users');
const sendEmail = require('../utils/sendEmail');
const errorMessages = require('../utils/errors/errorMessages');


const createUser = (req, res, next) => { 
  userService.createUser(req)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log(error);
      
      if (error.code) { // firebase auth errors
        error = new ErrorHandler(200, errorMessages.firebaseAuth[error.code]);
      }
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
