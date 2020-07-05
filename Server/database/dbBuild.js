const { join } = require('path');

const { readFileSync } = require('fs');

const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'dbBuild.sql')).toString();

connection
  .query(sql)
  .then(() => console.log('build created successfully!'))
  .catch((e) => console.error('failed to build', e.stack));
