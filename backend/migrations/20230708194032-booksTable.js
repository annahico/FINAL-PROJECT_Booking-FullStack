'use strict';

const fs = require('fs').promises;
const path = require('path');

let dbm;
let type;
let seed;

exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function (db) {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-up.sql');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('received data: ' + data);
    await db.runSql(data);
  } catch (err) {
    console.error('Error during migration:', err);
    throw err;
  }
};

exports.down = async function (db) {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-down.sql');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('received data: ' + data);
    await db.runSql(data);
  } catch (err) {
    console.error('Error during rollback:', err);
    throw err;
  }
};

exports._meta = {
  version: 1
};
