/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {comment_id: 1, user_id: 1, post_id: 1, comment_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
    {comment_id: 2, user_id: 1, post_id: 1, comment_description: "If your API request isn't behaving as expected, there can be many possible reasons. To find out what the problem is, you can use the Postman Console to troubleshoot your request. This guide also lists common issues and their causes."},
    {comment_id: 3, user_id: 2, post_id: 2, comment_description:"Every request sent by Postman is logged in the console, so you can view the detail of what happened when you sent a request."},
    {comment_id: 4, user_id: 3, post_id: 3, comment_description:"You will get an error message if Postman isn't able to send your request, or if it doesn't receive a response from the API you sent the request to. "}
    
  ]);
};
