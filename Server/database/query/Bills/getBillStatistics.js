const connection = require('../../connection');

module.exports = (billId, id) => {
  const sql = {
    text: 'SELECT * FROM bill WHERE gid=$1 ',
    values: [billId],
  };

  return connection.query(sql.text, sql.values);
};
