const connection = require('../../connection');
const getAllAddresses = () => {
  return connection.query('select DISTINCT city from address;');
};

module.exports = { getAllAddresses };
