'use strict';

const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST
});

const executeSqlFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, { encoding: 'utf-8' });
    console.log(`Executing SQL from: ${filePath}`);
    await sequelize.query(data);
  } catch (error) {
    console.error(`Error executing SQL from ${filePath}:`, error);
    throw error;
  }
};

exports.up = async function () {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-up.sql');
  await executeSqlFile(filePath);
};

exports.down = async function () {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-down.sql');
  await executeSqlFile(filePath);
};

exports._meta = {
  version: 1
};
