const { validationResult } = require('express-validator');
const ErrorHandler = require('../utils/errors/ErrorHandler');

const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const error = new ErrorHandler(422, 'Los datos ingresados no son válidos', errors.array());
    next(error);
  };
};

module.exports = validate;