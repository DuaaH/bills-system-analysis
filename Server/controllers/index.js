const router = require('express').Router();
const {
  getLastBill,
  getUserBillType,
  getBillStatistics,
  newBill,
  getBillType,
} = require('./Bill');
const { logIn } = require('./User');
const { logOut } = require('./User');
const { getPersonalInfo } = require('./User');
const updateUser = require('./User/updateUser');
const getAddressByCity = require('./Address/getAddressByCity');
const getAllAddresses = require('./Address/getAllAdresses');
const { signUp } = require('./User');
const authentication = require('../middlewares/authentication');
const { getProviderById, getProviderByType } = require('./Provider');

router.get(
  '/api/bill/:bill_type/statistics/:billId',
  authentication,
  getBillStatistics,
);
router.get('/api/bill/getBillByType/:bill_type', authentication, getLastBill);

router.post('/api/login', logIn);
// router.post('/api/logout', logOut);
router.get('/api/home', authentication, getUserBillType);
router.get('/api/getBillType', getBillType);
router.get('/api/providers/getProviders/:bill_type', getProviderByType);
router.post('/api/new-bill', authentication, newBill);
router.get('/api/profile', authentication, getPersonalInfo);
router.patch('/api/update', authentication, updateUser);

router.get('/api/city/:name', getAddressByCity);
router.get('/api/address', getAllAddresses);
router.post('/api/signup', signUp);
router.post('/api/login', logIn);
router.get('/api/providers/getProviderById/:provider_id', getProviderById);

module.exports = router;
