const router = require('express').Router();
const { getLastBill, getUserBillType, getBillStatistics } = require('./Bill');
const { logIn } = require('./User');
const { getPersonalInfo } = require('./User');
const { getProviderById } = require('./Provider');

router.get('/api/bill/:bill_type/statistics/:billId', getBillStatistics);
router.get('/api/bill/getBillByType/:bill_type', getLastBill);
router.post('/api/login', logIn);
router.get('/api/profile', getPersonalInfo);
router.get('/api/home', getUserBillType);
router.get('/api/providers/getProviderById/:provider_id', getProviderById);
module.exports = router;
