module.exports = (req, res) => {
  res
    .clearCookie('token')
    .sendStatus(204)
    .end(req.cookies.token);
};
