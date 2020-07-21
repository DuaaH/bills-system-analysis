require('dotenv').config();

const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const { SECRET } = process.env;
const { signUp } = require('../../database/query/User/signUp');
const { getEmails } = require('../../database/query/User/signUp');
const { validatesignupInfo } = require('../../helpers/Validation');

const {
  successMessage,
  internalErrorMessage,
  failedMessage,
} = require('../../helpers/responseMessage');

module.exports = (req, res) => {
  const userData = req.body;

  if (!userData) {
    return res
      .status(501)
      .json(internalErrorMessage(null, 'Internel server error'));
  }

  const { error } = validatesignupInfo(userData);

  if (error) {
    const errorMessage = error.toString().includes('[ref:password]')
      ? "Passwords didn't match. Try again."
      : error.toString().replace('ValidationError:', '');

    return res.status(400).json(failedMessage(null, errorMessage));
  }

  getEmails(userData.email)
    .then((result1) => {
      if (result1.rows[0] !== undefined) {
        return res
          .status(400)
          .json(
            failedMessage(
              null,
              'This email has an account. Please register using another one.',
            ),
          );
      }

      const gid = uuidv4();
      signUp(userData, gid)
        .then((result) => {
          const token = jwt.sign({ gid }, SECRET);
          res.cookie('token', token);
          return res
            .status(200)
            .json(
              successMessage(
                result,
                'Congrates! You are create a new accout successfully.',
              ),
            );
        })
        .catch((err) =>
          res
            .status(501)
            .json(
              internalErrorMessage(
                null,
                'There is a problem happened! Try again.',
              ),
            ),
        );
    })

    .catch((err) =>
      res
        .status(501)
        .json(
          internalErrorMessage(null, 'There is a problem happened! Try again.'),
        ),
    );
};
