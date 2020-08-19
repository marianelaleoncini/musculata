const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errors/errorMessages');
const userRoles = require('../constants/roles');

const createUser = validate([
  body('firstName')
    .notEmpty()
    .withMessage(errorMessages.notEmpty),
  body('lastName')
    .notEmpty()
    .withMessage(errorMessages.notEmpty),
  body('email')
    .isEmail()
    .withMessage(errorMessages.validEmail),
  body('role')
    .isIn(userRoles)
    .withMessage(errorMessages.validUserRole),
]);

module.exports = {
  createUser,
};