const connection = require('../../connection');
const getAllAddresses = () => {
  return connection.query('select city,town ,id from address;');
};

module.exports = { getAllAddresses };
