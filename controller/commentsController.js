const Comments = require('../model/commentsModel.js')

const getAllCommentsForPost = async (request, response) => {
  const postId = request.params.postId
  const data = await Comments.grabCommentsFromDB(postId)
  return response.send(data.rows)
}

const createComment = async (request, response) => {
  const commentInfo = request.body
  const post = await Users.createAccountToDB(commentInfo.user_id, commentInfo.post_id, commentInfo.likes, commentInfo.comment)
  return response.send(post.rows)
}

module.exports = {
  getAllCommentsForPost,
  createComment
}
