require('dotenv').config();

const { verify } = require('jsonwebtoken');
const { unauthorizedMessage } = require('../helpers/responseMessage');

const { SECRET } = process.env;
const { getUserId } = require('../database/query/User');

module.exports = (req, res, next) => {
  const token = !req.cookies ? null : req.cookies.token;

  if (!token) {
    return res
      .status(403)
      .json(unauthorizedMessage(null, 'Please Login first.'));
  }

  verify(token, SECRET, (err, result) => {
    if (err) {
      return res
        .status(403)
        .clearCookie('token')
        .json(unauthorizedMessage(null, 'Please Login first.'));
    }
    getUserId(result.gid)
      .then((userData) => {
        if (userData.rowCount === 0) {
          return res
            .status(403)
            .clearCookie('token')
            .json(unauthorizedMessage(null, 'Please Login first.'));
        }
        req.user = userData.rows[0];
        return next();
      })
      .catch((err) =>
        res
          .status(403)
          .clearCookie('token')
          .json(unauthorizedMessage(null, 'Please Login first.')),
      );
  });
};
