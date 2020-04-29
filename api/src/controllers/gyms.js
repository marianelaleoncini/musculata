const ErrorHandler = require('../utils/errors/ErrorHandler');
const gymService = require('../services/gyms');
const errorMessages = require('../utils/errors/errorMessages');


const createGym = (req, res, next) => {
  gymService.createGym(req)
    .then(gym => {
      res.status(201).json(gym);
    })
    .catch(error => {
      if (!error.statusCode) {
        error = new ErrorHandler(500, errorMessages.genericError);
      }
      next(error);
    });
};

module.exports = {
  createGym,
};
