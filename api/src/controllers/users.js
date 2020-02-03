const sgMail = require('@sendgrid/mail');

const User = require('../models/User');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'marianelaleoncini@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

const getUsers = (req, res) => {
  res.status(200).json({
    id: '1',
    name: 'Marianela'
  });
};

const createUser = (req, res) => {
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
  User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        throw new Error('EXISTING_USER');
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
      })
    })
    .then(user => {
      sgMail.send(msg);

      res.status(201).json(user);
    })
    .catch(error => {
      if (error.message === 'EXISTING_USER') {
        res.status(200).json({
          error: 'El usuario ya existe'
        });
      } else {
        res.status(500).json({ error: error.errors ? error.errors[0].message : error });
      }
    });
};

module.exports = {
  getUsers,
  createUser
};
