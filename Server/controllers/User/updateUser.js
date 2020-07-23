const {
  successMessage,
  internalErrorMessage,
  failedMessage,
} = require('../../helpers/responseMessage');

const { updateInfo } = require('../../database/query/User/updateUser');
const { personalInfoValidation } = require('../../helpers/Validation');
const { checkTown } = require('../../database/query/Address');

module.exports = (req, res) => {
  const { id } = req.user;

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

  checkTown(userInfo.city, userInfo.town)
    .then((result) => {
      if (result.rowCount === 0) {
        return res
          .status(400)
          .json(
            failedMessage(
              null,
              'Town is not a region of this city. Please re-enter your town.',
            ),
          );
      }
      updateInfo(id, userInfo)
        .then((result) => res.status(200).json(successMessage(result.rows)))
        .catch((err) => {
          console.log(
            'Error in update personal information of current user ',
            err,
          );
          return res
            .status(501)
            .json(
              internalErrorMessage(
                null,
                'Error Happens in update User  personal information ',
              ),
            );
        });
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
