const firebase = require('firebase-admin');
const User = require('../models/User');

const createUser = (req) => {
  const {
    firstName,
    lastName,
    email,
    role,
    extraInfo,
    medicalCertificate,
    profilePicture,
    phoneNumber,
    emergencyPhoneNumber,
    address,
    confirmedRegistration,
    password,
  } = req.body;

  return firebase
    .auth()
    .createUser({
      email,
      emailVerified: false,
      password,
      displayName: `${firstName} ${lastName}`,
      disabled: false,
    })
    .then((firebaseUser) => {
      return firebase.auth().setCustomUserClaims(firebaseUser.uid, { email, role });
    })
    .then(() => {
      return User.create({
        firstName,
        lastName,
        email,
        role,
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
