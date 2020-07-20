const router = require('express').Router();
const { getLastBill, getUserBillType, getBillStatistics } = require('./Bill');
const { logIn } = require('./User');
const { getPersonalInfo } = require('./User');
const { signUp } = require('./User');
const authentication = require('../middlewares/authentication');

router.get(
  '/api/bill/:bill_type/statistics/:billId',
  authentication,
  getBillStatistics,
);
router.get('/api/bill/getBillByType/:bill_type', authentication, getLastBill);
router.post('/api/login', logIn);
router.get('/api/profile', authentication, getPersonalInfo);
router.get('/api/home', authentication, getUserBillType);
router.post('/api/signup', signUp);

module.exports = router;
