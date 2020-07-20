const connection = require('../../connection');

module.exports = (gid) => {
  const sql = {
    text: 'SELECT * FROM users WHERE gid=$1',
    values: [gid],
  };

  return connection.query(sql.text, sql.values);
};
