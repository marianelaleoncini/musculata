const express = require('express');
const { body } = require('express-validator');

const usersController = require('../controllers/users');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errors/errorMessages');
const userTypes = require('../constants/userTypes');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/',
  validate([
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
    /* body('type').custom(value => {
      const validUserType = userTypes.find(userType => userType === value);
      if (!validUserType) {
        throw new Error('Ingrese un tipo de usuario válido');
      }
    }), */
    body('type')
      .isIn(userTypes)
      .withMessage('Ingrese un tipo de usuario válido')
  ]),
  usersController.createUser
);

module.exports = router;
