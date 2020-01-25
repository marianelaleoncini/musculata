const getCustomers = (req, res) => {
  res.status(200).json({
    id: '1',
    name: 'Marianela'
  });
}

const createCustomer = (req, res) => {
  res.status(200).json('OK');
}

module.exports = {
  getCustomers,
  createCustomer,
}