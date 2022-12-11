const Post = require('../model/postModel.js')
const Users = require('../model/userModel')

const getPost = async (request, response) => {
  const data = await Post.grabPostFromDB()
  response.send(data.rows)
}

const addPost = async (request, response) => {
  const postInfo = request.body
  const latestPostId = await Post.grabLatestPostIdFromDB()
  const newPostId = await latestPostId.rows[0].max + 1
  const post = await Post.addPostToDB(newPostId, postInfo.user_id, postInfo.post_title, postInfo.post_description, postInfo.post_type)

  response.send(post)
}

const getFilteredPosts = async (request, response) => {
  const filterValue = request.params.filter
  console.log(filterValue)
  const data = await Post.grabFilteredPostsFromDB(filterValue)
  const filteredPosts = await data.rows

  response.send(filteredPosts)
}

const updateLikes = async (request, response) => {
  const postInfo = request.body
  const username = postInfo.username
  const postTitle = postInfo.postTitle
  const isLiked = postInfo.isLiked

  const data = await Post.grabPostInfoFromDB(username, postTitle)
  const postId = data.rows[0].post_id

  let postWithUpdatedLikes = null
  if (isLiked) {
    postWithUpdatedLikes = await Post.subtractLikesForGivenPostInDB(postId)
  } else {
    postWithUpdatedLikes = await Post.addToLikesForGivenPostInDB(postId)
  }

  response.send(postWithUpdatedLikes.rows[0])
}

module.exports = {
  getPost,
  getFilteredPosts,
  addPost,
  updateLikes
}
