/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('post', table => {
    table.increments('post_id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.string('post_title')
    table.string('post_description')
    table.string('post_type')
    table.integer('likes')
    table.timestamp('post-times').defaultTo(knex.fn.now())
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('post')
}
