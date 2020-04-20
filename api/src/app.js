const express = require('express');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const handleError = require('./utils/errors/handleError');

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  console.log('middleware');
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
