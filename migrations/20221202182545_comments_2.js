/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return  knex.schema.createTable("comments", table => {
        table.increments('comment_id').primary();
        table.integer("user_id").references("id").inTable("usersTechView");
        table.integer("post_id").references("post_id").inTable("post")
        table.string("comment_description")
      
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("comments")
  
};