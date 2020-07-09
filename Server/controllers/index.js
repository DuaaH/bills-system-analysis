const router = require('express').Router();

const { getUserBillType } = require('./Bill');

router.get('/api/home', getUserBillType);

module.exports = router;
