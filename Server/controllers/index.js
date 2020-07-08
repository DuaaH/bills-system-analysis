const router = require('express').Router();


const { getPersonalInfo } = require('./User');


router.get('/api/info', getPersonalInfo);

module.exports = router;
