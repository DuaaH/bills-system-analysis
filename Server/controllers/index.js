const router = require('express').Router();

const {  getLastBill } = require('./Bill');

router.get('/api/bill/:bill_type', getLastBill )

module.exports = router;
