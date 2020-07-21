const {
  successMessage,
  internalErrorMessage,
} = require('../../helpers/responseMessage');
const { getAddressByCity } = require('../../database/query/Address');
module.exports = (req, res) => {
  const name = req.params;
  getAddressByCity(name)
    .then((result) => {
      console.log(result);
      return res.status(200).json(successMessage(result.rows));
    })
    .catch((err) => {
      console.log('Error in get  current city for  current user ', err);
      return res
        .status(501)
        .json(
          internalErrorMessage(null, 'Error Happens in get  cuurent city '),
        );
    });
};
