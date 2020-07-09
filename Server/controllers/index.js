const router = require('express').Router();

const { getPersonalInfo } = require('./User');

router.get('/api/profile', getPersonalInfo);

module.exports = router;
