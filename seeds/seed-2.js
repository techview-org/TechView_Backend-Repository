/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    { post_id: 1, user_id: 1, post_title: 'Probably the most asked question', post_description: "How should I best answer the 'Tell me about yourself' question? I understand the STAR method, but just feel like I can't tell a good story, any suggestions?", post_type: 'Behavioral', likes: 4, numberComments:2},
    { post_id: 2, user_id: 2, post_title: 'Dont know where to start', post_description: "What should I be studying in terms of technical concepts. I feel really strong on the Behavorial side, I think I'm very personable, but I struggle most with the technical side of things.", post_type: 'Technical', likes: 3, numberComments: 3 },
    { post_id: 3, user_id: 5, post_title: 'When to sell stock for profit', post_description: "This question has been bothering me so much! I understand I likely have to track the lowest value in the array to reach the maximum profit, but what if the lowest value is at the very end? Wouldn't that mean I would get a profit of 0? Please help!", post_type: 'LeetCode 75', likes: 0, numberComments:5},
    { post_id: 4, user_id: 1, post_title: 'Why X company?', post_description: "I have been putting some thought into my upcoming behavorial interview. Now that I'm here what should I even be researching? The pay is great but theres also the work environment, benefits, etc, where do I even look?", post_type: 'Behavioral', likes: 10, numberComments: 6}
  ])
}
