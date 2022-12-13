const express = require('express')
const commentsRouter = express.Router()
const commentController = require('../controller/commentsController.js')

// takes request parameter postId
commentsRouter.get('/comments/:postId', commentController.getAllCommentsForPost)

// takes request body with parameters user_id, post_id, and comment
commentsRouter.post('/new_comment', commentController.createComment)

module.exports = commentsRouter
