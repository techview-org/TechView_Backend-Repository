const { Pool } = require('pg')

const pool = new Pool({
  database: 'TECHVIEW',
  user: 'marcy',
  password: 'marcy'
})

module.exports = pool

// pool.query('SELECT * FROM users', (req,res)=>{
//     console.log(res)
//     pool.end()
// })
