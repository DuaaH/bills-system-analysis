const router = require('express').Router();

const { getUserBillType } = require('./Bill');

router.get('/api/user/:userId/home', getUserBillType);

module.exports = router;
