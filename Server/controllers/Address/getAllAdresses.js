const {
  successMessage,
  internalErrorMessage,
} = require('../../helpers/responseMessage');
const {
  getAllAddresses,
} = require('../../database/query/Address/getAllAddresses');

module.exports = (req, res) => {
  console.log('defkff;;')
  getAllAddresses()
    .then((result) => {
      console.log('hitoro')
      return res.status(200).json(successMessage(result.rows));
    })
    .catch((err) => {
      console.log('Error in get  Address current user ', err);
      return res
        .status(501)
        .json(internalErrorMessage(null, 'Error Happens in get Address '));
    });
};
