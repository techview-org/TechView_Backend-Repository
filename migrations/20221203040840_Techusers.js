/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("users", table => {
        table.increments('id').primary();
        table.string("username").unique();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.integer("badged_id")
        
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users")
};
