const connection = require('../../connection');

module.exports = (email) => {
  const sql = {
    text: ' SELECT password, gid, display_name FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql.text, sql.values);
};
