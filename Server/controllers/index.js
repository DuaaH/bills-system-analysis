const router = require('express').Router();
const { logIn } = require('./User');

router.post('/api/login', logIn);

module.exports = router;
