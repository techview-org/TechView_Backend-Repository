require("dotenv").config()
const {Pool} = require('pg')


const pool = new Pool({
  database: process.env.MY_DATABASE,
  user: process.env.MY_USERNAME,
  password: process.env.MY_PASSWORD,
})

module.exports = pool;