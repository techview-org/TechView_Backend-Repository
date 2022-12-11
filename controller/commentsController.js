const Comments = require('../model/commentsModel.js')
const Posts = require('../model/postModel')

const getAllCommentsForPost = async (request, response) => {
  const postInfo = request.body
  const username = postInfo.username
  const postTitle = postInfo.postTitle
  const post = await Posts.grabPostInfoFromDB(username, postTitle)
  const postId = await post.rows[0].post_id

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
