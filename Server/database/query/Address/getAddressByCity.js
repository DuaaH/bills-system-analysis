const connection = require('../../connection');
module.exports = (city) => {
  console.log(city);
  const sql = {
    text: 'SELECT town ,id FROM address WHERE city=$1;',
    values: [city.name],
  };
  return connection.query(sql.text, sql.values);
};
