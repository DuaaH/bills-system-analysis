const connection = require('../../connection');

module.exports = (id) => {
  const sql = {
    text:
      'SELECT display_name , phone ,personal_status ,number_of_individuals , number_of_devices FROM users WHERE number_of_devices >2 ;',
    values: [id],
  };
  return connection.query(sql.text, sql.values);
};
