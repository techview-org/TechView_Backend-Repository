const { Pool } = require('pg')

const pool = new Pool({
<<<<<<< HEAD
  database: 'TECHVIEW',
  user: 'marcy',
  password: 'marcy'
=======

    database: 'techview',
    user: 'aaronminaya0',
    password: 'Pwmf22gu.'
>>>>>>> 2344f5d7847b468a2e3f08a483b8c064416b8562
})

module.exports = pool

// pool.query('SELECT * FROM users', (req,res)=>{
//     console.log(res)
//     pool.end()
// })
