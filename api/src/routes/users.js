const express = require('express');

const usersController = require('../controllers/users');
const usersValidations = require('../validations/users');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/',
  usersValidations,
  usersController.createUser
);

module.exports = router;
