const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    name: library_db,
  }
);

module.exports = sequelize;
