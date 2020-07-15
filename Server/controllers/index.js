const router = require('express').Router();
const { getLastBill, getUserBillType } = require('./Bill');
const { logIn } = require('./User');
const { getPersonalInfo } = require('./User');
const { signUp } = require('./User');

router.get('/api/bill/:bill_type', getLastBill);
router.post('/api/login', logIn);
router.get('/api/profile', getPersonalInfo);
router.get('/api/home', getUserBillType);
router.post('/api/signup', signUp);

module.exports = router;
