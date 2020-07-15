const router = require('express').Router();
const { getLastBill, getUserBillType } = require('./Bill');
const { logIn } = require('./User');
const { getPersonalInfo } = require('./User');
const { getProviderById } = require('./Provider');

router.get('/api/bill/:bill_type', getLastBill);
router.post('/api/login', logIn);
router.get('/api/profile', getPersonalInfo);
router.get('/api/home', getUserBillType);
router.get('/api/providers/getProviderById/:provider_id', getProviderById);
module.exports = router;
