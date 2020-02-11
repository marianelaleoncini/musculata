const authService = require('../services/auth');
const ErrorHandler = require('../utils/errors/ErrorHandler');
const errorMessages = require('../utils/errors/errorMessages');

const confirmRegistration = (req, res, next) => {
  authService.confirmRegistration(req)
    .then(() => {
      res.status(200).json();
    })
    .catch(error => {
      console.log('hola', error);
      
      if (!error.statusCode) {
        error = new ErrorHandler(500, errorMessages.genericError);
      }
      next(error);
    });
}

const login = (req, res, next) => {
  authService.login(req, res)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error)
      if (!error.statusCode) {
        error = new ErrorHandler(500, errorMessages.genericError);
      }
      next(error);
    });
}

module.exports = {
  confirmRegistration,
  login
}