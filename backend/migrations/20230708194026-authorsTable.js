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

exports.up = async function () {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-up.sql');
  try {
    const data = await fs.readFile(filePath, { encoding: 'utf-8' });
    console.log('received data: ' + data);
    await sequelize.query(data);
  } catch (error) {
    console.error('Error during migration:', error);
    throw error; // Lanza el error para que el proceso de migración pueda manejarlo
  }
};

exports.down = async function () {
  const filePath = path.join(__dirname, 'sqls', '20230708194026-authorsTable-down.sql');
  try {
    const data = await fs.readFile(filePath, { encoding: 'utf-8' });
    console.log('received data: ' + data);
    await sequelize.query(data);
  } catch (error) {
    console.error('Error during rollback:', error);
    throw error; // Lanza el error para que el proceso de migración pueda manejarlo
  }
};

exports._meta = {
  version: 1
};
