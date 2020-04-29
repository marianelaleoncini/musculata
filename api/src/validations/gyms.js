const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errors/errorMessages');

const createGym = validate([
  body('name')
    .notEmpty()
    .withMessage(errorMessages.notEmpty),
]);

module.exports = {
  createGym,
};