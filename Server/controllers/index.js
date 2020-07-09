const router = require('express').Router();

const { logIn } = require('./User');
const { getPersonalInfo } = require('./User');
const { getUserBillType } = require('./Bill');

router.post('/api/login', logIn);
router.get('/api/profile', getPersonalInfo);
router.get('/api/home', getUserBillType);

module.exports = router;
