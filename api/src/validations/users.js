const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errors/errorMessages');
const userTypes = require('../constants/userTypes');

const validations = validate([
    body('name')
      .notEmpty()
      .withMessage(errorMessages.notEmpty),
    body('lastName')
      .notEmpty()
      .withMessage(errorMessages.notEmpty),
    body('email')
      .isEmail()
      .withMessage(errorMessages.validEmail),
    body('password')
      .isLength({ min: 6 })
      .withMessage(errorMessages.minLength(6)),
    body('type')
      .isIn(userTypes)
      .withMessage(errorMessages.validUserType),
]);

module.exports = validations;