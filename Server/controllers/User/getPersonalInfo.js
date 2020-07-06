const {
  successMessage,
  internalErrorMessage,
} = require('../../helpers/responseMessage');
 const { getPersonalInfo} = require ('../../database/query/User/getPersonalInfo');
 
module.exports = (req, res) => {
  const id = 1;

  getPersonalInfo(id)
    .then((result) => {
      return res.status(200).json(successMessage(result.rows));
    })
    .catch((err) => {
      console.log('Error in get  current user', { ...err });
      return res.json(
        internalErrorMessage(null, 'Error Happens in get  user information '),
      );
    });
};
