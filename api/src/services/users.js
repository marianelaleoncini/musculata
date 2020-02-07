const bcrypt = require('bcryptjs');

const User = require('../models/User');
const ErrorHandler = require('../utils/errors/ErrorHandler');
const errorMessages = require('../utils/errors/errorMessages');

const createUser = (req) => {
  const {
    name,
    lastName,
    email,
    type,
    extraInfo,
    medicalCertificate,
    profilePicture,
    phoneNumber,
    emergencyPhoneNumber,
    address,
    confirmedRegistration,
  } = req.body;
  return User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        throw new ErrorHandler(200, errorMessages.existingUser);
      }
      return User.create({
        name,
        lastName,
        email,
        type,
        extraInfo,
        medicalCertificate,
        profilePicture,
        phoneNumber,
        emergencyPhoneNumber,
        address,
        confirmedRegistration,
      });
    });
}

const confirmRegistration = (req) => {
  const { id, password } = req.body;

  return User.findOne({ where: { id } })
    .then(user => {
      if (!user) {
        throw new ErrorHandler(400, errorMessages.nonexistingUser);
      }
      return Promise.all([
        user,
        bcrypt.hash(password, 12),
      ])
    })
    .then(([user, hashedPassword]) => {
      user.password = hashedPassword;
      return user.save();
    })
}

module.exports = {
  createUser,
  confirmRegistration
}