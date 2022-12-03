// Update with your config settings.
require("dotenv").config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.MY_DATABASE,
      user: process.env.MY_USERNAME,
      password: process.env.MY_PASSWORD
    }
  },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: process.env.MY_DATABASE,
  //     user: process.env.MY_USERNAME,
  //     password: process.env.MY_PASSWORD
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
