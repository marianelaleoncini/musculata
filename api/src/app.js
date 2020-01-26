const express = require('express');
const sequelize = require('./utils/database');
const usersRoutes = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);

//The port will be the environment variable PORT if it is defined in our server or 3000 if it is not
const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    
    app.listen(port, () => {
      console.log(`Listening in port ${port}`);
    });
  })
  .catch(error => {
    console.log(error);
  });
