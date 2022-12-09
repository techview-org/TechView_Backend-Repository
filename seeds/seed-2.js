/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    { post_id: 1, user_id: 1, post_title: 'most asked question', post_description: 'how to answer tell me about yourself', post_type: 'Behavioral' },
    { post_id: 2, user_id: 2, post_title: 'Dont know where to start', post_description: 'what to study for a tech interview', post_type: 'Technical' },
    { post_id: 3, user_id: 3, post_title: 'tech view', post_description: 'How to solve stock question', post_type: 'LeetCode 75' },
    { post_id: 4, user_id: 1, post_title: 'behavorial is hard', post_description: 'How to be less nervous', post_type: 'Behavioral' }
  ])
}
