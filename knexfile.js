// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
<<<<<<< HEAD
      database: 'TECHVIEW',
      user: 'marcy',
      password: 'marcy'
=======
      database: 'techview',
      user: 'aaronminaya0',
      password: 'Pwmf22gu.'
>>>>>>> 2344f5d7847b468a2e3f08a483b8c064416b8562
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
