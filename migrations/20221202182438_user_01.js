/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.up = function(knex) {
    return  knex.schema.createTable("usersTechView", table => {
        table.increments('id').primary();
        table.string("username").unique();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.integer("badged_id")
        
     })
};
exports.down = function(knex) {
  return knex.schema.dropTable('usersTechView')
};
