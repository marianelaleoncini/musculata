require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/User');
const ErrorHandler = require('../utils/errors/ErrorHandler');
const errorMessages = require('../utils/errors/errorMessages');

const jwtKey = process.env.ACCESS_TOKEN_SECRET;
const jwtRefreshKey = process.env.REFRESH_TOKEN_SECRET;

const confirmRegistration = req => {
  const { id, password } = req.body;

  return User.findOne({ where: { id } })
    .then(user => {
      if (!user) {
        throw new ErrorHandler(400, errorMessages.nonexistingUser);
      }
      return Promise.all([
        user,
        bcrypt.hash(password, 12),
      ]);
    })
    .then(([user, hashedPassword]) => {
      user.password = hashedPassword;
      return user.save();
    });
}

const login = req => {
  console.log(req.body);
  
  const { email, password } = req.body;

  return User.findOne({ where: { email } })
    .then(user => {
      console.log(user)
      if (!user) {
        throw new ErrorHandler(401, errorMessages.nonexistingUser);
      }
      return Promise.all([
        user.email,
        bcrypt.compare(password, user.password),
      ]);
    })
    .then(([email, passwordMatch]) => {
      if (!passwordMatch) {
        throw new ErrorHandler(401, errorMessages.wrongPassword);
      }

      const token = jwt.sign({ email }, jwtKey, { expiresIn: '1h' });
      const refreshToken = jwt.sign({ email }, jwtRefreshKey);

      return { token, refreshToken };
    });
}

const refreshToken = req => {
  /* const refreshToken = req.body.token
  if (!refreshToken) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })  */
}

module.exports = {
  confirmRegistration,
  login,
}