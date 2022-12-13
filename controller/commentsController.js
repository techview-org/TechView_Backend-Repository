const Comments = require('../model/commentsModel.js')
const Posts = require('../model/postModel')

const getAllCommentsForPost = async (request, response) => {
  const postId = request.params.postId

  const data = await Comments.grabCommentsFromDB(postId)
  return response.send(data.rows)
}

const createComment = async (request, response) => {
  const commentInfo = request.body
  const maxCommentId = await Comments.grabLatestCommentIdFromDB()
  const newCommentId = await maxCommentId.rows[0].max + 1

  const post = await Comments.createCommentToDB(newCommentId, commentInfo.user_id, commentInfo.post_id, commentInfo.comment)
  return response.send(post.rows[0])
}

module.exports = {
  getAllCommentsForPost,
  createComment
}
