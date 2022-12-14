const { Pool } = require('pg')

const pool = new Pool({

    database: 'techView',
    user: 'crislp',
    password: 'kyloren1234'
})

module.exports = pool

// pool.query('SELECT * FROM users', (req,res)=>{
//     console.log(res)
//     pool.end()
// })
