/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    { post_id: 1, user_id: 1, post_title: 'The most asked question', post_description: 'What is the best way to answer the "Tell me about yourself" question?', post_type: 'Behavioral', likes: 4, numberComments:2},
    { post_id: 2, user_id: 2, post_title: 'Dont know where to start', post_description: 'What core concepts are best to study for a tech interview.', post_type: 'Technical', likes: 3, numberComments: 3 },
    { post_id: 3, user_id: 3, post_title: 'Help with this Leetcode question', post_description: 'I was asked to traverse through a binary tree and find the smallest value. How exactly should I approach this.', post_type: 'LeetCode 75', likes: 0, numberComments:5},
    { post_id: 4, user_id: 1, post_title: 'Behavorial is hard', post_description: 'How to be less nervous', post_type: 'Behavioral', likes: 10, numberComments: 6}
  ])
}
