const {Pool} = require('pg')


const pool = new Pool({
  database: 'techView',
  user: "emmanuel",
  password: "2413",
})

module.exports = pool;

// pool.query('SELECT * FROM users', (req,res)=>{
//     console.log(res)
//     pool.end()
// })