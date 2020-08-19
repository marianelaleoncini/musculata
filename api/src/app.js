const express = require('express');
const cors = require('cors');
const firebase = require('firebase-admin');
const sequelize = require('./utils/database');

const userRoutes = require('./routes/users');
const gymsRoutes = require('./routes/gyms');
const handleError = require('./utils/errors/handleError');

const app = express();

// eslint-disable-next-line node/no-unpublished-require
const serviceAccount = require('../firebase-key.json');

// Firebase is used for authentication
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://musculata-app.firebaseio.com'
});

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/gyms', gymsRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  handleError(error, res);
});

//The port will be the environment variable PORT if it is defined in our server or 3000 if it is not
const port = process.env.PORT || 3000;

sequelize
  // .sync({force: true})
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening in port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
