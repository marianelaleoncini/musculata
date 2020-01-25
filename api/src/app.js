const express = require('express');
const customersRoutes = require('./routes/customers');

const app = express();

app.use(express.json());

app.use('/customers', customersRoutes);

//The port will be the environment variable PORT if it is defined in our server or 3000 if it is not
const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Listening in port ${port}`)
});