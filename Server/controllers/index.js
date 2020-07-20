const router = require('express').Router();
const { getLastBill, getUserBillType, getBillStatistics } = require('./Bill');
const { logIn } = require('./User');
const { getPersonalInfo } = require('./User');
const updateUser = require('./User/updateUser');
const getAddressByCity = require('../controllers/Address/getAddressByCity');
const getAllAddresses = require('../controllers/Address/getAllAdresses');
const { signUp } = require('./User');

router.get('/api/bill/:bill_type', getLastBill);
router.get('/api/bill/:bill_type/statistics/:billId', getBillStatistics);
router.get('/api/bill/getBillByType/:bill_type', getLastBill);
router.post('/api/login', logIn);
router.get('/api/profile', getPersonalInfo);
router.get('/api/home', getUserBillType);
router.patch('/api/update', updateUser);
router.get('/api/city/:name', getAddressByCity);
router.get('/api/address', getAllAddresses);
router.post('/api/signup', signUp);

module.exports = router;
