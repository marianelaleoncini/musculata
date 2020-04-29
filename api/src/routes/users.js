const express = require('express');

const usersController = require('../controllers/users');
const usersValidations = require('../validations/users');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.get(
  '/',
  authenticateToken,
  usersController.getUsers
);

router.post(
  '/',
//  authenticateToken,
  usersValidations.createUser,
  usersController.createUser
);

module.exports = router;
