/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    {post_id: 1, user_id: 1, comment_id: 1, post_description:'I like this post',},
    {post_id: 2, user_id: 2, comment_id: 2, post_description:'I dont like this post',},
    {post_id: 3, user_id: 3, comment_id: 3, post_description:'I trust this source',},
    {post_id: 4, user_id: 2, comment_id: 4, post_description:'I love techView',}
  ]);
};