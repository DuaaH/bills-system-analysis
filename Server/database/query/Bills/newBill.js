const connection = require('../../connection');

module.exports = (userId, billData) => {
  const sql = {
    text: `INSERT INTO bill (users_id, provider_id,type ,total_amount, bill_DATE, due_DATE, start_DATE,end_DATE , bill_Number) VALUES 
                     (1 , 1 , 'electricity', 255 , '2020-05-19' , '2020-05-22' , '2020-05-23' , '2020-05-25' , 306)`,
    values: [
      userId,
      billData.providerId,
      billData.type,
      billData.totalAmount,
      billData.billDate,
      billData.dueDate,
      billData.startDate,
      billData.endDate,
      billData.billNumber,
    ],
  };
  return connection.query(sql.text, sql.values);
};
