const Gym = require('../models/Gym');

const createGym = (req) => {
  const { name, phoneNumber, address } = req.body;

  return Gym.create({
    name,
    phoneNumber,
    address,
  });
};

module.exports = {
  createGym,
};
