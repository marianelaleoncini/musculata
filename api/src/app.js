const express = require('express');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

//The port will be the environment variable PORT if it is defined in our server or 3000 if it is not
const port = process.env.PORT || 3000;

sequelize
  .sync({force: true})
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening in port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
