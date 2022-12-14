const { Pool } = require('pg')

const pool = new Pool({

    database: 'techview',
    user: 'aaronminaya0',
    password: 'Pwmf22gu.'
})

module.exports = pool

// pool.query('SELECT * FROM users', (req,res)=>{
//     console.log(res)
//     pool.end()
// })
