/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    { post_id: 1, user_id: 1, post_description: 'how to answer tell me about yourself' },
    { post_id: 2, user_id: 2, post_description: 'what to study for a tech interview' },
    { post_id: 3, user_id: 3, post_description: 'I love techView it has answer everything' },
    { post_id: 4, user_id: 1, post_description: 'How to be less nervous' }
  ])
}
