const express = require('express')
const postRouter = express.Router()
const postController = require('../controller/postController.js')

postRouter.get('/post', postController.getPost)

postRouter.get('/post/:filter', postController.getFilteredPosts)

//takes request body with properties username, post_title, post_description, and post_type
postRouter.post('/addPost', postController.addPost)

// takes request body with properties postId, and isLiked set equal to true or false depending on if the user has already liked the post
postRouter.patch('/updateLikes', postController.updateLikes)

module.exports = postRouter
