const connection =require('../../connection')

module.exports =  (type) => {
    const sql = {
        text: 'SELECT gid, users_id, provider_id , type , total_amount , bill_DATE  , due_DATE , start_DATE  , end_DATE , bill_Number  FROM bill   WHERE type=$1  ORDER BY bill_DATE desc  limit 5'
        ,values : [type]
    }; 
    console.log(sql)
    return connection.query(sql.text,sql.values);
}