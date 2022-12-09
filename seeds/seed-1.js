/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, username: 'user1', email: 'the@gmail.com', password: '123', badged_id: 1 },
    { id: 2, username: 'user2', email: 'world@gmail.com', password: '567', badged_id: 2 },
    { id: 3, username: 'user3', email: 'stop@gmail.com', password: '890', badged_id: 3 }
  ])
}
