const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errors/errorMessages');
const userTypes = require('../constants/userTypes');

const createUser = validate([
    body('name')
      .notEmpty()
      .withMessage(errorMessages.notEmpty),
    body('lastName')
      .notEmpty()
      .withMessage(errorMessages.notEmpty),
    body('email')
      .isEmail()
      .withMessage(errorMessages.validEmail),
    body('type')
      .isIn(userTypes)
      .withMessage(errorMessages.validUserType),
]);

const confirmRegistration = validate([
    body('password')
      .isLength({ min: 6 })
      .bail()
      .withMessage(errorMessages.minLength(6))
      .custom((value, { req }) => value === req.body.repeatPassword)
      .withMessage(errorMessages.equalPassword)
]);

module.exports = {
  createUser,
  confirmRegistration,
};