const { grabPostInfoFromDB } = require('../model/postModel.js')
const Post = require('../model/postModel.js')
const Users = require('../model/userModel.js')

const getPost = async (request, response) => {
  const data = await Post.grabPostFromDB()
  response.send(data.rows)
}

const addPost = async (request, response) => {
  const postInfo = request.body
  const userId = await (await Users.grabUserIdGivenUsernamFromDB(postInfo.username)).rows[0].id
  const latestPostId = await Post.grabLatestPostIdFromDB()
  const newPostId = await latestPostId.rows[0].max + 1
  const post = await Post.addPostToDB(newPostId, userId, postInfo.post_title, postInfo.post_description, postInfo.post_type)

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
  const username = request.body.username
  const postTitle = request.body.postTitle
  const isLiked = request.body.isLiked

  const postInfo = await Post.grabPostInfoFromDB(username, postTitle)
  const postId = postInfo.rows[0].post_id

  let postWithUpdatedLikes = null
  if (isLiked) {
    postWithUpdatedLikes = await Post.subtractLikesForGivenPostInDB(postId)
  } else {
    postWithUpdatedLikes = await Post.addToLikesForGivenPostInDB(postId)
  }

  response.send(postWithUpdatedLikes.rows[0])
}

const getSearchPost = async (request, response) => {
  const data = await Post.grabPostFromDBBySearch()
  response.send(data.rows)
}

module.exports = {
  getPost,
  getFilteredPosts,
  addPost,
  updateLikes,
  getSearchPost
}
