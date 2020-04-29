const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errors/errorMessages');

const confirmRegistration = validate([
  body('password')
    .isLength({ min: 6 })
    .bail()
    .withMessage(errorMessages.minLength(6))
    .custom((value, { req }) => value === req.body.repeatPassword)
    .withMessage(errorMessages.equalPassword),
]);

module.exports = {
  confirmRegistration,
};
