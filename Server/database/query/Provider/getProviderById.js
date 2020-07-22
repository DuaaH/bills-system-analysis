const connection = require('../../connection');

module.exports = (id) => {
  const sql = {
    text: `SELECT * 
          FROM provider
          WHERE id=$1 `,
    values: [id],
  };
  console.log(sql);
  return connection.query(sql.text, sql.values);
};
