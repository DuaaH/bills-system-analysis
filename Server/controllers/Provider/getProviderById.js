const {
  successMessage,
  internalErrorMessage,
} = require('../../helpers/responseMessage');

const { getProviderByID } = require('../../database/query/Provider');

module.exports = (req, res) => {
  const { provider_id } = req.params;

  getProviderByID(provider_id)
    .then((result) => res.status(200).json(successMessage(result.rows)))
    .catch((err) => {
      console.log('Error in get provider id : ', err);
      return res
        .status(501)
        .json(internalErrorMessage(null, 'Error Happens in get provider id '));
    });
};
