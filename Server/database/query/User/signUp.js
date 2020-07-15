const bcrypt = require('bcrypt');
const connection = require('../../connection');

// To add new user into users table
const signUp = async (usreData, gid) => {
  const { email, userName, password } = usreData;
  const passwordHash = await bcrypt.hash(password, 10);
  const sql = {
    text:
      'INSERT INTO users (gid, display_name, email, password, email_active) VALUES ($1, $2, $3, $4,$5)',
    values: [gid, userName, email, passwordHash, true],
  };

  return connection.query(sql.text, sql.values);
};

const getEmails = (email) => {
  const sql = {
    text: 'SELECT email FROM users WHERE email=$1',
    values: [email],
  };

  return connection.query(sql.text, sql.values);
};

module.exports = { signUp, getEmails };
