const express = require('express');

const authController = require('../controllers/auth');
const authValidations = require('../validations/auth');

const router = express.Router();


router.post(
  '/confirmRegistration',
  authValidations.confirmRegistration,
  authController.confirmRegistration
);

router.post(
  '/login',
  authController.login
);

module.exports = router;
