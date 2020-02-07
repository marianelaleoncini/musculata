const express = require('express');

const usersController = require('../controllers/users');
const userValidations = require('../validations/users');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/',
  userValidations.createUser,
  usersController.createUser
);

router.post(
  '/confirmRegistration',
  userValidations.confirmRegistration,
  usersController.confirmRegistration
);

module.exports = router;
