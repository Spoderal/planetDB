const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: `${process.env.USER}`, 
  host: 'localhost',
  database: `${process.env.DATABASE}`,  
  password: `${process.env.PASSWORD}`, 
  port: `${process.env.DB_PORT}`,
});

module.exports = pool;
