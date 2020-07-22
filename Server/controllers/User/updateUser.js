const {
  successMessage,
  internalErrorMessage,
  failedMessage,
} = require('../../helpers/responseMessage');

const { updateInfo } = require('../../database/query/User/updateUser');
const { personalInfoValidation}= require('../../helpers/Validation')
module.exports = (req, res) => {
  const id = 3;
  const userInfo = req.body;
  const { error } = personalInfoValidation(userInfo);
  if (error) {
    return res
      .status(400)
      .json(
        failedMessage(
          null,
          `Oops ! ${error.toString().replace('ValidationError:', '')}`,
        ),
      );
  }
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
