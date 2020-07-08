require('dotenv').config();
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { validateEmail } = require('../../helpers/Validation');

const { SECRET } = process.env;
const { logIn } = require('../../database/query/User/index');
const {
  successMessage,
  internalErrorMessage,
  faildLoginMessage,
  faildMessage,
} = require('../../helpers/responseMessage');

// To create user token
const createToken = (email, gid, display_name, secret) =>
  sign({ email, gid, display_name }, secret);

module.exports = (req, res) => {
  const { email, password } = req.body;
  const { error } = validateEmail({ email });

  // If user type his/her email incorrectly
  if (error !== undefined) {
    return res
      .status(400)
      .json(
        faildLoginMessage(
          null,
          'Make sure that you type your email in a correct way',
        ),
      );
  }

  // If user doesn't enter his/her email or password or both of them
  if (!email || !password) {
    return res.status(400).json(faildMessage(null, 'All Fields are Required!'));
  }

  // TO get password for the entered email from database
  logIn(email)
    .then((result) => {
      // If the email isn't in the database
      if (!result || result.rows.length === 0) {
        res
          .status(404)
          .json(faildLoginMessage(null, 'Make sure of your email or password'));
      }

      // Make a cryption for the entered password to ensure that is match one stored in the database
      const hashPassword = result.rows[0].password;
      bcrypt.compare(password, hashPassword, (err, result2) => {
        // If there is a server error
        if (err) {
          return res
            .status(501)
            .json(internalErrorMessage(null, 'internal error with the server'));
        }

        // If there is a result
        if (result2) {
          const { gid, display_name } = result.rows[0];
          const token = createToken(email, gid, display_name, SECRET);
          // Success login process
          return res
            .cookie('token', token, { maxAge: 900000, httpOnly: true })
            .status(200)
            .json(
              successMessage(
                { status: 'success', gid },
                'You are logged in successfully',
              ),
            );
        }

        // If Password and email doesn't match
        res
          .status(403)
          .json(faildLoginMessage(null, 'Make sure of your email or password'));
      });
    })

    .catch((err) =>
      res
        .status(501)
        .json(internalErrorMessage(null, 'internal error with the server')),
    );
};
