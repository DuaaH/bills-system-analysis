const {
  successMessage,
  internalErrorMessage,
} = require('../../helpers/responseMessage');

const { updateInfo } = require('../../database/query/User/updateUser');

module.exports = (req, res) => {
  const { id } = req.user;
  const userInfo = req.body;
  updateInfo(id, userInfo)
    .then((result) => {
      return res.status(200).json(successMessage(result.rows));
    })
    .catch((err) => {
      console.log('Error in update personal information of current user ', err);
      return res
        .status(501)
        .json(
          internalErrorMessage(
            null,
            'Error Happens in update User  personal information ',
          ),
        );
    });
};
