const express = require('express');

const usersController = require('../controllers/users');
const userValidations = require('../validations/users');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.get(
  '/',
  authenticateToken,
  usersController.getUsers
);

router.post(
  '/',
  userValidations.createUser,
  usersController.createUser
);

module.exports = router;
