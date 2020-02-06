const sgMail = require('@sendgrid/mail');

const User = require('../models/User');
const ErrorHandler = require('../utils/errors/ErrorHandler');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@gmail.com',
  from: 'marianelaleoncini@gmail.com',
  subject: 'Confirmación de Registro',
  html: 'Por favor ingrese al siguiente link para confirmar su registro y generar su contraseña',
};

const getUsers = (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error);
      next(new ErrorHandler(500, 'Hubo un error. Vuelva a intentar nuevamente.'));
    });
};

const createUser = (req, res, next) => {
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
        throw new ErrorHandler(200, 'El usuario ya existe');
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
    })
    .then(user => {
      res.status(201).json(user);
      sgMail.send(msg);
    })
    .catch(error => {
      if (!error.statusCode) {
        error = new ErrorHandler(500, 'Hubo un error. Vuelva a intentar nuevamente.');
      }
      next(error);
    });
};

module.exports = {
  getUsers,
  createUser
};
