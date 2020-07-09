const router = require('express').Router();

const { getPersonalInfo } = require('./User');
const { getUserBillType } = require('./Bill');

router.get('/api/profile', getPersonalInfo);
router.get('/api/home', getUserBillType);

module.exports = router;
