const router = require('express').Router();

console.log('hello');
const { getPersonalInfo } = require('./User/getPersonalInfo');

router.get('/api/test', (req, res) => {
  res.send({ hello: 'world' });
});
router.get('/api/info', getPersonalInfo);

module.exports = router;
