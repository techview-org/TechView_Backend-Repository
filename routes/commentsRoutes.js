const express = require('express')
const commentsRouter = express.Router()
const commentController = require('../controller/commentsController.js')

commentsRouter.get('/comments', commentController.getAllCommentsForPost)

commentsRouter.post('/new_comment', commentController.createComment)

module.exports = commentsRouter
