const express = require('express');

const gymsController = require('../controllers/gyms');
const gymsValidations = require('../validations/gyms');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post(
  '/',
  gymsValidations.createGym,
  gymsController.createGym
);

module.exports = router;
