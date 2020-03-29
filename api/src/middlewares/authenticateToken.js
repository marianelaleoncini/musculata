require('dotenv').config();

const jwt = require('jsonwebtoken')
const ErrorHandler = require('../utils/errors/ErrorHandler');

const jwtKey = process.env.ACCESS_TOKEN_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.replace('Bearer ', ''); // Extract token from "Bearer <token>"

  if (!token) {
    const error = new ErrorHandler(401, 'No está autorizado');
    next(error);
  }

  jwt.verify(token, jwtKey, (error, user) => {
    if (error) {
      next(new ErrorHandler(401, 'No tiene permisos'));
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;