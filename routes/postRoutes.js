const express = require('express')
const postRouter = express.Router()
const postController = require('../controller/postController.js')

postRouter.get('/post', postController.getPost)

postRouter.get('/post/:filter', postController.getFilteredPosts)

postRouter.post('/addPost', postController.addPost)

module.exports = postRouter
