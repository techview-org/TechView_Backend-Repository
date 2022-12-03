/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return  knex.schema.createTable("post", table => {
        table.increments('post_id').primary();
        table.integer("user_id").references('id').inTable("usersTechView");
        table.integer("comment_id");
        table.string("post_description");
        table.timestamp("post-times").defaultTo(knex.fn.now())
     })
   
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("post")
};