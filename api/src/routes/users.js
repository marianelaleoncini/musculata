const express = require('express');
const { body } = require('express-validator');
const usersController = require('../controllers/users');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errorMessages');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/',
  validate([
    body('email')
      .isEmail()
      .withMessage(errorMessages.validEmail),
    body('password')
      .isLength({ min: 6 })
      .withMessage(errorMessages.minLength(6))
  ]),
  usersController.createUser
);

module.exports = router;
