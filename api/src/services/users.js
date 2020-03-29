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
};

module.exports = {
  createUser,
};