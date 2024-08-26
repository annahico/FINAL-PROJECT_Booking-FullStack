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

const executeSqlFile = async (db, filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(`Executing SQL from: ${filePath}`);
    await db.runSql(data);
  } catch (err) {
    console.error(`Error executing SQL from ${filePath}:`, err);
    throw err;
  }
};

exports.up = async function (db) {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-up.sql');
  await executeSqlFile(db, filePath);
};

exports.down = async function (db) {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-down.sql');
  await executeSqlFile(db, filePath);
};

exports._meta = {
  version: 1
};
