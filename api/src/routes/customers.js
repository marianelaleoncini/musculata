const express = require('express');
const { body } = require('express-validator');
const customersController = require('../controllers/customers');
const validate = require('../middlewares/validate');
const errorMessages = require('../utils/errorMessages');

const router = express.Router();

router.get('/', customersController.getCustomers);

router.post('/', validate([
  body('email').isEmail().withMessage(errorMessages.validEmail),
  body('password').isLength({ min: 6 }).withMessage(errorMessages.minLength(6))
]));

module.exports = router;