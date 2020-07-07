const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

require('dotenv').config();

const { SECRET } = process.env;
const { logIn } = require('../../database/query/User/index');
const {
  successMessage,
  internalErrorMessage,
  faildLoginMessage,
  unauthorizedMessage,
} = require('../../helpers/responseMessage');

const createToken = (email, gid, display_name, secret) =>
  sign({ email, gid, display_name }, secret);

module.exports = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json(faildLoginMessage(null, 'All Fields are Required!'));
  }

  logIn(email)
    .then((result) => {
      if (!result || result.rows.length === 0) {
        res.status(400).json(faildLoginMessage(null, "Email doesn't found"));
      }

      const hashPassword = result.rows[0].password;
      bcrypt.compare(password, hashPassword, (err, result2) => {
        if (err) {
          return res
            .status(400)
            .json(
              faildLoginMessage(null, 'Make sure of your email or password'),
            );
        }

        if (result2) {
          const { gid, display_name } = result.rows[0];
          const token = createToken(email, gid, display_name, SECRET);
          return res
            .cookie('token', token, { maxAge: 900000, httpOnly: true })
            .status(200)
            .json(
              successMessage(
                { status: 'success', gid },
                'You are login successfully',
              ),
            );
        }
        res
          .status(403)
          .json(unauthorizedMessage(null, "Email and password doesn't match"));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
