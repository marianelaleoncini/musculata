require('dotenv').config();

const firebase = require('firebase-admin');
const ErrorHandler = require('../utils/errors/ErrorHandler');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.replace('Bearer ', ''); // Extract token from "Bearer <token>"

  if (!token) {
    const error = new ErrorHandler(401, 'No está autorizado');
    next(error);
  }

  firebase
    .auth()
    .verifyIdToken(token)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(() => {
      next(new ErrorHandler(401, 'No tiene permisos'));
    });
};

module.exports = authenticateToken;
