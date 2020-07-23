const connection = require('../../connection');

module.exports = (city, town) => {
  const sql = {
    text: 'select id from address where city=$1 and town=$2',
    values: [city, town],
  };

  return connection.query(sql.text, sql.values);
};
