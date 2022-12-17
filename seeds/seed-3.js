/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    { comment_id: 1, user_id: 3, post_id: 1, likes: 3,  comment_description: "Well the STAR method definitely is a great place to start! Just be descriptive of your journey to their company, why you love tech, and most importantly let them know why they should want to hire you!" },
    { comment_id: 2, user_id: 4, post_id: 1, likes: 0,  comment_description: "If your API request isn't behaving as expected, there can be many possible reasons. To find out what the problem is, you can use the Postman Console to  your request. This guide also lists common issues and their causes." },
    { comment_id: 3, user_id: 2, post_id: 2, likes: 1,  comment_description: 'Every request sent by Postman is logged in the console, so you can view the detail of what happened when you sent a request.' },
    { comment_id: 4, user_id: 1, post_id: 3, likes: 8,  comment_description: "I was able to solve this using a sliding window technique. Using two pointers you can much easier keep track of the profit within any given range of prices. Hope this helped!" }

  ])
}
