const router = require('express').Router();

const { getPersonalInfo } = require('./User');

router.get('/api/profile', getPersonalInfo);
const { getUserBillType } = require('./Bill');

router.get('/api/home', getUserBillType);

module.exports = router;
